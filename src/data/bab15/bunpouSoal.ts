import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 15 — tepat 5 soal per pola (2 pola 文型 + 4 Catatan Tata Bahasa).
 * Sumber: `contoh`/`artiContoh`/`reibun` di bab ini (pola tidak diubah).
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Kerja Bentuk て も いいです ───────────────────────
  { id: 'b15-1-1', grup: 'bunpou', no: 1, soal: 'この カタログを もらっ___ いいですか。', arti: 'Boleh minta katalog ini?', jawaban: 'ても', pilihan: ['ても', 'ては', 'て', 'た'] },
  { id: 'b15-1-2', grup: 'bunpou', no: 1, soal: 'この 辞書を 借り___ いいですか。', arti: 'Boleh meminjam kamus ini?', jawaban: 'ても', pilihan: ['ても', 'ては', 'てに', 'た'] },
  { id: 'b15-1-3', grup: 'bunpou', no: 1, soal: 'この カタログを もらっても いいですか。……ええ、いいですよ。___。', arti: '……Ya, boleh. Silakan.', jawaban: 'どうぞ', pilihan: ['どうぞ', 'けっこうです', 'いけません', 'すみません'] },
  { id: 'b15-1-4', grup: 'bunpou', no: 1, soal: 'この 辞書を 借りても いいですか。……すみません、___……。今 使っています。', arti: '……Maaf… Sekarang sedang saya pakai.', jawaban: 'ちょっと', pilihan: ['ちょっと', 'どうぞ', 'いいですよ', 'はい'] },
  { id: 'b15-1-5', grup: 'bunpou', no: 1, soal: 'エアコンを つけ___ いいですか。', arti: 'Boleh menyalakan AC?', jawaban: 'ても', pilihan: ['ても', 'ては', 'て', 'たら'] },

  // ── 文型 2 · Kata Kerja Bentuk て います (keadaan) ─────────────────
  { id: 'b15-2-1', grup: 'bunpou', no: 2, soal: 'IMCは コンピューターソフトを 作って ___。', arti: 'IMC memproduksi perangkat lunak komputer.', jawaban: 'います', pilihan: ['います', 'あります', 'ください', 'ましょう'] },
  { id: 'b15-2-2', grup: 'bunpou', no: 2, soal: 'マリアさんは どこに 住ん___ いますか。', arti: 'Sdr. Maria tinggal di mana?', jawaban: 'で', pilihan: ['で', 'て', 'に', 'を'] },
  { id: 'b15-2-3', grup: 'bunpou', no: 2, soal: 'マリアさんは 大阪に ___ います。', arti: 'Sdr. Maria tinggal di Osaka.', jawaban: '住んで', pilihan: ['住んで', '住みて', '住って', '住いで'] },
  { id: 'b15-2-4', grup: 'bunpou', no: 2, soal: 'ワンさんは 結婚して いますか。……はい、___。', arti: 'Apakah Sdr. Wang sudah menikah? ……Ya, sudah menikah.', jawaban: '結婚して います', pilihan: ['結婚して います', '結婚します', '結婚しました', '結婚して ください'] },
  { id: 'b15-2-5', grup: 'bunpou', no: 2, soal: '富士大学で 日本語を 教え___ います。', arti: 'Mengajar bahasa Jepang di Universitas Fuji.', jawaban: 'て', pilihan: ['て', 'で', 'た', 'ては'] },

  // ── Catatan 1 · Kata Kerja Bentuk ては いけません ───────────────────
  { id: 'b15-c1-1', grup: 'catatan', no: 1, soal: 'ここで たばこを 吸っ___ いけません。', arti: 'Tidak boleh merokok di sini.', jawaban: 'ては', pilihan: ['ては', 'ても', 'て', 'には'] },
  { id: 'b15-c1-2', grup: 'catatan', no: 1, soal: 'ここで 遊ん___ いけません。', arti: 'Tidak boleh bermain di sini.', jawaban: 'では', pilihan: ['では', 'ては', 'で', 'は'] },
  { id: 'b15-c1-3', grup: 'catatan', no: 1, soal: 'ここで たばこを 吸っては いけません。___ですから。', arti: 'Tidak boleh merokok di sini. Sebab dilarang merokok.', jawaban: '禁煙', pilihan: ['禁煙', '安全', '自由', '静か'] },
  { id: 'b15-c1-4', grup: 'catatan', no: 1, soal: 'ここに 入っ___ いけません。', arti: 'Tidak boleh masuk ke sini.', jawaban: 'ては', pilihan: ['ては', 'ても', 'て', 'た'] },
  { id: 'b15-c1-5', grup: 'catatan', no: 1, soal: '「Tidak boleh merokok di sini.」 に あう 文は どれですか。___', arti: 'Pilih kalimat yang benar untuk "Tidak boleh merokok di sini."', jawaban: 'ここで たばこを 吸っては いけません。', pilihan: ['ここで たばこを 吸っては いけません。', 'ここで たばこを 吸っても いいです。', 'ここで たばこを 吸って ください。', 'ここで たばこを 吸って います。'] },

  // ── Catatan 2 · 知っています → 知りません ─────────────────────────
  { id: 'b15-c2-1', grup: 'catatan', no: 2, soal: '市役所の 電話番号を 知っ___ いますか。', arti: 'Apakah tahu nomor telepon kantor wali kota?', jawaban: 'て', pilihan: ['て', 'で', 'た', 'ては'] },
  { id: 'b15-c2-2', grup: 'catatan', no: 2, soal: '市役所の 電話番号を 知っていますか。……いいえ、___。', arti: '……Tidak, tidak tahu.', jawaban: '知りません', pilihan: ['知りません', '知っていません', '知ります', '知りました'] },
  { id: 'b15-c2-3', grup: 'catatan', no: 2, soal: 'マリアさんは 市役所の 電話番号を 知っていますか。……はい、___。', arti: '……Ya, tahu.', jawaban: '知っています', pilihan: ['知っています', '知ります', '知りません', '知りました'] },
  { id: 'b15-c2-4', grup: 'catatan', no: 2, soal: 'あの 人の 名前を 知って ___か。', arti: 'Apakah tahu nama orang itu?', jawaban: 'います', pilihan: ['います', 'あります', 'ください', 'いました'] },
  { id: 'b15-c2-5', grup: 'catatan', no: 2, soal: 'この 漢字の 読み方を ___ いますか。', arti: 'Apakah tahu cara membaca kanji ini?', jawaban: '知って', pilihan: ['知って', '知りて', '知んで', '知いで'] },

  // ── Catatan 3 · Kata Benda に Kata Kerja ───────────────────────────
  { id: 'b15-c3-1', grup: 'catatan', no: 3, soal: 'ここ___ 入っては いけません。', arti: 'Tidak boleh masuk ke sini.', jawaban: 'に', pilihan: ['に', 'で', 'を', 'へ'] },
  { id: 'b15-c3-2', grup: 'catatan', no: 3, soal: 'ここ___ 座っても いいですか。', arti: 'Boleh duduk di sini?', jawaban: 'に', pilihan: ['に', 'で', 'が', 'と'] },
  { id: 'b15-c3-3', grup: 'catatan', no: 3, soal: '電車に ___。', arti: 'Naik kereta.', jawaban: '乗ります', pilihan: ['乗ります', '入ります', '座ります', '着きます'] },
  { id: 'b15-c3-4', grup: 'catatan', no: 3, soal: 'ここに 座って ___ですか。', arti: 'Boleh duduk di sini? (meminta izin)', jawaban: 'も いい', pilihan: ['も いい', 'は いい', 'が いい', 'を いい'] },
  { id: 'b15-c3-5', grup: 'catatan', no: 3, soal: 'ここに 入っては ___。', arti: 'Tidak boleh masuk ke sini.', jawaban: 'いけません', pilihan: ['いけません', 'いいです', 'ください', 'います'] },

  // ── Catatan 4 · Kata Benda に Kata Benda を Kata Kerja ─────────────
  { id: 'b15-c4-1', grup: 'catatan', no: 4, soal: 'ここ___ 車を 止めて ください。', arti: 'Hentikan mobil di sini.', jawaban: 'に', pilihan: ['に', 'で', 'を', 'へ'] },
  { id: 'b15-c4-2', grup: 'catatan', no: 4, soal: 'ここに 住所___ 書いて ください。', arti: 'Tuliskan alamat di sini.', jawaban: 'を', pilihan: ['を', 'に', 'が', 'と'] },
  { id: 'b15-c4-3', grup: 'catatan', no: 4, soal: 'ここに 名前と 住所を ___ ください。', arti: 'Tolong tulis nama dan alamat di sini.', jawaban: '書いて', pilihan: ['書いて', '書いで', '書きて', '書んで'] },
  { id: 'b15-c4-4', grup: 'catatan', no: 4, soal: 'ここに 車を ___ ください。', arti: 'Hentikan mobil di sini.', jawaban: '止めて', pilihan: ['止めて', '止めって', '止めいで', '止めんで'] },
  { id: 'b15-c4-5', grup: 'catatan', no: 4, soal: 'ここに 名前を 書い___ ください。', arti: 'Tolong tulis nama di sini.', jawaban: 'て', pilihan: ['て', 'で', 'た', 'に'] },
]
