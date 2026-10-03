import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: '初めまして',
  audio: '/audio/bab01_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: '佐藤', teks: 'おはよう ございます。', arti: 'Selamat pagi.', furigana: [{ base: '佐藤', ruby: 'さとう' }] },
    { no: 2, pembicara: '山田', teks: 'おはよう ございます。', arti: 'Selamat pagi.', furigana: [{ base: '山田', ruby: 'やまだ' }] },
    { no: 3, pembicara: '山田', teks: '佐藤さん、こちらは マイク・ミラーさんです。', arti: 'Sdr. Sato, ini Sdr. Mike Miller.', furigana: [{ base: '山田', ruby: 'やまだ' }, { base: '佐藤', ruby: 'さとう' }] },
    { no: 4, pembicara: 'ミラー', teks: '初めまして。', arti: 'Salam kenal!', furigana: [{ base: '初', ruby: 'はじ' }] },
    { no: 5, pembicara: 'ミラー', teks: 'マイク・ミラーです。', arti: 'Saya Mike Miller.' },
    { no: 6, pembicara: 'ミラー', teks: 'アメリカから 来ました。', arti: 'Saya datang dari Amerika Serikat.', furigana: [{ base: '来', ruby: 'き' }] },
    { no: 7, pembicara: 'ミラー', teks: 'どうぞ よろしく。', arti: 'Senang berkenalan dengan Anda.' },
    { no: 8, pembicara: '佐藤', teks: '佐藤けい子です。', arti: 'Saya Keiko Sato.', furigana: [{ base: '佐藤', ruby: 'さとう' }] },
    { no: 9, pembicara: '佐藤', teks: 'どうぞ よろしく。', arti: 'Senang berkenalan dengan Anda.', furigana: [{ base: '佐藤', ruby: 'さとう' }] },
  ],
}
