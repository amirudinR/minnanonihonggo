import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 6 — tepat 5 soal per pola (4 pola 文型 + 6 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Benda を Kata Kerja(transitif) ────────────────────
  { id: 'b6-1-1', grup: 'bunpou', no: 1, soal: 'わたしは ジュース___ 飲みます。', arti: 'Saya minum jus.', jawaban: 'を', pilihan: ['を', 'が', 'に', 'で'] },
  { id: 'b6-1-2', grup: 'bunpou', no: 1, soal: '毎朝 パン___ 食べます。', arti: 'Setiap pagi makan roti.', jawaban: 'を', pilihan: ['を', 'は', 'に', 'で'] },
  { id: 'b6-1-3', grup: 'bunpou', no: 1, soal: 'きのう 映画___ 見ました。', arti: 'Kemarin menonton film.', jawaban: 'を', pilihan: ['を', 'が', 'へ', 'で'] },
  { id: 'b6-1-4', grup: 'bunpou', no: 1, soal: 'わたしは たばこ___ 吸います。', arti: 'Saya merokok.', jawaban: 'を', pilihan: ['を', 'も', 'に', 'と'] },
  { id: 'b6-1-5', grup: 'bunpou', no: 1, soal: '毎日 日本語___ 勉強します。', arti: 'Setiap hari belajar bahasa Jepang.', jawaban: 'を', pilihan: ['を', 'が', 'で', 'に'] },

  // ── 文型 2 · Kata Benda(tempat) で Kata Kerja ──────────────────────
  { id: 'b6-2-1', grup: 'bunpou', no: 2, soal: 'わたしは 駅___ 新聞を 買います。', arti: 'Saya membeli surat kabar di stasiun.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },
  { id: 'b6-2-2', grup: 'bunpou', no: 2, soal: 'どこ___ その かばんを 買いましたか。', arti: 'Di mana Anda membeli tas itu?', jawaban: 'で', pilihan: ['で', 'に', 'を', 'は'] },
  { id: 'b6-2-3', grup: 'bunpou', no: 2, soal: 'わたしは レストラン___ 昼ごはんを 食べます。', arti: 'Saya makan siang di restoran.', jawaban: 'で', pilihan: ['で', 'に', 'へ', 'が'] },
  { id: 'b6-2-4', grup: 'bunpou', no: 2, soal: 'うち___ テレビを 見ます。', arti: 'Menonton televisi di rumah.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'と'] },
  { id: 'b6-2-5', grup: 'bunpou', no: 2, soal: '店___ お茶を 飲みました。', arti: 'Minum teh di toko.', jawaban: 'で', pilihan: ['で', 'を', 'に', 'へ'] },

  // ── 文型 3 · いっしょに ～ませんか（ajakan) ────────────────────────
  { id: 'b6-3-1', grup: 'bunpou', no: 3, soal: 'いっしょに 神戸へ 行き___。', arti: 'Bagaimana kalau kita pergi ke Kobe bersama-sama?', jawaban: 'ませんか', pilihan: ['ませんか', 'ましょう', 'ました', 'ません'] },
  { id: 'b6-3-2', grup: 'bunpou', no: 3, soal: 'いっしょに ビールを 飲み___。', arti: 'Bagaimana kalau kita minum bir bersama-sama?', jawaban: 'ませんか', pilihan: ['ませんか', 'ましょう', 'ました', 'ません'] },
  { id: 'b6-3-3', grup: 'bunpou', no: 3, soal: 'いっしょに 昼ごはんを 食べ___。', arti: 'Bagaimana kalau kita makan siang bersama-sama?', jawaban: 'ませんか', pilihan: ['ませんか', 'ましょう', 'ました', 'ません'] },
  { id: 'b6-3-4', grup: 'bunpou', no: 3, soal: 'いっしょに お花見を し___。', arti: 'Bagaimana kalau kita melihat bunga sakura bersama-sama?', jawaban: 'ませんか', pilihan: ['ませんか', 'ましょう', 'ました', 'ません'] },
  { id: 'b6-3-5', grup: 'bunpou', no: 3, soal: 'A：いっしょに 映画を 見ませんか。B：ええ、___。', arti: 'A：Bagaimana kalau menonton film bersama? B：Ya, bagus ya.', jawaban: 'いいですね', pilihan: ['いいですね', 'そうですね', 'わかりました', 'すみません'] },

  // ── 文型 4 · Kata Kerja ましょう（ajakan aktif) ────────────────────
  { id: 'b6-4-1', grup: 'bunpou', no: 4, soal: 'ちょっと 休み___。', arti: 'Mari istirahat sebentar!', jawaban: 'ましょう', pilihan: ['ましょう', 'ませんか', 'ました', 'ません'] },
  { id: 'b6-4-2', grup: 'bunpou', no: 4, soal: 'いっしょに 昼ごはんを 食べ___。', arti: 'Mari makan siang bersama-sama.', jawaban: 'ましょう', pilihan: ['ましょう', 'ませんか', 'ました', 'ません'] },
  { id: 'b6-4-3', grup: 'bunpou', no: 4, soal: 'A：いっしょに 昼ごはんを 食べませんか。B：ええ、___。', arti: 'A：Bagaimana kalau kita makan siang bersama? B：Ya, ayo kita makan.', jawaban: '食べましょう', pilihan: ['食べましょう', '食べませんか', '食べました', '食べません'] },
  { id: 'b6-4-4', grup: 'bunpou', no: 4, soal: 'じゃ、また あした 会い___。', arti: 'Baik, mari bertemu lagi besok.', jawaban: 'ましょう', pilihan: ['ましょう', 'ませんか', 'ました', 'ません'] },
  { id: 'b6-4-5', grup: 'bunpou', no: 4, soal: 'いっしょに ビールを 飲み___。', arti: 'Mari minum bir bersama-sama.', jawaban: 'ましょう', pilihan: ['ましょう', 'ませんか', 'ました', 'ません'] },

  // ── Catatan 1 · Kata Benda を します ───────────────────────────────
  { id: 'b6-c1-1', grup: 'catatan', no: 1, soal: 'サッカー___ します。', arti: 'Bermain sepak bola.', jawaban: 'を', pilihan: ['を', 'が', 'に', 'で'] },
  { id: 'b6-c1-2', grup: 'catatan', no: 1, soal: '宿題___ します。', arti: 'Mengerjakan PR.', jawaban: 'を', pilihan: ['を', 'は', 'に', 'で'] },
  { id: 'b6-c1-3', grup: 'catatan', no: 1, soal: '電話___ します。', arti: 'Menelepon.', jawaban: 'を', pilihan: ['を', 'が', 'へ', 'と'] },
  { id: 'b6-c1-4', grup: 'catatan', no: 1, soal: 'お花見___ します。', arti: 'Melihat dan menikmati bunga sakura.', jawaban: 'を', pilihan: ['を', 'も', 'に', 'で'] },
  { id: 'b6-c1-5', grup: 'catatan', no: 1, soal: 'きのう テニスを ___。', arti: 'Kemarin bermain tenis.', jawaban: 'しました', pilihan: ['しました', 'します', 'しません', 'しましょう'] },

  // ── Catatan 2 · 何を しますか ──────────────────────────────────────
  { id: 'b6-c2-1', grup: 'catatan', no: 2, soal: '月曜日 何___ しますか。', arti: 'Hari Senin melakukan apa?', jawaban: 'を', pilihan: ['を', 'が', 'に', 'で'] },
  { id: 'b6-c2-2', grup: 'catatan', no: 2, soal: 'きのう 何を し___。……日本語を 勉強しました。', arti: 'Kemarin melakukan apa? ……Belajar bahasa Jepang.', jawaban: 'ましたか', pilihan: ['ましたか', 'ますか', 'ませんか', 'ましょうか'] },
  { id: 'b6-c2-3', grup: 'catatan', no: 2, soal: 'A：あした 何を しますか。B：テニスを ___。', arti: 'A：Besok melakukan apa? B：Bermain tenis.', jawaban: 'します', pilihan: ['します', 'しました', 'しません', 'しましょう'] },
  { id: 'b6-c2-4', grup: 'catatan', no: 2, soal: 'A：土曜日 何を しましたか。B：映画を ___。', arti: 'A：Hari Sabtu melakukan apa? B：Menonton film.', jawaban: '見ました', pilihan: ['見ました', '見ます', '見ません', '見ましょう'] },
  { id: 'b6-c2-5', grup: 'catatan', no: 2, soal: '日曜日 何を しますか。……映画を ___。', arti: 'Hari Minggu melakukan apa? ……Menonton film.', jawaban: '見ます', pilihan: ['見ます', '見ました', '見ません', '見ましょう'] },

  // ── Catatan 3 · なん dan なに ──────────────────────────────────────
  { id: 'b6-c3-1', grup: 'catatan', no: 3, soal: 'それは ___ですか。……お茶です。', arti: 'Itu apa? ……Teh.', jawaban: 'なん', pilihan: ['なん', 'なに', 'だれ', 'どれ'] },
  { id: 'b6-c3-2', grup: 'catatan', no: 3, soal: '___を 買いますか。', arti: 'Mau membeli apa?', jawaban: 'なに', pilihan: ['なに', 'なん', 'どれ', 'どこ'] },
  { id: 'b6-c3-3', grup: 'catatan', no: 3, soal: '___の 本ですか。……日本語の 本です。', arti: 'Buku tentang apa? ……Buku bahasa Jepang.', jawaban: 'なん', pilihan: ['なん', 'なに', 'だれ', 'どれ'] },
  { id: 'b6-c3-4', grup: 'catatan', no: 3, soal: '箱の 中に ___が ありますか。', arti: 'Di dalam kotak ada apa?', jawaban: 'なに', pilihan: ['なに', 'なん', 'だれ', 'どれ'] },
  { id: 'b6-c3-5', grup: 'catatan', no: 3, soal: 'テレサちゃんは ___歳ですか。……9歳です。', arti: 'Berapa usia Teresa? ……9 tahun.', jawaban: 'なん', pilihan: ['なん', 'なに', 'どれ', 'どこ'] },

  // ── Catatan 4 · Kata Kerja ませんか ────────────────────────────────
  { id: 'b6-c4-1', grup: 'catatan', no: 4, soal: 'いっしょに 京都へ 行き___。……ええ、いいですね。', arti: 'Bagaimana kita pergi ke Kyoto bersama-sama? ……Ya, bagus ya.', jawaban: 'ませんか', pilihan: ['ませんか', 'ましょう', 'ました', 'ません'] },
  { id: 'b6-c4-2', grup: 'catatan', no: 4, soal: 'いっしょに お茶を 飲み___。……ええ、いいですね。', arti: 'Bagaimana kita minum teh bersama-sama? ……Ya, bagus ya.', jawaban: 'ませんか', pilihan: ['ませんか', 'ましょう', 'ました', 'ません'] },
  { id: 'b6-c4-3', grup: 'catatan', no: 4, soal: 'いっしょに 映画を 見___。……ええ、いいですね。', arti: 'Bagaimana kita menonton film bersama-sama? ……Ya, bagus ya.', jawaban: 'ませんか', pilihan: ['ませんか', 'ましょう', 'ました', 'ません'] },
  { id: 'b6-c4-4', grup: 'catatan', no: 4, soal: 'あした うちへ 来___。', arti: 'Bagaimana kalau datang ke rumah saya besok?', jawaban: 'ませんか', pilihan: ['ませんか', 'ましょう', 'ました', 'ません'] },
  { id: 'b6-c4-5', grup: 'catatan', no: 4, soal: 'A：いっしょに 花見に 行きませんか。B：ええ、___ね。', arti: 'A：Bagaimana kalau pergi melihat bunga sakura bersama? B：Ya, bagus ya.', jawaban: 'いいです', pilihan: ['いいです', 'いいえ', 'だめです', 'ざんねんです'] },

  // ── Catatan 5 · Kata Kerja ましょう ────────────────────────────────
  { id: 'b6-c5-1', grup: 'catatan', no: 5, soal: 'ちょっと 休み___。', arti: 'Mari istirahat sebentar.', jawaban: 'ましょう', pilihan: ['ましょう', 'ませんか', 'ました', 'ません'] },
  { id: 'b6-c5-2', grup: 'catatan', no: 5, soal: 'いっしょに 京都へ ___。', arti: 'Mari pergi ke Kyoto bersama-sama.', jawaban: '行きましょう', pilihan: ['行きましょう', '行きませんか', '行きました', '行きません'] },
  { id: 'b6-c5-3', grup: 'catatan', no: 5, soal: 'いっしょに ビールを ___。', arti: 'Mari minum bir bersama-sama.', jawaban: '飲みましょう', pilihan: ['飲みましょう', '飲みませんか', '飲みました', '飲みません'] },
  { id: 'b6-c5-4', grup: 'catatan', no: 5, soal: 'A：あした 何を しましょうか。B：テニスを ___。', arti: 'A：Besok kita lakukan apa? B：Mari bermain tenis.', jawaban: 'しましょう', pilihan: ['しましょう', 'しませんか', 'しました', 'しません'] },
  { id: 'b6-c5-5', grup: 'catatan', no: 5, soal: 'A：いっしょに 昼ごはんを 食べませんか。B：ええ、___。', arti: 'A：Bagaimana kalau makan siang bersama? B：Ya, ayo kita makan.', jawaban: '食べましょう', pilihan: ['食べましょう', '食べませんか', '食べました', '食べません'] },

  // ── Catatan 6 · ～か ───────────────────────────────────────────────
  { id: 'b6-c6-1', grup: 'catatan', no: 6, soal: 'A：日曜日 京都へ 行きました。B：京都___。いいですね。', arti: 'A：Hari Minggu pergi ke Kyoto. B：Kyoto? Bagus ya.', jawaban: 'ですか', pilihan: ['ですか', 'ですね', 'でした', 'は'] },
  { id: 'b6-c6-2', grup: 'catatan', no: 6, soal: 'A：あした 大阪へ 行きます。B：大阪___。いいですね。', arti: 'A：Besok pergi ke Osaka. B：Osaka? Bagus ya.', jawaban: 'ですか', pilihan: ['ですか', 'ですね', 'でした', 'が'] },
  { id: 'b6-c6-3', grup: 'catatan', no: 6, soal: 'A：きのう 映画を 見ました。B：映画___。どの 映画ですか。', arti: 'A：Kemarin menonton film. B：Film? Film apa?', jawaban: 'ですか', pilihan: ['ですか', 'ですね', 'でした', 'を'] },
  { id: 'b6-c6-4', grup: 'catatan', no: 6, soal: 'A：日本の 生活は 楽しいです。B：楽しい___。いいですね。', arti: 'A：Kehidupan di Jepang menyenangkan. B：Menyenangkan? Bagus ya.', jawaban: 'ですか', pilihan: ['ですか', 'ですね', 'でした', 'と'] },
  { id: 'b6-c6-5', grup: 'catatan', no: 6, soal: 'A：あの 人は ミラーさんです。B：ミラーさん___。', arti: 'A：Beliau Sdr. Miller. B：Sdr. Miller?', jawaban: 'ですか', pilihan: ['ですか', 'ですね', 'でした', 'に'] },
]
