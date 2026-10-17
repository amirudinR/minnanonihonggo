import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 2 — tepat 5 soal per pola (4 pola 文型 + 2 Catatan Tata Bahasa).
 * Sumber: `contoh`/`artiContoh` di `./bunpou.ts` + kosakata bab ini (pola tidak diubah).
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · これ／それ／あれ は ～です ────────────────────────────
  { id: 'b2-1-1', grup: 'bunpou', no: 1, soal: '___は 辞書です。', arti: 'Ini kamus. (benda dekat pembicara)', jawaban: 'これ', pilihan: ['これ', 'それ', 'あれ', 'どれ'] },
  { id: 'b2-1-2', grup: 'bunpou', no: 1, soal: '___は あなたの 傘です。', arti: 'Itu payung Anda. (benda dekat lawan bicara)', jawaban: 'それ', pilihan: ['それ', 'これ', 'あれ', 'どれ'] },
  { id: 'b2-1-3', grup: 'bunpou', no: 1, soal: '___は カメラです。', arti: 'Itu kamera. (benda jauh dari kedua pembicara)', jawaban: 'あれ', pilihan: ['あれ', 'これ', 'それ', 'どれ'] },
  { id: 'b2-1-4', grup: 'bunpou', no: 1, soal: '___は なんですか。……コンピューターです。', arti: 'Apa itu? (benda jauh dari kedua pembicara) ……Komputer.', jawaban: 'あれ', pilihan: ['あれ', 'これ', 'それ', 'どれ'] },
  { id: 'b2-1-5', grup: 'bunpou', no: 1, soal: '___は あなたの かばんですか。', arti: 'Apakah itu tas Anda? (benda dekat lawan bicara)', jawaban: 'それ', pilihan: ['それ', 'これ', 'あれ', 'どれ'] },

  // ── 文型 2 · これ／それ／あれ は ～の ～です ─────────────────────
  { id: 'b2-2-1', grup: 'bunpou', no: 2, soal: 'これは コンピューター___ 本です。', arti: 'Ini buku komputer.', jawaban: 'の', pilihan: ['の', 'は', 'も', 'が'] },
  { id: 'b2-2-2', grup: 'bunpou', no: 2, soal: 'それは 日本語___ 辞書です。', arti: 'Itu kamus bahasa Jepang.', jawaban: 'の', pilihan: ['の', 'は', 'か', 'と'] },
  { id: 'b2-2-3', grup: 'bunpou', no: 2, soal: 'あれは わたし___ 傘です。', arti: 'Itu payung saya.', jawaban: 'の', pilihan: ['の', 'は', 'も', 'じゃ'] },
  { id: 'b2-2-4', grup: 'bunpou', no: 2, soal: 'これは 何___ 雑誌ですか。……コンピューターの 雑誌です。', arti: 'Ini majalah apa? ……Majalah komputer.', jawaban: 'の', pilihan: ['の', 'は', 'を', 'と'] },
  { id: 'b2-2-5', grup: 'bunpou', no: 2, soal: '「Itu buku komputer.」 に あう 文は どれですか。 ___', arti: 'Pilih kalimat yang benar untuk "Itu buku komputer."', jawaban: 'それは コンピューターの 本です。', pilihan: ['それは コンピューターの 本です。', 'それは コンピューターは 本です。', 'それは コンピューターも 本です。', 'それは コンピューターと 本です。'] },

  // ── 文型 3 · この／その／あの Kata Benda は ～です ────────────────
  { id: 'b2-3-1', grup: 'bunpou', no: 3, soal: '___ 傘は わたしのです。', arti: 'Payung ini milik saya. (dekat pembicara)', jawaban: 'この', pilihan: ['この', 'その', 'あの', 'どの'] },
  { id: 'b2-3-2', grup: 'bunpou', no: 3, soal: '___ 人は ミラーさんです。', arti: 'Orang itu (dekat lawan bicara) adalah Sdr. Miller.', jawaban: 'その', pilihan: ['その', 'この', 'あの', 'どの'] },
  { id: 'b2-3-3', grup: 'bunpou', no: 3, soal: '___ 方は どなたですか。', arti: 'Beliau (jauh dari kedua pembicara) siapa?', jawaban: 'あの', pilihan: ['あの', 'この', 'その', 'どの'] },
  { id: 'b2-3-4', grup: 'bunpou', no: 3, soal: '___ テレビは 日本のです。', arti: 'Televisi itu (jauh dari kedua pembicara) buatan Jepang.', jawaban: 'あの', pilihan: ['あの', 'この', 'その', 'どの'] },
  { id: 'b2-3-5', grup: 'bunpou', no: 3, soal: '___ かばんは あなたのですか。', arti: 'Apakah tas itu (dekat lawan bicara) milik Anda?', jawaban: 'その', pilihan: ['その', 'この', 'あの', 'どの'] },

  // ── 文型 4 · そうです／違います ──────────────────────────────────
  { id: 'b2-4-1', grup: 'bunpou', no: 4, soal: 'それは 辞書ですか。……はい、___。', arti: 'Apakah itu kamus? ……Ya, betul.', jawaban: 'そうです', pilihan: ['そうです', 'ちがいます', 'そうですか', 'じゃありません'] },
  { id: 'b2-4-2', grup: 'bunpou', no: 4, soal: 'それは ミラーさんのですか。……いいえ、___。', arti: 'Apakah itu milik Sdr. Miller? ……Bukan.', jawaban: 'ちがいます', pilihan: ['ちがいます', 'そうです', 'はい', 'そうですか'] },
  { id: 'b2-4-3', grup: 'bunpou', no: 4, soal: 'あれは あなたの かばんですか。……はい、___。', arti: 'Apakah itu tas Anda? ……Ya, betul.', jawaban: 'そうです', pilihan: ['そうです', 'ちがいます', 'いいえ', 'そうですか'] },
  { id: 'b2-4-4', grup: 'bunpou', no: 4, soal: 'これは テレビですか。……いいえ、___。カメラです。', arti: 'Apakah ini televisi? ……Bukan. Kamera.', jawaban: 'ちがいます', pilihan: ['ちがいます', 'そうです', 'はい', 'わかりました'] },
  { id: 'b2-4-5', grup: 'bunpou', no: 4, soal: 'これは 日本語の 辞書ですか。……はい、___。', arti: 'Apakah ini kamus bahasa Jepang? ……Ya, betul.', jawaban: 'そうです', pilihan: ['そうです', 'ちがいます', 'いいえ', 'どうも'] },

  // ── Catatan 1 · 何／だれ（だれの） ──────────────────────────────
  { id: 'b2-c1-1', grup: 'catatan', no: 1, soal: 'それは ___ですか。……カメラです。', arti: 'Apa itu? ……Kamera.', jawaban: '何', pilihan: ['何', 'だれ', 'どれ', 'どこ'] },
  { id: 'b2-c1-2', grup: 'catatan', no: 1, soal: 'あの 人は ___ですか。……ミラーさんです。', arti: 'Orang itu siapa? ……Sdr. Miller.', jawaban: 'だれ', pilihan: ['だれ', '何', 'どれ', 'どこの'] },
  { id: 'b2-c1-3', grup: 'catatan', no: 1, soal: 'これは ___の 本ですか。……ミラーさんのです。', arti: 'Ini buku milik siapa? ……Milik Sdr. Miller.', jawaban: 'だれ', pilihan: ['だれ', '何', 'どれ', 'どこ'] },
  { id: 'b2-c1-4', grup: 'catatan', no: 1, soal: 'それは ___ですか。……日本語の 辞書です。', arti: 'Apa itu? ……Kamus bahasa Jepang.', jawaban: '何', pilihan: ['何', 'だれ', 'どれ', 'どこの'] },
  { id: 'b2-c1-5', grup: 'catatan', no: 1, soal: 'ミラーさんの 傘は ___ですか。……あれです。', arti: 'Payung Sdr. Miller yang mana? ……Itu.', jawaban: 'どれ', pilihan: ['どれ', '何', 'だれ', 'どこ'] },

  // ── Catatan 2 · Kata Benda の Kata Benda ────────────────────────
  { id: 'b2-c2-1', grup: 'catatan', no: 2, soal: 'それは 何___ 雑誌ですか。', arti: 'Itu majalah apa?', jawaban: 'の', pilihan: ['の', 'は', 'も', 'か'] },
  { id: 'b2-c2-2', grup: 'catatan', no: 2, soal: 'これは 日本語___ 本です。', arti: 'Ini buku bahasa Jepang.', jawaban: 'の', pilihan: ['の', 'は', 'を', 'と'] },
  { id: 'b2-c2-3', grup: 'catatan', no: 2, soal: 'あれは コンピューター___ 雑誌です。', arti: 'Itu majalah komputer.', jawaban: 'の', pilihan: ['の', 'も', 'は', 'が'] },
  { id: 'b2-c2-4', grup: 'catatan', no: 2, soal: 'これは 何___ 辞書ですか。……日本語の 辞書です。', arti: 'Ini kamus apa? ……Kamus bahasa Jepang.', jawaban: 'の', pilihan: ['の', 'は', 'か', 'と'] },
  { id: 'b2-c2-5', grup: 'catatan', no: 2, soal: 'あれは 日本語___ 新聞です。', arti: 'Itu surat kabar bahasa Jepang.', jawaban: 'の', pilihan: ['の', 'は', 'も', 'を'] },
]
