import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 25 — fokus 文型:
//  (1) Kata Kerja/Kata Sifat/Kata Benda (Bentuk Biasa Lampau) ら、～　(kalimat pokok)
//  (2) Kata Kerja Bentuk たら、～　(kalimat pokok)
//  (3) Kata Kerja Bentuk て／ない なくて／Kata Sifat くて／で／Kata Benda で も、～
//  + catatan: もし , subjek anak kalimat dengan が
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 25 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja (Bentuk たら) 、～', arti: 'Kalau turun hujan, saya tidak pergi.', kata: ['雨が', '降ったら、', '出かけません'], jawaban: '雨が 降ったら、 出かけません', penjelasan: 'Bentuk Biasa Lampau + ら membentuk persyaratan asumsi.' },
  { id: 's2', fokus: 'Kata Sifat い（～かったら） 、～', arti: 'Kalau murah, ingin membeli komputer.', kata: ['安かったら、', 'パソコンを', '買いたいです'], jawaban: '安かったら、 パソコンを 買いたいです', penjelasan: 'Kata sifat い: 安い → 安かったら.' },
  { id: 's3', fokus: 'Kata Benda だったら 、～', arti: 'Kalau cuaca baik, bagaimana kita jalan-jalan?', kata: ['いい 天気だったら、', '散歩しませんか'], jawaban: 'いい 天気だったら、 散歩しませんか', penjelasan: 'Kata benda 天気 → 天気だったら.' },
  { id: 's4', fokus: 'Kata Sifat な（～だったら） 、～', arti: 'Kalau sedang luang, tolong bantu saya.', kata: ['暇だったら、', '手伝って ください'], jawaban: '暇だったら、 手伝って ください', penjelasan: 'Kata sifat な 暇 → 暇だったら.' },
  { id: 's5', fokus: 'Kata Kerja (Bentuk ない) なかったら 、～', arti: 'Kalau tidak ada waktu, tidak menonton TV.', kata: ['時間が', 'なかったら、', 'テレビを', '見ません'], jawaban: '時間が なかったら、 テレビを 見ません', penjelasan: 'Negatif lampau なかった + ら.' },
  { id: 's6', fokus: 'Kata Kerja Bentuk たら 、～', arti: 'Kalau sudah sampai pukul sepuluh, kita berangkat.', kata: ['10時に', 'なったら、', '出かけましょう'], jawaban: '10時に なったら、 出かけましょう', penjelasan: 'なったら = kalau sudah menjadi (pukul 10).' },
  { id: 's7', fokus: 'Kata Kerja Bentuk たら 、～', arti: 'Kalau pulang ke rumah, saya langsung mandi.', kata: ['うちへ', '帰ったら、', 'すぐ', 'シャワーを', '浴びます'], jawaban: 'うちへ 帰ったら、 すぐ シャワーを 浴びます', penjelasan: '帰ったら menyatakan hal yang terjadi setelahnya.' },
  { id: 's8', fokus: 'Kata Kerja Bentuk たら 、～', arti: 'Kalau tamat universitas, Anda langsung bekerja?', kata: ['大学を', '出たら、', 'すぐ', '働きますか'], jawaban: '大学を 出たら、 すぐ 働きますか', penjelasan: '出たら = kalau (sudah) lulus/keluar.' },
  { id: 's9', fokus: 'もし ～たら、～', arti: 'Kalau punya seratus juta yen, ingin berwisata di berbagai negara.', kata: ['もし', '１億円', 'あったら、', 'いろいろな', '国を', '旅行したいです'], jawaban: 'もし １億円 あったら、 いろいろな 国を 旅行したいです', penjelasan: 'もし menegaskan bahwa kalimat itu adalah persyaratan.' },
  { id: 's10', fokus: 'もし ～たら、～', arti: 'Kalau punya seratus juta yen, apa yang ingin Anda lakukan?', kata: ['もし', '１億円', 'あったら、', '何を', 'したいですか'], jawaban: 'もし １億円 あったら、 何を したいですか', penjelasan: 'Kalimat pokok boleh berisi keinginan (したいですか).' },
  { id: 's11', fokus: 'Kata Kerja (Bentuk ない) なかったら 、～', arti: 'Kalau teman tidak datang pada waktu janji, bagaimana?', kata: ['約束の 時間に', '友達が', '来なかったら、', 'どう', 'しますか'], jawaban: '約束の 時間に 友達が 来なかったら、 どう しますか', penjelasan: 'Subjek anak kalimat ditandai が.' },
  { id: 's12', fokus: 'Kata Sifat な（～だったら） 、～', arti: 'Kalau tidak memungkinkan, silakan serahkan pada hari Jumat.', kata: ['無理だったら、', '金曜日に', '出して ください'], jawaban: '無理だったら、 金曜日に 出して ください', penjelasan: 'Kata sifat な 無理 → 無理だったら.' },
  { id: 's13', fokus: 'Kata Kerja (Bentuk たら) 、～', arti: 'Kalau meminum obat ini, menjadi sehat.', kata: ['この 薬を', '飲んだら、', '元気に', 'なります'], jawaban: 'この 薬を 飲んだら、 元気に なります', penjelasan: '飲んだら → 元気に なります (akibat).' },
  { id: 's14', fokus: 'Kata Kerja (Bentuk たら) 、～', arti: 'Kalau datang ke stasiun, tolong telepon.', kata: ['駅に', '着いたら、', '電話を', 'ください'], jawaban: '駅に 着いたら、 電話を ください', penjelasan: 'Kalimat pokok berisi permohonan (ください).' },
  { id: 's15', fokus: 'Kata Kerja (Bentuk たら) 、～ませんか', arti: 'Kalau pekerjaan sudah selesai, ayo pergi minum.', kata: ['仕事が', '終わったら、', '飲みに', '行きましょう'], jawaban: '仕事が 終わったら、 飲みに 行きましょう', penjelasan: 'Kalimat pokok berisi ajakan (ましょう).' },
  { id: 's16', fokus: 'Kata Kerja (Bentuk ても) 、～', arti: 'Walaupun turun hujan, saya pergi.', kata: ['雨が', '降っても、', '出かけます'], jawaban: '雨が 降っても、 出かけます', penjelasan: 'Bentuk て + も menyatakan persyaratan paradoks.' },
  { id: 's17', fokus: 'Kata Sifat い（～くても） 、～', arti: 'Walaupun murah, saya tidak suka tur rombongan.', kata: ['安くても、', 'わたしは', 'グループ旅行が', '嫌いです'], jawaban: '安くても、 わたしは グループ旅行が 嫌いです', penjelasan: 'Kata sifat い 安い → 安くても.' },
  { id: 's18', fokus: 'Kata Sifat な（～でも） 、～', arti: 'Walaupun praktis, tidak memakai komputer.', kata: ['便利でも、', 'パソコンを', '使いません'], jawaban: '便利でも、 パソコンを 使いません', penjelasan: 'Kata sifat な 便利 → 便利でも.' },
  { id: 's19', fokus: 'Kata Benda でも 、～', arti: 'Walaupun hari Minggu, bekerja.', kata: ['日曜日でも、', '働きます'], jawaban: '日曜日でも、 働きます', penjelasan: 'Kata benda + でも = walaupun (hari Minggu).' },
  { id: 's20', fokus: 'Kata Kerja (Bentuk ても) 、～', arti: 'Walaupun melihat di kamus, saya tidak mengerti.', kata: ['見て も、', 'わかりません'], jawaban: '見て も、 わかりません', penjelasan: '見て も = walaupun melihat (kata kerja bentuk て + も).' },
]
