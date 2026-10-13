import type { Bab } from '@/types/bab'
import { bunpou, catatanTataBahasa } from './bunpou'
import { kaiwa } from './kaiwa'
import { kosakata } from './kosakata'
import { mondai } from './mondai'
import { susun } from './susun'
import { reibun } from './reibun'
import { renshuuA, renshuuB, renshuuC } from './renshuu'

export const bab23: Bab = {
  no: 23,
  topik: 'Bagaimana Caranya Pergi?',
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
}

export default bab23
