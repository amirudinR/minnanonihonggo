import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 27 — tepat 5 soal per pola (4 pola 文型 + 2 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Kerja Potensial（可能動詞） ─────────────────────
  { id: 'b27-1-1', grup: 'bunpou', no: 1, soal: 'わたしは 日本語が ___ます。', arti: 'Saya bisa berbahasa Jepang.', jawaban: '話せ', pilihan: ['話せ', '話し', '話す', '話さ'] },
  { id: 'b27-1-2', grup: 'bunpou', no: 1, soal: 'ミラーさんは 漢字___ 読めます。', arti: 'Sdr. Miller bisa membaca huruf Kanji.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b27-1-3', grup: 'bunpou', no: 1, soal: '一人で 病院へ ___か。', arti: 'Bisa pergi ke rumah sakit sendiri?', jawaban: '行けます', pilihan: ['行けます', '行きます', '行きました', '行く'] },
  { id: 'b27-1-4', grup: 'bunpou', no: 1, soal: '田中さんに ___ませんでした。', arti: 'Tidak bisa bertemu dengan sdr. Tanaka.', jawaban: '会え', pilihan: ['会え', '会い', '会う', '会って'] },
  { id: 'b27-1-5', grup: 'bunpou', no: 1, soal: 'この 銀行で ドルが ___。', arti: 'Di bank ini dolar dapat ditukar.', jawaban: '換えられます', pilihan: ['換えられます', '換えます', '換えました', '換えて います'] },

  // ── 文型 2 · 見えます・聞こえます ────────────────────────────────
  { id: 'b27-2-1', grup: 'bunpou', no: 2, soal: '新幹線から 富士山___ 見えます。', arti: 'Dari Shinkansen terlihat Gunung Fuji.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b27-2-2', grup: 'bunpou', no: 2, soal: 'ラジオの 音___ 聞こえます。', arti: 'Terdengar suara radio.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'と'] },
  { id: 'b27-2-3', grup: 'bunpou', no: 2, soal: '新宿で 今 黒沢の 映画が ___。', arti: 'Di Shinjuku sekarang bisa menonton film karya sutradara Kurosawa.', jawaban: '見られます', pilihan: ['見られます', '見えます', '見ます', '見ました'] },
  { id: 'b27-2-4', grup: 'bunpou', no: 2, soal: '電話で 天気予報が ___。', arti: 'Melalui telepon dapat mendengar prakiraan cuaca.', jawaban: '聞けます', pilihan: ['聞けます', '聞こえます', '聞きます', '聞きました'] },
  { id: 'b27-2-5', grup: 'bunpou', no: 2, soal: '鳥の 声が ___ね。……ええ。もう 春ですね。', arti: 'Suara burung terdengar, ya. ……Ya. Musim semi telah tiba.', jawaban: '聞こえます', pilihan: ['聞こえます', '聞けます', '聞きます', '見えます'] },

  // ── 文型 3 · できます（dibangun／selesai） ────────────────────────
  { id: 'b27-3-1', grup: 'bunpou', no: 3, soal: '駅の 前に 大きい スーパーが ___。', arti: 'Di depan stasiun, telah dibangun pasar swalayan besar.', jawaban: 'できました', pilihan: ['できました', 'できます', 'できません', 'できませんでした'] },
  { id: 'b27-3-2', grup: 'bunpou', no: 3, soal: '時計の 修理は いつ ___か。', arti: 'Kapan perbaikan jam akan selesai?', jawaban: 'できます', pilihan: ['できます', 'できました', 'できません', 'できる'] },
  { id: 'b27-3-3', grup: 'bunpou', no: 3, soal: '時計の 修理は まだ ___。', arti: 'Perbaikan jam belum selesai.', jawaban: 'できません', pilihan: ['できません', 'できます', 'できました', 'できませんでした'] },
  { id: 'b27-3-4', grup: 'bunpou', no: 3, soal: '関西空港は 1994年 の 秋に ___。', arti: 'Bandar Udara Kansai dibangun pada musim gugur tahun 1994.', jawaban: 'できました', pilihan: ['できました', 'できます', 'できません', 'できる'] },
  { id: 'b27-3-5', grup: 'bunpou', no: 3, soal: 'A：パソコンの 修理は もう できましたか。B：いいえ、まだ ___。', arti: 'A：Perbaikan komputer sudah selesai? B：Tidak, belum selesai.', jawaban: 'できません', pilihan: ['できません', 'できます', 'できました', 'できる'] },

  // ── 文型 4 · ～しか ＋ Kata Benda/Kata Keterangan Bilangan ────────
  { id: 'b27-4-1', grup: 'bunpou', no: 4, soal: 'ローマ字___ 書けません。', arti: 'Hanya bisa menulis huruf latin saja.', jawaban: 'しか', pilihan: ['しか', 'だけ', 'も', 'は'] },
  { id: 'b27-4-2', grup: 'bunpou', no: 4, soal: 'ローマ字___ 書きます。', arti: 'Bisa menulis huruf latin saja.', jawaban: 'だけ', pilihan: ['だけ', 'しか', 'も', 'は'] },
  { id: 'b27-4-3', grup: 'bunpou', no: 4, soal: 'パワー電気では 夏休みは 1週間___ 休めません。', arti: 'Di Power Elektro hanya bisa libur satu minggu saja.', jawaban: 'しか', pilihan: ['しか', 'だけ', 'ぐらい', 'ごろ'] },
  { id: 'b27-4-4', grup: 'bunpou', no: 4, soal: 'ここには 日本語の 本___ ありません。', arti: 'Di sini hanya ada buku bahasa Jepang.', jawaban: 'しか', pilihan: ['しか', 'だけ', 'も', 'が'] },
  { id: 'b27-4-5', grup: 'bunpou', no: 4, soal: 'A：お金が ありますか。B：いいえ、100円___ ありません。', arti: 'A：Punya uang? B：Tidak, hanya ada 100 yen.', jawaban: 'しか', pilihan: ['しか', 'だけ', 'も', 'は'] },

  // ── Catatan 1 · Kata Benda（Perbandingan）は ─────────────────────
  { id: 'b27-c1-1', grup: 'catatan', no: 1, soal: 'ワインは 飲みますが、ビール___ 飲みません。', arti: 'Saya minum anggur, tetapi tidak minum bir.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'に'] },
  { id: 'b27-c1-2', grup: 'catatan', no: 1, soal: 'きのうは 山が 見えましたが、きょう___ 見えません。', arti: 'Kemarin gunung terlihat, tetapi hari ini tidak terlihat.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'に'] },
  { id: 'b27-c1-3', grup: 'catatan', no: 1, soal: 'A：ビールは 好きですか。B：いいえ、ビール___ 好きじゃないんです。', arti: 'A：Suka bir? B：Tidak, saya tidak suka bir.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'で'] },
  { id: 'b27-c1-4', grup: 'catatan', no: 1, soal: 'りんご___ 食べますが、バナナは 食べません。', arti: 'Saya makan apel, tetapi tidak makan pisang.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'へ'] },
  { id: 'b27-c1-5', grup: 'catatan', no: 1, soal: '土曜日___ 働きますが、日曜日は 休みます。', arti: 'Hari Sabtu bekerja, tetapi hari Minggu libur.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'に'] },

  // ── Catatan 2 · は yang dianggap kata yang disertai Kata Bantu ────
  { id: 'b27-c2-1', grup: 'catatan', no: 2, soal: '日本で___ 馬を 見る ことが できません。', arti: 'Di Jepang tidak bisa melihat kuda.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'に'] },
  { id: 'b27-c2-2', grup: 'catatan', no: 2, soal: 'ここから___ 東京 スカイツリーが 見えません。', arti: 'Dari sini, Tokyo Sky Tree tidak terlihat.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'に'] },
  { id: 'b27-c2-3', grup: 'catatan', no: 2, soal: '天気の いい 日___ 海が 見えるんです。', arti: 'Pada hari yang bercuaca baik, laut terlihat.', jawaban: 'には', pilihan: ['には', 'では', 'を', 'が'] },
  { id: 'b27-c2-4', grup: 'catatan', no: 2, soal: '東京へ___ 行きますが、大阪へは 行きません。', arti: 'Saya pergi ke Tokyo, tetapi tidak pergi ke Osaka.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'に'] },
  { id: 'b27-c2-5', grup: 'catatan', no: 2, soal: 'うちから___ 富士山が 見えません。', arti: 'Dari rumah, Gunung Fuji tidak terlihat.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'で'] },
]
