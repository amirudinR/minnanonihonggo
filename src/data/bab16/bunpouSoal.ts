import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 16 — tepat 5 soal per pola (4 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` di bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Kerja Bentuk て、〜、Kata Kerja ─────────────────────
  { id: 'b16-1-1', grup: 'bunpou', no: 1, soal: '朝 ジョギングを___、シャワーを 浴びて、会社へ 行きます。', arti: 'Pagi hari joging, mandi, kemudian pergi ke perusahaan.', jawaban: 'して', pilihan: ['して', 'する', 'した', 'しない'] },
  { id: 'b16-1-2', grup: 'bunpou', no: 1, soal: '朝 ジョギングを して、シャワーを___、会社へ 行きます。', arti: 'Pagi hari joging, mandi, kemudian pergi ke perusahaan.', jawaban: '浴びて', pilihan: ['浴びて', '浴びる', '浴びた', '浴びない'] },
  { id: 'b16-1-3', grup: 'bunpou', no: 1, soal: '図書館へ___、本を 借りて、それから 友達に 会いました。', arti: 'Pergi ke perpustakaan untuk meminjam buku, kemudian bertemu dengan teman.', jawaban: '行って', pilihan: ['行って', '行く', '行った', '行きます'] },
  { id: 'b16-1-4', grup: 'bunpou', no: 1, soal: '図書館へ 行って、本を___、それから 友達に 会いました。', arti: 'Pergi ke perpustakaan, meminjam buku, kemudian bertemu dengan teman.', jawaban: '借りて', pilihan: ['借りて', '借りる', '借りた', '借ります'] },
  { id: 'b16-1-5', grup: 'bunpou', no: 1, soal: 'きのう 図書館へ 行って、本を 借りて、友達に___。', arti: 'Kemarin pergi ke perpustakaan, meminjam buku, lalu bertemu dengan teman.', jawaban: '会いました', pilihan: ['会いました', '会います', '会って', '会いません'] },

  // ── 文型 2 · Kata Kerja Bentuk てから、Kata Kerja ────────────────────
  { id: 'b16-2-1', grup: 'bunpou', no: 2, soal: 'コンサートが___から、レストランで 食事を しました。', arti: 'Setelah selesai konser, makan di restoran.', jawaban: '終わって', pilihan: ['終わって', '終わる', '終わった', '終わります'] },
  { id: 'b16-2-2', grup: 'bunpou', no: 2, soal: '国へ___から、何を しますか。', arti: 'Setelah pulang ke negara, melakukan apa?', jawaban: '帰って', pilihan: ['帰って', '帰る', '帰った', '帰ります'] },
  { id: 'b16-2-3', grup: 'bunpou', no: 2, soal: 'コンサートが 終わってから、レストランで___を しました。', arti: 'Setelah selesai konser, makan di restoran.', jawaban: '食事', pilihan: ['食事', '買い物', '仕事', '散歩'] },
  { id: 'b16-2-4', grup: 'bunpou', no: 2, soal: 'ジョギングを してから、シャワーを___。', arti: 'Setelah joging, mandi (berendam shower).', jawaban: '浴びます', pilihan: ['浴びます', '浴びて', '浴びる', '浴びました'] },
  { id: 'b16-2-5', grup: 'bunpou', no: 2, soal: '朝ごはんを___から、会社へ 行きます。', arti: 'Setelah makan pagi, pergi ke perusahaan.', jawaban: '食べて', pilihan: ['食べて', '食べる', '食べた', '食べます'] },

  // ── 文型 3 · Kata Benda₁ は Kata Benda₂ が Kata Sifat ────────────────
  { id: 'b16-3-1', grup: 'bunpou', no: 3, soal: '大阪は 食べ物___ おいしいです。', arti: 'Osaka makanannya enak.', jawaban: 'が', pilihan: ['が', 'は', 'を', 'に'] },
  { id: 'b16-3-2', grup: 'bunpou', no: 3, soal: '東京は 人___ 多いです。', arti: 'Di Tokyo banyak orang.', jawaban: 'が', pilihan: ['が', 'は', 'を', 'も'] },
  { id: 'b16-3-3', grup: 'bunpou', no: 3, soal: '大阪は ___が おいしいです。', arti: 'Osaka makanannya enak.', jawaban: '食べ物', pilihan: ['食べ物', '人', '町', '仕事'] },
  { id: 'b16-3-4', grup: 'bunpou', no: 3, soal: '大阪は 食べ物が___です。', arti: 'Osaka makanannya enak.', jawaban: 'おいしい', pilihan: ['おいしい', 'おいしくて', 'おいしかった', 'おいしく'] },
  { id: 'b16-3-5', grup: 'bunpou', no: 3, soal: '東京は 人が___です。', arti: 'Di Tokyo banyak orang.', jawaban: '多い', pilihan: ['多い', '多くて', '多かった', '多く'] },

  // ── 文型 4 · Kata Benda を Kata Kerja / Kata Sifat ───────────────────
  { id: 'b16-4-1', grup: 'bunpou', no: 4, soal: '7時に うち___ 出ます。', arti: 'Pada pukul tujuh keluar dari rumah.', jawaban: 'を', pilihan: ['を', 'に', 'が', 'は'] },
  { id: 'b16-4-2', grup: 'bunpou', no: 4, soal: 'この パソコンは___、便利です。', arti: 'Komputer ini ringan dan praktis.', jawaban: '軽くて', pilihan: ['軽くて', '軽い', '軽く', '軽かった'] },
  { id: 'b16-4-3', grup: 'bunpou', no: 4, soal: 'この パソコンは 軽くて、___です。', arti: 'Komputer ini ringan dan praktis.', jawaban: '便利', pilihan: ['便利', '便利な', '便利で', '便利に'] },
  { id: 'b16-4-4', grup: 'bunpou', no: 4, soal: 'あの 人は 背が___、髪が 黒い人です。', arti: 'Orang itu badannya tinggi, dan rambutnya hitam.', jawaban: '高くて', pilihan: ['高くて', '高い', '高く', '高かった'] },
  { id: 'b16-4-5', grup: 'bunpou', no: 4, soal: 'あの 人は 背が 高くて、髪が___人です。', arti: 'Orang itu badannya tinggi, dan rambutnya hitam.', jawaban: '黒い', pilihan: ['黒い', '黒くて', '黒', '黒かった'] },

  // ── Catatan 1 · どれ／どの Kata Benda ──────────────────────────────
  { id: 'b16-c1-1', grup: 'catatan', no: 1, soal: 'ミラーさんの 傘は___ですか。', arti: 'Yang mana payung Sdr. Miller?', jawaban: 'どれ', pilihan: ['どれ', 'どの', 'どこ', 'だれ'] },
  { id: 'b16-c1-2', grup: 'catatan', no: 1, soal: 'サントスさんは___人ですか。', arti: 'Sdr. Santos orangnya yang mana?', jawaban: 'どの', pilihan: ['どの', 'どれ', 'どこ', 'いつ'] },
  { id: 'b16-c1-3', grup: 'catatan', no: 1, soal: 'ミラーさんの 傘は どれですか。……あの___傘です。', arti: 'Yang mana payung Sdr. Miller? ……Payung yang biru itu.', jawaban: '青い', pilihan: ['青い', '青', '青くて', '青かった'] },
  { id: 'b16-c1-4', grup: 'catatan', no: 1, soal: 'サントスさんは どの人ですか。……あの___が 高くて、髪が 黒い人です。', arti: 'Sdr. Santos orangnya yang mana? ……Orang yang badannya tinggi, dan rambutnya hitam.', jawaban: '背', pilihan: ['背', '目', '頭', '手'] },
  { id: 'b16-c1-5', grup: 'catatan', no: 1, soal: '___ かばんが あなたの ですか。', arti: 'Tas yang mana punya Anda?', jawaban: 'どの', pilihan: ['どの', 'どれ', 'どこ', 'だれ'] },

  // ── Catatan 2 · どうやって ─────────────────────────────────────────
  { id: 'b16-c2-1', grup: 'catatan', no: 2, soal: '大学まで___ 行きますか。', arti: 'Bagaimana caranya pergi ke universitas?', jawaban: 'どうやって', pilihan: ['どうやって', 'どうして', 'どのくらい', 'いつ'] },
  { id: 'b16-c2-2', grup: 'catatan', no: 2, soal: '京都駅から 16番の バスに___、大学前で 降ります。', arti: 'Dari stasiun Kyoto, naik bus nomor 16, dan turun di Daigakumae.', jawaban: '乗って', pilihan: ['乗って', '乗る', '乗った', '乗り'] },
  { id: 'b16-c2-3', grup: 'catatan', no: 2, soal: '京都駅から 16番の バスに 乗って、大学前で___。', arti: 'Dari stasiun Kyoto, naik bus nomor 16, dan turun di Daigakumae.', jawaban: '降ります', pilihan: ['降ります', '降りて', '降る', '降りました'] },
  { id: 'b16-c2-4', grup: 'catatan', no: 2, soal: 'うちから 駅まで どうやって___か。', arti: 'Dari rumah sampai stasiun, bagaimana caranya pergi?', jawaban: '行きます', pilihan: ['行きます', '行って', '行く', '行った'] },
  { id: 'b16-c2-5', grup: 'catatan', no: 2, soal: '大学___ どうやって 行きますか。', arti: 'Bagaimana caranya pergi sampai universitas?', jawaban: 'まで', pilihan: ['まで', 'までに', 'から', 'を'] },

  // ── Catatan 3 · [Perhatian] menyambung 形容詞 ──────────────────────
  { id: 'b16-c3-1', grup: 'catatan', no: 3, soal: 'この 部屋は 狭い___、きれいです。', arti: 'Kamar ini sempit, tetapi bersih.', jawaban: 'ですが', pilihan: ['ですが', 'くて', 'で', 'ても'] },
  { id: 'b16-c3-2', grup: 'catatan', no: 3, soal: 'この 部屋は 狭いですが、___です。', arti: 'Kamar ini sempit, tetapi bersih.', jawaban: 'きれい', pilihan: ['きれい', 'きれいな', 'きれいで', 'きれくて'] },
  { id: 'b16-c3-3', grup: 'catatan', no: 3, soal: '日本の 食べ物は おいしいですが、___です。', arti: 'Masakan Jepang enak, tetapi mahal.', jawaban: '高い', pilihan: ['高い', '高くて', '高く', '高いの'] },
  { id: 'b16-c3-4', grup: 'catatan', no: 3, soal: 'この 部屋は 静か___、あまり 広くないです。', arti: 'Kamar ini tenang, tetapi tidak begitu luas.', jawaban: 'ですが', pilihan: ['ですが', 'くて', 'な', 'で'] },
  { id: 'b16-c3-5', grup: 'catatan', no: 3, soal: 'この かばんは 高いですが、___です。', arti: 'Tas ini mahal, tetapi bagus.', jawaban: 'いい', pilihan: ['いい', 'いくて', 'よくて', 'いいの'] },
]
