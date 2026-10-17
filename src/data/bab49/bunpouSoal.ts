import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 49 — tepat 5 soal per pola (4 pola 文型 + 7 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · 敬語 受身（〜られます = bentuk hormat) ──────────────────
  { id: 'b49-1-1', grup: 'bunpou', no: 1, soal: '課長は もう 帰___。', arti: 'Kepala seksi sudah pulang.', jawaban: 'られました', pilihan: ['られました', 'りました', 'らせました', 'させました'] },
  { id: 'b49-1-2', grup: 'bunpou', no: 1, soal: '中村さんは 7時に ___。', arti: 'Sdri. Nakamura akan datang pada pukul tujuh.', jawaban: '来られます', pilihan: ['来られます', '来ます', '来させます', '来させられます'] },
  { id: 'b49-1-3', grup: 'bunpou', no: 1, soal: 'お酒を ___ んですか。', arti: 'Apakah sudah berhenti minum sake?', jawaban: 'やめられた', pilihan: ['やめられた', 'やめた', 'やめている', 'やめます'] },
  { id: 'b49-1-4', grup: 'bunpou', no: 1, soal: '部長は 何時に 来___か。', arti: 'Kepala bagian datang pada pukul berapa?', jawaban: 'られます', pilihan: ['られます', 'ります', 'させます', 'させられます'] },
  { id: 'b49-1-5', grup: 'bunpou', no: 1, soal: '社長は きのう 大阪へ ___。', arti: 'Direktur kemarin pergi ke Osaka.', jawaban: '行かれました', pilihan: ['行かれました', '行きました', '行かせました', '行かされました'] },

  // ── 文型 2 · お〜になります（Kata Hormat） ──────────────────────────
  { id: 'b49-2-1', grup: 'bunpou', no: 2, soal: '社長は もう お帰り ___。', arti: 'Direktur sudah pulang.', jawaban: 'になりました', pilihan: ['になりました', 'しました', 'いました', 'でした'] },
  { id: 'b49-2-2', grup: 'bunpou', no: 2, soal: 'ワット先生は 研究室に ___。', arti: 'Apakah Bapak Watt ada di laboratorium?', jawaban: 'いらっしゃいます', pilihan: ['いらっしゃいます', 'います', 'おります', 'まいります'] },
  { id: 'b49-2-3', grup: 'bunpou', no: 2, soal: '部長は もう お___ になりましたか。', arti: 'Apakah kepala bagian sudah pulang?', jawaban: '帰り', pilihan: ['帰り', '帰って', '帰る', '帰った'] },
  { id: 'b49-2-4', grup: 'bunpou', no: 2, soal: '社長は 何を ___ になりましたか。', arti: 'Apa yang dibaca Direktur?', jawaban: 'お読み', pilihan: ['お読み', '読み', '読んで', '読む'] },
  { id: 'b49-2-5', grup: 'bunpou', no: 2, soal: '先生は もう ___ になりました。', arti: 'Bapak/Ibu guru sudah pergi keluar.', jawaban: 'お出かけ', pilihan: ['お出かけ', '出かけて', '出かける', '出かけた'] },

  // ── 文型 3 · お〜なさいます／お〜ください ───────────────────────────
  { id: 'b49-3-1', grup: 'bunpou', no: 3, soal: '部長は アメリカへ 出張___。', arti: 'Kepala bagian akan dinas ke Amerika Serikat.', jawaban: 'なさいます', pilihan: ['なさいます', 'します', 'いたします', 'されます'] },
  { id: 'b49-3-2', grup: 'bunpou', no: 3, soal: 'A：失礼します。B：どうぞ お___ ください。', arti: 'A：Permisi. B：Silakan masuk!', jawaban: '入り', pilihan: ['入り', '入って', '入る', '入った'] },
  { id: 'b49-3-3', grup: 'bunpou', no: 3, soal: 'どうぞ お___ ください。（Silakan bersukacita!）', arti: 'Silakan bersukacita!', jawaban: '喜び', pilihan: ['喜び', '喜んで', '喜ぶ', '喜んだ'] },
  { id: 'b49-3-4', grup: 'bunpou', no: 3, soal: '部長は あした 東京へ 出張___ ます。', arti: 'Kepala bagian besok akan dinas ke Tokyo.', jawaban: 'なさい', pilihan: ['なさい', 'し', 'され', 'させ'] },
  { id: 'b49-3-5', grup: 'bunpou', no: 3, soal: 'A：社長は もう こちらに ___ ますか。B：いいえ、まだです。', arti: 'A：Apakah Direktur sudah ada di sini? B：Belum.', jawaban: 'いらっしゃい', pilihan: ['いらっしゃい', 'いらっしゃり', 'いらっしゃって', 'いらっしゃる'] },

  // ── 文型 4 · お＋Kata Kerja＋ください ──────────────────────────────
  { id: 'b49-4-1', grup: 'bunpou', no: 4, soal: 'しばらく お___ ください。', arti: 'Mohon tunggu sebentar.', jawaban: '待ち', pilihan: ['待ち', '待って', '待つ', '待った'] },
  { id: 'b49-4-2', grup: 'bunpou', no: 4, soal: '忘れ物に ご___ ください。', arti: 'Hati-hati barang bawaan Anda agar tidak tertinggal!', jawaban: '注意', pilihan: ['注意', '注意して', '注意する', '注意し'] },
  { id: 'b49-4-3', grup: 'bunpou', no: 4, soal: 'また ___ ください。', arti: 'Silakan datang lagi!', jawaban: 'いらっしゃって', pilihan: ['いらっしゃって', 'いらっしゃい', 'いらっしゃる', 'いらっしゃり'] },
  { id: 'b49-4-4', grup: 'bunpou', no: 4, soal: 'こちらに お___ ください。', arti: 'Mohon tulis di sini.', jawaban: '書き', pilihan: ['書き', '書いて', '書く', '書いた'] },
  { id: 'b49-4-5', grup: 'bunpou', no: 4, soal: 'どうぞ お___ ください。', arti: 'Silakan duduk.', jawaban: '座り', pilihan: ['座り', '座って', '座る', '座った'] },

  // ── Catatan 1 · 敬語（Kata Halus）— pemakaian ──────────────────────
  { id: 'b49-c1-1', grup: 'catatan', no: 1, soal: '部長は あした 大阪へ ___ ます。', arti: 'Kepala bagian besok pergi ke Osaka.', jawaban: '行かれ', pilihan: ['行かれ', '行き', '行かせ', '行かされ'] },
  { id: 'b49-c1-2', grup: 'catatan', no: 1, soal: 'A：課長は もう 帰りましたか。B：ええ、もう ___。', arti: 'A：Apakah kepala seksi sudah pulang? B：Ya, sudah pulang.', jawaban: '帰られました', pilihan: ['帰られました', '帰りました', '帰らせました', '帰って いました'] },
  { id: 'b49-c1-3', grup: 'catatan', no: 1, soal: 'A：たばこを ___ んですか。B：ええ、去年 やめました。', arti: 'A：Apakah sudah berhenti merokok? B：Ya, berhenti tahun lalu.', jawaban: 'やめられた', pilihan: ['やめられた', 'やめた', 'やめさせた', 'やめます'] },
  { id: 'b49-c1-4', grup: 'catatan', no: 1, soal: '先生は 7時に 来___。', arti: 'Bapak/Ibu guru akan datang pada pukul tujuh.', jawaban: 'られます', pilihan: ['られます', 'ります', 'させます', 'させられます'] },
  { id: 'b49-c1-5', grup: 'catatan', no: 1, soal: 'A：部長は この 本を ___ ましたか。B：ええ、もう お読みに なりました。', arti: 'A：Apakah kepala bagian sudah membaca buku ini? B：Ya, sudah membaca.', jawaban: '読まれ', pilihan: ['読まれ', '読み', '読ませ', '読まされ'] },

  // ── Catatan 2 · 尊敬語（Kata Hormat）— お／ご pada Kata Benda ───────
  { id: 'b49-c2-1', grup: 'catatan', no: 2, soal: 'A：お父様は ___ですか。', arti: 'A：Bagaimana kabar ayah Anda?', jawaban: 'お元気', pilihan: ['お元気', 'ご元気', '元気な', '元気の'] },
  { id: 'b49-c2-2', grup: 'catatan', no: 2, soal: 'A：部長の ___は いらっしゃいますか。', arti: 'A：Apakah istri kepala bagian ada?', jawaban: '奥様', pilihan: ['奥様', '奥さん', '家内', '妻'] },
  { id: 'b49-c2-3', grup: 'catatan', no: 2, soal: 'A：___は どちらですか。', arti: 'A：Di mana keluarga Anda?', jawaban: 'ご家族', pilihan: ['ご家族', '家族', 'お家族', '家族様'] },
  { id: 'b49-c2-4', grup: 'catatan', no: 2, soal: 'A：お___は 何ですか。', arti: 'A：Siapa nama Anda?', jawaban: '名前', pilihan: ['名前', '名まえ', '氏名', '名'] },
  { id: 'b49-c2-5', grup: 'catatan', no: 2, soal: 'A：部長は 何か ___が ありますか。', arti: 'A：Apakah kepala bagian punya pendapat?', jawaban: 'ご意見', pilihan: ['ご意見', 'お意見', '意見', '意見様'] },

  // ── Catatan 3 · 尊敬語 — Perhatian 1（いらっしゃいます dll.) ─────────
  { id: 'b49-c3-1', grup: 'catatan', no: 3, soal: 'ワット先生は 研究室に ___。', arti: 'Apakah Bapak Watt ada di laboratorium?', jawaban: 'いらっしゃいます', pilihan: ['いらっしゃいます', 'いらっしゃります', 'います', 'おります'] },
  { id: 'b49-c3-2', grup: 'catatan', no: 3, soal: 'A：社長は もう 来ましたか。B：ええ、もう ___。', arti: 'A：Apakah Direktur sudah datang? B：Ya, sudah datang.', jawaban: 'いらっしゃいました', pilihan: ['いらっしゃいました', 'いらっしゃりました', '来ました', 'まいりました'] },
  { id: 'b49-c3-3', grup: 'catatan', no: 3, soal: '社長は あした 何を ___ ますか。', arti: 'Apa yang akan dilakukan Direktur besok?', jawaban: 'なさい', pilihan: ['なさい', 'し', 'され', 'させ'] },
  { id: 'b49-c3-4', grup: 'catatan', no: 3, soal: '先生は この 本を ___ ました。', arti: 'Bapak/Ibu guru sudi memberikan buku ini kepada saya.', jawaban: 'くださり', pilihan: ['くださり', 'ください', 'くださって', 'くださる'] },
  { id: 'b49-c3-5', grup: 'catatan', no: 3, soal: 'A：社長は もう お帰りに なりましたか。B：いいえ、まだ こちらに ___。', arti: 'A：Apakah Direktur sudah pulang? B：Belum, masih ada di sini.', jawaban: 'いらっしゃいます', pilihan: ['いらっしゃいます', 'いらっしゃります', 'います', 'おります'] },

  // ── Catatan 4 · 尊敬語 — Perhatian 2（お／ご） ──────────────────────
  { id: 'b49-c4-1', grup: 'catatan', no: 4, soal: '部長の 奥様も ___ 一緒に ゴルフに 行かれます。', arti: 'Istri kepala bagian juga bersama-sama pergi ke golf.', jawaban: 'ご', pilihan: ['ご', 'お', 'を', 'に'] },
  { id: 'b49-c4-2', grup: 'catatan', no: 4, soal: 'A：___仕事は どちらですか。', arti: 'A：Di mana kantor Anda?', jawaban: 'お', pilihan: ['お', 'ご', 'を', 'に'] },
  { id: 'b49-c4-3', grup: 'catatan', no: 4, soal: 'A：___家族は お元気ですか。', arti: 'A：Bagaimana kabar keluarga Anda?', jawaban: 'ご', pilihan: ['ご', 'お', 'を', 'に'] },
  { id: 'b49-c4-4', grup: 'catatan', no: 4, soal: 'A：___意見が ありますか。', arti: 'A：Apakah Anda punya pendapat?', jawaban: 'ご', pilihan: ['ご', 'お', 'を', 'に'] },
  { id: 'b49-c4-5', grup: 'catatan', no: 4, soal: 'A：___元気ですか。', arti: 'A：Bagaimana kabar Anda?', jawaban: 'お', pilihan: ['お', 'ご', 'を', 'に'] },

  // ── Catatan 5 · Kata Halus dan Bentuk Kalimat（bentuk biasa） ────────
  { id: 'b49-c5-1', grup: 'catatan', no: 5, soal: '部長は 何時に ___。（bentuk biasa）', arti: 'Kepala bagian datang pada pukul berapa? (kalimat biasa)', jawaban: 'いらっしゃる', pilihan: ['いらっしゃる', 'いらっしゃいます', 'いらっしゃった', 'まいります'] },
  { id: 'b49-c5-2', grup: 'catatan', no: 5, soal: 'A：部長は もう ___。B：うん、もう 帰ったよ。', arti: 'A：Apakah kepala bagian sudah pulang? B：Ya, sudah pulang.', jawaban: '帰られた', pilihan: ['帰られた', '帰りました', '帰らせた', '帰る'] },
  { id: 'b49-c5-3', grup: 'catatan', no: 5, soal: 'A：社長は 何を ___。B：新聞を 読んで います。', arti: 'A：Apa yang dibaca Direktur? B：Sedang baca koran.', jawaban: '読まれた', pilihan: ['読まれた', '読みました', '読ませた', '読む'] },
  { id: 'b49-c5-4', grup: 'catatan', no: 5, soal: 'A：部長は もう ___。B：ううん、まだ 来て ないよ。', arti: 'A：Apakah kepala bagian sudah datang? B：Belum, masih belum datang.', jawaban: '来られた', pilihan: ['来られた', '来ました', '来させた', '来る'] },
  { id: 'b49-c5-5', grup: 'catatan', no: 5, soal: 'A：課長は もう 昼ごはんを ___。B：うん、たった今。', arti: 'A：Apakah kepala seksi sudah makan siang? B：Ya, baru saja.', jawaban: '食べられた', pilihan: ['食べられた', '食べました', '食べさせた', '食べる'] },

  // ── Catatan 6 · 〜まして（bentuk て yang lebih halus） ──────────────
  { id: 'b49-c6-1', grup: 'catatan', no: 6, soal: 'ハンスが ゆうべ 熱を ___、けさも まだ 下がらないんです。', arti: 'Tadi malam Hans demam, dan pagi ini demam belum turun juga.', jawaban: '出しまして', pilihan: ['出しまして', '出して', '出して いて', '出し'] },
  { id: 'b49-c6-2', grup: 'catatan', no: 6, soal: 'すみません。急に 用事が ___、お先に 失礼します。', arti: 'Maaf. Tiba-tiba ada urusan, jadi saya pulang duluan.', jawaban: 'できまして', pilihan: ['できまして', 'できて', 'できる', 'でき'] },
  { id: 'b49-c6-3', grup: 'catatan', no: 6, soal: 'A：どうして 来なかったんですか。B：母が 病気に ___、来られませんでした。', arti: 'A：Kenapa tidak datang? B：Karena ibu sakit, saya tidak bisa datang.', jawaban: 'なりまして', pilihan: ['なりまして', 'なって', 'なる', 'なり'] },
  { id: 'b49-c6-4', grup: 'catatan', no: 6, soal: '途中で 事故が ___、遅れて しまいました。', arti: 'Di jalan ada kecelakaan, jadi saya terlambat.', jawaban: 'ありまして', pilihan: ['ありまして', 'あって', 'ある', 'あり'] },
  { id: 'b49-c6-5', grup: 'catatan', no: 6, soal: 'A：どうして お酒を やめたんですか。B：医者に ___、やめました。', arti: 'A：Kenapa berhenti minum sake? B：Karena disuruh dokter, saya berhenti.', jawaban: '言われまして', pilihan: ['言われまして', '言われて', '言われる', '言われ'] },

  // ── Catatan 7 · 〜ますので（bentuk sopan dari 〜ので） ───────────────
  { id: 'b49-c7-1', grup: 'catatan', no: 7, soal: 'きょうは 学校を ___ ので、先生に よろしく お伝え ください。', arti: 'Tolong sampaikan salam kepada guru karena hari ini saya menyuruh anak saya untuk tidak masuk sekolah!', jawaban: '休ませます', pilihan: ['休ませます', '休ませて', '休ませる', '休ませた'] },
  { id: 'b49-c7-2', grup: 'catatan', no: 7, soal: 'A：どうして 来ませんでしたか。B：熱が ___ ので、来られませんでした。', arti: 'A：Kenapa tidak datang? B：Karena demam, saya tidak bisa datang.', jawaban: 'あります', pilihan: ['あります', 'あって', 'ある', 'あった'] },
  { id: 'b49-c7-3', grup: 'catatan', no: 7, soal: 'これから 出かけ___ ので、よろしく お願いします。', arti: 'Karena saya akan keluar sekarang, mohon bantuannya.', jawaban: 'ます', pilihan: ['ます', 'て', 'る', 'た'] },
  { id: 'b49-c7-4', grup: 'catatan', no: 7, soal: 'A：あした 学校を 休みますか。B：ええ、___ ので、先生に よろしく お伝え ください。', arti: 'A：Besok tidak masuk sekolah? B：Ya, karena tidak masuk, tolong sampaikan salam kepada guru.', jawaban: '休みます', pilihan: ['休みます', '休みて', '休む', '休んだ'] },
  { id: 'b49-c7-5', grup: 'catatan', no: 7, soal: 'A：どうして 会議に 遅れましたか。B：電車が ___ ので、遅れました。', arti: 'A：Kenapa terlambat ke rapat? B：Karena keretanya terlambat, saya jadi terlambat.', jawaban: '遅れました', pilihan: ['遅れました', '遅れて', '遅れる', '遅れまして'] },
]
