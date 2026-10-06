import type { Bunpou } from '@/types/bab'

// 文型 Bab 40 — Honsatsu 第40課 "文型" (idx 136) hanya memuat 3 pola.
// Penjelasan, contoh, dan arti contoh diambil dari PDF Indonesia,
// "Pelajaran 40 · IV. Keterangan Tata Bahasa" (idx 117-118) item 1-3.
// Catatan tentang か / かどうか pada buku tetap pada penjelasan masing-masing pola.
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '{ Kata Kerja / Kata Sifat い / Kata Sifat な / Kata Benda → Bentuk Biasa / Bentuk Biasa / ～だ } か、～',
    penjelasan:
      'Pola kalimat ini digunakan jika Kalimat Tanya yang mengandung Kata Tanya dimasukkan ke dalam kalimat lain.\nCatatan buku: dengan catatan bahwa Kata Tanya bukan Kata Benda, maka bentuknya menjadi Kata Tanya か seperti contoh ③.',
    contoh: [
      'ＪＬ107便は 何時に 到着するか、調べて ください。',
      '結婚の お祝いは 何が いいか、話して います。',
      'わたしたちが 初めて 会ったのは いつか、覚えて いますか。',
    ],
    artiContoh: [
      'Tolong dicek pukul berapa kedatangan penerbangan dengan nomor JL107!',
      'Sedang membicarakan tentang hadiah apa yang cocok untuk pernikahan.',
      'Apakah (Anda) masih ingat kapan pertama kali kita bertemu?',
    ],
  },
  {
    no: 2,
    pola: '{ Kata Kerja / Kata Sifat い / Kata Sifat な / Kata Benda → Bentuk Biasa / Bentuk Biasa / ～だ } か どうか、～',
    penjelasan:
      'Pola kalimat ini digunakan jika Kalimat Tanya yang tidak mengandung Kata Tanya dimasukkan ke dalam kalimat. Berhati-hati karena di belakang Bentuk Biasa か perlu どうか.\nCatatan buku: pada contoh ⑥, bukan まちがいが あるか どうか, melainkan まちがいが ないか どうか karena si pembicara ingin memastikan hal yang まちがいが ない.',
    contoh: [
      '忘年会に 出席するか どうか、20日までに 返事を ください。',
      'その 話は ほんとうか どうか、わかりません。',
      'まちがいが ないか どうか、調べて ください。',
    ],
    artiContoh: [
      'Tolong berikan jawaban sampai dengan tanggal 20 bahwa apakah bisa hadir pada pesta akhir tahun atau tidak.',
      '(Saya) Kurang tahu apakah cerita itu benar atau tidak.',
      'Tolong diperiksa apakah ada kesalahan tidak!',
    ],
  },
  {
    no: 3,
    pola: 'Kata Kerja Bentuk て みます',
    penjelasan:
      'Pola Kalimat ini menyatakan arti melakukan aksi sebagai percobaan.\nCatatan buku: seperti contoh ⑦, kalau memakai bentuk ～て みたい, dapat menyampaikan harapan diri sendiri daripada ～たい.',
    contoh: ['もう 一度 考えて みます。', 'この ズボンを はいて みても いいですか。', '北海道へ 行って みたいです。'],
    artiContoh: ['Coba berpikir sekali lagi.', 'Bolehkah mencoba memakai celana ini?', '(Saya) Ingin pergi ke Hokkaido.'],
  },
]

// Catatan tata bahasa = sub-bagian "Keterangan Tata Bahasa" no 4-5 di buku Indonesia
// (idx 118). Penomoran restarted dari 1 (terpisah dari 文型).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Sifat い(～い)→～さ',
    penjelasan:
      'Kata Sifat い dengan mengubah い ke さ pada akhir kata, dapat membuat Kata Benda.\nContoh buku: 高い → 高さ / 長い → 長さ / 速い → 速さ',
    contoh: ['山の 高さは どうやって 測るか、知って いますか。', '新しい 橋の 長さは 3,911メートルです。'],
    artiContoh: [
      'Apakah (Anda) tahu bagaimana caranya untuk mengukur tingginya gunung?',
      'Panjangnya jembatan baru 3.911 meter.',
    ],
  },
  {
    no: 2,
    pola: '～て でしょうか',
    penjelasan:
      'Kalau ～でしょうか (Pel.32) digunakan pada Kalimat Pertanyaan seperti contoh ⑫, yang tidak meminta jawaban yang pasti, maka dapat memberi kesan yang lembut terhadap lawan bicara.',
    contoh: ['ハンスは 学校で どう でしょうか。'],
    artiContoh: ['Bagaimana Hans di sekolah?'],
  },
]