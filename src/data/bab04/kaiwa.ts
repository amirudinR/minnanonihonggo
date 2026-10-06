import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: 'そちらは 何時から 何時までですか',
  audio: '/audio/bab04_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: '番号案内人', teks: 'はい、104の 石田です。', arti: 'Halo.', furigana: [{ base: '番号', ruby: 'ばんごう' }, { base: '案内', ruby: 'あんない' }, { base: '石田', ruby: 'いしだ' }] },
    { no: 2, pembicara: 'カリナ', teks: 'やまと美術館の 電話番号を お願いします。', arti: 'Maaf, berapa nomor telepon "Asuka"?', furigana: [{ base: '美術', ruby: 'びじゅつ' }, { base: '館', ruby: 'かん' }, { base: '電話', ruby: 'でんわ' }, { base: '番号', ruby: 'ばんごう' }, { base: '願', ruby: 'ねが' }] },
    { no: 3, pembicara: '番号案内人', teks: 'やまと美術館ですね。 かしこまりました。', arti: '"Asuka" ya? 5275-2725.', furigana: [{ base: '番号', ruby: 'ばんごう' }, { base: '案内', ruby: 'あんない' }, { base: '美術', ruby: 'びじゅつ' }, { base: '館', ruby: 'かん' }] },
    { no: 4, pembicara: 'テープ', teks: 'お問い合わせの 番号は 0797の 38の 5432です。', arti: '5275-2725.', furigana: [{ base: '問', ruby: 'と' }, { base: '合', ruby: 'あ' }, { base: '番号', ruby: 'ばんごう' }] },
    { no: 5, pembicara: '美術館の人', teks: 'はい、やまと美術館です。', arti: 'Halo, "Asuka" di sini.', furigana: [{ base: '美術', ruby: 'びじゅつ' }, { base: '館', ruby: 'かん' }, { base: '人', ruby: 'ひと' }] },
    { no: 6, pembicara: 'カリナ', teks: 'すみません。 そちらは 何時から 何時までですか。', arti: 'Maaf. Di situ sampai dengan pukul berapa?', furigana: [{ base: '何時', ruby: 'なんじ' }] },
    { no: 7, pembicara: '美術館の人', teks: '9時から 4時までです。', arti: 'Sampai dengan pukul sepuluh.', furigana: [{ base: '美術', ruby: 'びじゅつ' }, { base: '館', ruby: 'かん' }, { base: '人', ruby: 'ひと' }] },
    { no: 8, pembicara: 'カリナ', teks: '休みは 何曜日ですか。', arti: 'Liburnya hari apa?', furigana: [{ base: '休', ruby: 'やす' }, { base: '何曜', ruby: 'なんよう' }, { base: '日', ruby: 'び' }] },
    { no: 9, pembicara: '美術館の人', teks: '月曜日です。', arti: 'Hari Minggu.', furigana: [{ base: '美術', ruby: 'びじゅつ' }, { base: '館', ruby: 'かん' }, { base: '人', ruby: 'ひと' }, { base: '月曜', ruby: 'げつよう' }, { base: '日', ruby: 'び' }] },
    { no: 10, pembicara: 'カリナ', teks: 'どうも ありがとう ございました。', arti: 'O, begitu. Terima kasih.' },
  ],
}
