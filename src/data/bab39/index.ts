import type { Bab } from '@/types/bab'
import { kosakata } from './kosakata'
import { bunpou, catatanTataBahasa } from './bunpou'
import { reibun } from './reibun'
import { kaiwa } from './kaiwa'
import { renshuuA, renshuuB, renshuuC } from './renshuu'
import { mondai } from './mondai'

// MNN2 第39課 — Honsatsu cetak 110-117 (idx 128-135), PDF Indonesia cetak 86-91 (idx 107-112).
const bab39: Bab = {
  no: 39,
  topik: 'Penyebab dengan 〜て、〜・で・ので・〜中で, dan uncapan kerja (お疲れさまでした・-conditioned)',
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

export default bab39