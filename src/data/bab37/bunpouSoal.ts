import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 37 — tepat 5 soal per pola (3 pola 文型 + 7 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · KB₁(orang) は KB₂(orang) に Kata Kerja Pasif ──────────
  { id: 'b37-1-1', grup: 'bunpou', no: 1, soal: 'わたしは 先生に ___。', arti: 'Saya dipuji oleh guru.', jawaban: '褒められました', pilihan: ['褒められました', '褒めました', '褒みました', '褒めます'] },
  { id: 'b37-1-2', grup: 'bunpou', no: 1, soal: 'わたしは 母に 買い物を ___。', arti: 'Saya diminta oleh ibu untuk berbelanja.', jawaban: '頼まれました', pilihan: ['頼まれました', '頼みました', '頼まられました', '頼みます'] },
  { id: 'b37-1-3', grup: 'bunpou', no: 1, soal: 'わたしは 犬に ___。', arti: 'Saya digigit anjing.', jawaban: 'かまれました', pilihan: ['かまれました', 'かみました', 'かまられました', 'かみます'] },
  { id: 'b37-1-4', grup: 'bunpou', no: 1, soal: '先生が わたしを ___。', arti: 'Guru memuji saya.', jawaban: '褒めました', pilihan: ['褒めました', '褒められました', '褒めさせました', '褒めます'] },
  { id: 'b37-1-5', grup: 'bunpou', no: 1, soal: 'けさ 部長に ___。', arti: 'Tadi pagi saya dipanggil oleh kepala bagian.', jawaban: '呼ばれました', pilihan: ['呼ばれました', '呼びました', '呼ばりました', '呼びます'] },

  // ── 文型 2 · KB₁ は KB₂ に KB₃ を Kata Kerja Pasif ────────────────
  { id: 'b37-2-1', grup: 'bunpou', no: 2, soal: 'わたしは 弟に パソコンを ___。', arti: 'PC saya dirusak oleh adik laki-laki saya.', jawaban: '壊されました', pilihan: ['壊されました', '壊しました', '壊さられました', '壊します'] },
  { id: 'b37-2-2', grup: 'bunpou', no: 2, soal: 'わたしは 犬に 手を ___。', arti: 'Tangan saya digigit anjing.', jawaban: 'かまれました', pilihan: ['かまれました', 'かみました', 'かまされました', 'かみます'] },
  { id: 'b37-2-3', grup: 'bunpou', no: 2, soal: 'わたしは 友達に 自転車を 修理して ___。', arti: 'Saya dibantu oleh teman untuk memperbaiki sepeda.', jawaban: 'もらいました', pilihan: ['もらいました', 'くれました', 'あげました', 'されました'] },
  { id: 'b37-2-4', grup: 'bunpou', no: 2, soal: '弟が わたしの パソコンを ___。', arti: 'Adik laki-laki saya merusak PC saya.', jawaban: '壊しました', pilihan: ['壊しました', '壊されました', '壊します', '壊させました'] },
  { id: 'b37-2-5', grup: 'bunpou', no: 2, soal: 'ラッシュの 電車で 足を ___。', arti: 'Kaki saya diinjak di kereta yang penuh sesak.', jawaban: '踏まれました', pilihan: ['踏まれました', '踏みました', '踏まされました', '踏みます'] },

  // ── 文型 3 · Kata Benda (benda/hal) が／は Kata Kerja Pasif ────────
  { id: 'b37-3-1', grup: 'bunpou', no: 3, soal: '大阪で 展覧会が ___。', arti: 'Di Osaka diadakan pameran.', jawaban: '開かれました', pilihan: ['開かれました', '開きました', '開かされました', '開けました'] },
  { id: 'b37-3-2', grup: 'bunpou', no: 3, soal: '電話は 19世紀に ___。', arti: 'Telepon ditemukan pada abad kesembilan belas.', jawaban: '発明されました', pilihan: ['発明されました', '発明しました', '発明させました', '発明します'] },
  { id: 'b37-3-3', grup: 'bunpou', no: 3, soal: 'この 本は 世界中で ___ います。', arti: 'Buku ini dibaca di seluruh dunia.', jawaban: '読まれて', pilihan: ['読まれて', '読みて', '読んで', '読ませて'] },
  { id: 'b37-3-4', grup: 'bunpou', no: 3, soal: '法隆寺は 607年に ___。', arti: 'Kuil Horyuji dibangun pada tahun 607.', jawaban: '建てられました', pilihan: ['建てられました', '建てました', '建たれました', '建てます'] },
  { id: 'b37-3-5', grup: 'bunpou', no: 3, soal: 'また 新しい 星が ___。', arti: 'Bintang baru ditemukan lagi.', jawaban: '発見されました', pilihan: ['発見されました', '発見しました', '発見させました', '発見します'] },

  // ── Catatan 1 · Kata Kerja Pasif (konjugasi) ───────────────────────
  { id: 'b37-c1-1', grup: 'catatan', no: 1, soal: 'かきます（Kelompok I）→ ___', arti: 'Bentuk pasif dari 「かきます」adalah 「かかれます」.', jawaban: 'かかれます', pilihan: ['かかれます', 'かきます', 'かきられます', 'かかります'] },
  { id: 'b37-c1-2', grup: 'catatan', no: 1, soal: 'ほめます（Kelompok II）→ ___', arti: 'Bentuk pasif dari 「ほめます」adalah 「ほめられます」.', jawaban: 'ほめられます', pilihan: ['ほめられます', 'ほみます', 'ほまれます', 'ほめます'] },
  { id: 'b37-c1-3', grup: 'catatan', no: 1, soal: 'きます（Kelompok III）→ ___', arti: 'Bentuk pasif dari 「きます」adalah 「こられます」.', jawaban: 'こられます', pilihan: ['こられます', 'きられます', 'きます', 'こいます'] },
  { id: 'b37-c1-4', grup: 'catatan', no: 1, soal: 'します（Kelompok III）→ ___', arti: 'Bentuk pasif dari 「します」adalah 「されます」.', jawaban: 'されます', pilihan: ['されます', 'しられます', 'します', 'さられます'] },
  { id: 'b37-c1-5', grup: 'catatan', no: 1, soal: 'よびます（Kelompok I）→ ___', arti: 'Bentuk pasif dari 「よびます」adalah 「よばれます」.', jawaban: 'よばれます', pilihan: ['よばれます', 'よびられます', 'よびます', 'よばれました'] },

  // ── Catatan 2 · KB₁ は KB₂ に Kata Kerja Pasif ────────────────────
  { id: 'b37-c2-1', grup: 'catatan', no: 2, soal: 'わたしは 先生に ___。', arti: 'Saya dipuji oleh guru.', jawaban: '褒められました', pilihan: ['褒められました', '褒めました', '褒められましたか', '褒めそうです'] },
  { id: 'b37-c2-2', grup: 'catatan', no: 2, soal: 'わたしは 母に 買い物を ___。', arti: 'Saya diminta oleh ibu untuk berbelanja.', jawaban: '頼まれました', pilihan: ['頼まれました', '頼みました', '頼みましたか', '頼まれます'] },
  { id: 'b37-c2-3', grup: 'catatan', no: 2, soal: 'わたしは ___ かまれました。', arti: 'Saya digigit anjing.', jawaban: '犬に', pilihan: ['犬に', '犬を', '犬が', '犬で'] },
  { id: 'b37-c2-4', grup: 'catatan', no: 2, soal: 'わたしは 課長に ___。', arti: 'Saya ditegur oleh kepala bagian.', jawaban: '注意されました', pilihan: ['注意されました', '注意しました', '注意させました', '注意します'] },
  { id: 'b37-c2-5', grup: 'catatan', no: 2, soal: 'わたしは 友達に ___。', arti: 'Saya diajak oleh teman.', jawaban: '誘われました', pilihan: ['誘われました', '誘いました', '誘わられました', '誘います'] },

  // ── Catatan 3 · KB₁ は KB₂ に KB₃ を Kata Kerja Pasif ─────────────
  { id: 'b37-c3-1', grup: 'catatan', no: 3, soal: 'わたしは 弟に パソコンを ___。', arti: 'PC saya dirusak oleh adik laki-laki saya.', jawaban: '壊されました', pilihan: ['壊されました', '壊しました', '壊されましたか', '壊します'] },
  { id: 'b37-c3-2', grup: 'catatan', no: 3, soal: 'わたしは ___ 手を かまれました。', arti: 'Tangan saya digigit anjing.', jawaban: '犬に', pilihan: ['犬に', '犬を', '犬が', '犬で'] },
  { id: 'b37-c3-3', grup: 'catatan', no: 3, soal: 'わたしは 友達に 自転車を 修理して ___。', arti: 'Saya dibantu oleh teman untuk memperbaiki sepeda.', jawaban: 'もらいました', pilihan: ['もらいました', 'くれました', 'あげました', 'されました'] },
  { id: 'b37-c3-4', grup: 'catatan', no: 3, soal: 'だれかに 傘を ___。', arti: 'Payung (saya) salah diambil oleh seseorang.', jawaban: 'まちがえられました', pilihan: ['まちがえられました', 'まちがえました', 'まちがわれました', 'まちがえます'] },
  { id: 'b37-c3-5', grup: 'catatan', no: 3, soal: 'わたしは 友達に 自転車を ___ もらいました。', arti: 'Saya dibantu oleh teman untuk memperbaiki sepeda.', jawaban: '修理して', pilihan: ['修理して', '修理される', '修理し', '修理しました'] },

  // ── Catatan 4 · Kata Benda (benda/hal) が／は Kata Kerja Pasif ────
  { id: 'b37-c4-1', grup: 'catatan', no: 4, soal: '大阪で 展覧会が ___。', arti: 'Di Osaka diadakan pameran.', jawaban: '開かれました', pilihan: ['開かれました', '開きました', '開かれます', '開けました'] },
  { id: 'b37-c4-2', grup: 'catatan', no: 4, soal: '電話は ___ 発明されました。', arti: 'Telepon ditemukan pada abad kesembilan belas.', jawaban: '19世紀に', pilihan: ['19世紀に', '19世紀で', '19世紀を', '19世紀が'] },
  { id: 'b37-c4-3', grup: 'catatan', no: 4, soal: 'この 本は 世界中で 読まれて ___。', arti: 'Buku ini dibaca di seluruh dunia.', jawaban: 'います', pilihan: ['います', 'あります', 'みます', 'なります'] },
  { id: 'b37-c4-4', grup: 'catatan', no: 4, soal: '法隆寺は 607年に ___。', arti: 'Kuil Horyuji dibangun pada tahun 607.', jawaban: '建てられました', pilihan: ['建てられました', '建てました', '建てられます', '建てます'] },
  { id: 'b37-c4-5', grup: 'catatan', no: 4, soal: 'ドミニカでは 何語が ___。', arti: 'Di Dominika digunakan bahasa apa?', jawaban: '使われて います', pilihan: ['使われて います', '使いまして います', '使わせて います', '使って います'] },

  // ── Catatan 5 · Kata Benda から／Kata Benda で つくります ──────────
  { id: 'b37-c5-1', grup: 'catatan', no: 5, soal: 'ビールは 麦___ 造られます。', arti: 'Bir terbuat dari gandum.', jawaban: 'から', pilihan: ['から', 'で', 'の', 'より'] },
  { id: 'b37-c5-2', grup: 'catatan', no: 5, soal: '昔 日本の 家は 木___ 造られました。', arti: 'Pada zaman dulu, perumahan Jepang dibuat dari kayu.', jawaban: 'で', pilihan: ['で', 'から', 'に', 'を'] },
  { id: 'b37-c5-3', grup: 'catatan', no: 5, soal: 'お酒は 米___ 造られます。', arti: 'Minuman keras terbuat dari beras.', jawaban: 'から', pilihan: ['から', 'で', 'に', 'へ'] },
  { id: 'b37-c5-4', grup: 'catatan', no: 5, soal: 'この テーブルは 木___ 造られました。', arti: 'Meja ini dibuat dari kayu.', jawaban: 'で', pilihan: ['で', 'から', 'を', 'の'] },
  { id: 'b37-c5-5', grup: 'catatan', no: 5, soal: 'ワインは ぶどう___ 造られます。', arti: 'Anggur terbuat dari buah anggur.', jawaban: 'から', pilihan: ['から', 'で', 'より', 'まで'] },

  // ── Catatan 6 · Kata Benda₁ の Kata Benda₂ ────────────────────────
  { id: 'b37-c6-1', grup: 'catatan', no: 6, soal: 'これが 原料___ 麦です。', arti: 'Inilah gandum bahan bakunya.', jawaban: 'の', pilihan: ['の', 'な', 'に', 'が'] },
  { id: 'b37-c6-2', grup: 'catatan', no: 6, soal: 'ペット___ いぬを 飼って います。', arti: '(Saya) memelihara anjing peliharaan.', jawaban: 'の', pilihan: ['の', 'な', 'に', 'を'] },
  { id: 'b37-c6-3', grup: 'catatan', no: 6, soal: 'あの 人は むすこ___ ハンスです。', arti: 'Orang itu Hans, anak (saya).', jawaban: 'の', pilihan: ['の', 'な', 'に', 'が'] },
  { id: 'b37-c6-4', grup: 'catatan', no: 6, soal: 'この かばんは 何___ 作られましたか。', arti: 'Tas ini dibuat dari apa?', jawaban: 'で', pilihan: ['で', 'から', 'の', 'に'] },
  { id: 'b37-c6-5', grup: 'catatan', no: 6, soal: 'あれは だれ___ かばんですか。', arti: 'Tas siapa itu?', jawaban: 'の', pilihan: ['の', 'な', 'に', 'が'] },

  // ── Catatan 7 · この／その／あの Kata Benda (posisi) ──────────────
  { id: 'b37-c7-1', grup: 'catatan', no: 7, soal: '___ 中に 入れますか。', arti: 'Apakah bisa masuk ke dalam itu?', jawaban: 'あの', pilihan: ['あの', 'あれ', 'あそこ', 'あっち'] },
  { id: 'b37-c7-2', grup: 'catatan', no: 7, soal: '___ 中は 入れません。', arti: 'Bagian dalam itu tidak bisa dimasuki.', jawaban: 'あの', pilihan: ['あの', 'あれ', 'あそこ', 'あっち'] },
  { id: 'b37-c7-3', grup: 'catatan', no: 7, soal: '___ 中に かばんが ありますか。', arti: 'Apakah di dalam ini ada tas?', jawaban: 'この', pilihan: ['この', 'これ', 'ここ', 'こっち'] },
  { id: 'b37-c7-4', grup: 'catatan', no: 7, soal: '机の 上に 本が あります。___ 本は 日本語の 本です。', arti: 'Di atas meja ada buku. Buku itu buku bahasa Jepang.', jawaban: 'その', pilihan: ['その', 'それ', 'そこ', 'そっち'] },
  { id: 'b37-c7-5', grup: 'catatan', no: 7, soal: 'テレビの となりに 女の 人が います。___ 人は だれですか。', arti: 'Di samping televisi ada perempuan. Siapa orang itu?', jawaban: 'あの', pilihan: ['あの', 'あれ', 'あそこ', 'あっち'] },
]
