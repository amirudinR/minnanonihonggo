import type { Bunpou } from '@/types/bab'

// 文型 Bab 28 — sumber: Honsatsu 第28課「文型」(idx 36 / cetak 18).
// Penjelasan & contoh diambil dari PDF Indonesia "Pelajaran 28 ·
// II. Terjemahan · Pola Kalimat" (idx 43 / cetak 22) dan
// "IV. Keterangan Tata Bahasa" (idx 45–46 / cetak 24–25).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '音楽を 聞きながら 食事します。',
    penjelasan:
      'Kata Kerja₁ (Bentuk ます) ながら Kata Kerja₂. Pola kalimat ini menyatakan bahwa ketika pelaku yang sama melakukan aksi₁ dan aksi₂ secara bersamaan. Kata Kerja₂ yang merupakan aksi utama.',
    contoh: ['① 音楽を 聞きながら 食事します。'],
    artiContoh: ['Makan sambil mendengar musik.'],
    furigana: [
      { base: '音楽', ruby: 'おんがく' },
      { base: '聞', ruby: 'き' },
      { base: '食事', ruby: 'しょくじ' },
    ],
  },
  {
    no: 2,
    pola: '毎朝 ジョギングを しています。',
    penjelasan:
      'Kata Kerja Bentuk ています. Pola kalimat ini digunakan pula ketika menyatakan perbuatan yang berulang kali sebagai kebiasaan. Jika perbuatan tersebut dilakukan pada masa lampau sebelum titik ucapannya, bentuknya berubah menjadi Kata Kerja Bentuk ていました.',
    contoh: ['③ 毎朝 ジョギングを しています。'],
    artiContoh: ['Setiap pagi, saya jogging.'],
    furigana: [{ base: '毎朝', ruby: 'まいあさ' }],
  },
  {
    no: 3,
    pola: '地下鉄は 速いし、安いし、地下鉄で 行きましょう。',
    penjelasan:
      'Bentuk Biasa し、Bentuk Biasa し、～. Pola kalimat ini digunakan jika menjelaskan lebih dari dua hal yang mirip mengenai topik dengan setaraf, dan juga untuk cara menyatakan alasan di balik bagian ～し、～し.',
    contoh: ['⑦ ここは 値段も 安いし、魚も 新しいし、よく 食べに 来ます。'],
    artiContoh: ['Di sini harganya murah, ikan juga segar, maka sering datang untuk makan.'],
    furigana: [
      { base: '地下鉄', ruby: 'ちかてつ' },
      { base: '速', ruby: 'はや' },
      { base: '安', ruby: 'やす' },
      { base: '値段', ruby: 'ねだん' },
      { base: '魚', ruby: 'さかな' },
      { base: '新', ruby: 'あたら' },
    ],
  },
]

// Catatan tata bahasa = sub-bagian "IV. Keterangan Tata Bahasa" di buku Indonesia
// (terpisah dari bunpou, penomoran mulai dari 1).
// Sumber: idx 45–46 / cetak 24–25.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja₁ （Bentuk ます）ながら Kata Kerja₂',
    penjelasan:
      'Pola kalimat ini menyatakan bahwa ketika pelaku yang sama melakukan aksi₁ dan aksi₂ secara bersamaan. Kata Kerja₂ yang merupakan aksi utama. Seperti ②, digunakan pula jika melakukan dua hal dengan terus-menerus dalam suatu jangka waktu tertentu.',
    contoh: [
      '① 音楽を 聞きながら 食事します。',
      '② 働きながら 日本語を 勉強しています。',
    ],
    artiContoh: [
      'Makan sambil mendengar musik.',
      'Belajar bahasa Jepang sambil bekerja.',
    ],
    furigana: [
      { base: '音楽', ruby: 'おんがく' },
      { base: '聞', ruby: 'き' },
      { base: '食事', ruby: 'しょくじ' },
      { base: '働', ruby: 'はたら' },
      { base: '日本語', ruby: 'にほんご' },
      { base: '勉強', ruby: 'べんきょう' },
    ],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk ています',
    penjelasan:
      'Pola kalimat ini digunakan pula ketika menyatakan perbuatan yang berulang kali sebagai kebiasaan. Jika perbuatan tersebut dilakukan pada masa lampau sebelum titik ucapannya, bentuknya berubah menjadi Kata Kerja Bentuk ていました.',
    contoh: [
      '③ 毎朝 ジョギングを しています。',
      '④ 子どもの とき、毎晩 ８時に 寝て いました。',
    ],
    artiContoh: [
      'Setiap pagi, saya jogging.',
      'Ketika masih kecil, setiap malam saya tidur pukul delapan.',
    ],
    furigana: [
      { base: '毎朝', ruby: 'まいあさ' },
      { base: '子ども', ruby: 'こども' },
      { base: '毎晩', ruby: 'まいばん' },
      { base: '寝', ruby: 'ね' },
    ],
  },
  {
    no: 3,
    pola: 'Bentuk Biasa し、Bentuk Biasa し、～',
    penjelasan:
      '1) Pola kalimat ini digunakan jika menjelaskan lebih dari dua hal yang mirip mengenai topik dengan setaraf. Yang dimaksud mirip di sini adalah hal yang dijelaskannya semuanya kelihatan seperti ⑤. Dengan catatan bahwa pola kalimat ini mengandung satu hal lagi yang ditambahkan mengenai perasaan si pembicara, maka sering digunakan も. Agar lebih jelas, adakalnya menggunakan それに, seperti ⑥.\n' +
      '2) Pola kalimat ini digunakan pula untuk cara menyatakan alasan dibelakang bagian ～し、～し. Untuk ini, jika kesimpulannya sudah jelas, adakalanya alasan saja yang dijelaskan tanpa kesimpulan. Adakalanya し paling belakang dinyatakan dengan から untuk alasan.',
    contoh: [
      '⑤ 鈴木さんは ピアノも 弾けるし、歌も 歌えるし、ダンスも できます。',
      '⑥ 田中さんは まじめだし、中国語も 上手だし、それに 経験も あります。',
      '⑦ ここは 値段も 安いし、魚も 新しいし、よく 食べに 来ます。',
      '⑧ どうして この 店へ 来るんですか。……ここは 値段も 安いし、魚も 新しいし……。',
      '⑨ どうして 日本の アニメが 好きなんですか。……話も おもしろいし、音楽も すてきですから。',
    ],
    artiContoh: [
      'Sdr. Suzuki bisa bermain piano, bisa bernyanyi, juga bisa berdansa.',
      'Sdr. Tanaka rajin, pandai bahasa Tionghoa, lagi pula berpengalaman.',
      'Di sini harganya murah, ikan juga segar, maka sering datang untuk makan.',
      'Kenapa datang ke toko ini? ……Di sini harganya murah, ikan juga segar…',
      'Kenapa suka animasi Jepang? ……Ceritanya menarik, dan musiknya juga bagus.',
    ],
    furigana: [
      { base: '鈴木', ruby: 'すずき' },
      { base: '弾', ruby: 'ひ' },
      { base: '歌', ruby: 'うた' },
      { base: '中国', ruby: 'ちゅうごく' },
      { base: '値段', ruby: 'ねだん' },
      { base: '魚', ruby: 'さかな' },
      { base: '新', ruby: 'あたら' },
      { base: '話', ruby: 'はなし' },
    ],
  },
  {
    no: 4,
    pola: 'それで',
    penjelasan:
      'それで digunakan jika menjelaskan kesimpulan yang ditemukan oleh hal yang dijelaskan sebelumnya sebagai alasan.',
    contoh: [
      '⑩ 将来 小説家に なりたいです。それで 今は アルバイトを しながら 小説を 書いて います。',
      '⑪ ここは コーヒーも おいしいし、食事も できるし。……それで 人気が あるんですね。',
    ],
    artiContoh: [
      '(Saya) Ingin menjadi pengarang novel pada masa depan. Oleh karena itu, sekarang menulis novel sambil bekerja paruh waktu.',
      'Di sini kopinya enak, dan juga bisa makan... ……Oleh karena itu, populer, ya.',
    ],
    furigana: [
      { base: '将来', ruby: 'しょうらい' },
      { base: '小説家', ruby: 'しょうせつか' },
      { base: '小説', ruby: 'しょうせつ' },
      { base: '書', ruby: 'か' },
      { base: '人気', ruby: 'にんき' },
    ],
  },
  {
    no: 5,
    pola: '～ とき + Kata Bantu',
    penjelasan:
      'とき yang telah dipelajari pada Pelajaran 23 adalah Kata Benda, maka dapat menggunakannya dengan menyertai Kata Bantu di belakangnya.',
    contoh: [
      '⑫ 勉強する ときは、音楽を 聞きません。',
      '⑬ 疲れた ときや 寂しい とき、よく 田舎の 青い 空を 思い出す。',
    ],
    artiContoh: [
      'Ketika belajar tidak mendengar musik.',
      'Ketika lelah atau sepi, saya sering ingat langit biru kampung halaman. (Pel.31)',
    ],
    furigana: [
      { base: '勉強', ruby: 'べんきょう' },
      { base: '音楽', ruby: 'おんがく' },
      { base: '聞', ruby: 'き' },
      { base: '疲', ruby: 'つか' },
      { base: '寂', ruby: 'さび' },
      { base: '田舎', ruby: 'いなか' },
      { base: '青', ruby: 'あお' },
      { base: '空', ruby: 'そら' },
      { base: '思', ruby: 'おも' },
      { base: '出', ruby: 'だ' },
    ],
  },
]
