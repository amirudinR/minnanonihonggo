// Hilangkan penanda nomor butir seperti "1)", "1.", "1、", "①", "1:", "1/"
export function stripEnumerators(s: string): string {
  return s
    .replace(/\d+\s*[)\]．.,、）:：/]/g, ' ')
    .replace(/[①②③④⑤⑥⑦⑧⑨⑩]/g, ' ')
}

// Normalisasi untuk dibandingkan: simpan hanya hira/katakana/kanji + angka + latin
export function canonical(s: string): string {
  return stripEnumerators(s)
    .replace(/[^぀-ゟ゠-ヿ一-龯ｦ-ﾟ0-9A-Za-z]+/g, '')
    .toLowerCase()
}

// Pecah menjadi token (per kata) setelah normalisasi ringan
export function tokens(s: string): string[] {
  return s
    .replace(/[（(][^）)]*[）)]/g, ' ') // buang isi dalam tanda kurung utk perbandingan utama
    .replace(/[、。,.!?！？・「」『』\[\]【】…]/g, ' ')
    .split(/[\s～~]+/)
    .map((t) => canonical(t))
    .filter(Boolean)
}

export type MatchLevel = 'tepat' | 'dekat' | 'belum'

/** Partikel dan akhiran gramatikal boleh "hilang" tanpa mengubah benar/salah. */
const BOLEH_BEDA = new Set([
  // partikel
  'は', 'が', 'を', 'に', 'へ', 'で', 'と', 'も', 'か', 'の', 'や', 'ね', 'よ',
  // akhiran gramatikal
  'です', 'ます', 'ました', 'ません', 'ませんでした', 'でした', 'だ', 'だった',
  'ましょう', 'ませんか', 'ましょうか', 'でしょう', 'じゃ', 'では',
])

/** Ubah string panjang jadi string pendek + buang akhiran yang berulang. */
function buangAkhiran(panjang: string, pendek: string): string | null {
  let a = panjang
  let b = pendek
  // syarat awal: yang panjang diawali yang pendek
  if (!a.startsWith(b)) return null
  let ekor = ''
  // buang akhiran berlapis (mis. "がくせいです" → "がくせい" → "がくせ")
  while (a.length > b.length) {
    let potong = false
    for (const s of BOLEH_BEDA) {
      if (a.endsWith(s) && a.length - s.length >= b.length) {
        ekor = s + ekor
        a = a.slice(0, -s.length)
        potong = true
        break
      }
    }
    if (!potong) return null
  }
  return a === b ? ekor : null
}

/**
 * Bandingkan jawaban user vs kunci buku.
 * - 'tepat' : identik, atau selisihnya HANYA partikel/akhiran gramatikal.
 * - 'dekat' : user menjawab sebagian benar (multi-blank), kemiripan token tinggi.
 * - 'belum' : tidak cocok (termasuk beda kata kerja: `いきます` vs `きます`).
 *
 * Sejak BUG-4 diperketat: `u.includes(e)` TIDAK lagi otomatis 'tepat'. Dulu
 * `いきます` dianggap benar untuk `きます` (kata kerja salah lolos). Sekarang
 * selisih harus partikel/akhiran (`は`/`が`/`か`/`です`/`ます` …).
 */
export function matchLevel(user: string, expected: string): MatchLevel {
  const u = canonical(user)
  const e = canonical(expected)
  if (!u || !e) return 'belum'

  if (u === e) return 'tepat'

  // Selisih murni partikel/akhiran (mis. user tulis "がくせい" untuk "がくせいです")
  if (u.length >= 3 && e.length >= 3) {
    const [panjang, pendek] = u.length >= e.length ? [u, e] : [e, u]
    if (buangAkhiran(panjang, pendek) !== null) return 'tepat'
  }

  // kecocokan sebagian untuk jawaban multi-bagian: bandingkan token
  const tu = tokens(user)
  const te = tokens(expected)
  if (te.length > 1 || tu.length > 1) {
    const common = tu.filter((t) => te.includes(t)).length
    if (common > 0) {
      const ratio = common / Math.max(te.length, 1)
      if (ratio >= 0.75) return 'tepat'
      if (ratio > 0) return 'dekat'
    }
  }

  return 'belum'
}

export function isCorrect(user: string, expected: string): boolean {
  return matchLevel(user, expected) === 'tepat'
}

/** Jawaban dianggap "terisi" bila user mengetik sesuatu yang cukup panjang. */
export function adaJawaban(user: string | undefined): boolean {
  return Boolean(user && canonical(user).length > 0)
}

// Hitung skor benar dari daftar pasangan (jawabanUser, jawabanBuku)
export function countCorrect(
  pairs: { user: string; expected: string }[],
): { benar: number; total: number } {
  const total = pairs.length
  const benar = pairs.filter((p) => isCorrect(p.user, p.expected)).length
  return { benar, total }
}
