import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 22 — tepat 5 soal per pola (4 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Benda yang ～ (KK bentuk biasa menerangkan KB) ────
  { id: 'b22-1-1', grup: 'bunpou', no: 1, soal: 'これは ミラーさん___ 作った ケーキです。', arti: 'Ini kue yang dibuat oleh Sdr. Miller.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b22-1-2', grup: 'bunpou', no: 1, soal: 'これは 万里の 長城で ___ 写真です。', arti: 'Ini foto yang saya ambil di Tembok Besar Cina.', jawaban: '撮った', pilihan: ['撮った', '撮る', '撮りました', '撮って'] },
  { id: 'b22-1-3', grup: 'bunpou', no: 1, soal: 'わたしは カリナさんが ___ 絵が 好きです。', arti: 'Saya suka lukisan yang dilukis oleh Sdr. Karina.', jawaban: 'かいた', pilihan: ['かいた', 'かく', 'かきます', 'かいて'] },
  { id: 'b22-1-4', grup: 'bunpou', no: 1, soal: 'きのう ___ 傘を なくしました。', arti: 'Saya kehilangan payung yang saya beli kemarin.', jawaban: '買った', pilihan: ['買った', '買う', '買います', '買って'] },
  { id: 'b22-1-5', grup: 'bunpou', no: 1, soal: 'A：どんな うちが 欲しいですか。B：広い 庭が ___ うちが 欲しいです。', arti: 'A：Ingin punya rumah yang bagaimana? B：Ingin punya rumah yang berhalaman luas.', jawaban: 'ある', pilihan: ['ある', 'あった', 'あります', 'あって'] },

  // ── 文型 2 · あそこに いる 人は ミラーさんです（～ている + KB）────
  { id: 'b22-2-1', grup: 'bunpou', no: 2, soal: 'あそこに ___ 人は ミラーさんです。', arti: 'Orang yang ada di sana adalah Sdr. Miller.', jawaban: 'いる', pilihan: ['いる', 'いた', 'います', 'いて'] },
  { id: 'b22-2-2', grup: 'bunpou', no: 2, soal: 'マリアさんは あの 眼鏡を ___ 人です。', arti: 'Sdr. Maria adalah orang yang memakai kacamata itu.', jawaban: 'かけて いる', pilihan: ['かけて いる', 'かける', 'かけた', 'かけます'] },
  { id: 'b22-2-3', grup: 'bunpou', no: 2, soal: 'あの 赤い 服を ___ 人は だれですか。', arti: 'Siapakah orang yang memakai baju merah itu?', jawaban: '着て いる', pilihan: ['着て いる', '着る', '着た', '着ます'] },
  { id: 'b22-2-4', grup: 'bunpou', no: 2, soal: '銀行で ___ 人は 山田さんです。', arti: 'Orang yang bekerja di bank adalah Sdr. Yamada.', jawaban: '働いて いる', pilihan: ['働いて いる', '働く', '働いた', '働きます'] },
  { id: 'b22-2-5', grup: 'bunpou', no: 2, soal: 'あの 電話を ___ 人は 田中さんです。', arti: 'Orang yang sedang menelepon itu adalah Sdr. Tanaka.', jawaban: 'して いる', pilihan: ['して いる', 'する', 'した', 'します'] },

  // ── 文型 3 · (Saya) lupa kosa kata yang telah dipelajari kemarin ──
  { id: 'b22-3-1', grup: 'bunpou', no: 3, soal: 'きのう ___ ことばを 忘れました。', arti: '(Saya) lupa kosa kata yang telah dipelajari kemarin.', jawaban: '習った', pilihan: ['習った', '習う', '習います', '習って'] },
  { id: 'b22-3-2', grup: 'bunpou', no: 3, soal: '先週 銀座で ___ 映画は とても 面白かったです。', arti: 'Film yang saya tonton di Ginza minggu lalu sangat menarik.', jawaban: '見た', pilihan: ['見た', '見る', '見ます', '見て'] },
  { id: 'b22-3-3', grup: 'bunpou', no: 3, soal: '日本で ___ 写真を 見せて ください。', arti: 'Silakan perlihatkan foto yang diambil di Jepang.', jawaban: '撮った', pilihan: ['撮った', '撮る', '撮ります', '撮って'] },
  { id: 'b22-3-4', grup: 'bunpou', no: 3, soal: 'あの 店で ___ ケーキは おいしいです。', arti: 'Kue yang dibeli di toko itu enak.', jawaban: '買った', pilihan: ['買った', '買う', '買います', '買って'] },
  { id: 'b22-3-5', grup: 'bunpou', no: 3, soal: 'A：その 本は 何ですか。B：きのう 図書館で ___ 本です。', arti: 'A：Buku itu apa? B：Buku yang saya pinjam di perpustakaan kemarin.', jawaban: '借りた', pilihan: ['借りた', '借りる', '借ります', '借りて'] },

  // ── 文型 4 · Tidak ada waktu untuk pergi belanja（KK kamus + 時間）──
  { id: 'b22-4-1', grup: 'bunpou', no: 4, soal: '買い物に ___ 時間が ありません。', arti: 'Tidak ada waktu untuk pergi belanja.', jawaban: '行く', pilihan: ['行く', '行った', '行きます', '行って'] },
  { id: 'b22-4-2', grup: 'bunpou', no: 4, soal: 'わたしは 朝ごはんを ___ 時間が ありません。', arti: 'Saya tidak ada waktu makan pagi.', jawaban: '食べる', pilihan: ['食べる', '食べた', '食べます', '食べて'] },
  { id: 'b22-4-3', grup: 'bunpou', no: 4, soal: 'わたしは 友達と 映画を ___ 約束が あります。', arti: 'Saya ada janji dengan teman untuk menonton film.', jawaban: '見る', pilihan: ['見る', '見た', '見ます', '見て'] },
  { id: 'b22-4-4', grup: 'bunpou', no: 4, soal: 'きょうは 市役所へ ___ 用事が あります。', arti: 'Hari ini ada urusan pergi ke kantor wali kota.', jawaban: '行く', pilihan: ['行く', '行った', '行きます', '行って'] },
  { id: 'b22-4-5', grup: 'bunpou', no: 4, soal: 'A：今晩 飲みに 行きませんか。B：すみません。今晩は 友達に ___ 約束が あります。', arti: 'A：Bagaimana kalau pergi minum malam ini? B：Maaf. Malam ini ada janji bertemu teman.', jawaban: '会う', pilihan: ['会う', '会った', '会います', '会って'] },

  // ── Catatan 1 · Anak Kalimat ──────────────────────────────────────
  { id: 'b22-c1-1', grup: 'catatan', no: 1, soal: 'あれは きれい___ うちです。', arti: 'Itu rumah yang indah.', jawaban: 'な', pilihan: ['な', 'の', 'い', 'だ'] },
  { id: 'b22-c1-2', grup: 'catatan', no: 1, soal: 'これは ミラーさん___ 住んで いた うちです。', arti: 'Ini adalah rumah yang dihuni Sdr. Miller.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'の'] },
  { id: 'b22-c1-3', grup: 'catatan', no: 1, soal: 'あの 人は 目___ 大きい 人です。', arti: 'Orang itu orang yang matanya besar.', jawaban: 'が', pilihan: ['が', 'を', 'は', 'に'] },
  { id: 'b22-c1-4', grup: 'catatan', no: 1, soal: 'わたしは カリナさんが ___ 絵が 好きです。', arti: 'Saya suka lukisan yang dilukis Sdr. Karina.', jawaban: 'かいた', pilihan: ['かいた', 'かく', 'かきます', 'かいて'] },
  { id: 'b22-c1-5', grup: 'catatan', no: 1, soal: '「あなたは」彼が ___ 所を 知って いますか。', arti: 'Apakah Anda tahu tempat dia lahir?', jawaban: '生まれた', pilihan: ['生まれた', '生まれる', '生まれます', '生まれて'] },

  // ── Catatan 2 · Kata Kerja Bentuk Kamus 時間／約束／用事 ──────────
  { id: 'b22-c2-1', grup: 'catatan', no: 2, soal: 'わたしは 本を ___ 時間が ありません。', arti: 'Saya tidak ada waktu membaca buku.', jawaban: '読む', pilihan: ['読む', '読んだ', '読みます', '読んで'] },
  { id: 'b22-c2-2', grup: 'catatan', no: 2, soal: 'あしたは 友達と 映画を 見る ___が あります。', arti: 'Besok ada janji menonton film dengan teman.', jawaban: '約束', pilihan: ['約束', '時間', '用事', '仕事'] },
  { id: 'b22-c2-3', grup: 'catatan', no: 2, soal: 'あしたは 病院へ 行く ___が あります。', arti: 'Besok ada urusan pergi ke rumah sakit.', jawaban: '用事', pilihan: ['用事', '時間', '約束', '仕事'] },
  { id: 'b22-c2-4', grup: 'catatan', no: 2, soal: 'わたしは 毎日 日本語を ___ 時間が あります。', arti: 'Setiap hari saya ada waktu belajar bahasa Jepang.', jawaban: '勉強する', pilihan: ['勉強する', '勉強した', '勉強します', '勉強して'] },
  { id: 'b22-c2-5', grup: 'catatan', no: 2, soal: '毎朝 ニュースを ___ 時間が ありますか。', arti: 'Apakah Anda ada waktu menonton berita setiap pagi?', jawaban: '見る', pilihan: ['見る', '見た', '見ます', '見て'] },

  // ── Catatan 3 · Kata Kerja (Bentuk ます) ましょうか ────────────────
  { id: 'b22-c3-1', grup: 'catatan', no: 3, soal: 'この 部屋、きょう 見る ことが できますか。……ええ。今から ___。', arti: 'Apakah kamar ini dapat saya lihat hari ini? ……Ya. Bagaimana kalau pergi sekarang?', jawaban: '行きましょうか', pilihan: ['行きましょうか', '行きましょう', '行きませんか', '行きますか'] },
  { id: 'b22-c3-2', grup: 'catatan', no: 3, soal: 'A：荷物が 重いですね。B：___。……お願いします。', arti: 'A：Barangnya berat ya. B：Bagaimana kalau saya bawakan? ……Tolong.', jawaban: '持ちましょうか', pilihan: ['持ちましょうか', '持ちましょう', '持ちませんか', '持ちますか'] },
  { id: 'b22-c3-3', grup: 'catatan', no: 3, soal: '手伝い___。……ありがとう ございます。お願いします。', arti: 'Bagaimana kalau saya bantu? ……Terima kasih. Tolong.', jawaban: 'ましょうか', pilihan: ['ましょうか', 'ましょう', 'ませんか', 'ますか'] },
  { id: 'b22-c3-4', grup: 'catatan', no: 3, soal: 'A：あした 京都へ 行きます。B：じゃ、わたしも いっしょに ___。', arti: 'A：Besok pergi ke Kyoto. B：Kalau begitu, bagaimana kalau saya ikut juga?', jawaban: '行きましょうか', pilihan: ['行きましょうか', '行きましょう', '行きませんか', '行きますか'] },
  { id: 'b22-c3-5', grup: 'catatan', no: 3, soal: 'A：コーヒーを 飲みますか。B：ええ、___。', arti: 'A：Minum kopi? B：Ya, bagaimana kalau kita minum?', jawaban: '飲みましょうか', pilihan: ['飲みましょうか', '飲みましょう', '飲みませんか', '飲みますか'] },
]
