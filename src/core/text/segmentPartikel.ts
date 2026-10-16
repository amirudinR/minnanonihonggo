/**
 * Segmentasi unit `susun` jadi token halus untuk MODE AHLI.
 * Tujuan: user ikut menyusun PARTIKEL (は/が/を/…) dan akhiran verba (ます/て/た),
 * bukan cuma bongkahan besar seperti `わたしは` / `マイク・ミラーです`.
 *
 * Prinsip:
 *  - Murni, tanpa React, tanpa kamus eksternal.
 *  - KONSERVATIF: kalau ragu JANGAN pecah. Lebih kasar = boleh; salah pecah = bug.
 *  - Gabungan token (tanpa pemisah) WAJIB sama dengan masukan (kanonik).
 *    Invariant dijaga `tools/validate_susun.ts`.
 */

export const BANTUAN = [
  'ませんでした', 'じゃありません', 'じゃなかった', 'くありません',
  'ありませんでした', 'ましょうか', 'ませんか', 'ましょう', 'ません',
  'ました', 'でしょう', 'ですか', 'ですね', 'でした', 'だった',
  'ます', 'じゃ', 'では', 'です', 'だ',
]

export const PARTIKEL = [
  'ばかり', 'ながら', 'とおりに', 'ぐらい', 'くらい', 'までに', 'のに',
  'ので', 'けど', 'ても', 'ごろ', 'ころ', 'とか', 'から', 'まで', 'より',
  'だけ', 'しか', 'など', 'には', 'とは', 'は', 'が', 'を', 'に', 'へ',
  'で', 'と', 'も', 'か', 'の', 'や', 'ね', 'よ',
]

/** Akhiran verba & sifat. Bare `た/て/い/く` rawan → wajib batang ber-kanji. */
export const VERBA = ['ないで', 'なかった', 'ない', 'て', 'た']
export const SIFAT = ['かった', 'くない', 'くて', 'い', 'く']

/** Ungkapan yang TIDAK boleh pecah walau menyerupai akhiran (ditemukan dari data). */
export const JANGAN_PECAH = new Set<string>([
  'あした', 'あさって', 'きのう', 'きょう', 'どうして', 'どうやって',
  'とても', 'ちょっと', 'そして', 'また', 'まだ', 'ずっと', 'もっと',
  'きっと', 'はじめて', '初めて', 'ください', 'おいて', 'みんな',
  'はい', 'いい', 'ええ', 'うん', 'まあ', 'あまり', 'たくさん',
  'よく', 'だいたい', 'たいてい', 'しばらく', 'どのくらい', 'どのぐらい',
  'ちょうど', 'ずいぶん', 'なるべく', 'なるほど', 'いつも', 'ときどき',
])

const KANJI = /[\u3400-\u9fff\u3005]/
const panjangTurun = (a: string, b: string) => b.length - a.length
const urut = (arr: readonly string[]) => [...arr].sort(panjangTurun)

export const BANTUAN_URUT = urut(BANTUAN)
export const PARTIKEL_URUT = urut(PARTIKEL)
export const VERBA_URUT = urut(VERBA)
/**
 * Catatan: pemotongan akhiran kata sifat (`い`/`く`) SENGAJA TIDAK dipakai.
 * Bahayanya terlalu besar (mis. `がくせいじゃ` → `がくせ + い + じゃ`,
 * `きれい` → `きれ + い`, `お手洗い` → `お手洗 + い`) dan manfaatnya kecil.
 * Verba + partikel sudah memberi latihan yang cukup sulit.
 */
export const SIFAT_URUT: string[] = []

export interface OpsiSegmentasi {
  /** Kata (kana/kanji) yang dianggap dikenal — mis. dari kosakata bab. */
  kataDikenal?: ReadonlySet<string>
}

export const adaKanji = (s: string) => KANJI.test(s)

const dikenal = (s: string, opsi: OpsiSegmentasi) =>
  !!s && !!opsi.kataDikenal?.has(s)

/** Batang dianggap aman: ber-kanji (boleh 1), atau kana ≥2 yang dikenal / ≥3. */
const batangAman = (b: string, opsi: OpsiSegmentasi) =>
  adaKanji(b) || (b.length >= 2 && (dikenal(b, opsi) || b.length >= 3))

/** Batang untuk akhiran verba: HARUS ber-kanji atau kata dikenal (boleh 1 kanji). */
const batangVerba = (b: string, opsi: OpsiSegmentasi) =>
  adaKanji(b) || (b.length >= 2 && dikenal(b, opsi))

/** Coba potong satu akhiran dari daftar; kembalikan batang baru atau null. */
function potong(
  batang: string,
  daftar: readonly string[],
  opsi: OpsiSegmentasi,
  cekBatang: (b: string, akhiran: string, o: OpsiSegmentasi) => boolean,
): { batang: string; akhiran: string } | null {
  for (const s of daftar) {
    if (!batang.endsWith(s) || batang.length <= s.length) continue
    const b = batang.slice(0, -s.length)
    if (cekBatang(b, s, opsi)) return { batang: b, akhiran: s }
  }
  return null
}

/** Pecah satu bagian tanpa spasi jadi [batang, ...akhiran] (urutan asli). */
export function pecahBagian(unit: string, opsi: OpsiSegmentasi = {}): string[] {
  if (JANGAN_PECAH.has(unit) || unit.length <= 1) return [unit]
  const ekor: string[] = []
  let batang = unit
  let jalan = true
  while (jalan && batang.length > 1) {
    jalan = false
    const langkah =
      potong(batang, BANTUAN_URUT, opsi, (b, _s, o) => batangAman(b, o)) ??
      potong(batang, PARTIKEL_URUT, opsi, (b, _s, o) => batangAman(b, o)) ??
      potong(batang, VERBA_URUT, opsi, (b, _s, o) => batangVerba(b, o))
    if (langkah) {
      ekor.unshift(langkah.akhiran)
      batang = langkah.batang
      jalan = true
    }
  }
  return [batang, ...ekor]
}

/** Pecah satu unit `kata` (boleh mengandung spasi) jadi token halus. */
export function pecahUnit(unit: string, opsi: OpsiSegmentasi = {}): string[] {
  const hasil: string[] = []
  for (const bagian of unit.split(' ')) {
    if (bagian) hasil.push(...pecahBagian(bagian, opsi))
  }
  return hasil.length > 0 ? hasil : [unit]
}

/** Pecah daftar unit `kata` jadi token mode ahli (urutan dipertahankan). */
export function segmentAhli(
  units: readonly string[],
  opsi: OpsiSegmentasi = {},
): string[] {
  return units.flatMap((u) => pecahUnit(u, opsi))
}
