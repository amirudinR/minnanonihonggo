import type { Kaiwa } from '@/types/bab'

// 会話 Honsatsu idx 194 (cetak 173); arti 1:1 dari "Percakapan" PDF Indonesia idx 152.
export const kaiwa: Kaiwa = {
  judul: 'わたしも そう 思います',
  audio: '/audio/bab21_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '松本',
      teks: 'あ、サントスさん、しばらくですね。',
      arti: 'Ah, Sdr. Santos, sudah lama tidak bertemu.',
      furigana: [{ base: '松本', ruby: 'まつもと' }],
    },
    {
      no: 2,
      pembicara: 'サントス',
      teks: 'あ、松本さん、お元気ですか。',
      arti: 'Oh, Sdr. Matsumoto, apa kabar?',
      furigana: [
        { base: '松本', ruby: 'まつもと' },
        { base: '元気', ruby: 'げんき' },
      ],
    },
    {
      no: 3,
      pembicara: '松本',
      teks: 'ええ。ちょっと ビールでも 飲みませんか。',
      arti: 'Baik-baik saja. Bagaimana kalau minum bir, atau…?',
      furigana: [{ base: '飲みませんか', ruby: 'のみませんか' }],
    },
    { no: 4, pembicara: 'サントス', teks: 'いいですね。', arti: 'Bagus, ya.' },
    {
      no: 5,
      pembicara: 'サントス',
      teks: '今晩 10時から 日本と ブラジルの サッカーの 試合が ありますね。',
      arti: 'Nanti malam, pukul sepuluh diadakan pertandingan sepak bola antara Jepang dan Brasil.',
      furigana: [
        { base: '今晩', ruby: 'こんばん' },
        { base: '日本', ruby: 'にほん' },
        { base: '試合', ruby: 'しあい' },
      ],
    },
    {
      no: 6,
      pembicara: '松本',
      teks: 'ああ、そうですね。ぜひ 見ないと……。サントスさんは どちらが 勝つと 思いますか。',
      arti: 'O ya, benar. Menurut Sdr. Santos, yang mana yang menang?',
      furigana: [
        { base: '見ないと', ruby: 'みないと' },
        { base: '勝つ', ruby: 'かつ' },
        { base: '思いますか', ruby: 'おもいますか' },
      ],
    },
    { no: 7, pembicara: 'サントス', teks: 'もちろん ブラジルですよ。', arti: 'Itu pasti Brasil.' },
    {
      no: 8,
      pembicara: '松本',
      teks: 'でも、最近 日本も 強く なりましたよ。',
      arti: 'Betul, ya. Tetapi, akhir-akhir ini Jepang juga menjadi kuat.',
      furigana: [
        { base: '最近', ruby: 'さいきん' },
        { base: '強く', ruby: 'つよく' },
      ],
    },
    {
      no: 9,
      pembicara: 'サントス',
      teks: 'ええ、わたしも そう 思いますが、……。あ、もう 帰らないと……。',
      arti: 'Saya kira juga begitu, tetapi…… O, harus pulang…',
      furigana: [
        { base: '思います', ruby: 'おもいます' },
        { base: '帰らないと', ruby: 'かえらないと' },
      ],
    },
    {
      no: 10,
      pembicara: '松本',
      teks: 'そうですね。じゃ、帰りましょう。',
      arti: 'Ya, mari pulang.',
      furigana: [{ base: '帰りましょう', ruby: 'かえりましょう' }],
    },
  ],
}
