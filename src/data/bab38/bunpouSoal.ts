import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 38 — tepat 5 soal per pola (4 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · [V Bentuk Kamus] のは [Kata Sifat] です ───────────────
  { id: 'b38-1-1', grup: 'bunpou', no: 1, soal: 'テニスを する___ おもしろいです。', arti: 'Bermain tenis itu menarik.', jawaban: 'のは', pilihan: ['のは', 'のが', 'のを', 'のに'] },
  { id: 'b38-1-2', grup: 'bunpou', no: 1, soal: 'テニスを 見る___ おもしろいです。', arti: 'Menonton tenis itu menarik.', jawaban: 'のは', pilihan: ['のは', 'のが', 'のを', 'のに'] },
  { id: 'b38-1-3', grup: 'bunpou', no: 1, soal: '映画を 見る___ 楽しいです。', arti: 'Menonton film itu menyenangkan.', jawaban: 'のは', pilihan: ['のは', 'のが', 'のを', 'のに'] },
  { id: 'b38-1-4', grup: 'bunpou', no: 1, soal: '日本語を 勉強するのは ___です。', arti: 'Belajar bahasa Jepang itu menyenangkan.', jawaban: '楽しい', pilihan: ['楽しい', '楽しく', '楽しさ', '楽しみ'] },
  { id: 'b38-1-5', grup: 'bunpou', no: 1, soal: '早く 起きる___ たいへんです。', arti: 'Bangun pagi itu berat.', jawaban: 'のは', pilihan: ['のは', 'のが', 'のを', 'のに'] },

  // ── 文型 2 · [V Bentuk Kamus] のが [Kata Sifat] です ───────────────
  { id: 'b38-2-1', grup: 'bunpou', no: 2, soal: 'わたしは 花を 育てる___ 好きです。', arti: 'Saya suka memelihara bunga.', jawaban: 'のが', pilihan: ['のが', 'のは', 'のを', 'のに'] },
  { id: 'b38-2-2', grup: 'bunpou', no: 2, soal: '東京の 人は 歩く___ 速いです。', arti: 'Orang-orang di Tokyo cepat berjalan.', jawaban: 'のが', pilihan: ['のが', 'のは', 'のを', 'のに'] },
  { id: 'b38-2-3', grup: 'bunpou', no: 2, soal: 'わたしは 音楽を 聞く___ 好きです。', arti: 'Saya suka mendengarkan musik.', jawaban: 'のが', pilihan: ['のが', 'のは', 'のを', 'のに'] },
  { id: 'b38-2-4', grup: 'bunpou', no: 2, soal: '夫は 花を 育てる___ 上手なんです。', arti: 'Suami (saya) pandai memelihara bunga.', jawaban: 'のが', pilihan: ['のが', 'のは', 'のを', 'のに'] },
  { id: 'b38-2-5', grup: 'bunpou', no: 2, soal: 'わたしは 日本語を 話す___ 下手です。', arti: 'Saya tidak pandai berbicara bahasa Jepang.', jawaban: 'のが', pilihan: ['のが', 'のは', 'のを', 'のに'] },

  // ── 文型 3 · [V Bentuk Kamus] のを 忘れました ──────────────────────
  { id: 'b38-3-1', grup: 'bunpou', no: 3, soal: '牛乳を 買う___ 忘れました。', arti: 'Lupa membeli susu.', jawaban: 'のを', pilihan: ['のを', 'のは', 'のが', 'のに'] },
  { id: 'b38-3-2', grup: 'bunpou', no: 3, soal: '車の 窓を 閉める___ 忘れました。', arti: 'Lupa menutup jendela mobil.', jawaban: 'のを', pilihan: ['のを', 'のは', 'のが', 'のに'] },
  { id: 'b38-3-3', grup: 'bunpou', no: 3, soal: '部屋の かぎを かける___ 忘れました。', arti: 'Lupa mengunci pintu kamar.', jawaban: 'のを', pilihan: ['のを', 'のは', 'のが', 'のに'] },
  { id: 'b38-3-4', grup: 'bunpou', no: 3, soal: 'でんげんを 切るのを ___。', arti: 'Lupa mematikan listrik.', jawaban: '忘れました', pilihan: ['忘れました', '忘れます', '忘れましたか', '忘れて います'] },
  { id: 'b38-3-5', grup: 'bunpou', no: 3, soal: '日記を ___ のを 忘れました。', arti: 'Lupa menulis buku harian.', jawaban: '書く', pilihan: ['書く', '書きます', '書いた', '書いて'] },

  // ── 文型 4 · [Bentuk Biasa] の（は・が）… です ─────────────────────
  { id: 'b38-4-1', grup: 'bunpou', no: 4, soal: '初めて 会った___ いつですか。', arti: 'Kapan pertama kali bertemu?', jawaban: 'のは', pilihan: ['のは', 'のが', 'のを', 'のに'] },
  { id: 'b38-4-2', grup: 'bunpou', no: 4, soal: '父が 生まれた___ 北海道の 小さな 村です。', arti: 'Tempat ayah saya lahir adalah sebuah desa kecil di Hokkaido.', jawaban: 'のは', pilihan: ['のは', 'のが', 'のを', 'のに'] },
  { id: 'b38-4-3', grup: 'bunpou', no: 4, soal: 'バンコクで ___んですか。', arti: 'Lahir di Bangkok?', jawaban: '生まれた', pilihan: ['生まれた', '生まれ', '生まれます', '生まれる'] },
  { id: 'b38-4-4', grup: 'bunpou', no: 4, soal: '彼女に 初めて 会ったのは ___の 教室です。', arti: 'Pertama kali bertemu dengannya adalah di ruang kelas SD.', jawaban: '小学校', pilihan: ['小学校', '中学校', '高校', '大学'] },
  { id: 'b38-4-5', grup: 'bunpou', no: 4, soal: 'わたしが 日本へ 来たのは ___です。', arti: 'Saya datang ke Jepang adalah bulan Maret tahun lalu.', jawaban: '去年の 3月', pilihan: ['去年の 3月', '去年', '3月', '去年に 3月'] },

  // ── Catatan 1 · の sebagai pembentuk Kata Benda ────────────────────
  { id: 'b38-c1-1', grup: 'catatan', no: 1, soal: 'テレビ___ 横に 花が あります。', arti: 'Di samping televisi ada bunga.', jawaban: 'の', pilihan: ['の', 'に', 'が', 'を'] },
  { id: 'b38-c1-2', grup: 'catatan', no: 1, soal: '机___ 周りを きれいに して ください。', arti: 'Rapikan sekitar meja.', jawaban: 'の', pilihan: ['の', 'に', 'が', 'で'] },
  { id: 'b38-c1-3', grup: 'catatan', no: 1, soal: '駅___ 前で 友達を 待ちます。', arti: 'Menunggu teman di depan stasiun.', jawaban: 'の', pilihan: ['の', 'に', 'を', 'で'] },
  { id: 'b38-c1-4', grup: 'catatan', no: 1, soal: '学校___ 隣に 病院が あります。', arti: 'Di samping sekolah ada rumah sakit.', jawaban: 'の', pilihan: ['の', 'に', 'が', 'を'] },
  { id: 'b38-c1-5', grup: 'catatan', no: 1, soal: 'テレビの 横に ___が ありますか。', arti: 'Di samping TV ada apa?', jawaban: '何', pilihan: ['何', 'だれ', 'どれ', 'どこ'] },

  // ── Catatan 2 · 知っていますか ─────────────────────────────────────
  { id: 'b38-c2-1', grup: 'catatan', no: 2, soal: '鈴木さんが 来月 結婚する___ 知って いますか。', arti: 'Apakah Anda tahu Sdr. Suzuki akan menikah bulan depan?', jawaban: 'のを', pilihan: ['のを', 'のは', 'のが', 'のに'] },
  { id: 'b38-c2-2', grup: 'catatan', no: 2, soal: '木村さんに 赤ちゃんが 生まれた___ 知って いますか。', arti: 'Apakah Anda tahu bahwa Sdr. Kimura telah melahirkan?', jawaban: 'のを', pilihan: ['のを', 'のは', 'のが', 'のに'] },
  { id: 'b38-c2-3', grup: 'catatan', no: 2, soal: 'ミラーさんの 住所___ 知って いますか。', arti: 'Apakah Anda tahu alamat Sdr. Miller?', jawaban: 'を', pilihan: ['を', 'が', 'に', 'で'] },
  { id: 'b38-c2-4', grup: 'catatan', no: 2, soal: '木村さんに 赤ちゃんが 生まれたのを 知って いますか。……いいえ、___。', arti: 'Apakah Anda tahu bahwa Sdr. Kimura telah melahirkan? ……Tidak, tidak tahu.', jawaban: '知りませんでした', pilihan: ['知りませんでした', '知りません', '知って います', '知って いました'] },
  { id: 'b38-c2-5', grup: 'catatan', no: 2, soal: 'ミラーさんの 住所を 知って いますか。……いいえ、___。', arti: 'Apakah Anda tahu alamat Sdr. Miller? ……Tidak, tidak tahu.', jawaban: '知りません', pilihan: ['知りません', '知りませんでした', 'わかります', '知って います'] },

  // ── Catatan 3 · のは — Perhatian 2 ────────────────────────────────
  { id: 'b38-c3-1', grup: 'catatan', no: 3, soal: '初めて 会ったのは ___ですか。', arti: 'Kapan pertama kali bertemu?', jawaban: 'いつ', pilihan: ['いつ', 'どこ', 'だれ', 'なに'] },
  { id: 'b38-c3-2', grup: 'catatan', no: 3, soal: '父が 生まれたのは ___です。', arti: 'Tempat ayah saya lahir adalah Hokkaido.', jawaban: '北海道', pilihan: ['北海道', '東京', '大阪', '京都'] },
  { id: 'b38-c3-3', grup: 'catatan', no: 3, soal: 'それは どこで 買った___ですか。', arti: 'Itu dibeli di mana?', jawaban: 'の', pilihan: ['の', 'が', 'を', 'に'] },
  { id: 'b38-c3-4', grup: 'catatan', no: 3, soal: 'だれが 作った___ですか。', arti: 'Siapa yang membuatnya?', jawaban: 'の', pilihan: ['の', 'が', 'を', 'に'] },
  { id: 'b38-c3-5', grup: 'catatan', no: 3, soal: '初めて 好きに なった 人の ことを ___ いますか。', arti: 'Apakah (Anda) masih ingat orang yang pertama kali (Anda) jatuh cinta?', jawaban: '覚えて', pilihan: ['覚えて', '忘れて', '知って', '思って'] },
]
