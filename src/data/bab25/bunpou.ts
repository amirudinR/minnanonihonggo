import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kalau turun hujan, saya tidak pergi.',
    penjelasan: '',
    contoh: ['雨が 降ったら、出かけません。'],
    artiContoh: ['Kalau turun hujan, saya tidak pergi.']
  },
  {
    no: 2,
    pola: 'Walaupun turun hujan, saya pergi.',
    penjelasan: '',
    contoh: ['雨が 降っても、出かけます。'],
    artiContoh: ['Walaupun turun hujan, saya pergi.']
  }
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Bentuk Biasa Lampau ら、～（kalimat pokok）',
    penjelasan: 'Menyatakan persyaratan asumsi dengan membubuhkan ら pada Bentuk Biasa Lampau Kata Kerja, Kata Sifat dan Kata Benda yang menunjukkan isi suatu hal yang terjadi di bawah persyaratan asumsi, atau tidak terjadi hal yang sama sekali tidak dapat dibayangkan. Untuk kalimat pokok dapat digunakan ekspresi untuk menunjukkan keinginan, harapan ajakan, permohonan dan lain-lain dari lawan bicara.\n\n[Perhatian] Di belakang kalimat bentuk 〜と（kalimat pokok), ekspresi untuk keinginan, harapan, ajakan, permohonan dan lain-lain tidak dapat dipakai.\n× 時間が あると、コンサートに 行きます。（keinginan）／コンサートに 行きたいです。（harapan）／コンサートに 行きませんか。（ajakan）／ちょっと 手伝って ください。（permohonan）',
    contoh: [
      'お金が あったら、旅行 します。',
      '時間が なかったら、テレビを 見ません。',
      '安かったら、パソコンを 買いたいです。',
      '暇だったら、手伝って ください。',
      'いい 天気だったら、散歩しませんか。'
    ],
    artiContoh: [
      'Kalau punya uang, berwisata.',
      'Kalau tidak ada waktu, tidak menonton TV.',
      'Kalau murah, ingin membeli komputer.',
      'Kalau sedang luang, tolong bantu saya.',
      'Kalau cuaca baik, bagaimana kita jalan-jalan?'
    ]
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk たら、～（kalimat pokok）',
    penjelasan: 'Jika sebelumnya telah mengetahui bahwa maksud dari Kata Kerja Bentuk たら pasti terjadi, setelah terjadi hal itu menyatakan terjadinya hal-hal seperti aksi atau kejadian yang disusul kalimat pokok.',
    contoh: [
      '10時に なったら、出かけましょう。',
      'うちへ 帰ったら、すぐ シャワーを 浴びます。'
    ],
    artiContoh: [
      'Kalau sudah sampai pukul sepuluh, kita berangkat.',
      'Kalau pulang ke rumah, saya langsung mandi.'
    ]
  },
  {
    no: 3,
    pola: 'Kata Kerja Bentuk て / Kata Kerja (Bentuk ない) なくて / Kata Sifat い（～い）→～くて / Kata Sifat な[な]→～で / Kata Benda で も、～（kalimat pokok）',
    penjelasan: 'Ini menunjukkan persyaratan asumsi paradoks. Dengan kalimat yang disusul bentuk て も (kalimat pokok), ditunjukkan terjadi hal yang terbaik yang biasanya dapat diduga di bawah persyaratan asumsi, atau tidak terjadi hal yang biasanya dapat diduga.',
    contoh: [
      '雨が 降っても、洗濯 します。',
      '安くても、わたしは グループ旅行が 嫌いです。',
      '便利でも、パソコンを 使いません。',
      '日曜日でも、働きます。'
    ],
    artiContoh: [
      'Walaupun hujan, mencuci pakaian.',
      'Walaupun murah, saya tidak suka tur rombongan.',
      'Walaupun praktis, tidak memakai komputer.',
      'Walaupun hari Minggu, bekerja.'
    ]
  },
  {
    no: 4,
    pola: 'もし',
    penjelasan: 'もし dipakai bersama dengan 〜たら, dan berfungsi untuk memberitahukan sebelumnya bahwa kalimat tersebut adalah kalimat persyaratan. もし menekankan perasaan si pembicara.',
    contoh: ['もし １億円 あったら、いろいろな 国を 旅行したいです。'],
    artiContoh: ['Kalau punya seratus juta yen, ingin berwisata di berbagai negara.']
  },
  {
    no: 5,
    pola: 'Subjek dalam anak kalimat',
    penjelasan: 'Pada Pelajaran 16 bagian 2, telah dijelaskan bahwa subjek dalam kalimat 〜てから ditunjuk dengan が. Sama halnya dengan 〜てから, 〜とき atau 〜まえに, untuk 〜たら dan 〜ても subjek dalam anak kalimat ditunjuk dengan が.',
    contoh: [
      '友達が 来る まえに、部屋を 掃除します。',
      '妻が 病気の とき、会社を 休みます。',
      '友達が 約束の 時間に 来なかったら、どう しますか。'
    ],
    artiContoh: [
      'Sebelum teman datang, membersihkan kamar.',
      'Waktu istri sakit, saya tidak masuk kerja.',
      'Kalau teman tidak datang pada waktu janji, bagaimana?'
    ]
  }
]
