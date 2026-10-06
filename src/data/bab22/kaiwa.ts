import type { Kaiwa } from '@/types/bab'

// 会話 Honsatsu idx 202 (cetak 181); arti 1:1 dari "Percakapan" PDF Indonesia idx 158.
export const kaiwa: Kaiwa = {
  judul: 'どんな アパートが いいですか',
  audio: '/audio/bab22_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '不動産屋',
      teks: 'こちらは いかがですか。家賃は 8万円です。',
      arti: 'Cari kamar yang bagaimana?',
      furigana: [{ base: '家賃', ruby: 'やちん' }],
    },
    {
      no: 2,
      pembicara: 'ワン',
      teks: 'うーん……。ちょっと 駅から 遠いですね。',
      arti: 'Ya... Biaya sewanya kira-kira delapan puluh ribu yen, dan daerah yang tidak jauh dari stasiun.',
      furigana: [
        { base: '駅', ruby: 'えき' },
        { base: '遠', ruby: 'とお' },
      ],
    },
    {
      no: 3,
      pembicara: '不動産屋',
      teks: 'じゃ、こちらは？便利ですよ。駅から 歩いて 3分ですから。',
      arti: 'Kalau begitu, bagaimana yang ini? Sepuluh menit dari stasiun, dan biaya sewanya delapan puluh tiga ribu yen.',
      furigana: [
        { base: '便利', ruby: 'べんり' },
        { base: '駅', ruby: 'えき' },
        { base: '歩', ruby: 'ある' },
      ],
    },
    {
      no: 4,
      pembicara: 'ワン',
      teks: 'そうですね。ダイニングキッチンと 和室が 1つと……。すみません。ここは 何ですか。',
      arti: 'Ruang makan dengan dapur dan kamar ala Jepang, ya.\nMaaf. Ini apa?',
      furigana: [{ base: '和室', ruby: 'わしつ' }],
    },
    {
      no: 5,
      pembicara: '不動産屋',
      teks: '押し入れです。布団を 入れる 所ですよ。',
      arti: 'Lemari ala Jepang. Tempat untuk menyimpan selimut dan kasur.',
      furigana: [
        { base: '押し入れ', ruby: 'おしいれ' },
        { base: '布団', ruby: 'ふとん' },
        { base: '入', ruby: 'い' },
        { base: '所', ruby: 'ところ' },
      ],
    },
    {
      no: 6,
      pembicara: 'ワン',
      teks: 'そうですか。この アパート、きょう 見る ことが できますか。',
      arti: 'O, begitu. Apakah kamar ini bisa saya lihat hari ini?',
      furigana: [{ base: '見', ruby: 'み' }],
    },
    {
      no: 7,
      pembicara: '不動産屋',
      teks: 'ええ。今から 行きましょうか。',
      arti: 'Ya. Bagaimana kalau pergi sekarang?',
      furigana: [
        { base: '今', ruby: 'いま' },
        { base: '行', ruby: 'い' },
      ],
    },
    {
      no: 8,
      pembicara: 'ワン',
      teks: 'ええ、お願いします。',
      arti: 'Ya, tolong.',
      furigana: [{ base: '願', ruby: 'ねが' }],
    },
  ],
}
