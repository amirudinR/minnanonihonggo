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

/**
 * Bandingkan jawaban user vs kunci buku.
 * - 'tepat' : identik (setelah normalisasi) atau user menjawab seluruh kunci.
 * - 'dekat' : user menjawab salah satu bagian benar (multi-blank), atau
 *             kemiripan token tinggi (>= 0.75).
 * - 'belum' : tidak cocok.
 *
 * `e.includes(u)` semantik lama dipertahankan (user boleh mengisi sebagian
 * blank) TAPI dengan ambang minimum panjang agar 1 karakter tidak lolos.
 */
export function matchLevel(user: string, expected: string): MatchLevel {
  const u = canonical(user)
  const e = canonical(expected)
  if (!u || !e) return 'belum'

  if (u === e) return 'tepat'

  // user menjawab superset dari kunci (menulis lebih lengkap)
  if (u.length >= 4 && (u.includes(e) || e.includes(u))) return 'tepat'

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
