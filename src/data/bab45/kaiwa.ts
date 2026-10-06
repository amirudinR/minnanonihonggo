import type { Kaiwa } from '@/types/bab'

// 会話 第45課「一生懸命 練習したのに」 — Honsatsu idx 179 (hlm. cetak 161).
// arti: PDF Indonesia "Pelajaran 45 · II. Terjemahan · Percakapan" (idx 145,
// hlm. cetak 124), 1:1 (judul percakapan Indonesia: "Bagaimana Caranya Jika Salah Jalur?").
export const kaiwa: Kaiwa = {
  judul: '一生懸命 練習したのに',
  audio: '/audio/bab45_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '係員',
      teks: '皆さん、この マラソンは 健康マラソンですから、無理を しないで ください。もし 気分が 悪くなったら、係員に 言って ください。',
      arti: 'Semuanya, maraton ini adalah maraton demi kesehatan maka jangan paksakan diri. Jika merasa kurang enak, beritahukan kepada staf.',
      furigana: [
        { base: '係員', ruby: 'かい' },
        { base: '健康', ruby: 'けんこう' },
        { base: '無理', ruby: 'むり' },
        { base: '気分', ruby: 'きぶん' },
        { base: '係員', ruby: 'かい' },
        { base: '言', ruby: 'い' },
      ],
    },
    { no: 2, pembicara: '参加者', teks: 'はい。', arti: 'Ya.' },
    {
      no: 3,
      pembicara: '係員',
      teks: 'コースを まちがえた 場合は、元の 所に 戻って 続けて ください。',
      arti: 'Kembali ke tempat semula, lalu lanjutkan lagi.',
      furigana: [
        { base: '係員', ruby: 'かい' },
        { base: '場合', ruby: 'ばあい' },
        { base: '元', ruby: 'もと' },
        { base: '所', ruby: 'ところ' },
        { base: '戻', ruby: 'もど' },
        { base: '続', ruby: 'つづ' },
      ],
    },
    {
      no: 4,
      pembicara: '参加者',
      teks: 'あのう、途中で やめたい 場合は、どう したら いいですか。',
      arti: 'A... Jika mau berhenti di tengah jalan?',
      furigana: [{ base: '途中', ruby: 'とちゅう' }, { base: '場合', ruby: 'ばあい' }],
    },
    {
      no: 5,
      pembicara: '係員',
      teks: 'その 場合は、近くの 係員に 名前を 言ってから、帰って ください。では、スタートの 時間です。',
      arti: 'Untuk masalah itu, beritahukan nama (Anda) kepada staf terdekat, lalu silakan pulang. Sekarang waktunya mulai!',
      furigana: [
        { base: '場合', ruby: 'ばあい' },
        { base: '近', ruby: 'ちか' },
        { base: '係員', ruby: 'かい' },
        { base: '名前', ruby: 'なまえ' },
        { base: '言', ruby: 'い' },
        { base: '帰', ruby: 'かえ' },
        { base: '時間', ruby: 'じかん' },
      ],
    },
    {
      no: 6,
      pembicara: '鈴木',
      teks: 'ミラーさん、マラソンは どうでしたか。',
      arti: 'Sdr. Miller, bagaimana maratónya?',
      furigana: [{ base: '鈴木', ruby: 'すずき' }],
    },
    { no: 7, pembicara: 'ミラー', teks: '2位でした。', arti: 'Juara dua.', furigana: [{ base: '位', ruby: 'い' }] },
    {
      no: 8,
      pembicara: '鈴木',
      teks: '2位だったんですか。すごいですね。',
      arti: 'Juara dua? Hebat!',
      furigana: [
        { base: '鈴木', ruby: 'すずき' },
        { base: '位', ruby: 'い' },
      ],
    },
    {
      no: 9,
      pembicara: 'ミラー',
      teks: 'いいえ、一生懸命 練習したのに、優勝 できなくて、残念です。',
      arti: 'Tidak, sayang sekali karena tidak mendapatkan juara pertama padahal saya berlatih sungguh-sungguh.',
      furigana: [
        { base: '一生懸命', ruby: 'いっしょうけんめい' },
        { base: '練習', ruby: 'れんしゅう' },
        { base: '優勝', ruby: 'ゆうしょう' },
        { base: '残念', ruby: 'ざんねん' },
      ],
    },
    {
      no: 10,
      pembicara: '鈴木',
      teks: 'また 来年が ありますよ。',
      arti: 'Masih ada kesempatan pada tahun depan.',
      furigana: [
        { base: '鈴木', ruby: 'すずき' },
        { base: '来年', ruby: 'らいねん' },
      ],
    },
  ],
}
