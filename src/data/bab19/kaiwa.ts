import type { Kaiwa } from '@/types/bab'

// 会話 Honsatsu idx 176 (cetak 155); arti 1:1 dari "Percakapan" PDF Indonesia idx 140.
export const kaiwa: Kaiwa = {
  judul: 'ダイエットは あしたから します',
  audio: '/audio/bab19_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '皆',
      teks: '乾杯。',
      arti: 'Toast!',
      furigana: [{ base: '乾杯', ruby: 'かんぱい' }],
    },
    {
      no: 2,
      pembicara: '松本良子',
      teks: 'マリアさん、あまり 食べませんかね。',
      arti: 'Sdr. Maria kurang makan, ya?',
      furigana: [
        { base: '松本', ruby: 'まつもと' },
        { base: '良子', ruby: 'よしこ' },
      ],
    },
    {
      no: 3,
      pembicara: 'マリア',
      teks: 'ええ。実は きのうから ダイエットを しています。',
      arti: 'Ya. Sejak kemarin saya berdiet.',
      furigana: [{ base: '実', ruby: 'じつ' }],
    },
    {
      no: 4,
      pembicara: '松本良子',
      teks: 'そうですか。わたしも 何回か ダイエットを した ことが あります。',
      arti: 'O, begitu. Saya juga pernah berdiet.',
      furigana: [
        { base: '松本', ruby: 'まつもと' },
        { base: '良子', ruby: 'よしこ' },
        { base: '何回', ruby: 'なんかい' },
      ],
    },
    { no: 5, pembicara: 'マリア', teks: 'どんな ダイエットですか。', arti: 'Cara diet bagaimana?' },
    {
      no: 6,
      pembicara: '松本良子',
      teks: '毎日 りんごだけ 食べたり、水を たくさん 飲んだり しました。',
      arti: 'Setiap hari hanya makan buah apel dan minum air yang banyak.',
      furigana: [
        { base: '松本', ruby: 'まつもと' },
        { base: '良子', ruby: 'よしこ' },
        { base: '毎日', ruby: 'まいにち' },
      ],
    },
    {
      no: 7,
      pembicara: '松本部長',
      teks: 'しかし、無理な ダイエットは 体に よくないですよ。',
      arti: 'Tetapi, diet yang paksa tidak baik untuk tubuh, ya.',
      furigana: [
        { base: '部長', ruby: 'ぶちょう' },
        { base: '無理', ruby: 'むり' },
        { base: '体', ruby: 'からだ' },
      ],
    },
    { no: 8, pembicara: 'マリア', teks: 'そうですねえ。', arti: 'Ya, betul.' },
    {
      no: 9,
      pembicara: '松本良子',
      teks: 'マリアさん、この ケーキ、おいしいですよ。',
      arti: 'Sdr. Maria, es krim ini enak.',
      furigana: [
        { base: '松本', ruby: 'まつもと' },
        { base: '良子', ruby: 'よしこ' },
      ],
    },
    { no: 10, pembicara: 'マリア', teks: 'そうですか。', arti: 'O, ya.' },
    {
      no: 11,
      pembicara: 'マリア',
      teks: '…… ダイエットは また あしたから します。',
      arti: '…… Dietnya mulai besok lagi.',
    },
  ],
}