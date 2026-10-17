import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 30 — tepat 5 soal per pola (2 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Kerja Bentuk てあります ────────────────────────
  { id: 'b30-1-1', grup: 'bunpou', no: 1, soal: '机の 上に メモが ___。', arti: 'Di atas meja diletakkan catatan.', jawaban: '置いて あります', pilihan: ['置いて あります', '置いて います', '置きます', '置きました'] },
  { id: 'b30-1-2', grup: 'bunpou', no: 1, soal: 'カレンダーの 今月の 予定が ___。', arti: 'Pada kalender ditulis rencana bulan ini.', jawaban: '書いて あります', pilihan: ['書いて あります', '書いて います', '書きます', '書きました'] },
  { id: 'b30-1-3', grup: 'bunpou', no: 1, soal: 'A：メモは どこですか。B：机の 上___ 置いて あります。', arti: 'A：Catatan di mana? B：Diletakkan di atas meja.', jawaban: 'に', pilihan: ['に', 'が', 'を', 'で'] },
  { id: 'b30-1-4', grup: 'bunpou', no: 1, soal: '今月の 予定___ カレンダーに 書いて あります。', arti: 'Rencana bulan ini ditulis pada kalender.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'に'] },
  { id: 'b30-1-5', grup: 'bunpou', no: 1, soal: 'A：寒いですね。B：ええ、窓が ___。', arti: 'A：Dingin ya. B：Ya, jendelanya (sengaja) ditutup.', jawaban: '閉めて あります', pilihan: ['閉めて あります', '閉まって います', '閉めます', '閉まります'] },

  // ── 文型 2 · Kata Kerja Bentuk ておきます ────────────────────────
  { id: 'b30-2-1', grup: 'bunpou', no: 2, soal: '旅行の まえに、切符を ___。', arti: 'Sebelum perjalanan, saya membeli karcis (lebih dulu).', jawaban: '買って おきます', pilihan: ['買って おきます', '買って あります', '買います', '買いました'] },
  { id: 'b30-2-2', grup: 'bunpou', no: 2, soal: '次の 会議までに 何を ___ いいですか。', arti: 'Apa yang harus saya lakukan sampai dengan rapat berikutnya?', jawaban: 'して おいたら', pilihan: ['して おいたら', 'して いたら', 'したら', 'して おいて'] },
  { id: 'b30-2-3', grup: 'bunpou', no: 2, soal: 'この 資料を ___ ください。', arti: 'Diharapkan untuk membaca materi ini (lebih dulu).', jawaban: '読んで おいて', pilihan: ['読んで おいて', '読んで いて', '読んで', '読んでは'] },
  { id: 'b30-2-4', grup: 'bunpou', no: 2, soal: 'はさみを 使ったら、元の 所に ___ ください。', arti: 'Jika memakai gunting, tolong kembalikan ke tempat semula.', jawaban: '戻して おいて', pilihan: ['戻して おいて', '戻して いて', '戻して', '戻します'] },
  { id: 'b30-2-5', grup: 'bunpou', no: 2, soal: 'あした 会議が ありますから、いすは この ままに ___ ください。', arti: 'Karena besok ada rapat, kursinya dibiarkan begini saja.', jawaban: 'して おいて', pilihan: ['して おいて', 'して いて', 'して', 'します'] },

  // ── Catatan 1 · まだ ＋ Bentuk positif ──────────────────────────
  { id: 'b30-c1-1', grup: 'catatan', no: 1, soal: 'まだ 雨が ___。', arti: 'Masih turun hujan.', jawaban: '降って います', pilihan: ['降って います', '降ります', '降りました', '降って いました'] },
  { id: 'b30-c1-2', grup: 'catatan', no: 1, soal: 'A：道具を 貸しますか。B：まだ ___ から、そのままに して おいて ください。', arti: 'A：Saya pinjamkan alatnya? B：Karena masih dipakai, biarkan begitu saja.', jawaban: '使って います', pilihan: ['使って います', '使いません', '使いました', '使います'] },
  { id: 'b30-c1-3', grup: 'catatan', no: 1, soal: 'A：まだ 雨が 降って いますか。B：いいえ、もう ___。', arti: 'A：Masih turun hujan? B：Tidak, sudah berhenti.', jawaban: 'やみました', pilihan: ['やみました', 'やみません', 'やみます', 'やんで います'] },
  { id: 'b30-c1-4', grup: 'catatan', no: 1, soal: 'A：ごはんを 食べましたか。B：いいえ、まだ ___。', arti: 'A：Sudah makan? B：Tidak, belum makan.', jawaban: '食べて いません', pilihan: ['食べて いません', '食べて います', '食べません', '食べました'] },
  { id: 'b30-c1-5', grup: 'catatan', no: 1, soal: 'A：バスは 来ましたか。B：いいえ、まだ ___。', arti: 'A：Bus sudah datang? B：Tidak, belum datang.', jawaban: '来て いません', pilihan: ['来て いません', '来て います', '来ません', '来ました'] },

  // ── Catatan 2 · とか ────────────────────────────────────────────
  { id: 'b30-c2-1', grup: 'catatan', no: 2, soal: 'A：どんな スポーツを して いますか。B：そうですね。テニス___ 水泳などです。', arti: 'A：Berolahraga apa saja? B：Ya... tenis, berenang, dan lain-lain.', jawaban: 'とか', pilihan: ['とか', 'や', 'と', 'か'] },
  { id: 'b30-c2-2', grup: 'catatan', no: 2, soal: '週末は 映画を ___ 買い物を します。', arti: 'Akhir pekan saya menonton film atau berbelanja.', jawaban: '見るとか', pilihan: ['見るとか', '見てとか', '見ますとか', '見たとか'] },
  { id: 'b30-c2-3', grup: 'catatan', no: 2, soal: '日本では すし___ てんぷらが 人気が あります。', arti: 'Di Jepang, sushi dan tempura populer.', jawaban: 'とか', pilihan: ['とか', 'や', 'と', 'か'] },
  { id: 'b30-c2-4', grup: 'catatan', no: 2, soal: 'A：休みの 日は 何を しますか。B：音楽を 聞く___、映画を 見ます。', arti: 'A：Hari libur melakukan apa? B：Mendengarkan musik, menonton film.', jawaban: 'とか', pilihan: ['とか', 'たり', 'や', 'か'] },
  { id: 'b30-c2-5', grup: 'catatan', no: 2, soal: 'かばんの 中には ノート___ ペンが あります。', arti: 'Di dalam tas ada buku catatan dan pulpen.', jawaban: 'とか', pilihan: ['とか', 'や', 'と', 'か'] },

  // ── Catatan 3 · Partikel + も ──────────────────────────────────
  { id: 'b30-c3-1', grup: 'catatan', no: 3, soal: 'ほか___ も いろいろ あります。', arti: 'Selain itu masih ada macam-macam.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'と'] },
  { id: 'b30-c3-2', grup: 'catatan', no: 3, soal: 'どこ［へ］___ 行きません。', arti: 'Tidak pergi ke mana-mana.', jawaban: 'も', pilihan: ['も', 'は', 'が', 'を'] },
  { id: 'b30-c3-3', grup: 'catatan', no: 3, soal: '日本では どこ___ も 桜を 見る ことが できます。', arti: 'Di Jepang, di mana-mana bisa melihat bunga sakura.', jawaban: 'へ', pilihan: ['へ', 'を', 'が', 'と'] },
  { id: 'b30-c3-4', grup: 'catatan', no: 3, soal: 'A：だれが 行きますか。B：だれ___ 行きません。', arti: 'A：Siapa yang pergi? B：Tidak ada seorang pun yang pergi.', jawaban: 'も', pilihan: ['も', 'は', 'が', 'を'] },
  { id: 'b30-c3-5', grup: 'catatan', no: 3, soal: 'この 店には 何___ も ありません。', arti: 'Di toko ini tidak ada apa-apa.', jawaban: 'も', pilihan: ['も', 'は', 'が', 'を'] },
]
