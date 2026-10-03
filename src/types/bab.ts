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
  konteks?: { judul?: string; teks?: string }[]
  furigana?: Furigana[]
}

export interface Bunsho {
  judul?: string
  teks: string
  arti?: string
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
  konteks?: { judul?: string; teks?: string }[]
}
