import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: '残念です',
  audio: '/audio/bab09_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: 'ミラー', teks: 'もしもし、ミラーです。', arti: 'Halo, saya Miller.' },
    { no: 2, pembicara: '木村', teks: 'ああ、ミラーさん、こんばんは。お元気ですか。', arti: 'Ah, Sdr. Miller, selamat malam. Apa kabar?', furigana: [{ base: '元気', ruby: 'げんき' }] },
    { no: 3, pembicara: 'ミラー', teks: 'ええ、元気です。', arti: 'Ya, kabar baik.', furigana: [{ base: '元気', ruby: 'げんき' }] },
    { no: 4, pembicara: 'ミラー', teks: 'あのう、木村さん、小沢征爾の コンサートの チケットが ２枚 あります。', arti: 'Sdr. Kimura, saya punya dua tiket konsernya Seiji Ozawa.', furigana: [{ base: '小沢征爾', ruby: 'おざわせいじ' }, { base: '２枚', ruby: 'にまい' }] },
    { no: 5, pembicara: 'ミラー', teks: 'いっしょに いかがですか。', arti: 'Bagaimana kalau kita pergi bersama?' },
    { no: 6, pembicara: '木村', teks: 'いいですね。いつですか。', arti: 'Bagus, ya. Kapan?' },
    { no: 7, pembicara: 'ミラー', teks: '金曜日の 晩です。', arti: 'Hari Jumat malam.', furigana: [{ base: '金曜日', ruby: 'きんようび' }, { base: '晩', ruby: 'ばん' }] },
    { no: 8, pembicara: '木村', teks: '金曜日の 晩は ちょっと……。', arti: 'Jumat malam agak...', furigana: [{ base: '金曜日', ruby: 'きんようび' }, { base: '晩', ruby: 'ばん' }] },
    { no: 9, pembicara: 'ミラー', teks: 'だめですか。', arti: 'Tidak bisa, ya?' },
    { no: 10, pembicara: '木村', teks: 'ええ、友達と 約束が ありますから……。', arti: 'Iya, karena saya ada janji dengan teman...', furigana: [{ base: '友達', ruby: 'ともだち' }, { base: '約束', ruby: 'やくそく' }] },
    { no: 11, pembicara: 'ミラー', teks: 'そうですか。残念ですね。', arti: 'O, begitu. Sayang, ya.', furigana: [{ base: '残念', ruby: 'ざんねん' }] },
    { no: 12, pembicara: '木村', teks: 'ええ。また 今度 お願いします。', arti: 'Iya. Tolong ajak saya di lain waktu.', furigana: [{ base: '今度', ruby: 'こんど' }, { base: '願', ruby: 'ねが' }] }
  ]
}
