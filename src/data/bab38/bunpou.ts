import type { Bunpou } from '@/types/bab'

// 4 pola 文型 — sumber: PDF Indonesia, "Pelajaran 38 · IV. Keterangan Tata Bahasa"
// (cetak 84-85 = idx 105-106). Penjelasan, contoh, dan arti contoh diambil dari buku.
// Daftar 4 文型 mengikuti ringkasan 文型 Honsatsu 第38課 (cetak 102 = idx 120):
//   ① 絵を かくのは 楽しいです。 ② わたしは 星を 見るのが 好きです。
//   ③ 財布を 持って 来るのを 忘れました。 ④ わたしが 日本へ 来たのは 去年の 3月です。
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '［ Kata Kerja Bentuk Kamus ］ のは ［ Kata Sifat ］ です',
    penjelasan:
      'Pola kalimat Kata Kerja Bentuk Kamus のは menyatakan topik. Kata Sifat yang sering digunakan untuk pola kalimat ini, yaitu むずかしい, やさしい, おもしろい, たのしい, たいへん［な］ dan lain-lain. Dibandingkan dengan kalimat ① yang tidak memakai の, kalimat ② dan ③ yang memakai の secara konkret menjelaskan hal bermain tenis dan hal menonton tenis adalah hal yang menarik.',
    contoh: ['① テニスは おもしろいです。', '② テニスを するのは おもしろいです。', '③ テニスを 見るのは おもしろいです。'],
    artiContoh: ['Tenis itu menarik.', 'Bermain tenis itu menarik.', 'Menonton tenis itu menarik.'],
  },
  {
    no: 2,
    pola: '［ Kata Kerja Bentuk Kamus ］ のが ［ Kata Sifat ］ です',
    penjelasan:
      'Kata Kerja Bentuk Kamus のが menjadi sasaran daripada Kata Sifat. Kata Sifat yang sering digunakan untuk pola kalimat ini adalah Kata Sifat yang menyatakan kesukaan, keterampilan, kemampuan, misalnya すき［な］, きらい［な］, じょうず［な］, へた［な］, はい, おそい dan lain-lainnya.',
    contoh: ['④ わたしは 花が 好きです。', '⑤ わたしは 花を 育てるのが 好きです。', '⑥ 東京の 人は 歩くのが 速いです。'],
    artiContoh: ['Saya suka bunga.', 'Saya suka memelihara bunga.', 'Orang-orang di Tokyo cepat berjalan.'],
  },
  {
    no: 3,
    pola: '［ Kata Kerja Bentuk Kamus ］ のを 忘れました',
    penjelasan:
      'Contoh Kata Kerja Bentuk Kamus yang ditandai dengan を. Menjelaskan isi mengenai hal yang dilupakan secara konkret.',
    contoh: ['⑦ かぎを 忘れました。', '⑧ 牛乳を 買うのを 忘れました。', '⑨ 車の 窓を 閉めるのを 忘れました。'],
    artiContoh: ['Lupa kunci.', 'Lupa membeli susu.', 'Lupa menutup jendela mobil.'],
  },
  {
    no: 4,
    pola: '［ Kata Kerja Bentuk Biasa／ Kata Sifat ／ Kata Benda ］ の（は・が） … です',
    penjelasan:
      'Pola kalimat sebagai cara ungkapan untuk menekankan Kata Benda. Unsur pokok pada kalimat sebelum 〜のは ditunjuk dengan が, tetapi bukan dengan は. Pola kalimat ini juga sering digunakan ketika mengoreksikan pertanyaan lawan bicara.',
    contoh: ['⑬ 初めて 会ったのは いつですか。', '⑭ バンコクで 生まれたんですか。', '⑮ 父が 生まれたのは 北海道の 小さな 村です。'],
    artiContoh: ['Kapan pertama kali bertemu?', 'Lahir di Bangkok?', 'Tempat ayah saya lahir adalah sebuah desa kecil di Hokkaido.'],
  },
]

// Catatan tata bahasa = sub-bagian penjelas di luar 4 文型 (terpisah dari bunpou,
// penomoran mulai dari 1).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'の — sebagai fungsi pembentukan Kata Benda',
    penjelasan:
      'の berfungsi sebagai pembentukan Kata Benda untuk bermacam-macam ekspresi. Kata Kerja, Kata Sifat dan Kata Benda yang disambung dengan の tidak dibedakan sebagai bentuk-bentuk lain, tetapi bentuk biasa. Ekspresi yang terbentuk sebagai Kata Benda menjadi berbagai unsur seperti di bawah ini;',
    contoh: ['[テレビの]横 ＝ Position', '前（まえ）＝ depan', '隣（となり）＝ di samping', '［机の］周り ＝ sekitar'],
    artiContoh: ['di samping TV', 'depan', 'di samping', 'sekitar meja'],
  },
  {
    no: 2,
    pola: '知っていますか — Perhatian 1 (ada atau tidak adanya informasi)',
    penjelasan:
      'Contoh Kata Kerja Bentuk Biasa yang ditandai dengan を. Digunakan ketika menanyakan apakah Anda tahu atau tidak mengenai isi kalimat secara konkret. Pada ⑪, lawan bicara tidak memiliki informasi bahwa bayi telah lahir, tetapi dengan pertanyaan dia memperoleh informasinya, maka menjawab 知りませんでした. Sedangkan pada ⑫, sebelum pertanyaan dan dengan pertanyaan pun, tidak mempunyai informasi maka menjawab 知りません.',
    contoh: [
      '⑩ 鈴木さんが 来月 結婚するのを 知っていますか。',
      '⑪ 木村さんに 赤ちゃんが 生まれたのを 知っていますか。',
      '⑫ ミラーさんの 住所を 知っていますか。',
    ],
    artiContoh: [
      'Apakah Anda tahu sdr. Suzuki akan menikah bulan depan?',
      'Apakah Anda tahu bahwa sdr. Kimura telah melahirkan?',
      'Apakah Anda tahu alamat sdr. Miller?',
    ],
  },
  {
    no: 3,
    pola: 'のは — Perhatian 2 (pertanyaan tentang yang pertama kali dan koreksi)',
    penjelasan:
      'Pada ⑬ hal yang si pembicara ingin tanyakan adalah hal mengenai pertama kali bertemu, dan secara khusus kapan waktunya. Pola kalimat ini sering digunakan ketika mengoreksikan pertanyaan lawan bicara seperti ⑭. Unsur pokok pada kalimat sebelum 〜のは ditunjuk dengan が, tetapi bukan dengan は.',
    contoh: ['⑬ 初めて 会ったのは いつですか。', '⑭ バンコクで 生まれたんですか。', '⑮ 父が 生まれたのは 北海道の 小さな 村です。'],
    artiContoh: ['Kapan pertama kali bertemu?', 'Lahir di Bangkok?', 'Tempat ayah saya lahir adalah sebuah desa kecil di Hokkaido.'],
  },
]