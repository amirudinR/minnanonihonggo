import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 8 — tepat 5 soal per pola (4 pola 文型 + 11 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Benda は Kata Sifatな［な］ です ──────────────────
  { id: 'b8-1-1', grup: 'bunpou', no: 1, soal: '桜は きれい___。', arti: 'Sakura indah.', jawaban: 'です', pilihan: ['です', 'くないです', 'な', 'いです'] },
  { id: 'b8-1-2', grup: 'bunpou', no: 1, soal: 'ワットさんは 親切___。', arti: 'Bapak Watt baik hati.', jawaban: 'です', pilihan: ['です', 'くないです', 'な', 'くです'] },
  { id: 'b8-1-3', grup: 'bunpou', no: 1, soal: 'あそこは 静か___。', arti: 'Di sana sunyi.', jawaban: 'です', pilihan: ['です', 'くないです', 'な', 'いくです'] },
  { id: 'b8-1-4', grup: 'bunpou', no: 1, soal: '大阪は にぎやかですか。……はい、___。', arti: 'Apakah Osaka ramai? ……Ya, ramai.', jawaban: 'にぎやかです', pilihan: ['にぎやかです', 'にぎやかくないです', 'にぎやかなです', 'にぎやかいです'] },
  { id: 'b8-1-5', grup: 'bunpou', no: 1, soal: '学校の 近くは ___です。', arti: 'Di dekat sekolah sunyi.', jawaban: '静か', pilihan: ['静か', '静かな', '静かく', '静かい'] },

  // ── 文型 2 · Kata Benda は Kata Sifatい（～い） です ────────────────
  { id: 'b8-2-1', grup: 'bunpou', no: 2, soal: '富士山は 高い___。', arti: 'Gunung Fuji tinggi.', jawaban: 'です', pilihan: ['です', 'な', 'くです', 'いです'] },
  { id: 'b8-2-2', grup: 'bunpou', no: 2, soal: 'この 本は おもしろい___。', arti: 'Buku ini menarik.', jawaban: 'です', pilihan: ['です', 'な', 'くです', 'ないです'] },
  { id: 'b8-2-3', grup: 'bunpou', no: 2, soal: '日本の 食べ物は おいしいですか。……はい、おいしい___。', arti: 'Apakah makanan Jepang enak? ……Ya, enak.', jawaban: 'です', pilihan: ['です', 'な', 'くです', 'でした'] },
  { id: 'b8-2-4', grup: 'bunpou', no: 2, soal: 'その 花は ___です。', arti: 'Bunga itu putih.', jawaban: '白い', pilihan: ['白い', '白な', '白の', '白く'] },
  { id: 'b8-2-5', grup: 'bunpou', no: 2, soal: 'ペキンは 今 ___です。', arti: 'Beijing sekarang dingin.', jawaban: '寒い', pilihan: ['寒い', '寒な', '寒の', '寒く'] },

  // ── 文型 3 · Kata Sifatな な Kata Benda ────────────────────────────
  { id: 'b8-3-1', grup: 'bunpou', no: 3, soal: '桜は きれい___ 花です。', arti: 'Sakura adalah bunga yang indah.', jawaban: 'な', pilihan: ['な', 'い', 'の', 'です'] },
  { id: 'b8-3-2', grup: 'bunpou', no: 3, soal: 'ワットさんは 親切___ 先生です。', arti: 'Bapak Watt adalah guru yang baik hati.', jawaban: 'な', pilihan: ['な', 'い', 'の', 'に'] },
  { id: 'b8-3-3', grup: 'bunpou', no: 3, soal: 'これは とても 有名___ 映画です。', arti: 'Ini film yang sangat terkenal.', jawaban: 'な', pilihan: ['な', 'い', 'の', 'く'] },
  { id: 'b8-3-4', grup: 'bunpou', no: 3, soal: 'あれは きれい___ うちです。', arti: 'Itu rumah yang bagus.', jawaban: 'な', pilihan: ['な', 'い', 'の', 'で'] },
  { id: 'b8-3-5', grup: 'bunpou', no: 3, soal: 'さくら大学は 有名___ 大学ですか。', arti: 'Apakah Universitas Sakura universitas yang terkenal?', jawaban: 'な', pilihan: ['な', 'い', 'の', 'と'] },

  // ── 文型 4 · Kata Sifatい（～い） Kata Benda ───────────────────────
  { id: 'b8-4-1', grup: 'bunpou', no: 4, soal: '富士山は ___ 山です。', arti: 'Gunung Fuji adalah gunung yang tinggi.', jawaban: '高い', pilihan: ['高い', '高な', '高の', '高く'] },
  { id: 'b8-4-2', grup: 'bunpou', no: 4, soal: 'きのう ___ 映画を 見ました。', arti: 'Kemarin menonton film yang menarik.', jawaban: 'おもしろい', pilihan: ['おもしろい', 'おもしろな', 'おもしろの', 'おもしろく'] },
  { id: 'b8-4-3', grup: 'bunpou', no: 4, soal: 'あれは ___ うちです。', arti: 'Itu rumah yang besar.', jawaban: '大きい', pilihan: ['大きい', '大きな', '大きの', '大きく'] },
  { id: 'b8-4-4', grup: 'bunpou', no: 4, soal: 'これは ___ 本です。', arti: 'Ini buku yang baru.', jawaban: '新しい', pilihan: ['新しい', '新しな', '新しの', '新しく'] },
  { id: 'b8-4-5', grup: 'bunpou', no: 4, soal: '奈良は ___ 町です。', arti: 'Nara kota yang tua.', jawaban: '古い', pilihan: ['古い', '古な', '古の', '古く'] },

  // ── Catatan 1 · Kata Sifat ─────────────────────────────────────────
  { id: 'b8-c1-1', grup: 'catatan', no: 1, soal: '「きれい」は ___ 形容詞です。', arti: 'Kata "kirei" adalah kata sifat な.', jawaban: 'な', pilihan: ['な', 'い', 'の', 'です'] },
  { id: 'b8-c1-2', grup: 'catatan', no: 1, soal: '「高い」は ___ 形容詞です。', arti: 'Kata "takai" adalah kata sifat い.', jawaban: 'い', pilihan: ['い', 'な', 'の', 'です'] },
  { id: 'b8-c1-3', grup: 'catatan', no: 1, soal: '「静か」は ___ 形容詞です。', arti: 'Kata "shizuka" adalah kata sifat な.', jawaban: 'な', pilihan: ['な', 'い', 'の', 'です'] },
  { id: 'b8-c1-4', grup: 'catatan', no: 1, soal: '「おいしい」は ___ 形容詞です。', arti: 'Kata "oishii" adalah kata sifat い.', jawaban: 'い', pilihan: ['い', 'な', 'の', 'です'] },
  { id: 'b8-c1-5', grup: 'catatan', no: 1, soal: '「ハンサム」は ___ 形容詞です。', arti: 'Kata "hansamu" adalah kata sifat な.', jawaban: 'な', pilihan: ['な', 'い', 'の', 'です'] },

  // ── Catatan 2 · KB は KSな［な］です / KB は KSい（～い）です ────────
  { id: 'b8-c2-1', grup: 'catatan', no: 2, soal: 'ここは とても 静か___。', arti: 'Di sini sangat sunyi.', jawaban: 'です', pilihan: ['です', 'な', 'くです', 'いです'] },
  { id: 'b8-c2-2', grup: 'catatan', no: 2, soal: 'この 町は にぎやか___。', arti: 'Kota ini ramai.', jawaban: 'です', pilihan: ['です', 'な', 'くです', 'いです'] },
  { id: 'b8-c2-3', grup: 'catatan', no: 2, soal: '日本語は おもしろい___。', arti: 'Bahasa Jepang menarik.', jawaban: 'です', pilihan: ['です', 'な', 'くです', 'でした'] },
  { id: 'b8-c2-4', grup: 'catatan', no: 2, soal: 'あの 店は 有名___。', arti: 'Toko itu terkenal.', jawaban: 'です', pilihan: ['です', 'な', 'いくです', 'でした'] },
  { id: 'b8-c2-5', grup: 'catatan', no: 2, soal: 'これは とても すてき___ かばんですね。', arti: 'Ini tas yang sangat bagus ya.', jawaban: 'な', pilihan: ['な', 'い', 'の', 'です'] },

  // ── Catatan 3 · Negatif Kata Sifatな ───────────────────────────────
  { id: 'b8-c3-1', grup: 'catatan', no: 3, soal: 'あそこは 静か___ ありません。', arti: 'Di sana tidak sunyi.', jawaban: 'じゃ', pilihan: ['じゃ', 'では', 'の', 'に'] },
  { id: 'b8-c3-2', grup: 'catatan', no: 3, soal: 'さくら大学は 有名では ___。', arti: 'Universitas Sakura tidak terkenal.', jawaban: 'ありません', pilihan: ['ありません', 'あります', 'です', 'くないです'] },
  { id: 'b8-c3-3', grup: 'catatan', no: 3, soal: 'この 町は にぎやかじゃ ___。', arti: 'Kota ini tidak ramai.', jawaban: 'ありません', pilihan: ['ありません', 'あります', 'くないです', 'なかったです'] },
  { id: 'b8-c3-4', grup: 'catatan', no: 3, soal: 'さくら大学は あまり 有名な 大学じゃ ___。', arti: 'Universitas Sakura bukan universitas yang begitu terkenal.', jawaban: 'ありません', pilihan: ['ありません', 'あります', 'くないです', 'です'] },
  { id: 'b8-c3-5', grup: 'catatan', no: 3, soal: 'わたしの 部屋は きれいじゃ ___。', arti: 'Kamar saya tidak bersih.', jawaban: 'ありません', pilihan: ['ありません', 'あります', 'くないです', 'でした'] },

  // ── Catatan 4 · Negatif Kata Sifatい ───────────────────────────────
  { id: 'b8-c4-1', grup: 'catatan', no: 4, soal: 'この 本は おもしろ___です。', arti: 'Buku ini tidak menarik.', jawaban: 'くない', pilihan: ['くない', 'い', 'くなく', 'く'] },
  { id: 'b8-c4-2', grup: 'catatan', no: 4, soal: 'ペキンは あまり 寒く___です。', arti: 'Beijing tidak begitu dingin.', jawaban: 'ない', pilihan: ['ない', 'ないです', 'なく', 'くない'] },
  { id: 'b8-c4-3', grup: 'catatan', no: 4, soal: 'この かばんは 安く___です。', arti: 'Tas ini tidak murah.', jawaban: 'ない', pilihan: ['ない', 'ないです', 'なく', 'ありません'] },
  { id: 'b8-c4-4', grup: 'catatan', no: 4, soal: 'きょうは 忙しく___です。', arti: 'Hari ini tidak sibuk.', jawaban: 'ない', pilihan: ['ない', 'ないです', 'なく', 'い'] },
  { id: 'b8-c4-5', grup: 'catatan', no: 4, soal: 'この 映画は よ___です。', arti: 'Film ini tidak bagus.', jawaban: 'くない', pilihan: ['くない', 'い', 'くなく', 'く'] },

  // ── Catatan 5 · Cara membuat kalimat tanya ─────────────────────────
  { id: 'b8-c5-1', grup: 'catatan', no: 5, soal: 'ペキンは 寒いです___。……はい、寒いです。', arti: 'Apakah Beijing dingin? ……Ya, dingin.', jawaban: 'か', pilihan: ['か', 'ね', 'よ', 'が'] },
  { id: 'b8-c5-2', grup: 'catatan', no: 5, soal: '奈良公園は にぎやかです___。……いいえ、にぎやかじゃ ありません。', arti: 'Apakah Taman Nara ramai? ……Tidak, tidak ramai.', jawaban: 'か', pilihan: ['か', 'ね', 'よ', 'が'] },
  { id: 'b8-c5-3', grup: 'catatan', no: 5, soal: 'A：大阪は にぎやかですか。B：はい、___。', arti: 'A：Apakah Osaka ramai? B：Ya, ramai.', jawaban: 'にぎやかです', pilihan: ['にぎやかです', 'そうです', 'にぎやかくないです', 'にぎやかなです'] },
  { id: 'b8-c5-4', grup: 'catatan', no: 5, soal: 'A：さくら大学は 有名ですか。B：いいえ、___。', arti: 'A：Apakah Universitas Sakura terkenal? B：Tidak, tidak terkenal.', jawaban: '有名じゃ ありません', pilihan: ['有名じゃ ありません', 'そうじゃ ありません', '有名くないです', '有名ないです'] },
  { id: 'b8-c5-5', grup: 'catatan', no: 5, soal: 'A：富士山は 高いですか。B：はい、___。', arti: 'A：Apakah Gunung Fuji tinggi? B：Ya, tinggi.', jawaban: '高いです', pilihan: ['高いです', 'そうです', '高くないです', '高いないです'] },

  // ── Catatan 6 · KSな な KB / KSい（～い） KB ───────────────────────
  { id: 'b8-c6-1', grup: 'catatan', no: 6, soal: 'ミラーさんは 親切___ 人です。', arti: 'Sdr. Miller orang yang baik hati.', jawaban: 'な', pilihan: ['な', 'い', 'の', 'です'] },
  { id: 'b8-c6-2', grup: 'catatan', no: 6, soal: '富士山は 有名___ 山です。', arti: 'Gunung Fuji gunung yang terkenal.', jawaban: 'な', pilihan: ['な', 'い', 'の', 'です'] },
  { id: 'b8-c6-3', grup: 'catatan', no: 6, soal: 'きれい___ 花ですね。', arti: 'Bunga yang indah ya.', jawaban: 'な', pilihan: ['な', 'い', 'の', 'です'] },
  { id: 'b8-c6-4', grup: 'catatan', no: 6, soal: 'ここは ___ 公園です。', arti: 'Ini taman yang besar.', jawaban: '大きい', pilihan: ['大きい', '大きな', '大きの', '大きく'] },
  { id: 'b8-c6-5', grup: 'catatan', no: 6, soal: 'これは ___ 映画です。', arti: 'Ini film yang menarik.', jawaban: 'おもしろい', pilihan: ['おもしろい', 'おもしろな', 'おもしろの', 'おもしろく'] },

  // ── Catatan 7 · ～が、～ ───────────────────────────────────────────
  { id: 'b8-c7-1', grup: 'catatan', no: 7, soal: '日本の 食べ物は おいしいです___、高いです。', arti: 'Makanan Jepang enak, tetapi mahal.', jawaban: 'が', pilihan: ['が', 'から', 'そして', 'か'] },
  { id: 'b8-c7-2', grup: 'catatan', no: 7, soal: 'この 部屋は 古いです___、きれいです。', arti: 'Kamar ini tua, tetapi bersih.', jawaban: 'が', pilihan: ['が', 'から', 'そして', 'か'] },
  { id: 'b8-c7-3', grup: 'catatan', no: 7, soal: '大学の 寮は 古いです___、便利です。', arti: 'Asrama universitas tua, tetapi praktis.', jawaban: 'が', pilihan: ['が', 'から', 'そして', 'か'] },
  { id: 'b8-c7-4', grup: 'catatan', no: 7, soal: 'この 店は 小さいです___、にぎやかです。', arti: 'Toko ini kecil, tetapi ramai.', jawaban: 'が', pilihan: ['が', 'から', 'そして', 'か'] },
  { id: 'b8-c7-5', grup: 'catatan', no: 7, soal: '日本語は 難しいです___、おもしろいです。', arti: 'Bahasa Jepang sulit, tetapi menarik.', jawaban: 'が', pilihan: ['が', 'から', 'そして', 'か'] },

  // ── Catatan 8 · とても / あまり ────────────────────────────────────
  { id: 'b8-c8-1', grup: 'catatan', no: 8, soal: 'ペキンは ___ 寒いです。', arti: 'Beijing sangat dingin.', jawaban: 'とても', pilihan: ['とても', 'あまり', 'たくさん', '少し'] },
  { id: 'b8-c8-2', grup: 'catatan', no: 8, soal: 'これは ___ 有名な 映画です。', arti: 'Ini film yang sangat terkenal.', jawaban: 'とても', pilihan: ['とても', 'あまり', 'たくさん', '少し'] },
  { id: 'b8-c8-3', grup: 'catatan', no: 8, soal: 'シャンハイは ___ 寒くないです。', arti: 'Shanghai tidak begitu dingin.', jawaban: 'あまり', pilihan: ['あまり', 'とても', 'たくさん', 'よく'] },
  { id: 'b8-c8-4', grup: 'catatan', no: 8, soal: 'さくら大学は ___ 有名な 大学じゃ ありません。', arti: 'Universitas Sakura bukan universitas yang begitu terkenal.', jawaban: 'あまり', pilihan: ['あまり', 'とても', 'たくさん', 'よく'] },
  { id: 'b8-c8-5', grup: 'catatan', no: 8, soal: 'きょうは ___ 忙しくないです。', arti: 'Hari ini tidak begitu sibuk.', jawaban: 'あまり', pilihan: ['あまり', 'とても', 'たくさん', 'よく'] },

  // ── Catatan 9 · Kata Benda は どうですか ───────────────────────────
  { id: 'b8-c9-1', grup: 'catatan', no: 9, soal: '日本の 生活は どう___。……楽しいです。', arti: 'Bagaimana kehidupan di Jepang? ……Menyenangkan.', jawaban: 'ですか', pilihan: ['ですか', 'でしたか', 'ですね', 'です'] },
  { id: 'b8-c9-2', grup: 'catatan', no: 9, soal: '大学の 寮は ___ですか。……古いですが、便利です。', arti: 'Bagaimana asrama universitas? ……Tua, tetapi praktis.', jawaban: 'どう', pilihan: ['どう', 'どんな', 'どれ', 'どこ'] },
  { id: 'b8-c9-3', grup: 'catatan', no: 9, soal: 'A：お仕事は どうですか。B：とても ___。', arti: 'A：Bagaimana pekerjaan Anda? B：Sangat sibuk.', jawaban: '忙しいです', pilihan: ['忙しいです', '忙しくないです', 'どうです', 'そうです'] },
  { id: 'b8-c9-4', grup: 'catatan', no: 9, soal: 'A：日本語の 勉強は どうですか。B：とても ___。', arti: 'A：Bagaimana belajar bahasa Jepang? B：Sangat menarik.', jawaban: 'おもしろいです', pilihan: ['おもしろいです', 'おもしろくないです', 'どうです', 'そうです'] },
  { id: 'b8-c9-5', grup: 'catatan', no: 9, soal: 'A：京都は どうですか。B：とても ___ 町です。', arti: 'A：Bagaimana Kyoto? B：Kota yang sangat bagus.', jawaban: 'きれいな', pilihan: ['きれいな', 'きれい', 'きれいく', 'きれいの'] },

  // ── Catatan 10 · Kata Benda1 は どんな Kata Benda2ですか ────────────
  { id: 'b8-c10-1', grup: 'catatan', no: 10, soal: '奈良は ___ 町ですか。……古い 町です。', arti: 'Nara kota yang bagaimana? ……Kota yang tua.', jawaban: 'どんな', pilihan: ['どんな', 'どう', 'どれ', 'どこ'] },
  { id: 'b8-c10-2', grup: 'catatan', no: 10, soal: 'A：奈良は どんな 町ですか。B：___ 町です。', arti: 'A：Nara kota yang bagaimana? B：Kota yang tua.', jawaban: '古い', pilihan: ['古い', '古な', '古の', '古く'] },
  { id: 'b8-c10-3', grup: 'catatan', no: 10, soal: '大阪は ___ 町ですか。……にぎやかな 町です。', arti: 'Osaka kota yang bagaimana? ……Kota yang ramai.', jawaban: 'どんな', pilihan: ['どんな', 'どう', 'どれ', 'どこ'] },
  { id: 'b8-c10-4', grup: 'catatan', no: 10, soal: 'A：どんな 所ですか。B：静か___ 所です。', arti: 'A：Tempat yang bagaimana? B：Tempat yang sunyi.', jawaban: 'な', pilihan: ['な', 'い', 'の', 'です'] },
  { id: 'b8-c10-5', grup: 'catatan', no: 10, soal: 'A：どんな 映画を 見ましたか。B：とても ___ 映画を 見ました。', arti: 'A：Menonton film yang bagaimana? B：Menonton film yang sangat menarik.', jawaban: 'おもしろい', pilihan: ['おもしろい', 'おもしろな', 'おもしろの', 'おもしろく'] },

  // ── Catatan 11 · そうですね ────────────────────────────────────────
  { id: 'b8-c11-1', grup: 'catatan', no: 11, soal: 'A：お仕事は どうですか。B：___。忙しいですが、おもしろいです。', arti: 'A：Bagaimana pekerjaan Anda? B：Bagaimana ya. Sibuk, tetapi menarik.', jawaban: 'そうですね', pilihan: ['そうですね', 'そうです', 'そうですか', 'いいですね'] },
  { id: 'b8-c11-2', grup: 'catatan', no: 11, soal: 'A：日本の 生活は どうですか。B：___。楽しいですが、忙しいです。', arti: 'A：Bagaimana kehidupan di Jepang? B：Bagaimana ya. Menyenangkan, tetapi sibuk.', jawaban: 'そうですね', pilihan: ['そうですね', 'そうです', 'そうですか', 'いいですね'] },
  { id: 'b8-c11-3', grup: 'catatan', no: 11, soal: 'A：きょうは 寒いですね。B：___。寒いですね。', arti: 'A：Hari ini dingin ya. B：Ya, dingin ya.', jawaban: 'そうですね', pilihan: ['そうですね', 'そうです', 'そうですか', 'いいですね'] },
  { id: 'b8-c11-4', grup: 'catatan', no: 11, soal: 'A：大学の 寮は どうですか。B：___。古いですが、便利です。', arti: 'A：Bagaimana asrama universitas? B：Bagaimana ya. Tua, tetapi praktis.', jawaban: 'そうですね', pilihan: ['そうですね', 'そうです', 'そうですか', 'いいですね'] },
  { id: 'b8-c11-5', grup: 'catatan', no: 11, soal: 'A：日本語の 勉強は ___ですか。B：そうですね。難しいですが、おもしろいです。', arti: 'A：Bagaimana belajar bahasa Jepang? B：Bagaimana ya. Sulit, tetapi menarik.', jawaban: 'どう', pilihan: ['どう', 'どんな', 'どれ', 'どこ'] },
]
