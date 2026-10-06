import type { Bunpou } from '@/types/bab'

// Pola 文型 — sumber: PDF Indonesia, "Pelajaran 39 · IV. Keterangan Tata Bahasa"
// (cetak 90-91 = idx 111-112). Penjelasan, contoh, dan arti contoh diambil dari buku.
// Ringkasan 文型 Honsatsu 第39課 (cetak 110 = idx 128) hanya memuat 3 kalimat:
//   ① ニュースを 読んで、びっくりしました。 ② 地震で ビルが 倒れました。
//   ③ 体の 調子が 悪いので、病院へ 行きます。 — sedangkan "Keterangan Tata Bahasa"
//      Indonesia memuat 4 pola: 〜て（て）、〜 / で / ので / 〜中で.
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '～て（て）、～',
    penjelasan:
      'Pada Pelajaran 16 dan Pelajaran 34 telah dipelajari pola kalimat mengenai ～て（て）、～. Di sini kita belajar cara penggunaan untuk menyatakan sebab atau alasan yang diberikan oleh hal di bagian depan kalimat (bagian ～て（て）), kemudian menyatakan akibat yang ditunjukkan oleh hal di bagian belakang kalimat yang disebabkan oleh hal di bagian depan kalimat. Pada bagian belakang tidak digunakan ekspresi keinginan atau keadaan.',
    contoh: [
      '① ニュースを 読んで、びっくりしました。',
      '② 家族に 会えなくて、寂いです。',
      '③ 土曜日は 都合が 悪くて、行けません。',
      '④ 話が 複雑で、よく わかりませんでした。',
      '⑤ 事故が あって、バスが 遅れて しまいました。',
      '⑥ 授業に 遅れて、先輩に しかられました。',
    ],
    artiContoh: [
      '(Saya) Kaget karena mendengar berita.',
      '(Saya) Kesepian karena tidak dapat bertemu dengan keluarga.',
      'Tidak bisa pergi karena berhalangan pada hari Sabtu.',
      'Ceritanya rumit maka kurang mengerti.',
      'Bus terlambat karena mengalami kecelakaan.',
      '(Saya) Dimarahi oleh senior karena terlambat masuk kelas.',
    ],
  },
  {
    no: 2,
    pola: 'Kata Benda で',
    penjelasan:
      'Kata Benda yang menyatakan fenomena alam, kejadian atau peristiwa seperti じしん, じこ dan lain-lain.',
    contoh: ['⑧ 地震で ビルが 倒れました。', '⑨ 病気で 会社を 休みました。'],
    artiContoh: ['Gedung roboh karena terjadi gempa bumi.', '(Saya) Tidak masuk kerja karena sakit.'],
  },
  {
    no: 3,
    pola: '［ Kata Kerja Bentuk Biasa ／ Kata Sifat い ／ Kata Sifat な ／ Kata Benda ］ ので、～',
    penjelasan:
      'Sama halnya dengan ～から yang telah dipelajari pada Pelajaran 9, ～ので juga menyatakan sebab atau alasan. ～ので sebenarnya menyatakan hubungan sebab akibat, kemudian bersifat untuk menjelaskan akibat yang dituntut oleh sebab, maka cocok untuk memperlembut ekspresi alasan meminta izin atau pengertian.',
    contoh: ['⑩ 日本語が わからないので、英語で 話して いただけませんか。', '⑪ 用事が あるので、お先に 失礼します。'],
    artiContoh: [
      'Karena tidak mengerti bahasa Jepang, tolong berbicara dalam bahasa Inggris.',
      'Karena ada urusan, (saya) pamit duluan.',
    ],
  },
  {
    no: 4,
    pola: '～中で',
    penjelasan:
      'で bermakna suatu titik untuk berpindah ke suatu tempat. Digunakan bersama dengan Kata Kerja Bentuk Kamus atau Kata Benda の.',
    contoh: ['⑫ 実は 来る 途中で 事故が あって、バスが 遅れて しまったんです。', '⑬ マラソンの 途中で 気分が 悪くなりました。'],
    artiContoh: [
      'Soalnya, di tengah perjalanan ada kecelakaan hingga bus terlambat.',
      'Ketika sedang maraton, badan kurang enak.',
    ],
  },
]

// Catatan tata bahasa = sub-bagian "Perhatian" di buku (terpisah dari bunpou,
// penomoran mulai dari 1).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: '～て（て）、～ — Perhatian',
    penjelasan:
      'Jika menggunakan ekspresi yang mengandung keinginan pada hal di bagian belakang kalimat (keinginan, perintah, ajakan, permintaan), digunakan ～から、.',
    contoh: ['⑦ 危ないですから、機械に 触らないで ください。', '× 危なくて、機械に 触らないで ください。'],
    artiContoh: ['Jangan menyentuh mesin karena berbahaya.', '(✗ salah) 危くて、機械に 触らないで ください。'],
  },
]