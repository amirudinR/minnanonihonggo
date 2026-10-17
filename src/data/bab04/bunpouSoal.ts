import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 4 — tepat 5 soal per pola (4 pola 文型 + 6 Catatan Tata Bahasa).
 * Sumber: `contoh`/`artiContoh`/`reibun` di bab ini (pola tidak diubah).
 * Jawaban "（なし）" = kata waktu itu TIDAK dibubuhi partikel に (lihat catatan 3).
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · 今 ～時～分 です ────────────────────────────────────
  { id: 'b4-1-1', grup: 'bunpou', no: 1, soal: '今 4時___です。', arti: 'Sekarang pukul empat lewat lima menit.', jawaban: '5分', pilihan: ['5分', '5時', '5日', '5月'] },
  { id: 'b4-1-2', grup: 'bunpou', no: 1, soal: '今 ___ですか。……7時10分です。', arti: 'Sekarang pukul berapa? ……Pukul tujuh lewat sepuluh menit.', jawaban: '何時', pilihan: ['何時', '何分', '何日', '何月'] },
  { id: 'b4-1-3', grup: 'bunpou', no: 1, soal: '今 9時___です。＝ 9時30分です。', arti: 'Sekarang pukul setengah sepuluh.', jawaban: '半', pilihan: ['半', '分', '時', '前'] },
  { id: 'b4-1-4', grup: 'bunpou', no: 1, soal: '今 何時ですか。……___です。', arti: 'Sekarang pukul berapa? ……Pukul dua lewat sepuluh menit.', jawaban: '2時10分', pilihan: ['2時10分', '2時', '10時2分', '2日10分'] },
  { id: 'b4-1-5', grup: 'bunpou', no: 1, soal: 'ニューヨークは 今 ___ですか。', arti: 'Sekarang di New York pukul berapa?', jawaban: '何時', pilihan: ['何時', '何分', '何曜日', '何日'] },

  // ── 文型 2 · ～から ～まで Kata Kerja ──────────────────────────
  { id: 'b4-2-1', grup: 'bunpou', no: 2, soal: 'わたしは 9時___ 5時まで 働きます。', arti: 'Saya bekerja dari pukul sembilan sampai pukul lima.', jawaban: 'から', pilihan: ['から', 'まで', 'に', 'を'] },
  { id: 'b4-2-2', grup: 'bunpou', no: 2, soal: '銀行は 9時から 3時___です。', arti: 'Bank dari pukul sembilan sampai pukul tiga.', jawaban: 'まで', pilihan: ['まで', 'から', 'に', 'を'] },
  { id: 'b4-2-3', grup: 'bunpou', no: 2, soal: '銀行は 何時___ 何時までですか。', arti: 'Bank dari pukul berapa sampai pukul berapa?', jawaban: 'から', pilihan: ['から', 'まで', 'に', 'の'] },
  { id: 'b4-2-4', grup: 'bunpou', no: 2, soal: 'わたしは 月曜日から 金曜日___ 働きます。', arti: 'Saya bekerja dari hari Senin sampai hari Jumat.', jawaban: 'まで', pilihan: ['まで', 'から', 'に', 'と'] },
  { id: 'b4-2-5', grup: 'bunpou', no: 2, soal: 'A：何時から 働きますか。B：___から 働きます。', arti: 'Dari pukul berapa bekerja? ……Dari pukul sembilan.', jawaban: '9時', pilihan: ['9時', '9分', '9日', '9月'] },

  // ── 文型 3 · Kata Benda(waktu) に Kata Kerja ───────────────────
  { id: 'b4-3-1', grup: 'bunpou', no: 3, soal: 'わたしは 朝 6時___ 起きます。', arti: 'Saya bangun pukul enam pagi.', jawaban: 'に', pilihan: ['に', 'で', 'へ', 'を'] },
  { id: 'b4-3-2', grup: 'bunpou', no: 3, soal: '毎晩 11時___ 寝ます。', arti: 'Setiap malam tidur pukul sebelas.', jawaban: 'に', pilihan: ['に', 'で', 'と', 'を'] },
  { id: 'b4-3-3', grup: 'bunpou', no: 3, soal: 'きのう 6時___ 起きました。', arti: 'Kemarin bangun pukul enam.', jawaban: 'に', pilihan: ['に', 'で', 'へ', 'と'] },
  { id: 'b4-3-4', grup: 'bunpou', no: 3, soal: 'あした 9時___ 5時まで 働きます。', arti: 'Besok bekerja dari pukul sembilan sampai pukul lima.', jawaban: 'から', pilihan: ['から', 'に', 'で', 'を'] },
  { id: 'b4-3-5', grup: 'bunpou', no: 3, soal: 'きのう 9時から 5時___ 勉強しました。', arti: 'Kemarin belajar dari pukul sembilan sampai pukul lima.', jawaban: 'まで', pilihan: ['まで', 'に', 'で', 'と'] },

  // ── 文型 4 · Kata Kerja ました／ませんでした ──────────────────────
  { id: 'b4-4-1', grup: 'bunpou', no: 4, soal: 'わたしは きのう 勉強___。', arti: 'Saya belajar kemarin.', jawaban: 'しました', pilihan: ['しました', 'します', 'しません', 'しませんでした'] },
  { id: 'b4-4-2', grup: 'bunpou', no: 4, soal: 'きのう 勉強しましたか。……いいえ、勉強___。', arti: 'Kemarin belajar? ……Tidak, tidak belajar.', jawaban: 'しませんでした', pilihan: ['しませんでした', 'しました', 'します', 'しません'] },
  { id: 'b4-4-3', grup: 'bunpou', no: 4, soal: '土曜日 働きますか。……いいえ、働き___。', arti: 'Hari Sabtu bekerja? ……Tidak, tidak bekerja.', jawaban: 'ません', pilihan: ['ません', 'ました', 'ます', 'ませんでした'] },
  { id: 'b4-4-4', grup: 'bunpou', no: 4, soal: '毎朝 6時に 起きます。きのうも 6時に ___。', arti: 'Setiap pagi bangun pukul enam. Kemarin juga bangun pukul enam.', jawaban: '起きました', pilihan: ['起きました', '起きます', '起きません', '起きませんでした'] },
  { id: 'b4-4-5', grup: 'bunpou', no: 4, soal: 'あした 9時から 5時まで 働き___。', arti: 'Besok akan bekerja dari pukul sembilan sampai pukul lima.', jawaban: 'ます', pilihan: ['ます', 'ました', 'ません', 'ませんでした'] },

  // ── Catatan 1 · membaca 分（ふん／ぷん） ─────────────────────────
  { id: 'b4-c1-1', grup: 'catatan', no: 1, soal: '「1時1分」 の 読み方は ___です。', arti: 'Bagaimana membaca "1時1分"?', jawaban: 'いちじ いっぷん', pilihan: ['いちじ いっぷん', 'いちじ いちふん', 'いちじ いちぷん', 'いちじ いちぶん'] },
  { id: 'b4-c1-2', grup: 'catatan', no: 1, soal: '「2時2分」 の 読み方は ___です。', arti: 'Bagaimana membaca "2時2分"?', jawaban: 'にじ にふん', pilihan: ['にじ にふん', 'にじ にぷん', 'にじ にぶん', 'にじ にっふん'] },
  { id: 'b4-c1-3', grup: 'catatan', no: 1, soal: '「7時10分」 の 読み方は ___です。', arti: 'Bagaimana membaca "7時10分"?', jawaban: 'しちじ じゅっぷん', pilihan: ['しちじ じゅっぷん', 'しちじ じゅうふん', 'ななじ じゅっぷん', 'しちじ じゅうぷん'] },
  { id: 'b4-c1-4', grup: 'catatan', no: 1, soal: '「6時6分」 の 読み方は ___です。', arti: 'Bagaimana membaca "6時6分"?', jawaban: 'ろくじ ろっぷん', pilihan: ['ろくじ ろっぷん', 'ろくじ ろくふん', 'ろくじ ろくぷん', 'ろくじ ろっふん'] },
  { id: 'b4-c1-5', grup: 'catatan', no: 1, soal: '「3時3分」 の 読み方は ___です。', arti: 'Bagaimana membaca "3時3分"?', jawaban: 'さんじ さんぷん', pilihan: ['さんじ さんぷん', 'さんじ さんふん', 'さんじ さんぶん', 'さんじ さんっふん'] },

  // ── Catatan 2 · ます／ません／ました／ませんでした ───────────────
  { id: 'b4-c2-1', grup: 'catatan', no: 2, soal: '毎朝 6時に 起き___。', arti: 'Setiap pagi bangun pukul enam. (kebiasaan)', jawaban: 'ます', pilihan: ['ます', 'ました', 'ません', 'ませんでした'] },
  { id: 'b4-c2-2', grup: 'catatan', no: 2, soal: 'きのう 働き___。', arti: 'Kemarin bekerja.', jawaban: 'ました', pilihan: ['ました', 'ます', 'ません', 'ませんでした'] },
  { id: 'b4-c2-3', grup: 'catatan', no: 2, soal: '今日は 働き___。', arti: 'Hari ini tidak bekerja.', jawaban: 'ません', pilihan: ['ません', 'ます', 'ました', 'ませんでした'] },
  { id: 'b4-c2-4', grup: 'catatan', no: 2, soal: 'きのう 勉強しましたか。……いいえ、勉強し___。', arti: 'Kemarin belajar? ……Tidak, tidak belajar.', jawaban: 'ませんでした', pilihan: ['ませんでした', 'ました', 'ます', 'ません'] },
  { id: 'b4-c2-5', grup: 'catatan', no: 2, soal: 'あした 11時に 寝___。', arti: 'Besok tidur pukul sebelas.', jawaban: 'ます', pilihan: ['ます', 'ました', 'ません', 'ませんでした'] },

  // ── Catatan 3 · kata waktu tertentu TIDAK pakai に ───────────────
  { id: 'b4-c3-1', grup: 'catatan', no: 3, soal: 'きのう___ 勉強しました。', arti: 'Kemarin belajar. (「きのう」 tidak dibubuhi に)', jawaban: '（なし）', pilihan: ['（なし）', 'に', 'で', 'と'] },
  { id: 'b4-c3-2', grup: 'catatan', no: 3, soal: '6時___ 起きます。', arti: 'Bangun pukul enam.', jawaban: 'に', pilihan: ['に', 'から', 'まで', 'を'] },
  { id: 'b4-c3-3', grup: 'catatan', no: 3, soal: '毎日___ 勉強します。', arti: 'Belajar setiap hari. (「毎日」 tidak dibubuhi に)', jawaban: '（なし）', pilihan: ['（なし）', 'に', 'で', 'を'] },
  { id: 'b4-c3-4', grup: 'catatan', no: 3, soal: '日曜日___ 働きます。', arti: 'Bekerja pada hari Minggu. (hari: に boleh dipakai)', jawaban: 'に', pilihan: ['に', 'から', 'まで', 'と'] },
  { id: 'b4-c3-5', grup: 'catatan', no: 3, soal: 'あした___ 働きます。', arti: 'Besok bekerja. (「あした」 tidak dibubuhi に)', jawaban: '（なし）', pilihan: ['（なし）', 'に', 'で', 'へ'] },

  // ── Catatan 4 · から／まで berdiri sendiri ───────────────────────
  { id: 'b4-c4-1', grup: 'catatan', no: 4, soal: '9時___ 働きます。', arti: 'Bekerja dari pukul sembilan.', jawaban: 'から', pilihan: ['から', 'まで', 'に', 'を'] },
  { id: 'b4-c4-2', grup: 'catatan', no: 4, soal: '5時___ 働きます。', arti: 'Bekerja sampai pukul lima.', jawaban: 'まで', pilihan: ['まで', 'から', 'に', 'で'] },
  { id: 'b4-c4-3', grup: 'catatan', no: 4, soal: '9時から 5時___ 勉強します。', arti: 'Belajar dari pukul sembilan sampai pukul lima.', jawaban: 'まで', pilihan: ['まで', 'から', 'に', 'と'] },
  { id: 'b4-c4-4', grup: 'catatan', no: 4, soal: '月曜日から 金曜日___ 働きます。', arti: 'Bekerja dari hari Senin sampai hari Jumat.', jawaban: 'まで', pilihan: ['まで', 'から', 'に', 'を'] },
  { id: 'b4-c4-5', grup: 'catatan', no: 4, soal: '9時___ 5時まで 働きます。', arti: 'Bekerja dari pukul sembilan sampai pukul lima.', jawaban: 'から', pilihan: ['から', 'まで', 'に', 'で'] },

  // ── Catatan 5 · Kata Benda₁ と Kata Benda₂ ──────────────────────
  { id: 'b4-c5-1', grup: 'catatan', no: 5, soal: '銀行の 休みは 土曜日___ 日曜日です。', arti: 'Libur bank adalah hari Sabtu dan hari Minggu.', jawaban: 'と', pilihan: ['と', 'や', 'も', 'か'] },
  { id: 'b4-c5-2', grup: 'catatan', no: 5, soal: '休みは 土曜日と ___です。', arti: 'Liburnya hari Sabtu dan Minggu.', jawaban: '日曜日', pilihan: ['日曜日', '月曜日', '金曜日', '何曜日'] },
  { id: 'b4-c5-3', grup: 'catatan', no: 5, soal: '休みは 月曜日___ 金曜日です。', arti: 'Liburnya hari Senin dan Jumat.', jawaban: 'と', pilihan: ['と', 'や', 'も', 'の'] },
  { id: 'b4-c5-4', grup: 'catatan', no: 5, soal: 'A：休みは いつですか。B：土曜日___ 日曜日です。', arti: 'Liburnya kapan? ……Hari Sabtu dan Minggu.', jawaban: 'と', pilihan: ['と', 'や', 'か', 'も'] },
  { id: 'b4-c5-5', grup: 'catatan', no: 5, soal: '銀行の 休みは ___と 日曜日です。', arti: 'Libur bank hari Sabtu dan Minggu.', jawaban: '土曜日', pilihan: ['土曜日', '月曜日', '金曜日', '何曜日'] },

  // ── Catatan 6 · ～ね ───────────────────────────────────────────
  { id: 'b4-c6-1', grup: 'catatan', no: 6, soal: '毎日 10時まで 勉強します。……大変です___。', arti: 'Setiap hari belajar sampai pukul sepuluh. ……Berat ya.', jawaban: 'ね', pilihan: ['ね', 'よ', 'か', 'が'] },
  { id: 'b4-c6-2', grup: 'catatan', no: 6, soal: 'あしたは 日曜日です___。', arti: 'Besok hari Minggu, ya. (mengharap persetujuan)', jawaban: 'ね', pilihan: ['ね', 'よ', 'か', 'の'] },
  { id: 'b4-c6-3', grup: 'catatan', no: 6, soal: '毎日 働きます。……大変です___。', arti: 'Setiap hari bekerja. ……Berat ya.', jawaban: 'ね', pilihan: ['ね', 'よ', 'か', 'と'] },
  { id: 'b4-c6-4', grup: 'catatan', no: 6, soal: 'A：あしたは 休みです。B：いいです___。', arti: 'Besok libur. ……Bagus ya.', jawaban: 'ね', pilihan: ['ね', 'よ', 'か', 'も'] },
  { id: 'b4-c6-5', grup: 'catatan', no: 6, soal: 'A：銀行は 9時から 3時までです。B：そうですか。大変です___。', arti: 'Bank dari pukul sembilan sampai pukul tiga. ……Berat ya.', jawaban: 'ね', pilihan: ['ね', 'よ', 'か', 'が'] },
]
