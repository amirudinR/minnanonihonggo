import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 42 — tepat 5 soal per pola (4 pola 文型 + 2 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · { V Kamus / KB の } ために、～ ────────────────────────
  { id: 'b42-1-1', grup: 'bunpou', no: 1, soal: '自分の 家を ___ ために、貯金しています。', arti: 'Saya menabung uang untuk membeli rumah sendiri.', jawaban: '買う', pilihan: ['買う', '買います', '買って', '買った'] },
  { id: 'b42-1-2', grup: 'bunpou', no: 1, soal: '引っ越し___ ために、車を 借ります。', arti: 'Saya menyewa mobil untuk pindah rumah.', jawaban: 'の', pilihan: ['の', 'な', 'に', 'を'] },
  { id: 'b42-1-3', grup: 'bunpou', no: 1, soal: '健康___ ために、毎朝 走っています。', arti: 'Saya berlari setiap pagi demi kesehatan.', jawaban: 'の', pilihan: ['の', 'な', 'が', 'に'] },
  { id: 'b42-1-4', grup: 'bunpou', no: 1, soal: '家族の ために、うちを ___。', arti: 'Saya membangun rumah untuk keluarga.', jawaban: '建てます', pilihan: ['建てます', '建てました', '建てません', '建てましょう'] },
  { id: 'b42-1-5', grup: 'bunpou', no: 1, soal: '日本の 大学へ ___ ために、日本語を 勉強しています。', arti: 'Saya belajar bahasa Jepang untuk pergi ke universitas di Jepang.', jawaban: '行く', pilihan: ['行く', '行きます', '行って', '行った'] },

  // ── 文型 2 · { V Kamus の / KB } に ～（kegunaan） ─────────────────
  { id: 'b42-2-1', grup: 'bunpou', no: 2, soal: 'この はさみは 花を 切る___ 使います。', arti: 'Gunting ini digunakan untuk memotong bunga.', jawaban: 'のに', pilihan: ['のに', 'のを', 'のが', 'のも'] },
  { id: 'b42-2-2', grup: 'bunpou', no: 2, soal: 'この かばんは 大きくて、旅行___ 便利です。', arti: 'Tas ini besar sehingga praktis untuk perjalanan.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'で'] },
  { id: 'b42-2-3', grup: 'bunpou', no: 2, soal: 'これは ワインを 開ける___ 使います。', arti: 'Ini digunakan untuk membuka botol anggur.', jawaban: 'のに', pilihan: ['のに', 'のを', 'のが', 'のも'] },
  { id: 'b42-2-4', grup: 'bunpou', no: 2, soal: 'かんきりは 缶を 開ける___ 使います。', arti: 'Pembuka kaleng digunakan untuk membuka kaleng.', jawaban: 'のに', pilihan: ['のに', 'のを', 'のが', 'のも'] },
  { id: 'b42-2-5', grup: 'bunpou', no: 2, soal: 'きのうの 引っ越し___ 時間が かかりました。', arti: 'Pindah rumah kemarin memerlukan waktu.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'で'] },

  // ── 文型 3 · Kata Keterangan Bilangan は／も ───────────────────────
  { id: 'b42-3-1', grup: 'bunpou', no: 3, soal: 'ボーナスの 半分___ 貯金する つもりです。', arti: 'Saya berencana menabung (setidaknya) separuh bonus.', jawaban: 'は', pilihan: ['は', 'も', 'が', 'を'] },
  { id: 'b42-3-2', grup: 'bunpou', no: 3, soal: 'A：半分___ 貯金するんですか。B：ええ、少しは 残しますよ。', arti: 'A：Menabung separuhnya (sebanyak itu)? B：Ya, sedikit tetap saya sisakan.', jawaban: 'も', pilihan: ['も', 'は', 'が', 'に'] },
  { id: 'b42-3-3', grup: 'bunpou', no: 3, soal: '毎月 3万円___ 貯金しています。', arti: 'Setiap bulan (setidaknya) saya menabung 30.000 yen.', jawaban: 'は', pilihan: ['は', 'も', 'が', 'を'] },
  { id: 'b42-3-4', grup: 'bunpou', no: 3, soal: 'きのうの パーティーには 100人___ 来ました。', arti: 'Pada pesta kemarin datang 100 orang (banyak sekali).', jawaban: 'も', pilihan: ['も', 'は', 'が', 'に'] },
  { id: 'b42-3-5', grup: 'bunpou', no: 3, soal: 'きょうは 暑くて、水を 3杯___ 飲みました。', arti: 'Hari ini panas, saya minum air sampai 3 gelas.', jawaban: 'も', pilihan: ['も', 'は', 'が', 'を'] },

  // ── 文型 4 · ～に よって（pelaku pasif） ────────────────────────────
  { id: 'b42-4-1', grup: 'bunpou', no: 4, soal: 'チキンラーメンは 安藤百福さん___ 発明されました。', arti: 'Chicken Ramen diciptakan oleh Bapak Ando Momofuku.', jawaban: 'によって', pilihan: ['によって', 'について', 'にとって', 'につれて'] },
  { id: 'b42-4-2', grup: 'bunpou', no: 4, soal: 'チキンラーメンは 1958年___ 発明されました。', arti: 'Chicken Ramen diciptakan pada tahun 1958.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'で'] },
  { id: 'b42-4-3', grup: 'bunpou', no: 4, soal: '「エリゼの ために」は ベートーベン___ 作られました。', arti: '"Kepada Elise" diciptakan oleh Beethoven.', jawaban: 'によって', pilihan: ['によって', 'について', 'にとって', 'につれて'] },
  { id: 'b42-4-4', grup: 'bunpou', no: 4, soal: 'この 本は ある 音楽家___ 書かれました。', arti: 'Buku ini ditulis oleh seorang musisi.', jawaban: 'によって', pilihan: ['によって', 'について', 'にとって', 'につれて'] },
  { id: 'b42-4-5', grup: 'bunpou', no: 4, soal: 'あの 歌は だれ___ 作られたんですか。', arti: 'Lagu itu dibuat oleh siapa?', jawaban: 'によって', pilihan: ['によって', 'について', 'にとって', 'につれて'] },

  // ── Catatan 1 · ために vs ように ───────────────────────────────────
  { id: 'b42-c1-1', grup: 'catatan', no: 1, soal: '自分の 店が ___ ように、貯金しています。', arti: 'Saya menabung uang agar dapat memiliki toko sendiri.', jawaban: '持てる', pilihan: ['持てる', '持つ', '持ちます', '持った'] },
  { id: 'b42-c1-2', grup: 'catatan', no: 1, soal: '自分の 店を ___ ために、貯金しています。', arti: 'Saya menabung uang untuk memiliki toko sendiri.', jawaban: '持つ', pilihan: ['持つ', '持てる', '持ちます', '持った'] },
  { id: 'b42-c1-3', grup: 'catatan', no: 1, soal: '日本語が 上手に ___ ように、毎日 勉強しています。', arti: 'Saya belajar setiap hari agar pandai berbahasa Jepang.', jawaban: 'なる', pilihan: ['なる', 'なります', 'なって', 'なった'] },
  { id: 'b42-c1-4', grup: 'catatan', no: 1, soal: '弁護士に ___ ために、法律を 勉強しています。', arti: 'Saya belajar hukum untuk menjadi pengacara.', jawaban: 'なる', pilihan: ['なる', 'なります', 'なって', 'なった'] },
  { id: 'b42-c1-5', grup: 'catatan', no: 1, soal: '早く ___ ように、毎日 練習しています。', arti: 'Saya berlatih setiap hari agar cepat bisa berenang.', jawaban: '泳げる', pilihan: ['泳げる', '泳ぐ', '泳いで', '泳いだ'] },

  // ── Catatan 2 · なります — dua penggunaan（keinginan / non） ────────
  { id: 'b42-c2-1', grup: 'catatan', no: 2, soal: '音楽家に ___ ために、毎日 練習しています。', arti: 'Saya berlatih setiap hari untuk menjadi musisi.', jawaban: 'なる', pilihan: ['なる', 'なります', 'なって', 'なった'] },
  { id: 'b42-c2-2', grup: 'catatan', no: 2, soal: '日本語が 上手___ なるように、毎日 勉強しています。', arti: 'Saya belajar setiap hari agar kemampuan bahasa Jepang saya menjadi bagus.', jawaban: 'に', pilihan: ['に', 'く', 'な', 'で'] },
  { id: 'b42-c2-3', grup: 'catatan', no: 2, soal: '毎日 練習したので、日本語が 上手に ___。', arti: 'Karena berlatih setiap hari, bahasa Jepang saya menjadi bagus.', jawaban: 'なりました', pilihan: ['なりました', 'しました', 'します', 'あります'] },
  { id: 'b42-c2-4', grup: 'catatan', no: 2, soal: '息子は 医者に ___ ために、一生懸命 勉強しています。', arti: 'Anak laki-laki saya belajar dengan sungguh-sungguh untuk menjadi dokter.', jawaban: 'なる', pilihan: ['なる', 'なって', 'なります', 'なった'] },
  { id: 'b42-c2-5', grup: 'catatan', no: 2, soal: '日本語が ___ ように、毎日 練習しています。', arti: 'Saya berlatih setiap hari agar dapat berbicara bahasa Jepang.', jawaban: '話せる', pilihan: ['話せる', '話す', '話して', '話します'] },
]
