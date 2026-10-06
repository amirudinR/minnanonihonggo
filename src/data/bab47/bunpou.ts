import type { Bunpou } from '@/types/bab'

// 文型 Bab 47 hanya 2 pola (Honsatsu 第47課「文型」 idx 196, cetak 178) — dipakai apa adanya.
// Pola no. 3 diambil dari section "Keterangan Tata Bahasa" no. 3 PDF Indonesia
// (声／音／におい／味がします), karena pola ini tidak dicetak di halaman 文型.
// Penjelasan, contoh, dan arti contoh: PDF Indonesia "Pelajaran 47 · IV. Keterangan Tata Bahasa"
// (idx 159-160).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '～そうです (Bentuk Biasa / 辞書形)',
    penjelasan:
      'Ekspresi untuk menyampaikan informasi yang diperoleh pembicara dari pihak lain tanpa menambahkan pendapat sendiri. Ketika informasi diberikan maka diletakkan di depan kalimat yang ditandai bentuk ～に よると.',
    contoh: [
      '天気予報によると、あしたは寒くなるそうです。',
      'クララさんは子どものとき、フランスに住んでいたそうです。',
      'パリはとてもきれいだそうです。',
    ],
    artiContoh: [
      'Menurut prakiraan cuaca, besok akan menjadi dingin.',
      'Katanya ketika sdr. Klara masih kecil, dia tinggal di Prancis.',
      'Katanya Bali sangat indah.',
    ],
  },
  {
    no: 2,
    pola: '～ようです (Kata Kerja / Kata Sifat ない / Kata Sifat な / Kata Benda ＋ Bentuk Biasa ～だ→～な・～だ→～の)',
    penjelasan:
      '～ようです adalah ungkapan yang menyatakan hal yang diputuskan oleh si pembicara dari kondisi setempat. Adakanya disertakan Kata Keterangan どうか も yang berarti "tidak menyimpulkan secara pasti, tetapi".',
    contoh: [
      '人が 大勢 集まっています。',
      '……事故の ようですね。パトカーと 救急車が 来ていますよ。',
      'せきも 出るし、頭も 痛い。どうか ぜひ ひいたようだ。',
    ],
    artiContoh: [
      'Orang berkumpul banyak, ya.',
      '……Rupanya seperti insiden. Mobil patrol dan ambulans sudah datang.',
      'Berbatuk dan sakit kepala juga. Rupanya masuk angin.',
    ],
  },
  {
    no: 3,
    pola: '声／音／におい／味が します',
    penjelasan:
      'Menyatakan hal yang dirasakan melalui organ panca indera seperti suara, bunyi, bau, rasa dan lain-lain.',
    contoh: ['にぎやかな 声が しますね。'],
    artiContoh: ['Terdengar suara yang ramai, ya.'],
  },
]

// Catatan tata bahasa = sub-bagian "Perhatian" di buku (terpisah dari 文型, penomoran dari 1).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'そうです — Perhatian 1',
    penjelasan:
      'Perlu hati-hati karena cara menyambung serta juga maknanya berbeda dengan ～そうです yang telah dipelajari pada Pelajaran 43. Bandingkan pasangan kalimat berikut ini.',
    contoh: [
      '雨が 降ります。',
      '雨が 降るそうです。',
      'この 料理は おいしそうです。',
      'この 料理は おいしいそうです。',
    ],
    artiContoh: [
      'Rupanya mau hujan. (Pel.43)',
      'Katanya hujan turun.',
      'Kelihatannya makanan ini enak. (Pel.43)',
      'Katanya makanan ini enak.',
    ],
  },
  {
    no: 2,
    pola: 'そうです (desde-desus) — Perhatian 2',
    penjelasan:
      'Perbedaan antara ～そうです (desde-desus) dan ～と いって いました (Pel.33). Pada ⑨ sumber informasinya adalah sdr. Miller, sedangkan untuk ⑧ adakahnya sumber informasinya bukan sdr. Miller.',
    contoh: [
      'ミラーさんは あした 京都へ 行くそうです。',
      'ミラーさんは あした 京都へ 行くと 言っていました。',
    ],
    artiContoh: [
      'Katanya sdr. Miller pergi ke Kyoto besok.',
      'Sdr. Miller berkata bahwa dia pergi ke Kyoto besok.',
    ],
  },
  {
    no: 3,
    pola: 'そうです (Pel.43) と ようです — Perhatian',
    penjelasan:
      '⑫ adalah cara ungkapan yang hanya menjelaskan kondisi luar dari sdr. Miller, sedangkan ⑬ menyatakan keputusan yang diputuskan oleh si pembicara yang berdasarkan dengan suatu kondisi (seperti "sudah dihubungi", "tidak datang ke pesta yang telah direncanakan" dan lain-lainnya).',
    contoh: [
      'ミラーさんは 忙しそうです。',
      'ミラーさんは 忙しいようです。',
    ],
    artiContoh: ['Sdr. Miller kelihatan sibuk.', 'Rupanya sdr. Miller sibuk.'],
  },
]