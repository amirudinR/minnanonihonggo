export interface Furigana {
  base: string
  ruby: string
}

export interface KosaKata {
  id: string
  kana: string
  kanji?: string
  romaji?: string
  arti: string
  audio?: string
  catatan?: string
  contoh?: string
  furigana?: Furigana[]
  kategori?: 'kata_ganti' | 'sapaan' | 'profesi' | 'tempat' | 'usia' | 'negara' | 'fiksi' | 'ungkapan'
}

export interface Bunpou {
  no: number
  pola: string
  penjelasan: string
  contoh: string[]
  artiContoh: string[]
  furigana?: Furigana[]
  sub?: { judul: string; isi: string }[]
}

export interface ReibunItem {
  kalimat: string
  arti: string
  audio?: string
  pembicara?: string
  furigana?: Furigana[]
}

export interface KaiwaItem {
  no: number
  pembicara: string
  teks: string
  arti?: string
  furigana?: Furigana[]
}

export interface Kaiwa {
  judul?: string
  audio?: string
  dialog: KaiwaItem[]
}

export interface RenshuuItem {
  no: number
  soal: string
  jawaban?: string
  arti?: string
}

export type MondaiJenis = 'pilihan_ganda' | 'jawaban_pendek' | 'mencocokkan' | 'mendengarkan'

export interface MondaiItem {
  no: number
  jenis: MondaiJenis
  soal: string
  pilihan?: string[]
  jawaban?: string
  audio?: string
  audioButir?: Record<string, string>
  arti?: string
  instruksi?: string
  kunciTersedia?: boolean
  konteks?: Konteks[]
  furigana?: Furigana[]
}

export interface Konteks {
  judul?: string
  teks?: string
}

export interface Bunsho {
  judul?: string
  teks: string
  arti?: string
}

/**
 * Latihan menyusun kalimat (sentence building) — fokus pola bunpou bab.
 * User menyusun `kata` (yang diacak) menjadi kalimat yang sama dengan `jawaban`.
 */
export interface SusunItem {
  /** unik dalam satu bab, mis. "s1" */
  id: string
  /** arti Indonesia — jadi petunjuk soal */
  arti: string
  /** kata/partikel yang harus diurutkan (biasanya sudah diacak saat render) */
  kata: string[]
  /** kalimat Jepang lengkap & benar (dibanding via canonical()) */
  jawaban: string
  /** pola bunpou yang dilatih, mis. "～は ～です" */
  fokus?: string
  /** penjelasan singkat, tampil setelah dikoreksi */
  penjelasan?: string
}

/**
 * Soal kuis tata bahasa (pilihan ganda) — 5 soal untuk SETIAP pola.
 *
 * Sumber: diturunkan dari `contoh`/`artiContoh` pola bersangkutan + kosakata bab
 * yang sama (pola tidak diubah). Lihat aturan di AGENTS.md §2.
 */
export interface SoalBunpou {
  /** unik dalam satu bab, mis. "b1-1-2" */
  id: string
  /** kelompok pola sumber: 文型 (`bunpou`) atau Catatan Tata Bahasa (`catatanTataBahasa`) */
  grup: 'bunpou' | 'catatan'
  /** merujuk `no` pola di grup tersebut */
  no: number
  /** kalimat rumpang — WAJIB memuat "___" */
  soal: string
  /** terjemahan/petunjuk Indonesia */
  arti: string
  /** jawaban benar — WAJIB ada di `pilihan`. "（なし）" = tanpa partikel/akhiran */
  jawaban: string
  /** 4 opsi jawaban (termasuk `jawaban`), tanpa duplikat */
  pilihan: string[]
}

export interface Bab {
  no: number
  topik: string
  kosakata: KosaKata[]
  bunpou: Bunpou[]
  catatanTataBahasa?: Bunpou[]
  reibun: ReibunItem[]
  kaiwa: Kaiwa | null
  renshuuA: RenshuuItem[]
  renshuuB: RenshuuItem[]
  renshuuC: RenshuuItem[]
  mondai: MondaiItem[]
  bunsho: Bunsho[]
  rangkuman?: string
  konteks?: Konteks[]
  /** latihan menyusun kalimat (opsional → bab lama tetap valid) */
  susun?: SusunItem[]
  /** soal kuis per pola bunpou/catatan (opsional → bab lama tetap valid) */
  bunpouSoal?: SoalBunpou[]
}
