import type { Bunpou } from '@/types/bab'

// 4 pola 文型 (第33課, Honsatsu idx 78 / cetak 60):
//   1. 急げ。      2. 触るな。      3. 立入禁止は 入るなという 意味です。
//   4. ミラーさんは 来週 大阪へ 出張すると 言っていました。
// Penjelasan + contoh/terjemahan diambil dari PDF Indonesia "IV. Keterangan Tata Bahasa"
// (idx 75-76 / cetak 54-55) — butir 1-2 (Bentuk Imperatif・Larangan), 4 (XはYという意味です),
// dan 5 (「Kalimat」と 言っていました). Nomor contoh memakai penomoran buku ①-⑳.
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '〜ろ・〜け［Bentuk Perintah］／早く［Kata Kerja］。',
    penjelasan:
      'Menyuruh orang (biasanya bawahan/anak) melakukan sesuatu; nada perintah, sering diakhiri partikel よ agar lebih halus. ' +
      'Cara membuatnya:\n' +
      '1) Kata Kerja Golongan I: bunyi ます pada bentuk ます diganti え, lalu ditambah る → かきます→かけろ／およぎます→いそげ／よみます→よめ／あそびます→あそべ／わります→われ／いいます→いえ／たちます→たて\n' +
      '2) Kata Kerja Golongan II: ます diganti ろ → たべます→たべろ／みます→みろ\n' +
      '3) Kata Kerja Golongan III: します→しろ、きます→こい（例外: りょうります→くれろ）\n' +
      '[Perhatian] Kata Kerja keadaan seperti ある・できる・わかる tidak memiliki Bentuk Perintah. ' +
      'Terdapat pula bentuk なさい (～なさい) yang lebih halus, dipakai orang tua kepada anak atau guru kepada murid, tetapi tidak boleh dipakai kepada orang yang lebih tua.',
    contoh: ['早く 寝ろ。', '頑張れ。', '止まれ。'],
    artiContoh: ['Cepat tidur!', 'Semangat!', 'Berhenti!'],
  },
  {
    no: 2,
    pola: '〜な［Bentuk Larangan］／早く［Kata Kerja］な。',
    penjelasan:
      'Meminta atau melarang seseorang TIDAK melakukan sesuatu. Dibuat dengan mengganti る pada bentuk ます lalu ditambah な: 寝ます→寝るな、走ります→走るな。\n' +
      'Pemakaian:\n' +
      '1) Di antara orang yang setara, untuk memperlambat/meminta seseorang tidak melakukan sesuatu; biasanya sering dipakai dengan Kata Bantu よ di akhir kalimat: あした うちへ 来い[よ]。／あまり 飲むな[よ]。\n' +
      '2) Untuk mencegah sesuatu hal yang berbahaya (dari atas ke bawah, kepada anak): 早く 寝ろ。／遅れるな。\n' +
      '3) Di tempat kerja, ketika memberi petunjuk kepada rekan kerja: 逃げる。／エレベーターを 使[うな]。\n' +
      '4) Pada latihan berkelompok atau pelajaran olah raga: 休め。／休むな。\n' +
      '5) Menyemangati (juga dipakai wanita): 頑張れ。／負けるな。\n' +
      '6) Untuk meningkatkan kesederhanaan seperti tanda lalu lintas, slogan, atau mengharapkan efek yang tinggi: 止まれ。／入るな。',
    contoh: ['遅れるな。', '休むな。', '入るな。'],
    artiContoh: ['Jangan terlambat!', 'Jangan beristirahat!', 'Dilarang masuk!'],
  },
  {
    no: 3,
    pola: 'X は Y という 意味です',
    penjelasan:
      'Dipakai untuk mendefinisikan makna X. という berasal dari といいます. ' +
      'Jika bertanya tentang artinya, menggunakan Kata Tanya どういう. ' +
      'Kadang ditulis dalam tanda petik: 「○」は ○○という 意味です。',
    contoh: [
      '「立入禁止」は 入るなという 意味です。',
      'この マークは どういう 意味ですか。',
      '……洗濯機で 洗えるという 意味です。',
    ],
    artiContoh: [
      '"Tachiri Kinshi" berarti dilarang masuk.',
      'Apa maksud tanda ini?',
      'Maksudnya dapat dicuci dengan mesin cuci.',
    ],
  },
  {
    no: 4,
    pola: '［「Kalimat」／Kata Kutip］と 言っていました',
    penjelasan:
      'Jika mengutip perkataan orang ketiga menggunakan 〜と いました (Pel. 21), sedangkan jika menyampaikan perkataan orang ketiga menggunakan 〜と いって いました. ' +
      'Kalimat yang dikutip boleh ditulis dengan tanda petik (bentuk biasa) atau tanpa tanda petik.',
    contoh: ['田中さんは「あした 休みます」と 言っていました。', '田中さんは あした 休むと 言っていました。'],
    artiContoh: ['Sdr. Tanaka berkata "Besok tidak masuk".', 'Katanya sdr. Tanaka besok tidak masuk.'],
  },
]

// Catatan tata bahasa: butir Keterangan Tata Bahasa Indonesia yang TIDAK masuk
// daftar 4 文型 buku — penomoran dimulai dari 1, terpisah dari `bunpou`.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: '〜と 書いて あります／〜と 読みます',
    penjelasan:
      'Menyatakan bahwa sesuatu tertulis (bukan hasil menulis) atau cara membacanya. ' +
      'Pada ⑭ dan ⑮ bentuk ini berfungsi sama dengan 〜ています (lihat Pel. 21).',
    contoh: ['あの 漢字は 何と 読んでですか。', 'あそこに「止まれ」と 書いて あります。'],
    artiContoh: ['Huruf Kanji itu cara membacanya bagaimana?', 'Di sana tertuliskan "Berhenti".'],
  },
  {
    no: 2,
    pola: '「Kalimat」［Bentuk Biasa］と 伝えて いただけませんか',
    penjelasan: 'Memakai jika meminta pesan secara halus (menyampaikan perkataan orang ketiga kepada orang lain).',
    contoh: [
      'ワンさんに「あとか 電話を ください」と 伝えて いただけませんか。',
      'すみませんが、渡辺さんに あしたの パーティーは 6時からだと 伝えて いただけませんか。',
    ],
    artiContoh: [
      'Tolong sampaikan kepada sdr. Wang bahwa "Minta telepon nanti".',
      'Maaf, tolong sampaikan kepada sdri. Watanabe bahwa pesta besok dari pukul enam.',
    ],
  },
]