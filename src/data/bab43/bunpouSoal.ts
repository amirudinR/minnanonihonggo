import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 43 — tepat 5 soal per pola (4 pola 文型 + 1 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Kerja (Bentuk ます) そうです ──────────────────────
  { id: 'b43-1-1', grup: 'bunpou', no: 1, soal: '今にも 雨が ___。', arti: 'Mau hujan sekarang juga.', jawaban: '降りそうです', pilihan: ['降りそうです', '降ります', '降りました', '降っています'] },
  { id: 'b43-1-2', grup: 'bunpou', no: 1, soal: 'もうすぐ 桜が ___。', arti: 'Sebentar lagi sakura mau mekar.', jawaban: '咲きそうです', pilihan: ['咲きそうです', '咲きます', '咲きました', '咲いています'] },
  { id: 'b43-1-3', grup: 'bunpou', no: 1, soal: 'もうすぐ 寒く ___。', arti: 'Rupanya mau menjadi dingin.', jawaban: 'なりそうです', pilihan: ['なりそうです', 'なります', 'なりました', 'なっています'] },
  { id: 'b43-1-4', grup: 'bunpou', no: 1, soal: '上着の ボタンが ___よ。', arti: 'Kancing baju hampir terlepas.', jawaban: 'とれそうです', pilihan: ['とれそうです', 'とれます', 'とれました', 'とれています'] },
  { id: 'b43-1-5', grup: 'bunpou', no: 1, soal: '今にも ひもが ___。', arti: 'Talinya hampir putus.', jawaban: '切れそうです', pilihan: ['切れそうです', '切れます', '切れました', '切れています'] },

  // ── 文型 2 · Kata Sifat い／な そうです（penampakan） ──────────────
  { id: 'b43-2-1', grup: 'bunpou', no: 2, soal: '食べて いませんが、この 料理は ___。', arti: 'Saya belum makan, tetapi rupanya masakan ini pedas.', jawaban: '辛そうです', pilihan: ['辛そうです', '辛いです', '辛くないです', '辛かったです'] },
  { id: 'b43-2-2', grup: 'bunpou', no: 2, soal: '写真で 見ると、彼女は 頭が ___。', arti: 'Dilihat dari fotonya, rupanya dia pintar.', jawaban: 'よさそうです', pilihan: ['よさそうです', 'いいです', 'よくないです', 'よかったです'] },
  { id: 'b43-2-3', grup: 'bunpou', no: 2, soal: 'この 机は 木で できて いて、___。', arti: 'Meja ini terbuat dari kayu, rupanya kuat.', jawaban: '丈夫そうです', pilihan: ['丈夫そうです', '丈夫です', '丈夫でした', '丈夫じゃ ないです'] },
  { id: 'b43-2-4', grup: 'bunpou', no: 2, soal: 'A：ドイツの りんごの ケーキです。どうぞ。B：わあ、___。', arti: 'A：Kue apel Jerman. Silakan. B：Wah, kelihatan enak.', jawaban: 'おいしそうです', pilihan: ['おいしそうです', 'おいしいです', 'おいしかったです', 'おいしくないです'] },
  { id: 'b43-2-5', grup: 'bunpou', no: 2, soal: 'あの 人は いつも 元気に 働いて います。とても ___です。', arti: 'Orang itu selalu bekerja dengan bersemangat. Dia kelihatan sangat sehat.', jawaban: '元気そう', pilihan: ['元気そう', '元気', '元気な', '元気の'] },

  // ── 文型 3 · Kata Kerja Bentuk て 来ます ───────────────────────────
  { id: 'b43-3-1', grup: 'bunpou', no: 3, soal: 'ちょっと たばこを ___ 来ます。', arti: 'Pergi membeli rokok sebentar (lalu kembali).', jawaban: '買って', pilihan: ['買って', '買う', '買った', '買います'] },
  { id: 'b43-3-2', grup: 'bunpou', no: 3, soal: 'スーパーで 牛乳を 買って ___。', arti: 'Pergi membeli susu di pasar swalayan (lalu kembali).', jawaban: '来ます', pilihan: ['来ます', '行きます', '来ました', '行きました'] },
  { id: 'b43-3-3', grup: 'bunpou', no: 3, soal: '台所___ コーヒーカップを 取って 来ます。', arti: 'Pergi mengambil gelas kopi dari dapur.', jawaban: 'から', pilihan: ['から', 'まで', 'へ', 'で'] },
  { id: 'b43-3-4', grup: 'bunpou', no: 3, soal: '郵便局___ 行って 来ます。', arti: 'Pergi ke kantor pos (lalu kembali).', jawaban: 'へ', pilihan: ['へ', 'を', 'が', 'で'] },
  { id: 'b43-3-5', grup: 'bunpou', no: 3, soal: 'ちょっと ___ 来ます。', arti: 'Pergi keluar sebentar (lalu kembali).', jawaban: '出かけて', pilihan: ['出かけて', '出かける', '出かけた', '出かけます'] },

  // ── 文型 4 · Kata Kerja Bentuk て くれませんか ─────────────────────
  { id: 'b43-4-1', grup: 'bunpou', no: 4, soal: 'A：コンビニへ 行って 来ます。B：じゃ、お弁当を 買って 来て ___。', arti: 'A：Saya pergi ke toko 24 jam sebentar. B：Kalau begitu, tolong belikan saya makan siang.', jawaban: 'くれませんか', pilihan: ['くれませんか', 'くれません', 'くれます', 'くれました'] },
  { id: 'b43-4-2', grup: 'bunpou', no: 4, soal: 'A：ちょっと 出かけて 来ます。B：じゃ、切手を 買って 来て ___。', arti: 'A：Saya keluar sebentar. B：Kalau begitu, tolong belikan perangko.', jawaban: 'くれませんか', pilihan: ['くれませんか', 'くれません', 'くれます', 'くれました'] },
  { id: 'b43-4-3', grup: 'bunpou', no: 4, soal: '（同僚に）この 荷物を 運んで ___。', arti: '(Kepada rekan kerja) Tolong bawakan barang ini.', jawaban: 'くれませんか', pilihan: ['くれませんか', 'くれません', 'くれます', 'くれました'] },
  { id: 'b43-4-4', grup: 'bunpou', no: 4, soal: 'ちょっと 手伝って ___。', arti: 'Tolong bantu saya sebentar.', jawaban: 'くれませんか', pilihan: ['くれませんか', 'くれません', 'くれます', 'くれました'] },
  { id: 'b43-4-5', grup: 'bunpou', no: 4, soal: 'A：資料が 足りませんね。B：すみませんが、ちょっと コピーして 来て ___。', arti: 'A：Materinya kurang, ya. B：Maaf, tolong fotokopi sebentar.', jawaban: 'くれませんか', pilihan: ['くれませんか', 'くれません', 'くれます', 'くれました'] },

  // ── Catatan 1 · Kata Sifat そうです（perasaan orang） — Perhatian ───
  { id: 'b43-c1-1', grup: 'catatan', no: 1, soal: 'A：___ですね。B：……ええ、実は きのう 結婚を 申し込んだんです。', arti: 'A：Kelihatan senang, ya. B：……Ya, soalnya kemarin saya melamar.', jawaban: 'うれしそう', pilihan: ['うれしそう', 'うれしい', 'うれしく ない', 'うれしかった'] },
  { id: 'b43-c1-2', grup: 'catatan', no: 1, soal: 'みんな とても たのし___です。', arti: 'Semuanya kelihatan sangat senang.', jawaban: 'そう', pilihan: ['そう', 'い', 'く', 'な'] },
  { id: 'b43-c1-3', grup: 'catatan', no: 1, soal: '田中さんは とても ___ですね。', arti: 'Sdr. Tanaka kelihatan sangat sedih.', jawaban: 'かなしそう', pilihan: ['かなしそう', 'かなしい', 'かなしく ない', 'かなしかった'] },
  { id: 'b43-c1-4', grup: 'catatan', no: 1, soal: '一人で 住んで いて、___ですね。', arti: 'Tinggal sendiri, kelihatan kesepian, ya.', jawaban: 'さびしそう', pilihan: ['さびしそう', 'さびしい', 'さびしく ない', 'さびしかった'] },
  { id: 'b43-c1-5', grup: 'catatan', no: 1, soal: 'A：山田さんは ___ですね。B：ええ、きのう 結婚を 申し込んだんです。', arti: 'A：Sdr. Yamada kelihatan senang, ya. B：Ya, kemarin dia melamar.', jawaban: 'うれしそう', pilihan: ['うれしそう', 'うれしい', 'うれしく ない', 'うれしかった'] },
]
