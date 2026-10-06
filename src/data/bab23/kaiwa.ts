import type { Kaiwa } from '@/types/bab'

// Sumber: 会話 Honsatsu idx 212 (cetak 191); arti 1:1 dari "Percakapan" PDF Indonesia idx 164.
// Catatan: PDF Indonesia menggabungkan tukaran JP "外国の方ですか。／はい。" ke satu
// kalimat jawaban "Bawalah benda yang dapat ketahui nama dan alamat." — sehingga
// dua baris JP itu tidak dimasukkan sebagai entri terpisah (arti wajib 1:1 dari PDF Indonesia).
export const kaiwa: Kaiwa = {
  judul: 'どうやって 行きますか',
  audio: '/audio/bab23_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '図書館の人',
      teks: 'はい、みどり 図書館です。',
      arti: 'Halo, Perpustakaan Midori.',
      furigana: [{ base: '図書館', ruby: 'としょかん' }],
    },
    {
      no: 2,
      pembicara: 'カリナ',
      teks: 'あのう、そちらまで どうやって 行きますか。',
      arti: 'A…, bagaimana caranya untuk pergi ke sana?',
      furigana: [{ base: '行', ruby: 'い' }],
    },
    {
      no: 3,
      pembicara: '図書館の人',
      teks: '本田駅から 12番の バスに 乗って、図書館前で 降りて ください。3つ目です。',
      arti: 'Dari stasiun Honda, naik bus yang nomor dua belas, dan turun di Toshokanmae. (Halte) yang ketiga.',
      furigana: [
        { base: '本田駅', ruby: 'ほんだえき' },
        { base: '12番', ruby: 'じゅうにばん' },
        { base: '乗', ruby: 'の' },
        { base: '図書館前', ruby: 'としょかんまえ' },
        { base: '降', ruby: 'お' },
        { base: '3つ目', ruby: 'みっつめ' },
      ],
    },
    {
      no: 4,
      pembicara: 'カリナ',
      teks: '3つ目ですね。',
      arti: 'Yang ketiga, ya?',
      furigana: [{ base: '3つ目', ruby: 'みっつめ' }],
    },
    {
      no: 5,
      pembicara: '図書館の人',
      teks: 'ええ。降りると、前に 公園が あります。図書館は その 公園の 中の 白い 建物です。',
      arti: 'Ya. Begitu turun, di depan ada taman.\nPerpustakaan ada di dalam gedung putih di taman.',
      furigana: [
        { base: '降', ruby: 'お' },
        { base: '前', ruby: 'まえ' },
        { base: '公園', ruby: 'こうえん' },
        { base: '図書館', ruby: 'としょかん' },
        { base: '中', ruby: 'なか' },
        { base: '白い', ruby: 'しろい' },
        { base: '建物', ruby: 'たてもの' },
      ],
    },
    {
      no: 6,
      pembicara: 'カリナ',
      teks: 'わかりました。それから 本を 借りる とき、何か 要りますか。',
      arti: 'Baik.\nKemudian, ketika meminjam buku, diperlukan apa saja?',
      furigana: [
        { base: '本', ruby: 'ほん' },
        { base: '借', ruby: 'か' },
        { base: '要', ruby: 'い' },
      ],
    },
    {
      no: 7,
      pembicara: '図書館の人',
      teks: 'じゃ、外国人登録証を 持って 来て ください。',
      arti: 'Bawalah benda yang dapat ketahui nama dan alamat.',
      furigana: [
        { base: '外国人登録証', ruby: 'がいこくじんとうろくしょう' },
        { base: '持', ruby: 'も' },
        { base: '来', ruby: 'き' },
      ],
    },
    {
      no: 8,
      pembicara: 'カリナ',
      teks: 'はい。どうも ありがとう ございました。',
      arti: 'Ya. Terima kasih banyak.',
    },
  ],
}
