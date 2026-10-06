import type { Kaiwa } from '@/types/bab'

// 会話 第39課「遅れて、すみません」 — JP: Honsatsu cetak 111 (idx 129).
// arti: PDF Indonesia "Pelajaran 39 · Percakapan: Maaf, Terlambat." (cetak 88 = idx 109), 1:1.
export const kaiwa: Kaiwa = {
  judul: '遅れて、すみません',
  audio: '/audio/bab39_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: 'Miller',
      teks: '課長、遅れて、すみません。',
      arti: 'Maaf, terlambat, Bapak kepala seksi.',
      furigana: [
        { base: '課長', ruby: 'かちょう' },
        { base: '遅', ruby: 'おく' },
      ],
    },
    {
      no: 2,
      pembicara: '中村課長',
      teks: 'ミラーさん、どう したんですか。',
      arti: 'Sdr. Miller, kenapa?',
      furigana: [{ base: '中村課長', ruby: 'なかむらかちょう' }],
    },
    {
      no: 3,
      pembicara: 'Miller',
      teks: '実は 来る 途中で 事故が あって、バスが 遅れて しまったんです。',
      arti: '(Soalnya) Di tengah perjalanan ada kecelakaan hingga bus terlambat.',
      furigana: [
        { base: '来', ruby: 'く' },
        { base: '途中', ruby: 'とちゅう' },
        { base: '事故', ruby: 'じこ' },
        { base: '遅', ruby: 'おく' },
      ],
    },
    {
      no: 4,
      pembicara: '中村課長',
      teks: 'バスの 事故ですか。',
      arti: 'Kecelakaan bus?',
      furigana: [
        { base: '中村課長', ruby: 'なかむらかちょう' },
        { base: '事故', ruby: 'じこ' },
      ],
    },
    {
      no: 5,
      pembicara: 'Miller',
      teks: 'いいえ。交差点で トラックと 車が ぶつかって、バスが 動かなくなったんです。',
      arti: 'Tidak. Di persimpangan truk dan mobil bertabrakan sehingga bus tidak maju.',
      furigana: [
        { base: '交差点', ruby: 'こうさてん' },
        { base: '車', ruby: 'くるま' },
        { base: '動', ruby: 'うご' },
      ],
    },
    {
      no: 6,
      pembicara: '中村課長',
      teks: 'それは 大変でしたね。連絡が ない ので、みんな 心配して いたんですよ。',
      arti: 'Susah! Karena tidak ada kabar, semuanya sempat khawatir.',
      furigana: [
        { base: '中村課長', ruby: 'なかむらかちょう' },
        { base: '大変', ruby: 'たいへん' },
        { base: '連絡', ruby: 'れんらく' },
        { base: '心配', ruby: 'しんぱい' },
      ],
    },
    {
      no: 7,
      pembicara: 'Miller',
      teks: '駅から 電話したかったんですが、人が たくさん 並んで いて……。どうも すみませんでした。',
      arti: 'Mau menelepon, tetapi HP ketinggalan di rumah. Maaf.',
      furigana: [
        { base: '駅', ruby: 'えき' },
        { base: '電話', ruby: 'でんわ' },
        { base: '人', ruby: 'ひと' },
        { base: '並', ruby: 'なら' },
      ],
    },
    {
      no: 8,
      pembicara: '中村課長',
      teks: 'わかりました。じゃ、会議を 始めましょう。',
      arti: 'Baik. Ayo mulai rapat.',
      furigana: [
        { base: '中村課長', ruby: 'なかむらかちょう' },
        { base: '会議', ruby: 'かいぎ' },
        { base: '始', ruby: 'はじ' },
      ],
    },
  ],
}