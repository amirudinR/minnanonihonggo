/**
 * Pencarian terarah untuk AI/dev. Jalankan: `npm run find <kata> [kata2...]`
 * Cari di KODE (src non-data), DATA (src/data), TOOLS, DOKUMEN (docs + *.md).
 * Semua kata harus muncul di baris yang sama (AND). Output terkelompok + ringkas.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, relative } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const args = process.argv.slice(2).filter((a) => !a.startsWith('-'))

if (args.length === 0) {
  console.log('Pakai: npm run find <kata> [kata2...]')
  console.log('Contoh: npm run find kunciTersedia  ·  npm run find 神戸病院  ·  npm run find TOTAL')
  process.exit(1)
}

const MAKS_PER_Grup = 40

function filesIn(dir: string, exts: string[]): string[] {
  const out: string[] = []
  let ents: ReturnType<typeof readdirSync>
  try {
    ents = readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const e of ents) {
    const full = join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue
      out.push(...filesIn(full, exts))
    } else if (exts.some((x) => e.name.endsWith(x))) {
      out.push(full)
    }
  }
  return out
}

const dataDir = join(root, 'src', 'data')
const grup: { nama: string; file: string[] }[] = [
  {
    nama: 'KODE',
    file: filesIn(join(root, 'src'), ['.ts', '.tsx']).filter((f) => !f.startsWith(dataDir)),
  },
  { nama: 'DATA', file: filesIn(dataDir, ['.ts']) },
  { nama: 'TOOLS', file: filesIn(join(root, 'tools'), ['.ts', '.mjs', '.py']) },
  {
    nama: 'DOKUMEN',
    file: [
      ...filesIn(join(root, 'docs'), ['.md']),
      ...['AGENTS.md', 'PLAN.md', 'README.md']
        .map((f) => join(root, f))
        .filter((p) => statSync(p).isFile()),
    ],
  },
]

let total = 0
for (const g of grup) {
  const hits: string[] = []
  for (const f of g.file) {
    const lines = readFileSync(f, 'utf8').split('\n')
    lines.forEach((line, i) => {
      if (args.every((k) => line.includes(k))) {
        const rel = relative(root, f).replace(/\\/g, '/')
        hits.push(`${rel}:${i + 1}  ${line.trim().slice(0, 150)}`)
      }
    })
  }
  if (hits.length) {
    console.log(`\n== ${g.nama} (${hits.length}) ==`)
    hits.slice(0, MAKS_PER_Grup).forEach((h) => console.log(h))
    if (hits.length > MAKS_PER_Grup) {
      console.log(`… +${hits.length - MAKS_PER_Grup} temuan lain (persempit kata kunci)`)
    }
    total += hits.length
  }
}
console.log(`\nTotal: ${total} temuan untuk [${args.join(' ')}]`)
