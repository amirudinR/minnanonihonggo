import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 28 — tepat 5 soal per pola (3 pola 文型 + 5 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · 音楽を 聞きながら 食事します ─────────────────────────
  { id: 'b28-1-1', grup: 'bunpou', no: 1, soal: '音楽を ___ 食事します。', arti: 'Makan sambil mendengar musik.', jawaban: '聞きながら', pilihan: ['聞きながら', '聞いて', '聞く', '聞きます'] },
  { id: 'b28-1-2', grup: 'bunpou', no: 1, soal: '眠い とき、ガムを ___ 運転します。', arti: 'Ketika mengantuk, saya menyetir sambil makan permen karet.', jawaban: 'かみながら', pilihan: ['かみながら', 'かんで', 'かむ', 'かみます'] },
  { id: 'b28-1-3', grup: 'bunpou', no: 1, soal: '太郎、テレビを ___ 勉強しては いけませんよ。', arti: 'Taro, tidak boleh belajar sambil menonton televisi, ya.', jawaban: '見ながら', pilihan: ['見ながら', '見て', '見る', '見ます'] },
  { id: 'b28-1-4', grup: 'bunpou', no: 1, soal: '彼は ___ 大学で 勉強しています。', arti: 'Ia kuliah di universitas sambil bekerja.', jawaban: '働きながら', pilihan: ['働きながら', '働いて', '働く', '働きます'] },
  { id: 'b28-1-5', grup: 'bunpou', no: 1, soal: 'A：音楽を 聞きながら 食事しますか。B：いいえ、わたしは ___ 食事します。', arti: 'A：Makan sambil mendengar musik? B：Tidak, saya makan sambil menonton televisi.', jawaban: 'テレビを 見ながら', pilihan: ['テレビを 見ながら', 'テレビを 見て', 'テレビを 見る', 'テレビを 見ます'] },

  // ── 文型 2 · 毎朝 ジョギングを しています ────────────────────────
  { id: 'b28-2-1', grup: 'bunpou', no: 2, soal: 'A：毎朝 何を して いますか。B：毎朝 ジョギングを ___。', arti: 'A：Setiap pagi melakukan apa? B：Setiap pagi saya jogging.', jawaban: 'して います', pilihan: ['して います', 'して いました', 'します', 'しました'] },
  { id: 'b28-2-2', grup: 'bunpou', no: 2, soal: '休みの 日は いつも 何を ___か。', arti: 'Ketika hari libur, biasanya melakukan apa?', jawaban: 'して います', pilihan: ['して います', 'します', 'しました', 'して いました'] },
  { id: 'b28-2-3', grup: 'bunpou', no: 2, soal: '……そうですね。だいたい 絵を ___。', arti: '……Ya... Biasanya saya melukis.', jawaban: 'かいて います', pilihan: ['かいて います', 'かきます', 'かきました', 'かいて いました'] },
  { id: 'b28-2-4', grup: 'bunpou', no: 2, soal: '毎晩 日本語を ___。', arti: 'Setiap malam saya belajar bahasa Jepang.', jawaban: '勉強して います', pilihan: ['勉強して います', '勉強します', '勉強しました', '勉強して いました'] },
  { id: 'b28-2-5', grup: 'bunpou', no: 2, soal: '子どもの とき、毎晩 8時に ___。', arti: 'Ketika masih kecil, setiap malam saya tidur pukul delapan.', jawaban: '寝て いました', pilihan: ['寝て いました', '寝て います', '寝ます', '寝ました'] },

  // ── 文型 3 · Bentuk Biasa し、Bentuk Biasa し、～ ─────────────────
  { id: 'b28-3-1', grup: 'bunpou', no: 3, soal: 'ここは 値段も ___、魚も 新しいし、よく 食べに 来ます。', arti: 'Di sini harganya murah, ikan juga segar, maka sering datang untuk makan.', jawaban: '安いし', pilihan: ['安いし', '安い', '安くて', '安いです'] },
  { id: 'b28-3-2', grup: 'bunpou', no: 3, soal: '地下鉄は ___、安いし、地下鉄で 行きましょう。', arti: 'Kereta bawah tanah cepat dan murah, ayo kita pergi dengan kereta bawah tanah.', jawaban: '速いし', pilihan: ['速いし', '速くて', '速い', '速いです'] },
  { id: 'b28-3-3', grup: 'bunpou', no: 3, soal: 'A：どうして 日本の アニメが 好きなんですか。B：話も おもしろいし、音楽も ___から。', arti: 'A：Kenapa suka animasi Jepang? B：Ceritanya menarik, dan musiknya juga bagus.', jawaban: 'すてきです', pilihan: ['すてきです', 'すてきし', 'すてきだし', 'すてきな'] },
  { id: 'b28-3-4', grup: 'bunpou', no: 3, soal: '田中さんは まじめ___、中国語も 上手だし、それに 経験も あります。', arti: 'Sdr. Tanaka rajin, pandai bahasa Tionghoa, lagi pula berpengalaman.', jawaban: 'だし', pilihan: ['だし', 'し', 'な', 'の'] },
  { id: 'b28-3-5', grup: 'bunpou', no: 3, soal: '鈴木さんは ピアノも ___、歌も 歌えるし、ダンスも できます。', arti: 'Sdr. Suzuki bisa bermain piano, bisa bernyanyi, juga bisa berdansa.', jawaban: '弾けるし', pilihan: ['弾けるし', '弾ける', '弾いて', '弾きます'] },

  // ── Catatan 1 · Kata Kerja₁（Bentuk ます）ながら Kata Kerja₂ ──────
  { id: 'b28-c1-1', grup: 'catatan', no: 1, soal: '音楽を 聞き___ 食事します。', arti: 'Makan sambil mendengar musik.', jawaban: 'ながら', pilihan: ['ながら', 'から', 'のに', 'ので'] },
  { id: 'b28-c1-2', grup: 'catatan', no: 1, soal: '___ながら 日本語を 勉強しています。', arti: 'Belajar bahasa Jepang sambil bekerja.', jawaban: '働き', pilihan: ['働き', '働く', '働いて', '働きます'] },
  { id: 'b28-c1-3', grup: 'catatan', no: 1, soal: 'A：毎日 何を して いますか。B：アルバイトを ___ 日本語を 勉強しています。', arti: 'A：Setiap hari melakukan apa? B：Belajar bahasa Jepang sambil kerja paruh waktu.', jawaban: 'しながら', pilihan: ['しながら', 'して', 'する', 'します'] },
  { id: 'b28-c1-4', grup: 'catatan', no: 1, soal: '音楽を 聞きながら ___。', arti: 'Makan sambil mendengar musik.', jawaban: '食事します', pilihan: ['食事します', '食事して', '食事する', '食事しました'] },
  { id: 'b28-c1-5', grup: 'catatan', no: 1, soal: '電車に ___ 本を 読みます。', arti: 'Membaca buku sambil naik kereta.', jawaban: '乗りながら', pilihan: ['乗りながら', '乗って', '乗る', '乗ります'] },

  // ── Catatan 2 · Kata Kerja Bentuk ています（kebiasaan） ───────────
  { id: 'b28-c2-1', grup: 'catatan', no: 2, soal: 'A：休みの 日は 何を して いますか。B：だいたい テニスを ___。', arti: 'A：Hari libur melakukan apa? B：Biasanya bermain tenis.', jawaban: 'して います', pilihan: ['して います', 'して いました', 'します', 'しました'] },
  { id: 'b28-c2-2', grup: 'catatan', no: 2, soal: 'A：毎朝 ジョギングを して いますか。B：いいえ、___。', arti: 'A：Apakah setiap pagi jogging? B：Tidak, saya tidak melakukannya.', jawaban: 'して いません', pilihan: ['して いません', 'して います', 'しません', 'して いました'] },
  { id: 'b28-c2-3', grup: 'catatan', no: 2, soal: '週末は いつも 映画を ___。', arti: 'Akhir pekan biasanya saya menonton film.', jawaban: '見て います', pilihan: ['見て います', '見て いました', '見ます', '見ました'] },
  { id: 'b28-c2-4', grup: 'catatan', no: 2, soal: '子どもの とき、毎晩 8時に ___。', arti: 'Ketika masih kecil, setiap malam saya tidur pukul delapan.', jawaban: '寝て いました', pilihan: ['寝て いました', '寝て います', '寝ます', '寝ました'] },
  { id: 'b28-c2-5', grup: 'catatan', no: 2, soal: 'A：学生の とき、アルバイトを して いましたか。B：はい、___。', arti: 'A：Waktu masih mahasiswa, kerja paruh waktu? B：Ya, saya bekerja paruh waktu.', jawaban: 'して いました', pilihan: ['して いました', 'して います', 'します', 'しました'] },

  // ── Catatan 3 · Bentuk Biasa し、Bentuk Biasa し、～ ──────────────
  { id: 'b28-c3-1', grup: 'catatan', no: 3, soal: '鈴木さんは ピアノも 弾けるし、歌も ___、ダンスも できます。', arti: 'Sdr. Suzuki bisa bermain piano, bisa bernyanyi, juga bisa berdansa.', jawaban: '歌えるし', pilihan: ['歌えるし', '歌える', '歌って', '歌います'] },
  { id: 'b28-c3-2', grup: 'catatan', no: 3, soal: '田中さんは まじめだし、中国語も ___、それに 経験も あります。', arti: 'Sdr. Tanaka rajin, pandai bahasa Tionghoa, lagi pula berpengalaman.', jawaban: '上手だし', pilihan: ['上手だし', '上手し', '上手な', '上手です'] },
  { id: 'b28-c3-3', grup: 'catatan', no: 3, soal: 'ここは 値段も 安いし、魚も ___、よく 食べに 来ます。', arti: 'Di sini harganya murah, ikan juga segar, maka sering datang untuk makan.', jawaban: '新しいし', pilihan: ['新しいし', '新しい', '新しくて', '新しいです'] },
  { id: 'b28-c3-4', grup: 'catatan', no: 3, soal: '田中さんは まじめだし、中国語も 上手だし、___ 経験も あります。', arti: 'Sdr. Tanaka rajin, pandai bahasa Tionghoa, lagi pula berpengalaman.', jawaban: 'それに', pilihan: ['それに', 'それで', 'そして', 'でも'] },
  { id: 'b28-c3-5', grup: 'catatan', no: 3, soal: 'ワット先生は 熱心だし、___し、それに 経験も あります。', arti: 'Bapak Watt antusias, rajin, dan berpengalaman juga.', jawaban: 'まじめだ', pilihan: ['まじめだ', 'まじめし', 'まじめな', 'まじめです'] },

  // ── Catatan 4 · それで ──────────────────────────────────────────
  { id: 'b28-c4-1', grup: 'catatan', no: 4, soal: '将来 小説家に なりたいです。___ 今は アルバイトを しながら 小説を 書いて います。', arti: 'Saya ingin menjadi pengarang novel pada masa depan. Oleh karena itu, sekarang menulis novel sambil bekerja paruh waktu.', jawaban: 'それで', pilihan: ['それで', 'それに', 'でも', 'そして'] },
  { id: 'b28-c4-2', grup: 'catatan', no: 4, soal: 'ここは コーヒーも おいしいし、食事も できるし。……___ 人気が あるんですね。', arti: 'Di sini kopinya enak, dan juga bisa makan... ……Oleh karena itu, populer, ya.', jawaban: 'それで', pilihan: ['それで', 'それに', 'それから', 'でも'] },
  { id: 'b28-c4-3', grup: 'catatan', no: 4, soal: 'A：どうして この 店は 人気が ありますか。B：コーヒーも おいしいし、値段も 安いし。___ 人気が あるんです。', arti: 'A：Kenapa toko ini populer? B：Kopinya enak, harganya juga murah. Oleh karena itu, populer.', jawaban: 'それで', pilihan: ['それで', 'それに', 'それから', 'でも'] },
  { id: 'b28-c4-4', grup: 'catatan', no: 4, soal: '日本語が 大好きです。___ 毎日 日本語を 勉強して います。', arti: 'Saya sangat suka bahasa Jepang. Oleh karena itu, setiap hari saya belajar bahasa Jepang.', jawaban: 'それで', pilihan: ['それで', 'それに', 'しかし', 'でも'] },
  { id: 'b28-c4-5', grup: 'catatan', no: 4, soal: 'A：どうして 日本語を 勉強して いますか。B：日本で 働きたいです。___ 勉強して います。', arti: 'A：Kenapa belajar bahasa Jepang? B：Ingin bekerja di Jepang. Oleh karena itu saya belajar.', jawaban: 'それで', pilihan: ['それで', 'それに', 'それから', 'でも'] },

  // ── Catatan 5 · ～ とき + Kata Bantu ────────────────────────────
  { id: 'b28-c5-1', grup: 'catatan', no: 5, soal: '勉強する とき___、音楽を 聞きません。', arti: 'Ketika belajar, saya tidak mendengar musik.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'に'] },
  { id: 'b28-c5-2', grup: 'catatan', no: 5, soal: '疲れた とき___ 寂しい とき、よく 田舎の 青い 空を 思い出す。', arti: 'Ketika lelah atau sepi, saya sering ingat langit biru kampung halaman.', jawaban: 'や', pilihan: ['や', 'は', 'が', 'を'] },
  { id: 'b28-c5-3', grup: 'catatan', no: 5, soal: 'A：いつ 本を 読みますか。B：暇な とき___ 読みます。', arti: 'A：Kapan membaca buku? B：Saat senggang, saya membaca.', jawaban: 'には', pilihan: ['には', 'のは', 'を', 'が'] },
  { id: 'b28-c5-4', grup: 'catatan', no: 5, soal: '子どもの とき___、よく 公園で 遊びました。', arti: 'Ketika kecil, saya sering bermain di taman.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'に'] },
  { id: 'b28-c5-5', grup: 'catatan', no: 5, soal: 'ときどき、寂しい ___ あります。', arti: 'Kadang-kadang ada saat saya merasa sepi.', jawaban: 'ときが', pilihan: ['ときが', 'ときは', 'ときを', 'ときに'] },
]
