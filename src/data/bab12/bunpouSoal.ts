import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 12 — tepat 5 soal per pola (4 pola 文型 + 0 Catatan Tata Bahasa).
 * Sumber: `contoh`/`artiContoh`/`reibun` di bab ini (pola tidak diubah).
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kalimat nominal & adjektival bentuk waktu lampau ────────
  { id: 'b12-1-1', grup: 'bunpou', no: 1, soal: 'きのうは 雨___。', arti: 'Kemarin hujan.', jawaban: 'でした', pilihan: ['でした', 'です', 'じゃ', 'く'] },
  { id: 'b12-1-2', grup: 'bunpou', no: 1, soal: 'きのうの 試験は 簡単___ ありませんでした。', arti: 'Ujian kemarin tidak mudah.', jawaban: 'じゃ', pilihan: ['じゃ', 'は', 'も', 'な'] },
  { id: 'b12-1-3', grup: 'bunpou', no: 1, soal: 'きのうは 暑___です。', arti: 'Kemarin panas.', jawaban: 'かった', pilihan: ['かった', 'く', 'い', 'でした'] },
  { id: 'b12-1-4', grup: 'bunpou', no: 1, soal: 'きのうの パーティーは あまり 楽しく ___です。', arti: 'Pesta kemarin tidak begitu menyenangkan.', jawaban: 'なかった', pilihan: ['なかった', 'ない', 'なく', 'ありません'] },
  { id: 'b12-1-5', grup: 'bunpou', no: 1, soal: '天気は よかったですか。……いいえ、あまり ___ なかったです。', arti: 'Cuacanya baik? ……Tidak, tidak begitu baik.', jawaban: 'よく', pilihan: ['よく', 'いい', 'よかった', 'いいの'] },

  // ── 文型 2 · Kata Benda1 は Kata Benda2 より Kata Sifat です ────────
  { id: 'b12-2-1', grup: 'bunpou', no: 2, soal: 'この 車は あの 車___ 大きいです。', arti: 'Mobil ini lebih besar daripada mobil itu.', jawaban: 'より', pilihan: ['より', 'ほど', 'くらい', 'だけ'] },
  { id: 'b12-2-2', grup: 'bunpou', no: 2, soal: 'この 車は あの 車より ___です。', arti: 'Mobil ini lebih besar (daripada mobil itu).', jawaban: '大きい', pilihan: ['大きい', '大きく', '大きかった', '大きいの'] },
  { id: 'b12-2-3', grup: 'bunpou', no: 2, soal: '東京は ニューヨークより 人が 多いですか。……はい、___ 多いです。', arti: 'Apakah Tokyo lebih banyak penduduknya daripada New York? ……Ya, jauh lebih banyak.', jawaban: 'ずっと', pilihan: ['ずっと', 'ちょっと', 'あまり', 'だいたい'] },
  { id: 'b12-2-4', grup: 'bunpou', no: 2, soal: '秋は 夏___ すずしいです。', arti: 'Musim gugur lebih sejuk daripada musim panas.', jawaban: 'より', pilihan: ['より', 'ほど', 'まで', 'くらい'] },
  { id: 'b12-2-5', grup: 'bunpou', no: 2, soal: '東京は ニューヨークより 人が ___ですか。', arti: 'Apakah Tokyo lebih banyak penduduknya daripada New York?', jawaban: '多い', pilihan: ['多い', '多く', '多かった', '多いの'] },

  // ── 文型 3 · Kata Benda1 と Kata Benda2 と どちらが Kata Sifat ですか ──
  { id: 'b12-3-1', grup: 'bunpou', no: 3, soal: 'サッカーと 野球と ___が おもしろいですか。', arti: 'Sepak bola dan bisbol, yang mana yang menarik?', jawaban: 'どちら', pilihan: ['どちら', 'どれ', 'どの', 'なに'] },
  { id: 'b12-3-2', grup: 'bunpou', no: 3, soal: '空港まで バスと 電車と どちらが 速いですか。……電車___ ほうが 速いです。', arti: 'Ke bandara, yang mana lebih cepat, bus atau kereta? ……Kereta lebih cepat.', jawaban: 'の', pilihan: ['の', 'が', 'は', 'と'] },
  { id: 'b12-3-3', grup: 'bunpou', no: 3, soal: '海と 山と どちらが 好きですか。……___ 好きです。', arti: 'Suka yang mana, laut atau gunung? ……Suka dua-duanya.', jawaban: 'どちらも', pilihan: ['どちらも', 'どちらが', 'どちらは', 'どれも'] },
  { id: 'b12-3-4', grup: 'bunpou', no: 3, soal: 'サッカーと 野球と どちらが ___ですか。', arti: 'Sepak bola dan bisbol, yang mana yang menarik?', jawaban: 'おもしろい', pilihan: ['おもしろい', 'おもしろく', 'おもしろかった', 'おもしろいの'] },
  { id: 'b12-3-5', grup: 'bunpou', no: 3, soal: 'サッカーの ___が おもしろいです。', arti: 'Sepak bola yang lebih menarik.', jawaban: 'ほう', pilihan: ['ほう', 'と', 'の', 'が'] },

  // ── 文型 4 · Kata Benda1[の中]で … が いちばん Kata Sifat ですか ────
  { id: 'b12-4-1', grup: 'bunpou', no: 4, soal: '日本料理の中で 何が ___ おいしいですか。', arti: 'Masakan Jepang, yang mana yang paling enak? ……Tempura yang paling enak.', jawaban: 'いちばん', pilihan: ['いちばん', 'だいたい', 'あまり', 'ちょっと'] },
  { id: 'b12-4-2', grup: 'bunpou', no: 4, soal: '日本料理の中で ___ いちばん おいしいですか。……てんぷらが いちばん おいしいです。', arti: 'Di antara masakan Jepang, apa yang paling enak? ……Tempura yang paling enak.', jawaban: '何が', pilihan: ['何が', 'どこが', 'だれが', 'いつが'] },
  { id: 'b12-4-3', grup: 'bunpou', no: 4, soal: '日本料理の中で 何が いちばん ___ですか。', arti: 'Masakan Jepang, yang mana yang paling enak? ……Tempura yang paling enak.', jawaban: 'おいしい', pilihan: ['おいしい', 'おいしく', 'おいしかった', 'おいしいの'] },
  { id: 'b12-4-4', grup: 'bunpou', no: 4, soal: '世界で ___が いちばん 寒いですか。……ロシアです。', arti: 'Di dunia, mana yang paling dingin? ……Rusia.', jawaban: 'どこ', pilihan: ['どこ', 'なに', 'だれ', 'いつ'] },
  { id: 'b12-4-5', grup: 'bunpou', no: 4, soal: '１年の中で ___が いちばん 好きですか。……春が いちばん 好きです。', arti: 'Dalam satu tahun, apa yang paling Anda suka? ……Musim semi.', jawaban: 'いつ', pilihan: ['いつ', 'なに', 'どこ', 'だれ'] },
]
