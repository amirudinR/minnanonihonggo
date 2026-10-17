import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 39 — tepat 5 soal per pola (4 pola 文型 + 1 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · ～て（て）、～ (sebab/alasan) ─────────────────────────
  { id: 'b39-1-1', grup: 'bunpou', no: 1, soal: 'ニュースを ___、びっくりしました。', arti: '(Saya) kaget karena membaca berita.', jawaban: '読んで', pilihan: ['読んで', '読みて', '読くて', '読た'] },
  { id: 'b39-1-2', grup: 'bunpou', no: 1, soal: '土曜日は 都合が ___、行けません。', arti: 'Tidak bisa pergi karena pada hari Sabtu berhalangan.', jawaban: '悪くて', pilihan: ['悪くて', '悪いで', '悪く', '悪い'] },
  { id: 'b39-1-3', grup: 'bunpou', no: 1, soal: '話が ___、よく わかりませんでした。', arti: 'Ceritanya rumit maka kurang mengerti.', jawaban: '複雑で', pilihan: ['複雑で', '複雑くて', '複雑な', '複雑'] },
  { id: 'b39-1-4', grup: 'bunpou', no: 1, soal: '事故が ___、バスが 遅れて しまいました。', arti: 'Bus menjadi terlambat karena terjadi kecelakaan.', jawaban: 'あって', pilihan: ['あって', 'ありて', 'あってで', 'あるで'] },
  { id: 'b39-1-5', grup: 'bunpou', no: 1, soal: '授業に ___、先輩に しかられました。', arti: '(Saya) dimarahi oleh senior karena terlambat masuk kelas.', jawaban: '遅れて', pilihan: ['遅れて', '遅れで', '遅れた', '遅れる'] },

  // ── 文型 2 · Kata Benda で (sebab: fenomena/kejadian) ─────────────
  { id: 'b39-2-1', grup: 'bunpou', no: 2, soal: '地震___ ビルが 倒れました。', arti: 'Gedung roboh karena terjadi gempa bumi.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'が'] },
  { id: 'b39-2-2', grup: 'bunpou', no: 2, soal: '病気___ 会社を 休みました。', arti: '(Saya) tidak masuk kerja karena sakit.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },
  { id: 'b39-2-3', grup: 'bunpou', no: 2, soal: '台風___ 木が 倒れました。', arti: 'Pohon tumbang karena angin topan.', jawaban: 'で', pilihan: ['で', 'に', 'が', 'を'] },
  { id: 'b39-2-4', grup: 'bunpou', no: 2, soal: '火事で 家が ___。', arti: 'Rumah terbakar karena kebakaran.', jawaban: '焼けました', pilihan: ['焼けました', '焼きました', '焼きましたか', '焼けます'] },
  { id: 'b39-2-5', grup: 'bunpou', no: 2, soal: '事故___ バスが 遅れました。', arti: 'Bus terlambat karena kecelakaan.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'と'] },

  // ── 文型 3 · [Bentuk Biasa] ので、～ ──────────────────────────────
  { id: 'b39-3-1', grup: 'bunpou', no: 3, soal: '日本語が わからない___、英語で 話して いただけませんか。', arti: 'Karena (saya) tidak mengerti bahasa Jepang, tolong berbicara dalam bahasa Inggris.', jawaban: 'ので', pilihan: ['ので', 'のでに', 'からで', 'のに'] },
  { id: 'b39-3-2', grup: 'bunpou', no: 3, soal: '用事が ある___、お先に 失礼します。', arti: 'Karena ada urusan, (saya) pamit duluan.', jawaban: 'ので', pilihan: ['ので', 'のでに', 'からで', 'のに'] },
  { id: 'b39-3-3', grup: 'bunpou', no: 3, soal: '用事が ___、お先に 失礼します。', arti: 'Karena ada urusan, (saya) pamit duluan.', jawaban: 'ある', pilihan: ['ある', 'あります', 'あった', 'あって'] },
  { id: 'b39-3-4', grup: 'bunpou', no: 3, soal: '土曜日は ちょっと 都合が 悪い___、行けないんです。', arti: 'Karena hari Sabtu sedikit berhalangan, (saya) tidak bisa pergi.', jawaban: 'ので', pilihan: ['ので', 'のでに', 'からで', 'のに'] },
  { id: 'b39-3-5', grup: 'bunpou', no: 3, soal: 'あしたは テストが ある___、今夜 勉強します。', arti: 'Karena besok ada ujian, malam ini (saya) belajar.', jawaban: 'ので', pilihan: ['ので', 'のでに', 'からで', 'のに'] },

  // ── 文型 4 · ～中で (di tengah perjalanan) ────────────────────────
  { id: 'b39-4-1', grup: 'bunpou', no: 4, soal: 'マラソンの 途中___ 気分が 悪くなりました。', arti: 'Di tengah maraton, badan menjadi kurang enak.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'が'] },
  { id: 'b39-4-2', grup: 'bunpou', no: 4, soal: '来る 途中___ 事故が あって、バスが 遅れました。', arti: 'Karena di tengah perjalanan datang ada kecelakaan, bus terlambat.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },
  { id: 'b39-4-3', grup: 'bunpou', no: 4, soal: '学校へ ___ 途中で、友達に 会いました。', arti: 'Di tengah perjalanan ke sekolah, (saya) bertemu teman.', jawaban: '行く', pilihan: ['行く', '行きます', '行った', '行って'] },
  { id: 'b39-4-4', grup: 'bunpou', no: 4, soal: '家へ 帰る ___、雨が 降りはじめました。', arti: 'Di tengah perjalanan pulang, hujan mulai turun.', jawaban: '途中で', pilihan: ['途中で', '途中に', '途中を', '途中が'] },
  { id: 'b39-4-5', grup: 'bunpou', no: 4, soal: 'マラソンの 途中で 気分が ___ なりました。', arti: 'Di tengah maraton, badan menjadi kurang enak.', jawaban: '悪く', pilihan: ['悪く', '悪い', '悪くて', '悪くに'] },

  // ── Catatan 1 · ～て（て）、～ — Perhatian (pakai から) ────────────
  { id: 'b39-c1-1', grup: 'catatan', no: 1, soal: '危ないです___、機械に 触らないで ください。', arti: 'Jangan menyentuh mesin karena berbahaya.', jawaban: 'から', pilihan: ['から', 'くて', 'て', 'に'] },
  { id: 'b39-c1-2', grup: 'catatan', no: 1, soal: '寒いです___、窓を 閉めて ください。', arti: 'Tolong tutup jendelanya karena dingin.', jawaban: 'から', pilihan: ['から', 'くて', 'て', 'で'] },
  { id: 'b39-c1-3', grup: 'catatan', no: 1, soal: '危ないですから、機械に ___。', arti: 'Karena berbahaya, jangan menyentuh mesin.', jawaban: '触らないで ください', pilihan: ['触らないで ください', '触るように して ください', '触って ください', '触りました'] },
  { id: 'b39-c1-4', grup: 'catatan', no: 1, soal: 'おいしいですから、もっと ___。', arti: 'Karena enak, tolong makan lebih banyak.', jawaban: '食べて ください', pilihan: ['食べて ください', '食べないで ください', '食べるように して ください', '食べました'] },
  { id: 'b39-c1-5', grup: 'catatan', no: 1, soal: '危ないです___、気を つけて ください。', arti: 'Hati-hati karena berbahaya.', jawaban: 'から', pilihan: ['から', 'くて', 'て', 'で'] },
]
