import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 44 — tepat 5 soal per pola (4 pola 文型 + 2 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · ~すぎます ─────────────────────────────────────────────
  { id: 'b44-1-1', grup: 'bunpou', no: 1, soal: 'ゆうべ お酒を ___。', arti: 'Tadi malam saya minum minuman keras terlalu banyak.', jawaban: '飲みすぎました', pilihan: ['飲みすぎました', '飲みました', '飲みすぎます', '飲みましょう'] },
  { id: 'b44-1-2', grup: 'bunpou', no: 1, soal: 'この セーターは ___。', arti: 'Sweater ini terlalu besar.', jawaban: '大きすぎます', pilihan: ['大きすぎます', '大きいです', '大きすぎでした', '大きいすぎます'] },
  { id: 'b44-1-3', grup: 'bunpou', no: 1, soal: '笑い___、涙が 出ました。', arti: 'Karena tertawa terlalu banyak, keluar air mata.', jawaban: 'すぎて', pilihan: ['すぎて', 'すぎる', 'すぎた', 'すぎない'] },
  { id: 'b44-1-4', grup: 'bunpou', no: 1, soal: '最近の 車は 操作が 簡単___、運転が おもしろくないです。', arti: 'Mobil akhir-akhir ini terlalu mudah dioperasikan, jadi tidak menarik untuk dikendarai.', jawaban: 'すぎて', pilihan: ['すぎて', 'すぎる', 'すぎた', 'すぎない'] },
  { id: 'b44-1-5', grup: 'bunpou', no: 1, soal: 'きのう ケーキを ___。', arti: 'Kemarin saya makan kue terlalu banyak.', jawaban: '食べすぎました', pilihan: ['食べすぎました', '食べました', '食べすぎます', '食べましょう'] },

  // ── 文型 2 · Kata Kerja Bentuk ます やすいです／にくいです ──────────
  { id: 'b44-2-1', grup: 'bunpou', no: 2, soal: 'この パソコンは ___。', arti: 'PC ini mudah dipakai.', jawaban: '使いやすいです', pilihan: ['使いやすいです', '使いにくいです', '使いたいです', '使いすぎます'] },
  { id: 'b44-2-2', grup: 'bunpou', no: 2, soal: '東京は ___。', arti: 'Tokyo tidak nyaman untuk tinggali.', jawaban: '住みにくいです', pilihan: ['住みにくいです', '住みやすいです', '住みます', '住みたいです'] },
  { id: 'b44-2-3', grup: 'bunpou', no: 2, soal: '白い シャツは ___。', arti: 'Kemeja putih mudah kotor.', jawaban: '汚れやすいです', pilihan: ['汚れやすいです', '汚れにくいです', '汚れます', '汚れすぎます'] },
  { id: 'b44-2-4', grup: 'bunpou', no: 2, soal: '雨の 日は 洗濯物が ___。', arti: 'Pada hari hujan, pakaian sulit mengering.', jawaban: '乾きにくいです', pilihan: ['乾きにくいです', '乾きやすいです', '乾きます', '乾きすぎます'] },
  { id: 'b44-2-5', grup: 'bunpou', no: 2, soal: 'この コップは 丈夫で、___。', arti: 'Gelas ini kuat dan tidak mudah pecah.', jawaban: '割れにくいです', pilihan: ['割れにくいです', '割れやすいです', '割れます', '割りたいです'] },

  // ── 文型 3 · KB を ～く／～に します ───────────────────────────────
  { id: 'b44-3-1', grup: 'bunpou', no: 3, soal: '音を ___ します。', arti: 'Mengeraskan bunyi.', jawaban: '大きく', pilihan: ['大きく', '大きい', '大きに', '大きの'] },
  { id: 'b44-3-2', grup: 'bunpou', no: 3, soal: '部屋を ___ します。', arti: 'Membersihkan kamar.', jawaban: 'きれいに', pilihan: ['きれいに', 'きれいく', 'きれいな', 'きれいの'] },
  { id: 'b44-3-3', grup: 'bunpou', no: 3, soal: '塩の 量を 半分___ しました。', arti: 'Mengurangi jumlah garam sampai setengah.', jawaban: 'に', pilihan: ['に', 'へ', 'を', 'で'] },
  { id: 'b44-3-4', grup: 'bunpou', no: 3, soal: 'テレビの 音を 小さく ___。', arti: '(Saya) mengecilkan suara televisi.', jawaban: 'しました', pilihan: ['しました', 'なりました', 'ありました', 'いました'] },
  { id: 'b44-3-5', grup: 'bunpou', no: 3, soal: 'エアコンの 温度を 26度___ します。', arti: 'Mengatur suhu AC menjadi 26 derajat.', jawaban: 'に', pilihan: ['に', 'く', 'な', 'で'] },

  // ── 文型 4 · KB に します（memilih/memutuskan） ────────────────────
  { id: 'b44-4-1', grup: 'bunpou', no: 4, soal: '部屋は シングルに しますか、ツイン___ しますか。', arti: 'Kamarnya mau single atau twin?', jawaban: 'に', pilihan: ['に', 'を', 'が', 'で'] },
  { id: 'b44-4-2', grup: 'bunpou', no: 4, soal: '会議は あした___ します。', arti: 'Rapat (diadakan) besok.', jawaban: 'に', pilihan: ['に', 'へ', 'を', 'で'] },
  { id: 'b44-4-3', grup: 'bunpou', no: 4, soal: 'きょうの おかずは 魚料理___ しましょう。', arti: 'Mari kita putuskan lauk hari ini ikan.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'へ'] },
  { id: 'b44-4-4', grup: 'bunpou', no: 4, soal: 'A：コーヒーは 何に しますか。B：わたしは お茶___ します。', arti: 'A：Kopinya mau apa? B：Saya (pilih) teh.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'で'] },
  { id: 'b44-4-5', grup: 'bunpou', no: 4, soal: 'A：ホテルは どこに しますか。B：___ しましょう。', arti: 'A：Hotelnya (kita pilih) yang mana? B：Mari (pilih) Hotel Hiroshima.', jawaban: 'ホテルひろしまに', pilihan: ['ホテルひろしまに', 'ホテルひろしまを', 'ホテルひろしまが', 'ホテルひろしまで'] },

  // ── Catatan 1 · すぎます — Perhatian（konjugasi Kelompok II） ───────
  { id: 'b44-c1-1', grup: 'catatan', no: 1, soal: '最近の 車は 操作が 簡単___、運転が おもしろくないです。', arti: 'Mobil akhir-akhir ini karena operasinya terlalu mudah, tidak menarik untuk dikendarai.', jawaban: 'すぎて', pilihan: ['すぎて', 'すぎる', 'すぎた', 'すぎない'] },
  { id: 'b44-c1-2', grup: 'catatan', no: 1, soal: 'お酒を ___ ことは 体に よくないです。', arti: 'Minum terlalu banyak tidak baik untuk tubuh.', jawaban: '飲みすぎる', pilihan: ['飲みすぎる', '飲む', '飲みます', '飲んで'] },
  { id: 'b44-c1-3', grup: 'catatan', no: 1, soal: '今日は ___ ように します。', arti: 'Hari ini saya usahakan tidak minum terlalu banyak.', jawaban: '飲みすぎない', pilihan: ['飲みすぎない', '飲みすぎる', '飲みすぎて', '飲みすぎた'] },
  { id: 'b44-c1-4', grup: 'catatan', no: 1, soal: 'きのう 飲み___ から、頭が 痛いです。', arti: 'Karena kemarin minum terlalu banyak, kepala saya sakit.', jawaban: 'すぎた', pilihan: ['すぎた', 'すぎる', 'すぎて', 'すぎない'] },
  { id: 'b44-c1-5', grup: 'catatan', no: 1, soal: 'この 問題は 難し___、わかりません。', arti: 'Soal ini terlalu sulit, saya tidak mengerti.', jawaban: 'すぎて', pilihan: ['すぎて', 'すぎる', 'すぎた', 'すぎない'] },

  // ── Catatan 2 · やすい／にくい — Perhatian（Kata Sifat い） ────────
  { id: 'b44-c2-1', grup: 'catatan', no: 2, soal: 'この 薬は 砂糖を 入れると、___ なりますよ。', arti: 'Kalau memasukkan gula, obat ini menjadi mudah diminum.', jawaban: '飲みやすく', pilihan: ['飲みやすく', '飲みにくく', '飲みたいに', '飲むに'] },
  { id: 'b44-c2-2', grup: 'catatan', no: 2, soal: 'この コップは ___、安全です。', arti: 'Gelas ini tidak mudah pecah dan aman.', jawaban: '割れにくくて', pilihan: ['割れにくくて', '割れやすくて', '割れなくて', '割れて'] },
  { id: 'b44-c2-3', grup: 'catatan', no: 2, soal: 'この 辞書は 字が 大きくて、___。', arti: 'Kamus ini tulisannya besar sehingga mudah dilihat.', jawaban: '見やすいです', pilihan: ['見やすいです', '見にくいです', '見たいです', '見すぎます'] },
  { id: 'b44-c2-4', grup: 'catatan', no: 2, soal: 'この 字は 小さくて、___。', arti: 'Tulisan ini kecil sehingga sulit dibaca.', jawaban: '読みにくいです', pilihan: ['読みにくいです', '読みやすいです', '読みたいです', '読みすぎます'] },
  { id: 'b44-c2-5', grup: 'catatan', no: 2, soal: 'この パソコンは 古くて、___。', arti: 'PC ini tua sehingga sulit dipakai.', jawaban: '使いにくいです', pilihan: ['使いにくいです', '使いやすいです', '使いたいです', '使いすぎます'] },
]
