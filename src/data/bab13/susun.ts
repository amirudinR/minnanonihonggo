import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 13 — fokus 文型:
//  (1) Kata Benda が 欲しいです
//  (2) Kata Kerjaたいです（Kata Kerja bentuk ます ＋ たいです）
//  (3) Kata Benda(tempat) へ Kata Kerjaます / Kata Benda(kegiatan) に 行きます/来ます/帰ります
//  (4) 何か / どこか
// ATURAN: `kata` = unit kata (boleh ada spasi internal); `jawaban` = unit itu dalam urutan benar.
// Soal diturunkan dari reibun/bunpou/renshuu Bab 13 (pola & kalimat buku), bukan karangan.
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～が 欲しいです', arti: 'Saya ingin punya teman.', kata: ['わたしは', '友達が', '欲しいです'], jawaban: 'わたしは 友達が 欲しいです', penjelasan: 'Objek 欲しいです ditandai partikel が.' },
  { id: 's2', fokus: '何が いちばん 欲しいですか', arti: 'Sekarang apa yang paling (Anda) inginkan?', kata: ['今', '何が', 'いちばん', '欲しいですか'], jawaban: '今 何が いちばん 欲しいですか', penjelasan: '何が いちばん 欲しいですか = menanyakan keinginan tertinggi.' },
  { id: 's3', fokus: '～が 欲しいです', arti: '(Saya) ingin mobil.', kata: ['車が', '欲しいです'], jawaban: '車が 欲しいです', penjelasan: 'Jawaban menyebutkan benda + が 欲しいです.' },
  { id: 's4', fokus: '～が 欲しいです', arti: '(Saya) ingin komputer.', kata: ['わたしは', 'パソコンが', '欲しいです'], jawaban: 'わたしは パソコンが 欲しいです', penjelasan: '～が 欲しいです menyatakan keinginan memperoleh benda.' },
  { id: 's5', fokus: '～へ 行きたいです', arti: 'Pada liburan musim panas (Anda) ingin pergi ke mana?', kata: ['夏休みに', 'どこへ', '行きたいですか'], jawaban: '夏休みに どこへ 行きたいですか', penjelasan: 'Kata kerja bentuk ます + たいです = ingin melakukan.' },
  { id: 's6', fokus: '～へ 行きたいです', arti: '(Saya) ingin pergi ke Okinawa.', kata: ['沖縄へ', '行きたいです'], jawaban: '沖縄へ 行きたいです', penjelasan: '行きます → 行きたいです.' },
  { id: 's7', fokus: '～を ～たいです', arti: 'Saya ingin makan roti.', kata: ['わたしは', 'パンを', '食べたいです'], jawaban: 'わたしは パンを 食べたいです', penjelasan: '食べます → 食べたいです.' },
  { id: 's8', fokus: '～を ～たいです', arti: 'Saya ingin minum air.', kata: ['水を', '飲みたいです'], jawaban: '水を 飲みたいです', penjelasan: '飲みます → 飲みたいです.' },
  { id: 's9', fokus: '～へ ～に 行きます', arti: '(Saya) pergi ke Kobe untuk makan masakan India.', kata: ['神戸へ', 'インド料理を', '食べに', '行きます'], jawaban: '神戸へ インド料理を 食べに 行きます', penjelasan: 'Kata benda kegiatan に + 行きます menyatakan tujuan.' },
  { id: 's10', fokus: '～へ ～に 行きます', arti: '(Saya) pergi berbelanja ke Kobe.', kata: ['神戸へ', '買い物に', '行きます'], jawaban: '神戸へ 買い物に 行きます', penjelasan: '買い物 (kegiatan) + に 行きます.' },
  { id: 's11', fokus: '～へ ～に 来ました', arti: '(Saya) datang ke Jepang untuk belajar kesenian.', kata: ['日本へ', '美術の 勉強に', '来ました'], jawaban: '日本へ 美術の 勉強に 来ました', penjelasan: '～に 来ました menyatakan tujuan kedatangan.' },
  { id: 's12', fokus: '～へ 何の 勉強に 来ましたか', arti: 'Datang ke Jepang untuk belajar apa?', kata: ['日本へ', '何の 勉強に', '来ましたか'], jawaban: '日本へ 何の 勉強に 来ましたか', penjelasan: '何の 勉強に 来ましたか = datang untuk belajar apa.' },
  { id: 's13', fokus: '～へ 船を 見に 行きます', arti: '(Saya) pergi ke Kobe dengan anak untuk melihat kapal.', kata: ['子どもと', '神戸へ', '船を', '見に', '行きます'], jawaban: '子どもと 神戸へ 船を 見に 行きます', penjelasan: '見に 行きます = pergi untuk melihat.' },
  { id: 's14', fokus: 'どこか 行きましたか', arti: 'Apakah liburan musim dingin (Anda) pergi ke suatu tempat?', kata: ['冬休みは', 'どこか', '行きましたか'], jawaban: '冬休みは どこか 行きましたか', penjelasan: 'どこか = "suatu tempat" (partikel sering dihilangkan).' },
  { id: 's15', fokus: 'どこか 行きましたか', arti: 'Ya. (Saya) pergi bermain ski ke Hokkaido.', kata: ['はい', '北海道へ', 'スキーに', '行きました'], jawaban: 'はい 北海道へ スキーに 行きました', penjelasan: 'スキー (kegiatan) + に 行きました.' },
  { id: 's16', fokus: '何か 飲みたいです', arti: 'Karena haus, (saya) ingin minum sesuatu.', kata: ['のどが 渇きましたから', '何か', '飲みたいです'], jawaban: 'のどが 渇きましたから 何か 飲みたいです', penjelasan: '何か = "sesuatu" (partikel を sering dihilangkan).' },
  { id: 's17', fokus: '何も したくないです', arti: 'Karena hari ini lelah, (saya) tidak ingin melakukan apa-apa.', kata: ['きょうは', '疲れましたから', '何も', 'したくないです'], jawaban: 'きょうは 疲れましたから 何も したくないです', penjelasan: '～たくないです = bentuk negatif たいです.' },
  { id: 's18', fokus: '～の中 で いちばん ～', arti: 'Di antara olahraga, apa yang paling menarik?', kata: ['スポーツで', '何が', 'いちばん', 'おもしろいですか'], jawaban: 'スポーツで 何が いちばん おもしろいですか', penjelasan: 'Kombinasi pola ～で いちばん dengan kata tanya 何.' },
  { id: 's19', fokus: '～が 欲しいです', arti: 'Ingin pacar orang Indonesia.', kata: ['インドネシア人の', 'ガールフレンドが', '欲しいです'], jawaban: 'インドネシア人の ガールフレンドが 欲しいです', penjelasan: '～が 欲しいです dapat diikuti benda orang.' },
  { id: 's20', fokus: '～へ ～に 行きます', arti: '(Saya) pergi ke Jepang untuk belajar ekonomi.', kata: ['日本へ', '経済の 勉強に', '行きます'], jawaban: '日本へ 経済の 勉強に 行きます', penjelasan: '～に 行きます menyatakan tujuan kegiatan.' },
]
