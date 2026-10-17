import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 10 — tepat 5 soal per pola (5 pola 文型 + 0 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Benda が あります / います ────────────────────────
  { id: 'b10-1-1', grup: 'bunpou', no: 1, soal: 'コンピューター___ あります。', arti: 'Ada komputer.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b10-1-2', grup: 'bunpou', no: 1, soal: '犬___ います。', arti: 'Ada anjing.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'へ'] },
  { id: 'b10-1-3', grup: 'bunpou', no: 1, soal: '庭に 犬が ___。', arti: 'Di halaman ada anjing.', jawaban: 'います', pilihan: ['います', 'あります', 'です', 'いますか'] },
  { id: 'b10-1-4', grup: 'bunpou', no: 1, soal: '机の 上に 写真___ あります。', arti: 'Di atas meja ada foto.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'と'] },
  { id: 'b10-1-5', grup: 'bunpou', no: 1, soal: 'あそこに 佐藤さん___ います。', arti: 'Sdr. Sato ada di sana.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },

  // ── 文型 2 · Kata Benda1(tempat) に Kata Benda2 が あります / います ─
  { id: 'b10-2-1', grup: 'bunpou', no: 2, soal: 'わたしの 部屋___ 机が あります。', arti: 'Di kamar saya ada meja.', jawaban: 'に', pilihan: ['に', 'で', 'を', 'へ'] },
  { id: 'b10-2-2', grup: 'bunpou', no: 2, soal: '事務所___ ミラーさんが います。', arti: 'Sdr. Miller ada di kantor.', jawaban: 'に', pilihan: ['に', 'で', 'が', 'を'] },
  { id: 'b10-2-3', grup: 'bunpou', no: 2, soal: 'あそこ___ 佐藤さんが います。', arti: 'Sdr. Sato ada di sana.', jawaban: 'に', pilihan: ['に', 'で', 'を', 'と'] },
  { id: 'b10-2-4', grup: 'bunpou', no: 2, soal: '庭___ 木が あります。', arti: 'Di halaman ada pohon.', jawaban: 'に', pilihan: ['に', 'で', 'が', 'へ'] },
  { id: 'b10-2-5', grup: 'bunpou', no: 2, soal: '冷蔵庫の 中___ ビールが あります。', arti: 'Di dalam kulkas ada bir.', jawaban: 'に', pilihan: ['に', 'で', 'を', 'と'] },

  // ── 文型 3 · Kata Benda1 は Kata Benda2(tempat) に あります / います ─
  { id: 'b10-3-1', grup: 'bunpou', no: 3, soal: '東京ディズニーランドは 千葉県___ あります。', arti: 'Tokyo Disneyland ada di Prefektur Chiba.', jawaban: 'に', pilihan: ['に', 'で', 'を', 'へ'] },
  { id: 'b10-3-2', grup: 'bunpou', no: 3, soal: 'ミラーさんは 事務所___ います。', arti: 'Sdr. Miller ada di kantor.', jawaban: 'に', pilihan: ['に', 'で', 'が', 'を'] },
  { id: 'b10-3-3', grup: 'bunpou', no: 3, soal: 'A：ミラーさんは どこ___ いますか。B：会議室に います。', arti: 'A：Sdr. Miller ada di mana? B：Ada di ruang rapat.', jawaban: 'に', pilihan: ['に', 'で', 'を', 'が'] },
  { id: 'b10-3-4', grup: 'bunpou', no: 3, soal: 'A：郵便局は どこ___ ありますか。B：駅の 近くです。', arti: 'A：Kantor pos ada di mana? B：Di dekat stasiun.', jawaban: 'に', pilihan: ['に', 'で', 'を', 'へ'] },
  { id: 'b10-3-5', grup: 'bunpou', no: 3, soal: 'A：ミラーさんは どこに いますか。B：会議室に ___。', arti: 'A：Sdr. Miller ada di mana? B：Ada di ruang rapat.', jawaban: 'います', pilihan: ['います', 'あります', 'です', 'いました'] },

  // ── 文型 4 · Kata Benda1(benda/orang/tempat) の Kata Benda2(posisi) ──
  { id: 'b10-4-1', grup: 'bunpou', no: 4, soal: '机___ 上に 写真が あります。', arti: 'Di atas meja ada foto.', jawaban: 'の', pilihan: ['の', 'に', 'が', 'で'] },
  { id: 'b10-4-2', grup: 'bunpou', no: 4, soal: '郵便局は 銀行___ 隣に あります。', arti: 'Kantor pos ada di sebelah bank.', jawaban: 'の', pilihan: ['の', 'に', 'を', 'で'] },
  { id: 'b10-4-3', grup: 'bunpou', no: 4, soal: '箱___ 中に 手紙が あります。', arti: 'Di dalam kotak ada surat.', jawaban: 'の', pilihan: ['の', 'に', 'が', 'は'] },
  { id: 'b10-4-4', grup: 'bunpou', no: 4, soal: 'A：郵便局は どこに ありますか。B：銀行___ 前に あります。', arti: 'A：Kantor pos ada di mana? B：Ada di depan bank.', jawaban: 'の', pilihan: ['の', 'に', 'が', 'へ'] },
  { id: 'b10-4-5', grup: 'bunpou', no: 4, soal: 'テーブル___ 下に 猫が います。', arti: 'Di bawah meja ada kucing.', jawaban: 'の', pilihan: ['の', 'に', 'が', 'で'] },

  // ── 文型 5 · Kata Benda1 や Kata Benda2 ────────────────────────────
  { id: 'b10-5-1', grup: 'bunpou', no: 5, soal: '箱の 中に 手紙___ 写真が あります。', arti: 'Di dalam kotak ada surat, foto, dan lain-lain.', jawaban: 'や', pilihan: ['や', 'と', 'か', 'も'] },
  { id: 'b10-5-2', grup: 'bunpou', no: 5, soal: '箱の 中に 手紙や 写真___ が あります。', arti: 'Di dalam kotak ada hal seperti surat, foto, dan lain-lain.', jawaban: 'など', pilihan: ['など', 'や', 'と', 'か'] },
  { id: 'b10-5-3', grup: 'bunpou', no: 5, soal: '冷蔵庫の 中に ビールや ジュース___ あります。', arti: 'Di dalam kulkas ada bir, jus, dan lain-lain.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b10-5-4', grup: 'bunpou', no: 5, soal: '庭に 木や 花___ あります。', arti: 'Di halaman ada pohon, bunga, dan lain-lain.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'へ'] },
  { id: 'b10-5-5', grup: 'bunpou', no: 5, soal: 'A：箱の 中に 何が ありますか。B：手紙___ 写真などが あります。', arti: 'A：Di dalam kotak ada apa? B：Ada surat, foto, dan lain-lain.', jawaban: 'や', pilihan: ['や', 'と', 'か', 'も'] },
]
