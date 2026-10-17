import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 20 — tepat 5 soal per pola (4 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` di bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Kerja Bentuk Biasa ───────────────────────────────
  { id: 'b20-1-1', grup: 'bunpou', no: 1, soal: 'アイスクリームを___？', arti: 'Mau makan es krim?', jawaban: '食べる', pilihan: ['食べる', '食べます', '食べた', '食べて'] },
  { id: 'b20-1-2', grup: 'bunpou', no: 1, soal: 'きのう 木村さんに___？', arti: 'Kemarin bertemu dengan Sdr. Kimura?', jawaban: '会った', pilihan: ['会った', '会います', '会う', '会って'] },
  { id: 'b20-1-3', grup: 'bunpou', no: 1, soal: 'あした みんなで 京都へ___？', arti: 'Bagaimana kalau besok kita pergi ke Kyoto bersama-sama?', jawaban: '行かない', pilihan: ['行かない', '行きません', '行く', '行った'] },
  { id: 'b20-1-4', grup: 'bunpou', no: 1, soal: 'そこに はさみが___？', arti: 'Di situ ada gunting?', jawaban: 'ある', pilihan: ['ある', 'あります', 'あった', 'あって'] },
  { id: 'b20-1-5', grup: 'bunpou', no: 1, soal: 'きのう 木村さんに 会った？……ううん、___。', arti: 'Kemarin bertemu Sdr. Kimura? ……Tidak, tidak bertemu.', jawaban: '会わなかった', pilihan: ['会わなかった', '会わない', '会いませんでした', '会った'] },

  // ── 文型 2 · Kata Benda₁ は Kata Benda₂ が (kata sifat) ─────────────
  { id: 'b20-2-1', grup: 'bunpou', no: 2, soal: '日本は 物価___ 高い。', arti: 'Di Jepang harga barang-barang mahal.', jawaban: 'が', pilihan: ['が', 'は', 'を', 'に'] },
  { id: 'b20-2-2', grup: 'bunpou', no: 2, soal: '東京は 人___ 多い。', arti: 'Di Tokyo banyak orang.', jawaban: 'が', pilihan: ['が', 'は', 'を', 'も'] },
  { id: 'b20-2-3', grup: 'bunpou', no: 2, soal: '日本は 物価が___。', arti: 'Di Jepang harga barang-barang mahal.', jawaban: '高い', pilihan: ['高い', '高くて', '高かった', '高く'] },
  { id: 'b20-2-4', grup: 'bunpou', no: 2, soal: '東京は 人が___。', arti: 'Di Tokyo banyak orang.', jawaban: '多い', pilihan: ['多い', '多くて', '多かった', '多く'] },
  { id: 'b20-2-5', grup: 'bunpou', no: 2, soal: '大阪は 食べ物が___。', arti: 'Di Osaka makanannya enak. (bentuk biasa)', jawaban: 'おいしい', pilihan: ['おいしい', 'おいしいだ', 'おいしくて', 'おいしく'] },

  // ── 文型 3 · Kata Sifat な Bentuk Biasa ────────────────────────────
  { id: 'b20-3-1', grup: 'bunpou', no: 3, soal: '沖縄の 海は___。', arti: 'Laut Okinawa indah. (bentuk biasa, lampau)', jawaban: 'きれいだった', pilihan: ['きれいだった', 'きれいでした', 'きれいだ', 'きれい'] },
  { id: 'b20-3-2', grup: 'bunpou', no: 3, soal: '沖縄の 海は きれい___。', arti: 'Laut Okinawa indah. (bentuk biasa, lampau)', jawaban: 'だった', pilihan: ['だった', 'でした', 'だ', 'な'] },
  { id: 'b20-3-3', grup: 'bunpou', no: 3, soal: '今___？', arti: 'Sekarang luang?', jawaban: '暇', pilihan: ['暇', '暇な', '暇だ', '暇です'] },
  { id: 'b20-3-4', grup: 'bunpou', no: 3, soal: 'この 海は きれいじゃ___。', arti: 'Laut ini tidak indah. (bentuk biasa, negatif)', jawaban: 'ない', pilihan: ['ない', 'ありません', 'なかった', 'だ'] },
  { id: 'b20-3-5', grup: 'bunpou', no: 3, soal: 'この 町は 静か___。', arti: 'Kota ini tenang. (bentuk biasa, sekarang)', jawaban: 'だ', pilihan: ['だ', 'な', 'です', 'の'] },

  // ── 文型 4 · Kata Benda Bentuk Biasa ───────────────────────────────
  { id: 'b20-4-1', grup: 'bunpou', no: 4, soal: 'きょうは 僕の 誕生日___。', arti: 'Hari ini hari ulang tahunku.', jawaban: 'だ', pilihan: ['だ', 'です', 'な', 'の'] },
  { id: 'b20-4-2', grup: 'bunpou', no: 4, soal: 'きょうは 休みじゃ___。', arti: 'Hari ini bukan hari libur.', jawaban: 'ない', pilihan: ['ない', 'ありません', 'なかった', 'だ'] },
  { id: 'b20-4-3', grup: 'bunpou', no: 4, soal: 'きのうは 休み___。', arti: 'Kemarin hari libur. (bentuk biasa, lampau)', jawaban: 'だった', pilihan: ['だった', 'でした', 'だ', 'な'] },
  { id: 'b20-4-4', grup: 'bunpou', no: 4, soal: 'きのうは 休みじゃ___。', arti: 'Kemarin bukan hari libur. (bentuk biasa, lampau negatif)', jawaban: 'なかった', pilihan: ['なかった', 'ない', 'ありませんでした', 'だ'] },
  { id: 'b20-4-5', grup: 'bunpou', no: 4, soal: 'あしたは___だ。', arti: 'Besok hari Minggu.', jawaban: '日曜日', pilihan: ['日曜日', '月曜日', '休み', '誕生日'] },

  // ── Catatan 1 · Bentuk Sopan dan Bentuk Biasa ──────────────────────
  { id: 'b20-c1-1', grup: 'catatan', no: 1, soal: 'あした 東京へ 行きます。→ あした 東京へ___。', arti: 'Besok pergi ke Tokyo. (bentuk biasa: …行く。)', jawaban: '行く', pilihan: ['行く', '行きます', '行った', '行って'] },
  { id: 'b20-c1-2', grup: 'catatan', no: 1, soal: '毎日 忙しいです。→ 毎日___。', arti: 'Setiap hari sibuk. (bentuk biasa: …忙しい。)', jawaban: '忙しい', pilihan: ['忙しい', '忙しいです', '忙しいだ', '忙しくて'] },
  { id: 'b20-c1-3', grup: 'catatan', no: 1, soal: '相撲が 好きです。→ 相撲が___。', arti: 'Suka sumo. (bentuk biasa: …好きだ。)', jawaban: '好きだ', pilihan: ['好きだ', '好きです', '好きな', '好き'] },
  { id: 'b20-c1-4', grup: 'catatan', no: 1, soal: '富士山に 登りたいです。→ 富士山に___。', arti: 'Ingin mendaki Gunung Fuji. (bentuk biasa: …登りたい。)', jawaban: '登りたい', pilihan: ['登りたい', '登りたいです', '登りたいだ', '登りたくて'] },
  { id: 'b20-c1-5', grup: 'catatan', no: 1, soal: 'ドイツへ 行った ことが ありません。→ ドイツへ 行った ことが___。', arti: 'Belum pernah pergi ke Jerman. (bentuk biasa: …ことがない。)', jawaban: 'ない', pilihan: ['ない', 'ありません', 'なかった', 'ある'] },

  // ── Catatan 2 · Pembagian pemakaian bentuk sopan & biasa ───────────
  { id: 'b20-c2-1', grup: 'catatan', no: 2, soal: 'Bentuk yang diikuti です・ます disebut bentuk ___。', arti: 'Bentuk yang diikuti です・ます disebut bentuk sopan.', jawaban: 'sopan', pilihan: ['sopan', 'biasa', 'kamus', 'tanya'] },
  { id: 'b20-c2-2', grup: 'catatan', no: 2, soal: 'Bentuk yang dipakai kepada teman akrab disebut bentuk ___。', arti: 'Bentuk yang dipakai kepada teman akrab disebut bentuk biasa.', jawaban: 'biasa', pilihan: ['biasa', 'sopan', 'halus', 'lampau'] },
  { id: 'b20-c2-3', grup: 'catatan', no: 2, soal: '「あした 東京へ 行く。」adalah contoh bentuk ___。', arti: '「あした 東京へ 行く。」adalah contoh bentuk biasa.', jawaban: 'biasa', pilihan: ['biasa', 'sopan', 'tanya', 'lampau'] },
  { id: 'b20-c2-4', grup: 'catatan', no: 2, soal: '「あした 東京へ 行きます。」adalah contoh bentuk ___。', arti: '「あした 東京へ 行きます。」adalah contoh bentuk sopan.', jawaban: 'sopan', pilihan: ['sopan', 'biasa', 'kamus', 'negatif'] },
  { id: 'b20-c2-5', grup: 'catatan', no: 2, soal: 'Untuk menulis catatan harian pada umumnya dipakai bentuk ___。', arti: 'Untuk catatan harian pada umumnya dipakai bentuk biasa.', jawaban: 'biasa', pilihan: ['biasa', 'sopan', 'tanya', 'perintah'] },

  // ── Catatan 3 · Percakapan dalam Bentuk Biasa ──────────────────────
  { id: 'b20-c3-1', grup: 'catatan', no: 3, soal: 'コーヒーを___？', arti: 'Mau minum kopi?', jawaban: '飲む', pilihan: ['飲む', '飲みます', '飲んだ', '飲んで'] },
  { id: 'b20-c3-2', grup: 'catatan', no: 3, soal: '今晩___？', arti: 'Nanti malam luang?', jawaban: '暇', pilihan: ['暇', '暇な', '暇だ', '暇です'] },
  { id: 'b20-c3-3', grup: 'catatan', no: 3, soal: '辞書、___？', arti: 'Punya kamus? (bentuk biasa; い dihilangkan)', jawaban: '持ってる', pilihan: ['持ってる', '持っています', '持った', '持って'] },
  { id: 'b20-c3-4', grup: 'catatan', no: 3, soal: 'その カレーは おいしい？……ううん、辛い___、おいしい。', arti: 'Kare itu enak? ……Ya, pedas, tetapi enak.', jawaban: 'けど', pilihan: ['けど', 'から', 'ので', 'ても'] },
  { id: 'b20-c3-5', grup: 'catatan', no: 3, soal: 'あした 京都へ___？', arti: 'Bagaimana kalau besok ke Kyoto?', jawaban: '行かない', pilihan: ['行かない', '行きません', '行く', '行った'] },
]
