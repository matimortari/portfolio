import { execFile as execFileCallback } from "node:child_process"
import { randomUUID } from "node:crypto"
import { readdir, readFile, rename, rm, writeFile } from "node:fs/promises"
import { basename, extname, join } from "node:path"
import { promisify } from "node:util"
import convert from "heic-convert"
import sharp from "sharp"

const INPUT_DIR = ".data/photos"
const PHOTOS_FILE = "app/utils/photos.ts"
const MAX_WIDTH = 1920
const MAX_HEIGHT = 1920
const QUALITY = 85
const VIDEO_CRF = 28
const IMAGE_EXTS = [".jpg", ".jpeg", ".png", ".webp"]
const HEIC_EXTS = [".heic", ".heif"]
const VIDEO_EXTS = [".mov", ".mp4"]
const execFile = promisify(execFileCallback)

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[items[i], items[j]] = [items[j], items[i]]
  }
  return items
}

async function compressImage(inputPath) {
  try {
    const outputPath = inputPath.replace(/\.(jpeg|png|webp)$/i, ".jpg")
    const buffer = await sharp(inputPath).rotate().resize(MAX_WIDTH, MAX_HEIGHT, { fit: "inside", withoutEnlargement: true }).jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer()
    await writeFile(outputPath, buffer)
    if (outputPath !== inputPath) {
      await rm(inputPath)
    }
    console.log(`Compressed: ${basename(inputPath)}`)
  }
  catch (err) {
    console.error(`Failed to compress ${basename(inputPath)}:`, err.message)
  }
}

async function compressImages() {
  const files = await readdir(INPUT_DIR)
  const imageFiles = files.filter(file => IMAGE_EXTS.includes(extname(file).toLowerCase()))
  for (const file of imageFiles) {
    await compressImage(join(INPUT_DIR, file))
  }
}

async function convertHeic(inputPath) {
  try {
    const buffer = await readFile(inputPath)
    const jpeg = await convert({ buffer, format: "JPEG", quality: 1 })
    const outputPath = inputPath.replace(/\.(heic|heif)$/i, ".jpg")
    await writeFile(outputPath, jpeg)
    await rm(inputPath)
    console.log(`Converted: ${basename(inputPath)}`)
  }
  catch (err) {
    console.error(`Failed to convert ${basename(inputPath)}:`, err.message)
  }
}

async function convertHeics() {
  const files = await readdir(INPUT_DIR)
  const heicFiles = files.filter(file => HEIC_EXTS.includes(extname(file).toLowerCase()))
  for (const file of heicFiles) {
    await convertHeic(join(INPUT_DIR, file))
  }
}

async function compressVideo(inputPath) {
  const outputPath = inputPath.replace(/\.mov$/i, ".mp4")
  const tempPath = outputPath.replace(/\.mp4$/i, ".tmp.mp4")
  try {
    await execFile("ffmpeg", [
      "-y",
      "-hide_banner",
      "-loglevel",
      "error",
      "-i",
      inputPath,
      "-vf",
      "scale=w='min(1920,iw)':h='min(1920,ih)':force_original_aspect_ratio=decrease:force_divisible_by=2",
      "-c:v",
      "libx264",
      "-crf",
      String(VIDEO_CRF),
      "-preset",
      "medium",
      "-pix_fmt",
      "yuv420p",
      "-movflags",
      "+faststart",
      tempPath,
    ])
    await rename(tempPath, outputPath)
    if (inputPath !== outputPath) {
      await rm(inputPath)
    }
    console.log(`Compressed: ${basename(inputPath)}`)
  }
  catch (err) {
    await rm(tempPath, { force: true })
    console.error(`Failed to compress ${basename(inputPath)}:`, err.stderr || err.message)
  }
}

async function compressVideos() {
  const files = await readdir(INPUT_DIR)
  const videoFiles = files.filter(file => VIDEO_EXTS.includes(extname(file).toLowerCase()))
  for (const file of videoFiles) {
    await compressVideo(join(INPUT_DIR, file))
  }
}

async function shuffleRename() {
  const entries = await readdir(INPUT_DIR, { withFileTypes: true })
  const files = entries.filter(entry => entry.isFile()).map(entry => entry.name)
  if (files.length === 0) {
    console.log(`No photos found in ${INPUT_DIR}`)
    return
  }
  const plan = shuffle(files).map((name, i) => ({
    from: name,
    tmp: `${randomUUID()}${extname(name)}`,
    to: `${String(i + 1).padStart(3, "0")}${extname(name).toLowerCase()}`,
  }))
  for (const step of plan) {
    await rename(join(INPUT_DIR, step.from), join(INPUT_DIR, step.tmp))
  }
  for (const step of plan) {
    await rename(join(INPUT_DIR, step.tmp), join(INPUT_DIR, step.to))
  }
  console.log(`Renamed ${plan.length} files in ${INPUT_DIR}`)
}

async function readSize(file) {
  const filePath = join(INPUT_DIR, file)
  if (extname(file).toLowerCase() === ".mp4") {
    const { stdout } = await execFile("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", filePath])
    const [width, height] = stdout.trim().split(",").map(Number)
    return { width, height }
  }
  const { width, height } = await sharp(filePath).metadata()
  return { width, height }
}

async function syncNames() {
  const files = (await readdir(INPUT_DIR)).filter(name => /^\d+\.\w+$/.test(name)).sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
  if (files.length === 0) {
    return
  }
  const source = await readFile(PHOTOS_FILE, "utf8")
  const existing = [...source.matchAll(/\{ id: \d+, type: "(?:image|video)", url: `\$\{R2_BASE_URL\}\/[^`]+`, width: (\d+), height: (\d+) \}/g)]
  const marker = "export const PHOTOS: Photo[] = ["
  const start = source.indexOf(marker)
  const end = source.indexOf("\n]", start)
  if (start === -1 || end === -1) {
    throw new Error(`Could not find PHOTOS in ${PHOTOS_FILE}`)
  }
  const lines = []
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const type = extname(file).toLowerCase() === ".mp4" ? "video" : "image"
    const size = existing[i] ? { width: existing[i][1], height: existing[i][2] } : await readSize(file)
    if (!size.width || !size.height) {
      throw new Error(`Could not read dimensions for ${file}`)
    }
    lines.push(`  { id: ${i + 1}, type: "${type}", url: \`\${R2_BASE_URL}/${file}\`, width: ${size.width}, height: ${size.height} },`)
  }
  const next = `${source.slice(0, start)}${marker}\n${lines.join("\n")}${source.slice(end)}`
  await writeFile(PHOTOS_FILE, next)
  console.log(`Updated ${files.length} photos in ${PHOTOS_FILE}`)
}

async function main() {
  try {
    await convertHeics()
    await compressImages()
    await compressVideos()
    await shuffleRename()
    await syncNames()
  }
  catch (err) {
    console.error("Error:", err.message)
    process.exit(1)
  }
}

main()
