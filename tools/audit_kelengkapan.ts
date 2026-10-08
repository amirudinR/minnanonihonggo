/**
 * Audit KELENGKAPAN data bab (bukan validasi kebenaran isi).
 * Jalankan: npx tsx tools/audit_kelengkapan.ts
 *
 * Menampilkan tabel jumlah item per bagian + daftar anomali
 * (bagian kosong / sangat sedikit / tidak cocok dengan manifest audio / file audio hilang).
 */
import { existsSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import type { Bab } from '../src/types/bab'
import { audioManifest } from '../src/core/audio/manifest'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const dataDir = join(root, 'src', 'data')
const audioDir = join(root, 'public', 'audio')

const dirs = readdirSync(dataDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && /^bab\d+$/.test(d.name))
  .map((d) => d.name)
  .sort()

const babs: Bab[] = []
for (const dir of dirs) {
  if (!existsSync(join(dataDir, dir, 'index.ts'))) continue
  const mod = (await import(`../src/data/${dir}/index.ts`)) as { default: Bab }
  babs.push(mod.default)
}
babs.sort((a, b) => a.no - b.no)

const pad = (s: string | number, n: number) => String(s).padStart(n)
const problems: string[] = []

console.log(
  'bab | kos  bun  cat  rei  kai  rA  rB  rC  mon  bunS  kon  ctx  audio',
)
console.log('-'.repeat(78))

for (const b of babs) {
  const audioAda = b.mondai.filter((m) => m.audio).length
  const man = audioManifest.find((a) => a.bab === b.no)
  const baris = [
    pad(b.no, 3),
    pad(b.kosakata.length, 4),
    pad(b.bunpou.length, 4),
    pad(b.catatanTataBahasa?.length ?? 0, 4),
    pad(b.reibun.length, 4),
    pad(b.kaiwa?.dialog.length ?? 0, 4),
    pad(b.renshuuA.length, 3),
    pad(b.renshuuB.length, 3),
    pad(b.renshuuC.length, 3),
    pad(b.mondai.length, 4),
    pad(b.bunsho?.length ?? 0, 5),
    pad(b.konteks?.length ?? 0, 4),
    pad(b.rangkuman ? 'y' : '-', 3),
    pad(`${audioAda}/${man?.mondai.length ?? 0}`, 5),
  ].join(' ')
  console.log(baris)

  if (!b.kosakata.length) problems.push(`bab${b.no}: kosakata kosong`)
  if (b.kosakata.length < 8)
    problems.push(`bab${b.no}: kosakata cuma ${b.kosakata.length} (perlu cek PDF)`)
  if (!b.bunpou.length) problems.push(`bab${b.no}: bunpou kosong`)
  if (!b.reibun.length) problems.push(`bab${b.no}: reibun kosong`)
  if (!b.kaiwa || b.kaiwa.dialog.length < 4)
    problems.push(`bab${b.no}: kaiwa kurang (${b.kaiwa?.dialog.length ?? 0} baris)`)
  if (!b.renshuuA.length) problems.push(`bab${b.no}: renshuuA kosong`)
  if (!b.renshuuB.length) problems.push(`bab${b.no}: renshuuB kosong`)
  // 練習C baru ada sejak 第14課 di buku MNN1 → bab 1–13 wajar kosong.
  if (b.no >= 14 && !b.renshuuC.length)
    problems.push(`bab${b.no}: renshuuC kosong (buku punya 練習C sejak bab 14)`)
  if (!b.mondai.length) problems.push(`bab${b.no}: mondai kosong`)
  if (audioAda !== (man?.mondai.length ?? 0))
    problems.push(
      `bab${b.no}: mondai ber-audio ${audioAda} != manifest ${man?.mondai.length ?? 0}`,
    )
  if (b.kaiwa && !b.kaiwa.audio)
    problems.push(`bab${b.no}: kaiwa tanpa audio`)
  // `konteks` OPSIONAL (hanya dipakai bila buku punya tabel konteks latihan,
  // mis. Bab 1). Kosong BUKAN masalah → jangan dilaporkan.
  // Pola bunpou tanpa contoh: banyak pola memang murni catatan (mis. penggolongan
  // kata kerja, bentuk て) → hanya dilaporkan bila pola punya penjelasan pendek
  // (kemungkinan pola 文型 biasa) SUPAYA catatan panjang tidak jadi false positive.
  const polaTanpaContoh = b.bunpou.filter(
    (x) => x.contoh.length === 0 && (x.penjelasan?.length ?? 0) < 80 && !x.sub?.length,
  )
  if (polaTanpaContoh.length)
    problems.push(
      `bab${b.no}: ${polaTanpaContoh.length} pola bunpou tanpa contoh (cek: ${polaTanpaContoh
        .map((x) => x.no)
        .join(',')})`,
    )
}

// --- file audio fisik vs manifest ---
if (existsSync(audioDir)) {
  const files = readdirSync(audioDir).filter((f) => f.endsWith('.mp3'))
  const expected = new Set<string>()
  for (const a of audioManifest) {
    if (a.kaiwa) expected.add(a.kaiwa.split('/').pop() as string)
    for (const m of a.mondai) expected.add(m.split('/').pop() as string)
  }
  const yok = files.filter((f) => expected.has(f))
  const takAda = [...expected].filter((f) => !files.includes(f)).sort()
  const takDipakai = files.filter((f) => !expected.has(f)).sort()
  const ukuran = files.reduce((s, f) => s + statSync(join(audioDir, f)).size, 0)

  console.log(`\naudio: ${files.length} mp3 (${(ukuran / 1048576).toFixed(1)} MB), manifest butuh ${expected.size}`)
  console.log(`  dipakai manifest : ${yok.length}`)
  console.log(`  HILANG           : ${takAda.length}${takAda.length ? ' -> ' + takAda.slice(0, 30).join(', ') : ''}`)
  console.log(`  tidak dirujuk    : ${takDipakai.length}${takDipakai.length ? ' -> ' + takDipakai.slice(0, 30).join(', ') : ''}`)
} else {
  console.log('\n[!] public/audio tidak ada di repo ( memang di-gitignore)')
}

console.log(`\nTotal bab: ${babs.length}`)
console.log(`Anomali kelengkapan: ${problems.length}`)
for (const p of problems) console.log('  - ' + p)