/**
 * Tipe & konstanta untuk data partikel (助詞).
 * Dipisah dari data agar modul data tetap kecil & mudah dirawat.
 *
 * Aturan penulisan:
 * - `jp` = kalimat Jepang apa adanya (furigana tidak ditampilkan di sini).
 * - `id` = terjemahan Indonesia yang wajar.
 * - `bab` = nomor pelajaran MNN (I & II) tempat partikel ini diperkenalkan/dibahas.
 *   Diambil dari pemetaan pola bunpou tiap bab; bersifat "lihat bab" bukan hak paten.
 */

export interface ContohPartikel {
  /** kalimat Jepang */
  jp: string
  /** terjemahan Indonesia */
  id: string
}

/**
 * Fungsi/keterangan partikel pada satu bab tertentu.
 * Diturunkan dari materi bunpou bab bersangkutan (pola 文型 / catatan tata bahasa),
 * bukan teks baru yang dikarang. Lihat `perBab` di tiap partikel.
 */
export interface FungsiBab {
  /** nomor bab (harus anggota `bab` partikel ini) */
  bab: number
  /** fungsi singkat pada bab ini (judul panel) */
  fungsi: string
  /** keterangan lengkap pada bab ini (kalimat penjelas, bukan potongan 1 baris) */
  keterangan: string
  /** contoh khas bab ini (opsional; bila kosong pakai contoh global) */
  contoh?: ContohPartikel[]
}

export type KelompokPartikel =
  | 'dasar'
  | 'tempat-arah'
  | 'waktu'
  | 'penghubung'
  | 'akhir'
  | 'lanjutan'

export interface Partikel {
  /** bentuk partikel, mis. "は" */
  bentuk: string
  /** romaji, mis. "wa" */
  romaji: string
  /** fungsi singkat (judul kartu) */
  fungsi: string
  /** penjelasan detail (Indonesia) */
  penjelasan: string
  /** contoh pemakaian */
  contoh: ContohPartikel[]
  /** nomor bab MNN terkait */
  bab: number[]
  /** kelompok untuk filter */
  kelompok: KelompokPartikel
  /**
   * Keterangan partikel per bab. Bila diisi, kartu menampilkan keterangan
   * spesifik bab tsb (di samping keterangan global `penjelasan`).
   * Setiap `bab` di sini WAJIB anggota `bab` di atas.
   */
  perBab?: FungsiBab[]
}

/** Daftar kelompok (untuk filter & badge kartu). */
export const KELOMPOK: { id: KelompokPartikel; label: string }[] = [
  { id: 'dasar', label: 'Dasar' },
  { id: 'tempat-arah', label: 'Tempat & Arah' },
  { id: 'waktu', label: 'Waktu' },
  { id: 'penghubung', label: 'Penghubung' },
  { id: 'akhir', label: 'Akhir Kalimat' },
  { id: 'lanjutan', label: 'Lanjutan' },
]
