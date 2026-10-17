import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 48 — tepat 5 soal per pola (2 pola 文型 + 4 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Benda(orang) を Kata Kerja Kausatif (intransitif) ──
  { id: 'b48-1-1', grup: 'bunpou', no: 1, soal: '部長は ミラーさんを アメリカへ ___。', arti: 'Kepala Bagian menyuruh sdr. Miller dinas ke Amerika Serikat.', jawaban: '出張させます', pilihan: ['出張させます', '出張します', '出張されます', '出張させられます'] },
  { id: 'b48-1-2', grup: 'bunpou', no: 1, soal: '息子を イギリスへ ___。', arti: 'Menyuruh anak laki-laki saya belajar ke Inggris.', jawaban: '留学させます', pilihan: ['留学させます', '留学します', '留学されます', '留学させられます'] },
  { id: 'b48-1-3', grup: 'bunpou', no: 1, soal: 'わたしは 娘を 自由に ___。', arti: 'Saya membiarkan anak perempuan saya bermain dengan bebas.', jawaban: '遊ばせました', pilihan: ['遊ばせました', '遊びました', '遊ばれました', '遊ばせられます'] },
  { id: 'b48-1-4', grup: 'bunpou', no: 1, soal: 'わたしは 息子を プールで ___。', arti: 'Saya menyuruh anak laki-laki saya berenang di kolam.', jawaban: '泳がせます', pilihan: ['泳がせます', '泳ぎます', '泳がれます', '泳がされます'] },
  { id: 'b48-1-5', grup: 'bunpou', no: 1, soal: '息子を イギリスへ 留学 ___。', arti: 'Menyuruh anak laki-laki saya belajar ke Inggris.', jawaban: 'させます', pilihan: ['させます', 'します', 'されます', 'させられます'] },

  // ── 文型 2 · Kata Benda(orang) に Kata Benda を Kata Kerja Kausatif ──
  { id: 'b48-2-1', grup: 'bunpou', no: 2, soal: '先生は 生徒に 自由に 意見を ___。', arti: 'Guru membiarkan siswa mengutarakan pendapat secara bebas.', jawaban: '言わせました', pilihan: ['言わせました', '言いました', '言われました', '言わせられます'] },
  { id: 'b48-2-2', grup: 'bunpou', no: 2, soal: '娘に ピアノを ___。', arti: 'Menyuruh anak perempuan saya belajar piano.', jawaban: '習わせます', pilihan: ['習わせます', '習います', '習われます', '習わせられます'] },
  { id: 'b48-2-3', grup: 'bunpou', no: 2, soal: '朝は 忙しいですから、娘に 朝ごはんの 準備を ___。', arti: 'Karena pagi hari sibuk, saya menyuruh anak perempuan saya membantu mempersiapkan sarapan.', jawaban: '手伝わせます', pilihan: ['手伝わせます', '手伝います', '手伝われます', '手伝わせられます'] },
  { id: 'b48-2-4', grup: 'bunpou', no: 2, soal: 'わたしは 子どもに 野菜を ___。', arti: 'Saya menyuruh anak makan sayur.', jawaban: '食べさせます', pilihan: ['食べさせます', '食べます', '食べられます', '食べさせられます'] },
  { id: 'b48-2-5', grup: 'bunpou', no: 2, soal: 'わたしは 弟に 本を ___。', arti: 'Saya menyuruh adik membaca buku.', jawaban: '読ませました', pilihan: ['読ませました', '読みました', '読まれました', '読ませられます'] },

  // ── Catatan 1 · Kata Kerja Kausatif（Bentuk 使役）— konjugasi ─────────
  { id: 'b48-c1-1', grup: 'catatan', no: 1, soal: 'いきます → ___', arti: 'Bentuk kausatif dari いきます = いかせます (menyuruh pergi).', jawaban: 'いかせます', pilihan: ['いかせます', 'いきます', 'いかれます', 'いかされます'] },
  { id: 'b48-c1-2', grup: 'catatan', no: 1, soal: 'たべます → ___', arti: 'Bentuk kausatif dari たべます = たべさせます (menyuruh makan).', jawaban: 'たべさせます', pilihan: ['たべさせます', 'たべます', 'たべられます', 'たべされます'] },
  { id: 'b48-c1-3', grup: 'catatan', no: 1, soal: 'のみます → ___', arti: 'Bentuk kausatif dari のみます = のませます (menyuruh minum).', jawaban: 'のませます', pilihan: ['のませます', 'のみます', 'のまれます', 'のまされます'] },
  { id: 'b48-c1-4', grup: 'catatan', no: 1, soal: 'します → ___', arti: 'Bentuk kausatif dari します = させます (menyuruh melakukan).', jawaban: 'させます', pilihan: ['させます', 'します', 'されます', 'しさせます'] },
  { id: 'b48-c1-5', grup: 'catatan', no: 1, soal: 'きます → ___', arti: 'Bentuk kausatif dari きます = こさせます (menyuruh datang).', jawaban: 'こさせます', pilihan: ['こさせます', 'きます', 'こられます', 'きさせます'] },

  // ── Catatan 2 · Dua jenis pelaku（を intransitif／に transitif） ─────
  { id: 'b48-c2-1', grup: 'catatan', no: 2, soal: '部長は ミラーさん___ アメリカへ 出張させます。', arti: 'Kepala Bagian menyuruh sdr. Miller dinas ke Amerika Serikat.', jawaban: 'を', pilihan: ['を', 'に', 'が', 'で'] },
  { id: 'b48-c2-2', grup: 'catatan', no: 2, soal: '先生は 生徒___ 自由に 意見を 言わせました。', arti: 'Guru membiarkan siswa mengutarakan pendapat secara bebas.', jawaban: 'に', pilihan: ['に', 'を', 'が', 'へ'] },
  { id: 'b48-c2-3', grup: 'catatan', no: 2, soal: 'わたしは 娘___ 自由に 遊ばせました。', arti: 'Saya membiarkan anak perempuan saya bermain dengan bebas.', jawaban: 'を', pilihan: ['を', 'に', 'で', 'へ'] },
  { id: 'b48-c2-4', grup: 'catatan', no: 2, soal: 'わたしは 子ども___ 道の 右側を 歩かせます。', arti: 'Saya menyuruh anak berjalan di sebelah kanan jalan.', jawaban: 'に', pilihan: ['に', 'を', 'へ', 'が'] },
  { id: 'b48-c2-5', grup: 'catatan', no: 2, soal: '朝は 忙しいですから、娘___ 朝ごはんの 準備を 手伝わせます。', arti: 'Karena pagi hari sibuk, saya menyuruh anak perempuan saya membantu mempersiapkan sarapan.', jawaban: 'に', pilihan: ['に', 'を', 'へ', 'と'] },

  // ── Catatan 3 · Cara memakai Kata Kerja Kausatif ────────────────────
  { id: 'b48-c3-1', grup: 'catatan', no: 3, soal: 'わたしは 部長に 説明して ___。', arti: 'Saya minta kepada kepala bagian untuk menjelaskan.', jawaban: 'いただきました', pilihan: ['いただきました', 'もらいました', 'くれました', 'あげました'] },
  { id: 'b48-c3-2', grup: 'catatan', no: 3, soal: 'わたしは 友達に 説明して ___。', arti: 'Saya minta kepada teman untuk menjelaskan.', jawaban: 'もらいました', pilihan: ['もらいました', 'いただきました', 'くれました', 'さしあげました'] },
  { id: 'b48-c3-3', grup: 'catatan', no: 3, soal: '父は 子ども___ 毎日 プールで 泳がせます。', arti: 'Ayah menyuruh anak berenang setiap hari di kolam.', jawaban: 'を', pilihan: ['を', 'に', 'が', 'で'] },
  { id: 'b48-c3-4', grup: 'catatan', no: 3, soal: '先生は 学生___ 好きな 本を 読ませました。', arti: 'Guru membiarkan siswa membaca buku favorit mereka.', jawaban: 'に', pilihan: ['に', 'を', 'へ', 'が'] },
  { id: 'b48-c3-5', grup: 'catatan', no: 3, soal: '課長は わたし___ レポートを 書かせました。', arti: 'Kepala seksi menyuruh saya menulis laporan.', jawaban: 'に', pilihan: ['に', 'を', 'へ', 'が'] },

  // ── Catatan 4 · Kata Kerja Kausatif Bentuk て いただけませんか ───────
  { id: 'b48-c4-1', grup: 'catatan', no: 4, soal: 'いい 先生を ___ いただけませんか。', arti: 'Apakah dapat memperkenalkan guru yang baik?', jawaban: '紹介して', pilihan: ['紹介して', '紹介します', '紹介させて', '紹介されて'] },
  { id: 'b48-c4-2', grup: 'catatan', no: 4, soal: '友達の 結婚式が あるので、早く ___ いただけませんか。', arti: 'Mohon izinkan saya untuk pulang cepat sebab ada pesta pernikahan teman.', jawaban: '帰らせて', pilihan: ['帰らせて', '帰って', '帰らされて', '帰り'] },
  { id: 'b48-c4-3', grup: 'catatan', no: 4, soal: 'すみません。しばらく ここに 車を ___ いただけませんか。', arti: 'Maaf. Boleh memarkir mobil di sini sebentar?', jawaban: '止めさせて', pilihan: ['止めさせて', '止めて', '止められて', '止め'] },
  { id: 'b48-c4-4', grup: 'catatan', no: 4, soal: 'A：しばらく ここで 待たせて いただけませんか。B：ええ、___。', arti: 'A：Boleh saya menunggu di sini sebentar? B：Ya, tidak apa-apa.', jawaban: 'かまいませんよ', pilihan: ['かまいませんよ', 'いけませんよ', 'いやですよ', 'だめですよ'] },
  { id: 'b48-c4-5', grup: 'catatan', no: 4, soal: 'A：この 電話を ___ いただけませんか。B：ええ、いいですよ。', arti: 'A：Boleh saya menggunakan telepon ini? B：Ya, boleh.', jawaban: '使わせて', pilihan: ['使わせて', '使って', '使われて', '使い'] },
]
