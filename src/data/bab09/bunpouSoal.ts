import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 9 — tepat 5 soal per pola (5 pola 文型 + 0 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Benda が あります / わかります / 好き dll ─────────
  { id: 'b9-1-1', grup: 'bunpou', no: 1, soal: 'わたしは イタリア料理___ 好きです。', arti: 'Saya suka masakan Italia.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b9-1-2', grup: 'bunpou', no: 1, soal: 'わたしは 日本語___ 少し わかります。', arti: 'Saya sedikit mengerti bahasa Jepang.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'へ'] },
  { id: 'b9-1-3', grup: 'bunpou', no: 1, soal: 'きょうは 用事___ あります。', arti: 'Hari ini ada urusan.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'と'] },
  { id: 'b9-1-4', grup: 'bunpou', no: 1, soal: 'カリナさんは 絵___ 上手です。', arti: 'Sdr. Karina pandai menggambar.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b9-1-5', grup: 'bunpou', no: 1, soal: 'わたしは 野菜が ___です。', arti: 'Saya tidak suka sayur.', jawaban: 'きらい', pilihan: ['きらい', 'きらいな', 'きらいく', 'きらいます'] },

  // ── 文型 2 · どんな Kata Benda ─────────────────────────────────────
  { id: 'b9-2-1', grup: 'bunpou', no: 2, soal: '___ スポーツが 好きですか。……サッカーが 好きです。', arti: 'Suka olahraga yang bagaimana? ……Suka sepak bola.', jawaban: 'どんな', pilihan: ['どんな', 'どう', 'どれ', 'どの'] },
  { id: 'b9-2-2', grup: 'bunpou', no: 2, soal: 'A：どんな 音楽が 好きですか。B：___ が 好きです。', arti: 'A：Suka musik yang bagaimana? B：Suka musik klasik.', jawaban: 'クラシック', pilihan: ['クラシック', 'コンサート', 'カラオケ', 'ダンス'] },
  { id: 'b9-2-3', grup: 'bunpou', no: 2, soal: 'A：どんな 料理が 好きですか。B：___ 料理が 好きです。', arti: 'A：Suka masakan yang bagaimana? B：Suka masakan Italia.', jawaban: 'イタリア', pilihan: ['イタリア', 'カラオケ', 'クラシック', 'ダンス'] },
  { id: 'b9-2-4', grup: 'bunpou', no: 2, soal: 'A：___ 飲み物が 好きですか。B：お茶が 好きです。', arti: 'A：Suka minuman yang bagaimana? B：Suka teh.', jawaban: 'どんな', pilihan: ['どんな', 'どう', 'どれ', 'どの'] },
  { id: 'b9-2-5', grup: 'bunpou', no: 2, soal: 'A：どんな スポーツが 好きですか。B：テニス___ 好きです。', arti: 'A：Suka olahraga yang bagaimana? B：Suka tenis.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },

  // ── 文型 3 · よく / だいたい / たくさん / 少し / あまり / 全然 ──────
  { id: 'b9-3-1', grup: 'bunpou', no: 3, soal: '英語が ___ わかります。', arti: 'Mengerti bahasa Inggris dengan baik.', jawaban: 'よく', pilihan: ['よく', 'あまり', '全然', '少し'] },
  { id: 'b9-3-2', grup: 'bunpou', no: 3, soal: '日本語が ___ わかります。', arti: 'Sedikit mengerti bahasa Jepang.', jawaban: '少し', pilihan: ['少し', '全然', 'あまり', 'とても'] },
  { id: 'b9-3-3', grup: 'bunpou', no: 3, soal: '英語が ___ わかりません。', arti: 'Tidak begitu mengerti bahasa Inggris.', jawaban: 'あまり', pilihan: ['あまり', 'とても', 'よく', 'たくさん'] },
  { id: 'b9-3-4', grup: 'bunpou', no: 3, soal: 'お金が ___ あります。', arti: 'Mempunyai banyak uang.', jawaban: 'たくさん', pilihan: ['たくさん', '少し', '全然', 'あまり'] },
  { id: 'b9-3-5', grup: 'bunpou', no: 3, soal: 'お金が ___ ありません。', arti: 'Sama sekali tidak punya uang.', jawaban: '全然', pilihan: ['全然', 'とても', 'よく', 'たくさん'] },

  // ── 文型 4 · Kalimat 1 から、Kalimat 2 ─────────────────────────────
  { id: 'b9-4-1', grup: 'bunpou', no: 4, soal: '時間が ありません___、新聞を 読みません。', arti: 'Karena tidak ada waktu, saya tidak membaca surat kabar.', jawaban: 'から', pilihan: ['から', 'が', 'そして', 'か'] },
  { id: 'b9-4-2', grup: 'bunpou', no: 4, soal: '用事が あります___、早く 帰りました。', arti: 'Karena ada urusan, saya pulang cepat.', jawaban: 'から', pilihan: ['から', 'が', 'そして', 'か'] },
  { id: 'b9-4-3', grup: 'bunpou', no: 4, soal: '用事が ありますから、___ 帰りました。', arti: 'Karena ada urusan, saya pulang cepat.', jawaban: '早く', pilihan: ['早く', '早い', '早な', '早くて'] },
  { id: 'b9-4-4', grup: 'bunpou', no: 4, soal: '時間が ありませんから、新聞を ___。', arti: 'Karena tidak ada waktu, saya tidak membaca surat kabar.', jawaban: '読みません', pilihan: ['読みません', '読みます', '読みました', '読みましょう'] },
  { id: 'b9-4-5', grup: 'bunpou', no: 4, soal: '友達が 来ます___、飲み物を 買います。', arti: 'Karena teman akan datang, saya membeli minuman.', jawaban: 'から', pilihan: ['から', 'が', 'そして', 'か'] },

  // ── 文型 5 · どうして ──────────────────────────────────────────────
  { id: 'b9-5-1', grup: 'bunpou', no: 5, soal: '___ 朝刊を 読みませんか。……時間が ありませんから。', arti: 'Kenapa tidak membaca koran pagi? ……Karena tidak ada waktu.', jawaban: 'どうして', pilihan: ['どうして', 'どんな', 'どう', 'どれ'] },
  { id: 'b9-5-2', grup: 'bunpou', no: 5, soal: 'A：どうして きのう 早く 帰りましたか。B：用事が ___ から。', arti: 'A：Kenapa kemarin pulang cepat? B：Karena ada urusan.', jawaban: 'ありました', pilihan: ['ありました', 'あります', 'ありません', 'ありませんでした'] },
  { id: 'b9-5-3', grup: 'bunpou', no: 5, soal: 'どうして 日本語を 勉強しますか。……日本へ 行きます___。', arti: 'Kenapa belajar bahasa Jepang? ……Karena akan pergi ke Jepang.', jawaban: 'から', pilihan: ['から', 'が', 'か', 'ね'] },
  { id: 'b9-5-4', grup: 'bunpou', no: 5, soal: 'どうして 歌舞伎が 好きですか。……おもしろい___。', arti: 'Kenapa suka Kabuki? ……Karena menarik.', jawaban: 'から', pilihan: ['から', 'が', 'か', 'ね'] },
  { id: 'b9-5-5', grup: 'bunpou', no: 5, soal: 'A：___ 新聞を 読みませんか。B：時間が ありませんから。', arti: 'A：Kenapa tidak membaca surat kabar? B：Karena tidak ada waktu.', jawaban: 'どうして', pilihan: ['どうして', 'どんな', 'どう', 'どれ'] },
]
