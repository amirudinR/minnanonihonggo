import type { Kaiwa } from '@/types/bab'

// 会話 Honsatsu idx 186 (cetak 165); arti 1:1 dari "Percakapan" PDF Indonesia idx 146.
export const kaiwa: Kaiwa = {
  judul: '夏休みは どう するの？',
  audio: '/audio/bab20_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '小林',
      teks: '夏休みは 国へ 帰るの？',
      arti: 'Pada liburan musim panas pulang kampung?',
      furigana: [
        { base: '夏休み', ruby: 'なつやすみ' },
        { base: '国', ruby: 'くに' },
        { base: '帰', ruby: 'かえ' },
      ],
    },
    {
      no: 2,
      pembicara: 'タワポン',
      teks: 'ううん。帰りたいけど、……。小林君は どう するの？',
      arti: 'Tidak. Sebenarnya ingin…',
      furigana: [
        { base: '帰りたい', ruby: 'かえりたい' },
        { base: '小林', ruby: 'こばやし' },
      ],
    },
    {
      no: 3,
      pembicara: '小林',
      teks: 'どうしようかな……。タワポン君、富士山に 登った こと ある？',
      arti: 'O, begitu. Sdr. Thawaphon, pernah mendaki gunung Fuji?',
      furigana: [
        { base: '富士山', ruby: 'ふじさん' },
        { base: '登った', ruby: 'のぼった' },
      ],
    },
    {
      no: 4,
      pembicara: 'タワポン',
      teks: 'ううん。',
      arti: 'Belum, belum pernah.',
    },
    {
      no: 5,
      pembicara: '小林',
      teks: 'じゃ、よかったら、いっしょに 行かない？',
      arti: 'O, ya, kalau mau, bagaimana kalau kita pergi bersama-sama?',
      furigana: [{ base: '行かない', ruby: 'いかない' }],
    },
    { no: 6, pembicara: 'タワポン', teks: 'うん。いつごろ？', arti: 'Mau. Kira-kira kapan?' },
    {
      no: 7,
      pembicara: '小林',
      teks: '8月の 初めごろは どう？',
      arti: 'Bagaimana kalau awal bulan Agustus?',
      furigana: [
        { base: '8月', ruby: 'はちがつ' },
        { base: '初め', ruby: 'はじめ' },
      ],
    },
    { no: 8, pembicara: 'タワポン', teks: 'いいね。', arti: 'Boleh!' },
    {
      no: 9,
      pembicara: '小林',
      teks: 'じゃ、いろいろ 調べて、また 電話するよ。',
      arti: 'Kalau begitu, saya mencari berbagai informasi, dan menelepon lagi.',
      furigana: [
        { base: '調べて', ruby: 'しらべて' },
        { base: '電話する', ruby: 'でんわする' },
      ],
    },
    {
      no: 10,
      pembicara: 'タワポン', teks: 'ありがとう。待ってるよ。',
      arti: 'Terima kasih. Saya tunggu.',
      furigana: [{ base: '待ってる', ruby: 'まってる' }],
    },
  ],
}
