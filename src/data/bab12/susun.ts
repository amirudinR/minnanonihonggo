import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 12 — fokus 文型:
//  (1) Kalimat nominal/adjektival bentuk waktu lampau（でした／じゃ ありませんでした／～かったです／～く なかったです）
//  (2) Kata Benda1 は Kata Benda2 より Kata Sifat です
//  (3) Kata Benda1 と Kata Benda2 と どちらが Kata Sifat ですか ……～の ほうが ～
//  (4) Kata Benda1［の中］で {何/どこ/だれ/いつ} が いちばん Kata Sifat ですか
// ATURAN: `kata` = unit kata (boleh ada spasi internal); `jawaban` = unit itu dalam urutan benar.
// Soal diturunkan dari reibun/bunpou/renshuu Bab 12 (pola & kalimat buku), bukan karangan.
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～は ～でした', arti: 'Kemarin hujan.', kata: ['きのうは', '雨でした'], jawaban: 'きのうは 雨でした', penjelasan: 'Kata benda + でした = bentuk lampau nominal.' },
  { id: 's2', fokus: '～は ～でしたか', arti: 'Apakah Kyoto tenang?', kata: ['京都は', '静かでしたか'], jawaban: '京都は 静かでしたか', penjelasan: 'Kata sifat な + でしたか (bentuk lampau tanya).' },
  { id: 's3', fokus: '～じゃ ありませんでした', arti: 'Tidak, (Kyoto) tidak tenang.', kata: ['いいえ', '静かじゃ', 'ありませんでした'], jawaban: 'いいえ 静かじゃ ありませんでした', penjelasan: 'Negatif lampau kata sifat な: ～じゃ ありませんでした.' },
  { id: 's4', fokus: '～は ～かったです', arti: 'Apakah wisatanya menyenangkan? Ya, sangat menyenangkan.', kata: ['旅行は', '楽しかったですか', 'はい', 'とても 楽しかったです'], jawaban: '旅行は 楽しかったですか はい とても 楽しかったです', penjelasan: 'Kata sifat い bentuk lampau: ～かったです.' },
  { id: 's5', fokus: '～く なかったです', arti: 'Cuacanya baik? ……Tidak, tidak begitu baik.', kata: ['天気は', 'よかったですか', 'いいえ', 'あまり よく なかったです'], jawaban: '天気は よかったですか いいえ あまり よく なかったです', penjelasan: 'Negatif lampau kata sifat い: ～く なかったです.' },
  { id: 's6', fokus: '～は どうでしたか', arti: 'Bagaimana pesta kemarin?', kata: ['きのうの パーティーは', 'どうでしたか'], jawaban: 'きのうの パーティーは どうでしたか', penjelasan: 'どうでしたか = menanyakan kesan/keadaan di masa lampau.' },
  { id: 's7', fokus: '～は にぎやかでした', arti: 'Sangat ramai. (Saya) bertemu dengan banyak orang.', kata: ['とても', 'にぎやかでした', 'いろいろな 人に', '会いました'], jawaban: 'とても にぎやかでした いろいろな 人に 会いました', penjelasan: 'Kata sifat な にぎやか + でした.' },
  { id: 's8', fokus: '～は ～より ～です', arti: 'Apakah Tokyo lebih banyak penduduknya daripada New York?', kata: ['東京は', 'ニューヨークより', '人が', '多いですか'], jawaban: '東京は ニューヨークより 人が 多いですか', penjelasan: 'Pola perbandingan: A は B より Kata Sifat です.' },
  { id: 's9', fokus: 'ずっと ～です', arti: 'Ya, jauh lebih banyak.', kata: ['はい', 'ずっと', '多いです'], jawaban: 'はい ずっと 多いです', penjelasan: 'ずっと = "jauh lebih", memperkuat perbandingan.' },
  { id: 's10', fokus: '～より ～です', arti: 'Mobil ini lebih besar daripada mobil itu.', kata: ['この 車は', 'あの 車より', '大きいです'], jawaban: 'この 車は あの 車より 大きいです', penjelasan: 'A は B より 大きいです = A lebih besar daripada B.' },
  { id: 's11', fokus: '～と ～と どちらが ～ですか', arti: 'Kalau ke bandara, yang mana lebih cepat, bus atau kereta?', kata: ['空港まで', 'バスと 電車と', 'どちらが', '速いですか'], jawaban: '空港まで バスと 電車と どちらが 速いですか', penjelasan: 'A と B と どちらが = meminta pilihan antara dua.' },
  { id: 's12', fokus: '～の ほうが ～です', arti: 'Lebih cepat dengan kereta.', kata: ['電車の ほうが', '速いです'], jawaban: '電車の ほうが 速いです', penjelasan: 'Jawaban perbandingan memakai ～の ほうが.' },
  { id: 's13', fokus: 'どちらも ～です', arti: 'Suka yang mana, laut atau gunung? ……Suka dua-duanya.', kata: ['海と 山と', 'どちらが', '好きですか', 'どちらも', '好きです'], jawaban: '海と 山と どちらが 好きですか どちらも 好きです', penjelasan: 'どちらも = "dua-duanya", bila tidak memilih.' },
  { id: 's14', fokus: '～［の中］で 何が いちばん ～ですか', arti: '(Anda) paling suka apa di antara masakan Jepang?', kata: ['日本料理で', '何が', 'いちばん', '好きですか'], jawaban: '日本料理で 何が いちばん 好きですか', penjelasan: '～で {何} が いちばん … menanyakan derajat paling tinggi.' },
  { id: 's15', fokus: '～が いちばん ～です', arti: 'Tempura yang paling (saya) suka.', kata: ['てんぷらが', 'いちばん', '好きです'], jawaban: 'てんぷらが いちばん 好きです', penjelasan: 'Jawaban memakai いちばん.' },
  { id: 's16', fokus: '～で どこが いちばん ～ですか', arti: 'Di dunia, di mana yang paling indah?', kata: ['世界で', 'どこが', 'いちばん', 'きれいですか'], jawaban: '世界で どこが いちばん きれいですか', penjelasan: 'どこが いちばん = "di mana yang paling".' },
  { id: 's17', fokus: '～で いつが いちばん ～ですか', arti: 'Dalam 1 tahun, kapan yang paling dingin?', kata: ['１年で', 'いつが', 'いちばん', '寒いですか'], jawaban: '１年で いつが いちばん 寒いですか', penjelasan: 'いつが いちばん = "kapan yang paling".' },
  { id: 's18', fokus: '～は ～より ～です', arti: 'Sdr. Miller lebih pandai tenis daripada Sdr. Santos.', kata: ['ミラーさんは', 'サントスさんより', 'テニスが', '上手です'], jawaban: 'ミラーさんは サントスさんより テニスが 上手です', penjelasan: 'Perbandingan orang memakai A は B より ….' },
  { id: 's19', fokus: '～は ～でした', arti: 'Ujian kemarin tidak mudah.', kata: ['きのうの 試験は', '簡単じゃ', 'ありませんでした'], jawaban: 'きのうの 試験は 簡単じゃ ありませんでした', penjelasan: 'Kata sifat な 簡単 + じゃ ありませんでした.' },
  { id: 's20', fokus: '～は ～かったです', arti: 'Kemarin panas.', kata: ['きのうは', '暑かったです'], jawaban: 'きのうは 暑かったです', penjelasan: 'Kata sifat い 暑い bentuk lampau: 暑かったです.' },
]
