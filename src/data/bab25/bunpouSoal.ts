import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 25 — tepat 5 soal per pola (2 pola 文型 + 5 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · ～たら、～ ────────────────────────────────────────────
  { id: 'b25-1-1', grup: 'bunpou', no: 1, soal: '雨が ___、出かけません。', arti: 'Kalau turun hujan, saya tidak pergi.', jawaban: '降ったら', pilihan: ['降ったら', '降っても', '降ると', '降れば'] },
  { id: 'b25-1-2', grup: 'bunpou', no: 1, soal: '雨が 降ったら、___。', arti: 'Kalau turun hujan, saya tidak pergi.', jawaban: '出かけません', pilihan: ['出かけません', '出かけます', '出かけました', '出かけましょう'] },
  { id: 'b25-1-3', grup: 'bunpou', no: 1, soal: 'お金が ___、旅行します。', arti: 'Kalau punya uang, berwisata.', jawaban: 'あったら', pilihan: ['あったら', 'あっても', 'あると', 'あるなら'] },
  { id: 'b25-1-4', grup: 'bunpou', no: 1, soal: '時間が ___、テレビを 見ません。', arti: 'Kalau tidak ada waktu, tidak menonton TV.', jawaban: 'なかったら', pilihan: ['なかったら', 'なくても', 'ないと', 'なければ'] },
  { id: 'b25-1-5', grup: 'bunpou', no: 1, soal: '安かったら、パソコンを ___。', arti: 'Kalau murah, saya ingin membeli komputer.', jawaban: '買いたいです', pilihan: ['買いたいです', '買います', '買いました', '買いましょう'] },

  // ── 文型 2 · ～ても、～ ───────────────────────────────────────────
  { id: 'b25-2-1', grup: 'bunpou', no: 2, soal: '雨が ___、出かけます。', arti: 'Walaupun turun hujan, saya pergi.', jawaban: '降っても', pilihan: ['降っても', '降ったら', '降ると', '降れば'] },
  { id: 'b25-2-2', grup: 'bunpou', no: 2, soal: '雨が 降っても、___。', arti: 'Walaupun turun hujan, saya pergi.', jawaban: '出かけます', pilihan: ['出かけます', '出かけません', '出かけました', '出かけましょう'] },
  { id: 'b25-2-3', grup: 'bunpou', no: 2, soal: '雨が 降っても、洗濯___。', arti: 'Walaupun hujan, mencuci pakaian.', jawaban: 'します', pilihan: ['します', 'しません', 'しました', 'しましょう'] },
  { id: 'b25-2-4', grup: 'bunpou', no: 2, soal: '安くても、わたしは グループ旅行が ___。', arti: 'Walaupun murah, saya tidak suka tur rombongan.', jawaban: '嫌いです', pilihan: ['嫌いです', '好きです', '好きでした', '嫌いでした'] },
  { id: 'b25-2-5', grup: 'bunpou', no: 2, soal: '便利でも、パソコンを ___。', arti: 'Walaupun praktis, tidak memakai komputer.', jawaban: '使いません', pilihan: ['使いません', '使います', '使いました', '使いましょう'] },

  // ── Catatan 1 · Bentuk Biasa Lampau ら、～ ────────────────────────
  { id: 'b25-c1-1', grup: 'catatan', no: 1, soal: '暇___、手伝って ください。', arti: 'Kalau sedang luang, tolong bantu saya.', jawaban: 'だったら', pilihan: ['だったら', 'でも', 'だったと', 'だなら'] },
  { id: 'b25-c1-2', grup: 'catatan', no: 1, soal: 'いい 天気___、散歩しませんか。', arti: 'Kalau cuaca baik, bagaimana kita jalan-jalan?', jawaban: 'だったら', pilihan: ['だったら', 'でも', 'だったと', 'だなら'] },
  { id: 'b25-c1-3', grup: 'catatan', no: 1, soal: '時間が なかったら、テレビを ___。', arti: 'Kalau tidak ada waktu, tidak menonton TV.', jawaban: '見ません', pilihan: ['見ません', '見ます', '見ました', '見ましょう'] },
  { id: 'b25-c1-4', grup: 'catatan', no: 1, soal: '安かったら、この 靴を ___。', arti: 'Kalau murah, saya ingin membeli sepatu ini.', jawaban: '買いたいです', pilihan: ['買いたいです', '買います', '買いました', '買いましょう'] },
  { id: 'b25-c1-5', grup: 'catatan', no: 1, soal: 'A：もし お金が あったら、何を しますか。B：世界を ___。', arti: 'A：Kalau punya uang, mau apa? B：Ingin berwisata keliling dunia.', jawaban: '旅行したいです', pilihan: ['旅行したいです', '旅行します', '旅行しました', '旅行しましょう'] },

  // ── Catatan 2 · Kata Kerja Bentuk たら、～ ────────────────────────
  { id: 'b25-c2-1', grup: 'catatan', no: 2, soal: '10時に ___、出かけましょう。', arti: 'Kalau sudah pukul sepuluh, kita berangkat.', jawaban: 'なったら', pilihan: ['なったら', 'なっても', 'なると', 'なれば'] },
  { id: 'b25-c2-2', grup: 'catatan', no: 2, soal: 'うちへ ___、すぐ シャワーを 浴びます。', arti: 'Kalau pulang ke rumah, saya langsung mandi.', jawaban: '帰ったら', pilihan: ['帰ったら', '帰っても', '帰ると', '帰れば'] },
  { id: 'b25-c2-3', grup: 'catatan', no: 2, soal: '大学を ___、すぐ 働きますか。', arti: 'Kalau tamat universitas, apakah langsung bekerja?', jawaban: '出たら', pilihan: ['出たら', '出ても', '出ると', '出れば'] },
  { id: 'b25-c2-4', grup: 'catatan', no: 2, soal: '仕事が ___、うちへ 帰ります。', arti: 'Kalau pekerjaan selesai, pulang ke rumah.', jawaban: '終わったら', pilihan: ['終わったら', '終わっても', '終わると', '終われば'] },
  { id: 'b25-c2-5', grup: 'catatan', no: 2, soal: 'お風呂に ___、すぐ 寝ます。', arti: 'Kalau sudah berendam di bak mandi, langsung tidur.', jawaban: '入ったら', pilihan: ['入ったら', '入っても', '入ると', '入れば'] },

  // ── Catatan 3 · ～て / ～なくて / ～くて / ～で も、～ ─────────────
  { id: 'b25-c3-1', grup: 'catatan', no: 3, soal: '雨が ___、洗濯します。', arti: 'Walaupun hujan, mencuci pakaian.', jawaban: '降っても', pilihan: ['降っても', '降ったら', '降ると', '降れば'] },
  { id: 'b25-c3-2', grup: 'catatan', no: 3, soal: '___、わたしは グループ旅行が 嫌いです。', arti: 'Walaupun murah, saya tidak suka tur rombongan.', jawaban: '安くても', pilihan: ['安くても', '安かったら', '安いと', '安ければ'] },
  { id: 'b25-c3-3', grup: 'catatan', no: 3, soal: '便利___、パソコンを 使いません。', arti: 'Walaupun praktis, tidak memakai komputer.', jawaban: 'でも', pilihan: ['でも', 'だったら', 'だと', 'なら'] },
  { id: 'b25-c3-4', grup: 'catatan', no: 3, soal: '日曜日___、働きます。', arti: 'Walaupun hari Minggu, bekerja.', jawaban: 'でも', pilihan: ['でも', 'だったら', 'だと', 'の'] },
  { id: 'b25-c3-5', grup: 'catatan', no: 3, soal: 'A：辞書を 見ましたか。B：ええ。___、わかりません。', arti: 'A：Sudah melihat kamus? B：Ya. Walaupun melihat (kamus), saya tidak mengerti.', jawaban: '見ても', pilihan: ['見ても', '見たら', '見ると', '見れば'] },

  // ── Catatan 4 · もし ──────────────────────────────────────────────
  { id: 'b25-c4-1', grup: 'catatan', no: 4, soal: '___ １億円 あったら、いろいろな 国を 旅行したいです。', arti: 'Kalau punya seratus juta yen, ingin berwisata di berbagai negara.', jawaban: 'もし', pilihan: ['もし', 'では', 'でも', 'たぶん'] },
  { id: 'b25-c4-2', grup: 'catatan', no: 4, soal: '___ 雨だったら、試合は ありません。', arti: 'Kalau hujan, tidak ada pertandingan.', jawaban: 'もし', pilihan: ['もし', 'でも', 'たぶん', 'きっと'] },
  { id: 'b25-c4-3', grup: 'catatan', no: 4, soal: '___ 時間が あったら、映画を 見たいです。', arti: 'Kalau ada waktu, ingin menonton film.', jawaban: 'もし', pilihan: ['もし', 'でも', 'たぶん', 'また'] },
  { id: 'b25-c4-4', grup: 'catatan', no: 4, soal: '___ 安かったら、買います。', arti: 'Kalau murah, saya beli.', jawaban: 'もし', pilihan: ['もし', 'でも', 'たぶん', 'きっと'] },
  { id: 'b25-c4-5', grup: 'catatan', no: 4, soal: '___ ひまだったら、手伝って ください。', arti: 'Kalau sedang luang, tolong bantu saya.', jawaban: 'もし', pilihan: ['もし', 'でも', 'たぶん', 'やはり'] },

  // ── Catatan 5 · Subjek dalam anak kalimat ─────────────────────────
  { id: 'b25-c5-1', grup: 'catatan', no: 5, soal: '友達___ 来る まえに、部屋を 掃除します。', arti: 'Sebelum teman datang, membersihkan kamar.', jawaban: 'が', pilihan: ['が', 'は', 'を', 'に'] },
  { id: 'b25-c5-2', grup: 'catatan', no: 5, soal: '妻___ 病気の とき、会社を 休みます。', arti: 'Waktu istri sakit, saya tidak masuk kerja.', jawaban: 'が', pilihan: ['が', 'は', 'を', 'に'] },
  { id: 'b25-c5-3', grup: 'catatan', no: 5, soal: '友達が 約束の 時間に ___、どう しますか。', arti: 'Kalau teman tidak datang pada waktu janji, bagaimana?', jawaban: '来なかったら', pilihan: ['来なかったら', '来なくても', '来ないと', '来なければ'] },
  { id: 'b25-c5-4', grup: 'catatan', no: 5, soal: '友達___ 来て から、出かけましょう。', arti: 'Setelah teman datang, mari kita berangkat.', jawaban: 'が', pilihan: ['が', 'は', 'を', 'に'] },
  { id: 'b25-c5-5', grup: 'catatan', no: 5, soal: '母___ 病気の とき、わたしは 料理を します。', arti: 'Waktu ibu sakit, saya memasak.', jawaban: 'が', pilihan: ['が', 'は', 'を', 'に'] },
]
