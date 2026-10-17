import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 17 — tepat 5 soal per pola (3 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` di bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Kerja(Bentuk ない)で ください ──────────────────────
  { id: 'b17-1-1', grup: 'bunpou', no: 1, soal: 'ここで 写真を___ください。', arti: 'Jangan mengambil foto di sini!', jawaban: '撮らないで', pilihan: ['撮らないで', '撮って', '撮る', '撮った'] },
  { id: 'b17-1-2', grup: 'bunpou', no: 1, soal: 'そこに 車を___ください。', arti: 'Jangan parkir mobil di situ!', jawaban: '止めないで', pilihan: ['止めないで', '止めて', '止める', '止めた'] },
  { id: 'b17-1-3', grup: 'bunpou', no: 1, soal: 'ここで 写真を 撮らないで___。', arti: 'Jangan mengambil foto di sini!', jawaban: 'ください', pilihan: ['ください', 'おねがいします', 'ましょう', 'ませんか'] },
  { id: 'b17-1-4', grup: 'bunpou', no: 1, soal: 'ここに 荷物を___ください。', arti: 'Jangan letakkan barang di sini!', jawaban: '置かないで', pilihan: ['置かないで', '置いて', '置く', '置いた'] },
  { id: 'b17-1-5', grup: 'bunpou', no: 1, soal: 'かぜの とき、おふろに___ください。', arti: 'Kalau masuk angin, jangan berendam di kamar mandi!', jawaban: '入らないで', pilihan: ['入らないで', '入って', '入る', '入った'] },

  // ── 文型 2 · Kata Kerja(Bentuk ない)なければなりません ──────────────
  { id: 'b17-2-1', grup: 'bunpou', no: 2, soal: 'パスポートを___なりません。', arti: 'Harus memperlihatkan paspor.', jawaban: '見せなければ', pilihan: ['見せなければ', '見せて', '見せる', '見せた'] },
  { id: 'b17-2-2', grup: 'bunpou', no: 2, soal: '薬を___なりません。', arti: 'Harus minum obat.', jawaban: '飲まなければ', pilihan: ['飲まなければ', '飲んで', '飲む', '飲んだ'] },
  { id: 'b17-2-3', grup: 'bunpou', no: 2, soal: '早く___なりません。', arti: 'Harus cepat pulang.', jawaban: '帰らなければ', pilihan: ['帰らなければ', '帰って', '帰る', '帰った'] },
  { id: 'b17-2-4', grup: 'bunpou', no: 2, soal: '子どもも お金を___なりませんか。', arti: 'Apakah anak juga harus bayar?', jawaban: '払わなければ', pilihan: ['払わなければ', '払って', '払う', '払った'] },
  { id: 'b17-2-5', grup: 'bunpou', no: 2, soal: 'あした 京都へ___なりません。', arti: 'Besok harus pergi ke Kyoto.', jawaban: '行かなければ', pilihan: ['行かなければ', '行って', '行く', '行った'] },

  // ── 文型 3 · Kata Kerja(Bentuk ない)なくてもいいです ────────────────
  { id: 'b17-3-1', grup: 'bunpou', no: 3, soal: 'レポートは___いいです。', arti: 'Laporan tidak perlu dikumpulkan.', jawaban: '出さなくても', pilihan: ['出さなくても', '出して', '出す', '出した'] },
  { id: 'b17-3-2', grup: 'bunpou', no: 3, soal: 'レポートは 出さなくても___。', arti: 'Laporan tidak perlu dikumpulkan.', jawaban: 'いいです', pilihan: ['いいです', 'いけません', 'なりません', 'ください'] },
  { id: 'b17-3-3', grup: 'bunpou', no: 3, soal: 'お金を___いいです。', arti: 'Uang tidak perlu dibayar.', jawaban: '払わなくても', pilihan: ['払わなくても', '払って', '払う', '払わなければ'] },
  { id: 'b17-3-4', grup: 'bunpou', no: 3, soal: 'あした 学校へ___いいです。', arti: 'Besok tidak perlu pergi ke sekolah.', jawaban: '行かなくても', pilihan: ['行かなくても', '行って', '行く', '行かなければ'] },
  { id: 'b17-3-5', grup: 'bunpou', no: 3, soal: 'この 薬は___いいです。', arti: 'Obat ini tidak perlu diminum.', jawaban: '飲まなくても', pilihan: ['飲まなくても', '飲んで', '飲む', '飲まなければ'] },

  // ── Catatan 1 · Pentopikkan objek (を → は) ─────────────────────────
  { id: 'b17-c1-1', grup: 'catatan', no: 1, soal: 'ここに 荷物を 置かないで ください。→ ___は ここに 置かないで ください。', arti: 'Jangan letakkan barang di sini! → Barangnya jangan diletakkan di sini.', jawaban: '荷物', pilihan: ['荷物', '車', '写真', 'お金'] },
  { id: 'b17-c1-2', grup: 'catatan', no: 1, soal: 'ここに 車を 止めないで ください。→ 車___ ここに 止めないで ください。', arti: 'Jangan parkir mobil di sini! → Mobilnya jangan diparkir di sini.', jawaban: 'は', pilihan: ['は', 'を', 'が', 'に'] },
  { id: 'b17-c1-3', grup: 'catatan', no: 1, soal: 'ここで 写真を 撮らないで ください。→ 写真___ ここで 撮らないで ください。', arti: 'Jangan mengambil foto di sini! → Fotonya jangan diambil di sini.', jawaban: 'は', pilihan: ['は', 'を', 'が', 'も'] },
  { id: 'b17-c1-4', grup: 'catatan', no: 1, soal: 'ここに 荷物を 置かないで ください。→ 荷物は___に 置かないで ください。', arti: 'Jangan letakkan barang di sini! → Barangnya jangan diletakkan di sini.', jawaban: 'ここ', pilihan: ['ここ', 'そこ', 'どこ', 'あそこ'] },
  { id: 'b17-c1-5', grup: 'catatan', no: 1, soal: 'そこに 車を 止めないで ください。→ 車は___に 止めないで ください。', arti: 'Jangan parkir mobil di situ! → Mobilnya jangan diparkir di situ.', jawaban: 'そこ', pilihan: ['そこ', 'ここ', 'どこ', 'あちら'] },

  // ── Catatan 2 · Kata Benda(waktu) までに Kata Kerja ────────────────
  { id: 'b17-c2-1', grup: 'catatan', no: 2, soal: '会議は 5時___ 終わります。', arti: 'Rapat selesai sebelum pukul lima.', jawaban: 'までに', pilihan: ['までに', 'まで', 'から', 'ごろ'] },
  { id: 'b17-c2-2', grup: 'catatan', no: 2, soal: '土曜日___ 本を 返さなければ なりません。', arti: 'Harus mengembalikan buku sampai dengan hari Sabtu.', jawaban: 'までに', pilihan: ['までに', 'まで', 'から', 'ごろ'] },
  { id: 'b17-c2-3', grup: 'catatan', no: 2, soal: 'レポートは いつ___ 出さなければ なりませんか。', arti: 'Sampai dengan kapan laporan harus diserahkan?', jawaban: 'までに', pilihan: ['までに', 'まで', 'から', 'に'] },
  { id: 'b17-c2-4', grup: 'catatan', no: 2, soal: '金曜日___ 出して ください。', arti: 'Tolong diserahkan sampai dengan hari Jumat.', jawaban: 'までに', pilihan: ['までに', 'まで', 'から', 'ごろ'] },
  { id: 'b17-c2-5', grup: 'catatan', no: 2, soal: '会議は 5時までに___。', arti: 'Rapat selesai sebelum pukul lima.', jawaban: '終わります', pilihan: ['終わります', '終わって', '終わる', '終わりました'] },

  // ── Catatan 3 · [Perhatian] まで vs までに ──────────────────────────
  { id: 'b17-c3-1', grup: 'catatan', no: 3, soal: '5時___ 働きます。', arti: 'Bekerja sampai pukul lima.', jawaban: 'まで', pilihan: ['まで', 'までに', 'から', 'ごろ'] },
  { id: 'b17-c3-2', grup: 'catatan', no: 3, soal: '夜 10時___ 勉強しました。', arti: 'Belajar sampai pukul sepuluh malam.', jawaban: 'まで', pilihan: ['まで', 'までに', 'から', 'ごろ'] },
  { id: 'b17-c3-3', grup: 'catatan', no: 3, soal: '9時から 5時___ 働きます。', arti: 'Bekerja dari pukul sembilan sampai pukul lima.', jawaban: 'まで', pilihan: ['まで', 'までに', 'から', 'ごろ'] },
  { id: 'b17-c3-4', grup: 'catatan', no: 3, soal: '土曜日___ 働きます。', arti: 'Bekerja sampai hari Sabtu.', jawaban: 'まで', pilihan: ['まで', 'までに', 'から', 'ごろ'] },
  { id: 'b17-c3-5', grup: 'catatan', no: 3, soal: '会議は 5時___ 終わります。', arti: 'Rapat selesai sebelum pukul lima.', jawaban: 'までに', pilihan: ['までに', 'まで', 'から', 'ごろ'] },
]
