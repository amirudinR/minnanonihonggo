import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 13 — tepat 5 soal per pola (4 pola 文型 + 0 Catatan Tata Bahasa).
 * Sumber: `contoh`/`artiContoh`/`reibun` di bab ini (pola tidak diubah).
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Benda が 欲しいです ────────────────────────────────
  { id: 'b13-1-1', grup: 'bunpou', no: 1, soal: 'わたしは 友達___ 欲しいです。', arti: 'Saya ingin punya teman.', jawaban: 'が', pilihan: ['が', 'を', 'は', 'に'] },
  { id: 'b13-1-2', grup: 'bunpou', no: 1, soal: '今 何___ いちばん 欲しいですか。', arti: 'Sekarang apa yang paling Anda inginkan?', jawaban: 'が', pilihan: ['が', 'を', 'は', 'も'] },
  { id: 'b13-1-3', grup: 'bunpou', no: 1, soal: 'わたしは 友達が ___。', arti: 'Saya ingin punya teman (bentuk positif).', jawaban: '欲しいです', pilihan: ['欲しいです', '欲しくないです', '欲しいでした', '欲しです'] },
  { id: 'b13-1-4', grup: 'bunpou', no: 1, soal: '今 何が いちばん ___ですか。', arti: 'Sekarang apa yang paling Anda inginkan?', jawaban: '欲しい', pilihan: ['欲しい', '欲しく', '欲し', '欲しいの'] },
  { id: 'b13-1-5', grup: 'bunpou', no: 1, soal: '今 何が いちばん 欲しいですか。……___ 欲しいです。', arti: 'Sekarang apa yang paling Anda inginkan? ……Saya ingin mobil.', jawaban: '車が', pilihan: ['車が', '車を', '車は', '車に'] },

  // ── 文型 2 · Kata Kerja たいです ────────────────────────────────────
  { id: 'b13-2-1', grup: 'bunpou', no: 2, soal: 'わたしは 沖縄へ 行き___です。', arti: 'Saya ingin pergi ke Okinawa.', jawaban: 'たい', pilihan: ['たい', 'たく', 'たかった', 'ましょう'] },
  { id: 'b13-2-2', grup: 'bunpou', no: 2, soal: '神戸で 何を 買い___か。', arti: 'Anda ingin membeli apa di Kobe?', jawaban: 'たいです', pilihan: ['たいです', 'ます', 'ました', 'たくないです'] },
  { id: 'b13-2-3', grup: 'bunpou', no: 2, soal: 'きょうは 疲れましたから、何も ___。', arti: 'Karena hari ini lelah, tidak ingin melakukan apa-apa.', jawaban: 'したくないです', pilihan: ['したくないです', 'したいです', 'します', 'しました'] },
  { id: 'b13-2-4', grup: 'bunpou', no: 2, soal: '夏休みに どこへ ___ですか。', arti: 'Pada liburan musim panas ingin pergi ke mana? ……Ingin pergi ke Okinawa.', jawaban: '行きたい', pilihan: ['行きたい', '行きたく', '行き', '行きます'] },
  { id: 'b13-2-5', grup: 'bunpou', no: 2, soal: '神戸で 靴を ___です。', arti: 'Saya ingin membeli sepatu di Kobe.', jawaban: '買いたい', pilihan: ['買いたい', '買いたく', '買い', '買います'] },

  // ── 文型 3 · Kata Benda(tempat) へ Kata Kerja / Kata Benda(kegiatan) に 行きます ──
  { id: 'b13-3-1', grup: 'bunpou', no: 3, soal: '神戸へ 買い物___ 行きます。', arti: 'Saya pergi berbelanja ke Kobe.', jawaban: 'に', pilihan: ['に', 'へ', 'を', 'で'] },
  { id: 'b13-3-2', grup: 'bunpou', no: 3, soal: '神戸へ インド料理を 食べ___ 行きます。', arti: 'Saya pergi ke Kobe untuk makan masakan India.', jawaban: 'に', pilihan: ['に', 'へ', 'が', 'と'] },
  { id: 'b13-3-3', grup: 'bunpou', no: 3, soal: '日本へ 経済の 勉強___ 来ました。', arti: 'Saya datang ke Jepang untuk belajar ekonomi.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'で'] },
  { id: 'b13-3-4', grup: 'bunpou', no: 3, soal: '北海道へ ___に 行きました。', arti: 'Pergi bermain ski ke Hokkaido.', jawaban: 'スキー', pilihan: ['スキー', 'スキーを', 'スキーします', 'スキーで'] },
  { id: 'b13-3-5', grup: 'bunpou', no: 3, soal: '日本へ 何___ 勉強に 来ましたか。', arti: 'Datang ke Jepang untuk belajar apa?', jawaban: 'の', pilihan: ['の', 'を', 'に', 'が'] },

  // ── 文型 4 · 何か / どこか ─────────────────────────────────────────
  { id: 'b13-4-1', grup: 'bunpou', no: 4, soal: '冬休みは ___ 行きましたか。……はい、行きました。', arti: 'Apakah Anda pergi ke suatu tempat pada liburan musim dingin? ……Ya, saya pergi.', jawaban: 'どこか', pilihan: ['どこか', 'どこが', 'どこも', 'どこに'] },
  { id: 'b13-4-2', grup: 'bunpou', no: 4, soal: 'のどが 渇きましたから、___ 飲みたいです。', arti: 'Karena haus, saya ingin minum sesuatu.', jawaban: '何か', pilihan: ['何か', '何が', '何も', '何を'] },
  { id: 'b13-4-3', grup: 'bunpou', no: 4, soal: 'おなかが すきましたから、___ 食べたいです。', arti: 'Karena lapar, saya ingin makan sesuatu.', jawaban: '何か', pilihan: ['何か', '何も', 'どこか', 'だれか'] },
  { id: 'b13-4-4', grup: 'bunpou', no: 4, soal: '夏休みに ___ 行きたいですか。', arti: 'Pada liburan musim panas, ingin pergi ke suatu tempat?', jawaban: 'どこか', pilihan: ['どこか', 'どこも', '何か', 'だれか'] },
  { id: 'b13-4-5', grup: 'bunpou', no: 4, soal: '冬休みは どこかへ 行きましたか。……はい、___。', arti: '……Ya, saya pergi.', jawaban: '行きました', pilihan: ['行きました', '行きます', '行きません', '行きたいです'] },
]
