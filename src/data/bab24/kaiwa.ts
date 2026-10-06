import type { Kaiwa } from '@/types/bab'

// Sumber JP: 会話 Honsatsu idx 220 (cetak 199). Arti: 1:1 dari "Percakapan" PDF Indonesia (cetak 150).
export const kaiwa: Kaiwa = {
  judul: '手伝って くれますか',
  audio: '/audio/bab24_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: 'カリナ',
      teks: 'ワンさん、あした 引っ越しですね。\n手伝いに 行きましょうか。',
      arti: 'Sdr. Wang, hari Minggu yang akan datang pindah rumah, ya.\nBagaimana kalau saya pergi untuk membantu Anda?',
      furigana: [
        { base: '引っ越し', ruby: 'ひっこし' },
        { base: '手伝い', ruby: 'てつだい' },
        { base: '行き', ruby: 'いき' }
      ]
    },
    {
      no: 2,
      pembicara: 'ワン',
      teks: 'ありがとう ございます。\nじゃ、すみませんが、9時ごろ お願いします。',
      arti: 'Terima kasih.\nKalau begitu, saya merepotkan Anda, tapi tolong datang sekitar pukul sembilan.',
      furigana: [
        { base: '時', ruby: 'じ' },
        { base: '願い', ruby: 'ねがい' }
      ]
    },
    {
      no: 3,
      pembicara: 'カリナ',
      teks: 'ほかに だれが 手伝いに 行きますか。',
      arti: 'Selain saya, siapa saja yang datang untuk membantu Anda?',
      furigana: [
        { base: '手伝い', ruby: 'てつだい' },
        { base: '行き', ruby: 'いき' }
      ]
    },
    {
      no: 4,
      pembicara: 'ワン',
      teks: '山田さんと ミラーさんが 来て くれます。',
      arti: 'Sdr. Yamada dan Sdr. Miller yang datang.',
      furigana: [
        { base: '山田', ruby: 'やまだ' },
        { base: '来', ruby: 'き' }
      ]
    },
    {
      no: 5,
      pembicara: 'カリナ',
      teks: '車は？',
      arti: 'Mobilnya?',
      furigana: [{ base: '車', ruby: 'くるま' }]
    },
    {
      no: 6,
      pembicara: 'ワン',
      teks: '山田さんに ワゴン車を 貸して もらいます。',
      arti: 'Saya meminjam dari Sdr. Yamada.',
      furigana: [
        { base: '山田', ruby: 'やまだ' },
        { base: '車', ruby: 'しゃ' },
        { base: '貸して', ruby: 'かして' }
      ]
    },
    {
      no: 7,
      pembicara: 'カリナ',
      teks: '昼ごはんは どう しますか。',
      arti: 'Untuk makan siangnya bagaimana?',
      furigana: [{ base: '昼', ruby: 'ひる' }]
    },
    {
      no: 8,
      pembicara: 'ワン',
      teks: 'えーと……。',
      arti: 'Aaa...'
    },
    {
      no: 9,
      pembicara: 'カリナ',
      teks: 'わたしが お弁当を 持って 行きましょうか。',
      arti: 'Bagaimana kalau saya yang membawakan makan siang?',
      furigana: [
        { base: '弁当', ruby: 'べんとう' },
        { base: '持って', ruby: 'もって' },
        { base: '行き', ruby: 'いき' }
      ]
    },
    {
      no: 10,
      pembicara: 'ワン',
      teks: 'すみません。 お願いします。',
      arti: 'Maaf. Tolong, ya.',
      furigana: [{ base: '願い', ruby: 'ねがい' }]
    },
    {
      no: 11,
      pembicara: 'カリナ',
      teks: 'じゃ、また あした。',
      arti: 'OK, sampai jumpa hari Minggu.'
    }
  ]
}
