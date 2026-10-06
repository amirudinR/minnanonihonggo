import type { Bab } from '@/types/bab'
import { kosakata } from './kosakata'
import { bunpou, catatanTataBahasa } from './bunpou'
import { reibun } from './reibun'
import { kaiwa } from './kaiwa'
import { renshuuA, renshuuB, renshuuC } from './renshuu'
import { mondai } from './mondai'

const bab27: Bab = {
  no: 27,
  topik: '～ます／～られる Kata Kerja Potensial (Bisa, Mampu, dan 「Hanya ～」)',
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
}

export default bab27
