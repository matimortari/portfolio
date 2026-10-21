import { readdir, readFile } from "node:fs/promises"
import { extname, join } from "node:path"
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

const INPUT_DIR = ".data/photos"
const KEY_PREFIX = "photos"
const CONTENT_TYPES = { ".jpg": "image/jpeg", ".mp4": "video/mp4" }

function requiredEnv(name) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing ${name}`)
  }
  return value
}

async function main() {
  const bucket = requiredEnv("R2_BUCKET_NAME")
  const client = new S3Client({
    region: "auto",
    endpoint: requiredEnv("R2_ENDPOINT"),
    credentials: { accessKeyId: requiredEnv("R2_ACCESS_KEY_ID"), secretAccessKey: requiredEnv("R2_SECRET_ACCESS_KEY") },
  })
  const files = (await readdir(INPUT_DIR)).filter(name => /^\d+\.\w+$/.test(name)).sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
  if (files.length === 0) {
    console.log(`No photos found in ${INPUT_DIR}`)
    return
  }
  for (const file of files) {
    const contentType = CONTENT_TYPES[extname(file).toLowerCase()]
    if (!contentType) {
      throw new Error(`Unsupported file ${file}`)
    }
    await client.send(new PutObjectCommand({
      Bucket: bucket,
      Key: `${KEY_PREFIX}/${file}`,
      Body: await readFile(join(INPUT_DIR, file)),
      ContentType: contentType,
    }))
    console.log(`Uploaded: ${file}`)
  }
}

try {
  await main()
}
catch (err) {
  console.error("Error:", err.message)
  process.exit(1)
}
