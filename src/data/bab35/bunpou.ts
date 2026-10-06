import type { Bunpou } from '@/types/bab'

// 3 pola dari 文型 (第35課). Penjelasan dan terjemahan contoh diambil dari
// PDF Indonesia "Terjemahan > Pola Kalimat".
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '〜になれば、〜',
    penjelasan:
      'Pada kata kerja bentuk だ, menyatakan bahwa jika suatu hal terjadi pada masa yang akan datang, maka hal yang lain juga akan terjadi.',
    contoh: ['春に なれば、桜が 咲きます。'],
    artiContoh: ['Jika musim semi tiba, Sakura akan mekar.'],
  },
  {
    no: 2,
    pola: '〜ければ、〜',
    penjelasan:
      'Pada kata kerja bentuk だ, menyatakan syarat yang dianggap pasti (klausa gelap).',
    contoh: ['天気が よければ、向こうに 島が 見えます。'],
    artiContoh: ['Kalau cuaca baik, pulau terlihat di sebelah sana.'],
  },
  {
    no: 3,
    pola: '〜なら、〜',
    penjelasan:
      'Pada kata kerja bentuk だ, menyatakan suatu hal yang masih belum tentu terjadi (klausa terang).',
    contoh: ['北海道旅行なら、6月が いいです。'],
    artiContoh: ['Kalau bepergian ke Hokkaido, yang cocok adalah bulan Juni.'],
  },
]

// Catatan dari PDF Indonesia "IV. Keterangan Tata Bahasa" Pelajaran 35.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Cara membuat Bentuk Syarat',
    penjelasan:
      'Kelompok I: Bunyi dari kolom い sebagai bunyi terakhir dari bentuk ます diubah menjadi bunyi kolom え, kemudian diubah menjadi ば.\n' +
      'Kelompok II: Dibubuhkan れ jika pada bentuk ます.\n' +
      'Kelompok III: し ます → すれば / きます → くれば / います → いれば / ます → れば.\n' +
      '[Perhatian] Jika bentuk negatif dari Kata Kerja (contoh: いかない) diubah menjadi Bentuk Syarat, dengan membubuhkan なければ pada bentuk ない (contoh: いか).\n' +
      'Kata Sifat い: diubah menjadi ければ. Kata Sifat な: dibubungkan ら pada bentuk yang dihilangkan な. Kata Benda: dibubungkan なら.',
    contoh: ['春に なれば、桜が 咲きます。', '天気が よければ、向こうに 島が 見えます。'],
    artiContoh: ['Jika musim semi tiba, Sakura akan mekar.', 'Kalau cuaca baik, pulau terlihat di sebelah sana.'],
  },
  {
    no: 2,
    pola: 'Bentuk Syarat、〜',
    penjelasan:
      '1) Pada hal awal yang menyatakan syarat yang diperlukan untuk mencapai hal-hal pada bagian belakang (klausa gelap): tombol → jendelanya terbuka; dia pergi → saya juga pergi; Besok ada waktu → silakan datang; cuaca baik → pulau terlihat.\n' +
      '2) Untuk merespon perkataan lawan bicara atau suatu keadaan, menyatakan keputusan si pembicara: Tidak ada bolpoin… / Tidak ada bolpoin, silakan tulis dengan pensil; Harus submit laporan sampai besok / Kalau tidak bisa, serahkan sampai dengan hari Jumat.\n' +
      'Pada dasarnya, dalam hal bagian belakang (klausa pokok) tidak akan diletakkan ekspresi mengenai keinginan, harapan, perintah, permintaan dan lain-lain, tetapi jika subjek antara hal awal dan belakang berbeda, walaupun bentuk ini dapat dipakai. Dengan demikian, bentuk tara dapat menyatakan keadaan yang akan terjadi.',
    contoh: [
      'ボタンを 押せば、窓が 開きます。',
      'ボールペンか ないんですが、鉛筆で 書いて ください。',
      'あしたまでに レポートを 出さなければ なりませんか。',
    ],
    artiContoh: [
      'Kalau menekan tombol, jendelanya terbuka.',
      'Tidak ada bolpoin, silakan tulis dengan pensil.',
      'Apakah (saya) harus menyerahkan laporan sampai dengan besok?',
    ],
  },
  {
    no: 3,
    pola: '〜たら（Pel.25）',
    penjelasan:
      '〜たら mempunyai dua cara penggunaan, yaitu (1) cara penggunaan untuk menyatakan syarat pengandaian, dan (2) cara penggunaan untuk jika sebelumnya jelas bahwa akan mencapai Kata Kerja Bentuk だ, setelah tercapai yang tersebut, akan mencapai aksi atau keadaan pada kalimat pokok yang menyusulnya. Untuk hal di belakang (kalimat pokok) dapat menggunakan ekspresi keinginan, harapan, perintah dan permintaan.',
    contoh: [
      'ここを 押すと、ドアが 開きます。',
      'ここを 押せば、ドアが 開きます。',
      '東京へ 来たら、ぜひ 連絡して ください。',
      '田中さんが 東京へ 来れば、【わたしは】会いに行きます。',
    ],
    artiContoh: [
      'Kalau menekan di sini, pintunya terbuka.',
      'Jika menekan di sini, pintunya terbuka.',
      'Kalau datang ke Tokyo, silakan hubungi (saya).',
      'Kalau sdr. Tanaka datang ke Tokyo, saya pergi bertemu.',
    ],
  },
  {
    no: 4,
    pola: 'Kata Tanya Kata Kerja Bentuk Syarat いいですか',
    penjelasan:
      'Ekspresi untuk meminta masukan atau petunjuk dari lawan bicara. Dapat dipakai sama seperti 〜たら いいですか yang telah dijelaskan pada Pel.26.',
    contoh: ['本を 借りたいんですが、どう すればいいですか。', '本を 借りたいんですが、どう したら いいですか。'],
    artiContoh: ['Ingin meminjam buku, bagaimana caranya?', 'Ingin meminjam buku, bagaimana caranya? (Pel.26)'],
  },
  {
    no: 5,
    pola: 'Kata Benda なら、〜',
    penjelasan:
      'Kata Benda なら、〜 digunakan pula jika merespon perkataan lawan bicara, kemudian memberikan informasi mengenai sesuatu hal tersebut.',
    contoh: ['温泉に 行きたいんですが、どこが いいですか。', '……温泉なら、馬場が いいですよ。'],
    artiContoh: [
      'Ingin pergi ke pemandian air panas, yang bagus di mana?',
      'Kalau pemandian air panas, Hakuba yang bagus.',
    ],
  },
  {
    no: 6,
    pola: '〜は ありませんか（Kalimat Tanya Negatif）',
    penjelasan:
      'Berbeda dengan いいですか, tetapi bertanya dengan ありません, lawan bicara dengan mudah menjawab "tidak ada" maka dianggap cara bertanya yang menjaga perasaan lawan bicara. Dengan demikian, pada umumnya bentuk Tanya Negatif yang dijadikan cara untuk menanyakan secara halus. Ketika menjawab, menggunakan はい、あります atau いいえ、ありません。',
    contoh: ['2、3日 旅行を しようと 思っているんですが、どこか いい 所は ありませんか。'],
    artiContoh: ['Saya pikir mau berjalan-jalan selama dua, tiga hari, apakah ada tempat yang Anda rekomendasikan?'],
  },
]