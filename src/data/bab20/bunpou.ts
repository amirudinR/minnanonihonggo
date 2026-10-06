import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Bentuk Biasa',
    penjelasan:
      'Kalimat dalam Bentuk Biasa (bentuk non-halus) dipakai dengan teman akrab atau orang yang dikenal. Bentuk Biasa Kata Kerja: bentuk kamus (sekarang), ～ない (negatif), ～た (lampau), ～なかった (negatif lampau). Partikel か pada kalimat tanya umumnya dihilangkan dan diganti nada naik.',
    contoh: ['アイスクリームを 食べる？', 'きのう 木村さんに 会った？', 'あした みんなで 京都へ 行かない？'],
    artiContoh: ['Mau makan es krim?', 'Kemarin bertemu dengan Sdr. Kimura?', 'Bagaimana kalau besok kita pergi ke Kyoto bersama-sama?'],
  },
  {
    no: 2,
    pola: 'Kata Benda₁ は Kata Benda₂ が (kata sifat)',
    penjelasan:
      'Menjelaskan keadaan atau sifat Kata Benda₁ melalui Kata Benda₂ yang ditandai partikel が. Contoh pola: 日本は 物価が 高い、東京は 人が 多い。',
    contoh: ['日本は 物価が 高い。', '東京は 人が 多い。'],
    artiContoh: ['Di Jepang harga barang-barang mahal.', 'Di Tokyo banyak orang.'],
  },
  {
    no: 3,
    pola: 'Kata Sifat な Bentuk Biasa',
    penjelasan:
      'Bentuk Biasa Kata Sifat な: ～だ (sekarang), ～じゃない (negatif), ～だった (lampau), ～じゃなかった (negatif lampau). Pada kalimat sekarang, だ disertakan setelah kata sifat な.',
    contoh: ['沖縄の 海は きれいだった。', '今 暇？ ……ううん、暇。'],
    artiContoh: ['Laut Okinawa indah.', 'Sekarang luang? ……Ya, luang.'],
  },
  {
    no: 4,
    pola: 'Kata Benda Bentuk Biasa',
    penjelasan:
      'Kata Benda dalam Bentuk Biasa: ～だ (sekarang), ～じゃない (negatif), ～だった (lampau), ～じゃなかった (negatif lampau). Dipakai dalam percakapan yang tidak formal.',
    contoh: ['きょうは 僕の 誕生日だ。', 'きょうは 休みじゃ ない。'],
    artiContoh: ['Hari ini hari ulang tahunku.', 'Hari ini bukan hari libur.'],
  },
]

// "IV. Keterangan Tata Bahasa" (PDF Indonesia idx 148-149). Penomoran mulai dari 1.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Bentuk Sopan dan Bentuk Biasa',
    penjelasan:
      'Dalam bentuk kalimat bahasa Jepang terdapat dua jenis bentuk kalimat, yaitu bentuk halus dan bentuk biasa. Bentuk yang diikuti です, ます disebut bentuk sopan, dan bentuk yang dipakai pada kalimat biasa disebut Bentuk Biasa (Lihat Buku Induk Pel.20 Latihan A1).',
    contoh: [
      'あした 東京へ 行きます。⇔ あした 東京へ 行く。',
      '毎日 忙しいです。⇔ 毎日 忙しい。',
      '相撲が 好きです。⇔ 相撲が 好きだ。',
      '富士山に 登りたいです。⇔ 富士山に 登りたい。',
      'ドイツへ 行った ことが ありません。⇔ ドイツへ 行った ことが ない。',
    ],
    artiContoh: [
      'Besok pergi ke Tokyo.',
      'Setiap hari sibuk.',
      'Suka sumo.',
      'Ingin mendaki gunung Fuji.',
      'Belum pernah pergi ke Jerman.',
    ],
  },
  {
    no: 2,
    pola: 'Pembagian cara pemakaian Bentuk Sopan dan Bentuk Biasa',
    penjelasan:
      '1) Percakapan: Bentuk sopan dipakai untuk orang yang baru saja dikenal, atasan, atau orang yang tidak begitu akrab walaupun orang itu generasi yang sama. Sedangkan bentuk biasa dipakai untuk teman akrab, rekan, atau percakapan antara keluarga. Jika memakai bentuk biasa kepada lawan bicara yang tidak tepat maka dianggap tidak sopan, karena itu perlu hati-hati kepada lawan bicara yang boleh atau tidak memakai bentuk biasa.\n2) Ketika menulis: Pada umumnya, surat tertulis dalam bentuk sopan. Untuk makalah, laporan, catatan harian dan lain-lainnya dipakai bentuk biasa (Lihat Buku Induk Pel.20 Latihan A1).',
    contoh: [],
    artiContoh: [],
  },
  {
    no: 3,
    pola: 'Percakapan dalam Bentuk Biasa',
    penjelasan:
      '1) Dalam kalimat tanya dengan bentuk biasa, pada umumnya partikel か tidak ditubuhkan pada akhir kalimat, tetapi diungkapkan dengan nada yang naik seperti のむ(↗) atau のんだ(↗).\n2) Dalam kalimat tanya dari Kata Benda atau Kata Sifat Bentuk な, bentuk biasa だ dari です dihilangkan. Untuk jawaban positif, kalau dijawab dengan bentuk だ memberi kesan yang kasar dan keras maka だ dihilangkan atau membubuhkan partikel penutup demi menghaluskan nada ungkapan.\n3) Dalam kalimat bentuk biasa, jika sudah dapat mengerti hubungan dari konteks kalimat sebelum dan sesudahnya, maka adakalanya partikel dihilangkan.\n4) Dalam kalimat bentuk biasa, い dari Kata Kerja Bentuk て いる juga sering dihilangkan.\n5) けど mempunyai fungsi yang sama dengan が, dan sering digunakan dalam percakapan.',
    contoh: [
      'コーヒーを 飲む？ ……うん、飲む。',
      '今晩 暇？ ……うん、暇／暇だよ。',
      'ごはんを 食べる？',
      'あした 京都[へ] 行かない？',
      '辞書、持って[い]る？ ……ううん、持って[い]ない。',
      'その カレー[は] おいしい？ ……ううん、辛いけど、おいしい。',
    ],
    artiContoh: [
      'Mau minum kopi? ……Ya, mau minum.',
      'Nanti malam luang? ……Ya, luang／luang!',
      'Mau makan?',
      'Bagaimana kalau besok ke Kyoto?',
      'Punya kamus? ……Tidak, tidak punya.',
      'Kare itu enak? ……Ya, pedas, tetapi enak.',
    ],
  },
]
