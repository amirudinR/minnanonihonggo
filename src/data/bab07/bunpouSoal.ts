import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 7 — tepat 5 soal per pola (4 pola 文型 + 6 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Benda(alat/sarana) で Kata Kerja ──────────────────
  { id: 'b7-1-1', grup: 'bunpou', no: 1, soal: 'わたしは パソコン___ 映画を 見ます。', arti: 'Saya menonton film dengan komputer.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },
  { id: 'b7-1-2', grup: 'bunpou', no: 1, soal: 'はし___ ごはんを 食べます。', arti: 'Makan nasi dengan sumpit.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'は'] },
  { id: 'b7-1-3', grup: 'bunpou', no: 1, soal: '日本語___ レポートを 書きます。', arti: 'Menulis laporan dalam bahasa Jepang.', jawaban: 'で', pilihan: ['で', 'に', 'へ', 'が'] },
  { id: 'b7-1-4', grup: 'bunpou', no: 1, soal: 'テレビ___ 日本語を 勉強しました。', arti: 'Belajar bahasa Jepang dengan televisi.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },
  { id: 'b7-1-5', grup: 'bunpou', no: 1, soal: 'ナイフ___ パンを 切ります。', arti: 'Memotong roti dengan pisau.', jawaban: 'で', pilihan: ['で', 'を', 'に', 'へ'] },

  // ── 文型 2 · Kata Benda1(orang) に Kata Benda2 を あげます ──────────
  { id: 'b7-2-1', grup: 'bunpou', no: 2, soal: 'わたしは 木村さん___ 花を あげます。', arti: 'Saya memberikan bunga kepada Sdr. Kimura.', jawaban: 'に', pilihan: ['に', 'を', 'で', 'へ'] },
  { id: 'b7-2-2', grup: 'bunpou', no: 2, soal: 'わたしは 山田さん___ プレゼントを あげました。', arti: 'Saya memberikan hadiah kepada Sdr. Yamada.', jawaban: 'に', pilihan: ['に', 'が', 'を', 'で'] },
  { id: 'b7-2-3', grup: 'bunpou', no: 2, soal: '父___ シャツを あげました。', arti: 'Memberikan kemeja kepada ayah.', jawaban: 'に', pilihan: ['に', 'を', 'は', 'で'] },
  { id: 'b7-2-4', grup: 'bunpou', no: 2, soal: 'A：だれ___ 花を あげますか。B：木村さんに あげます。', arti: 'A：Kepada siapa Anda memberi bunga? B：Kepada Sdr. Kimura.', jawaban: 'に', pilihan: ['に', 'を', 'で', 'と'] },
  { id: 'b7-2-5', grup: 'bunpou', no: 2, soal: 'A：木村さんに 何を あげますか。B：花___ あげます。', arti: 'A：Apa yang Anda berikan kepada Sdr. Kimura? B：Memberi bunga.', jawaban: 'を', pilihan: ['を', 'に', 'が', 'で'] },

  // ── 文型 3 · Kata Benda1(orang) に Kata Benda2 を もらいます ────────
  { id: 'b7-3-1', grup: 'bunpou', no: 3, soal: 'わたしは カリナさん___ チョコレートを もらいました。', arti: 'Saya mendapatkan cokelat dari Sdr. Karina.', jawaban: 'に', pilihan: ['に', 'を', 'で', 'へ'] },
  { id: 'b7-3-2', grup: 'bunpou', no: 3, soal: '山田さん___ 手帳を もらいました。', arti: 'Saya mendapat buku agenda dari Sdr. Yamada.', jawaban: 'に', pilihan: ['に', 'が', 'を', 'で'] },
  { id: 'b7-3-3', grup: 'bunpou', no: 3, soal: 'わたしは 母___ プレゼントを もらいました。', arti: 'Saya mendapat hadiah dari ibu.', jawaban: 'に', pilihan: ['に', 'を', 'は', 'で'] },
  { id: 'b7-3-4', grup: 'bunpou', no: 3, soal: 'A：だれ___ その 手帳を もらいましたか。B：山田さんに もらいました。', arti: 'A：Dari siapa Anda mendapat buku agenda itu? B：Dari Sdr. Yamada.', jawaban: 'に', pilihan: ['に', 'を', 'で', 'と'] },
  { id: 'b7-3-5', grup: 'bunpou', no: 3, soal: '銀行___ お金を 借りました。', arti: 'Saya meminjam uang dari bank.', jawaban: 'から', pilihan: ['から', 'を', 'で', 'へ'] },

  // ── 文型 4 · もう Kata Kerja ました ────────────────────────────────
  { id: 'b7-4-1', grup: 'bunpou', no: 4, soal: 'わたしは もう メールを ___。', arti: 'Saya telah mengirim e-mail.', jawaban: '送りました', pilihan: ['送りました', '送ります', '送りません', '送りましょう'] },
  { id: 'b7-4-2', grup: 'bunpou', no: 4, soal: 'もう 昼ごはんを ___か。', arti: 'Sudah makan siang? ……Ya, sudah makan.', jawaban: '食べました', pilihan: ['食べました', '食べます', '食べません', '食べましょう'] },
  { id: 'b7-4-3', grup: 'bunpou', no: 4, soal: 'もう 新幹線の 切符を 買いましたか。……はい、もう ___。', arti: 'Karcis Shinkansen sudah dibeli? ……Ya, sudah dibeli.', jawaban: '買いました', pilihan: ['買いました', '買います', '買いません', '買いましょう'] },
  { id: 'b7-4-4', grup: 'bunpou', no: 4, soal: 'もう 荷物を 送りましたか。……いいえ、___。', arti: 'Apakah barang sudah dikirim? ……Belum.', jawaban: 'まだです', pilihan: ['まだです', '送りませんでした', 'はい', 'もうです'] },
  { id: 'b7-4-5', grup: 'bunpou', no: 4, soal: 'もう クリスマスカードを ___か。', arti: 'Sudah menulis kartu Natal? ……Ya, sudah menulis.', jawaban: '書きました', pilihan: ['書きました', '書きます', '書きません', '書きましょう'] },

  // ── Catatan 1 · Kata Benda(alat/sarana) で Kata Kerja ──────────────
  { id: 'b7-c1-1', grup: 'catatan', no: 1, soal: 'スプーン___ 食べます。', arti: 'Makan dengan sendok.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },
  { id: 'b7-c1-2', grup: 'catatan', no: 1, soal: '日本語___ 手紙を 書きます。', arti: 'Menulis surat dalam bahasa Jepang.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'が'] },
  { id: 'b7-c1-3', grup: 'catatan', no: 1, soal: 'パソコン___ メールを 送ります。', arti: 'Mengirim e-mail dengan komputer.', jawaban: 'で', pilihan: ['で', 'を', 'に', 'は'] },
  { id: 'b7-c1-4', grup: 'catatan', no: 1, soal: 'はさみ___ 紙を 切ります。', arti: 'Memotong kertas dengan gunting.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'と'] },
  { id: 'b7-c1-5', grup: 'catatan', no: 1, soal: 'スマホ___ 写真を 撮ります。', arti: 'Mengambil foto dengan ponsel.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },

  // ── Catatan 2 · 「Kata/Kalimat」は ～語で 何ですか ─────────────────
  { id: 'b7-c2-1', grup: 'catatan', no: 2, soal: '「ありがとう」は 英語___ 何ですか。……「Thank you」です。', arti: 'Apa bahasa Inggris dari "Arigato"? ……"Thank you".', jawaban: 'で', pilihan: ['で', 'に', 'を', 'は'] },
  { id: 'b7-c2-2', grup: 'catatan', no: 2, soal: '「Thank you」は 日本語___ 何ですか。……「ありがとう」です。', arti: 'Apa bahasa Jepang dari "Thank you"? ……"Arigato".', jawaban: 'で', pilihan: ['で', 'に', 'へ', 'が'] },
  { id: 'b7-c2-3', grup: 'catatan', no: 2, soal: 'A：「Goodbye」は 日本語で 何ですか。B：「___」です。', arti: 'A：Apa bahasa Jepang dari "Goodbye"? B："Sayonara".', jawaban: 'さようなら', pilihan: ['さようなら', 'ありがとう', 'こんにちは', 'おやすみなさい'] },
  { id: 'b7-c2-4', grup: 'catatan', no: 2, soal: '「さようなら」は 英語___ 何ですか。……「Goodbye」です。', arti: 'Apa bahasa Inggris dari "Sayonara"? ……"Goodbye".', jawaban: 'で', pilihan: ['で', 'を', 'に', 'と'] },
  { id: 'b7-c2-5', grup: 'catatan', no: 2, soal: 'A：これは 日本語___ 何ですか。B：「手帳」です。', arti: 'A：Ini dalam bahasa Jepang apa? B："Buku agenda".', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },

  // ── Catatan 3 · Kata Benda1(orang) に Kata Benda2 を あげます, dll ──
  { id: 'b7-c3-1', grup: 'catatan', no: 3, soal: 'イーさん___ 本を 貸します。', arti: 'Saya meminjamkan buku kepada Sdr. Lee.', jawaban: 'に', pilihan: ['に', 'を', 'で', 'へ'] },
  { id: 'b7-c3-2', grup: 'catatan', no: 3, soal: '山田さん___ 英語を 教えます。', arti: 'Saya mengajar bahasa Inggris kepada Sdr. Yamada.', jawaban: 'に', pilihan: ['に', 'が', 'を', 'で'] },
  { id: 'b7-c3-3', grup: 'catatan', no: 3, soal: 'A：だれ___ 英語を 教えますか。B：山田さんに 教えます。', arti: 'A：Kepada siapa Anda mengajar bahasa Inggris? B：Kepada Sdr. Yamada.', jawaban: 'に', pilihan: ['に', 'を', 'で', 'と'] },
  { id: 'b7-c3-4', grup: 'catatan', no: 3, soal: '木村さん___ 花を あげます。', arti: 'Saya memberikan bunga kepada Sdr. Kimura.', jawaban: 'に', pilihan: ['に', 'を', 'は', 'で'] },
  { id: 'b7-c3-5', grup: 'catatan', no: 3, soal: 'A：イーさんに 何を 貸しますか。B：本___ 貸します。', arti: 'A：Apa yang Anda pinjamkan kepada Sdr. Lee? B：Meminjamkan buku.', jawaban: 'を', pilihan: ['を', 'に', 'が', 'で'] },

  // ── Catatan 4 · Kata Benda1(orang) に Kata Benda2 を もらいます, dll ─
  { id: 'b7-c4-1', grup: 'catatan', no: 4, soal: 'カリナさん___ CDを 借りました。', arti: 'Saya meminjam CD dari Karina.', jawaban: 'に', pilihan: ['に', 'を', 'で', 'へ'] },
  { id: 'b7-c4-2', grup: 'catatan', no: 4, soal: 'ワンさん___ 中国語を 習います。', arti: 'Saya belajar bahasa Tionghoa dari Sdr. Wang.', jawaban: 'に', pilihan: ['に', 'が', 'を', 'で'] },
  { id: 'b7-c4-3', grup: 'catatan', no: 4, soal: '木村さん___ 花を もらいました。', arti: 'Saya mendapatkan bunga dari Sdr. Kimura.', jawaban: 'に', pilihan: ['に', 'を', 'は', 'で'] },
  { id: 'b7-c4-4', grup: 'catatan', no: 4, soal: '学校___ 本を 借りました。', arti: 'Saya meminjam buku dari sekolah.', jawaban: 'から', pilihan: ['から', 'を', 'で', 'へ'] },
  { id: 'b7-c4-5', grup: 'catatan', no: 4, soal: 'A：だれ___ CDを 借りましたか。B：カリナさんに 借りました。', arti: 'A：Dari siapa Anda meminjam CD? B：Dari Karina.', jawaban: 'に', pilihan: ['に', 'を', 'で', 'と'] },

  // ── Catatan 5 · もう Kata Kerja ました ─────────────────────────────
  { id: 'b7-c5-1', grup: 'catatan', no: 5, soal: 'もう 荷物を ___か。', arti: 'Apakah barang sudah dikirim? ……Ya, sudah dikirim.', jawaban: '送りました', pilihan: ['送りました', '送ります', '送りません', '送りましょう'] },
  { id: 'b7-c5-2', grup: 'catatan', no: 5, soal: 'もう 昼ごはんを 食べましたか。……いいえ、___。', arti: 'Sudah makan siang? ……Belum.', jawaban: 'まだです', pilihan: ['まだです', '食べませんでした', 'はい', 'もうです'] },
  { id: 'b7-c5-3', grup: 'catatan', no: 5, soal: 'もう 切符を 買いましたか。……はい、___。', arti: 'Sudah membeli karcis? ……Ya, sudah membeli.', jawaban: 'もう 買いました', pilihan: ['もう 買いました', 'まだです', '買いません', '買いましょう'] },
  { id: 'b7-c5-4', grup: 'catatan', no: 5, soal: 'A：もう メールを 送りましたか。B：いいえ、まだです。これから ___。', arti: 'A：Sudah mengirim e-mail? B：Belum. Mulai sekarang saya akan mengirim.', jawaban: '送ります', pilihan: ['送ります', '送りました', '送りません', '送りましょう'] },
  { id: 'b7-c5-5', grup: 'catatan', no: 5, soal: 'A：もう お昼ごはんを 食べましたか。B：はい、___。', arti: 'A：Sudah makan siang? B：Ya, sudah makan.', jawaban: 'もう 食べました', pilihan: ['もう 食べました', 'まだです', '食べません', '食べましょう'] },

  // ── Catatan 6 · Menghilangkan partikel ─────────────────────────────
  { id: 'b7-c6-1', grup: 'catatan', no: 6, soal: 'この ___スプーン、すてきですね。', arti: 'Sendok ini bagus ya.', jawaban: '（なし）', pilihan: ['（なし）', 'は', 'が', 'の'] },
  { id: 'b7-c6-2', grup: 'catatan', no: 6, soal: 'コーヒー___、もう 一杯 いかがですか。', arti: 'Bagaimana kopi secangkir lagi?', jawaban: '（なし）', pilihan: ['（なし）', 'を', 'は', 'が'] },
  { id: 'b7-c6-3', grup: 'catatan', no: 6, soal: 'お茶___、もう 一杯 いかがですか。', arti: 'Bagaimana teh secangkir lagi?', jawaban: '（なし）', pilihan: ['（なし）', 'を', 'に', 'が'] },
  { id: 'b7-c6-4', grup: 'catatan', no: 6, soal: 'この 花___、すてきですね。', arti: 'Bunga ini bagus ya.', jawaban: '（なし）', pilihan: ['（なし）', 'は', 'が', 'を'] },
  { id: 'b7-c6-5', grup: 'catatan', no: 6, soal: 'コーヒー、もう ___ いかがですか。', arti: 'Bagaimana kopi secangkir lagi?', jawaban: '一杯', pilihan: ['一杯', '一本', '一枚', '一人'] },
]
