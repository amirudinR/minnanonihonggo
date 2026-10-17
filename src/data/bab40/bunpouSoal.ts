import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 40 — tepat 5 soal per pola (3 pola 文型 + 2 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · {Bentuk Biasa} か、～ ────────────────────────────────
  { id: 'b40-1-1', grup: 'bunpou', no: 1, soal: 'JL107便は 何時に 到着するか、___。', arti: 'Tolong dicek pukul berapa kedatangan penerbangan bernomor JL107!', jawaban: '調べて ください', pilihan: ['調べて ください', '調べるか どうか', '調べます', '調べました'] },
  { id: 'b40-1-2', grup: 'bunpou', no: 1, soal: '山の 高さは どうやって ___か、知って いますか。', arti: 'Apakah (Anda) tahu bagaimana caranya mengukur tingginya gunung?', jawaban: '測る', pilihan: ['測る', '測ります', '測った', '測って'] },
  { id: 'b40-1-3', grup: 'bunpou', no: 1, soal: '酔って いたので、どこへ 行った___、全然 覚えて いないんです。', arti: 'Karena mabuk, (saya) sama sekali tidak ingat pergi ke mana.', jawaban: 'か', pilihan: ['か', 'か どうか', 'は', 'が'] },
  { id: 'b40-1-4', grup: 'bunpou', no: 1, soal: '結婚の お祝いは 何が ___、話して います。', arti: 'Sedang membicarakan hadiah apa yang cocok untuk pernikahan.', jawaban: 'いいか', pilihan: ['いいか', 'いいか どうか', 'いい', 'いいです'] },
  { id: 'b40-1-5', grup: 'bunpou', no: 1, soal: 'わたしたちが 初めて 会ったのは いつ___、覚えて いますか。', arti: 'Apakah (Anda) masih ingat kapan pertama kali kita bertemu?', jawaban: 'か', pilihan: ['か', 'か どうか', 'を', 'が'] },

  // ── 文型 2 · {Bentuk Biasa} か どうか、～ ─────────────────────────
  { id: 'b40-2-1', grup: 'bunpou', no: 2, soal: '忘年会に 出席するか どうか、20日までに ___ ください。', arti: 'Tolong berikan jawaban sampai tanggal 20 apakah bisa hadir pada pesta akhir tahun atau tidak.', jawaban: '返事を', pilihan: ['返事を', '返事が', '返事に', '返事で'] },
  { id: 'b40-2-2', grup: 'bunpou', no: 2, soal: 'その 話は ___ か どうか、わかりません。', arti: '(Saya) kurang tahu apakah cerita itu benar atau tidak.', jawaban: 'ほんとう', pilihan: ['ほんとう', 'ほんとうな', 'ほんとうに', 'ほんとうです'] },
  { id: 'b40-2-3', grup: 'bunpou', no: 2, soal: 'まちがいが ___ か どうか、調べて ください。', arti: 'Tolong diperiksa apakah ada kesalahan atau tidak.', jawaban: 'ない', pilihan: ['ない', 'ある', 'あります', 'あった'] },
  { id: 'b40-2-4', grup: 'bunpou', no: 2, soal: '飛行機に 乗る 人が ナイフを ___ か どうか、調べるんです。', arti: 'Diperiksa apakah orang yang menaiki pesawat membawa pisau atau tidak.', jawaban: '持って いない', pilihan: ['持って いない', '持って いる', '持ちます', '持った'] },
  { id: 'b40-2-5', grup: 'bunpou', no: 2, soal: '山田さんが 来る___、わかりません。', arti: 'Tidak tahu apakah Sdr. Yamada datang atau tidak.', jawaban: 'か どうか', pilihan: ['か どうか', 'か', 'か どう', 'どうか'] },

  // ── 文型 3 · Kata Kerja Bentuk て みます ─────────────────────────
  { id: 'b40-3-1', grup: 'bunpou', no: 3, soal: 'もう 一度 考えて ___。', arti: 'Coba berpikir sekali lagi.', jawaban: 'みます', pilihan: ['みます', 'います', 'あります', 'しまいます'] },
  { id: 'b40-3-2', grup: 'bunpou', no: 3, soal: 'この ズボンを ___ みても いいですか。', arti: 'Bolehkah mencoba memakai celana ini?', jawaban: 'はいて', pilihan: ['はいて', 'はきます', 'はいた', 'はき'] },
  { id: 'b40-3-3', grup: 'bunpou', no: 3, soal: '北海道へ 行って ___。', arti: '(Saya) ingin pergi ke Hokkaido.', jawaban: 'みたいです', pilihan: ['みたいです', 'みます', 'みました', 'みて います'] },
  { id: 'b40-3-4', grup: 'bunpou', no: 3, soal: 'すみません。この 服を ___ みても いいですか。', arti: 'Permisi. Bolehkah mencoba memakai pakaian ini?', jawaban: '着て', pilihan: ['着て', '着ます', '着た', '着'] },
  { id: 'b40-3-5', grup: 'bunpou', no: 3, soal: 'この 料理は おいしそうですね。食べて ___。', arti: 'Masakan ini kelihatan enak ya. Coba (saya) makan.', jawaban: 'みます', pilihan: ['みます', 'みました', 'みて います', 'みたいです'] },

  // ── Catatan 1 · Kata Sifat い(～い) → ～さ ────────────────────────
  { id: 'b40-c1-1', grup: 'catatan', no: 1, soal: '山の ___ は どうやって 測るか、知って いますか。', arti: 'Apakah (Anda) tahu bagaimana caranya mengukur tingginya gunung?', jawaban: '高さ', pilihan: ['高さ', '高い', '高く', '高み'] },
  { id: 'b40-c1-2', grup: 'catatan', no: 1, soal: '新しい 橋の ___ は 3,911メートルです。', arti: 'Panjangnya jembatan baru 3.911 meter.', jawaban: '長さ', pilihan: ['長さ', '長い', '長く', '長み'] },
  { id: 'b40-c1-3', grup: 'catatan', no: 1, soal: '速い → ___（Kata Benda）', arti: 'Kata Sifat い 「速い」diubah menjadi Kata Benda 「速さ」.', jawaban: '速さ', pilihan: ['速さ', '速い', '速く', '速み'] },
  { id: 'b40-c1-4', grup: 'catatan', no: 1, soal: 'この かばんの ___ は どのくらいですか。', arti: 'Berapa berat tas ini?', jawaban: '重さ', pilihan: ['重さ', '重い', '重く', '重み'] },
  { id: 'b40-c1-5', grup: 'catatan', no: 1, soal: 'この 部屋の ___ は どのくらいですか。', arti: 'Berapa luas ruangan ini?', jawaban: '広さ', pilihan: ['広さ', '広い', '広く', '広み'] },

  // ── Catatan 2 · ～て でしょうか ──────────────────────────────────
  { id: 'b40-c2-1', grup: 'catatan', no: 2, soal: 'ハンスは 学校で どう ___。', arti: 'Bagaimana Hans di sekolah?', jawaban: 'でしょうか', pilihan: ['でしょうか', 'でしょうね', 'ましょうか', 'ですよ'] },
  { id: 'b40-c2-2', grup: 'catatan', no: 2, soal: '山田さんは 元気___ でしょうか。', arti: 'Apakah Sdr. Yamada sehat?', jawaban: 'で', pilihan: ['で', 'な', 'だ', 'に'] },
  { id: 'b40-c2-3', grup: 'catatan', no: 2, soal: 'あしたは 雨が ___ でしょうか。', arti: 'Apakah besok akan turun hujan?', jawaban: '降る', pilihan: ['降る', '降ります', '降った', '降って'] },
  { id: 'b40-c2-4', grup: 'catatan', no: 2, soal: '「どう でしょうか」は 「どう ですか」より ___ 言い方です。', arti: '「どう でしょうか」adalah cara bicara yang lebih lembut daripada 「どう ですか」.', jawaban: 'やわらかい', pilihan: ['やわらかい', 'おもい', 'あつい', 'ふるい'] },
  { id: 'b40-c2-5', grup: 'catatan', no: 2, soal: 'かれは どこに ___ でしょうか。', arti: 'Kira-kira dia ada di mana?', jawaban: 'いる', pilihan: ['いる', 'います', 'いた', 'いて'] },
]
