import type { Bunpou } from '@/types/bab'

// 4 pola + 2 catatan — sumber: PDF Indonesia, "Pelajaran 42 · IV. Keterangan Tata Bahasa"
// (idx 129-130). Penjelasan, contoh, dan arti contoh diambil dari buku.
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '{ Kata Kerja Bentuk Kamus / Kata Benda の } ために、～',
    penjelasan:
      'untuk menyatakan tujuan. Kata Benda の ために digunakan dengan maksud menggantikan Kata Benda.',
    contoh: [
      '自分の 店を 持つ ために、貯金しています。',
      '引っ越しの ために、車を 借ります。',
      '健康の ために、毎朝 走っています。',
      '家族の ために、うちを 建てます。',
    ],
    artiContoh: [
      'Saya menabung uang untuk memiliki toko sendiri.',
      'Saya meminjam/menyewa mobil untuk pindah rumah.',
      'Saya berlari setiap pagi demi kesehatan.',
      'Saya membangun rumah untuk keluarga.',
    ],
  },
  {
    no: 2,
    pola: '{ Kata Kerja Bentuk Kamus の / Kata Benda } に ～',
    penjelasan:
      'Pola Kalimat ini digunakan bersama dengan つかいます、いいです、べんりです、やくにたちます、［じかん］ がかかりました dan lain-lainnya untuk menyatakan kegunaan atau tujuannya.',
    contoh: ['この はさみは 花を 切るのに 使います。', 'この かばんは 大きくて、旅行に 便利です。'],
    artiContoh: ['Gunting ini digunakan untuk memotong bunga.', 'Tas ini besar sehingga praktis untuk perjalanan.'],
  },
  {
    no: 3,
    pola: 'Kata Keterangan Bilangan は／も',
    penjelasan:
      'Kata Bantu は dibubuhkan pada Kata Keterangan Bilangan, menyatakan batas minimal yang dikisarkan oleh pembicara. Kata Bantu も dibubuhkan pada Kata Keterangan Bilangan, menyatakan bahwa pembicara merasa banyak jumlahnya.',
    contoh: ['わたしは ［ボーナスの］ 半分は 貯金する つもりです。', '……えっ、半分も 貯金するんですか。'],
    artiContoh: ['Saya berencana menabung separuhnya [bonus].', '…… Eh! menabung separuhnya?'],
  },
  {
    no: 4,
    pola: '～に よって',
    penjelasan:
      'Jika Kata Kerja yang menyatakan penciptaan atau penemuan digunakan dalam bentuk pasif (Contoh: かきます, はつめいします, はっけんします dan lain-lainnya), pelaku ditunjuk dengan に よって, tetapi bukan dengan に.',
    contoh: ['チキンラーメンは 1958年に 安藤百福さんによって 発明されました。'],
    artiContoh: ['Chicken Ramen diciptakan oleh Bapak Ando Momofuku pada tahun 1958.'],
  },
]

// Catatan tata bahasa = sub-bagian "Perhatian" di buku (terpisah dari bunpou, penomoran dari 1).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'ために — Perhatian 1',
    penjelasan:
      'Sebagai ungkapan yang mirip terdapat ～ように yang telah dipelajari pada Pelajaran 36, namun sebelum ために digunakan Kata Kerja Keinginan Bentuk Kamus, sedangkan sebelum ように digunakan Kata Kerja Non Keinginan Bentuk Kamus atau Kata Kerja Bentuk Negatif. Jika membandingkan kedua kalimat di bawah ini, ① di bawah ini bermaksud dengan tujuan untuk "memiliki toko sendiri" dengan keinginannya, kemudian untuk mencapainya menabung uang, sedangkan berbeda nuansanya yaitu ⑤ dengan tujuan untuk menabung uang agar menjadi kondisi "dapat memiliki toko sendiri".',
    contoh: ['① 自分の 店を 持つ ために、貯金しています。', '⑤ 自分の 店が 持てるように、貯金しています。'],
    artiContoh: [
      'Saya menabung uang untuk memiliki toko sendiri.',
      'Saya menabung uang agar dapat memiliki toko sendiri.',
    ],
  },
  {
    no: 2,
    pola: 'ために — Perhatian 2',
    penjelasan:
      'なります terdapat dua macam cara penggunaan, yaitu sebagai Kata Kerja Keinginan dan Kata Kerja Non Keinginan.',
    contoh: [
      '弁護士に なる ために、法律を 勉強しています。',
      '日本語が 上手になる ように、毎日 勉強しています。',
    ],
    artiContoh: [
      'Saya belajar hukum untuk menjadi pengacara.',
      'Saya belajar setiap hari agar pandai berbahasa Jepang. (Pel.36)',
    ],
  },
]