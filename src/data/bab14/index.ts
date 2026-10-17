import type { Bab } from '@/types/bab'
import { bunpou, catatanTataBahasa } from './bunpou'
import { bunpouSoal } from './bunpouSoal'
import { kaiwa } from './kaiwa'
import { kosakata } from './kosakata'
import { mondai } from './mondai'
import { reibun } from './reibun'
import { renshuuA, renshuuB, renshuuC } from './renshuu'
import { susun } from './susun'

export const bab14: Bab = {
  no: 14,
  topik: 'Tolong pergi ke Umeda',
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

export default bab14
