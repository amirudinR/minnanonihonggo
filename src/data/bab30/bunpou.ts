import type { Bunpou } from '@/types/bab'

// 文型 第30課 (Honsatsu idx 52) = 2 pola. Penjelasan, contoh, dan arti contoh diambil dari
// PDF Indonesia, "Pelajaran 30 · IV. Keterangan Tata Bahasa" (idx 57-58).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Bentuk てあります',
    penjelasan:
      'Kata Kerja Bentuk てあります adalah perbuatan dari seseorang untuk suatu tujuan, kemudian menyatakan bahwa akibat atau hasil dari perbuatan itu sedang berlangsung. Kata Kerja yang digunakan berupa Kata Kerja Transitif. [1) Kata Benda₁ に Kata Benda₂ が Kata Kerja Bentuk てあります] ① 机の 上に メモが 置いて あります. ② カレンダーの 今月の 予定が 書いて あります. [2) Kata Benda₂ は Kata Benda₁ に Kata Kerja Bentuk てあります] Jika Kata Benda₂ dianggap sebagai topik, maka menggunakan Kata Bantu は. ③ メモは どこですか。……[メモは] 机の 上に 置いて あります. ④ 今月の 予定は カレンダーに 書いて あります. [Perhatian] Perbedaan antara Kata Kerja Bentuk ています dan Kata Kerja Bentuk てあります: seperti ⑤ dan ⑥, jika dipakai Kata Kerja Intransitif（しますます）dan Kata Kerja Transitif（しめます）yang berpasangan dengan Kata Kerja Bentuk ています dan Kata Kerja Bentuk てあります, ⑤ hanya menjelaskan untuk keadaan jendela tertutup, sedangkan pada ⑥ menyatakan bahwa terjadi keadaan disebabkan oleh perbuatan dari seseorang.',
    contoh: [
      '① 机の 上に メモが 置いて あります。',
      '② カレンダーの 今月の 予定が 書いて あります。',
      '③ メモは どこですか。',
      '③ ……［メモは］机の 上に 置いて あります。',
      '④ 今月の 予定は カレンダーに 書いて あります。',
      '⑤ 窓が 閉まって います。',
      '⑥ 窓が 閉めて あります。',
    ],
    artiContoh: [
      'Di atas meja diletakkan catatan.',
      'Pada kalender ditulis rencana bulan ini.',
      'Di mana catatan?',
      '[Catatan] Diletakkan di atas meja.',
      'Rencana bulan ini ditulis pada kalender.',
      'Jendela tertutup.',
      'Jendela ditutup.',
    ],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk ておきます',
    penjelasan:
      '[1) Menyatakan bahwa menyelesaikan aksi atau perbuatan yang diperlukan sampai dengan waktu tertentu.] ⑦ 旅行の まえに、切符を 買って おきます. ⑧ 次の 会議までに 何を して おいたら いいですか。……この 資料を 読んで おいて ください. [2) Menyatakan bahwa menyelesaikan aksi yang diperlukan untuk persiapan pemakaian berikutnya, atau tindakan untuk sementara.] ⑨ はさみを 使ったら、元の 所に 戻して おいて ください. [3) Menyatakan akibat dari mempertahankan suatu keadaan.] ⑩ あした 会議がありますから、いすは この ままに して おいて ください. [Perhatian] Dalam bahasa lisan, ～て おきます sering berubah menjadi ～ときます. ⑪ そこに 置いて といて（置いて おいて）ください.',
    contoh: [
      '⑦ 旅行の まえに、切符を 買って おきます。',
      '⑧ 次の 会議までに 何を して おいたら いいですか。',
      '⑧ ……この 資料を 読んで おいて ください。',
      '⑨ はさみを 使ったら、元の 所に 戻して おいて ください。',
      '⑩ あした 会議がありますから、いすは この ままに して おいて ください。',
      '⑪ そこに 置いて といて（置いて おいて）ください。',
    ],
    artiContoh: [
      'Sebelum perjalanan, membeli karcis.',
      'Apa yang harus saya lakukan sampai dengan rapat berikutnya?',
      'Diharapkan untuk membaca materi ini.',
      'Jika memakai gunting, tolong kembalikan ke tempat semula.',
      'Karena besok ada rapat, kursinya dibiarkan begini saja.',
      'Tolong letakkan di situ saja. (Pel.38)',
    ],
  },
]

// Catatan tata bahasa = sub-bagian 3-5 "Keterangan Tata Bahasa" di buku Indonesia
// (idx 58). TERPISAH dari bunpou, penomoran mulai dari 1.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'まだ + Bentuk positif',
    penjelasan:
      'まだ ini berarti masih, dan menyatakan bahwa aksi atau keadaannya sedang berlangsung. ⑫ まだ 雨が 降っています. ⑬ 道具を 貸します か。……まだ 使って いませんか、そのままに して おいて ください.',
contoh: [
      '⑫ まだ 雨が 降っています。',
      '⑬ 道具を 貸します か。……まだ 使って いませんか、そのままに して おいて ください。',
    ],
    artiContoh: [
      'Masih turun hujan.',
      'Apa saya yang memberikan alatnya? Karena masih dipakai, tolong dibiarkan begitu saja.',
    ],
  },
  {
    no: 2,
    pola: 'とか',
    penjelasan:
      'とか digunakan jika memberikan contoh seperti sama EVENT-nya dengan や. とか jika dibandingkan dengan や dalam bahasa lisan, dapat digunakan di belakang Kata Benda terakhir di antara yang disebutkan. ⑭ どんな スポーツを していますか。……そうですね。テニスとか 水泳とか…….',
    contoh: ['⑭ どんな スポーツを していますか。', '⑭ ……そうですね。テニスとか 水泳とか……。'],
    artiContoh: ['Bercabut apa saja?', 'Apa ya? Tenis, atau berenang…'],
  },
  {
    no: 3,
    pola: 'Partikel + も',
    penjelasan:
      'Jika も digabung dengan Kata Benda yang dibubuhkan が atau を, maka が atau を dihapuskan. Jika selain Kata Bantu tersebut, (Contoh: に, て, から, まで, と) dibubuhkan di belakangnya. ～ boleh dihapuskan dan juga boleh untuk tidak dihapuskan. ⑮ ほかにも いろいろ あります. ⑯ どこ［へ］も 行きません.',
    contoh: ['⑮ ほかにも いろいろ あります。', '⑯ どこ［へ］も 行きません。'],
    artiContoh: ['Selain itu masih ada macam-macam.', 'Tidak pergi ke mana-mana.'],
  },
]