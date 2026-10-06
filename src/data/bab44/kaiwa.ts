import type { Kaiwa } from '@/types/bab'

// 会話 第44課「この 写真みたいに して ください」 — Honsatsu idx 171 (cetak 153).
// arti: PDF Indonesia "Pelajaran 44 · II. Terjemahan · Percakapan: Tolong Buat Seperti Foto Ini!"
// (idx 139, cetak 118), 1:1.Nama pembicara memakai sebutan yang dipakai buku Indonesia.
export const kaiwa: Kaiwa = {
  judul: 'この 写真みたいに して ください',
  audio: '/audio/bab44_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '美容院',
      teks: 'いらっしゃいませ。きょうは どう なさいますか。',
      arti: 'Selamat datang! Hari ini maunya bagaimana?',
      furigana: [
        { base: '美容院', ruby: 'びょういん' },
      ],
    },
    {
      no: 2,
      pembicara: 'イー',
      teks: 'カット、お願いします。',
      arti: 'Tolong gunting rambut!',
      furigana: [{ base: '願', ruby: 'ねが' }],
    },
    {
      no: 3,
      pembicara: '美容院',
      teks: 'じゃ、シャンプー を しますから、こちらへ どうぞ。',
      arti: 'Kalau begitu, keramas dulu, silakan ke sini.',
      furigana: [{ base: '美容院', ruby: 'びょうし' }],
    },
    {
      no: 4,
      pembicara: '美容院',
      teks: 'カットは どういうふうに なさいますか。',
      arti: 'Model gunting rambutnya bagaimana?',
      furigana: [{ base: '美容院', ruby: 'びょうし' }],
    },
    {
      no: 5,
      pembicara: 'イー',
      teks: 'ショートに したいんですけども……。\nこの 写真みたいに して ください。',
      arti: 'Ingin memendekkan rambut. Tolong buat seperti foto ini!',
      furigana: [{ base: '写真', ruby: 'しゃしん' }],
    },
    {
      no: 6,
      pembicara: '美容院',
      teks: 'あ、すてきですね。',
      arti: 'O, bagus, ya.',
      furigana: [{ base: '美容院', ruby: 'びょうし' }],
    },
    {
      no: 7,
      pembicara: '美容院',
      teks: '前の 長さは これで よろしいでしょうか。',
      arti: 'Bagian depannya boleh begini?',
      furigana: [{ base: '美容院', ruby: 'びょうし' }],
    },
    {
      no: 8,
      pembicara: 'イー',
      teks: 'そうですね。もう 少し 短く して ください。',
      arti: 'O ya. Tolong pendekkan sedikit lagi!',
      furigana: [
        { base: '少', ruby: 'すこ' },
        { base: '短', ruby: 'みじか' },
      ],
    },
    {
      no: 9,
      pembicara: '美容院',
      teks: 'どうも お疲れさまでした。いかがですか。',
      arti: 'Sudah selesai.',
      furigana: [
        { base: '美容院', ruby: 'びょうし' },
        { base: '疲', ruby: 'つか' },
      ],
    },
    {
      no: 10,
      pembicara: 'イー',
      teks: 'けっこうです。どうも ありがとう。',
      arti: 'Terima kasih.',
    },
  ],
}