import type { Bab } from '@/types/bab'
import { bunpou, catatanTataBahasa } from './bunpou'
import { bunpouSoal } from './bunpouSoal'
import { kaiwa } from './kaiwa'
import { kosakata } from './kosakata'
import { mondai } from './mondai'
import { reibun } from './reibun'
import { renshuuA, renshuuB, renshuuC } from './renshuu'
import { susun } from './susun'

export const bab11: Bab = {
  no: 11,
  topik: 'Tolong poskan ini',
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

export default bab11
