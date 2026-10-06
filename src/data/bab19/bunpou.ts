import type { Bunpou } from '@/types/bab'

// 文型 bab 19 (Honsatsu idx 175, cetak 154).
// `pola` ditulis dalam pola JP; penjelasan & arti contoh mengikuti
// section "II. Terjemahan — Pola Kalimat / Contoh Kalimat" (PDF Indonesia idx 140).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '～を 見た ことが あります',
    penjelasan:
      'Menyatakan pengalaman di masa lalu — "Pernah ～?". Bentuk: Kata Benda を + Kata Kerja (masu-form) + ことが あります.',
    contoh: ['北海道へ 行った ことが ありますか。', '馬に 乗った ことが ありますか。'],
    artiContoh: ['Apakah pernah pergi ke Hokkaidō?', 'Apakah pernah berkuda?'],
  },
  {
    no: 2,
    pola: '休みの 日は ～したり、～したり します',
    penjelasan:
      'Menyatakan kegiatan yang dilakukan berulang-ulang pada hari tertentu — "Pada hari libur, melakukan ～ dan ～".',
    contoh: ['休みの 日は テニスを したり、散歩に 行ったり します。'],
    artiContoh: ['Pada hari libur, bermain tenis, dan berjalan-jalan.'],
  },
  {
    no: 3,
    pola: 'これから だんだん ～くなります',
    penjelasan:
      'Menyatakan perubahan keadaan secara bertahap — "Secara pelelahan-lahan menjadi ～".',
    contoh: ['これから だんだん 暑くなります。'],
    artiContoh: ['Secara pelelahan-lahan menjadi panas.'],
  },
]

// "IV. Keterangan Tata Bahasa" (PDF Indonesia idx 142-143). Penomoran mulai dari 1,
// terpisah dari bunpou.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Bentuk た',
    penjelasan:
      'Bentuk konjugasi Kata Kerja yang berakhir dengan た atau だ disebut bentuk た. Cara membuat bentuk た adalah て atau で dari bentuk て diubah menjadi た atau だ (Lihat Buku Induk Pel.19 Latihan A1).',
    contoh: ['かいて → かいた', 'のんで → のんだ', 'たべて → たべた', 'きて → きた', 'して → した'],
    artiContoh: ['menulis → menulis', 'meminum → minum', 'makan → makan', 'datang → datang', 'melakukan → melakukan'],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk た ことが あります',
    penjelasan:
      'Ungkapan ini menyatakan sesuatu yang dianggap telah dilakukan pada waktu lampau sebagai pengalaman pada saat Restrictions. Perlu hati-hati bahwa jika hanya menyatakan kenyataan pada waktu lampau sebagaimana pernah melakukan suatu aksi pada suatu titik waktu lampau, memakai bentuk waktu lampau.',
    contoh: ['馬に 乗った ことが あります。', '去年 北海道で 馬に 乗りました。'],
    artiContoh: ['Pernah berkuda.', 'Tahun lalu berkuda di Hokkaidō.'],
  },
  {
    no: 3,
    pola: 'Kata Kerja₁ Bentuk たり、 Kata Kerja₂ Bentuk たり します',
    penjelasan:
      'Jika mengangkat beberapa Kata Benda (lebih dari dua) yang mewakili secara paralel pada umumnya memakai partikel や, tetapi menyatakan dengan mengangkat beberapa aksi yang mewakili maka digunakan pola kalimat ini. Waktu ditunjukkan pada akhir kalimat. [Perhatian] Perlu hati-hati bahwa cara penggunaannya berbeda dengan Kata Kerja₁ Bentuk て, [Kata Kerja₂ Bentuk て,] Kata Kerja₃ yang telah dipelajari di Pelajaran 16. Akan tetapi, tidak ada hubungan tentang waktu di antara aksi yang diangkat dengan pola kalimat ini, sehingga tidak wajar untuk mengatakan hal-hal yang dilakukan setiap hari (bangun pagi, makan, tidur malam, dan lain-lain).',
    contoh: [
      '日曜日は テニスを したり、映画を 見たり します。',
      '日曜日は テニスを したり、映画を 見たり しました。',
      '日曜日は テニスを して、映画を 見ました。',
    ],
    artiContoh: [
      'Pada hari Minggu bermain tenis, dan menonton film.',
      'Pada hari Minggu yang lalu bermain tenis, dan menonton film.',
      'Pada hari Minggu yang lalu, bermain tenis, kemudian menonton film.',
    ],
  },
  {
    no: 4,
    pola: 'Kata Sifat い（～い）／な（～な）／Kata Bend に → ～に なります',
    penjelasan: 'Menunjukkan perubahan kondisi.',
    contoh: ['寒い → 寒くなります', '元気［な］ → 元気になります', '25歳 → 25歳になります'],
    artiContoh: ['menjadi dingin', 'menjadi sehat', 'menjadi (umur) dua puluh lima tahun'],
  },
]