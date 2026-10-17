import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 33 — tepat 5 soal per pola (4 pola 文型 + 2 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · 〜ろ／〜け（Bentuk Perintah） ────────────────────────────
  { id: 'b33-1-1', grup: 'bunpou', no: 1, soal: '早く ___。', arti: 'Cepat tidur!', jawaban: '寝ろ', pilihan: ['寝ろ', '寝る', '寝て', '寝た'] },
  { id: 'b33-1-2', grup: 'bunpou', no: 1, soal: 'もう 少しだ。___。', arti: 'Sedikit lagi. Semangat!', jawaban: '頑張れ', pilihan: ['頑張れ', '頑張る', '頑張って', '頑張った'] },
  { id: 'b33-1-3', grup: 'bunpou', no: 1, soal: '時間が ありません。___。', arti: 'Tidak ada waktu. Cepat!', jawaban: '急げ', pilihan: ['急げ', '急ぐ', '急いで', '急いだ'] },
  { id: 'b33-1-4', grup: 'bunpou', no: 1, soal: '危ないですから、___。', arti: 'Karena berbahaya, berhenti!', jawaban: '止まれ', pilihan: ['止まれ', '止まる', '止まって', '止まった'] },
  { id: 'b33-1-5', grup: 'bunpou', no: 1, soal: '自分の ことは 自分で ___。', arti: 'Urusan sendiri kerjakan sendiri!', jawaban: 'しろ', pilihan: ['しろ', 'する', 'して', 'した'] },

  // ── 文型 2 · 〜な（Bentuk Larangan） ────────────────────────────────
  { id: 'b33-2-1', grup: 'bunpou', no: 2, soal: '会議に ___よ。', arti: 'Jangan terlambat ke rapat!', jawaban: '遅れるな', pilihan: ['遅れるな', '遅れます', '遅れて', '遅れた'] },
  { id: 'b33-2-2', grup: 'bunpou', no: 2, soal: 'まだ 試合は 終わっていません。___。', arti: 'Pertandingan belum berakhir. Jangan beristirahat!', jawaban: '休むな', pilihan: ['休むな', '休みます', '休んで', '休んだ'] },
  { id: 'b33-2-3', grup: 'bunpou', no: 2, soal: 'ここに ___。', arti: 'Dilarang masuk ke sini!', jawaban: '入るな', pilihan: ['入るな', '入ります', '入って', '入った'] },
  { id: 'b33-2-4', grup: 'bunpou', no: 2, soal: '最後まで ___。', arti: 'Jangan menyerah sampai akhir!', jawaban: '負けるな', pilihan: ['負けるな', '負けます', '負けて', '負けた'] },
  { id: 'b33-2-5', grup: 'bunpou', no: 2, soal: '運転しますから、あまり ___よ。', arti: 'Karena akan menyetir, jangan minum terlalu banyak!', jawaban: '飲むな', pilihan: ['飲むな', '飲みます', '飲んで', '飲んだ'] },

  // ── 文型 3 · X は Y という 意味です ────────────────────────────────
  { id: 'b33-3-1', grup: 'bunpou', no: 3, soal: '「立入禁止」は 入るな___ 意味です。', arti: '"Tachiri Kinshi" berarti dilarang masuk.', jawaban: 'という', pilihan: ['という', 'といって', 'といった', 'というと'] },
  { id: 'b33-3-2', grup: 'bunpou', no: 3, soal: 'この マークは ___ 意味ですか。', arti: 'Apa maksud tanda ini?', jawaban: 'どういう', pilihan: ['どういう', 'どの', 'どれ', 'どうして'] },
  { id: 'b33-3-3', grup: 'bunpou', no: 3, soal: '「禁煙」は たばこを 吸うな___ 意味です。', arti: '"Kin en" berarti dilarang merokok.', jawaban: 'という', pilihan: ['という', 'といって', 'といった', 'と'] },
  { id: 'b33-3-4', grup: 'bunpou', no: 3, soal: 'この マークは 洗濯機で 洗える___ 意味です。', arti: 'Tanda ini berarti dapat dicuci dengan mesin cuci.', jawaban: 'という', pilihan: ['という', 'いって', 'といて', 'と'] },
  { id: 'b33-3-5', grup: 'bunpou', no: 3, soal: 'A：この 言葉は どういう ___ですか。B：よく 使う 言葉です。', arti: 'A：Apa arti kata ini? B：Kata yang sering dipakai.', jawaban: '意味', pilihan: ['意味', '言葉', '理由', '気持ち'] },

  // ── 文型 4 · ［「Kalimat」／Kata Kutip］と 言っていました ─────────────
  { id: 'b33-4-1', grup: 'bunpou', no: 4, soal: '田中さんは「あした 休みます」___ 言っていました。', arti: 'Sdr. Tanaka berkata "Besok saya libur".', jawaban: 'と', pilihan: ['と', 'を', 'が', 'に'] },
  { id: 'b33-4-2', grup: 'bunpou', no: 4, soal: '田中さんは あした ___と 言っていました。', arti: 'Katanya sdr. Tanaka besok libur.', jawaban: '休む', pilihan: ['休む', '休みます', '休んで', '休んだ'] },
  { id: 'b33-4-3', grup: 'bunpou', no: 4, soal: 'グプタさんは 30分ぐらいで ___と 言っていました。', arti: 'Katanya sdr. Gupta akan kembali dalam tiga puluh menit.', jawaban: '戻る', pilihan: ['戻る', '戻ります', '戻って', '戻った'] },
  { id: 'b33-4-4', grup: 'bunpou', no: 4, soal: 'ミラーさんは 来週 大阪へ 出張すると ___。', arti: 'Katanya sdr. Miller minggu depan dinas ke Osaka.', jawaban: '言っていました', pilihan: ['言っていました', '言います', '言いました', '言ってください'] },
  { id: 'b33-4-5', grup: 'bunpou', no: 4, soal: 'A：だれが 来ると 言っていましたか。B：田中さんが 来ると 言って ___。', arti: 'A：Katanya siapa yang datang? B：Katanya sdr. Tanaka yang datang.', jawaban: 'いました', pilihan: ['いました', 'います', 'いません', 'いましたか'] },

  // ── Catatan 1 · 〜と 書いて あります／〜と 読みます ──────────────────
  { id: 'b33-c1-1', grup: 'catatan', no: 1, soal: 'あの 漢字は ___ 読みますか。', arti: 'Huruf kanji itu cara membacanya bagaimana?', jawaban: '何と', pilihan: ['何と', '何を', '何が', '何に'] },
  { id: 'b33-c1-2', grup: 'catatan', no: 1, soal: 'あそこに「止まれ」___ 書いて あります。', arti: 'Di sana tertuliskan "Berhenti".', jawaban: 'と', pilihan: ['と', 'を', 'が', 'に'] },
  { id: 'b33-c1-3', grup: 'catatan', no: 1, soal: 'ここに 名前が 書いて ___。', arti: 'Di sini tertuliskan nama.', jawaban: 'あります', pilihan: ['あります', 'います', 'おきます', 'いました'] },
  { id: 'b33-c1-4', grup: 'catatan', no: 1, soal: 'この 漢字は 何と ___か。', arti: 'Kanji ini dibaca apa?', jawaban: '読みます', pilihan: ['読みます', '読みました', '読んで', '読む'] },
  { id: 'b33-c1-5', grup: 'catatan', no: 1, soal: '黒板に「宿題」___ 書いて あります。', arti: 'Di papan tulis tertuliskan "PR".', jawaban: 'と', pilihan: ['と', 'を', 'が', 'で'] },

  // ── Catatan 2 · 〜と 伝えて いただけませんか ────────────────────────
  { id: 'b33-c2-1', grup: 'catatan', no: 2, soal: 'ワンさんに「あとで 電話を ください」と ___ いただけませんか。', arti: 'Tolong sampaikan kepada sdr. Wang bahwa "Minta telepon nanti".', jawaban: '伝えて', pilihan: ['伝えて', '伝え', '伝える', '伝えた'] },
  { id: 'b33-c2-2', grup: 'catatan', no: 2, soal: '渡辺さんに あしたの パーティーは 6時からだ___ 伝えて いただけませんか。', arti: 'Maaf, tolong sampaikan kepada sdri. Watanabe bahwa pesta besok dari pukul enam.', jawaban: 'と', pilihan: ['と', 'を', 'が', 'に'] },
  { id: 'b33-c2-3', grup: 'catatan', no: 2, soal: 'すみませんが、田中さんに 会議は 3時からだと ___ いただけませんか。', arti: 'Maaf, tolong sampaikan kepada sdr. Tanaka bahwa rapat dari pukul tiga.', jawaban: '伝えて', pilihan: ['伝えて', '伝え', '伝える', '伝えた'] },
  { id: 'b33-c2-4', grup: 'catatan', no: 2, soal: 'A：佐藤さんに 伝えましたか。B：いいえ。___ 伝えて いただけませんか。', arti: 'A：Sudah menyampaikan kepada sdr. Sato? B：Belum. Boleh tolong sampaikan kepada sdr. Wang?', jawaban: 'ワンさんに', pilihan: ['ワンさんに', 'ワンさんを', 'ワンさんが', 'ワンさんと'] },
  { id: 'b33-c2-5', grup: 'catatan', no: 2, soal: 'ミラーさんに あしたは 休みだと 伝えて ___か。', arti: 'Boleh tolong sampaikan kepada sdr. Miller bahwa besok libur?', jawaban: 'いただけません', pilihan: ['いただけません', 'いただけます', 'いただきました', 'いただきます'] },
]
