import type { Bab } from '@/types/bab'
import { bunpou, catatanTataBahasa } from './bunpou'
import { kaiwa } from './kaiwa'
import { kosakata } from './kosakata'
import { mondai } from './mondai'
import { susun } from './susun'
import { reibun } from './reibun'
import { renshuuA, renshuuB, renshuuC } from './renshuu'

export const bab21: Bab = {
  no: 21,
  topik: 'Saya Kira Juga Begitu',
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

export default bab21
