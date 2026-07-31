import { mkdir, readdir } from "node:fs/promises"
import { basename, extname, join } from "node:path"
import sharp from "sharp"

const INPUT_DIR = ".data/photos/original"
const OUTPUT_DIR = ".data/photos/compressed"
const MAX_WIDTH = 1920
const MAX_HEIGHT = 1920
const QUALITY = 85

async function compressImage(inputPath, outputPath) {
  try {
    await sharp(inputPath).resize(MAX_WIDTH, MAX_HEIGHT, { fit: "inside", withoutEnlargement: true }).jpeg({ quality: QUALITY, mozjpeg: true }).toFile(outputPath)
    console.log(`Compressed: ${basename(inputPath)}`)
  }
  catch (err) {
    console.error(`Failed to compress ${basename(inputPath)}:`, err.message)
  }
}

async function main() {
  try {
    await mkdir(OUTPUT_DIR, { recursive: true })
    const files = await readdir(INPUT_DIR)
    const imageFiles = files.filter((file) => {
      const ext = extname(file).toLowerCase()
      return [".jpg", ".jpeg", ".png", ".webp"].includes(ext)
    })
    if (imageFiles.length === 0) {
      console.log(`No images found in ${INPUT_DIR}`)
      return
    }
    for (const file of imageFiles) {
      await compressImage(join(INPUT_DIR, file), join(OUTPUT_DIR, file.replace(/\.(png|webp)$/i, ".jpg")))
    }
  }
  catch (err) {
    console.error("Error:", err.message)
    process.exit(1)
  }
}

main()
