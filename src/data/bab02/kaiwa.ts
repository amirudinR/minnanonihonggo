import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: 'ほんの 気持ちです',
  audio: '/audio/bab02_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: '山田一郎', teks: 'はい。 どなたですか。', arti: 'Ya! Siapa?', furigana: [{ base: '山田', ruby: 'やまだ' }, { base: '一郎', ruby: 'いちろう' }] },
    { no: 2, pembicara: 'サントス', teks: '408の サントスです。', arti: 'Saya Santos di kamar 408.' },
    { no: 3, pembicara: 'サントス', teks: 'こんにちは。 サントスです。', arti: 'Selamat siang. Saya Santos.' },
    { no: 4, pembicara: 'サントス', teks: 'これから お世話に なります。', arti: 'Mulai sekarang, saya akan meminta bantuannya.', furigana: [{ base: '世話', ruby: 'せわ' }] },
    { no: 5, pembicara: 'サントス', teks: 'どうぞ よろしく お願いします。', arti: 'Mohon bantuan Anda.', furigana: [{ base: '願', ruby: 'ねが' }] },
    { no: 6, pembicara: '山田', teks: 'こちらこそ よろしく。', arti: 'Sama-sama.', furigana: [{ base: '山田', ruby: 'やまだ' }] },
    { no: 7, pembicara: 'サントス', teks: 'あのう、これ、ほんの 気持ちです。', arti: 'Anu, ini sekadar tanda terima kasih.', furigana: [{ base: '気持ち', ruby: 'きもち' }] },
    { no: 8, pembicara: '山田', teks: 'あ、どうも……。 何ですか。', arti: 'Ah, terima kasih ……Itu apa?', furigana: [{ base: '山田', ruby: 'やまだ' }, { base: '何', ruby: 'なん' }] },
    { no: 9, pembicara: 'サントス', teks: 'コーヒーです。 どうぞ。', arti: 'Ini kopi. Silakan.' },
    { no: 10, pembicara: '山田', teks: 'どうも ありがとう ございます。', arti: 'Terima kasih banyak.', furigana: [{ base: '山田', ruby: 'やまだ' }] },
  ],
}
