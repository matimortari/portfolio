import { readdir, rm, writeFile } from "node:fs/promises"
import { basename, extname, join } from "node:path"
import sharp from "sharp"

const INPUT_DIR = ".data/photos"
const MAX_WIDTH = 1920
const MAX_HEIGHT = 1920
const QUALITY = 85

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

async function main() {
  try {
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
      await compressImage(join(INPUT_DIR, file))
    }
  }
  catch (err) {
    console.error("Error:", err.message)
    process.exit(1)
  }
}

main()
