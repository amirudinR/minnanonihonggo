import type { Bunpou } from '@/types/bab'

// Bab 36 (MNN2 第11課). Sumber: PDF Indonesia, "Pelajaran 36 · IV. Keterangan Tata Bahasa"
// (idx 93-94 / cetak 72-73). Penomoran 1-4 mengikuti buku; no 1-3 adalah 文型
// (Honsatsu 第36課「文型」idx 104 juga memuat 3 butir), no 4 adalah catatan bentuk
// Kata Sifat. Sub-bagian "[Perhatian]" dipisah ke catatanTataBahasa (penomoran dari 1).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '{ Kata Kerja₁ Bentuk Kamus / Kata Kerja₁ (Bentuk ない) ない } ように、Kata Kerja₂',
    penjelasan:
      'ように menunjukkan objek dari Kata Kerja₂ untuk mencapai keadaan yang dinyatakan oleh ～ように. Sebelum ように, digunakan Kata Kerja yang bukan keinginan Bentuk Kamus (①) (Contoh: Kata Kerja Potensial, わかります, みえます, きこえます, なります dan lain-lain), atau Kata Kerja Bentuk Negatif (②).',
    contoh: ['① 速く 泳げるように、毎日 練習して います。', '② 忘れないように、メモして ください。'],
    artiContoh: [
      '① Setiap hari (saya) berlatih agar bisa berenang dengan cepat.',
      '② Tolong dicatat supaya tidak lupa.',
    ],
    furigana: [
      { base: '速', ruby: 'はや' },
      { base: '泳', ruby: 'およ' },
      { base: '練習', ruby: 'れんしゅう' },
      { base: '忘', ruby: 'わす' },
    ],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk Kamus ように なります',
    penjelasan:
      '1) なります menyatakan keadaan. Jika dipakai Kata Kerja Potensial seperti わかります, atau みえます, Kata Kerja Bentuk Kamus ように なります menyatakan perubahan dari keadaan tidak bisa menjadi keadaan bisa. 2) Jika menjawab dengan いいえ untuk Kalimat Tanya ～ように なりましたか, caranya sebagai berikut.',
    contoh: [
      '③ 毎日 練習すれば、泳げるように なります。',
      '④ やっと 自転車に 乗れるように なりました。',
      '⑤ ショパンの 曲が 弾けるように なりましたか。……いいえ、まだ 弾けません。',
    ],
    artiContoh: [
      '③ Kalau setiap hari berlatih, bisa berenang.',
      '④ Akhirnya bisa bersepeda.',
      '⑤ Apakah sudah bisa bermusik Chopin? ……Belum, belum bisa bermusik.',
    ],
    furigana: [
      { base: '練習', ruby: 'れんしゅう' },
      { base: '泳', ruby: 'およ' },
      { base: '自転車', ruby: 'じてんしゃ' },
      { base: '乗', ruby: 'の' },
      { base: '曲', ruby: 'きょく' },
      { base: '弾', ruby: 'はず' },
    ],
  },
  {
    no: 3,
    pola: '{ Kata Kerja Bentuk Kamus / Kata Kerja (Bentuk ない) ない } ように します',
    penjelasan:
      '1) ～ように しています menyatakan bahwa berusaha untuk melakukan suatu aksi secara kebiasaan. 2) ～ように してください adalah ekspresi untuk meminta agar berusaha mencapai suatu aksi. Dibandingkan dengan ～て／～ないで ください yang ungkapan permintaan secara langsung, ～ように してください adalah ungkapan tidak langsung maka menjadi ungkapan lebih halus daripada ～て／～ないで ください.',
    contoh: [
      '⑦ 毎日 運動して、何でも 食べるように しています。',
      '⑧ 歯に 悪いですから、甘い 物を 食べないように しています。',
      '⑨ もっと 野菜を 食べるように してください。',
      '⑩ 絶対に パスポートを なくさないように してください。',
    ],
    artiContoh: [
      '⑦ Setiap hari berolah raga dan berusaha untuk makan apa saja.',
      '⑧ Karena tidak baik untuk gigi, maka berusaha tidak makan makanan manis.',
      '⑨ Usahakan makan sayur-mayur yang lebih banyak.',
      '⑩ Sama sekali jangan sampai kehilangan paspor.',
    ],
    furigana: [
      { base: '運動', ruby: 'うんどう' },
      { base: '歯', ruby: 'は' },
      { base: '悪', ruby: 'わる' },
      { base: '食', ruby: 'た' },
      { base: '野菜', ruby: 'やさい' },
      { base: '絶対', ruby: 'ぜったい' },
    ],
  },
  {
    no: 4,
    pola: '早い→早く／上手な→上手に',
    penjelasan:
      'Jika Kata Sifat menerangkan Kata Sifat atau Kata Kerja lain, mengubah Kata Sifat い menjadi ～く, dan Kata Sifat な menjadi ～に.',
    contoh: ['⑫ 早く 上手に お茶が たてられるように なりたいです。'],
    artiContoh: ['(Saya) ingin menjadi cepat pandai membuat teh.'],
    furigana: [
      { base: '早', ruby: 'はや' },
      { base: '上手', ruby: 'じょうず' },
      { base: '茶', ruby: 'ちゃ' },
    ],
  },
]

// Catatan tata bahasa = sub-bagian "[Perhatian]" (penomoran mulai dari 1, terpisah dari 文型).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'ように なります — Perhatian 1',
    penjelasan:
      'Dalam Buku Induk tidak menyinggung adanya, tetapi jika pada pola kalimat 2 dipakai Kata Kerja kecuali Kata Kerja Potensial わかります, atau みえます, maka bermakna bahwa dapat kebiasaan baru yang sebelumnya tidak ada.',
    contoh: [
      '⑥ 日本人は 100年ぐらいまえから 牛肉や 豚肉を 食べるように なりました。',
    ],
    artiContoh: [
      'Orang Jepang telah makan daging sapi dan daging babi sejak kira-kira seratus tahun yang lalu.',
    ],
    furigana: [{ base: '日本人', ruby: 'にほんじん' }, { base: '牛肉', ruby: 'ぎゅう肉' }],
  },
  {
    no: 2,
    pola: 'ように してください — Perhatian 2',
    penjelasan:
      '～ように してください tidak dapat digunakan untuk permintaan pada saat itu juga.',
    contoh: ['⑪ すみませんが、塩を 取って ください。', '× すみませんが、塩を 取るように してください。'],
    artiContoh: ['⑪ Maaf, tolong ambilkan saya garam.', '× (tidak tepat)'],
    furigana: [{ base: '塩', ruby: 'しお' }, { base: '取', ruby: 'と' }],
  },
]