// Skrip sekali pakai: daftarkan `susun` di semua src/data/babNN/index.ts
// - tambahkan `import { susun } from './susun'` setelah baris import terakhir
// - tambahkan `susun,` setelah `bunsho: [],`
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const root = join(process.cwd(), 'src', 'data')
const dirs = readdirSync(root).filter((d) => /^bab\d+$/.test(d))

let changed = 0
for (const d of dirs) {
  const idx = join(root, d, 'index.ts')
  const susunFile = join(root, d, 'susun.ts')
  if (!existsSync(idx) || !existsSync(susunFile)) continue
  let s = readFileSync(idx, 'utf8')
  let did = false

  if (!/from '\.\/susun'/.test(s)) {
    // sisipkan setelah baris import terakhir
    const lines = s.split(/\r?\n/)
    let lastImport = -1
    for (let i = 0; i < lines.length; i++) {
      if (/^import\s/.test(lines[i])) lastImport = i
    }
    if (lastImport >= 0) {
      lines.splice(lastImport + 1, 0, "import { susun } from './susun'")
      s = lines.join('\n')
      did = true
    }
  }

  if (!/\n\s*susun,/.test(s)) {
    // tambahkan koma bila belum ada, lalu sisipkan `susun,`
    s = s.replace(/(\n\s*bunsho: \[\])(,?)/, (m, p1, p2) => `${p1},${p2}\n  susun,`)
    did = true
  }

  if (did) {
    writeFileSync(idx, s)
    changed++
  }
}
console.log(`daftar susun: ${changed} index.ts diubah dari ${dirs.length} bab`)
