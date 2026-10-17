import type { MondaiItem, SusunItem } from '@/types/bab'
import { nomorBabTersedia } from './load'
import { getMeta } from './meta'

/**
 * Muat HANYA yang dibutuhkan halaman latihan campuran (susun + mendengarkan):
 * `susun` dan `mondai` per bab — bukan seluruh isi bab (kosakata/bunpou/reibun/
 * kaiwa/renshuu/konteks/bunsho).
 *
 * Dengan begitu halaman itu tidak mengunduh ±50% data bab yang tak dipakai.
 */
export interface BabLatihan {
  no: number
  topik: string
  susun: SusunItem[]
  mondai: MondaiItem[]
}

const modulSusun = import.meta.glob<{ susun: SusunItem[] }>('./bab*/susun.ts')
const modulMondai = import.meta.glob<{ mondai: MondaiItem[] }>('./bab*/mondai.ts')

const kunciBab = (no: number) => `./bab${String(no).padStart(2, '0')}`

export async function loadLatihanCampuran(): Promise<BabLatihan[]> {
  return Promise.all(
    nomorBabTersedia().map(async (no) => {
      const k = kunciBab(no)
      const ms = modulSusun[`${k}/susun.ts`]
      const mm = modulMondai[`${k}/mondai.ts`]
      const [s, m] = await Promise.all([ms ? ms() : null, mm ? mm() : null])
      return {
        no,
        topik: getMeta(no)?.topik ?? '',
        susun: s?.susun ?? [],
        mondai: m?.mondai ?? [],
      }
    }),
  )
}
