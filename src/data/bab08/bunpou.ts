import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda は Kata Sifatな［な］ です',
    penjelasan: 'Kalimat adjektival positif waktu non lampau diakhiri です.',
    contoh: ['桜は きれいです。'],
    artiContoh: ['Sakura indah.']
  },
  {
    no: 2,
    pola: 'Kata Benda は Kata Sifatい（～い） です',
    penjelasan: 'Kalimat adjektival positif waktu non lampau diakhiri です.',
    contoh: ['富士山は 高いです。'],
    artiContoh: ['Gunung Fuji tinggi.']
  },
  {
    no: 3,
    pola: 'Kata Sifatなな Kata Benda',
    penjelasan: 'Jika Kata Sifat な menerangkan Kata Benda, Kata Sifat な diletakkan di depan Kata Benda dengan menambahkan な.',
    contoh: ['桜は きれいな 花です。'],
    artiContoh: ['Sakura adalah bunga yang indah.']
  },
  {
    no: 4,
    pola: 'Kata Sifatい（～い） Kata Benda',
    penjelasan: 'Jika Kata Sifat い menerangkan Kata Benda, Kata Sifat い diletakkan di depan Kata Benda.',
    contoh: ['富士山は 高い 山です。'],
    artiContoh: ['Gunung Fuji adalah gunung yang tinggi.']
  }
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Sifat',
    penjelasan: 'Kata Sifat berfungsi sebagai predikat dan menunjukkan kondisi Kata Benda dalam kalimat Kata Benda は Kata Sifat です, atau digunakan sebagai kata yang menerangkan Kata Benda. Dalam bahasa Jepang terdapat dua jenis Kata Sifat yaitu Kata Sifat な dan Kata Sifat い, lalu perubahan bentuknya berbeda.',
    contoh: [],
    artiContoh: []
  },
  {
    no: 2,
    pola: 'Kata Benda は Kata Sifatな［な］ です\nKata Benda は Kata Sifatい（～い） です',
    penjelasan: 'Kalimat adjektival positif waktu non lampau diakhiri です. です menunjukkan sikap yang hormat terhadap pendengar. Kata Sifat な disambung dengan です tanpa な, sedangkan Kata Sifat い disambung dengan です dalam bentuk yang sama.',
    contoh: ['ワットさんは 親切です。', '富士山は 高いです。'],
    artiContoh: ['Bapak Watt baik hati.', 'Gunung Fuji tinggi.']
  },
  {
    no: 3,
    pola: 'Negatif Kata Sifatな',
    penjelasan: 'Negatif waktu non lampau dari Kata Sifat な dibuat dengan dibubuhkan じゃ（では）ありません pada bentuk tanpa な dari Kata Sifat な.',
    contoh: ['あそこは 静かじゃ ありません。'],
    artiContoh: ['Di sana tidak sunyi.']
  },
  {
    no: 4,
    pola: 'Negatif Kata Sifatい',
    penjelasan: 'Negatif waktu non lampau dari Kata Sifat い dibuat dengan membubuhkan くないです pada bentuk yang dihilangkan い di bagian akhir dari Kata Sifat い. Pengecualian: Negatif untuk いいです adalah よくないです.',
    contoh: ['この 本は おもしろくないです。'],
    artiContoh: ['Buku ini tidak menarik.']
  },
  {
    no: 5,
    pola: 'Cara membuat kalimat tanya',
    penjelasan: 'Cara membuat kalimat tanya dari kalimat adjektival sama seperti kalimat nominal (Lihat Pel.1) dan kalimat verbal (Lihat Pel.4). Untuk jawabannya digunakan Kata Sifat, dan tidak dapat menjawab dengan menggunakan そうです atau そうじゃありません.',
    contoh: ['ペキンは 寒いですか。……はい、寒いです。', '奈良公園は にぎやかですか。……いいえ、にぎやかじゃ ありません。'],
    artiContoh: ['Apakah Beijing dingin? ……Ya, dingin.', 'Apakah Taman Nara ramai? ……Tidak, tidak ramai.']
  },
  {
    no: 6,
    pola: 'Kata Sifatなな Kata Benda\nKata Sifatい（～い） Kata Benda',
    penjelasan: 'Jika Kata Sifat menerangkan Kata Benda, Kata Sifat diletakkan di depan Kata Benda. Kata Sifat な menerangkan Kata Benda dengan bentuk diikuti な.',
    contoh: ['ワットさんは 親切な 先生です。', '富士山は 高い 山です。'],
    artiContoh: ['Bapak Watt adalah guru yang baik hati.', 'Gunung Fuji adalah gunung yang tinggi.']
  },
  {
    no: 7,
    pola: '～が、～',
    penjelasan: 'が menyambungkan kalimat yang menyatakan sebelum dan sesudah secara paradoksal. Dalam kalimat adjektival yang subjeknya sama, hal yang bernilai positif oleh si pembicara diletakkan di bagian depan, maka hal yang negatif di bagian belakangnya. Sebaliknya, jika hal yang bernilai negatif oleh si pembicara diletakkan di bagian depan, maka hal yang positif di bagian belakangnya.',
    contoh: ['日本の 食べ物は おいしいですが、高いです。'],
    artiContoh: ['Makanan Jepang enak, tetapi mahal.']
  },
  {
    no: 8,
    pola: 'とても / あまり',
    penjelasan: 'とても dan あまり adalah Kata Keterangan yang menyatakan tingkat, dan jika menerangkan Kata Sifat kata tersebut diletakkan di depan Kata Sifat. とても mempunyai arti sangat dan digunakan pada kalimat positif. あまり digunakan bersamaan dengan kalimat negatif yang mempunyai arti tidak begitu.',
    contoh: ['ペキンは とても 寒いです。', 'これは とても 有名な 映画です。', 'シャンハイは あまり 寒くないです。', 'さくら大学は あまり 有名な 大学じゃ ありません。'],
    artiContoh: ['Beijing sangat dingin.', 'Ini film yang sangat terkenal.', 'Shanghai tidak begitu dingin.', 'Universitas Sakura bukan universitas yang begitu terkenal.']
  },
  {
    no: 9,
    pola: 'Kata Benda は どうですか',
    penjelasan: 'Pertanyaan ini digunakan ketika menanyakan kesan atau pendapat kepada lawan bicara mengenai hal-hal yang pernah dialaminya.',
    contoh: ['日本の 生活は どうですか。……楽しいです。'],
    artiContoh: ['Bagaimana kehidupan di Jepang? ……Senang.']
  },
  {
    no: 10,
    pola: 'Kata Benda1 は どんな Kata Benda2ですか',
    penjelasan: 'Pertanyaan ini digunakan untuk menanyakan keadaan atau sifat dari Kata Benda1 secara jelas yang tergolong dalam Kata Benda2. Kata Benda2 di situ adalah hal-hal yang dapat dimasukkan pada Kata Benda1.',
    contoh: ['奈良は どんな 町ですか。……古い 町です。'],
    artiContoh: ['Nara kota yang bagaimana? ……Kota yang tua.']
  },
  {
    no: 11,
    pola: 'そうですね',
    penjelasan: 'Ini dipakai untuk menunjukkan sikap sedang berpikir apa yang mau dijawab dengan sambil menyetujui ucapan dari lawan bicara tersebut. Bedakan penggunaan dengan そうですね (Lihat Pel.2) yang artinya menyetujui pendapat lawan bicara.',
    contoh: ['お仕事は どうですか。……そうですね。忙しいですが、おもしろいです。'],
    artiContoh: ['Bagaimana pekerjaannya? ……Bagaimana ya. Sibuk, tetapi menarik.']
  }
]
