import type { Bunpou } from '@/types/bab'

// 文型 Bab 46 — sumber: Honsatsu 第46課「文型」(idx 188 / cetak 170).
// Penjelasan & contoh diambil dari PDF Indonesia "Pelajaran 46 ·
// IV. Keterangan Tata Bahasa" (idx 153–154 / cetak 132–133).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '会議は 今から 始まる ところです。',
    penjelasan:
      'ところ yang kita pelajari pada pelajaran ini digunakan ketika menjelaskan kondisi akan suatu aksi atau peristiwa. Kata Kerja Bentuk Kamus ところです: menyatakan bahwa aksi baru akan dimulai. Kebanyakan digunakan bersama dengan Kata Keterangan seperti これから, [ちょうど] いまから dan lain-lainnya.',
    contoh: [
      '① 昼ごはんは もう 食べましたか。……いいえ、これから 食べる ところです。',
      '② 会議は もう 始まりましたか。……いいえ、今から 始まる ところです。',
    ],
    artiContoh: [
      'Sudah makan siang? ……Belum, baru mau makan sekarang.',
      'Rapat sudah dimulai? ……Belum, baru mau dimulai sekarang.',
    ],
    furigana: [
      { base: '会議', ruby: 'かいぎ' },
      { base: '今', ruby: 'いま' },
      { base: '始', ruby: 'はじ' },
      { base: '昼', ruby: 'ひる' },
      { base: '食', ruby: 'た' },
    ],
  },
  {
    no: 2,
    pola: '彼は 3月に 大学を 卒業した ばかりです。',
    penjelasan:
      'Kata Kerja Bentuk た ばかりです. Pola kalimat ini juga menyatakan perasaan si pembicara bahwa waktu belum lama setelah dilakukannya aksi atau terjadi peristiwa. Tidak terpengaruh pada lama atau singkatnya waktu yang telah dilampaui sebenarnya, pola kalimat ini dapat digunakan jika lawan bicara merasa tidak lama. Bisa disambungkan ke berbagai pola kalimat sebagai Kalimat Nominal.',
    contoh: [
      '⑦ さっき 昼ごはんを 食べた ばかりです。',
      '⑧ 木村さんは 先月 この 会社に 入った ばかりです。',
      '⑨ この ビデオは 先週 買った ばかりなのに、調子が おかしいです。',
    ],
    artiContoh: [
      'Tadi baru makan siang.',
      'Sdr. Kimura baru masuk ke perusahaan ini bulan lalu.',
      'Video player ini kondisinya kurang baik, padahal baru dibeli bulan lalu.',
    ],
    furigana: [
      { base: '月', ruby: 'がつ' },
      { base: '大学', ruby: 'だいがく' },
      { base: '卒業', ruby: 'そつぎょう' },
      { base: '昼', ruby: 'ひる' },
      { base: '食', ruby: 'た' },
      { base: '木村', ruby: 'きむら' },
      { base: '先月', ruby: 'せんげつ' },
      { base: '会社', ruby: 'かいしゃ' },
      { base: '入', ruby: 'はい' },
      { base: '先週', ruby: 'せんしゅう' },
      { base: '買', ruby: 'か' },
      { base: '調子', ruby: 'ちょうし' },
    ],
  },
  {
    no: 3,
    pola: '書類は 速達で 出しましたから、あした 着く はずです。',
    penjelasan:
      'Kata Kerja Bentuk Kamus / Kata Kerja (Bentuk ない) ない / Kata Sifat い (~い) / Kata Sifat な [な] / Kata Benda の ＋ はずです. Pola kalimat ini dipakai waktu pembicara menjelaskan keputusan diri sendiri secara pasti yang berdasarkan dengan suatu bukti.',
    contoh: [
      '⑩ ミラーさんは きょう 来るでしょうか。……来る はずですよ。きのう 電話が ありましたから。',
    ],
    artiContoh: [
      'Apakah sdr. Miller datang hari ini? ……Harusnya datang. Sebab kemarin dia menelepon.',
    ],
    furigana: [
      { base: '書類', ruby: 'しょるい' },
      { base: '速達', ruby: 'そくたつ' },
      { base: '出', ruby: 'だ' },
      { base: '着', ruby: 'つ' },
      { base: '来', ruby: 'く' },
      { base: '電話', ruby: 'でんわ' },
    ],
  },
]

// Catatan tata bahasa = sub-bagian "IV. Keterangan Tata Bahasa" di buku Indonesia
// (terpisah dari bunpou, penomoran mulai dari 1). Sumber: idx 153–154 / cetak 132–133.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: '〜ところです（Kata Kerja Bentuk Kamus／て いる／た ＋ ところです）',
    penjelasan:
      'ところ digunakan ketika menjelaskan kondisi akan suatu aksi atau peristiwa.\n1) Kata Kerja Bentuk Kamus ところです: menyatakan bahwa aksi baru akan dimulai (bersama これから, [ちょうど] いまから).\n2) Kata Kerja Bentuk て いる ところです: menunjukkan bahwa aksi sedang dilakukan (bersama いま).\n3) Kata Kerja Bentuk た ところです: menunjukkan bahwa aksi baru saja diselesaikan (bersama たったいま).\n[Perhatian] 〜ところです disambung ke berbagai pola kalimat sebagai Kalimat Nominal.',
    contoh: [
      '① 昼ごはんは もう 食べましたか。……いいえ、これから 食べる ところです。',
      '③ 故障の 原因は わかりましたか。……いいえ、今 調べて いる ところです。',
      '④ 渡辺さんは いますか。……あ、たった今 帰った ところです。',
      '⑤ たった今 バスが 出た ところです。',
      '⑥ もしもし 田中ですが、今 いいでしょうか。……すみません。今から 出かける ところなんです。',
    ],
    artiContoh: [
      'Sudah makan siang? ……Belum, baru mau makan sekarang.',
      'Apakah sudah jelas apa penyebab kerusakan? ……Belum, sekarang sedang diperiksa.',
      'Apakah ada sdr. Watanabe? ……Ah, baru saja pulang.',
      'Baru saja bus berangkat.',
      'Halo, saya Tanaka, boleh mengganggu sebentar? ……Maaf. Sekarang mau keluar.',
    ],
    furigana: [
      { base: '昼', ruby: 'ひる' },
      { base: '食', ruby: 'た' },
      { base: '故障', ruby: 'こしょう' },
      { base: '原因', ruby: 'げんいん' },
      { base: '今', ruby: 'いま' },
      { base: '調', ruby: 'しら' },
      { base: '渡辺', ruby: 'わたなべ' },
      { base: '帰', ruby: 'かえ' },
      { base: '出', ruby: 'で' },
      { base: '田中', ruby: 'たなか' },
      { base: '出', ruby: 'で' },
    ],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk た ばかりです',
    penjelasan:
      'Pola kalimat ini juga menyatakan perasaan si pembicara bahwa waktu belum lama setelah dilakukannya aksi atau terjadi peristiwa. [Perhatian] 〜ばかりです disambungkan ke berbagai pola kalimat sebagai Kalimat Nominal.',
    contoh: [
      '⑦ さっき 昼ごはんを 食べた ばかりです。',
      '⑧ 木村さんは 先月 この 会社に 入った ばかりです。',
      '⑨ この ビデオは 先週 買った ばかりなのに、調子が おかしいです。',
    ],
    artiContoh: [
      'Tadi baru makan siang.',
      'Sdr. Kimura baru masuk ke perusahaan ini bulan lalu.',
      'Video player ini kondisinya kurang baik, padahal baru dibeli bulan lalu.',
    ],
    furigana: [
      { base: '昼', ruby: 'ひる' },
      { base: '食', ruby: 'た' },
      { base: '木村', ruby: 'きむら' },
      { base: '先月', ruby: 'せんげつ' },
      { base: '会社', ruby: 'かいしゃ' },
      { base: '入', ruby: 'はい' },
      { base: '先週', ruby: 'せんしゅう' },
      { base: '買', ruby: 'か' },
      { base: '調子', ruby: 'ちょうし' },
    ],
  },
  {
    no: 3,
    pola: '〜はずです（Kata Kerja Bentuk Kamus／ない／Kata Sifat い／な[な]／Kata Benda の）',
    penjelasan:
      'Pola kalimat ini dipakai waktu pembicara menjelaskan keputusan diri sendiri secara pasti yang berdasarkan dengan suatu bukti.',
    contoh: [
      '⑩ ミラーさんは きょう 来るでしょうか。……来る はずですよ。きのう 電話が ありましたから。',
    ],
    artiContoh: [
      'Apakah sdr. Miller datang hari ini? ……Harusnya datang. Sebab kemarin dia menelepon.',
    ],
    furigana: [
      { base: '来', ruby: 'く' },
      { base: '電話', ruby: 'でんわ' },
    ],
  },
]
