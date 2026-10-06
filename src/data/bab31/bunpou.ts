import type { Bunpou } from '@/types/bab'

// 4 pola 文型 + 3 catatan — sumber: PDF Indonesia,
// "Pelajaran 31 · IV. Keterangan Tata Bahasa" (idx 63–64, cetak 42–43).
// Bagian 1–2 halaman itu (Bentuk Maksud / cara pemakaian) adalah tabel bentuk ます,
// bukan 文型; 文型-nya adalah nomor 3–6 (= 文型 di Honsatsu 第31課 文型, hS_62).
// Penjelasan, contoh, dan arti contoh diambil dari buku Indonesia.
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Bentuk Kamus ／ Kata Kerja［Bentuk ない］＋ つもりです',
    penjelasan:
      'Kata Kerja Bentuk Kamus つもりです menyatakan kehendak. Bentuk negatif biasanya menggunakan dengan bentuk Kata Kerja（Bentuk ない）ない つもりです.',
    contoh: [
      '⑦ 国へ 帰っても、日本語の 勉強を 続ける つもりです。',
      '⑧ あしたからは たばこを 吸わない つもりです。',
    ],
    artiContoh: [
      'Kalau pulang ke tanah air, (saya) ingin meneruskan belajar bahasa Jepang.',
      'Mulai besok, (saya) bermaksud tidak merokok.',
    ],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk Kamus ／ Kata Benda の 予定です',
    penjelasan: 'Cara untuk menjelaskan pernyataan rencana.',
    contoh: ['⑨ 7月の 終わりに ドイツへ 出張する 予定です。', '⑩ 旅行は 1週間くらいの 予定です。'],
    artiContoh: [
      'Rencana pada akhir bulan Juli (saya) dinas ke Jerman.',
      'Rencana perjalanan lebih kurang selama seminggu.',
    ],
  },
  {
    no: 3,
    pola: 'まだ ＋ Kata Kerja Bentuk ていません',
    penjelasan:
      'Ekspresi ini menyatakan bahwa pada saat unggapan/pembicaraan, belum terjadi kejadian atau perbedaan belum selesai.',
    contoh: [
      '⑪ 銀行は まだ 開いて いません。',
      '⑫ レポートは もう 書きましたか。……いいえ、まだ 書いて いません。',
    ],
    artiContoh: [
      'Bank belum buka.',
      'Apakah (Anda) sudah menulis laporan? ……Belum, belum menulis.',
    ],
  },
  {
    no: 4,
    pola: '踊ります ─ 踊り',
    penjelasan:
      'Seperti ⑬ atau ⑭, bentuk yang sama dengan Bentuk ます digunakan sebagai Kata Benda. Contoh transformasi seperti di bawah ini; 呼びます ─ 呼び、誘います ─ 誘い、説明します ─ 説明、し込みます ─ 申し込み、楽しみます ─ 楽しみ（menikmati）─ 楽しみ.',
    contoh: ['⑬ 帰りの 新幹線は どこから 乗りますか。', '⑭ 休みは 何曜日ですか。'],
    artiContoh: ['Naik dari mana Shinkansen pulang?', 'Hari apa liburnya? (Pel.4)'],
  },
]

// Catatan tata bahasa = sub-bagian "Perhatian" di buku (terpisah dari bunpou, penomoran dari 1).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Bentuk Maksud — Perhatian 1',
    penjelasan:
      'Pada kalimat tanya Bentuk Biasa, pada umumnya tidak diletakkan Kata Bantu か pada akhir kalimat, tetapi untuk kalimat tanya Bentuk Biasa ～ましょう か seperti ② atau ③ diperlukan Kata Bantu か pada akhir kalimat.',
    contoh: ['① ちょっと 休まない？', '② 手伝おうか。', '③ 傘を 持って 行くか。'],
    artiContoh: [
      'Bagaimana kalau (kita) beristirahat sebentar?',
      'Mari saya bantu?',
      'Apakah (Anda) membawa payung?',
    ],
  },
  {
    no: 2,
    pola: 'Bentuk Maksud — Perhatian 2',
    penjelasan:
      'Kata Kerja Bentuk Maksud 思っています hanya dapat menyatakan maksud dari si pembicara, sedangkan bentuk 思われる dapat menyatakan maksud dari orang ketiga.',
    contoh: ['⑤ 今から 銀行へ 行こうと 思います。', '⑥ 彼は 学校を 作ろうと 思っています。'],
    artiContoh: [
      'Sekarang mau pergi ke bank.',
      'Dia ingin membuat sekolah.',
    ],
  },
  {
    no: 3,
    pola: 'つもりです — Perhatian 3',
    penjelasan:
      'Antara Kata Kerja Bentuk Maksud 思っています dan Kata Kerja Bentuk Kamus つもり tidak terdapat perbedaan yang besar, namun untuk menyatakan maksud yang pasti, atau mengulang tekad yang kukuh, kebanyakan menggunakan Kata Kerja Bentuk Kamus つもり です.',
    contoh: [
      '⑦ 国へ 帰っても、日本語の 勉強を 続ける つもりです。',
      '⑧ あしたからは たばこを 吸わない つもりです。',
    ],
    artiContoh: [
      'Kalau pulang ke tanah air, (saya) ingin meneruskan belajar bahasa Jepang.',
      'Mulai besok, (saya) bermaksud tidak merokok.',
    ],
  },
]