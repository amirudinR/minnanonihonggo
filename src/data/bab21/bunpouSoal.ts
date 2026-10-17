import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 21 — tepat 5 soal per pola (2 pola 文型 + 7 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · ～と 思います ──────────────────────────────────────────
  { id: 'b21-1-1', grup: 'bunpou', no: 1, soal: 'あした 雨が 降る___ 思います。', arti: 'Saya kira besok hujan turun.', jawaban: 'と', pilihan: ['と', 'が', 'を', 'に'] },
  { id: 'b21-1-2', grup: 'bunpou', no: 1, soal: '日本に ついて どう 思いますか。……物価が 高い___ 思います。', arti: 'Mengenai Jepang, menurut Anda bagaimana? ……Saya kira harga barangnya mahal.', jawaban: 'と', pilihan: ['と', 'は', 'が', 'を'] },
  { id: 'b21-1-3', grup: 'bunpou', no: 1, soal: 'A：ミラーさんは どこですか。B：会議室に ___ 思います。', arti: 'A：Di mana Sdr. Miller? B：Saya kira di ruang rapat.', jawaban: 'いると', pilihan: ['いると', 'いるが', 'いるを', 'いるに'] },
  { id: 'b21-1-4', grup: 'bunpou', no: 1, soal: 'テレサちゃんは もう 寝た___。', arti: 'Saya kira Teresa sudah tidur.', jawaban: 'と思います', pilihan: ['と思います', 'と言います', 'と聞きます', 'と知ります'] },
  { id: 'b21-1-5', grup: 'bunpou', no: 1, soal: 'A：あした 雨が 降りますか。B：ええ、___ 思います。', arti: 'A：Besok turun hujan? B：Ya, saya kira turun.', jawaban: '降ると', pilihan: ['降ると', '降るが', '降るを', '降るに'] },

  // ── 文型 2 · ～と 言いました ───────────────────────────────────────
  { id: 'b21-2-1', grup: 'bunpou', no: 2, soal: '首相は 来月 アメリカへ 行く___ 言いました。', arti: 'Perdana menteri mengatakan bahwa bulan depan pergi ke Amerika.', jawaban: 'と', pilihan: ['と', 'が', 'を', 'に'] },
  { id: 'b21-2-2', grup: 'bunpou', no: 2, soal: 'ミラーさんは 来週 東京へ ___ 言いました。', arti: 'Sdr. Miller mengatakan bahwa minggu depan dinas ke Tokyo.', jawaban: '出張すると', pilihan: ['出張すると', '出張するが', '出張するを', '出張するに'] },
  { id: 'b21-2-3', grup: 'bunpou', no: 2, soal: '父に 留学したい___ 言いました。', arti: 'Saya berkata kepada ayah bahwa ingin belajar di luar negeri.', jawaban: 'と', pilihan: ['と', 'を', 'が', 'へ'] },
  { id: 'b21-2-4', grup: 'bunpou', no: 2, soal: '先生___ 「おはよう ございます」と 言いました。', arti: 'Mengucapkan "Selamat pagi" kepada guru.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'へ'] },
  { id: 'b21-2-5', grup: 'bunpou', no: 2, soal: '母は あした 雨が 降ると ___。', arti: 'Ibu mengatakan bahwa besok hujan turun.', jawaban: '言いました', pilihan: ['言いました', '思いました', '聞きました', '知りました'] },

  // ── Catatan 1 · Bentuk Biasa と 思います ──────────────────────────
  { id: 'b21-c1-1', grup: 'catatan', no: 1, soal: 'テレサちゃんは もう 寝た___ 思います。', arti: 'Saya kira Teresa sudah tidur.', jawaban: 'と', pilihan: ['と', 'が', 'を', 'に'] },
  { id: 'b21-c1-2', grup: 'catatan', no: 1, soal: 'A：ミラーさんは この ニュースを 知って いますか。B：いいえ、___ 思います。', arti: 'A：Apakah Sdr. Miller tahu berita ini? B：Tidak, saya kira dia tidak tahu.', jawaban: '知らないと', pilihan: ['知らないと', '知るを', '知らないが', '知らないに'] },
  { id: 'b21-c1-3', grup: 'catatan', no: 1, soal: 'A：新しい 空港に ついて どう 思いますか。B：きれいですが、ちょっと 交通が 不便だ___ 思います。', arti: 'A：Mengenai bandara baru, menurut Anda bagaimana? B：Bersih, tetapi lalu lintasnya kurang praktis.', jawaban: 'と', pilihan: ['と', 'を', 'が', 'に'] },
  { id: 'b21-c1-4', grup: 'catatan', no: 1, soal: 'A：ケータイは 便利ですね。B：わたしも そう ___。', arti: 'A：HP itu praktis ya. B：Saya rasa begitu juga.', jawaban: '思います', pilihan: ['思います', '言います', '聞きます', '知ります'] },
  { id: 'b21-c1-5', grup: 'catatan', no: 1, soal: 'A：あした パーティーが ありますね。B：ええ、雨が 降らない___ 思います。', arti: 'A：Besok ada pesta ya. B：Ya, saya kira tidak akan hujan.', jawaban: 'と', pilihan: ['と', 'が', 'を', 'に'] },

  // ── Catatan 2 · "Kalimat" Bentuk Biasa と 言います ────────────────
  { id: 'b21-c2-1', grup: 'catatan', no: 2, soal: '寝る まえに、「お休みなさい」___ 言いました。', arti: 'Sebelum tidur mengucapkan "Selamat tidur".', jawaban: 'と', pilihan: ['と', 'を', 'が', 'に'] },
  { id: 'b21-c2-2', grup: 'catatan', no: 2, soal: 'A：田中さんは 何と 言いましたか。B：「あした 行きます」___。', arti: 'A：Sdr. Tanaka berkata apa? B：Berkata "Besok pergi".', jawaban: 'と言いました', pilihan: ['と言いました', 'と思いました', 'と聞きました', 'と知りました'] },
  { id: 'b21-c2-3', grup: 'catatan', no: 2, soal: '父___ 留学したいと 言いました。', arti: 'Saya berkata kepada ayah bahwa ingin belajar di luar negeri.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'で'] },
  { id: 'b21-c2-4', grup: 'catatan', no: 2, soal: 'A：部長は 何と 言いましたか。B：会議は 3時からだと ___。', arti: 'A：Kepala bagian berkata apa? B：(Beliau) berkata bahwa rapat mulai pukul 3.', jawaban: '言いました', pilihan: ['言いました', '思いました', '聞きました', '知りました'] },
  { id: 'b21-c2-5', grup: 'catatan', no: 2, soal: 'ミラーさんは 来週 東京へ 出張する___ 言いました。', arti: 'Sdr. Miller mengatakan bahwa minggu depan dinas ke Tokyo.', jawaban: 'と', pilihan: ['と', 'を', 'が', 'に'] },

  // ── Catatan 3 · ～でしょう？ ───────────────────────────────────────
  { id: 'b21-c3-1', grup: 'catatan', no: 3, soal: 'あした パーティーに 行く___？……ええ、行きます。', arti: 'Besok pergi ke pesta, bukan? ……Ya, pergi.', jawaban: 'でしょう', pilihan: ['でしょう', 'ですか', 'ませんか', 'ましょう'] },
  { id: 'b21-c3-2', grup: 'catatan', no: 3, soal: '北海道は 寒かった___？……いいえ、そんなに 寒くなかったです。', arti: 'Hokkaido dingin, bukan? ……Tidak, tidak begitu dingin.', jawaban: 'でしょう', pilihan: ['でしょう', 'ですか', 'でした', 'ましょう'] },
  { id: 'b21-c3-3', grup: 'catatan', no: 3, soal: 'A：あした 京都へ 行きますね。B：京都は 寒い___？', arti: 'A：Besok pergi ke Kyoto ya. B：Kyoto dingin, bukan?', jawaban: 'でしょう', pilihan: ['でしょう', 'ですか', 'ましょう', 'ませんか'] },
  { id: 'b21-c3-4', grup: 'catatan', no: 3, soal: '7月に 京都で お祭りが ある___？……ええ、あります。', arti: 'Pada bulan Juli ada perayaan di Kyoto, bukan? ……Ya, ada.', jawaban: 'でしょう', pilihan: ['でしょう', 'ですか', 'ましょう', 'ませんか'] },
  { id: 'b21-c3-5', grup: 'catatan', no: 3, soal: 'A：田中さんは 学生ですよ。B：田中さんは 学生___？', arti: 'A：Sdr. Tanaka seorang pelajar. B：Sdr. Tanaka pelajar, bukan?', jawaban: 'でしょう', pilihan: ['でしょう', 'ですか', 'でした', 'ましょう'] },

  // ── Catatan 4 · Kata Benda(tempat) で Kata Benda が あります ───────
  { id: 'b21-c4-1', grup: 'catatan', no: 4, soal: '東京___ 日本と ブラジルの サッカーの 試合が あります。', arti: 'Di Tokyo diadakan pertandingan sepak bola antara Jepang dan Brasil.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },
  { id: 'b21-c4-2', grup: 'catatan', no: 4, soal: '7月に 京都___ お祭りが あります。', arti: 'Pada bulan Juli di Kyoto ada perayaan.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'が'] },
  { id: 'b21-c4-3', grup: 'catatan', no: 4, soal: 'あした 大学___ 試験が あります。', arti: 'Besok di universitas ada ujian.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },
  { id: 'b21-c4-4', grup: 'catatan', no: 4, soal: 'A：どこで 試合が ありますか。B：大阪___ あります。', arti: 'A：Di mana ada pertandingan? B：Diadakan di Osaka.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'と'] },
  { id: 'b21-c4-5', grup: 'catatan', no: 4, soal: '日曜日に 公園___ コンサートが あります。', arti: 'Pada hari Minggu di taman ada konser.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },

  // ── Catatan 5 · Kata Benda(adegan) で ─────────────────────────────
  { id: 'b21-c5-1', grup: 'catatan', no: 5, soal: '会議___ 何か 意見を 言いましたか。', arti: 'Di dalam rapat, apakah mengutarakan suatu pendapat?', jawaban: 'で', pilihan: ['で', 'に', 'を', 'が'] },
  { id: 'b21-c5-2', grup: 'catatan', no: 5, soal: 'パーティー___ 田中さんに 会いました。', arti: 'Di pesta bertemu Sdr. Tanaka.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },
  { id: 'b21-c5-3', grup: 'catatan', no: 5, soal: 'クラス___ 日本語で 話します。', arti: 'Di kelas berbicara dengan bahasa Jepang.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'が'] },
  { id: 'b21-c5-4', grup: 'catatan', no: 5, soal: '会議___ むだな コピーが 多いと 言いました。', arti: 'Di dalam rapat saya berkata bahwa fotokopian yang sia-sia banyak.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'と'] },
  { id: 'b21-c5-5', grup: 'catatan', no: 5, soal: 'パーティー___ 歌を 歌いました。', arti: 'Di pesta menyanyikan lagu.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'が'] },

  // ── Catatan 6 · Kata Benda でも Kata Kerja ────────────────────────
  { id: 'b21-c6-1', grup: 'catatan', no: 6, soal: 'ちょっと ビール___ 飲みませんか。', arti: 'Bagaimana kalau minum bir, atau…?', jawaban: 'でも', pilihan: ['でも', 'ても', 'では', 'にも'] },
  { id: 'b21-c6-2', grup: 'catatan', no: 6, soal: 'お茶___ 飲みませんか。', arti: 'Bagaimana kalau minum teh?', jawaban: 'でも', pilihan: ['でも', 'ても', 'では', 'から'] },
  { id: 'b21-c6-3', grup: 'catatan', no: 6, soal: 'A：ちょっと 休みませんか。B：じゃ、コーヒー___ 飲みましょうか。', arti: 'A：Bagaimana kalau istirahat sebentar? B：Kalau begitu, bagaimana kalau minum kopi?', jawaban: 'でも', pilihan: ['でも', 'ても', 'では', 'まで'] },
  { id: 'b21-c6-4', grup: 'catatan', no: 6, soal: 'ひまだったら、映画___ 見ませんか。', arti: 'Kalau luang, bagaimana kalau menonton film?', jawaban: 'でも', pilihan: ['でも', 'ても', 'では', 'には'] },
  { id: 'b21-c6-5', grup: 'catatan', no: 6, soal: 'A：何か 食べませんか。B：そうですね。すし___ 食べませんか。', arti: 'A：Bagaimana kalau makan sesuatu? B：Ya, bagaimana kalau makan sushi?', jawaban: 'でも', pilihan: ['でも', 'ても', 'では', 'を'] },

  // ── Catatan 7 · Kata Kerja (Bentuk ない) ないと…… ─────────────────
  { id: 'b21-c7-1', grup: 'catatan', no: 7, soal: 'もう 帰ら___……。', arti: 'Harus pulang…', jawaban: 'ないと', pilihan: ['ないと', 'なくて', 'ないで', 'ないから'] },
  { id: 'b21-c7-2', grup: 'catatan', no: 7, soal: 'もう 寝___……。', arti: 'Harus tidur…', jawaban: 'ないと', pilihan: ['ないと', 'なくて', 'ないで', 'ないが'] },
  { id: 'b21-c7-3', grup: 'catatan', no: 7, soal: 'そろそろ 出かけ___……。', arti: 'Harus berangkat sebentar lagi…', jawaban: 'ないと', pilihan: ['ないと', 'なくて', 'ないで', 'ないを'] },
  { id: 'b21-c7-4', grup: 'catatan', no: 7, soal: 'あした 早く 起き___……。', arti: 'Besok harus bangun pagi…', jawaban: 'ないと', pilihan: ['ないと', 'なくて', 'ないで', 'ないに'] },
  { id: 'b21-c7-5', grup: 'catatan', no: 7, soal: 'A：もう 帰りますか。B：ええ、もう ___……。', arti: 'A：Sudah pulang? B：Ya, sudah harus pulang…', jawaban: '帰らないと', pilihan: ['帰らないと', '帰らなくて', '帰らないで', '帰りましょう'] },
]
