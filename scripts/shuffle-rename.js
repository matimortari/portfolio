import { randomUUID } from "node:crypto"
import { readdir, rename } from "node:fs/promises"
import { extname, join } from "node:path"

const INPUT_DIR = ".data/photos"

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[items[i], items[j]] = [items[j], items[i]]
  }
  return items
}

async function main() {
  try {
    const entries = await readdir(INPUT_DIR, { withFileTypes: true })
    const files = entries.filter(e => e.isFile()).map(e => e.name)
    if (files.length === 0) {
      console.log(`No files found in ${INPUT_DIR}`)
      return
    }
    const plan = shuffle(files).map((name, i) => ({
      from: name,
      tmp: `${randomUUID()}${extname(name)}`,
      to: `${String(i + 1).padStart(3, "0")}${extname(name).toLowerCase()}`,
    }))
    for (const p of plan) {
      await rename(join(INPUT_DIR, p.from), join(INPUT_DIR, p.tmp))
    }
    for (const p of plan) {
      await rename(join(INPUT_DIR, p.tmp), join(INPUT_DIR, p.to))
    }
    console.log(`Renamed ${plan.length} files in ${INPUT_DIR}`)
  }
  catch (err) {
    console.error("Error:", err.message)
    process.exit(1)
  }
}

main()
