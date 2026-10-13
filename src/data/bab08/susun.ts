import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 8 — fokus 文型:
//  (1) Kata Benda は Kata Sifatな です  (2) Kata Benda は Kata Sifatい（～い） です
//  (3) Kata Sifatなな Kata Benda  (4) Kata Sifatい Kata Benda
//  + catatan: negatif じゃありません／くないです , とても／あまり , どうですか , どんな , ～が、～
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 8 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Benda は Kata Sifatな です', arti: 'Sakura indah.', kata: ['桜は', 'きれいです'], jawaban: '桜は きれいです', penjelasan: 'Kata Sifat な + です tanpa な.' },
  { id: 's2', fokus: 'Kata Benda は Kata Sifatな です', arti: 'Sdr. Watt baik hati.', kata: ['ワットさんは', '親切です'], jawaban: 'ワットさんは 親切です', penjelasan: 'Kata Sifat な berfungsi sebagai predikat.' },
  { id: 's3', fokus: 'Kata Benda は Kata Sifatい です', arti: 'Gunung Fuji tinggi.', kata: ['富士山は', '高いです'], jawaban: '富士山は 高いです', penjelasan: 'Kata Sifat い + です.' },
  { id: 's4', fokus: 'Kata Benda は Kata Sifatい です', arti: 'Apakah Osaka ramai?', kata: ['大阪は', 'にぎやかですか'], jawaban: '大阪は にぎやかですか', penjelasan: 'Kalimat tanya adjektival ditambah か.' },
  { id: 's5', fokus: 'Kata Benda は Kata Sifatな です', arti: 'Ya, ramai.', kata: ['はい', 'にぎやかです'], jawaban: 'はい にぎやかです', penjelasan: 'Jawaban memakai Kata Sifat, bukan そうです.' },
  { id: 's6', fokus: 'negatif じゃありません', arti: 'Universitas Sakura terkenal? ……Tidak, tidak terkenal.', kata: ['さくら大学は', '有名ですか', 'いいえ、有名じゃ ありません'], jawaban: 'さくら大学は 有名ですか いいえ、有名じゃ ありません', penjelasan: 'Negatif Kata Sifat な: ～じゃ ありません.' },
  { id: 's7', fokus: 'negatif じゃありません', arti: 'Di sana tidak sunyi.', kata: ['あそこは', '静かじゃ ありません'], jawaban: 'あそこは 静かじゃ ありません', penjelasan: 'Bentuk tanpa な + じゃありません.' },
  { id: 's8', fokus: 'negatif くないです', arti: 'Buku ini tidak menarik.', kata: ['この 本は', 'おもしろくないです'], jawaban: 'この 本は おもしろくないです', penjelasan: 'Negatif Kata Sifat い: ～い → ～くないです.' },
  { id: 's9', fokus: 'とても／あまり', arti: 'Beijing sangat dingin.', kata: ['ペキンは', 'とても', '寒いです'], jawaban: 'ペキンは とても 寒いです', penjelasan: 'とても = "sangat", dipakai di kalimat positif.' },
  { id: 's10', fokus: 'とても／あまり', arti: 'Shanghai tidak begitu dingin.', kata: ['シャンハイは', 'あまり', '寒くないです'], jawaban: 'シャンハイは あまり 寒くないです', penjelasan: 'あまり dipakai bersama kalimat negatif.' },
  { id: 's11', fokus: 'とても／あまり', arti: 'Ini film yang sangat terkenal.', kata: ['これは', 'とても', '有名な', '映画です'], jawaban: 'これは とても 有名な 映画です', penjelasan: 'とても menerangkan Kata Sifat な + Kata Benda.' },
  { id: 's12', fokus: 'Kata Sifatなな Kata Benda', arti: 'Sakura adalah bunga yang indah.', kata: ['桜は', 'きれいな', '花です'], jawaban: '桜は きれいな 花です', penjelasan: 'Kata Sifat な menerangkan Kata Benda dengan な.' },
  { id: 's13', fokus: 'Kata Sifatなな Kata Benda', arti: 'Sdr. Watt adalah guru yang baik hati.', kata: ['ワットさんは', '親切な', '先生です'], jawaban: 'ワットさんは 親切な 先生です', penjelasan: 'Kata Sifat な + な + Kata Benda.' },
  { id: 's14', fokus: 'Kata Sifatい Kata Benda', arti: 'Gunung Fuji adalah gunung yang tinggi.', kata: ['富士山は', '高い', '山です'], jawaban: '富士山は 高い 山です', penjelasan: 'Kata Sifat い langsung di depan Kata Benda.' },
  { id: 's15', fokus: 'Kata Sifatい Kata Benda', arti: 'Saya menonton film yang menarik kemarin.', kata: ['きのう', 'おもしろい', '映画を', '見ました'], jawaban: 'きのう おもしろい 映画を 見ました', penjelasan: 'おもしろい menerangkan 映画.' },
  { id: 's16', fokus: '～が、～', arti: 'Makanan Jepang enak, tetapi mahal.', kata: ['日本の 食べ物は', 'おいしいですが', '高いです'], jawaban: '日本の 食べ物は おいしいですが 高いです', penjelasan: 'が menyambung dua hal yang berlawanan.' },
  { id: 's17', fokus: '～が、～', arti: 'Asrama universitas itu tua, tetapi praktis.', kata: ['大学の 寮は', '古いが', '便利です'], jawaban: '大学の 寮は 古いが 便利です', penjelasan: 'が menyambung sifat kontras.' },
  { id: 's18', fokus: 'Kata Benda は どうですか', arti: 'Bagaimana kehidupan di Jepang?', kata: ['日本の 生活は', 'どうですか'], jawaban: '日本の 生活は どうですか', penjelasan: 'どうですか = menanyakan kesan/pendapat.' },
  { id: 's19', fokus: 'Kata Benda は どんな Kata Benda ですか', arti: 'Nara kota yang bagaimana?', kata: ['奈良は', 'どんな', '町ですか'], jawaban: '奈良は どんな 町ですか', penjelasan: 'どんな + Kata Benda + ですか.' },
  { id: 's20', fokus: 'Kata Benda は どんな Kata Benda ですか', arti: 'Rumahnya bagaimana?', kata: ['どんな', 'うちですか'], jawaban: 'どんな うちですか', penjelasan: 'どんな うちですか = "rumah yang bagaimana?".' },
]
