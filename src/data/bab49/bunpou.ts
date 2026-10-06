import type { Bunpou } from '@/types/bab'

// 4 pola 文型 — sumber: Honsatsu 第49課「文型」(idx 212 / cetak 194).
// Penjelasan & contoh diambil dari PDF Indonesia "Pelajaran 49 · II. Terjemahan — Pola Kalimat"
// (idx 169) dan "IV. Keterangan Tata Bahasa" (idx 171–172).
// Bab 49 tidak memakai kolom pola seperti bab lain: 文型-nya berupa 4 kalimat contoh
// tentang 敬語 (Kata Halus) / 尊敬語 (Kata Hormat).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '課長は もう 帰られました。',
    penjelasan:
      'Kata Halus (敬語) menyatakan rasa hormat terhadap lawan bicara atau orang yang menjadi topik. Memakai atau tidaknya Kata Halus dipastikan dengan lawan bicara, orang yang menjadi topik, atau adegan. Pada prinsipnya, digunakan (1) ketika berbicara dengan orang yang lebih tua, orang yang tidak kenal, atau orang yang kurang akrab, (2) berbicara tentang orang yang lebih tua, (3) pada adegan formal dan lain-lainnya. Pada Pelajaran 49 buku ini mempelajari けいこ, dan pada Pelajaran 50 けんじょうご (Kata Merendahkan Diri).',
    contoh: ['① 農村さんは 7時に 来られます。', '② お酒を やめられたんですか。'],
    artiContoh: [
      'Sdri. Nakamura akan datang pada pukul tujuh.',
      'Apakah sudah berhenti minum sake?',
    ],
  },
  {
    no: 2,
    pola: '社長は もう お帰りになりました。',
    penjelasan:
      'Kata Hormat (尊敬語) menyatakan rasa hormat terhadap aksi atau keadaan dari unsur pokok, yaitu terhadap orang yang melakukan aksi itu. (1) Kata Kerja Hormat dipakai untuk seluruh Kata Kerja Pasif, termasuk Kata Kerja Kelompok II. (2) Kata Kerja (Bentuk ます) lebih halus daripada Kata Kerja Hormat pada (1) dan dipakai untuk kata seperti います, ねます, ねむります dan lain-lain serta Kata Kerja Kelompok III, tetapi perlu hati-hati untuk konjugasi.',
    contoh: ['③ 社長は もう お帰り になりました。', '④ ワット先生は 研究室 に いらっしゃいます。'],
    artiContoh: ['Direktur sudah pulang.', 'Apakah Bapak Watt ada di laboratorium?'],
  },
  {
    no: 3,
    pola: '部長は アメリカへ 出張なさいます。',
    penjelasan:
      'Beberapa Kata Kerja memiliki Kata Hormat Khusus, yaitu kata yang menyatakan rasa hormat yang lebih tinggi lagi. Contohnya 出張する → 出張なさいます (お～なさいます) pada 文型 no. 3 dan 文型 no. 4 (しばらく お待ち ください).',
    contoh: ['⑤ どうぞ お喜び ください。', '⑥ どうぞ お入り ください。'],
    artiContoh: ['Silakan bersukacita!', 'Silakan masuk!'],
  },
  {
    no: 4,
    pola: 'しばらく お待ち ください。',
    penjelasan:
      'Pada perintah (Bentuk ～てください) buku ini memakai bentuk-bentuk sopan: お＋Kata Kerja＋ください (お使い ください, お入り ください, お書き ください, お座り ください) serta お伝え ください. Perlu diwaspadai bahwa Kata Kerja seperti 休みます, なくします dan 降ります tidak memiliki bentuk Kata Hormat Khusus, sehingga untuk Kata Kerja tersebut dipakai Bentuk て.',
    contoh: [
      '⑦ 忘れ物 に ご注意 ください。',
      '⑧ また いらっしゃって ください。',
    ],
    artiContoh: [
      'Hati-hati barang bawaan Anda agar tidak tertinggal!',
      'Silakan datang lagi!',
    ],
  },
]

// Catatan tata bahasa = sub-bagian "IV. Keterangan Tata Bahasa" di buku
// (terpisah dari bunpou, penomoran mulai dari 1).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: '敬語 （Kata Halus）',
    penjelasan:
      '敬語 adalah ungkapan untuk menyatakan rasa hormat terhadap lawan bicara atau orang yang menjadi topik. Pada prinsipnya, digunakan (1) ketika berbicara dengan orang yang lebih tua, orang yang tidak kenal, atau orang yang kurang akrab, (2) berbicara tentang orang yang lebih tua, (3) pada adegan formal dan lain-lainnya.',
    contoh: ['① 農村さんは 7時に 来られます。'],
    artiContoh: ['Sdri. Nakamura akan datang pada pukul tujuh.'],
  },
  {
    no: 2,
    pola: '尊敬語 （Kata Hormat）',
    penjelasan:
      'Kata Hormat menyatakan rasa hormat terhadap aksi atau keadaan dari unsur pokok. 1) Kata Kerja menyatakan rasa hormat terhadap orang yang melakukan aksi itu. 2) Kata Benda, Kata Sifat dan Kata Keterangan juga menambahkan お atau ご — umumnya untuk kata yang berasal dari bahasa Jepang, sedangkan kata yang berasal dari bahasa Inggris memakai お juga. Contoh awalan お: お父様, お名前, お仕事, お客さん, お元気, お上手, お祝い, お電話, お願い. Contoh awalan ご: ご家族, ご意見, ご旅行, ご熱心, ご親切, ご自信に. 3) Kata Halus dan Bentuk Kalimat menyatakan rasa hormat terhadap orang yang menjadi topik saja.',
    contoh: [
      '③ 社長は もう お帰り になりました。',
      '⑨ 部長の 奥様も ご一緒に ゴルフに 行かれます。',
    ],
    artiContoh: [
      'Direktur sudah pulang.',
      'Istri kepala bagian juga bersama-sama pergi ke golf.',
    ],
  },
  {
    no: 3,
    pola: '尊敬語 — Perhatian 1 （いらっしゃい ます）',
    penjelasan:
      'Ada bentuk-bentuk khusus いらっしゃい ます, なさいます (Bentuk Kamus), くださる (Bentuk Kamus: なさる), くださいます (Bentuk Kamus: くださる), いらっしゃい (Bentuk Kamus: おる), および おしてる (Bentuk Kata Kerja Kelompok I, tetapi perlu hati-hati untuk konjugasi). Contoh bentuk: いらっしゃいます（× いらっしゃります）、いらっしゃいやらない、いらっしゃいやった、いらっしゃいやらなかった.',
    contoh: ['④ ワット先生は 研究室 に いらっしゃいます。'],
    artiContoh: ['Apakah Bapak Watt ada di laboratorium?'],
  },
  {
    no: 4,
    pola: '尊敬語 — Perhatian 2 （お／ご）',
    penjelasan:
      'Jika memakai けいこ, tidak hanya untuk Kata Kerja saja tetapi juga untuk kata yang dipakai dalam kalimat itu. ⑨ 部長の 奥様も ご一緒に ゴルフに 行かれます.',
    contoh: ['⑨ 部長の 奥様も ご一緒に ゴルフに 行かれます。'],
    artiContoh: ['Istri kepala bagian juga bersama-sama pergi ke golf.'],
  },
  {
    no: 5,
    pola: 'Kata Halus dan Bentuk Kalimat',
    penjelasan:
      'Menyatakan rasa hormat terhadap orang yang menjadi topik, tetapi apabila tidak perlu menyatakan rasa hormat terhadap lawan bicara, maka seperti ⑩ けいこ を digunakan dalam kalimat Bentuk Biasa. ⑩ 部長は 何時に っしゃる?',
    contoh: ['⑩ 部長は 何時に っしゃる?'],
    artiContoh: ['Kepala bagian datang pada pukul berapa?'],
  },
  {
    no: 6,
    pola: '～まして',
    penjelasan:
      'Jika ingin berbicara dengan halus, adakalanya Kata Kerja Bentuk て diubah menjadi Kata Kerja (Bentuk ます). ⑪ ハンスが ゆうべ 熱を 出しまして、けさも まだ 下がらないんです。',
    contoh: ['⑪ ハンスが ゆうべ 熱を 出しまして、けさも まだ 下がらないんです。'],
    artiContoh: ['Tadi malam Hans Demam, dan pagi ini Demam belum turun juga.'],
  },
  {
    no: 7,
    pola: '～ますので',
    penjelasan:
      'Apabila bentuk biasa の て ingin dijadikan lebih halus, adakalnya dipakai bentuk sopan の て. ⑫ きょうは 学校を 休ませて ので、先生に よろしく お伝え ください。',
    contoh: ['⑫ きょうは 学校を 休ませて ので、先生に よろしく お伝え ください。'],
    artiContoh: [
      'Tolong sampaikan salam kepada guru karena hari ini saya menyuruh anak saya untuk tidak masuk sekolah!',
    ],
  },
]