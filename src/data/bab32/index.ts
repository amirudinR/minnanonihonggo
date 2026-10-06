import type { Bab } from '@/types/bab'
import { kosakata } from './kosakata'
import { bunpou } from './bunpou'
import { reibun } from './reibun'
import { kaiwa } from './kaiwa'
import { renshuuA, renshuuB, renshuuC } from './renshuu'
import { mondai } from './mondai'

const bab32: Bab = {
  no: 32,
  topik:
    'Menyampaikan saran/anjuran dan perkiraan (「〜た ほうがいいです」, 「〜た（Bentuk ない）ない ほうがいい」, 「〜でしょう」, 「〜かもしれません」, 「〜ましょう」, Kata Keterangan Bilangan で, 「何か 〜な こと」)',
  kosakata,
  bunpou,
  reibun,
  kaiwa,
  renshuuA,
  renshuuB,
  renshuuC,
  mondai,
  bunsho: [],
}

export default bab32
