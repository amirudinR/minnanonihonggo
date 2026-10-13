import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 23 — fokus 文型:
//  (1) Kata Kerja Bentuk Kamus／ない／Kata Sifat い／な／Kata Benda の とき、～
//  (2) Kata Kerja Bentuk Kamus／た とき、～
//  (3) Kata Kerja Bentuk Kamus と、～
//  (4) Kata Benda が Kata Sifat
//  + catatan: Kata Benda を + Kata Kerja gerakan berpindah
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 23 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja (Bentuk Kamus) とき、～', arti: 'Ketika meminjam buku di perpustakaan, diperlukan kartu.', kata: ['図書館で', '本を', '借りる', 'とき、', 'カードが', '要ります'], jawaban: '図書館で 本を 借りる とき、 カードが 要ります', penjelasan: 'Bentuk kamus 借りる + とき menyatakan waktu sebelum aksi.' },
  { id: 's2', fokus: 'Kata Kerja (Bentuk ない) とき、～', arti: 'Jika tidak tahu cara pemakaiannya, silakan tanya kepada saya.', kata: ['使い方が', 'わからない', 'とき、', 'わたしに', '聞いて ください'], jawaban: '使い方が わからない とき、 わたしに 聞いて ください', penjelasan: 'Bentuk ない わからない + とき.' },
  { id: 's3', fokus: 'Kata Sifat い (～い) とき、～', arti: 'Ketika badan tidak enak, minum "Genki-cha".', kata: ['体の 調子が', '悪い', 'とき、', '「元気茶」を', '飲みます'], jawaban: '体の 調子が 悪い とき、 「元気茶」を 飲みます', penjelasan: 'Kata sifat い 悪い langsung diikuti とき.' },
  { id: 's4', fokus: 'Kata Sifat な [な] とき、～', arti: 'Pada waktu luang, bagaimana kalau datang bermain ke rumah saya?', kata: ['暇な', 'とき、', 'うちへ', '遊びに', '来ませんか'], jawaban: '暇な とき、 うちへ 遊びに 来ませんか', penjelasan: 'Kata sifat な 暇な diikuti とき.' },
  { id: 's5', fokus: 'Kata Benda の とき、～', arti: 'Jika istri sakit, saya tidak masuk kerja.', kata: ['妻が', '病気の', 'とき、', '会社を', '休みます'], jawaban: '妻が 病気の とき、 会社を 休みます', penjelasan: 'Kata benda 病気 + の + とき.' },
  { id: 's6', fokus: 'Kata Sifat い (～い) とき、～', arti: 'Waktu muda, tidak begitu belajar.', kata: ['若い', 'とき、', '勉強しませんでした'], jawaban: '若い とき、 勉強しませんでした', penjelasan: 'とき juga bisa merujuk masa lalu, mis. 若い とき.' },
  { id: 's7', fokus: 'Kata Benda の とき、～', arti: 'Waktu masih kecil, sering berenang di sungai.', kata: ['子どもの', 'とき、', 'よく', '川で', '泳ぎました'], jawaban: '子どもの とき、 よく 川で 泳ぎました', penjelasan: '子どもの とき = sewaktu (masih) anak-anak.' },
  { id: 's8', fokus: 'Kata Kerja (Bentuk Kamus) とき、～', arti: 'Waktu mau pergi ke Paris, saya membeli tas.', kata: ['パリへ', '行く', 'とき、', 'かばんを', '買いました'], jawaban: 'パリへ 行く とき、 かばんを 買いました', penjelasan: 'Bentuk kamus 行く → membeli tas SEBELUM tiba di Paris.' },
  { id: 's9', fokus: 'Kata Kerja (Bentuk た) とき、～', arti: 'Waktu pergi ke Paris, saya membeli tas (di Paris).', kata: ['パリへ', '行った', 'とき、', 'かばんを', '買いました'], jawaban: 'パリへ 行った とき、 かばんを 買いました', penjelasan: 'Bentuk た 行った → membeli tas SETELAH tiba di Paris.' },
  { id: 's10', fokus: 'Kata Kerja (Bentuk Kamus) とき、～', arti: 'Ketika keluar dari ruang rapat, apakah mematikan AC?', kata: ['会議室を', '出る', 'とき、', 'エアコンを', '消しましたか'], jawaban: '会議室を 出る とき、 エアコンを 消しましたか', penjelasan: 'を + 出る: kata kerja gerakan berpindah.' },
  { id: 's11', fokus: 'Kata Sifat な [な] とき、～', arti: 'Sering menonton TV? ……Saya menonton TV kalau ada pertandingan baseball.', kata: ['よく', 'テレビを', '見ますか', 'そうですね', '野球の 試合が', 'ある', 'とき、', '見ます'], jawaban: 'よく テレビを 見ますか そうですね 野球の 試合が ある とき、 見ます', penjelasan: 'ある (kata kerja) + とき menyatakan kondisi.' },
  { id: 's12', fokus: 'Kata Kerja (Bentuk た) とき、～', arti: 'Saya membelinya ketika saya pulang ke negara saya.', kata: ['夏休みや', 'お正月に', '国へ', '帰った', 'とき、', '買います'], jawaban: '夏休みや お正月に 国へ 帰った とき、 買います', penjelasan: '帰った (bentuk た) + とき.' },
  { id: 's13', fokus: 'Kata Benda の とき、～', arti: 'Ketika masih kuliah, apakah bekerja sambilan?', kata: ['学生の', 'とき、', 'アルバイトを', 'しましたか'], jawaban: '学生の とき、 アルバイトを しましたか', penjelasan: '学生の とき = sewaktu (masih) mahasiswa.' },
  { id: 's14', fokus: 'Kata Kerja Bentuk Kamus と、～', arti: 'Kalau tekan tombol ini, uang kembaliannya keluar.', kata: ['この ボタンを', '押すと、', 'お釣りが', '出ます'], jawaban: 'この ボタンを 押すと、 お釣りが 出ます', penjelasan: 'Bentuk kamus + と menyatakan akibat pasti.' },
  { id: 's15', fokus: 'Kata Kerja Bentuk Kamus と、～', arti: 'Kalau memutar ini, suaranya akan membesar.', kata: ['これを', '回すと、', '音が', '大きく', 'なります'], jawaban: 'これを 回すと、 音が 大きく なります', penjelasan: '回すと → 音が 大きく なります (hasil pasti).' },
  { id: 's16', fokus: 'Kata Kerja Bentuk Kamus と、～', arti: 'Kalau belok ke kanan, ada kantor pos.', kata: ['右へ', '曲がると、', '郵便局が', 'あります'], jawaban: '右へ 曲がると、 郵便局が あります', penjelasan: '曲がると → 郵便局が あります (keberadaan sebagai akibat).' },
  { id: 's17', fokus: 'Kata Kerja Bentuk Kamus と、～', arti: 'Kalau pergi lurus jalan ini, ada di sebelah kiri.', kata: ['この 道を', 'まっすぐ', '行くと、', '左に', 'あります'], jawaban: 'この 道を まっすぐ 行くと、 左に あります', penjelasan: '行くと = kalau (kita) pergi, (akan) ada.' },
  { id: 's18', fokus: 'Kata Benda が Kata Sifat', arti: 'Suaranya kecil.', kata: ['音が', '小さいです'], jawaban: '音が 小さいです', penjelasan: 'が menandai fenomena yang dirasakan langsung dengan panca indera.' },
  { id: 's19', fokus: 'Kata Benda が Kata Sifat', arti: 'Suaranya kecil ya. ……Kalau memutar tombol ini ke kanan, akan membesar.', kata: ['音が', '小さいですね', 'この つまみを', '右へ', '回すと、', '大きく', 'なります'], jawaban: '音が 小さいですね この つまみを 右へ 回すと、 大きく なります', penjelasan: '回すと + ～く なります menyatakan perubahan.' },
  { id: 's20', fokus: 'Kata Benda を + Kata Kerja gerakan', arti: 'Di perempatan belok ke kanan.', kata: ['交差点を', '右へ', '曲がります'], jawaban: '交差点を 右へ 曲がります', penjelasan: 'を dengan kata kerja berpindah = tempat yang dilewati.' },
]
