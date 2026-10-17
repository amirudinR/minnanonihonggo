import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 34 — tepat 5 soal per pola (3 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · わたしが 〜とおりに、〜てください ───────────────────────
  { id: 'b34-1-1', grup: 'bunpou', no: 1, soal: 'わたしが 今から 言う ___、書いて ください。', arti: 'Tulislah sebagaimana yang saya katakan mulai sekarang.', jawaban: 'とおりに', pilihan: ['とおりに', 'ために', 'ように', 'ことに'] },
  { id: 'b34-1-2', grup: 'bunpou', no: 1, soal: '先生が 言った___、書いて ください。', arti: 'Tulislah seperti yang dikatakan guru.', jawaban: 'とおりに', pilihan: ['とおりに', 'ために', 'ように', 'ものに'] },
  { id: 'b34-1-3', grup: 'bunpou', no: 1, soal: 'わたしが する ___、踊って ください。', arti: 'Menarilah seperti yang saya lakukan.', jawaban: 'とおりに', pilihan: ['とおりに', 'ために', 'ように', 'ことに'] },
  { id: 'b34-1-4', grup: 'bunpou', no: 1, soal: 'わたしが 今から 言う とおりに、___ ください。', arti: 'Tulislah sebagaimana yang saya katakan mulai sekarang.', jawaban: '書いて', pilihan: ['書いて', '書いては', '書くと', '書けば'] },
  { id: 'b34-1-5', grup: 'bunpou', no: 1, soal: '説明書に 書いて ある ___、組み立てて ください。', arti: 'Pasanglah sesuai dengan yang tertulis di buku petunjuk.', jawaban: 'とおりに', pilihan: ['とおりに', 'ために', 'ように', 'ことに'] },

  // ── 文型 2 · 〜た あとで、〜ます ────────────────────────────────────
  { id: 'b34-2-1', grup: 'bunpou', no: 2, soal: 'ごはんを 食べた ___、歯を 磨きます。', arti: 'Setelah makan, (saya) menggosok gigi.', jawaban: 'あとで', pilihan: ['あとで', 'まえで', 'ときに', 'ことで'] },
  { id: 'b34-2-2', grup: 'bunpou', no: 2, soal: 'うちへ 帰った ___、気が ついたんです。', arti: 'Baru (saya) sadari setelah pulang ke rumah.', jawaban: 'あとで', pilihan: ['あとで', 'まえで', 'あいだ', 'ところで'] },
  { id: 'b34-2-3', grup: 'bunpou', no: 2, soal: '仕事の ___、飲みに 行きませんか。', arti: 'Setelah selesai bekerja, bagaimana kalau pergi minum?', jawaban: 'あとで', pilihan: ['あとで', 'まえで', 'あいだ', 'ために'] },
  { id: 'b34-2-4', grup: 'bunpou', no: 2, soal: '宿題を ___ あとで、テレビを 見ます。', arti: 'Setelah mengerjakan PR, (saya) menonton televisi.', jawaban: 'した', pilihan: ['した', 'する', 'して', 'します'] },
  { id: 'b34-2-5', grup: 'bunpou', no: 2, soal: 'この 薬は ごはんを 食べた ___ 飲んで ください。', arti: 'Obat ini minumlah setelah makan.', jawaban: 'あとで', pilihan: ['あとで', 'まえで', 'ときに', 'うちに'] },

  // ── 文型 3 · 〜は 〜を 〜ないで 飲みます／食べます ────────────────────
  { id: 'b34-3-1', grup: 'bunpou', no: 3, soal: 'コーヒーは 砂糖を ___ 飲みます。', arti: 'Kopi (saya) minum tanpa gula.', jawaban: '入れないで', pilihan: ['入れないで', '入れて', '入れます', '入れた'] },
  { id: 'b34-3-2', grup: 'bunpou', no: 3, soal: 'しょうゆを ___ 食べます。', arti: '(Saya) makan tanpa kecap asin.', jawaban: 'つけないで', pilihan: ['つけないで', 'つけて', 'つけます', 'つけた'] },
  { id: 'b34-3-3', grup: 'bunpou', no: 3, soal: 'バスに ___、駅まで 歩いて います。', arti: 'Tidak naik bus, (saya) berjalan sampai stasiun.', jawaban: '乗らないで', pilihan: ['乗らないで', '乗って', '乗ります', '乗った'] },
  { id: 'b34-3-4', grup: 'bunpou', no: 3, soal: '今朝は 朝ごはんを ___ 学校へ 行きました。', arti: 'Pagi ini (saya) tidak makan sarapan, lalu pergi ke sekolah.', jawaban: '食べないで', pilihan: ['食べないで', '食べて', '食べます', '食べた'] },
  { id: 'b34-3-5', grup: 'bunpou', no: 3, soal: '肉は 何も ___ 食べます。', arti: 'Daging (saya) makan tanpa apa pun.', jawaban: 'つけないで', pilihan: ['つけないで', 'つけて', 'つけます', 'つけた'] },

  // ── Catatan 1 · Kata Kerja bentuk だ／Kata Benda の ＋ とおりに ────────
  { id: 'b34-c1-1', grup: 'catatan', no: 1, soal: 'わたしが やった ___、やって ください。', arti: 'Lakukanlah sama seperti yang saya buat.', jawaban: 'とおりに', pilihan: ['とおりに', 'あとで', 'ために', 'ように'] },
  { id: 'b34-c1-2', grup: 'catatan', no: 1, soal: '説明書の ___、組み立てました。', arti: '(Saya) memasang sesuai dengan petunjuk.', jawaban: 'とおりに', pilihan: ['とおりに', 'あとで', 'ために', 'うちに'] },
  { id: 'b34-c1-3', grup: 'catatan', no: 1, soal: '絵の ___、紙を 切って ください。', arti: 'Silakan menggunting kertas sesuai dengan gambar.', jawaban: 'とおりに', pilihan: ['とおりに', 'あとで', 'ように', 'ために'] },
  { id: 'b34-c1-4', grup: 'catatan', no: 1, soal: '言った ___、話して ください。', arti: 'Silakan berbicara sama seperti yang (Anda) ucapkan.', jawaban: 'とおりに', pilihan: ['とおりに', 'あとで', 'ことに', 'ために'] },
  { id: 'b34-c1-5', grup: 'catatan', no: 1, soal: 'この ___、書いて ください。', arti: 'Silakan menulis sama seperti ini.', jawaban: 'とおりに', pilihan: ['とおりに', 'あとで', 'ように', 'ところ'] },

  // ── Catatan 2 · Kata Kerja bentuk だ／Kata Benda の ＋ あとで ──────────
  { id: 'b34-c2-1', grup: 'catatan', no: 2, soal: '会議の ___、食事に 行きましょう。', arti: 'Setelah rapat, mari pergi makan.', jawaban: 'あとで', pilihan: ['あとで', 'まえで', 'あいだ', 'ため'] },
  { id: 'b34-c2-2', grup: 'catatan', no: 2, soal: '映画を 見た ___、ごはんを 食べました。', arti: 'Setelah menonton film, (saya) makan.', jawaban: 'あとで', pilihan: ['あとで', 'まえで', 'とき', 'うちに'] },
  { id: 'b34-c2-3', grup: 'catatan', no: 2, soal: '仕事の ___、まっすぐ うちへ 帰ります。', arti: 'Setelah selesai bekerja, (saya) langsung pulang ke rumah.', jawaban: 'あとで', pilihan: ['あとで', 'まえで', 'ところで', 'ことに'] },
  { id: 'b34-c2-4', grup: 'catatan', no: 2, soal: '試験が ___ あとで、旅行に 行きます。', arti: 'Setelah ujian selesai, (saya) pergi berjalan-jalan.', jawaban: '終わった', pilihan: ['終わった', '終わる', '終わって', '終わります'] },
  { id: 'b34-c2-5', grup: 'catatan', no: 2, soal: '新しいのを 買った ___、なくした 時計が 見つかりました。', arti: 'Setelah membeli yang baru, ditemukan arloji yang hilang.', jawaban: 'あとで', pilihan: ['あとで', 'まえで', 'ときに', 'ために'] },

  // ── Catatan 3 · Kata Kerja bentuk て／ない ＋ ないで ＋ Kata Kerja ─────
  { id: 'b34-c3-1', grup: 'catatan', no: 3, soal: 'しょうゆを ___ 食べます。', arti: '(Saya) makan dibubuhkan kecap asin.', jawaban: 'つけて', pilihan: ['つけて', 'つけないで', 'つける', 'つけた'] },
  { id: 'b34-c3-2', grup: 'catatan', no: 3, soal: '何も ___ 食べて ください。', arti: 'Makanlah tanpa apa pun.', jawaban: 'つけないで', pilihan: ['つけないで', 'つけて', 'つけます', 'つけた'] },
  { id: 'b34-c3-3', grup: 'catatan', no: 3, soal: '日曜日は どこにも ___、うちで ゆっくり 休みます。', arti: 'Hari Minggu tidak pergi ke mana-mana, tetapi beristirahat santai di rumah.', jawaban: '行かないで', pilihan: ['行かないで', '行って', '行きます', '行った'] },
  { id: 'b34-c3-4', grup: 'catatan', no: 3, soal: '毎朝 コーヒーを 飲みます。砂糖は ___ 飲みます。', arti: 'Setiap pagi (saya) minum kopi. Gulanya tidak (saya) pakai.', jawaban: '入れないで', pilihan: ['入れないで', '入れて', '入れます', '入れた'] },
  { id: 'b34-c3-5', grup: 'catatan', no: 3, soal: 'きのうは うちへ ___、友達の 家へ 行きました。', arti: 'Kemarin (saya) tidak pulang ke rumah, tetapi pergi ke rumah teman.', jawaban: '帰らないで', pilihan: ['帰らないで', '帰って', '帰ります', '帰った'] },
]
