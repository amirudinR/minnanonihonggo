import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Ini kue yang dibuat oleh Sdr. Miller.',
    penjelasan: '',
    contoh: ['これは ミラーさんが 作った ケーキです。'],
    artiContoh: ['Ini kue yang dibuat oleh Sdr. Miller.'],
  },
  {
    no: 2,
    pola: 'Orang yang ada di sana adalah Sdr. Miller.',
    penjelasan: '',
    contoh: ['あそこに いる 人は ミラーさんです。'],
    artiContoh: ['Orang yang ada di sana adalah Sdr. Miller.'],
  },
  {
    no: 3,
    pola: '(Saya) lupa kosa kata yang telah dipelajari kemarin.',
    penjelasan: '',
    contoh: ['きのう 習った ことばを 忘れました。'],
    artiContoh: ['(Saya) lupa kosa kata yang telah dipelajari kemarin.'],
  },
  {
    no: 4,
    pola: 'Tidak ada waktu untuk pergi belanja.',
    penjelasan: '',
    contoh: ['買い物に 行く 時間が ありません。'],
    artiContoh: ['Tidak ada waktu untuk pergi belanja.'],
  },
]

// "IV. Keterangan Tata Bahasa" (PDF Indonesia idx 160-161). Penomoran mulai dari 1.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Anak Kalimat',
    penjelasan:
      'Pada Pelajaran 2 dan Pelajaran 8 telah dipelajari cara untuk menerangkan Kata Benda.\nミラーさんの うち　rumah Sdr. Miller (Pel.2)\n新しい うち　rumah yang baru (Pel.8)\nきれいな うち　rumah yang indah (Pel.8)\nKata atau frase yang menerangkan diletakkan di depan Kata Benda. Pada pelajaran ini, mempelajari frase yang menerangkan Kata Benda.\n1) Kata Kerja, Kata Sifat dan Kata Benda yang terdapat di dalam anak kalimat adalah Bentuk Biasa. Untuk Kata Sifat Bentuk な menjadi ～な, sedangkan untuk Kata Benda menjadi ～の.\n2) Anak kalimat dipakai dalam berbagai pola kalimat seperti di bawah ini.\n3) Subjek di dalam anak kalimat ditunjukkan dengan partikel が.',
    contoh: [
      'これは ミラーさんが 住んで いた うちです。',
      'ミラーさんが 住んで いた うちは 古いです。',
      'ミラーさんが 住んで いた うちを 買いました。',
      'わたしは ミラーさんが 住んで いた うちが 好きです。',
      'ミラーさんが 住んで いた うちには 猫が いました。',
      'ミラーさんが 住んで いた うちへ 行った ことが あります。',
      'これは ミラーさんが 作った ケーキです。',
      'わたしは カリナさんが かいた 絵が 好きです。',
      '「あなたは」彼が 生まれた 所を 知って いますか。',
    ],
    artiContoh: [
      'Ini adalah rumah yang dihuni Sdr. Miller.',
      'Rumah yang dihuni Sdr. Miller sudah tua.',
      'Membeli rumah yang dihuni Sdr. Miller.',
      'Saya suka rumah yang dihuni Sdr. Miller.',
      'Di rumah yang dihuni Sdr. Miller ada kucing.',
      'Pernah pergi ke rumah yang dihuni Sdr. Miller.',
      'Ini adalah kue yang dibuat oleh Sdr. Miller.',
      'Saya suka lukisan yang dilukis oleh Sdr. Karina.',
      'Apakah [Anda] tahu tempat dia lahir?',
    ],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk Kamus 時間／約束／用事',
    penjelasan:
      'Jika menunjukkan waktu ketika melakukan sesuatu, ada janji dan ada urusan, aksi tersebut dijadikan Bentuk Kamus kemudian diletakkan di depan Kata Benda じかん, やくそく, ようじ dan lain-lainnya.',
    contoh: [
      'わたしは 朝ごはんを 食べる 時間が ありません。',
      'わたしは 友達と 映画を 見る 約束が あります。',
      'きょうは 市役所へ 行く 用事が あります。',
    ],
    artiContoh: [
      'Saya tidak ada waktu makan pagi.',
      'Saya ada janji dengan teman untuk menonton film.',
      'Hari ini ada urusan pergi ke kantor wali kota.',
    ],
  },
  {
    no: 3,
    pola: 'Kata Kerja (Bentuk ます) ましょうか',
    penjelasan:
      'Pada Pelajaran 14, pola kalimat ini telah dipelajari sebagai ekspresi dari si pembicara menawarkan diri melakukan sesuatu kepada lawan bicara. Pada percakapan pelajaran ini, ekspresi ini disajikan sebagai ekspresi si pembicara yang menawarkan diri kepada lawan bicara untuk bersama-sama melakukan sesuatu.',
    contoh: ['この 部屋、きょう 見る ことが できますか。……ええ。今から 行きましょうか。'],
    artiContoh: ['Apakah kamar ini dapat saya lihat hari ini? ……Ya. Bagaimana kalau pergi sekarang?'],
  },
]
