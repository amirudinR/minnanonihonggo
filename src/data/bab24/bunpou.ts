import type { Bunpou } from '@/types/bab'

// Sumber: 文型 Honsatsu idx 219 (cetak 198) + "Terjemahan > Pola Kalimat" PDF Indonesia (cetak 150).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Sdr. Sato memberikan saya kartu Natal.',
    penjelasan:
      'Kalau orang lain memberikan sesuatu kepada pembicara (diri sendiri) atau kepada keluarganya, maka dipakai くれます, bukan あげます. Subjek kalimat adalah pihak yang memberi.',
    contoh: ['佐藤さんは わたしに クリスマスカードを くれました。'],
    artiContoh: ['Sdr. Sato memberikan saya kartu Natal.']
  },
  {
    no: 2,
    pola: 'Saya meminjamkan buku kepada Sdr. Kimura.',
    penjelasan:
      'Kata Kerja Bentuk て あげます menyatakan bahwa subjek (pelaku) melakukan suatu perbuatan untuk memberi kebaikan atau keuntungan kepada orang lain.',
    contoh: ['わたしは 木村さんに 本を 貸して あげました。'],
    artiContoh: ['Saya meminjamkan buku kepada Sdr. Kimura.']
  },
  {
    no: 3,
    pola: 'Saya diberikan nomor telepon rumah sakit oleh Sdr. Yamada.',
    penjelasan:
      'Kata Kerja Bentuk て もらいました menyatakan bahwa si penerima bantuan dijadikan subjek dan menerima kebaikan atau keuntungan dari perbuatan orang lain. Pihak yang berbuat ditunjukkan dengan partikel に.',
    contoh: ['わたしは 山田さんに 病院の 電話番号を 教えて もらいました。'],
    artiContoh: ['Saya diberikan nomor telepon rumah sakit oleh Sdr. Yamada.']
  },
  {
    no: 4,
    pola: 'Ibu mengirimi saya sweater.',
    penjelasan:
      'Kata Kerja Bentuk て くれます menyatakan bahwa pelaku (orang lain) dijadikan subjek dan si pembicara menerima kebaikan atau keuntungan dari perbuatan itu. Penerima perbuatan ditunjukkan dengan partikel に, biasanya わたし.',
    contoh: ['母は わたしに セーターを 送って くれました。'],
    artiContoh: ['Ibu mengirimi saya sweater.']
  }
]

// "IV. Keterangan Tata Bahasa" (PDF Indonesia cetak 152-153). Penomoran mulai dari 1.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'くれます',
    penjelasan:
      'あげます yang telah dipelajari pada Pelajaran 7 tidak dapat dipakai jika orang lain yang memberikan sesuatu kepada pembicara (diri sendiri atau keluarga si pembicara). Dalam hal ini dipakai くれます. Subjek dari くれます adalah pihak yang memberi, sedangkan penerimanya adalah pembicara atau keluarganya.\n\n× 佐藤さんは わたしに クリスマスカードを あげました。',
    contoh: [
      'わたしは 佐藤さんに 花を あげました。',
      '佐藤さんは わたしに クリスマスカードを くれました。',
      '佐藤さんは 姉に お菓子を くれました。'
    ],
    artiContoh: [
      'Saya memberikan Sdr. Sato bunga.',
      'Sdr. Sato memberikan saya kartu Natal.',
      'Sdr. Sato memberikan adik kue.'
    ]
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk て あげます・もらいます・くれます',
    penjelasan:
      'あげます, もらいます dan くれます digunakan untuk pemberian atau penerimaan benda, sedangkan ～て あげます, ～て もらいます dan ～て くれます digunakan untuk menunjukkan bahwa perbuatan tersebut saling memberi kebaikan atau keuntungan.\n\n1) Kata Kerja Bentuk て あげます\nSubjek dari Kata Kerja Bentuk て あげます adalah pelaku yang memberi kebaikan atau keuntungan. Oleh sebab itu, perlu hati-hati jika perbuatan yang memberikan kebaikan atau keuntungan kepada atasan menggunakan ～て あげます karena memberi kesan memaksa orang untuk menerima kebaikan. Untuk menawarkan perbuatan yang memberi kebaikan atau keuntungan kepada atasan, digunakan Kata Kerja (Bentuk ます) ましょうか.\n\n2) Kata Kerja Bentuk て もらいます\nIni menunjukkan bahwa si penerima bantuan dijadikan subjek dan dengan perbuatan itu si pembicara dianggap sebagai subjek yang menerima kebaikan atau keuntungan. Jika subjeknya わたし, biasanya subjek itu dihilangkan.\n\n3) Kata Kerja Bentuk て くれます\nIni menunjukkan bahwa pelaku dijadikan subjek dan dengan perbuatan itu si pembicara dianggap sebagai penerima kebaikan atau keuntungan. Jika penerima perbuatan (ditunjuk dengan partikel に) adalah わたし, biasanya わたし itu dihilangkan.\n\n[Perhatian] Partikel yang menunjuk penerima kebaikan dalam kalimat ～て あげます atau ～て くれます menjadi sama dengan kalimat yang tidak digunakan ～て あげます atau ～て くれます.\nわたしに 旅行の 写真を 見せます。→ わたしに 旅行の 写真を 見せて くれます。\nわたしを 大阪城へ 連れて 行きます。→ わたしを 大阪城へ 連れて 行って くれます。\nわたしの 引っ越しを 手伝います。→ わたしの 引っ越しを 手伝って くれます。',
    contoh: [
      'わたしは 木村さんに 本を 貸して あげました。',
      'タクシーを 呼びましょうか。',
      '手伝いましょうか。',
      'わたしは 山田さんに 図書館の 電話番号を 教えて もらいました。',
      '母は わたしに セーターを 送って くれました。',
      'わたしに 旅行の 写真を 見せて くれます。',
      'わたしを 大阪城へ 連れて 行って くれます。',
      'わたしの 引っ越しを 手伝って くれます。'
    ],
    artiContoh: [
      'Saya meminjamkan Sdr. Kimura buku.',
      'Bagaimana kalau saya panggilkan taksi?',
      'Bagaimana kalau saya bantu?',
      'Saya diberikan nomor telepon perpustakaan oleh Sdr. Yamada.',
      'Ibu saya mengirimkan saya sweater.',
      'Memperlihatkan saya foto waktu berwisata.',
      'Mengantarkan saya ke Benteng Osaka.',
      'Membantu saya pindah rumah.'
    ]
  },
  {
    no: 3,
    pola: 'Kata Benda1 は Kata Benda2 が Kata Kerja',
    penjelasan:
      'Kalimat jawaban adalah objek dari kalimat yang 佐藤さんが この ワインを くれました, yaitu この ワイン dijadikan topik (Lihat Pel.17-5). この ワイン dapat dihilangkan sebab hal itu telah saling dipahami oleh pembicara dan lawan bicara. Dengan catatan bahwa dalam kalimat ini 佐藤さん menjadi subjek maka dipakai が.',
    contoh: ['おいしい ワインですね。……ええ、[この ワインは] 佐藤さんが くれました。'],
    artiContoh: ['Anggur yang enak ya. ……Ya, [anggur ini] Sdr. Sato yang berikan.']
  }
]
