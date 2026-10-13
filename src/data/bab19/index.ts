import type { Bab } from '@/types/bab'
import { bunpou, catatanTataBahasa } from './bunpou'
import { kaiwa } from './kaiwa'
import { kosakata } from './kosakata'
import { mondai } from './mondai'
import { susun } from './susun'
import { reibun } from './reibun'
import { renshuuA, renshuuB, renshuuC } from './renshuu'

export const bab19: Bab = {
  no: 19,
  topik: 'Dietnya Mulai Besok',
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

export default bab19
