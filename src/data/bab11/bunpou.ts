import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda(benda) Kata Bantu Bilangan Kata Kerja',
    penjelasan: 'Kata bantu bilangan diletakkan sebelum kata kerja untuk menyatakan jumlah.',
    contoh: ['みかんを ４つ 買いました。', '外国人の 学生が ２人 います。'],
    artiContoh: ['Membeli 4 buah jeruk.', 'Ada 2 orang siswa asing.']
  },
  {
    no: 2,
    pola: 'どのくらい Kata Kerjaますか',
    penjelasan: 'Digunakan untuk menanyakan jangka waktu atau jumlah.',
    contoh: ['どのくらい スペイン語を 勉強しましたか。……３か月 勉強しました。', '大阪から 東京まで どのくらい かかりますか。……新幹線で ２時間半 かかります。'],
    artiContoh: ['Berapa lama belajar bahasa Spanyol? ……Belajar 3 bulan.', 'Dari Osaka sampai Tokyo memerlukan waktu berapa lama? ……Dengan Shinkansen memerlukan waktu 2 jam setengah.']
  },
  {
    no: 3,
    pola: 'Kata Benda(jangka waktu) に ～回 Kata Kerjaます',
    penjelasan: 'Digunakan untuk menyatakan frekuensi (berapa kali) suatu kegiatan dilakukan dalam jangka waktu tertentu.',
    contoh: ['１か月に ２回 映画を 見ます。'],
    artiContoh: ['Dalam 1 bulan menonton film 2 kali.']
  },
  {
    no: 4,
    pola: 'Kata Bantu Bilangan / Kata Benda(waktu) だけ',
    penjelasan: 'だけ berarti "hanya", ditambahkan di belakang kata bantu bilangan atau kata benda.',
    contoh: ['休みは 日曜日だけです。', 'りんごを １つだけ 買いました。'],
    artiContoh: ['Liburnya hanya hari Minggu.', 'Saya membeli apel hanya satu.']
  }
]

export const catatanTataBahasa: Bunpou[] = []
