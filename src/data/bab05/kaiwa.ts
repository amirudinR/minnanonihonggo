import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: '甲子園へ 行きますか',
  audio: '/audio/bab05_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: 'サントス', teks: 'すみません。 甲子園まで いくらですか。', arti: 'Maaf. Sampai dengan Koshien berapa?', furigana: [{ base: '甲子園', ruby: 'こうしえん' }] },
    { no: 2, pembicara: '女の人', teks: '350円です。', arti: '¥350.', furigana: [{ base: '女', ruby: 'おんな' }, { base: '人', ruby: 'ひと' }] },
    { no: 3, pembicara: 'サントス', teks: '350円ですね。 ありがとう ございました。', arti: '¥350, ya? Terima kasih.', furigana: [{ base: '円', ruby: 'えん' }] },
    { no: 4, pembicara: '女の人', teks: 'どう いたしまして。', arti: 'Sama-sama.', furigana: [{ base: '女', ruby: 'おんな' }, { base: '人', ruby: 'ひと' }] },
    { no: 5, pembicara: 'サントス', teks: 'すみません。 甲子園は 何番線ですか。', arti: 'Maaf. Jurusan Koshien di peron berapa?', furigana: [{ base: '甲子園', ruby: 'こうしえん' }, { base: '何番線', ruby: 'なんばんせん' }] },
    { no: 6, pembicara: '駅員', teks: '5番線です。', arti: 'Peron nomor lima.', furigana: [{ base: '駅員', ruby: 'えきいん' }, { base: '番線', ruby: 'ばんせん' }] },
    { no: 7, pembicara: 'サントス', teks: 'どうも。', arti: 'Terima kasih.' },
    { no: 8, pembicara: 'サントス', teks: 'あのう、この 電車は 甲子園へ 行きますか。', arti: 'Permisi, kereta rel listrik ini menuju Koshien?', furigana: [{ base: '電車', ruby: 'でんしゃ' }, { base: '甲子園', ruby: 'こうしえん' }] },
    { no: 9, pembicara: '男の人', teks: 'いいえ。 次の 「普通」ですよ。', arti: 'Tidak. Yang "Biasa" berikutnya.', furigana: [{ base: '男', ruby: 'おとこ' }, { base: '人', ruby: 'ひと' }, { base: '次', ruby: 'つぎ' }, { base: '普通', ruby: 'ふつう' }] },
    { no: 10, pembicara: 'サントス', teks: 'そうですか。 どうも。', arti: 'O, begitu. Terima kasih.' },
  ],
}
