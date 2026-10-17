import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 23 — tepat 5 soal per pola (4 pola 文型 + 1 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · ～とき ────────────────────────────────────────────────
  { id: 'b23-1-1', grup: 'bunpou', no: 1, soal: '図書館で 本を ___ とき、カードが 要ります。', arti: 'Ketika meminjam buku di perpustakaan, diperlukan kartu.', jawaban: '借りる', pilihan: ['借りる', '借りた', '借ります', '借りて'] },
  { id: 'b23-1-2', grup: 'bunpou', no: 1, soal: '使い方が わからない ___、わたしに 聞いて ください。', arti: 'Jika tidak tahu cara pemakaiannya, silakan tanya kepada saya.', jawaban: 'とき', pilihan: ['とき', 'から', 'まで', 'ので'] },
  { id: 'b23-1-3', grup: 'bunpou', no: 1, soal: '体の 調子が ___ とき、「元気茶」を 飲みます。', arti: 'Ketika badan tidak enak, minum "Genki-cha".', jawaban: '悪い', pilihan: ['悪い', '悪く', '悪くて', '悪いの'] },
  { id: 'b23-1-4', grup: 'bunpou', no: 1, soal: '暇___ とき、うちへ 遊びに 来ませんか。', arti: 'Pada waktu luang, bagaimana kalau datang bermain ke rumah saya?', jawaban: 'な', pilihan: ['な', 'の', 'い', 'だ'] },
  { id: 'b23-1-5', grup: 'bunpou', no: 1, soal: '妻が 病気___ とき、会社を 休みます。', arti: 'Jika istri sakit, saya tidak masuk kerja.', jawaban: 'の', pilihan: ['の', 'な', 'い', 'だ'] },

  // ── 文型 2 · KK kamus／KK bentuk た とき ───────────────────────────
  { id: 'b23-2-1', grup: 'bunpou', no: 2, soal: 'パリへ 行く とき、かばんを ___。', arti: 'Waktu mau pergi ke Paris, saya membeli tas.', jawaban: '買いました', pilihan: ['買いました', '買います', '買いません', '買いましょう'] },
  { id: 'b23-2-2', grup: 'bunpou', no: 2, soal: 'パリへ ___ とき、かばんを 買いました。', arti: 'Waktu (sudah) pergi ke Paris, saya membeli tas.', jawaban: '行った', pilihan: ['行った', '行く', '行きます', '行って'] },
  { id: 'b23-2-3', grup: 'bunpou', no: 2, soal: '日本へ ___ とき、たくさん 写真を 撮りました。', arti: 'Waktu pergi ke Jepang, saya banyak mengambil foto.', jawaban: '行った', pilihan: ['行った', '行く', '行きます', '行って'] },
  { id: 'b23-2-4', grup: 'bunpou', no: 2, soal: '日本へ 行く とき、空港で お土産を ___。', arti: 'Waktu mau pergi ke Jepang, saya membeli oleh-oleh di bandara.', jawaban: '買います', pilihan: ['買います', '買いました', '買いません', '買って'] },
  { id: 'b23-2-5', grup: 'bunpou', no: 2, soal: '国会議事堂へ ___ とき、カメラを 持って 行きました。', arti: 'Waktu mau pergi ke gedung parlemen, saya membawa kamera.', jawaban: '行く', pilihan: ['行く', '行った', '行きます', '行って'] },

  // ── 文型 3 · KK kamus と、～ ───────────────────────────────────────
  { id: 'b23-3-1', grup: 'bunpou', no: 3, soal: 'この ボタンを ___ と、お釣りが 出ます。', arti: 'Kalau tekan tombol ini, uang kembaliannya keluar.', jawaban: '押す', pilihan: ['押す', '押した', '押します', '押して'] },
  { id: 'b23-3-2', grup: 'bunpou', no: 3, soal: 'これを ___ と、音が 大きく なります。', arti: 'Kalau memutar ini, suaranya akan membesar.', jawaban: '回す', pilihan: ['回す', '回した', '回します', '回して'] },
  { id: 'b23-3-3', grup: 'bunpou', no: 3, soal: '右へ ___ と、郵便局が あります。', arti: 'Kalau belok ke kanan, ada kantor pos.', jawaban: '曲がる', pilihan: ['曲がる', '曲がった', '曲がります', '曲がって'] },
  { id: 'b23-3-4', grup: 'bunpou', no: 3, soal: 'この 道を まっすぐ ___ と、左に 市役所が あります。', arti: 'Kalau pergi lurus jalan ini, gedung wali kota ada di sebelah kiri.', jawaban: '行く', pilihan: ['行く', '行った', '行きます', '行って'] },
  { id: 'b23-3-5', grup: 'bunpou', no: 3, soal: 'A：音が 小さいですね。B：この つまみを 回すと、___。', arti: 'A：Suaranya kecil ya. B：Kalau memutar tombol ini, suaranya membesar.', jawaban: '大きく なります', pilihan: ['大きく なります', '大きく しました', '小さく なります', '大きいです'] },

  // ── 文型 4 · Kata Benda が Kata Sifat ────────────────────────────
  { id: 'b23-4-1', grup: 'bunpou', no: 4, soal: '音___ 小さいです。', arti: 'Suaranya kecil.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b23-4-2', grup: 'bunpou', no: 4, soal: 'A：どう しましたか。B：頭___ 痛いです。', arti: 'A：Kenapa? B：Kepala saya sakit.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b23-4-3', grup: 'bunpou', no: 4, soal: 'この 部屋は 窓___ 大きいです。', arti: 'Kamar ini jendelanya besar.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b23-4-4', grup: 'bunpou', no: 4, soal: '見て ください。空___ きれいですよ。', arti: 'Lihatlah. Langitnya indah lho.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b23-4-5', grup: 'bunpou', no: 4, soal: 'A：この 料理、どうですか。B：味___ とても いいです。', arti: 'A：Masakan ini bagaimana? B：Rasanya sangat enak.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },

  // ── Catatan 1 · Kata Benda を + KK gerakan berpindah ──────────────
  { id: 'b23-c1-1', grup: 'catatan', no: 1, soal: '公園___ 散歩します。', arti: 'Berjalan-jalan di taman.', jawaban: 'を', pilihan: ['を', 'で', 'に', 'へ'] },
  { id: 'b23-c1-2', grup: 'catatan', no: 1, soal: '道___ 渡ります。', arti: 'Menyeberangi jalan.', jawaban: 'を', pilihan: ['を', 'で', 'に', 'から'] },
  { id: 'b23-c1-3', grup: 'catatan', no: 1, soal: '交差点___ 右へ 曲がります。', arti: 'Di perempatan belok ke kanan.', jawaban: 'を', pilihan: ['を', 'で', 'に', 'へ'] },
  { id: 'b23-c1-4', grup: 'catatan', no: 1, soal: '公園___ 歩きます。', arti: 'Berjalan di taman.', jawaban: 'を', pilihan: ['を', 'で', 'に', 'へ'] },
  { id: 'b23-c1-5', grup: 'catatan', no: 1, soal: '鳥が 空___ 飛んで います。', arti: 'Burung terbang di langit.', jawaban: 'を', pilihan: ['を', 'で', 'に', 'が'] },
]
