import type { Kaiwa } from '@/types/bab'

// 会話 (第33課, Honsatsu idx 79 / cetak 61). Judul: 「これは どういう 意味ですか」
// Teks + furigana diambil dari Honsatsu; `arti` 1:1 dari PDF Indonesia
// "II. Terjemahan > Percakapan" (idx 73 / cetak 52).
// CATATAN: scan terjemahan Percakapan PDF Indonesia resolusi rendah — beberapa baris
// hanya terbaca sebagian; teks yang tidak terbaca dilengkapi dari kalimat JP agar 1:1.
export const kaiwa: Kaiwa = {
  judul: 'これは どういう 意味ですか',
  audio: '/audio/bab33_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: 'ワット',
      teks: 'すみません。わたしの 車に こんな 紙が はって あったんですが、この 漢字は 何と 読んでですか。',
      arti: 'Maaf. Di mobil saya ada kertas seperti ini, tetapi saya tidak tahu cara membacanya.',
      furigana: [
        { base: '車', ruby: 'くるま' },
        { base: '紙', ruby: 'かみ' },
        { base: '漢字', ruby: 'かんじ' },
        { base: '読', ruby: 'よ' },
      ],
    },
    {
      no: 2,
      pembicara: '大学職員',
      teks: '「ちゅうしゃいはん」です。',
      arti: '"Chuushakukinsi".',
    },
    {
      no: 3,
      pembicara: 'ワット',
      teks: 'ちゅうしゃいはん……、どういう 意味ですか。',
      arti: 'Chuushakukinsi ..., artinya apa?',
      furigana: [{ base: '意味', ruby: 'いみ' }],
    },
    {
      no: 4,
      pembicara: '大学職員',
      teks: '車を 止めては いけない 場所に 止めたと いう 意味です。ワットさん、どこに 止めたんですか。',
      arti: 'Artinya "dilarang memarkir mobil" di tempat yang tidak boleh berhenti. Di mana mobilnya diparkir?',
      furigana: [
        { base: '車', ruby: 'くるま' },
        { base: '止', ruby: 'と' },
        { base: '場所', ruby: 'ばしょ' },
        { base: '止', ruby: 'と' },
        { base: '意味', ruby: 'いみ' },
      ],
    },
    {
      no: 5,
      pembicara: 'ワット',
      teks: '駅の 前です。雑誌を 買いに 行って、10分だけ……。',
      arti: 'Di depan stasiun. Saya pergi beli majalah, [hanya] 10 menit saja...',
      furigana: [
        { base: '駅', ruby: 'えき' },
        { base: '前', ruby: 'まえ' },
        { base: '雑誌', ruby: 'ざっし' },
        { base: '買', ruby: 'か' },
        { base: '行', ruby: 'い' },
        { base: '分', ruby: 'ふん' },
      ],
    },
    {
      no: 6,
      pembicara: '大学職員',
      teks: 'そりゃあ、駅の 前だったら、10分でも だめですよ。',
      arti: 'Kalau di depan stasiun, [_memo_] 10 menit pun tidak boleh.',
      furigana: [
        { base: '駅', ruby: 'えき' },
        { base: '前', ruby: 'まえ' },
        { base: '分', ruby: 'ぷん' },
      ],
    },
    {
      no: 7,
      pembicara: 'ワット',
      teks: 'これは 何と 書いてあるんですか。',
      arti: 'O, begitu. [Denda?] Ini tertulis apa?',
      furigana: [
        { base: '何', ruby: 'なん' },
        { base: '書', ruby: 'か' },
      ],
    },
    {
      no: 8,
      pembicara: '大学職員',
      teks: '「一週間以内に 警察へ 来てください」と 書いて あります。',
      arti: 'Di situ tertulis "Datanglah ke kantor polisi dalam tujuh hari".',
      furigana: [
        { base: '一週間', ruby: 'いっしゅうかん' },
        { base: '警察', ruby: 'けいさつ' },
        { base: '来', ruby: 'き' },
        { base: '書', ruby: 'か' },
      ],
    },
    {
      no: 9,
      pembicara: 'ワット',
      teks: 'それで いいですか。罰金は 払わなくても いいんですか。',
      arti: 'Begitu. Apakah [kita] tidak perlu membayar denda?',
      furigana: [
        { base: '罰金', ruby: 'ばいきん' },
        { base: '払', ruby: 'はら' },
      ],
    },
    {
      no: 10,
      pembicara: '大学職員',
      teks: 'いえ、あとで 15,000円 払わないと いけません。',
      arti: 'Tidak. Nanti Anda harus membayar 15.000 yen.',
      furigana: [
        { base: '払', ruby: 'はら' },
        { base: '円', ruby: 'えん' },
      ],
    },
    {
      no: 11,
      pembicara: 'ワット',
      teks: 'えっ。15,000円ですか。雑誌は 300円だったんですけど……。',
      arti: 'Eh! 15.000 yen? Majalah itu hanya 300 yen...',
      furigana: [
        { base: '円', ruby: 'えん' },
        { base: '雑誌', ruby: 'ざっし' },
        { base: '円', ruby: 'えん' },
      ],
    },
  ],
}