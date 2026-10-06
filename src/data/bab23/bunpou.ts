import type { Bunpou } from '@/types/bab'

// Sumber: PDF Indonesia "IV. Keterangan Tata Bahasa" Pelajaran 23 (idx 166-167).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Bentuk Kamus／Kata Kerja (Bentuk ない) ない／Kata Sifat Bentuk い（～い）／Kata Sifat な[な]／Kata Benda の とき、～（kalimat pokok）',
    penjelasan:
      'とき menunjukkan waktu ketika terjadinya keadaan dan aksi atau fenomena yang dinyatakan dalam kalimat pokok yang menyusul. Bentuk yang diletakkan di depan とき sama dengan bentuk yang menerangkan Kata Benda.\n\nKalimat dengan menggunakan とき tidak berpengaruh pada induk kalimat.',
    contoh: [
      '図書館で 本を 借りる とき、カードが 要ります。',
      '使い方が わからない とき、わたしに 聞いて ください。',
      '体の 調子が 悪い とき、「元気茶」を 飲みます。',
      '暇な とき、うちへ 遊びに 来ませんか。',
      '妻が 病気の とき、会社を 休みます。',
      '若い とき、勉強しませんでした。',
      '子どもの とき、よく 川で 泳ぎました。',
    ],
    artiContoh: [
      'Ketika meminjam buku di perpustakaan, diperlukan kartu.',
      'Jika tidak tahu cara pemakaiannya, silakan tanya kepada saya.',
      'Ketika badan tidak enak, minum "Genki-cha".',
      'Pada waktu luang, bagaimana kalau datang bermain ke rumah saya?',
      'Jika istri sakit, saya tidak masuk kerja.',
      'Waktu muda, tidak begitu belajar.',
      'Waktu masih kecil, sering berenang di sungai.',
    ],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk Kamus／Kata Kerja Bentuk た とき、～（kalimat pokok）',
    penjelasan:
      'Jika Kata Kerja di depan とき adalah Bentuk Kamus, maka kalimat pokok menunjukkan hal yang terjadi sebelum kalimat ～と. Jika Kata Kerja di depan とき adalah Bentuk た, maka kalimat pokok menunjukkan hal yang terjadi setelah kalimat ～と.\n\n“Waktu mau pergi ke Paris” menyatakan bahwa membeli tas sebelum tiba di Paris, sedangkan “Waktu pergi ke Paris” menyatakan bahwa membeli tas setelah tiba di Paris, yaitu membelinya di Paris.',
    contoh: ['パリへ 行く とき、かばんを 買いました。', 'パリへ 行った とき、かばんを 買いました。'],
    artiContoh: ['Waktu mau pergi ke Paris, saya membeli tas.', 'Waktu pergi ke Paris, saya membeli tas.'],
  },
  {
    no: 3,
    pola: 'Kata Kerja Bentuk Kamus と、～（kalimat pokok）',
    penjelasan:
      'と menyatakan jika suatu aksi atau kejadian di depan と yang terjadi, menyatakan secara pasti akibat terjadinya suatu keadaan, aksi, fenomena, dan kejadian yang diikuti oleh kalimat pokok yang menyusul di belakangnya.',
    contoh: ['この ボタンを 押すと、お釣りが 出ます。', 'これを 回すと、音が 大きく なります。', '右へ 曲がると、郵便局が あります。'],
    artiContoh: ['Kalau tekan tombol ini, uang kembaliannya keluar.', 'Kalau memutar ini, suaranya akan membesar.', 'Kalau belok ke kanan, ada kantor pos.'],
  },
  {
    no: 4,
    pola: 'Kata Benda が Kata Sifat',
    penjelasan:
      'Pada Pelajaran 14, telah dipelajari hal yang menyatakan suatu fenomena yang dirasakan dengan panca indera (mata, telinga dan lain-lain) secara langsung sesuai dengan perasaan, atau menyampaikan peristiwa secara objektif, dengan menggunakan partikel が. Hal ini tidak sebatas kalimat verbal, tetapi adakalnya juga dipakai untuk kalimat adjektival.',
    contoh: ['音が 小さいです。'],
    artiContoh: ['Suaranya kecil.'],
  },
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda を＋Kata Kerja yang menunjukkan gerakan berpindah',
    penjelasan:
      'を yang digunakan bersama dengan Kata Kerja yang menunjukkan gerakan berpindah seperti さんぽします、わたります、あるきます dan lain-lain menunjukkan tempat yang dilewati orang atau benda.',
    contoh: ['公園を 散歩します。', '道を 渡ります。', '交差点を 右へ 曲がります。'],
    artiContoh: ['Berjalan-jalan di taman. (Pel.13)', 'Menyeberangi jalan.', 'Di perempatan belok ke kanan.'],
  },
]
