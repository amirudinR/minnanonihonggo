import type { Bab } from '@/types/bab'
import { kosakata } from './kosakata'
import { bunpou, catatanTataBahasa } from './bunpou'
import { reibun } from './reibun'
import { kaiwa } from './kaiwa'
import { renshuuA, renshuuB, renshuuC } from './renshuu'
import { mondai } from './mondai'
import { susun } from './susun'
import { bunpouSoal } from './bunpouSoal'

const bab49: Bab = {
  no: 49,
  topik:
    'Menggunakan 敬語 (Kata Halus / Kata Hormat / Kata Merendahkan Diri) sesuai lawan bicara dan subjek: 尊敬 受身, お〜になる, お＋ます形, お＋ください, 謙譲 I / II / III, dan bentuk-bentuk perintah yang sopan.',
  kosakata,
  bunpou,
  catatanTataBahasa,
  reibun,
  kaiwa,
  renshuuA,
  renshuuB,
  renshuuC,
  mondai,
  bunsho: [],
  susun,
  bunpouSoal,
}

export default bab49
