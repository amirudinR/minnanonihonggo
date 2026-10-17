import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 18 — tepat 5 soal per pola (3 pola 文型 + 6 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` di bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · ミラーさんは 漢字を 読む ことが できます ───────────────
  { id: 'b18-1-1', grup: 'bunpou', no: 1, soal: 'ミラーさんは 漢字を 読む こと___ できます。', arti: 'Sdr. Miller bisa membaca Kanji.', jawaban: 'が', pilihan: ['が', 'を', 'は', 'に'] },
  { id: 'b18-1-2', grup: 'bunpou', no: 1, soal: 'ミラーさんは 漢字を___ ことが できます。', arti: 'Sdr. Miller bisa membaca Kanji.', jawaban: '読む', pilihan: ['読む', '読んで', '読んだ', '読み'] },
  { id: 'b18-1-3', grup: 'bunpou', no: 1, soal: '車の 運転が___か。……はい、できます。', arti: 'Apakah bisa menyetir mobil? ……Ya, bisa.', jawaban: 'できます', pilihan: ['できます', 'できて', 'できる', 'できました'] },
  { id: 'b18-1-4', grup: 'bunpou', no: 1, soal: 'マリアさんは 自転車に___ ことが できますか。', arti: 'Apakah Sdr. Maria bisa bersepeda?', jawaban: '乗る', pilihan: ['乗る', '乗って', '乗った', '乗り'] },
  { id: 'b18-1-5', grup: 'bunpou', no: 1, soal: 'マリアさんは 自転車に 乗る ことが できますか。……いいえ、___。', arti: 'Apakah Sdr. Maria bisa bersepeda? ……Tidak, tidak bisa.', jawaban: 'できません', pilihan: ['できません', 'できます', 'ありません', 'できました'] },

  // ── 文型 2 · わたしの 趣味は 映画を 見る ことです ───────────────────
  { id: 'b18-2-1', grup: 'bunpou', no: 2, soal: 'わたしの 趣味は 映画を 見る___です。', arti: 'Hobi saya adalah menonton film.', jawaban: 'こと', pilihan: ['こと', 'もの', 'の', 'ところ'] },
  { id: 'b18-2-2', grup: 'bunpou', no: 2, soal: 'わたしの 趣味は 映画を___ ことです。', arti: 'Hobi saya adalah menonton film.', jawaban: '見る', pilihan: ['見る', '見て', '見た', '見'] },
  { id: 'b18-2-3', grup: 'bunpou', no: 2, soal: 'わたしの 趣味は___です。', arti: 'Hobi saya adalah musik.', jawaban: '音楽', pilihan: ['音楽', '映画', '仕事', '家族'] },
  { id: 'b18-2-4', grup: 'bunpou', no: 2, soal: 'わたしの 趣味は 音楽を___ ことです。', arti: 'Hobi saya adalah mendengarkan musik.', jawaban: '聞く', pilihan: ['聞く', '聞いて', '聞いた', '聞き'] },
  { id: 'b18-2-5', grup: 'bunpou', no: 2, soal: 'わたしの___は 映画を 見る ことです。', arti: 'Hobi saya adalah menonton film.', jawaban: '趣味', pilihan: ['趣味', '仕事', '友達', '名前'] },

  // ── 文型 3 · 寝る まえに、日記を 書きます ──────────────────────────
  { id: 'b18-3-1', grup: 'bunpou', no: 3, soal: '寝る___、日記を 書きます。', arti: 'Sebelum tidur, menulis catatan harian.', jawaban: 'まえに', pilihan: ['まえに', 'あとで', 'までに', 'から'] },
  { id: 'b18-3-2', grup: 'bunpou', no: 3, soal: '寝る まえに、日記を___。', arti: 'Sebelum tidur, menulis catatan harian.', jawaban: '書きます', pilihan: ['書きます', '書いて', '書く', '書きました'] },
  { id: 'b18-3-3', grup: 'bunpou', no: 3, soal: '食事の___に、手を 洗います。', arti: 'Sebelum makan, mencuci tangan.', jawaban: 'まえ', pilihan: ['まえ', 'あと', 'とき', 'まで'] },
  { id: 'b18-3-4', grup: 'bunpou', no: 3, soal: '日本へ 来る___に、日本語を 勉強しました。', arti: 'Sebelum datang di Jepang, belajar bahasa Jepang.', jawaban: 'まえ', pilihan: ['まえ', 'あと', 'とき', 'まで'] },
  { id: 'b18-3-5', grup: 'bunpou', no: 3, soal: '寝る まえに、___を 読みます。', arti: 'Sebelum tidur, membaca buku.', jawaban: '本', pilihan: ['本', '手', '薬', '日記'] },

  // ── Catatan 1 · Kata Kerja Bentuk Kamus ────────────────────────────
  { id: 'b18-c1-1', grup: 'catatan', no: 1, soal: 'かきます → ___', arti: 'Bentuk kamus dari かきます (menulis).', jawaban: 'かく', pilihan: ['かく', 'かきる', 'かいた', 'かかない'] },
  { id: 'b18-c1-2', grup: 'catatan', no: 1, soal: 'たべます → ___', arti: 'Bentuk kamus dari たべます (makan).', jawaban: 'たべる', pilihan: ['たべる', 'たべます', 'たべた', 'たべない'] },
  { id: 'b18-c1-3', grup: 'catatan', no: 1, soal: 'します → ___', arti: 'Bentuk kamus dari します (melakukan).', jawaban: 'する', pilihan: ['する', 'しる', 'した', 'しない'] },
  { id: 'b18-c1-4', grup: 'catatan', no: 1, soal: 'きます → ___', arti: 'Bentuk kamus dari きます (datang).', jawaban: 'くる', pilihan: ['くる', 'きる', 'きた', 'こない'] },
  { id: 'b18-c1-5', grup: 'catatan', no: 1, soal: 'よみます → ___', arti: 'Bentuk kamus dari よみます (membaca).', jawaban: 'よむ', pilihan: ['よむ', 'よみる', 'よんだ', 'よまない'] },

  // ── Catatan 2 · Kata Benda / Kata Kerja Bentuk Kamus こと が できます ─
  { id: 'b18-c2-1', grup: 'catatan', no: 2, soal: 'ミラーさんは___が できます。', arti: 'Sdr. Miller bisa berbahasa Jepang.', jawaban: '日本語', pilihan: ['日本語', '英語', '漢字', '日本語で'] },
  { id: 'b18-c2-2', grup: 'catatan', no: 2, soal: '雪が たくさん 降りましたから、ことしは___が できます。', arti: 'Karena salju turun banyak, tahun ini dapat bermain ski.', jawaban: 'スキー', pilihan: ['スキー', 'テニス', 'サッカー', 'ゴルフ'] },
  { id: 'b18-c2-3', grup: 'catatan', no: 2, soal: 'カードで___ ことが できます。', arti: 'Dapat membayar dengan kartu.', jawaban: '払う', pilihan: ['払う', '払って', '払った', '払い'] },
  { id: 'b18-c2-4', grup: 'catatan', no: 2, soal: 'ピアノが___。', arti: 'Bisa bermain piano.', jawaban: 'できます', pilihan: ['できます', 'できて', 'できる', 'できました'] },
  { id: 'b18-c2-5', grup: 'catatan', no: 2, soal: '日本語___ できます。', arti: 'Bisa berbahasa Jepang.', jawaban: 'が', pilihan: ['が', 'を', 'は', 'に'] },

  // ── Catatan 3 · わたしの 趣味は Kata Benda / Kata Kerja こと です ────
  { id: 'b18-c3-1', grup: 'catatan', no: 3, soal: 'わたしの 趣味は 音楽___。', arti: 'Hobi saya adalah musik.', jawaban: 'です', pilihan: ['です', 'ですか', 'ではありません', 'でした'] },
  { id: 'b18-c3-2', grup: 'catatan', no: 3, soal: 'わたしの 趣味は 音楽を___ ことです。', arti: 'Hobi saya adalah mendengarkan musik.', jawaban: '聞く', pilihan: ['聞く', '聞いて', '聞いた', '聞き'] },
  { id: 'b18-c3-3', grup: 'catatan', no: 3, soal: 'わたしの 趣味は 音楽を 聞く___です。', arti: 'Hobi saya adalah mendengarkan musik.', jawaban: 'こと', pilihan: ['こと', 'の', 'もの', 'ところ'] },
  { id: 'b18-c3-4', grup: 'catatan', no: 3, soal: '趣味は 何ですか。……映画を___ ことです。', arti: 'Apa hobinya? ……Menonton film.', jawaban: '見る', pilihan: ['見る', '見て', '見た', '見'] },
  { id: 'b18-c3-5', grup: 'catatan', no: 3, soal: '古い 時計を___ ことが 趣味です。', arti: 'Mengumpulkan jam lama adalah hobi saya.', jawaban: '集める', pilihan: ['集める', '集めて', '集めた', '集め'] },

  // ── Catatan 4 · (KB の / jangka waktu) まえに ───────────────────────
  { id: 'b18-c4-1', grup: 'catatan', no: 4, soal: '田中さんは 1時間___、出かけました。', arti: 'Sdr. Tanaka telah keluar sejam yang lalu.', jawaban: 'まえに', pilihan: ['まえに', 'まえ', 'あとで', 'までに'] },
  { id: 'b18-c4-2', grup: 'catatan', no: 4, soal: '3年___、結婚しました。', arti: 'Tiga tahun yang lalu, menikah.', jawaban: 'まえに', pilihan: ['まえに', 'まえ', 'あとで', 'ごろ'] },
  { id: 'b18-c4-3', grup: 'catatan', no: 4, soal: '食事___ まえに、手を 洗います。', arti: 'Sebelum makan, mencuci tangan.', jawaban: 'の', pilihan: ['の', 'に', 'を', 'が'] },
  { id: 'b18-c4-4', grup: 'catatan', no: 4, soal: '日本の 子どもは 学校に___ まえに、ひらがなを 覚えなければ なりませんか。', arti: 'Apakah anak-anak Jepang harus menghafal hiragana sebelum masuk sekolah?', jawaban: '入る', pilihan: ['入る', '入って', '入った', '入り'] },
  { id: 'b18-c4-5', grup: 'catatan', no: 4, soal: '寝る まえに、本を___。', arti: 'Sebelum tidur, membaca buku.', jawaban: '読みます', pilihan: ['読みます', '読んで', '読む', '読みました'] },

  // ── Catatan 5 · なかなか ───────────────────────────────────────────
  { id: 'b18-c5-1', grup: 'catatan', no: 5, soal: '日本では___ 馬を 見る ことが できません。', arti: 'Di Jepang tidak mudah untuk melihat kuda.', jawaban: 'なかなか', pilihan: ['なかなか', 'ぜひ', 'だんだん', 'まっすぐ'] },
  { id: 'b18-c5-2', grup: 'catatan', no: 5, soal: '日本では なかなか 馬を___ ことが できません。', arti: 'Di Jepang tidak mudah untuk melihat kuda.', jawaban: '見る', pilihan: ['見る', '見て', '見た', '見'] },
  { id: 'b18-c5-3', grup: 'catatan', no: 5, soal: '日本では なかなか 馬を 見る こと___ できません。', arti: 'Di Jepang tidak mudah untuk melihat kuda.', jawaban: 'が', pilihan: ['が', 'を', 'は', 'に'] },
  { id: 'b18-c5-4', grup: 'catatan', no: 5, soal: '日本では なかなか 馬に___ ことが できません。', arti: 'Di Jepang tidak mudah untuk menaiki kuda.', jawaban: '乗る', pilihan: ['乗る', '乗って', '乗った', '乗り'] },
  { id: 'b18-c5-5', grup: 'catatan', no: 5, soal: '日本では なかなか 馬を 見る ことが___。', arti: 'Di Jepang tidak mudah untuk melihat kuda.', jawaban: 'できません', pilihan: ['できません', 'できます', 'ありません', 'できました'] },

  // ── Catatan 6 · ぜひ ───────────────────────────────────────────────
  { id: 'b18-c6-1', grup: 'catatan', no: 6, soal: '___ 北海道へ 行きたいです。', arti: 'Ingin sekali pergi ke Hokkaido.', jawaban: 'ぜひ', pilihan: ['ぜひ', 'なかなか', 'だんだん', 'とても'] },
  { id: 'b18-c6-2', grup: 'catatan', no: 6, soal: 'ぜひ 北海道へ___です。', arti: 'Ingin sekali pergi ke Hokkaido.', jawaban: '行きたい', pilihan: ['行きたい', '行って', '行く', '行きたくない'] },
  { id: 'b18-c6-3', grup: 'catatan', no: 6, soal: '___ 遊びに 来て ください。', arti: 'Sungguh diharapkan untuk datang bermain.', jawaban: 'ぜひ', pilihan: ['ぜひ', 'なかなか', 'だんだん', 'まだ'] },
  { id: 'b18-c6-4', grup: 'catatan', no: 6, soal: 'ぜひ 遊びに___ ください。', arti: 'Sungguh diharapkan untuk datang bermain.', jawaban: '来て', pilihan: ['来て', '来る', '来た', '来'] },
  { id: 'b18-c6-5', grup: 'catatan', no: 6, soal: 'いっしょに 京都へ 行きませんか。……ええ、___ 行きたいです。', arti: 'Bagaimana kalau pergi ke Kyoto bersama? ……Ya, ingin sekali pergi.', jawaban: 'ぜひ', pilihan: ['ぜひ', 'なかなか', 'だんだん', 'あまり'] },
]
