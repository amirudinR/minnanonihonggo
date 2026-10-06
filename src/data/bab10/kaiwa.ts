import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: 'ナンプラー、ありますか',
  audio: '/audio/bab10_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: 'ミラー', teks: 'すみません。アジアストアは どこですか。', arti: 'Permisi. Asia Store ada di mana?' },
    { no: 2, pembicara: '女の 人', teks: 'アジアストアですか。あそこに 白い ビルが ありますね。あの ビルの中です。', arti: 'Asia Store? Di sana ada gedung putih, kan? Di dalam gedung itu.', furigana: [{ base: '女', ruby: 'おんな' }, { base: '人', ruby: 'ひと' }, { base: '白', ruby: 'しろ' }, { base: '中', ruby: 'なか' }] },
    { no: 3, pembicara: 'ミラー', teks: 'そうですか。どうも すみません。', arti: 'O, begitu. Terima kasih.' },
    { no: 4, pembicara: '女の 人', teks: 'いいえ。', arti: 'Sama-sama.', furigana: [{ base: '女', ruby: 'おんな' }, { base: '人', ruby: 'ひと' }] },
    { no: 5, pembicara: 'ミラー', teks: 'あのう、ナンプラー、ありますか。', arti: 'Maaf, apakah ada kecap ikan?' },
    { no: 6, pembicara: '店の人', teks: 'はい。あちらに タイ料理の コーナーが あります。ナンプラーは いちばん 下です。', arti: 'Ya. Di sebelah sana ada tempat bahan masakan Thailand. Kecap ikan ada di tempat yang paling bawah.', furigana: [{ base: '店', ruby: 'みせ' }, { base: '人', ruby: 'ひと' }, { base: '料理', ruby: 'りょうり' }, { base: '下', ruby: 'した' }] },
    { no: 7, pembicara: 'ミラー', teks: 'わかりました。どうも。', arti: 'Mengerti. Terima kasih.' }
  ]
}
