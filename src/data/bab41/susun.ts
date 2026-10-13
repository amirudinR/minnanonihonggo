import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 41 — fokus 文型:
//  (1) Kata Benda₁(orang) に Kata Benda₂ を いただきます
//  (2) Kata Kerja Bentuk て いただきます
//  (3) Kata Kerja Bentuk て くださいます
//  (4) Kata Benda₁ に Kata Benda₂ を やります / Kata Kerja Bentuk て やります
//  + catatan: Kata Kerja Bentuk て くださいませんか , Kata Benda に Kata Kerja
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 41 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Benda₁ に ～を いただきます', arti: 'Saya menerima oleh-oleh dari direktur.', kata: ['わたしは', '社長に', 'お土産を', 'いただきました'], jawaban: 'わたしは 社長に お土産を いただきました', penjelasan: 'いただきます = menerima dari orang yang lebih tinggi.' },
  { id: 's2', fokus: 'Kata Benda₁ に ～を いただきます', arti: 'Saya menerima oleh-oleh dari Sdr. Yamada.', kata: ['わたしは', '山田さんに', 'お土産を', 'いただきました'], jawaban: 'わたしは 山田さんに お土産を いただきました', penjelasan: 'Penerima jadi topik, pemberi ditandai partikel に.' },
  { id: 's3', fokus: 'Kata Benda₁ に ～を いただきます', arti: 'Anak perempuan saya menerima oleh-oleh dari kepala bagian.', kata: ['娘は', '部長に', 'お土産を', 'いただきました'], jawaban: '娘は 部長に お土産を いただきました', penjelasan: 'Penerima boleh anggota keluarga pembicara.' },
  { id: 's4', fokus: 'Kata Kerja Bentuk て いただきます', arti: 'Saya dibantu oleh kepala bagian untuk dikoreksikan kesalahan surat.', kata: ['わたしは', '課長に', '手紙の まちがいを', '直して いただきました'], jawaban: 'わたしは 課長に 手紙の まちがいを 直して いただきました', penjelasan: '～て いただきます = menerima perbuatan dari atasan.' },
  { id: 's5', fokus: 'Kata Kerja Bentuk て いただきます', arti: 'Saya diantar ke Kyoto oleh guru.', kata: ['わたしは', '先生に', '京都へ', '連れて いって いただきました'], jawaban: 'わたしは 先生に 京都へ 連れて いって いただきました', penjelasan: 'Pelaku perbuatan ditandai partikel に.' },
  { id: 's6', fokus: 'Kata Kerja Bentuk て いただきます', arti: 'Saya diberi tahu cara memakai kamera video oleh kepala bagian.', kata: ['わたしは', '課長に', 'ビデオカメラを', '貸して いただきました'], jawaban: 'わたしは 課長に ビデオカメラを 貸して いただきました', penjelasan: '貸して いただきました = dipinjamkan (menerima perbuatan).' },
  { id: 's7', fokus: 'Kata Kerja Bentuk て いただきます', arti: 'Beberapa saat yang lalu, kepala bagian mengantarkan saya.', kata: ['この 間', '部長に', '連れて 行って', 'いただきました'], jawaban: 'この 間 部長に 連れて 行って いただきました', penjelasan: '連れて 行って いただきました = diantar (diperlihatkan kebaikan).' },
  { id: 's8', fokus: 'Kata Kerja Bentuk て くださいます', arti: 'Istri kepala bagian mengajarkan saya cara membuat teh.', kata: ['部長の 奥さんが', 'わたしに', 'お茶を', '教えて くださいました'], jawaban: '部長の 奥さんが わたしに お茶を 教えて くださいました', penjelasan: '～て くださいます = atasan melakukan untuk pembicara.' },
  { id: 's9', fokus: 'Kata Kerja Bentuk て くださいます', arti: 'Kepala bagian mengantar saya sampai stasiun.', kata: ['部長が', 'わたしを', '駅まで', '送って くださいました'], jawaban: '部長が わたしを 駅まで 送って くださいました', penjelasan: 'Sasaran orang memakai を, bukan に.' },
  { id: 's10', fokus: 'Kata Kerja Bentuk て くださいます', arti: 'Kepala bagian mengoreksi laporan saya.', kata: ['部長が', "わたしの", 'レポートを', '直して くださいました'], jawaban: '部長が わたしの レポートを 直して くださいました', penjelasan: 'Kepemilikan cukup ditandai の.' },
  { id: 's11', fokus: 'Kata Kerja Bentuk て くださいます', arti: 'Kepala bagian memberikan anak perempuan saya oleh-oleh.', kata: ['部長が', '娘に', 'お土産を', 'くださいました'], jawaban: '部長が 娘に お土産を くださいました', penjelasan: 'Penerima = anggota keluarga pembicara, pemberi dengan が.' },
  { id: 's12', fokus: 'Kata Kerja Bentuk て くださいます', arti: 'Direktur memberikan saya oleh-oleh.', kata: ['社長が', 'わたしに', 'お土産を', 'くださいました'], jawaban: '社長が わたしに お土産を くださいました', penjelasan: 'Orang berpangkat tinggi memberi → くださいます.' },
  { id: 's13', fokus: 'Kata Benda₁ に ～を やります', arti: 'Saya memberikan anak laki-laki saya kue.', kata: ['わたしは', '息子に', 'お菓子を', 'やりました'], jawaban: 'わたしは 息子に お菓子を やりました', penjelasan: 'やります = memberi kepada bawahan/anak.' },
  { id: 's14', fokus: 'Kata Benda₁ に ～を やります', arti: 'Saya memberi umpan pada anjing.', kata: ['わたしは', '犬に', 'えさを', 'やりました'], jawaban: 'わたしは 犬に えさを やりました', penjelasan: 'Untuk hewan juga dipakai やります.' },
  { id: 's15', fokus: 'Kata Kerja Bentuk て やります', arti: 'Saya membuat pesawat-pesawatan dari kertas untuk anak laki-laki.', kata: ['わたしは', '息子に', '紙飛行機を', '作って やりました'], jawaban: 'わたしは 息子に 紙飛行機を 作って やりました', penjelasan: '～て やります = melakukan sesuatu untuk pihak lebih rendah.' },
  { id: 's16', fokus: 'Kata Kerja Bentuk て やります', arti: 'Saya membawa anjing jalan-jalan.', kata: ['わたしは', '犬を', '散歩に', '連れて 行って やりました'], jawaban: 'わたしは 犬を 散歩に 連れて 行って やりました', penjelasan: 'Sasaran hewan memakai を.' },
  { id: 's17', fokus: 'Kata Kerja Bentuk て やります', arti: 'Saya membantu adik saya untuk membuat PR-nya.', kata: ['わたしは', '娘の 宿題を', '見て やりました'], jawaban: 'わたしは 娘の 宿題を 見て やりました', penjelasan: '見て やりました = melihatkan/membantu (untuk bawahan).' },
  { id: 's18', fokus: 'Kata Kerja Bentuk て くださいませんか', arti: 'Tolong ajarkan (saya) cara pemakaian mesin fotocopy.', kata: ['コピー機の 使い方を', '教えて くださいませんか'], jawaban: 'コピー機の 使い方を 教えて くださいませんか', penjelasan: '～て くださいませんか = permintaan yang lebih halus dari ～て ください.' },
  { id: 's19', fokus: 'Kata Kerja Bentuk て くださいませんか', arti: 'Tolong tulis (saya) dengan huruf hiragana.', kata: ['ひらがなで', 'かいて くださいませんか'], jawaban: 'ひらがなで かいて くださいませんか', penjelasan: 'Pola permintaan halus dari renshuu Bab 41.' },
  { id: 's20', fokus: 'Kata Benda に Kata Kerja', arti: 'Sebagai hadiah pernikahan, sdr. Tanaka yang berikan kepada saya.', kata: ['結婚の お祝いに', '田中さんが', 'くださいました'], jawaban: '結婚の お祝いに 田中さんが くださいました', penjelasan: 'に di sini bermakna "sebagai tanda ~" (hadiah pernikahan).' },
]
