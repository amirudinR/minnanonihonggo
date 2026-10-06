import type { Bunpou } from '@/types/bab'

// Pola kalimat Bab 44 — sumber: PDF Indonesia, "Pelajaran 44 · IV. Keterangan Tata Bahasa"
// (idx 141-142). Buku Indonesia mencetak 4 kotak bernomor (1–4); sub-poin ①②③
// dst. mengikuti penomoran buku. Pola, penjelasan, contoh, dan arti contoh dari buku.
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '{ Kata Kerja Bentuk ます ／ Kata Sifat い（～い）／ Kata Sifat な［な］ } すぎます',
    penjelasan:
      '～すぎます menunjukkan bahwa tingkat dari perbuatan atau keadaan kelewatan. Biasanya digunakan jika perbuatan atau kondisinya tidak menyenangkan.',
    contoh: ['ゆうべ お酒を 飲みすぎました。', 'この セーターは 大きすぎます。'],
    artiContoh: ['Tadi malam (saya) minum terlalu banyak minuman keras.', 'Sweater ini terlalu besar.'],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk ます { やすいです ／ にくいです }',
    penjelasan:
      '1) Jika Kata Kerja Bentuk ます adalah Kata Kerja Keinginan, ～やすい bermakna bahwa melakukan aksi itu mudah, dan ～にくい bermakna bahwa melakukan aksi itu sulit. ⑤ menyatakan bahwa PC mudah dipakai, dan ⑥ menyatakan bahwa kota yang bernama Tokyo tidak nyaman untuk tinggali. 2) Jika Kata Kerja Bentuk ます adalah bukan Kata Kerja secara keinginan, ～やすい menyatakan akan terjadi aksi itu dengan mudah, dan ～にくい menyatakan bahwa aksi itu jarang terjadi.',
    contoh: [
      'この パソコンは 使いやすいです。',
      '東京は 住みにくいです。',
      '白い シャツは 汚れやすいです。',
      '雨の 日は 洗濯物が 乾きにくいです。',
    ],
    artiContoh: [
      'PC ini mudah dipakai.',
      'Tokyo tidak nyaman untuk tinggali.',
      'Kemaja putih mudah kotor.',
      'Pada hari yang hujan, pakaian sulit mengering.',
    ],
  },
  {
    no: 3,
    pola: 'Kata Benda を { Kata Sifat い（～い）→～く ／ Kata Sifat な［な］→～に ／ Kata Benda に } します',
    penjelasan:
      '～く／～に なります yang telah dipelajari pada Pelajaran 19 adalah ungkapan untuk menyatakan perubahan unsur pokok, sedangkan ～く／～に します adalah ungkapan untuk mengubah obyek (Kata Benda).',
    contoh: ['音を 大きく します。', '部屋を きれいに します。', '塩の 量を 半分に しました。'],
    artiContoh: ['Mengeras bunyi.', 'Membersihkan kamar.', 'Mengurangi jumlah garam sampai setengah.'],
  },
  {
    no: 4,
    pola: 'Kata Benda に します',
    penjelasan: 'Pola kalimat ini menyatakan pilihan atau keputusan.',
    contoh: ['部屋は シングルに しますか、ツインに しますか。', '会議は あしたに します。'],
    artiContoh: ['Kamarnya mau single atau twin?', 'Rapat diadakan besok.'],
  },
]

// Catatan tata bahasa = sub-bagian "Perhatian" di buku (terpisah dari bunpou, penomoran dari 1).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'すぎます — Perhatian',
    penjelasan:
      '～すぎます dikategori sebagai Kata Kerja Kelompok II. Contoh: のみすぎる / のみすぎ（ない）/ のみすぎた.',
    contoh: ['最近の 車は 操作が 簡単すぎて、運転が おもしろくないです。'],
    artiContoh: ['Mobil pada akhir-akhir ini tidak menarik sebab operasinya terlalu mudah.'],
  },
  {
    no: 2,
    pola: 'やすい／にくい — Perhatian',
    penjelasan: '～やすい、～にくい dikategori sama seperti Kata Sifat い.',
    contoh: ['この 薬は 砂糖を 入れると、飲みやすくなりますよ。', 'この コップは 割れにくくて、安全です。'],
    artiContoh: ['Kalau memasukkan gula, obat ini menjadi mudah diminum.', 'Gelas ini tidak mudah pecah dan aman.'],
  },
]
