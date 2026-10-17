import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 19 — tepat 5 soal per pola (3 pola 文型 + 4 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` di bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · ～を 見た ことが あります ─────────────────────────────
  { id: 'b19-1-1', grup: 'bunpou', no: 1, soal: '北海道へ___ ことが ありますか。', arti: 'Apakah pernah pergi ke Hokkaido?', jawaban: '行った', pilihan: ['行った', '行く', '行って', '行き'] },
  { id: 'b19-1-2', grup: 'bunpou', no: 1, soal: '馬に___ ことが ありますか。', arti: 'Apakah pernah berkuda?', jawaban: '乗った', pilihan: ['乗った', '乗る', '乗って', '乗り'] },
  { id: 'b19-1-3', grup: 'bunpou', no: 1, soal: '北海道へ 行った こと___ ありますか。', arti: 'Apakah pernah pergi ke Hokkaido?', jawaban: 'が', pilihan: ['が', 'を', 'は', 'に'] },
  { id: 'b19-1-4', grup: 'bunpou', no: 1, soal: '馬に 乗った ことが ありますか。……いいえ、一度___ ありません。', arti: 'Apakah pernah berkuda? ……Belum, belum pernah sama sekali.', jawaban: 'も', pilihan: ['も', 'は', 'が', 'に'] },
  { id: 'b19-1-5', grup: 'bunpou', no: 1, soal: '北海道へ 行った ことが ありますか。……はい、一度 あります。2年___に 友達と 行きました。', arti: 'Apakah pernah pergi ke Hokkaido? ……Ya, pernah satu kali. Dua tahun yang lalu, pergi dengan teman.', jawaban: 'まえ', pilihan: ['まえ', 'あと', 'ごろ', 'ぐらい'] },

  // ── 文型 2 · 休みの 日は ～したり、～したり します ─────────────────
  { id: 'b19-2-1', grup: 'bunpou', no: 2, soal: '休みの 日は テニスを___、散歩に 行ったり します。', arti: 'Pada hari libur, bermain tenis, dan berjalan-jalan.', jawaban: 'したり', pilihan: ['したり', 'して', 'する', 'した'] },
  { id: 'b19-2-2', grup: 'bunpou', no: 2, soal: '休みの 日は テニスを したり、散歩に___ します。', arti: 'Pada hari libur, bermain tenis, dan berjalan-jalan.', jawaban: '行ったり', pilihan: ['行ったり', '行って', '行く', '行き'] },
  { id: 'b19-2-3', grup: 'bunpou', no: 2, soal: '冬休みは 京都の お寺や 神社を___、友達と パーティーを したり しました。', arti: 'Pada liburan musim dingin, melihat kuil dan wihara di Kyoto, dan berpesta dengan teman.', jawaban: '見たり', pilihan: ['見たり', '見て', '見る', '見'] },
  { id: 'b19-2-4', grup: 'bunpou', no: 2, soal: '休みの 日は テニスを したり、散歩に 行ったり___。', arti: 'Pada hari libur, bermain tenis, dan berjalan-jalan.', jawaban: 'します', pilihan: ['します', 'して', 'する', 'した'] },
  { id: 'b19-2-5', grup: 'bunpou', no: 2, soal: '日本で 旅行を したり、お茶を___ したいです。', arti: 'Ingin bepergian dan belajar upacara minum teh.', jawaban: '習ったり', pilihan: ['習ったり', '習って', '習う', '習い'] },

  // ── 文型 3 · これから だんだん ～くなります ────────────────────────
  { id: 'b19-3-1', grup: 'bunpou', no: 3, soal: 'これから だんだん___なります。', arti: 'Secara perlahan-lahan menjadi panas.', jawaban: '暑く', pilihan: ['暑く', '暑い', '暑くて', '暑さ'] },
  { id: 'b19-3-2', grup: 'bunpou', no: 3, soal: 'これから だんだん 暑く___。', arti: 'Secara perlahan-lahan menjadi panas.', jawaban: 'なります', pilihan: ['なります', 'なって', 'なる', 'なりました'] },
  { id: 'b19-3-3', grup: 'bunpou', no: 3, soal: 'これから___ 寒く なります。', arti: 'Secara perlahan-lahan menjadi dingin.', jawaban: 'だんだん', pilihan: ['だんだん', 'なかなか', 'ぜひ', 'ちょっと'] },
  { id: 'b19-3-4', grup: 'bunpou', no: 3, soal: '日本語が 上手に___ね。', arti: 'Sudah pandai berbahasa Jepang, ya.', jawaban: 'なりました', pilihan: ['なりました', 'なります', 'なって', 'なる'] },
  { id: 'b19-3-5', grup: 'bunpou', no: 3, soal: 'おかげさまで よく___。', arti: 'Berkat Anda, sudah sembuh.', jawaban: 'なりました', pilihan: ['なりました', 'なります', 'なって', 'なる'] },

  // ── Catatan 1 · Kata Kerja Bentuk た ───────────────────────────────
  { id: 'b19-c1-1', grup: 'catatan', no: 1, soal: 'かいて → ___', arti: 'Bentuk た dari かいて (menulis).', jawaban: 'かいた', pilihan: ['かいた', 'かいて', 'かく', 'かかない'] },
  { id: 'b19-c1-2', grup: 'catatan', no: 1, soal: 'のんで → ___', arti: 'Bentuk た dari のんで (minum).', jawaban: 'のんだ', pilihan: ['のんだ', 'のんで', 'のむ', 'のまない'] },
  { id: 'b19-c1-3', grup: 'catatan', no: 1, soal: 'たべて → ___', arti: 'Bentuk た dari たべて (makan).', jawaban: 'たべた', pilihan: ['たべた', 'たべて', 'たべる', 'たべない'] },
  { id: 'b19-c1-4', grup: 'catatan', no: 1, soal: 'きて → ___', arti: 'Bentuk た dari きて (datang).', jawaban: 'きた', pilihan: ['きた', 'きて', 'くる', 'こない'] },
  { id: 'b19-c1-5', grup: 'catatan', no: 1, soal: 'して → ___', arti: 'Bentuk た dari して (melakukan).', jawaban: 'した', pilihan: ['した', 'して', 'する', 'しない'] },

  // ── Catatan 2 · Kata Kerja Bentuk た ことが あります ───────────────
  { id: 'b19-c2-1', grup: 'catatan', no: 2, soal: '日本へ___ ことが ありますか。', arti: 'Apakah pernah pergi ke Jepang?', jawaban: '行った', pilihan: ['行った', '行く', '行って', '行き'] },
  { id: 'b19-c2-2', grup: 'catatan', no: 2, soal: '去年 北海道で 馬に___。', arti: 'Tahun lalu berkuda di Hokkaido.', jawaban: '乗りました', pilihan: ['乗りました', '乗った', '乗って', '乗ります'] },
  { id: 'b19-c2-3', grup: 'catatan', no: 2, soal: 'すしを___ ことが ありますか。', arti: 'Apakah pernah makan sushi?', jawaban: '食べた', pilihan: ['食べた', '食べる', '食べて', '食べ'] },
  { id: 'b19-c2-4', grup: 'catatan', no: 2, soal: '北海道へ 行った ことが___。', arti: 'Pernah pergi ke Hokkaido.', jawaban: 'あります', pilihan: ['あります', 'ありません', '行きます', 'ありました'] },
  { id: 'b19-c2-5', grup: 'catatan', no: 2, soal: '馬に 乗った ことが ありますか。……いいえ、___ ありません。', arti: 'Apakah pernah berkuda? ……Belum, belum pernah sama sekali.', jawaban: '一度も', pilihan: ['一度も', '一度', 'いつも', 'たぶん'] },

  // ── Catatan 3 · Kata Kerja₁ たり、Kata Kerja₂ たり します ──────────
  { id: 'b19-c3-1', grup: 'catatan', no: 3, soal: '日曜日は テニスを したり、映画を___ しました。', arti: 'Pada hari Minggu yang lalu, bermain tenis, dan menonton film.', jawaban: '見たり', pilihan: ['見たり', '見て', '見る', '見た'] },
  { id: 'b19-c3-2', grup: 'catatan', no: 3, soal: '日曜日は テニスを___、映画を 見ました。', arti: 'Pada hari Minggu yang lalu, bermain tenis, kemudian menonton film.', jawaban: 'して', pilihan: ['して', 'したり', 'する', 'した'] },
  { id: 'b19-c3-3', grup: 'catatan', no: 3, soal: '休みの 日は 本を 読んだり、音楽を___ します。', arti: 'Pada hari libur, membaca buku, dan mendengarkan musik.', jawaban: '聞いたり', pilihan: ['聞いたり', '聞いて', '聞く', '聞き'] },
  { id: 'b19-c3-4', grup: 'catatan', no: 3, soal: 'きのう 買い物に___、映画を 見たり しました。', arti: 'Kemarin pergi berbelanja, dan menonton film.', jawaban: '行ったり', pilihan: ['行ったり', '行って', '行く', '行き'] },
  { id: 'b19-c3-5', grup: 'catatan', no: 3, soal: '日曜日は テニスを したり、映画を 見たり___。', arti: 'Pada hari Minggu yang lalu, bermain tenis, dan menonton film.', jawaban: 'しました', pilihan: ['しました', 'します', 'して', 'する'] },

  // ── Catatan 4 · ～く／～に なります ────────────────────────────────
  { id: 'b19-c4-1', grup: 'catatan', no: 4, soal: '寒い → 寒く___。', arti: 'Menjadi dingin.', jawaban: 'なります', pilihan: ['なります', 'なって', 'なる', 'なりました'] },
  { id: 'b19-c4-2', grup: 'catatan', no: 4, soal: '元気［な］ → 元気___ なります。', arti: 'Menjadi sehat.', jawaban: 'に', pilihan: ['に', 'く', 'な', 'で'] },
  { id: 'b19-c4-3', grup: 'catatan', no: 4, soal: '25歳 → 25歳___ なります。', arti: 'Menjadi (umur) dua puluh lima tahun.', jawaban: 'に', pilihan: ['に', 'く', 'な', 'で'] },
  { id: 'b19-c4-4', grup: 'catatan', no: 4, soal: '医者___ なりたいです。', arti: 'Ingin menjadi dokter.', jawaban: 'に', pilihan: ['に', 'く', 'な', 'を'] },
  { id: 'b19-c4-5', grup: 'catatan', no: 4, soal: '部屋が___ なりました。', arti: 'Kamar menjadi bersih.', jawaban: 'きれいに', pilihan: ['きれいに', 'きれく', 'きれいな', 'きれいで'] },
]
