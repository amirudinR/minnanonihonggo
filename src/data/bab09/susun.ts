import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 9 — fokus 文型:
//  (1) Kata Benda が あります / わかります
//  (2) Kata Benda が 好き / 嫌い / 上手 / 下手 です
//  (3) どんな Kata Benda
//  (4) よく / だいたい / たくさん / 少し / あまり / 全然
//  (5) Kalimat 1 から、Kalimat 2  (6) どうして
// ATURAN: `kata` = unit kata (boleh ada spasi internal); `jawaban` = unit itu dalam urutan benar.
// Soal diturunkan dari reibun/bunpou/renshuu Bab 9 (pola & kalimat buku), bukan karangan.
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～は ～が 好きです', arti: 'Saya suka masakan Italia.', kata: ['イタリア料理が', 'わたしは', '好きです'], jawaban: 'わたしは イタリア料理が 好きです', penjelasan: 'Objek 好きです ditandai partikel が, bukan を.' },
  { id: 's2', fokus: '～が 好きですか', arti: 'Apakah (Anda) suka masakan Italia?', kata: ['イタリア料理が', '好きですか'], jawaban: 'イタリア料理が 好きですか', penjelasan: 'Kalimat tanya dari ～が 好きです dengan menambah か.' },
  { id: 's3', fokus: '～は ～が わかります', arti: 'Saya sedikit mengerti bahasa Jepang.', kata: ['日本語が', 'わたしは', '少し', 'わかります'], jawaban: 'わたしは 日本語が 少し わかります', penjelasan: 'Kata keterangan 少し diletakkan sebelum kata kerja.' },
  { id: 's4', fokus: '～は ～が わかりますか', arti: 'Apakah Sdr. Tanaka mengerti bahasa Indonesia?', kata: ['田中さんは', 'インドネシア語が', 'わかりますか'], jawaban: '田中さんは インドネシア語が わかりますか', penjelasan: 'わかりますか = menanyakan pengertian/kemampuan.' },
  { id: 's5', fokus: 'あまり／全然 + negatif', arti: 'Tidak, sama sekali tidak mengerti.', kata: ['いいえ', '全然', 'わかりません'], jawaban: 'いいえ 全然 わかりません', penjelasan: '全然 selalu diikuti bentuk negatif.' },
  { id: 's6', fokus: '～は ～が 上手ですか', arti: 'Apakah Sdr. Karina pandai menggambar?', kata: ['カリナさんは', '絵が', '上手ですか'], jawaban: 'カリナさんは 絵が 上手ですか', penjelasan: '上手 = pandai/mahir, objeknya ditandai が.' },
  { id: 's7', fokus: 'とても ～です', arti: 'Ya, sangat pandai.', kata: ['はい', 'とても', '上手です'], jawaban: 'はい とても 上手です', penjelasan: 'とても = "sangat", memperkuat kata sifat な.' },
  { id: 's8', fokus: '～が ありますか', arti: 'Apakah (Anda) mempunyai uang receh?', kata: ['細かい お金が', 'ありますか'], jawaban: '細かい お金が ありますか', penjelasan: 'あります = ada/mempunyai, objek ditandai が.' },
  { id: 's9', fokus: '～が あります', arti: 'Hari ini ada urusan.', kata: ['きょうは', '用事が', 'あります'], jawaban: 'きょうは 用事が あります', penjelasan: '用事が あります = ada urusan (tidak bisa dihindari).' },
  { id: 's10', fokus: 'よく／少し／あまり／全然', arti: 'Mengerti bahasa Inggris dengan baik.', kata: ['英語が', 'よく', 'わかります'], jawaban: '英語が よく わかります', penjelasan: 'よく = "dengan baik", menyatakan tingkat pengertian.' },
  { id: 's11', fokus: 'よく／少し／あまり／全然', arti: 'Tidak begitu mengerti bahasa Inggris.', kata: ['英語が', 'あまり', 'わかりません'], jawaban: '英語が あまり わかりません', penjelasan: 'あまり = "tidak begitu", diikuti bentuk negatif.' },
  { id: 's12', fokus: 'よく／少し／あまり／全然', arti: 'Mempunyai banyak uang.', kata: ['お金が', 'たくさん', 'あります'], jawaban: 'お金が たくさん あります', penjelasan: 'たくさん = "banyak", diletakkan sebelum kata kerja.' },
  { id: 's13', fokus: 'よく／少し／あまり／全然', arti: 'Sama sekali tidak punya uang.', kata: ['お金が', '全然', 'ありません'], jawaban: 'お金が 全然 ありません', penjelasan: '全然 + ありません menyatakan "sama sekali tidak ada".' },
  { id: 's14', fokus: 'どんな ～が 好きですか', arti: 'Suka olahraga yang bagaimana?', kata: ['どんな スポーツが', '好きですか'], jawaban: 'どんな スポーツが 好きですか', penjelasan: 'どんな menanyakan hal khusus dari suatu kategori.' },
  { id: 's15', fokus: 'どんな ～が 好きですか', arti: 'Suka tenis.', kata: ['テニスが', '好きです'], jawaban: 'テニスが 好きです', penjelasan: 'Jawaban どんな menyebut jenis yang spesifik.' },
  { id: 's16', fokus: '～から、～', arti: 'Karena tidak ada waktu, (saya) tidak membaca surat kabar.', kata: ['時間が', 'ありませんから', '新聞を', '読みません'], jawaban: '時間が ありませんから 新聞を 読みません', penjelasan: '～から menyatakan alasan, diikuti akibatnya.' },
  { id: 's17', fokus: '～から、～', arti: 'Karena hari ini ulang tahun istri saya, (saya) pulang cepat.', kata: ['きょうは', '妻の 誕生日ですから', '早く', '帰ります'], jawaban: 'きょうは 妻の 誕生日ですから 早く 帰ります', penjelasan: 'Kalimat 1 (alasan) + から, lalu Kalimat 2 (akibat).' },
  { id: 's18', fokus: 'どうして', arti: 'Kenapa kemarin (Anda) pulang cepat?', kata: ['どうして', 'きのう', '早く', '帰りましたか'], jawaban: 'どうして きのう 早く 帰りましたか', penjelasan: 'どうして = "kenapa", menanyakan alasan.' },
  { id: 's19', fokus: 'どうして', arti: 'Karena ada urusan.', kata: ['用事が', 'ありましたから'], jawaban: '用事が ありましたから', penjelasan: 'Jawaban どうして selalu berakhiran ～から.' },
  { id: 's20', fokus: '～は ～が 嫌いです', arti: 'Sdr. Santos tidak suka masakan Jepang, ya.', kata: ['サントスさんは', '日本料理が', '嫌いですね'], jawaban: 'サントスさんは 日本料理が 嫌いですね', penjelasan: '嫌いです = tidak suka/benci, objek ditandai が.' },
]
