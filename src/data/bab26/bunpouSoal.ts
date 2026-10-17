import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 26 — tepat 5 soal per pola (4 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · ～んです ──────────────────────────────────────────────
  { id: 'b26-1-1', grup: 'bunpou', no: 1, soal: '（ぬれた 傘を 持っている 人を 見て）雨が 降っている___か。', arti: '(Melihat orang yang memegang payung basah) Apakah sedang turun hujan?', jawaban: 'んですか', pilihan: ['んですか', 'ですか', 'ますか', 'でしたか'] },
  { id: 'b26-1-2', grup: 'bunpou', no: 1, soal: 'どうして 遅れた___か。', arti: 'Kenapa terlambat?', jawaban: 'んです', pilihan: ['んです', 'です', 'ます', 'ません'] },
  { id: 'b26-1-3', grup: 'bunpou', no: 1, soal: 'どうして この 大学を 選んだ___か。', arti: 'Kenapa memilih universitas ini?', jawaban: 'んです', pilihan: ['んです', 'です', 'ました', 'でした'] },
  { id: 'b26-1-4', grup: 'bunpou', no: 1, soal: 'A：どう した___。B：バスが 来なかったんです。', arti: 'A：Kenapa? B：Karena bus tidak datang.', jawaban: 'んですか', pilihan: ['んですか', 'ですか', 'ますか', 'でしたか'] },
  { id: 'b26-1-5', grup: 'bunpou', no: 1, soal: 'A：どうして 遅れたんですか。B：バスが 来なかった___。', arti: 'A：Kenapa terlambat? B：Karena bus tidak datang.', jawaban: 'んです', pilihan: ['んです', 'です', 'ます', 'でした'] },

  // ── 文型 2 · Kata Kerja Bentuk て いただけませんか ──────────────────
  { id: 'b26-2-1', grup: 'bunpou', no: 2, soal: 'いい 先生を 紹介して ___。', arti: 'Bisa perkenalkan saya guru yang baik?', jawaban: 'いただけませんか', pilihan: ['いただけませんか', 'ください', 'いただきます', 'もらいました'] },
  { id: 'b26-2-2', grup: 'bunpou', no: 2, soal: 'いい 先生を 紹介___ いただけませんか。', arti: 'Bisa perkenalkan saya guru yang baik?', jawaban: 'して', pilihan: ['して', 'する', 'します', 'した'] },
  { id: 'b26-2-3', grup: 'bunpou', no: 2, soal: '日本語で 手紙を 書いたんですが、ちょっと 見て ___。', arti: 'Saya menulis surat dalam bahasa Jepang, bisa dicek sebentar?', jawaban: 'いただけませんか', pilihan: ['いただけませんか', 'ください', 'います', 'いました'] },
  { id: 'b26-2-4', grup: 'bunpou', no: 2, soal: 'A：この 荷物を 持って いただけませんか。B：ええ、___。', arti: 'A：Bisa bawakan barang ini? B：Ya, boleh.', jawaban: 'いいですよ', pilihan: ['いいですよ', 'いいえ', 'いただきます', 'ごめんなさい'] },
  { id: 'b26-2-5', grup: 'bunpou', no: 2, soal: 'すみません、ちょっと 待って ___。', arti: 'Maaf, bisa tunggu sebentar?', jawaban: 'いただけませんか', pilihan: ['いただけませんか', 'ください', 'しまいました', 'います'] },

  // ── 文型 3 · Kata Tanya + Kata Kerja Bentuk たら ～ ────────────────
  { id: 'b26-3-1', grup: 'bunpou', no: 3, soal: 'どこで カメラを 買ったら ___ですか。', arti: 'Sebaiknya saya membeli kamera di mana?', jawaban: 'いい', pilihan: ['いい', 'いいです', 'いかが', 'よく'] },
  { id: 'b26-3-2', grup: 'bunpou', no: 3, soal: '国会議事堂を 見学したいんですが、どう ___ いいですか。', arti: 'Saya ingin mengunjungi Gedung Parlemen Nasional, bagaimana caranya?', jawaban: 'したら', pilihan: ['したら', 'する', 'して', 'します'] },
  { id: 'b26-3-3', grup: 'bunpou', no: 3, soal: '国会議事堂を 見学したいんですが。……直接 ___ いいですよ。', arti: 'Saya ingin mengunjungi Gedung Parlemen. ……Pergi langsung saja.', jawaban: '行ったら', pilihan: ['行ったら', '行くと', '行けば', '行って'] },
  { id: 'b26-3-4', grup: 'bunpou', no: 3, soal: 'どこで かばんを ___ いいですか。', arti: 'Sebaiknya saya membeli tas di mana?', jawaban: '買ったら', pilihan: ['買ったら', '買うと', '買えば', '買って'] },
  { id: 'b26-3-5', grup: 'bunpou', no: 3, soal: 'ここで ちょっと 休んだら ___ですか。', arti: 'Bagaimana kalau kita beristirahat sebentar di sini?', jawaban: 'いかが', pilihan: ['いかが', 'いい', 'どこ', 'どんな'] },

  // ── 文型 4 · Kata Benda (objek) は 好きです／嫌いです など ─────────
  { id: 'b26-4-1', grup: 'bunpou', no: 4, soal: 'よく カラオケに 行きますか。……いいえ、あまり 行きません。カラオケは 好きじゃない___。', arti: 'Sering pergi karaoke? ……Tidak, jarang pergi. Saya tidak suka karaoke.', jawaban: 'んです', pilihan: ['んです', 'です', 'ます', 'ですか'] },
  { id: 'b26-4-2', grup: 'bunpou', no: 4, soal: 'A：サッカーが 好きですか。B：いいえ、サッカーは あまり ___。', arti: 'A：Suka sepak bola? B：Tidak, saya tidak begitu suka sepak bola.', jawaban: '好きじゃないんです', pilihan: ['好きじゃないんです', '好きです', '好きでした', '好きですか'] },
  { id: 'b26-4-3', grup: 'bunpou', no: 4, soal: 'A：日本語が 上手ですね。B：いいえ、わたしは 日本語は ___。', arti: 'A：Pandai bahasa Jepang ya. B：Tidak, saya tidak begitu pandai bahasa Jepang.', jawaban: '上手じゃないんです', pilihan: ['上手じゃないんです', '上手です', '上手でした', '上手ですか'] },
  { id: 'b26-4-4', grup: 'bunpou', no: 4, soal: 'A：田中さんは 料理が 好きですか。B：ええ、田中さんは 料理は ___。', arti: 'A：Sdr. Tanaka suka memasak? B：Ya, Sdr. Tanaka suka memasak.', jawaban: '好きなんです', pilihan: ['好きなんです', '好きじゃないんです', '嫌いなんです', '下手なんです'] },
  { id: 'b26-4-5', grup: 'bunpou', no: 4, soal: 'A：お酒が 好きですか。B：いいえ、お酒は ___。', arti: 'A：Suka sake? B：Tidak, saya tidak suka sake.', jawaban: '嫌いなんです', pilihan: ['嫌いなんです', '好きなんです', '上手なんです', '下手なんです'] },

  // ── Catatan 1 · ～べん（～弁） ────────────────────────────────────
  { id: 'b26-c1-1', grup: 'catatan', no: 1, soal: '渡辺さんは 時々 大阪___を 使いますね。', arti: 'Sdr. Watanabe kadang-kadang menggunakan dialek Osaka, ya.', jawaban: '弁', pilihan: ['弁', '語', '話', '声'] },
  { id: 'b26-c1-2', grup: 'catatan', no: 1, soal: '渡辺さんは 大阪弁を 使いますね。大阪に 住んで ___んですか。', arti: 'Sdr. Watanabe menggunakan dialek Osaka, ya. Apakah Anda pernah tinggal di Osaka?', jawaban: 'いた', pilihan: ['いた', 'いる', 'います', 'いました'] },
  { id: 'b26-c1-3', grup: 'catatan', no: 1, soal: 'A：京都の 言葉は 大阪弁ですか。B：いいえ、京都___です。', arti: 'A：Bahasa Kyoto adalah dialek Osaka? B：Tidak, dialek Kyoto.', jawaban: '弁', pilihan: ['弁', '語', '言葉', '声'] },
  { id: 'b26-c1-4', grup: 'catatan', no: 1, soal: 'A：渡辺さんは 大阪弁が 上手ですね。B：ええ、15歳まで 大阪に ___。', arti: 'A：Sdr. Watanabe pandai dialek Osaka, ya. B：Ya, sampai umur lima belas tahun tinggal di Osaka.', jawaban: '住んで いました', pilihan: ['住んで いました', '住んで います', '住みます', '住む'] },
  { id: 'b26-c1-5', grup: 'catatan', no: 1, soal: '大阪の 言葉は 大阪___と 言います。', arti: 'Bahasa Osaka disebut dialek Osaka.', jawaban: '弁', pilihan: ['弁', '語', '話', '方言'] },

  // ── Catatan 2 · ～会社／～様（敬称） ─────────────────────────────
  { id: 'b26-c2-1', grup: 'catatan', no: 2, soal: 'ガス___に 連絡したら、すぐ 来て くれますよ。', arti: 'Kalau menghubungi perusahaan gas, petugas akan segera datang.', jawaban: '会社', pilihan: ['会社', '様', '場所', '店'] },
  { id: 'b26-c2-2', grup: 'catatan', no: 2, soal: 'A：もしもし、山田さんを お願いします。B：山田___ですね。少々 お待ちください。', arti: 'A：Halo, saya mau bicara dengan Sdr. Yamada. B：Sdr. Yamada ya. Tunggu sebentar.', jawaban: '様', pilihan: ['様', '会社', 'さん', '方'] },
  { id: 'b26-c2-3', grup: 'catatan', no: 2, soal: 'A：どこで 働いて いますか。B：ガス___で 働いて います。', arti: 'A：Bekerja di mana? B：Bekerja di perusahaan gas.', jawaban: '会社', pilihan: ['会社', '様', '場所', '工場'] },
  { id: 'b26-c2-4', grup: 'catatan', no: 2, soal: 'A：山田___は いらっしゃいますか。B：はい、少々 お待ちください。', arti: 'A：Apakah Sdr. Yamada ada? B：Ya, mohon tunggu sebentar.', jawaban: '様', pilihan: ['様', '会社', 'さん', '社長'] },
  { id: 'b26-c2-5', grup: 'catatan', no: 2, soal: 'A：あの 建物は 何ですか。B：あれは 電気の ___です。', arti: 'A：Bangunan itu apa? B：Itu perusahaan listrik.', jawaban: '会社', pilihan: ['会社', '様', '場所', '建物'] },

  // ── Catatan 3 · どこでも／だれでも／なんでも・こんな／そんな／あんな ─
  { id: 'b26-c3-1', grup: 'catatan', no: 3, soal: '___でも 招待して ください。', arti: 'Undang siapa saja.', jawaban: 'だれ', pilihan: ['だれ', 'どこ', 'なに', 'いつ'] },
  { id: 'b26-c3-2', grup: 'catatan', no: 3, soal: 'この 燃える ごみは 月・水・金の 朝 ___ ください。', arti: 'Sampah organik ini dikeluarkan pada pagi hari Senin, Rabu, dan Jumat.', jawaban: '出して', pilihan: ['出して', '出し', '出します', '出した'] },
  { id: 'b26-c3-3', grup: 'catatan', no: 3, soal: '日本では ___でも コンビニを 見る ことが できます。', arti: 'Di Jepang di mana-mana bisa melihat minimarket.', jawaban: 'どこ', pilihan: ['どこ', 'だれ', 'なに', 'いつ'] },
  { id: 'b26-c3-4', grup: 'catatan', no: 3, soal: 'A：おもしろい デザインの 靴ですね。B：ええ、___な 靴は めずらしいですね。', arti: 'A：Sepatu yang desainnya lucu, ya. B：Ya, sepatu seperti ini jarang ada.', jawaban: 'こんな', pilihan: ['こんな', 'そんな', 'あんな', 'どんな'] },
  { id: 'b26-c3-5', grup: 'catatan', no: 3, soal: '___でも いいです。あなたの 好きな 物を 持って 来て ください。', arti: 'Apa saja boleh. Bawa barang yang Anda suka.', jawaban: 'なん', pilihan: ['なん', 'だれ', 'どこ', 'いつ'] },
]
