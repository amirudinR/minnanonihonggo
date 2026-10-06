import type { Bunpou } from '@/types/bab'

// 文型 Bab 45 — sumber: PDF Indonesia, "Pelajaran 45 · IV. Keterangan Tata Bahasa"
// (idx 147–148, hlm. cetak 126–127) + JP Honsatsu 第45課「文型」(idx 178).
// CATATAN: Pelajaran 45 hanya memiliki 2 文型 (lihat kotak pada buku Indonesia
// idx 147 dan daftar 文型 pada Honsatsu idx 178) — bukan 4 pola.
// Penjelasan, contoh, dan arti contoh diambil dari buku Indonesia.
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola:
      '{ Kata Kerja Bentuk Kamus / Kata Kerja (Bentuk ない) ない / Kata Kerja Bentuk た / Kata Sifat い(～い) / Kata Sifat な[な] / Kata Benda の } 場合は、～',
    penjelasan:
      '～ばあい adalah ungkapan yang menyatakan suatu kondisi. Kalimat yang disusul di belakangnya menyatakan cara mengatasinya, atau isi dari akibat yang terjadi. Cara menyambungnya, karena ばあい adalah Kata Benda maka sama dengan cara menyambung untuk menerangkan Kata Benda.',
    contoh: [
      '① 会議に 間に 合わない 場合は、連絡係に 連絡して ください。',
      '② 時間に 遅れた 場合は、会場に 入れません。',
      '③ パソコンの 調子が 悪い 場合は、前は、どう したら いいですか。',
      '④ 領収書が 必要な 場合は、言って ください。',
      '⑤ 火事や 地震の 場合は、エレベーターを 使わないで ください。',
    ],
    artiContoh: [
      'Jika tidak tepat waktu pada rapat, tolong hubungi koordinator!',
      'Jika terlambat pada waktunya, tidak bisa masuk ke dalam tempat.',
      'Bagaimana caranya jika kondisi PC tidak baik?',
      'Jika perlu kuitansi, tolong diberitahukan!',
      'Jika terjadi kebakaran atau gempa bumi, jangan gunakan lift.',
    ],
  },
  {
    no: 2,
    pola:
      '{ Kata Kerja / Kata Sifat い / Kata Sifat な / Kata Benda } { Bentuk Biasa / Bentuk Biasa / ～だ→～な } のに、～',
    penjelasan:
      'のに digunakan jika hal yang berbeda dengan dugaan sebelumnya dari hal di bagian depan kalimat diletakkan di bagian hal belakang kalimat. Kebanyakan kasus menjelaskan perasaan di luar dugaan atau ketidakpuasan. Misalnya, untuk ⑥ menyatakan perasaan dikhianati sebab dari hal di bagian depan kalimat yakni "sudah berjanji" dapat dituduh sebagai "datang". Kemudian, untuk ⑦ dari hal di bagian depan kalimat yaitu "hari Minggu", sesungguhnya akan diakibatkan untuk "dapat berlibur", tetapi harus bekerja, maka menyatakan perasaan tidak puas dengan menggunakan のに.',
    contoh: ['⑥ 約束を したのに、彼女は 来ませんでしたでした。', '⑦ きょうは 日曜日なのに、働かなければ なりません。'],
    artiContoh: [
      'Dia tidak datang padahal sudah berjanji.',
      'Hari ini (saya) harus bekerja padahal hari Minggu.',
    ],
  },
]

// Catatan tata bahasa = sub-bagian "Perhatian" di buku (terpisah dari bunpou, penomoran dari 1).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'のに — Perhatian 1',
    penjelasan:
      'Perbedaan antara ～のに dan ～が. Jika のに pada ⑥ dan ⑦ diganti dengan が, maka tidak dapat menyatakan perasaan di luar dugaan atau ketidakpuasan.',
    contoh: [
      '⑧ 約束を しましたが、彼女は 来ませんでしたでした。',
      '⑨ きょうは 日曜日ですが、働かなければ なりません。',
    ],
    artiContoh: ['Dia tidak datang walaupun sudah berjanji.', 'Hari ini (saya) harus bekerja walaupun hari Minggu.'],
  },
  {
    no: 2,
    pola: 'のに — Perhatian 2',
    penjelasan:
      'Perbedaan antara ～のに dan ～ても. ～のに adalah kata yang menyatakan perasaan pembicara mengenai hal yang telah terjadi, dan tidak dapat menyatakan paradoks secara praktis seperti ～ても.',
    contoh: [
      '⑩ あした 雨が 降っても、サッカーをします。',
      '× あした 雨が 降るのに、サッカーをします。',
    ],
    artiContoh: ['Besok bermain sepak bola walaupun hujan.', 'Besok hujan, tetapi tetap bermain sepak bola. (tidak tepat)'],
  },
]
