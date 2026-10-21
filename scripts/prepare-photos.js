import { randomUUID } from "node:crypto"
import { readdir, readFile, rename, rm, writeFile } from "node:fs/promises"
import { basename, extname, join } from "node:path"
import sharp from "sharp"

const INPUT_DIR = ".data/photos"
const PHOTOS_FILE = "app/utils/photos.ts"
const MAX_WIDTH = 1920
const MAX_HEIGHT = 1920
const QUALITY = 85
const IMAGE_EXTS = [".jpg", ".jpeg", ".png", ".webp"]

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

async function syncNames() {
  const files = (await readdir(INPUT_DIR)).filter(name => /^\d+\.\w+$/.test(name)).sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
  if (files.length === 0) {
    return
  }
  const source = await readFile(PHOTOS_FILE, "utf8")
  const entries = source.match(/type: "(?:image|video)", url: `\$\{R2_BASE_URL\}\/[^`"]+/g) ?? []
  if (entries.length !== files.length) {
    throw new Error(`PHOTOS has ${entries.length} entries but ${INPUT_DIR} has ${files.length} files`)
  }
  let index = 0
  const next = source.replace(/type: "(?:image|video)", url: `\$\{R2_BASE_URL\}\/[^`"]+/g, () => {
    const file = files[index++]
    const type = extname(file).toLowerCase() === ".mp4" ? "video" : "image"
    return `type: "${type}", url: \`\${R2_BASE_URL}/${file}`
  })
  await writeFile(PHOTOS_FILE, next)
  console.log(`Updated ${files.length} photos in ${PHOTOS_FILE}`)
}

async function main() {
  try {
    await compressImages()
    await shuffleRename()
    await syncNames()
  }
  catch (err) {
    console.error("Error:", err.message)
    process.exit(1)
  }
}

main()
