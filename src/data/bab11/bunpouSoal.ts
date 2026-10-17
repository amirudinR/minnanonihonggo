import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 11 — tepat 5 soal per pola (4 pola 文型 + 0 Catatan Tata Bahasa).
 * Sumber: `contoh`/`artiContoh`/`reibun` di bab ini (pola tidak diubah).
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Benda + Kata Bantu Bilangan + Kata Kerja ──────────
  { id: 'b11-1-1', grup: 'bunpou', no: 1, soal: 'みかんを ___ 買いました。', arti: 'Membeli 4 buah jeruk.', jawaban: '４つ', pilihan: ['４つ', '４人', '４枚', '４台'] },
  { id: 'b11-1-2', grup: 'bunpou', no: 1, soal: '外国人の 学生が ___ います。', arti: 'Ada 2 orang siswa asing.', jawaban: '２人', pilihan: ['２人', '２つ', '２枚', '２台'] },
  { id: 'b11-1-3', grup: 'bunpou', no: 1, soal: '切手を ___ ください。', arti: 'Tolong 5 lembar prangko.', jawaban: '５枚', pilihan: ['５枚', '５人', '５つ', '５台'] },
  { id: 'b11-1-4', grup: 'bunpou', no: 1, soal: '車が ___ あります。', arti: 'Ada 2 mobil.', jawaban: '２台', pilihan: ['２台', '２枚', '２人', '２つ'] },
  { id: 'b11-1-5', grup: 'bunpou', no: 1, soal: 'りんごを ___ 買いましたか。……四つ 買いました。', arti: 'Berapa buah apel yang Anda beli? ……Membeli empat.', jawaban: 'いくつ', pilihan: ['いくつ', '何人', '何枚', '何台'] },

  // ── 文型 2 · どのくらい Kata Kerjaますか ───────────────────────────
  { id: 'b11-2-1', grup: 'bunpou', no: 2, soal: '___ スペイン語を 勉強しましたか。……３か月 勉強しました。', arti: 'Berapa lama belajar bahasa Spanyol? ……Belajar 3 bulan.', jawaban: 'どのくらい', pilihan: ['どのくらい', 'いつ', '何時', 'いくら'] },
  { id: 'b11-2-2', grup: 'bunpou', no: 2, soal: '大阪から 東京まで どのくらい ___か。', arti: 'Dari Osaka sampai Tokyo berapa lama? ……Dengan Shinkansen 2 jam setengah.', jawaban: 'かかります', pilihan: ['かかります', 'あります', 'います', 'します'] },
  { id: 'b11-2-3', grup: 'bunpou', no: 2, soal: '大阪から 東京まで 新幹線で ___ かかります。', arti: 'Dari Osaka sampai Tokyo dengan Shinkansen memerlukan waktu 2 jam setengah.', jawaban: '２時間半', pilihan: ['２時間半', '２時間', '２か月', '２日'] },
  { id: 'b11-2-4', grup: 'bunpou', no: 2, soal: '___ 日本語を 勉強しましたか。……２年 勉強しました。', arti: 'Berapa lama belajar bahasa Jepang? ……Belajar 2 tahun.', jawaban: 'どのくらい', pilihan: ['どのくらい', 'いくつ', '何人', 'どれ'] },
  { id: 'b11-2-5', grup: 'bunpou', no: 2, soal: '田中さんは どのくらい スペイン語を 勉強しましたか。……___ 勉強しました。', arti: 'Sdr. Tanaka sudah berapa lama belajar bahasa Spanyol? ……Belajar 3 bulan.', jawaban: '３か月', pilihan: ['３か月', '３人', '３つ', '３枚'] },

  // ── 文型 3 · Kata Benda(jangka waktu) に ～回 Kata Kerjaます ────────
  { id: 'b11-3-1', grup: 'bunpou', no: 3, soal: '１か月___ ２回 映画を 見ます。', arti: 'Dalam 1 bulan menonton film 2 kali.', jawaban: 'に', pilihan: ['に', 'で', 'を', 'と'] },
  { id: 'b11-3-2', grup: 'bunpou', no: 3, soal: '１週間に ___ テニスを しますか。……２回ぐらい します。', arti: 'Dalam 1 minggu berapa kali bermain tenis? ……Kira-kira 2 kali.', jawaban: '何回', pilihan: ['何回', '何人', '何枚', '何時'] },
  { id: 'b11-3-3', grup: 'bunpou', no: 3, soal: '１週間に 何回 テニスを しますか。……２回ぐらい ___。', arti: '……Kira-kira bermain 2 kali.', jawaban: 'します', pilihan: ['します', 'しました', '見ます', '行きます'] },
  { id: 'b11-3-4', grup: 'bunpou', no: 3, soal: '１か月に ___ 映画を 見ます。', arti: 'Dalam 1 bulan menonton film 2 kali.', jawaban: '２回', pilihan: ['２回', '２人', '２枚', '２か月'] },
  { id: 'b11-3-5', grup: 'bunpou', no: 3, soal: '１年___ 何回 日本へ 行きますか。', arti: 'Dalam 1 tahun berapa kali pergi ke Jepang?', jawaban: 'に', pilihan: ['に', 'へ', 'を', 'が'] },

  // ── 文型 4 · Kata Bantu Bilangan / Kata Benda(waktu) だけ ───────────
  { id: 'b11-4-1', grup: 'bunpou', no: 4, soal: '休みは 日曜日___です。', arti: 'Liburnya hanya hari Minggu.', jawaban: 'だけ', pilihan: ['だけ', 'しか', 'も', 'ぐらい'] },
  { id: 'b11-4-2', grup: 'bunpou', no: 4, soal: 'りんごを １つだけ ___。', arti: 'Saya hanya membeli satu apel.', jawaban: '買いました', pilihan: ['買いました', '買います', '買いません', '見ました'] },
  { id: 'b11-4-3', grup: 'bunpou', no: 4, soal: '休みは ___だけです。', arti: 'Liburnya hanya hari Minggu.', jawaban: '日曜日', pilihan: ['日曜日', '月曜日', '１週間', '毎日'] },
  { id: 'b11-4-4', grup: 'bunpou', no: 4, soal: 'りんごを １___ だけ 買いました。', arti: 'Saya membeli 1 buah apel saja.', jawaban: 'つ', pilihan: ['つ', '人', '枚', '台'] },
  { id: 'b11-4-5', grup: 'bunpou', no: 4, soal: 'えっ、３か月___ですか。上手ですね。', arti: 'Hah, hanya 3 bulan? Pandai, ya.', jawaban: 'だけ', pilihan: ['だけ', 'ぐらい', 'から', 'まで'] },
]
