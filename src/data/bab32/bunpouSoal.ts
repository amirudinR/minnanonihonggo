import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 32 — tepat 5 soal per pola (6 pola 文型, tanpa Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · 〜た ほうがいいです／〜ない ほうがいいです ──────────────
  { id: 'b32-1-1', grup: 'bunpou', no: 1, soal: '毎日 運動した ___です。', arti: 'Lebih baik berolahraga setiap hari.', jawaban: 'ほうがいい', pilihan: ['ほうがいい', 'つもり', '予定', 'かもしれない'] },
  { id: 'b32-1-2', grup: 'bunpou', no: 1, soal: '熱が あるんです。……じゃ、おふろに 入らない ___ですよ。', arti: 'Berdemam. ……Kalau begitu, lebih baik jangan mandi.', jawaban: 'ほうがいい', pilihan: ['ほうがいい', 'つもり', 'でしょう', 'ばいい'] },
  { id: 'b32-1-3', grup: 'bunpou', no: 1, soal: '毎日 運動___ ほうが いいです。', arti: 'Lebih baik berolahraga setiap hari.', jawaban: 'した', pilihan: ['した', 'する', 'して', 'しない'] },
  { id: 'b32-1-4', grup: 'bunpou', no: 1, soal: 'からだに よくないですから、たばこを ___ ほうが いいですよ。', arti: 'Karena tidak baik untuk badan, sebaiknya jangan merokok.', jawaban: '吸わない', pilihan: ['吸わない', '吸う', '吸って', '吸った'] },
  { id: 'b32-1-5', grup: 'bunpou', no: 1, soal: '現金で 持って ___ ほうが いいですよ。', arti: 'Lebih baik jangan membawa uang tunai.', jawaban: '行かない', pilihan: ['行かない', '行く', '行って', '行った'] },

  // ── 文型 2 · ～でしょう ────────────────────────────────────────────
  { id: 'b32-2-1', grup: 'bunpou', no: 2, soal: 'あしたは 雨が ___でしょう。', arti: 'Besok akan turun hujan.', jawaban: '降る', pilihan: ['降る', '降って', '降った', '降ります'] },
  { id: 'b32-2-2', grup: 'bunpou', no: 2, soal: 'タワポンさんは 合格する___。', arti: 'Apakah sdr. Thawapon akan lulus?', jawaban: 'でしょうか', pilihan: ['でしょうか', 'でしょう', 'ですか', 'でした'] },
  { id: 'b32-2-3', grup: 'bunpou', no: 2, soal: 'きっと 合格___でしょう。', arti: 'Pasti akan lulus.', jawaban: 'する', pilihan: ['する', 'した', 'して', 'します'] },
  { id: 'b32-2-4', grup: 'bunpou', no: 2, soal: 'あしたは 寒くなる___。', arti: 'Besok mungkin akan menjadi dingin.', jawaban: 'でしょう', pilihan: ['でしょう', 'でしょうか', 'ですか', 'ではありません'] },
  { id: 'b32-2-5', grup: 'bunpou', no: 2, soal: 'まだ しばらく よく ならない___。', arti: 'Untuk sementara (keadaan) tidak akan membaik.', jawaban: 'でしょう', pilihan: ['でしょう', 'でしょうか', 'ですか', 'ました'] },

  // ── 文型 3 · ～かもしれません ───────────────────────────────────────
  { id: 'b32-3-1', grup: 'bunpou', no: 3, soal: '約束の 時間に 間に ___かも しれません。', arti: 'Ada kemungkinan tidak tepat pada waktu yang saya janjikan.', jawaban: '合わない', pilihan: ['合わない', '合う', '合って', '合った'] },
  { id: 'b32-3-2', grup: 'bunpou', no: 3, soal: '故障___ しれません。', arti: 'Mungkin rusak.', jawaban: 'かも', pilihan: ['かも', 'でしょう', 'ぐらい', 'しか'] },
  { id: 'b32-3-3', grup: 'bunpou', no: 3, soal: 'あした 雨が 降る___ しれません。', arti: 'Besok mungkin turun hujan.', jawaban: 'かも', pilihan: ['かも', 'でしょう', 'だけ', 'ほど'] },
  { id: 'b32-3-4', grup: 'bunpou', no: 3, soal: '2、3日 高い 熱が 続く___ しれません。', arti: 'Dua, tiga hari ini demam tinggi mungkin akan berlanjut.', jawaban: 'かも', pilihan: ['かも', 'でしょう', 'ほど', 'ぐらい'] },
  { id: 'b32-3-5', grup: 'bunpou', no: 3, soal: 'この 店は 休み___。', arti: 'Toko ini mungkin tutup.', jawaban: 'かもしれません', pilihan: ['かもしれません', 'でしょう', 'ほうがいいです', 'でしょうか'] },

  // ── 文型 4 · Kata Kerja（Bentuk ます）ましょう（usulan yang tegas）────
  { id: 'b32-4-1', grup: 'bunpou', no: 4, soal: '故障かも しれません。ちょっと ___。', arti: 'Mungkin rusak. Mari periksanya sebentar.', jawaban: '調べましょう', pilihan: ['調べましょう', '調べませんか', '調べました', '調べます'] },
  { id: 'b32-4-2', grup: 'bunpou', no: 4, soal: 'この 問題は 難しいですね。先生に ___。', arti: 'Soal ini sulit ya. Mari bertanya kepada guru.', jawaban: '聞きましょう', pilihan: ['聞きましょう', '聞きませんか', '聞きました', '聞きます'] },
  { id: 'b32-4-3', grup: 'bunpou', no: 4, soal: '時間が ありませんから、___。', arti: 'Karena tidak ada waktu, mari kita bergegas.', jawaban: '急ぎましょう', pilihan: ['急ぎましょう', '急ぎませんか', '急ぎました', '急ぎます'] },
  { id: 'b32-4-4', grup: 'bunpou', no: 4, soal: 'もう 12時です。___。', arti: 'Sudah jam 12. Mari kita makan siang.', jawaban: '昼ごはんを 食べましょう', pilihan: ['昼ごはんを 食べましょう', '昼ごはんを 食べませんか', '昼ごはんを 食べました', '昼ごはんを 食べます'] },
  { id: 'b32-4-5', grup: 'bunpou', no: 4, soal: 'A：だれが 行きますか。B：わたしが ___。', arti: 'A：Siapa yang pergi? B：Saya yang akan pergi.', jawaban: '行きましょう', pilihan: ['行きましょう', '行きませんか', '行きました', '行きます'] },

  // ── 文型 5 · Kata Keterangan Bilangan で ────────────────────────────
  { id: 'b32-5-1', grup: 'bunpou', no: 5, soal: '駅まで 30分 ___ 行けますか。', arti: 'Dapat pergi sampai stasiun dalam waktu tiga puluh menit?', jawaban: 'で', pilihan: ['で', 'に', 'を', 'と'] },
  { id: 'b32-5-2', grup: 'bunpou', no: 5, soal: '3万円 ___ パソコンが 買えますか。', arti: 'Dapat membeli komputer dengan tiga puluh ribu yen?', jawaban: 'で', pilihan: ['で', 'に', 'を', 'が'] },
  { id: 'b32-5-3', grup: 'bunpou', no: 5, soal: 'この 本は 1週間 ___ 読めますか。', arti: 'Dapat membaca buku ini dalam satu minggu?', jawaban: 'で', pilihan: ['で', 'に', 'を', 'と'] },
  { id: 'b32-5-4', grup: 'bunpou', no: 5, soal: '1000円 ___ 昼ごはんが 食べられますか。', arti: 'Dapat makan siang dengan seribu yen?', jawaban: 'で', pilihan: ['で', 'に', 'を', 'が'] },
  { id: 'b32-5-5', grup: 'bunpou', no: 5, soal: '家から 会社まで 1時間 ___ 行けますか。', arti: 'Dapat pergi dari rumah sampai kantor dalam satu jam?', jawaban: 'で', pilihan: ['で', 'に', 'を', 'へ'] },

  // ── 文型 6 · 何か 心配な こと／どこか いい 所 ───────────────────────
  { id: 'b32-6-1', grup: 'bunpou', no: 6, soal: '何___ 心配な ことが あるんですか。', arti: 'Ada suatu hal yang mengkhawatirkan?', jawaban: 'か', pilihan: ['か', 'が', 'を', 'も'] },
  { id: 'b32-6-2', grup: 'bunpou', no: 6, soal: 'スキーに 行きたいんですが、どこ___ いい 所、ありますか。', arti: '(Saya) ingin pergi ski, apakah ada suatu tempat yang bagus?', jawaban: 'か', pilihan: ['か', 'が', 'に', 'で'] },
  { id: 'b32-6-3', grup: 'bunpou', no: 6, soal: '何か 心配な こと___ あるんですか。', arti: 'Ada suatu hal yang mengkhawatirkan?', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b32-6-4', grup: 'bunpou', no: 6, soal: '何か 冷たい 物___ 飲みたいです。', arti: '(Saya) ingin minum sesuatu yang dingin.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'と'] },
  { id: 'b32-6-5', grup: 'bunpou', no: 6, soal: 'A：何か ___ ことは ありませんか。B：いいえ、特に ありません。', arti: 'A：Apakah ada suatu hal yang mengkhawatirkan? B：Tidak, tidak ada yang khusus.', jawaban: '心配な', pilihan: ['心配な', '心配', '心配の', '心配し'] },
]
