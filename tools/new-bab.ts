/**
 * Scaffold folder bab baru. Jalankan: `npm run add:bab <N>` (N = 1..99)
 * Membuat 8 file di `src/data/babNN/` berisi placeholder + checklist
 * dari `docs/BAB-TEMPLATE.md` (bukan kosong melompong). Registry
 * (`src/data/index.ts` import.meta.glob) otomatis mengenali folder baru.
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const arg = process.argv[2]
const no = Number(arg)

if (!arg || !Number.isInteger(no) || no < 1 || no > 99) {
  console.error('Pakai: npm run add:bab <N>   (N = 1..99)')
  process.exit(1)
}

const nn = String(no).padStart(2, '0')
const dir = join(root, 'src', 'data', `bab${nn}`)
if (existsSync(dir)) {
  console.error(`Folder sudah ada: src/data/bab${nn} — isi manual atau pilih nomor lain.`)
  process.exit(1)
}

const H = `/**
 * Bab ${no} — TODO.
 *
 * Checklist (docs/BAB-TEMPLATE.md + AGENTS.md §2):
 * - Offset halaman: Honsatsu idx = cetak + 21; Indonesia idx = cetak + 20.
 *   Bab mulai cetak dilihat dari ToC Honsatsu (bukan rumus 8N-2!).
 * - Teks JP WAJIB diverifikasi visual (render 1800px), JANGAN pakai OCR.
 * - kaiwa.dialog[].arti 1:1 dari PDF Indonesia "Percakapan".
 * - mondai listening -> kunciTersedia:false + instruksi (bukan jawaban:'').
 * - bunsho/rangkuman hanya bila buku punya; kalau tidak -> [] / tidak ditaruh.
 * - Kalimat berkanji wajib furigana; jalankan 'npm run validate'.
 */
`

const files: Record<string, string> = {
  'index.ts': `import type { Bab } from '@/types/bab'
import { kosakata } from './kosakata'
import { bunpou, catatanTataBahasa } from './bunpou'
import { reibun } from './reibun'
import { kaiwa } from './kaiwa'
import { renshuuA, renshuuB, renshuuC } from './renshuu'
import { mondai } from './mondai'
import { konteks } from './konteks'

const bab${nn}: Bab = {
  no: ${no},
  topik: 'TODO topik bab',
  kosakata,
  bunpou,
  catatanTataBahasa,
  reibun,
  kaiwa,
  renshuuA,
  renshuuB,
  renshuuC,
  mondai,
  konteks,
  bunsho: [],
}

export default bab${nn}
`,
  'kosakata.ts': `${H}import type { KosaKata } from '@/types/bab'

// TODO: salin dari buku section I. id unik: k${nn}-01, k${nn}-02, ...
export const kosakata: KosaKata[] = []
`,
  'bunpou.ts': `${H}import type { Bunpou } from '@/types/bab'

// TODO: pola 文型 (umumnya 4). Contoh & arti dari "Terjemahan Pola Kalimat" PDF Indonesia.
export const bunpou: Bunpou[] = []

// TODO: catatan tata bahasa (の, ～さん, dll.) — penomoran MULAI DARI 1, terpisah dari bunpou.
export const catatanTataBahasa: Bunpou[] = []
`,
  'reibun.ts': `${H}import type { ReibunItem } from '@/types/bab'

// TODO: contoh kalimat + arti dari PDF Indonesia (1:1, jangan karangan).
export const reibun: ReibunItem[] = []
`,
  'kaiwa.ts': `${H}import type { Kaiwa } from '@/types/bab'

// TODO: judul + audio (public/audio/bab${nn}_kaiwa.mp3) + dialog.
// dialog[].arti WAJIB dari PDF Indonesia. Furigana untuk kalimat berkanji.
export const kaiwa: Kaiwa = {
  judul: 'TODO judul kaiwa',
  audio: '/audio/bab${nn}_kaiwa.mp3',
  dialog: [],
}
`,
  'renshuu.ts': `${H}import type { RenshuuItem } from '@/types/bab'

// TODO: 練習 A / B / C (C baru ada sejak 第14課 di MNN1).
export const renshuuA: RenshuuItem[] = []
export const renshuuB: RenshuuItem[] = []
export const renshuuC: RenshuuItem[] = []
`,
  'mondai.ts': `${H}import type { MondaiItem } from '@/types/bab'

// TODO: 問題 1-2 biasanya listening (ikon telinga) -> kunciTersedia:false + instruksi.
// Audio: /audio/bab${nn}_mondai1.mp3 ... jumlah track = MONDAI_COUNT di
// src/core/audio/manifest.ts (JANGAN hardcode).
export const mondai: MondaiItem[] = []
`,
  'konteks.ts': `${H}import type { Konteks } from '@/types/bab'

// TODO: tabel acuan untuk 練習B (mis. daftar orang). Boleh [] bila buku tidak punya.
export const konteks: Konteks[] = []
`,
}

mkdirSync(dir, { recursive: true })
for (const [nama, isi] of Object.entries(files)) {
  writeFileSync(join(dir, nama), isi, 'utf8')
  console.log(`  dibuat src/data/bab${nn}/${nama}`)
}
console.log(
  `\nSelesai. Langkah: isi data dari PDF (verifikasi visual!) lalu \`npm run validate\` dan \`npm run map\`.`,
)
