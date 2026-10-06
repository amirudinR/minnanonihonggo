import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: '梅田まで 行って ください',
  audio: '/audio/bab14_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: 'カリナ', teks: '梅田まで お願いします。', arti: 'Tolong pergi ke Umeda.', furigana: [{ base: '梅田', ruby: 'うめだ' }, { base: '願', ruby: 'ねが' }] },
    { no: 2, pembicara: '運転手', teks: 'はい。', arti: 'Baik.', furigana: [{ base: '運転手', ruby: 'うんてんしゅ' }] },
    { no: 3, pembicara: 'カリナ', teks: 'すみません。あの 信号を 右へ 曲がって ください。', arti: 'Maaf. Tolong belok ke kanan di lampu lalu lintas itu.', furigana: [{ base: '信号', ruby: 'しんごう' }, { base: '右', ruby: 'みぎ' }, { base: '曲', ruby: 'ま' }] },
    { no: 4, pembicara: '運転手', teks: '右ですね。', arti: 'Kanan, ya.', furigana: [{ base: '運転手', ruby: 'うんてんしゅ' }, { base: '右', ruby: 'みぎ' }] },
    { no: 5, pembicara: 'カリナ', teks: 'ええ。', arti: 'Iya.' },
    { no: 6, pembicara: '運転手', teks: 'まっすぐですか。', arti: 'Lurus, ya?', furigana: [{ base: '運転手', ruby: 'うんてんしゅ' }] },
    { no: 7, pembicara: 'カリナ', teks: 'ええ、まっすぐ 行って ください。', arti: 'Ya, jalan terus.', furigana: [{ base: '行', ruby: 'い' }] },
    { no: 8, pembicara: 'カリナ', teks: 'あの 花屋の 前で 止めて ください。', arti: 'Tolong berhenti di depan toko bunga itu.', furigana: [{ base: '花屋', ruby: 'はなや' }, { base: '前', ruby: 'まえ' }, { base: '止', ruby: 'と' }] },
    { no: 9, pembicara: '運転手', teks: 'はい。1,800円です。', arti: 'Baik. 1.800 Yen.', furigana: [{ base: '運転手', ruby: 'うんてんしゅ' }, { base: '円', ruby: 'えん' }] },
    { no: 10, pembicara: 'カリナ', teks: 'これで お願いします。', arti: 'Ini uangnya.', furigana: [{ base: '願', ruby: 'ねが' }] },
    { no: 11, pembicara: '運転手', teks: '3,200円の お釣りです。ありがとうございました。', arti: 'Kembaliannya 3.200 Yen. Terima kasih banyak.', furigana: [{ base: '運転手', ruby: 'うんてんしゅ' }, { base: '円', ruby: 'えん' }, { base: '釣', ruby: 'つ' }] }
  ]
}
