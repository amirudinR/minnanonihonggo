import type { Bunpou } from '@/types/bab'

// 6 pola 文型 — sumber: PDF Indonesia,
// "Pelajaran 32 · IV. Keterangan Tata Bahasa" (idx 69–70, cetak 48–49).
// Semua kotak bernomor 1–6 pada halaman itu adalah 文型 (Honsatsu 第32課 文型, idx 70,
// hanya men exemplified 3 di antaranya). Penjelasan, contoh, dan arti contoh dari buku Indonesia.
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Bentuk た ／ Kata Kerja（Bentuk ない）ない ＋ ほうがいいです',
    penjelasan:
      'Pola kalimat ini digunakan jika memberi masukan atau nasihat kepada lawan bicara. Kata Kerja Bentuk た ほうがいいです mengandung maknanya untuk memperbandingan dua hal kemudian memilih salah satu dan tidak melakukan. Karena itu, kalimat ini memberi kesan bahwa si pembicara sedikit memaksa. Ketika hanya merekomendasikan sesuatu saja, digunakan ～たら いい (Pel. 26).',
    contoh: [
      '① 毎日 運動した ほうがいいです。',
      '② 熱が あるんです。……じゃ、おふろに 入らない ほうが いいですよ。',
      '③ 日本のお寺が 見たいんですが…… ……じゃ、京都へ 行ったら いいですよ。',
    ],
    artiContoh: [
      'Lebih baik berolahraga setiap hari.',
      'Berdemam.\n……Kalau begitu, lebih baik jangan mandi.',
      '(Saya) Ingin melihat kuil Jepang ⋯.\n……Kalau begitu, sebaiknya pergi ke Kyoto.',
    ],
  },
  {
    no: 2,
    pola: '{ Kata Kerja ／ Kata Sifat い ／ Kata Sifat な ／ Kata Benda（→ Bentuk Biasa／～だ）} でしょう',
    penjelasan:
      '～でしょう digunakan jika menjelaskan pikiran si pembicara secara tidak pasti terhadap hal untuk masa depan atau hal yang belum tentu.',
    contoh: ['④ あしたは 雨が 降るでしょう。', '⑤ タワポンさんは 合格するでしょうか。……きっと 合格するでしょう。'],
    artiContoh: ['Besok akan turun hujan.', 'Apakah sdr. Thawapon akan lulus?\n…… Pasti akan lulus.'],
  },
  {
    no: 3,
    pola: '{ Kata Kerja ／ Kata Sifat い ／ Kata Sifat な ／ Kata Benda（→ Bentuk Biasa／～だ）} かもしれません',
    penjelasan:
      '～かもしれません dapat menggunakan ketika ingin berkata bahwa ada kemungkinan sesuatu secara sedikit.',
    contoh: ['⑥ 約束の 時間に 間に 合わないかも しれません。'],
    artiContoh: ['Ada kemungkinan terlambat untuk jam yang telah saya janjikan.'],
  },
  {
    no: 4,
    pola: 'Kata Kerja（Bentuk ます）ましょう',
    penjelasan:
      'Kata Kerja（Bentuk ます）ましょう pada ⑦ adalah ekspresi untuk menyampaikan maksud si pembicara kepada lawan bicara. Digunakan jika mengusulkan suatu perbuatan. Bercuan lebih tegas daripada Kata Kerja（Bentuk ます）ましょうか (Pel. 14).',
    contoh: ['⑦ エンジンの 音が おかしいんですが。', '……ええ。故障かも しれません。ちょっと 調べましょう。'],
    artiContoh: ['Bunyi mesinnya aneh, ya.', '……Ya, benar. Mungkin rusak. Mari periksanya sebentar.'],
  },
  {
    no: 5,
    pola: 'Kata Keterangan Bilangan で',
    penjelasan: 'Menyatakan batas waktu atau batasan.',
    contoh: ['⑧ 駅まで 30分 で 行けますか。', '⑨ 3万円 で パソコンが 買えますか。'],
    artiContoh: [
      'Dapat pergi sampai stasiun dalam waktu tiga puluh menit?',
      'Dapat membeli PC dengan tiga puluh ribu yen?',
    ],
  },
  {
    no: 6,
    pola: '何か 心配な こと',
    penjelasan:
      'Untuk contoh-contoh di atas, yang digunakan adalah 〜か（adanya hal-hal tersebut）。Untuk menyebut hal-hal yang sangat jelas, selain ini ada 〜な もの. Hal yang digunakan adalah 〜こと dan sebagainya.',
    contoh: ['⑩ 何か 心配な ことが あるんですか。', '⑪ スキーに行きたいんですが、どこかいい所、ありますか。'],
    artiContoh: [
      'Ada suatu hal yang mengkhawatirkan?',
      '(Saya) Ingin pergi ski, apakah ada suatu tempat yang bagus?',
    ],
  },
]