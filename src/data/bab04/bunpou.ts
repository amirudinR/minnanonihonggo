import type { Bunpou } from '@/types/bab'

// 4 pola dari 文型 (halaman cetak 30)
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '今 ～時～分 です',
    penjelasan:
      'Untuk menyatakan waktu, dibubuhkan Kata Bantu Bilangan 時, dan 分 di belakang angka. Untuk menanyakan waktu, なん dibubuhkan di depan じ atau ぶん.',
    contoh: ['今 4時5分です。'],
    artiContoh: ['Sekarang pukul empat lewat lima menit.'],
  },
  {
    no: 2,
    pola: 'Kata Benda(waktu) から Kata Benda(waktu) まで Kata Kerja',
    penjelasan:
      'から menunjukkan titik permulaan waktu atau tempat, sedangkan まで menunjukkan titik akhir waktu atau tempat.',
    contoh: ['わたしは 9時から 5時まで 働きます。'],
    artiContoh: ['Saya bekerja dari pukul sembilan sampai pukul lima.'],
  },
  {
    no: 3,
    pola: 'Kata Benda(waktu) に Kata Kerja',
    penjelasan:
      'Setelah Kata Benda yang menunjukkan waktu, dibubuhkan partikel に untuk menunjukkan waktu ketika melakukan sesuatu.',
    contoh: ['わたしは 朝 6時に 起きます。'],
    artiContoh: ['Saya bangun pukul enam setiap pagi.'],
  },
  {
    no: 4,
    pola: 'Kata Kerja ました（lampau)',
    penjelasan:
      'Bentuk lampau dari Kata Kerja ます adalah ました. Bentuk negatif: ませんでした.',
    contoh: ['わたしは きのう 勉強 しました。'],
    artiContoh: ['Saya belajar kemarin.'],
  },
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: '今 一時一分です',
    penjelasan:
      'Untuk menyatakan waktu, dibubuhkan Kata Bantu Bilangan 時 dan 分. Jika angka 2, 5, 7, 9 diletakkan di depan 分, dibaca ふん, sedangkan 1, 3, 4, 6, 8 dibaca ぷん. Angka 1, 6, 8, 10 di depan 分 dibaca いっぷん、ろっぷん、はっぷん、じゅっぷん（じっぷん）。',
    contoh: ['今 何時ですか。……7時10分です。'],
    artiContoh: ['Sekarang pukul berapa? ……Pukul tujuh lewat sepuluh menit.'],
  },
  {
    no: 2,
    pola: 'Kata Kerja ます／ません／ました／ませんでした',
    penjelasan:
      'Kata Kerja ます berfungsi sebagai predikat pada kalimat. ます menyatakan sikap halus terhadap lawan bicara. Kata Kerja juga digunakan untuk menjelaskan kebiasaan saat ini, aksi serta peristiwa yang akan terjadi masa depan. Bentuk negatif dan lampau: ません／ませんでした。Kalimat tanya tidak mengubah susunan kata, cukup dibubuhkan か pada akhir; jawaban memakai kata kerja yang sama (bukan そうです/ちがいます).',
    contoh: ['毎朝 6時に 起きます。', 'きのう 勉強しましたか。……いいえ、勉強しませんでした。'],
    artiContoh: ['Setiap pagi saya bangun pukul enam.', 'Kemarin belajar? ……Tidak, tidak belajar.'],
  },
  {
    no: 3,
    pola: 'Kata Benda(waktu) に Kata Kerja',
    penjelasan:
      'に menunjukkan waktu melakukan sesuatu. Kata Benda waktu seperti きょう、あした、きのう、いま、まいにち、せんしゅう, dst. tidak dibubuhkan に. Untuk ～ょうび (hari), に boleh dibubuhkan atau tidak.',
    contoh: ['6時半に 起きます。', 'きのう 勉強しました。'],
    artiContoh: ['Bangun pukul setengah tujuh.', 'Kemarin belajar.'],
  },
  {
    no: 4,
    pola: 'Kata Benda₁ から Kata Benda₂ まで',
    penjelasan:
      'から = titik permulaan, まで = titik akhir. Keduanya tidak selalu dipakai secara bersamaan dan juga dapat dipakai sendiri-sendiri. Untuk menyatakan waktu/tanggal mulai dan selesai, Kata Benda yang diangkat pada topik dapat dibubuhkan ～から、～まで atau ～から～まで.',
    contoh: ['9時から 5時まで 勉強します。', '9時から 働きます。'],
    artiContoh: ['Belajar dari pukul sembilan sampai dengan pukul lima.', 'Bekerja dari pukul sembilan.'],
  },
  {
    no: 5,
    pola: 'Kata Benda₁ と Kata Benda₂',
    penjelasan:
      'Jika menyambung Kata Benda secara setaraf, Kata Benda disambung dengan と.',
    contoh: ['銀行の 休みは 土曜日と 日曜日です。'],
    artiContoh: ['Hari libur bank adalah hari Sabtu dan hari Minggu.'],
  },
  {
    no: 6,
    pola: '～ね',
    penjelasan:
      'Kata Bantu ね dibubuhkan di akhir kalimat, dan digunakan ketika mengharapkan persetujuan dari lawan bicara, menegaskan, atau menekankan.',
    contoh: ['毎日 10時まで 勉強します。……大変ですね。'],
    artiContoh: ['Setiap hari belajar sampai pukul sepuluh. ……O, berat ya.'],
  },
]
