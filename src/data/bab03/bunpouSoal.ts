import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 3 — tepat 5 soal per pola (2 pola 文型 + 5 Catatan Tata Bahasa).
 * Sumber: `contoh`/`artiContoh` di `./bunpou.ts` + kosakata bab ini (pola tidak diubah).
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · ここ／そこ／あそこ は ～です ──────────────────────────
  { id: 'b3-1-1', grup: 'bunpou', no: 1, soal: '___は 食堂です。', arti: 'Di sini kantin. (tempat pembicara)', jawaban: 'ここ', pilihan: ['ここ', 'そこ', 'あそこ', 'どこ'] },
  { id: 'b3-1-2', grup: 'bunpou', no: 1, soal: '___は 事務所です。', arti: 'Di sana kantor. (jauh dari kedua pembicara)', jawaban: 'あそこ', pilihan: ['あそこ', 'ここ', 'そこ', 'どこ'] },
  { id: 'b3-1-3', grup: 'bunpou', no: 1, soal: '___は お手洗いです。', arti: 'Di situ kamar kecil. (tempat lawan bicara)', jawaban: 'そこ', pilihan: ['そこ', 'ここ', 'あそこ', 'どこ'] },
  { id: 'b3-1-4', grup: 'bunpou', no: 1, soal: '___は 受付です。', arti: 'Di sini resepsionis. (tempat pembicara)', jawaban: 'ここ', pilihan: ['ここ', 'あそこ', 'そこ', 'どこ'] },
  { id: 'b3-1-5', grup: 'bunpou', no: 1, soal: '___は エレベーターです。', arti: 'Di sana lift. (jauh dari kedua pembicara)', jawaban: 'あそこ', pilihan: ['あそこ', 'そこ', 'ここ', 'どこ'] },

  // ── 文型 2 · Kata Benda は 場所 です ────────────────────────────
  { id: 'b3-2-1', grup: 'bunpou', no: 2, soal: '電話は ___です。', arti: 'Telepon di lantai dua.', jawaban: '2階', pilihan: ['2階', '2時', '2日', '2月'] },
  { id: 'b3-2-2', grup: 'bunpou', no: 2, soal: '山田さんは ___です。', arti: 'Sdr. Yamada di kantor.', jawaban: '事務所', pilihan: ['事務所', '受付', 'ロビー', '食堂'] },
  { id: 'b3-2-3', grup: 'bunpou', no: 2, soal: '受付は ___です。', arti: 'Resepsionis di lantai satu.', jawaban: '1階', pilihan: ['1階', '1時', '1日', '1月'] },
  { id: 'b3-2-4', grup: 'bunpou', no: 2, soal: '会議室は ___です。', arti: 'Ruang rapat di lantai tiga.', jawaban: '3階', pilihan: ['3階', '3時', '3日', '3月'] },
  { id: 'b3-2-5', grup: 'bunpou', no: 2, soal: 'ミラーさんは ___です。', arti: 'Sdr. Miller di resepsionis.', jawaban: '受付', pilihan: ['受付', '事務所', 'ロビー', '階段'] },

  // ── Catatan 1 · ここ／そこ／あそこ／こちら／そちら／あちら ──────────
  { id: 'b3-c1-1', grup: 'catatan', no: 1, soal: 'お手洗いは ___ですか。……あちらです。', arti: 'Kamar kecil di sebelah mana? ……Di sebelah sana. (sopan)', jawaban: 'どちら', pilihan: ['どちら', 'どこ', 'どれ', 'だれ'] },
  { id: 'b3-c1-2', grup: 'catatan', no: 1, soal: '受付は ___です。', arti: 'Resepsionis di sini. (sopan)', jawaban: 'こちら', pilihan: ['こちら', 'ここ', 'どちら', 'あちら'] },
  { id: 'b3-c1-3', grup: 'catatan', no: 1, soal: '食堂は ___です。', arti: 'Kantin di situ. (sopan, dekat lawan bicara)', jawaban: 'そちら', pilihan: ['そちら', 'そこ', 'どちら', 'こちら'] },
  { id: 'b3-c1-4', grup: 'catatan', no: 1, soal: '事務所は あちらです。ロビーも ___です。', arti: 'Kantor di sebelah sana. Lobi juga di sebelah sana.', jawaban: 'あちら', pilihan: ['あちら', 'こちら', 'そちら', 'どちら'] },
  { id: 'b3-c1-5', grup: 'catatan', no: 1, soal: 'お手洗いは ___ですか。……あそこです。', arti: 'Kamar kecil di mana? ……Di sana.', jawaban: 'どこ', pilihan: ['どこ', 'どちら', 'どれ', 'だれ'] },

  // ── Catatan 2 · Kata Benda は tempat です ───────────────────────
  { id: 'b3-c2-1', grup: 'catatan', no: 2, soal: '電話は ___です。……2階です。', arti: 'Telepon di mana? Di lantai dua.', jawaban: '2階', pilihan: ['2階', '2時', '2日', '2月'] },
  { id: 'b3-c2-2', grup: 'catatan', no: 2, soal: '会議室は ___です。……3階です。', arti: 'Ruang rapat di lantai tiga.', jawaban: '3階', pilihan: ['3階', '3時', '3日', '3月'] },
  { id: 'b3-c2-3', grup: 'catatan', no: 2, soal: '山田さんは ___です。……事務所です。', arti: 'Sdr. Yamada di kantor.', jawaban: '事務所', pilihan: ['事務所', '受付', 'ロビー', '階段'] },
  { id: 'b3-c2-4', grup: 'catatan', no: 2, soal: '受付は ___です。……1階です。', arti: 'Resepsionis di lantai satu.', jawaban: '1階', pilihan: ['1階', '1時', '1日', '1月'] },
  { id: 'b3-c2-5', grup: 'catatan', no: 2, soal: 'お手洗いは ___です。……2階です。', arti: 'Kamar kecil di lantai dua.', jawaban: '2階', pilihan: ['2階', '1階', '3階', '4階'] },

  // ── Catatan 3 · どこ／どちら ────────────────────────────────────
  { id: 'b3-c3-1', grup: 'catatan', no: 3, soal: 'お手洗いは ___ですか。……あそこです。', arti: 'Kamar kecil di mana? ……Di sana.', jawaban: 'どこ', pilihan: ['どこ', 'どちら', 'どれ', 'だれ'] },
  { id: 'b3-c3-2', grup: 'catatan', no: 3, soal: 'エレベーターは ___ですか。……そちらです。', arti: 'Lift di sebelah mana? (sopan) ……Di sebelah situ.', jawaban: 'どちら', pilihan: ['どちら', 'どこ', 'どれ', 'なに'] },
  { id: 'b3-c3-3', grup: 'catatan', no: 3, soal: '受付は ___ですか。……1階です。', arti: 'Resepsionis di mana? ……Di lantai satu.', jawaban: 'どこ', pilihan: ['どこ', 'どちら', 'どれ', 'だれ'] },
  { id: 'b3-c3-4', grup: 'catatan', no: 3, soal: '［お］国は ___ですか。', arti: 'Berasal dari mana? (sopan)', jawaban: 'どちら', pilihan: ['どちら', 'どこ', 'どれ', 'だれ'] },
  { id: 'b3-c3-5', grup: 'catatan', no: 3, soal: 'ミラーさんは ___ですか。……事務所です。', arti: 'Sdr. Miller di mana? ……Di kantor.', jawaban: 'どこ', pilihan: ['どこ', 'どちら', 'どれ', 'だれ'] },

  // ── Catatan 4 · Kata Benda₁ の Kata Benda₂ (buatan mana) ──────────
  { id: 'b3-c4-1', grup: 'catatan', no: 4, soal: 'これは ___の コンピューターですか。……日本の コンピューターです。', arti: 'Ini komputer buatan mana? ……Komputer buatan Jepang.', jawaban: 'どこ', pilihan: ['どこ', 'どれ', 'なに', 'だれ'] },
  { id: 'b3-c4-2', grup: 'catatan', no: 4, soal: 'これは 日本___ コンピューターです。', arti: 'Ini komputer buatan Jepang.', jawaban: 'の', pilihan: ['の', 'は', 'も', 'か'] },
  { id: 'b3-c4-3', grup: 'catatan', no: 4, soal: 'あれは ___の 自動車ですか。……アメリカの 自動車です。', arti: 'Itu mobil buatan mana? ……Mobil buatan Amerika.', jawaban: 'どこ', pilihan: ['どこ', 'どれ', 'なに', 'だれ'] },
  { id: 'b3-c4-4', grup: 'catatan', no: 4, soal: 'それは アメリカ___ カメラです。', arti: 'Itu kamera buatan Amerika.', jawaban: 'の', pilihan: ['の', 'は', 'を', 'と'] },
  { id: 'b3-c4-5', grup: 'catatan', no: 4, soal: 'これは ___の 時計ですか。……日本の 時計です。', arti: 'Ini jam buatan mana? ……Jam buatan Jepang.', jawaban: 'どこ', pilihan: ['どこ', 'どれ', 'なに', 'だれ'] },

  // ── Catatan 5 · お～ ───────────────────────────────────────────
  { id: 'b3-c5-1', grup: 'catatan', no: 5, soal: '［___］国は どちらですか。', arti: 'Berasal dari mana?', jawaban: 'お', pilihan: ['お', 'ご', 'み', 'さん'] },
  { id: 'b3-c5-2', grup: 'catatan', no: 5, soal: '［___］手洗いは どこですか。', arti: 'Kamar kecil (sopan) di mana?', jawaban: 'お', pilihan: ['お', 'ご', 'み', 'さん'] },
  { id: 'b3-c5-3', grup: 'catatan', no: 5, soal: '［___］国は 日本ですか。', arti: 'Apakah negara Anda (sopan) Jepang?', jawaban: 'お', pilihan: ['お', 'ご', 'み', 'さん'] },
  { id: 'b3-c5-4', grup: 'catatan', no: 5, soal: '［___］国は どちらですか。……日本です。', arti: 'Berasal dari mana (sopan)? ……Jepang.', jawaban: 'お', pilihan: ['お', 'ご', 'み', 'さん'] },
  { id: 'b3-c5-5', grup: 'catatan', no: 5, soal: '［___］手洗いは あちらです。', arti: 'Kamar kecil (sopan) di sebelah sana.', jawaban: 'お', pilihan: ['お', 'ご', 'み', 'さん'] },
]
