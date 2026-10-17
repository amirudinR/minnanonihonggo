import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 41 — tepat 5 soal per pola (4 pola 文型 + 4 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · KB₁ (orang) に KB₂ を いただきました ───────────────────
  { id: 'b41-1-1', grup: 'bunpou', no: 1, soal: 'わたしは 社長___ お土産を いただきました。', arti: 'Saya menerima oleh-oleh dari direktur.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'へ'] },
  { id: 'b41-1-2', grup: 'bunpou', no: 1, soal: 'わたしは 社長に お土産を ___。', arti: 'Saya menerima oleh-oleh dari direktur.', jawaban: 'いただきました', pilihan: ['いただきました', 'もらいました', 'くださいました', 'やりました'] },
  { id: 'b41-1-3', grup: 'bunpou', no: 1, soal: 'わたしは 部長に 珍しい お土産を ___。', arti: 'Saya menerima oleh-oleh yang langka dari kepala bagian.', jawaban: 'いただきました', pilihan: ['いただきました', 'あげました', 'やりました', 'くださいました'] },
  { id: 'b41-1-4', grup: 'bunpou', no: 1, soal: 'わたしは ワット先生に 本を ___。', arti: 'Saya menerima buku dari Pak Watt.', jawaban: 'いただきました', pilihan: ['いただきました', 'くださいました', 'やりました', 'もらいました'] },
  { id: 'b41-1-5', grup: 'bunpou', no: 1, soal: 'A：いい 時計ですね。B：ええ、課長に ___。', arti: 'A：Jamnya bagus, ya. B：Ya, (saya) menerimanya dari kepala bagian.', jawaban: 'いただきました', pilihan: ['いただきました', 'くださいました', 'やりました', 'あげました'] },

  // ── 文型 2 · KB を Kata Kerja Bentuk て いただきました ─────────────
  { id: 'b41-2-1', grup: 'bunpou', no: 2, soal: 'わたしは 課長に 手紙の まちがいを 直して ___。', arti: 'Saya dibantu oleh kepala bagian untuk dikoreksikan kesalahan surat.', jawaban: 'いただきました', pilihan: ['いただきました', 'くださいました', 'やりました', 'もらいました'] },
  { id: 'b41-2-2', grup: 'bunpou', no: 2, soal: 'わたしは 部長に 駅まで 送って ___。', arti: 'Saya diantar oleh kepala bagian sampai stasiun.', jawaban: 'いただきました', pilihan: ['いただきました', 'くださいました', 'やりました', 'もらいました'] },
  { id: 'b41-2-3', grup: 'bunpou', no: 2, soal: 'わたしは 課長に 手紙を ___ いただきました。', arti: 'Saya dibantu kepala bagian mengoreksi surat.', jawaban: '直して', pilihan: ['直して', '直す', '直した', '直し'] },
  { id: 'b41-2-4', grup: 'bunpou', no: 2, soal: '娘は 部長に 駅まで ___ いただきました。', arti: 'Anak perempuan saya diantar oleh kepala bagian sampai stasiun.', jawaban: '送って', pilihan: ['送って', '送る', '送った', '送り'] },
  { id: 'b41-2-5', grup: 'bunpou', no: 2, soal: 'わたしは 部長の 奥さんに お茶の 作り方を 教えて ___。', arti: 'Saya diajari cara membuat teh oleh istri kepala bagian.', jawaban: 'いただきました', pilihan: ['いただきました', 'くださいました', 'やりました', 'あげました'] },

  // ── 文型 3 · Kata Kerja Bentuk て くださいました ────────────────────
  { id: 'b41-3-1', grup: 'bunpou', no: 3, soal: '部長の 奥さんが わたし___ お茶の 作り方を 教えて くださいました。', arti: 'Istri kepala bagian mengajarkan saya cara membuat teh.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'へ'] },
  { id: 'b41-3-2', grup: 'bunpou', no: 3, soal: '部長が わたし___ 駅まで 送って くださいました。', arti: 'Kepala bagian mengantarkan saya sampai stasiun.', jawaban: 'を', pilihan: ['を', 'に', 'が', 'で'] },
  { id: 'b41-3-3', grup: 'bunpou', no: 3, soal: '部長が 娘___ お土産を くださいました。', arti: 'Kepala bagian memberikan anak perempuan saya oleh-oleh.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'で'] },
  { id: 'b41-3-4', grup: 'bunpou', no: 3, soal: '社長が わたしに お土産を ___。', arti: 'Direktur memberikan saya oleh-oleh.', jawaban: 'くださいました', pilihan: ['くださいました', 'いただきました', 'やりました', 'もらいました'] },
  { id: 'b41-3-5', grup: 'bunpou', no: 3, soal: '部長が わたしの レポートを 直して ___。', arti: 'Kepala bagian mengoreksikan laporan saya.', jawaban: 'くださいました', pilihan: ['くださいました', 'いただきました', 'やりました', 'あげました'] },

  // ── 文型 4 · KB₁ に KB₂ を やりました ──────────────────────────────
  { id: 'b41-4-1', grup: 'bunpou', no: 4, soal: 'わたしは 息子___ お菓子を やりました。', arti: 'Saya memberikan anak laki-laki saya kue.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'へ'] },
  { id: 'b41-4-2', grup: 'bunpou', no: 4, soal: 'わたしは 犬に えさを ___。', arti: 'Saya memberi umpan pada anjing.', jawaban: 'やりました', pilihan: ['やりました', 'くださいました', 'いただきました', 'もらいました'] },
  { id: 'b41-4-3', grup: 'bunpou', no: 4, soal: 'わたしは 息子に 紙飛行機を 作って ___。', arti: 'Saya membuat pesawat dari kertas untuk anak laki-laki saya.', jawaban: 'やりました', pilihan: ['やりました', 'くださいました', 'いただきました', 'もらいました'] },
  { id: 'b41-4-4', grup: 'bunpou', no: 4, soal: 'わたしは 犬を 散歩に 連れて 行って ___。', arti: 'Saya membawa anjing jalan-jalan.', jawaban: 'やりました', pilihan: ['やりました', 'くださいました', 'もらいました', 'いただきました'] },
  { id: 'b41-4-5', grup: 'bunpou', no: 4, soal: 'わたしは 娘の 宿題を 見て ___。', arti: 'Saya membantu anak perempuan saya mengerjakan PR-nya.', jawaban: 'やりました', pilihan: ['やりました', 'くださいました', 'いただきました', 'もらいました'] },

  // ── Catatan 1 · Ungkapan pemberian & penerimaan (overview) ─────────
  { id: 'b41-c1-1', grup: 'catatan', no: 1, soal: 'A：いい お土産ですね。B：ええ、社長___ いただきました。', arti: 'A：Oleh-olehnya bagus, ya. B：Ya, (saya) menerimanya dari direktur.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'へ'] },
  { id: 'b41-c1-2', grup: 'catatan', no: 1, soal: 'A：いい お土産ですね。B：ええ、社長が ___。', arti: 'A：Oleh-olehnya bagus, ya. B：Ya, direktur yang memberikannya (kepada saya).', jawaban: 'くださいました', pilihan: ['くださいました', 'いただきました', 'やりました', 'もらいました'] },
  { id: 'b41-c1-3', grup: 'catatan', no: 1, soal: 'わたしは 息子に お菓子を ___。', arti: 'Saya memberikan anak laki-laki saya kue.', jawaban: 'やりました', pilihan: ['やりました', 'いただきました', 'くださいました', 'もらいました'] },
  { id: 'b41-c1-4', grup: 'catatan', no: 1, soal: 'わたしは 花___ 水を やりました。', arti: 'Saya memberi air pada bunga.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'で'] },
  { id: 'b41-c1-5', grup: 'catatan', no: 1, soal: '先生が わたしに 本を ___。', arti: 'Bapak/Ibu guru memberikan saya buku.', jawaban: 'くださいました', pilihan: ['くださいました', 'いただきました', 'やりました', 'あげました'] },

  // ── Catatan 2 · Pemberian & penerimaan perbuatan ───────────────────
  { id: 'b41-c2-1', grup: 'catatan', no: 2, soal: 'わたしは 課長に レポートを 直して ___。', arti: 'Saya dikoreksikan laporan oleh kepala bagian.', jawaban: 'いただきました', pilihan: ['いただきました', 'くださいました', 'やりました', 'もらいました'] },
  { id: 'b41-c2-2', grup: 'catatan', no: 2, soal: '家族の 皆さんが とても 親切に して ___。', arti: 'Semua anggota keluarga itu memberi perlakuan yang sangat baik kepada saya.', jawaban: 'くださいました', pilihan: ['くださいました', 'いただきました', 'やりました', 'あげました'] },
  { id: 'b41-c2-3', grup: 'catatan', no: 2, soal: '部長が わたしを 駅まで 送って ___。', arti: 'Kepala bagian mengantarkan saya sampai stasiun.', jawaban: 'くださいました', pilihan: ['くださいました', 'いただきました', 'やりました', 'もらいました'] },
  { id: 'b41-c2-4', grup: 'catatan', no: 2, soal: 'わたしは 妹に お菓子を 買って ___。', arti: 'Saya membelikan kue untuk adik perempuan saya.', jawaban: 'やりました', pilihan: ['やりました', 'くださいました', 'いただきました', 'もらいました'] },
  { id: 'b41-c2-5', grup: 'catatan', no: 2, soal: 'わたしは 孫___ お菓子を 買って やりました。', arti: 'Saya membelikan kue untuk cucu saya.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'で'] },

  // ── Catatan 3 · Kata Kerja Bentuk て くださいませんか ───────────────
  { id: 'b41-c3-1', grup: 'catatan', no: 3, soal: 'コピー機の 使い方を 教えて ___。', arti: 'Tolong ajarkan (saya) cara pemakaian mesin fotocopy.', jawaban: 'くださいませんか', pilihan: ['くださいませんか', 'くださいません', 'くださいますか', 'くださって'] },
  { id: 'b41-c3-2', grup: 'catatan', no: 3, soal: 'A：新しい コピー機の 使い方が よく わからないんですが、ちょっと 教えて ___。B：いいですよ。', arti: 'A：(Saya) kurang tahu cara memakai mesin fotocopy baru, tolong ajarkan saya sebentar. B：Boleh.', jawaban: 'くださいませんか', pilihan: ['くださいませんか', 'くださいません', 'くださいますか', 'くださって'] },
  { id: 'b41-c3-3', grup: 'catatan', no: 3, soal: 'この 漢字の 読み方を 教えて ___。', arti: 'Tolong ajarkan cara membaca kanji ini.', jawaban: 'くださいませんか', pilihan: ['くださいませんか', 'くださいません', 'くださいますか', 'くださって'] },
  { id: 'b41-c3-4', grup: 'catatan', no: 3, soal: 'すみませんが、駅への 行き方を 教えて ___。', arti: 'Maaf, tolong ajarkan jalan ke stasiun.', jawaban: 'くださいませんか', pilihan: ['くださいませんか', 'くださいません', 'くださいますか', 'くださって'] },
  { id: 'b41-c3-5', grup: 'catatan', no: 3, soal: 'A：この 荷物を 運んで ___。B：いいですよ。', arti: 'A：Tolong bawakan barang ini. B：Boleh.', jawaban: 'くださいませんか', pilihan: ['くださいませんか', 'くださいません', 'くださいますか', 'くださって'] },

  // ── Catatan 4 · Kata Benda に Kata Kerja（sebagai tanda） ───────────
  { id: 'b41-c4-1', grup: 'catatan', no: 4, soal: '田中さんが 結婚祝い___ この お皿を くださいました。', arti: 'Sdr. Tanaka memberikan piring ini sebagai tanda ucapan selamat atas pernikahan saya.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'で'] },
  { id: 'b41-c4-2', grup: 'catatan', no: 4, soal: '北海道旅行の お土産___ 人形を 買いました。', arti: '(Saya) membeli boneka sebagai oleh-oleh perjalanan ke Hokkaido.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'へ'] },
  { id: 'b41-c4-3', grup: 'catatan', no: 4, soal: 'A：いい お皿ですね。B：ええ、結婚の お祝い___ 田中さんが くださいました。', arti: 'A：Piringnya bagus, ya. B：Ya, sebagai hadiah pernikahan, Sdr. Tanaka yang memberikannya.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'で'] },
  { id: 'b41-c4-4', grup: 'catatan', no: 4, soal: 'お土産に ___ 買いました。', arti: '(Saya) membeli kue sebagai oleh-oleh.', jawaban: 'お菓子を', pilihan: ['お菓子を', 'お菓子が', 'お菓子に', 'お菓子で'] },
  { id: 'b41-c4-5', grup: 'catatan', no: 4, soal: 'きのう お見舞いに 花を ___。', arti: 'Kemarin (saya) membawa bunga sebagai (tanda) menjenguk.', jawaban: '持って 行きました', pilihan: ['持って 行きました', '持って 行きます', '持って 行きません', '持ちます'] },
]
