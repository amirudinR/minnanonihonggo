import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Apakah Sdr. Miller bisa membaca Kanji?',
    penjelasan: '',
    contoh: ['ミラーさんは 漢字を 読む ことが できます。'],
    artiContoh: ['Apakah Sdr. Miller bisa membaca Kanji?']
  },
  {
    no: 2,
    pola: 'Hobi saya adalah menonton film.',
    penjelasan: '',
    contoh: ['わたしの 趣味は 映画を 見る ことです。'],
    artiContoh: ['Hobi saya adalah menonton film.']
  },
  {
    no: 3,
    pola: 'Sebelum tidur, menulis catatan harian.',
    penjelasan: '',
    contoh: ['寝る まえに、日記を 書きます。'],
    artiContoh: ['Sebelum tidur, menulis catatan harian.']
  }
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Bentuk Kamus',
    penjelasan: 'Ini adalah bentuk dasar Kata Kerja yang disajikan di kamus. Sesuai dengan kelompok Kata Kerja, cara membuat bentuk kamus dari bentuk ます sebagai berikut:\n\n1) Kata Kerja Kelompok I\nBunyi terakhir bentuk ます adalah bunyi kolom い, maka ini diganti dengan bunyi kolom う.\nかき-ます → かく\nいそぎ-ます → いそぐ\nよみ-ます → よむ\nあそび-ます → あそぶ\nとり-ます → とる\nまち-ます → まつ\nすい-ます → すう\nはなし-ます → はなす\n\n2) Kata Kerja Kelompok II\nMembubuhkan る pada bentuk ます.\nたべ-ます → たべる\nみ-ます → みる\n\n3) Kata Kerja Kelompok III\nBentuk kamus します adalah する, sedangkan bentuk kamus きます adalah くる.',
    contoh: [],
    artiContoh: []
  },
  {
    no: 2,
    pola: 'Kata Benda / Kata Kerja Bentuk Kamus こと が できます',
    penjelasan: 'できます adalah Kata Kerja yang menunjukkan hal yang dapat dilakukan atas kemampuan yang dimiliki orang itu, atau aksi yang memungkinkan dengan kondisi itu. Objek untuk できます ditunjuk dengan が, dan isi kemampuan atau kemungkinan ditunjuk dengan Kata Benda atau Kata Kerja Bentuk Kamus こと.\n\n1) Untuk Kata Benda\nDipakai Kata Benda yang bersifat aksi (うんてん, かいもの, スキー, ダンス). Kemudian digunakan juga Kata Benda seperti にほんご, atau ピアノ yang menunjukkan ketrampilan.\n\n2) Untuk Kata Kerja\nJika mengatakan dapat melakukan suatu perbuatan, maka bentuk frase Kata Benda dengan membubuhkan こと pada Kata Kerja Bentuk Kamus, kemudian dilanjutkan dengan が できます di belakangnya.',
    contoh: [
      'ミラーさんは 日本語が できます。',
      '雪が たくさん 降りましたから、ことしは スキーが できます。',
      'ミラーさんは 漢字を 読む ことが できます。',
      'カードで 払う ことが できます。'
    ],
    artiContoh: [
      'Sdr. Miller bisa berbahasa Jepang.',
      'Karena salju turun banyak, tahun ini dapat bermain ski.',
      'Sdr. Miller bisa membaca Kanji.',
      'Dapat membayar dengan kartu.'
    ]
  },
  {
    no: 3,
    pola: 'わたしの 趣味は Kata Benda / Kata Kerja Bentuk Kamus こと です',
    penjelasan: 'Jika memakai Kata Kerja Bentuk Kamus こと maka dapat menujukkan isi hobi lebih konkret.',
    contoh: [
      'わたしの 趣味は 音楽です。',
      'わたしの 趣味は 音楽を 聞く ことです。'
    ],
    artiContoh: [
      'Hobi saya adalah musik.',
      'Hobi saya adalah mendengarkan musik.'
    ]
  },
  {
    no: 4,
    pola: 'Kata Kerja1 Bentuk Kamus / Kata Benda の / Kata Keterangan Bilangan (jangka waktu) まえに、Kata Kerja2',
    penjelasan: '1) Untuk Kata Kerja\nMenyatakan bahwa sebelum Kata Kerja1, terjadi Kata Kerja2. Perlu hati-hati bahwa jika waktu kalimat (waktu Kata Kerja2) menunjukkan waktu lampau atau juga menunjukkan waktu non lampau, maka Kata Kerja1 selalu berbentuk Bentuk Kamus.\n\n2) Untuk Kata Benda\nDi belakang Kata Benda membubuhkan の. Menggunakan Kata Benda yang bersifat aksi.\n\n3) Untuk Kata Keterangan Bilangan (jangka waktu)\nPerlu hati-hati bahwa di belakang Kata Keterangan Bilangan (jangka waktu) tidak membubuhkan の.',
    contoh: [
      '日本へ 来る まえに、日本語を 勉強 しました。',
      '寝る まえに、本を 読みます。',
      '食事の まえに、手を 洗います。',
      '田中さんは １時間まえに、出かけました。'
    ],
    artiContoh: [
      'Sebelum datang di Jepang, belajar bahasa Jepang.',
      'Sebelum tidur, membaca buku.',
      'Sebelum makan mencuci tangan.',
      'Sdr. Tanaka telah keluar sejam yang lalu.'
    ]
  },
  {
    no: 5,
    pola: 'なかなか',
    penjelasan: 'なかなか menyertai ekspresi negatif di belakangnya, dan menunjukkan arti yang tidak mudah untuk melakukan atau tidak dapat melakukan sebagaimana apa yang diharapkan.\n[Perhatian] Contoh kalimat 11 adalah kalimat yang kata にほんで dijadikan sebagai topik. Dengan demikian, Kata Benda yang dibubuhkan で dijadikan sebagai topik, maka Kata Benda berbentuk Kata Benda では.',
    contoh: [
      '日本では なかなか 馬を 見る ことが できません。'
    ],
    artiContoh: [
      'Di Jepang tidak mudah untuk melihat kuda.'
    ]
  },
  {
    no: 6,
    pola: 'ぜひ',
    penjelasan: 'Dipakai bersama dengan ekspresi yang menunjukkan harapan si pembicara, dan berfungsi untuk menekankannya.',
    contoh: [
      'ぜひ 北海道へ 行きたいです。',
      'ぜひ 遊びに 来て ください。'
    ],
    artiContoh: [
      'Ingin sekali pergi ke Hokkaido.',
      'Sungguh diharapkan untuk datang bermain.'
    ]
  }
]
