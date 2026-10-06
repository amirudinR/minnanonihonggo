import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: 'これを ください',
  audio: '/audio/bab03_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: 'マリア', teks: 'すみません。 ワイン売り場は どこですか。', arti: 'Maaf. Di mana tempat jual anggur?', furigana: [{ base: '売', ruby: 'う' }, { base: '場', ruby: 'ば' }] },
    { no: 2, pembicara: '店員A', teks: '地下1階で ございます。', arti: 'Di lantai besemen 1.', furigana: [{ base: '店員', ruby: 'てんいん' }, { base: '地下', ruby: 'ちか' }, { base: '階', ruby: 'かい' }] },
    { no: 3, pembicara: 'マリア', teks: 'どうも。', arti: 'Terima kasih.' },
    { no: 4, pembicara: 'マリア', teks: 'すみません。 その ワインを 見せて ください。', arti: 'Maaf. Tolong perlihatkan anggur itu!', furigana: [{ base: '見', ruby: 'み' }] },
    { no: 5, pembicara: '店員B', teks: 'はい、どうぞ。', arti: 'Ya, silakan.', furigana: [{ base: '店員', ruby: 'てんいん' }] },
    { no: 6, pembicara: 'マリア', teks: 'これは フランスの ワインですか。', arti: 'Ini anggur dari mana?' },
    { no: 7, pembicara: '店員B', teks: 'いいえ、イタリアのです。', arti: 'Jepang.', furigana: [{ base: '店員', ruby: 'てんいん' }] },
    { no: 8, pembicara: 'マリア', teks: 'いくらですか。', arti: 'Berapa?' },
    { no: 9, pembicara: '店員B', teks: '2,500円です。', arti: '¥2.500.', furigana: [{ base: '店員', ruby: 'てんいん' }, { base: '円', ruby: 'えん' }] },
    { no: 10, pembicara: 'マリア', teks: 'じゃ、これを ください。', arti: 'Kalau begitu, minta ini.' },
  ],
}
