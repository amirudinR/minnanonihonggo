/**
 * Gabungan seluruh partikel dari 6 file kelompok menjadi SATU array `partikel`.
 *
 * Urutan di sini = urutan tampil default di halaman /partikel, jadi SENGAJA
 * disusun mengikuti urutan asli (dari pelajaran dasar ke lanjutan), BUKAN
 * sekadar concat per kelompok.
 */

import { dasar } from './dasar'
import { tempatArah } from './tempat-arah'
import { waktu } from './waktu'
import { penghubung } from './penghubung'
import { akhir } from './akhir'
import { lanjutan } from './lanjutan'
import type { Partikel } from '../tipe'

/** Ambil beberapa partikel dari array sumber berdasarkan `bentuk` (urutan tetap). */
function pilih(sumber: Partikel[], ...bentuk: string[]): Partikel[] {
  return bentuk.map((b) => {
    const p = sumber.find((x) => x.bentuk === b)
    if (!p) throw new Error(`Partikel tidak ditemukan: ${b}`)
    return p
  })
}

/** Seluruh 38 partikel, urut sesuai urutan asli. */
export const partikel: Partikel[] = [
  ...pilih(dasar, 'は', 'が', 'を'),
  ...pilih(tempatArah, 'に', 'へ', 'で'),
  ...pilih(penghubung, 'と', 'も', 'の'),
  ...pilih(waktu, 'から / まで'),
  ...pilih(penghubung, 'や'),
  ...pilih(lanjutan, 'だけ'),
  ...pilih(lanjutan, 'しか ～ません'),
  ...pilih(penghubung, 'より / ほど'),
  ...pilih(lanjutan, 'ながら', 'ので', 'のに'),
  ...pilih(penghubung, 'し'),
  ...pilih(lanjutan, 'ても / でも', 'たら / ば / なら / と', 'ばかり'),
  ...pilih(akhir, 'か', 'ね / よ'),
  ...pilih(penghubung, 'にも / でも (Partikel + も)'),
  ...pilih(dasar, 'では / には / とは'),
  ...pilih(akhir, 'って'),
  ...pilih(penghubung, 'など', 'とか'),
  ...pilih(lanjutan, 'くらい / ぐらい', 'しか ～ない (Perhatian)', 'こそ'),
  ...pilih(akhir, 'かしら / かな', 'のに (akhir kalimat)'),
  ...pilih(waktu, 'までに'),
  ...pilih(lanjutan, 'ば / たら (Penekanan)', 'ところ', 'ながら (Perhatian)'),
  ...pilih(penghubung, 'だの / たり ～たり'),
]
