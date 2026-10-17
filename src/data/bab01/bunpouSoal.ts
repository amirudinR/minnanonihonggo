import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 1 — tepat 5 soal per pola (4 pola 文型 + 2 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh` pola bersangkutan (pola TIDAK diubah; nomor pola
 * merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Benda₁ は Kata Benda₂ です ─────────────────────────
  { id: 'b1-1-1', grup: 'bunpou', no: 1, soal: 'わたし___ ワットです。', arti: 'Saya Watt.', jawaban: 'は', pilihan: ['は', 'も', 'か', 'の'] },
  { id: 'b1-1-2', grup: 'bunpou', no: 1, soal: 'ミラーさんは 会社員___。', arti: 'Sdr. Miller pegawai perusahaan.', jawaban: 'です', pilihan: ['です', 'ですか', 'じゃ', 'も'] },
  { id: 'b1-1-3', grup: 'bunpou', no: 1, soal: 'あの 方は 佐藤さん___。', arti: 'Beliau Sdr. Sato.', jawaban: 'です', pilihan: ['です', 'ですか', 'ではありません', 'も'] },
  { id: 'b1-1-4', grup: 'bunpou', no: 1, soal: 'わたしは IMC___ 社員です。', arti: 'Saya pegawai IMC.', jawaban: 'の', pilihan: ['の', 'は', 'も', 'か'] },
  { id: 'b1-1-5', grup: 'bunpou', no: 1, soal: 'サントスさん___ ブラジル人です。', arti: 'Sdr. Santos orang Brasil.', jawaban: 'は', pilihan: ['は', 'の', 'か', 'じゃ'] },

  // ── 文型 2 · Kata Benda₁ は Kata Benda₂ じゃ（では）ありません ────────
  { id: 'b1-2-1', grup: 'bunpou', no: 2, soal: 'サントスさんは 学生___ ありません。', arti: 'Sdr. Santos bukan mahasiswa.', jawaban: 'じゃ', pilihan: ['じゃ', 'は', 'も', 'の'] },
  { id: 'b1-2-2', grup: 'bunpou', no: 2, soal: 'ミラーさんは 先生では ___。', arti: 'Sdr. Miller bukan guru.', jawaban: 'ありません', pilihan: ['ありません', 'あります', 'です', 'ですか'] },
  { id: 'b1-2-3', grup: 'bunpou', no: 2, soal: 'サントスさんは 学生で___ ありません。', arti: 'Sdr. Santos bukan mahasiswa. (は dari では dibaca "wa")', jawaban: 'は', pilihan: ['は', 'も', 'か', 'の'] },
  { id: 'b1-2-4', grup: 'bunpou', no: 2, soal: 'ミラーさんは 大学の 先生じゃ ありません。IMCの ___です。', arti: 'Sdr. Miller bukan dosen universitas. Dia pegawai IMC.', jawaban: '社員', pilihan: ['社員', '学生', '先生', '留学生'] },
  { id: 'b1-2-5', grup: 'bunpou', no: 2, soal: 'わたしは 留学生じゃ ___。', arti: 'Saya bukan mahasiswa asing.', jawaban: 'ありません', pilihan: ['ありません', 'あります', 'です', 'ですか'] },

  // ── 文型 3 · Kata Benda₁ は Kata Benda₂ ですか ──────────────────────
  { id: 'b1-3-1', grup: 'bunpou', no: 3, soal: 'ミラーさんは 会社員です___。', arti: 'Apakah Sdr. Miller pegawai perusahaan?', jawaban: 'か', pilihan: ['か', 'ね', 'よ', 'も'] },
  { id: 'b1-3-2', grup: 'bunpou', no: 3, soal: 'あの 方は ___ですか。', arti: 'Beliau siapa?', jawaban: 'どなた', pilihan: ['どなた', 'なに', 'どれ', 'どこ'] },
  { id: 'b1-3-3', grup: 'bunpou', no: 3, soal: 'マリアさんは 学生ですか。……はい、___。', arti: 'Apakah Maria mahasiswa? ……Ya, betul.', jawaban: 'そうです', pilihan: ['そうです', 'ちがいます', 'いいえ', 'じゃありません'] },
  { id: 'b1-3-4', grup: 'bunpou', no: 3, soal: 'ミラーさんは 先生ですか。……いいえ、___。', arti: 'Apakah Sdr. Miller guru? ……Bukan.', jawaban: 'ちがいます', pilihan: ['ちがいます', 'そうです', 'はい', 'です'] },
  { id: 'b1-3-5', grup: 'bunpou', no: 3, soal: 'あの 方は ミラーさんです___。……いいえ、ちがいます。', arti: 'Apakah beliau Sdr. Miller? ……Bukan.', jawaban: 'か', pilihan: ['か', 'ね', 'よ', 'の'] },

  // ── 文型 4 · Kata Benda も ─────────────────────────────────────────
  { id: 'b1-4-1', grup: 'bunpou', no: 4, soal: 'サントスさん___ 会社員です。', arti: 'Sdr. Santos juga pegawai perusahaan.', jawaban: 'も', pilihan: ['も', 'は', 'か', 'の'] },
  { id: 'b1-4-2', grup: 'bunpou', no: 4, soal: 'わたしは 学生です。マリアさん___ 学生です。', arti: 'Saya mahasiswa. Maria juga mahasiswa.', jawaban: 'も', pilihan: ['も', 'は', 'が', 'の'] },
  { id: 'b1-4-3', grup: 'bunpou', no: 4, soal: 'サントスさん___ 会社員ですか。', arti: 'Apakah Sdr. Santos juga pegawai perusahaan?', jawaban: 'も', pilihan: ['も', 'は', 'か', 'の'] },
  { id: 'b1-4-4', grup: 'bunpou', no: 4, soal: 'ミラーさんは IMCの 社員です。ワットさん___ IMCの 社員です。', arti: 'Sdr. Miller pegawai IMC. Watt juga pegawai IMC.', jawaban: 'も', pilihan: ['も', 'は', 'の', 'じゃ'] },
  { id: 'b1-4-5', grup: 'bunpou', no: 4, soal: 'わたしは 大学の 学生です。あの 人___ 大学の 学生です。', arti: 'Saya mahasiswa universitas. Orang itu juga mahasiswa universitas.', jawaban: 'も', pilihan: ['も', 'は', 'か', 'の'] },

  // ── Catatan 1 · Kata Benda₁ の Kata Benda₂ ─────────────────────────
  { id: 'b1-c1-1', grup: 'catatan', no: 1, soal: 'ミラーさんは IMC___ 社員です。', arti: 'Sdr. Miller pegawai perusahaan IMC.', jawaban: 'の', pilihan: ['の', 'は', 'も', 'か'] },
  { id: 'b1-c1-2', grup: 'catatan', no: 1, soal: 'あの 人は 大学___ 先生です。', arti: 'Beliau dosen universitas.', jawaban: 'の', pilihan: ['の', 'は', 'か', 'と'] },
  { id: 'b1-c1-3', grup: 'catatan', no: 1, soal: 'わたしは 大学___ 留学生です。', arti: 'Saya mahasiswa asing universitas.', jawaban: 'の', pilihan: ['の', 'も', 'は', 'か'] },
  { id: 'b1-c1-4', grup: 'catatan', no: 1, soal: 'IMC___ 社員は ミラーさんです。', arti: 'Pegawai IMC adalah Sdr. Miller.', jawaban: 'の', pilihan: ['の', 'は', 'も', 'じゃ'] },
  { id: 'b1-c1-5', grup: 'catatan', no: 1, soal: 'わたしは 大学___ 学生です。', arti: 'Saya mahasiswa universitas.', jawaban: 'の', pilihan: ['の', 'は', 'も', 'か'] },

  // ── Catatan 2 · ～さん ────────────────────────────────────────────
  { id: 'b1-c2-1', grup: 'catatan', no: 2, soal: 'あの 方は ミラー___ です。', arti: 'Beliau Sdr. Miller.', jawaban: 'さん', pilihan: ['さん', 'ちゃん', 'さま', 'くん'] },
  { id: 'b1-c2-2', grup: 'catatan', no: 2, soal: 'マリア___ は 学生です。', arti: 'Maria (sapaan sopan) mahasiswa.', jawaban: 'さん', pilihan: ['さん', 'くん', 'ちゃん', 'さま'] },
  { id: 'b1-c2-3', grup: 'catatan', no: 2, soal: 'A：ワット___、はじめまして。B：はじめまして。', arti: 'Watt, salam kenal. ……Salam kenal.', jawaban: 'さん', pilihan: ['さん', 'さま', 'くん', 'ちゃん'] },
  { id: 'b1-c2-4', grup: 'catatan', no: 2, soal: 'あの 子は マリア___ です。', arti: 'Anak itu dipanggil Maria (akrab, untuk anak kecil).', jawaban: 'ちゃん', pilihan: ['ちゃん', 'さん', 'さま', 'くん'] },
  { id: 'b1-c2-5', grup: 'catatan', no: 2, soal: '田中___ は 先生です。', arti: 'Sdr. Tanaka guru.', jawaban: 'さん', pilihan: ['さん', 'さま', 'ちゃん', 'くん'] },
]
