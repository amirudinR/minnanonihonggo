import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 36 — tepat 5 soal per pola (4 pola 文型 + 2 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · {V₁ kamus / V₁ない} ように、V₂ ─────────────────────────
  { id: 'b36-1-1', grup: 'bunpou', no: 1, soal: '速く 泳げる___、毎日 練習して います。', arti: 'Setiap hari (saya) berlatih agar bisa berenang dengan cepat.', jawaban: 'ように', pilihan: ['ように', 'そうに', 'ために', 'のに'] },
  { id: 'b36-1-2', grup: 'bunpou', no: 1, soal: 'ごみの 日を 忘れない___、カレンダーに つけて あります。', arti: 'Supaya tidak lupa hari pembuangan sampah, ditandai di kalender.', jawaban: 'ように', pilihan: ['ように', 'そうに', 'ために', 'ことに'] },
  { id: 'b36-1-3', grup: 'bunpou', no: 1, soal: '知らない ことばを 聞いたら、すぐ 調べられる___、持って います。', arti: '(Saya) membawanya agar jika ada kosakata yang belum dikenal bisa langsung mencarinya.', jawaban: 'ように', pilihan: ['ように', 'そうに', 'ために', 'のに'] },
  { id: 'b36-1-4', grup: 'bunpou', no: 1, soal: '日本語が ___、毎日 勉強して います。', arti: 'Setiap hari (saya) belajar agar bisa bahasa Jepang.', jawaban: 'わかるように', pilihan: ['わかるように', 'わかって', 'わかった', 'わかります'] },
  { id: 'b36-1-5', grup: 'bunpou', no: 1, soal: '速く 走れるように、毎日 ___。', arti: 'Setiap hari (saya) berlatih agar bisa berlari cepat.', jawaban: '練習して います', pilihan: ['練習して います', '練習します', '練習しました', '練習して ください'] },

  // ── 文型 2 · Kata Kerja Bentuk Kamus ように なります ────────────────
  { id: 'b36-2-1', grup: 'bunpou', no: 2, soal: '毎日 練習すれば、泳げる___。', arti: 'Kalau setiap hari berlatih, (akan) bisa berenang.', jawaban: 'ように なります', pilihan: ['ように なります', 'ように します', 'ことに します', 'ように なりました'] },
  { id: 'b36-2-2', grup: 'bunpou', no: 2, soal: 'やっと 自転車に ___ なりました。', arti: 'Akhirnya (saya) bisa bersepeda.', jawaban: '乗れるように', pilihan: ['乗れるように', '乗るように', '乗って', '乗ります'] },
  { id: 'b36-2-3', grup: 'bunpou', no: 2, soal: 'ショパンの 曲が 弾けるように ___か。', arti: 'Apakah (Anda) sudah bisa memainkan musik Chopin?', jawaban: 'なりました', pilihan: ['なりました', 'しました', 'なります', 'します'] },
  { id: 'b36-2-4', grup: 'bunpou', no: 2, soal: 'ショパンの 曲が 弾けるように なりましたか。……いいえ、まだ ___。', arti: 'Apakah sudah bisa memainkan musik Chopin? ……Belum, belum bisa memainkan.', jawaban: '弾けません', pilihan: ['弾けません', '弾きます', '弾きました', '弾けます'] },
  { id: 'b36-2-5', grup: 'bunpou', no: 2, soal: '日本に 来てから、日本語が わかるように ___。', arti: 'Setelah datang ke Jepang, (saya) menjadi bisa bahasa Jepang.', jawaban: 'なりました', pilihan: ['なりました', 'しました', 'なります', 'あります'] },

  // ── 文型 3 · {V kamus / Vない} ように します ────────────────────────
  { id: 'b36-3-1', grup: 'bunpou', no: 3, soal: '毎日 運動して、何でも 食べる___。', arti: 'Setiap hari berolahraga dan berusaha makan apa saja.', jawaban: 'ように しています', pilihan: ['ように しています', 'ように なりました', 'ことに しています', 'ように して ください'] },
  { id: 'b36-3-2', grup: 'bunpou', no: 3, soal: '歯に 悪いですから、甘い 物を 食べない___。', arti: 'Karena tidak baik untuk gigi, (saya) berusaha tidak makan makanan manis.', jawaban: 'ように しています', pilihan: ['ように しています', 'ように なりました', 'ことに しました', 'ように なります'] },
  { id: 'b36-3-3', grup: 'bunpou', no: 3, soal: 'もっと 野菜を 食べるように ___。', arti: 'Usahakan makan sayur-mayur yang lebih banyak.', jawaban: 'して ください', pilihan: ['して ください', 'なります', 'あります', 'もらいます'] },
  { id: 'b36-3-4', grup: 'bunpou', no: 3, soal: '絶対に パスポートを ___ように して ください。', arti: 'Sama sekali jangan sampai kehilangan paspor.', jawaban: 'なくさない', pilihan: ['なくさない', 'なくす', 'なくした', 'なくして'] },
  { id: 'b36-3-5', grup: 'bunpou', no: 3, soal: 'コンサートは 6時に 始まります。絶対に 遅れないように ___。', arti: 'Konsernya mulai pukul 6. Sama sekali jangan sampai terlambat.', jawaban: 'して ください', pilihan: ['して ください', 'なります', 'します', 'あります'] },

  // ── 文型 4 · 早い→早く／上手な→上手に ──────────────────────────────
  { id: 'b36-4-1', grup: 'bunpou', no: 4, soal: '___ 上手に お茶が たてられるように なりたいです。', arti: '(Saya) ingin menjadi cepat pandai membuat teh.', jawaban: '早く', pilihan: ['早く', '早い', '早さ', '早くて'] },
  { id: 'b36-4-2', grup: 'bunpou', no: 4, soal: '早く ___ お茶が たてられるように なりたいです。', arti: '(Saya) ingin menjadi cepat pandai membuat teh.', jawaban: '上手に', pilihan: ['上手に', '上手な', '上手さ', '上手く'] },
  { id: 'b36-4-3', grup: 'bunpou', no: 4, soal: '花子さんは 日本語が ___ 話せるように なりました。', arti: 'Hanako menjadi bisa berbicara bahasa Jepang dengan pandai.', jawaban: '上手に', pilihan: ['上手に', '上手な', '上手さ', '上手だ'] },
  { id: 'b36-4-4', grup: 'bunpou', no: 4, soal: '毎朝 ___ 起きるように しています。', arti: 'Setiap pagi (saya) berusaha bangun pagi.', jawaban: '早く', pilihan: ['早く', '早い', '早さ', '早かった'] },
  { id: 'b36-4-5', grup: 'bunpou', no: 4, soal: '日本語が 上手に ___ ように なりました。', arti: '(Saya) menjadi bisa berbicara bahasa Jepang dengan pandai.', jawaban: '話せる', pilihan: ['話せる', '話す', '話した', '話します'] },

  // ── Catatan 1 · ように なります — Perhatian 1 ──────────────────────
  { id: 'b36-c1-1', grup: 'catatan', no: 1, soal: '日本人は 100年ぐらいまえから 牛肉や 豚肉を 食べる___。', arti: 'Orang Jepang sejak kira-kira seratus tahun lalu sudah makan daging sapi dan daging babi.', jawaban: 'ように なりました', pilihan: ['ように なりました', 'ように しました', 'ことに しました', 'ように して います'] },
  { id: 'b36-c1-2', grup: 'catatan', no: 1, soal: '日本人は 100年ぐらいまえから 牛肉や 豚肉を ___ ように なりました。', arti: 'Orang Jepang sejak kira-kira seratus tahun lalu sudah makan daging sapi dan daging babi.', jawaban: '食べる', pilihan: ['食べる', '食べます', '食べた', '食べて'] },
  { id: 'b36-c1-3', grup: 'catatan', no: 1, soal: 'たばこを 吸わないように ___。', arti: '(Dia) menjadi tidak merokok.', jawaban: 'なりました', pilihan: ['なりました', 'しました', 'あります', 'います'] },
  { id: 'b36-c1-4', grup: 'catatan', no: 1, soal: '田中さんは 毎朝 ジョギングするように ___。', arti: 'Sdr. Tanaka menjadi (terbiasa) berjoging setiap pagi.', jawaban: 'なりました', pilihan: ['なりました', 'なりましたか', 'なります', 'しました'] },
  { id: 'b36-c1-5', grup: 'catatan', no: 1, soal: '子どもが 生まれてから、早く 帰るように ___。', arti: 'Sejak anak lahir, (saya) menjadi pulang lebih awal.', jawaban: 'なりました', pilihan: ['なりました', 'なります', 'しました', 'しましたか'] },

  // ── Catatan 2 · ように してください — Perhatian 2 ──────────────────
  { id: 'b36-c2-1', grup: 'catatan', no: 2, soal: 'すみませんが、塩を ___。', arti: 'Maaf, tolong ambilkan garam.', jawaban: '取って ください', pilihan: ['取って ください', '取るように して ください', '取らないで ください', '取りました'] },
  { id: 'b36-c2-2', grup: 'catatan', no: 2, soal: '毎日 野菜を 食べるように ___。', arti: 'Usahakan makan sayur setiap hari.', jawaban: 'して ください', pilihan: ['して ください', 'なります', 'います', 'あります'] },
  { id: 'b36-c2-3', grup: 'catatan', no: 2, soal: 'すみませんが、窓を ___。', arti: 'Maaf, tolong bukakan jendelanya.', jawaban: '開けて ください', pilihan: ['開けて ください', '開けるように して ください', '開けます', '開けました'] },
  { id: 'b36-c2-4', grup: 'catatan', no: 2, soal: '会議に 遅れないように ___。', arti: 'Usahakan jangan sampai terlambat ke rapat.', jawaban: 'して ください', pilihan: ['して ください', 'なります', 'います', 'しますか'] },
  { id: 'b36-c2-5', grup: 'catatan', no: 2, soal: 'あしたは 早く 来るように ___。', arti: 'Besok usahakan datang lebih awal.', jawaban: 'して ください', pilihan: ['して ください', 'なります', 'あります', 'みます'] },
]
