import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 24 — fokus 文型:
//  (1) Kata Benda₁(orang) は わたしに Kata Benda₂ を くれます
//  (2) Kata Kerja Bentuk て あげます
//  (3) Kata Kerja Bentuk て もらいました
//  (4) Kata Kerja Bentuk て くれます
//  + catatan: Kata Benda₁ は Kata Benda₂ が Kata Kerja
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 24 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Benda₁(orang) は わたしに ～を くれました', arti: 'Sdr. Sato memberikan saya kartu Natal.', kata: ['佐藤さんは', 'わたしに', 'クリスマスカードを', 'くれました'], jawaban: '佐藤さんは わたしに クリスマスカードを くれました', penjelasan: 'Orang lain memberi pembicara → くれます (bukan あげます).' },
  { id: 's2', fokus: 'Kata Benda₁(orang) は わたしに ～を くれました', arti: 'Nenek selalu memberikan saya kue.', kata: ['おばあちゃんは', 'いつも', 'お菓子を', 'くれます'], jawaban: 'おばあちゃんは いつも お菓子を くれます', penjelasan: 'Subjek adalah pihak yang memberi, penerima = pembicara.' },
  { id: 's3', fokus: 'Kata Benda₁(orang) は わたしに ～を くれました', arti: 'Ya, Sdr. Sato yang berikan. Anggur Prancis.', kata: ['ええ', '佐藤さんが', 'くれました', 'フランスの', 'ワインです'], jawaban: 'ええ 佐藤さんが くれました フランスの ワインです', penjelasan: '対象 dijadikan topik, pemberi jadi subjek dengan が.' },
  { id: 's4', fokus: 'Kata Benda₁(orang) は わたしに ～を くれました', arti: 'Ini kopi Brasil. Sdr. Santos yang berikan.', kata: ['これは', 'ブラジルの', 'コーヒーです', 'サントスさんが', 'くれました'], jawaban: 'これは ブラジルの コーヒーです サントスさんが くれました', penjelasan: 'これは ～です + pemberi が くれました.' },
  { id: 's5', fokus: 'Kata Kerja Bentuk て あげました', arti: 'Saya meminjamkan buku kepada Sdr. Kimura.', kata: ['わたしは', '木村さんに', '本を', '貸して あげました'], jawaban: 'わたしは 木村さんに 本を 貸して あげました', penjelasan: '～て あげます = melakukan kebaikan untuk orang lain.' },
  { id: 's6', fokus: 'Kata Kerja Bentuk て あげました', arti: 'Saya meminjamkan sepeda kepada Teresa.', kata: ['わたしは', 'テレサちゃんに', '自転車を', '貸して あげました'], jawaban: 'わたしは テレサちゃんに 自転車を 貸して あげました', penjelasan: 'Penerima ditandai partikel に.' },
  { id: 's7', fokus: 'Kata Kerja Bentuk て あげました', arti: 'Saya membacakan surat untuk nenek.', kata: ['わたしは', 'おばあさんに', '手紙を', '読んで あげました'], jawaban: 'わたしは おばあさんに 手紙を 読んで あげました', penjelasan: '読んで (bentuk て) + あげました.' },
  { id: 's8', fokus: 'Kata Kerja Bentuk て あげました', arti: 'Saya memasakkan masakan Spanyol untuk teman.', kata: ['わたしは', '友達に', 'スペイン料理を', '作って あげました'], jawaban: 'わたしは 友達に スペイン料理を 作って あげました', penjelasan: '作って あげました = memasak (untuk orang lain).' },
  { id: 's9', fokus: 'Kata Kerja Bentuk て あげます', arti: 'Pada hari Ibu, Si Taro bermain piano untuk ibunya.', kata: ['太郎君は', '母の 日に', 'お母さんに', 'ピアノを', '弾いて あげます'], jawaban: '太郎君は 母の 日に お母さんに ピアノを 弾いて あげます', penjelasan: '弾いて あげます = memainkan (untuk kebaikan orang lain).' },
  { id: 's10', fokus: 'Kata Kerja Bentuk て もらいました', arti: 'Saya diberikan nomor telepon rumah sakit oleh Sdr. Yamada.', kata: ['わたしは', '山田さんに', '病院の 電話番号を', '教えて もらいました'], jawaban: 'わたしは 山田さんに 病院の 電話番号を 教えて もらいました', penjelasan: '～て もらいます = penerima jadi subjek, pelaku ditandai に.' },
  { id: 's11', fokus: 'Kata Kerja Bentuk て もらいました', arti: 'Saya dibantu oleh Sdr. Wang.', kata: ['わたしは', 'ワンさんに', '手伝って もらいました'], jawaban: 'わたしは ワンさんに 手伝って もらいました', penjelasan: '手伝って もらいました = diberi bantuan.' },
  { id: 's12', fokus: 'Kata Kerja Bentuk て もらいました', arti: 'Saya diantar ke Benteng Osaka oleh Sdr. Yamada.', kata: ['わたしは', '山田さんに', '大阪城へ', '連れて いって もらいました'], jawaban: 'わたしは 山田さんに 大阪城へ 連れて いって もらいました', penjelasan: '連れて いって もらいました = diantar/dibawa (diberi kebaikan).' },
  { id: 's13', fokus: 'Kata Kerja Bentuk て もらいました', arti: 'Saya diperlihatkan foto perjalanan oleh Sdr. Yamada.', kata: ['わたしは', '山田さんに', '旅行の 写真を', '見せて もらいました'], jawaban: 'わたしは 山田さんに 旅行の 写真を 見せて もらいました', penjelasan: '見せて もらいました = diperlihatkan (oleh orang lain).' },
  { id: 's14', fokus: 'Kata Kerja Bentuk て くれました', arti: 'Ibu mengirimi saya sweater.', kata: ['母は', 'わたしに', 'セーターを', '送って くれました'], jawaban: '母は わたしに セーターを 送って くれました', penjelasan: '～て くれます = orang lain melakukan untuk pembicara.' },
  { id: 's15', fokus: 'Kata Kerja Bentuk て くれました', arti: 'Tidak. Sdr. Yamada yang mengantar saya dengan mobilnya.', kata: ['いいえ', '山田さんが', '車で', '送って くれました'], jawaban: 'いいえ 山田さんが 車で 送って くれました', penjelasan: 'Pemberi jadi subjek dengan が + ～て くれました.' },
  { id: 's16', fokus: 'Kata Kerja Bentuk て くれました', arti: 'Sdr. Yamada menggambar peta untuk saya.', kata: ['山田さんは', 'わたしに', '地図を', 'かいて くれました'], jawaban: '山田さんは わたしに 地図を かいて くれました', penjelasan: 'かいて くれました = menggambar (untuk pembicara).' },
  { id: 's17', fokus: 'Kata Kerja Bentuk て くれました', arti: 'Sdr. Yamada menjelaskan cara masuk kamar mandi untuk saya.', kata: ['山田さんは', 'わたしに', 'おふろの 入り方を', 'せつめいして くれました'], jawaban: '山田さんは わたしに おふろの 入り方を せつめいして くれました', penjelasan: 'せつめいして くれました = menjelaskan (demi pembicara).' },
  { id: 's18', fokus: 'Kata Kerja Bentuk て もらいました／くれました', arti: 'Saya diberikan payung oleh Sdr. Sato. (Sdr. Sato meminjamkan payung kepada saya.)', kata: ['わたしは', '佐藤さんに', '傘を', '貸して もらいました'], jawaban: 'わたしは 佐藤さんに 傘を 貸して もらいました', penjelasan: 'Sudut pandang penerima: ～て もらいました.' },
  { id: 's19', fokus: 'Kata Benda₁ は Kata Benda₂ が Kata Kerja', arti: 'Anggur yang enak ya. ……Ya, Sdr. Sato yang berikan.', kata: ['おいしい', 'ワインですね', 'ええ', '佐藤さんが', 'くれました'], jawaban: 'おいしい ワインですね ええ 佐藤さんが くれました', penjelasan: 'この ワイン dihilangkan karena sudah dipahami; 佐藤さん jadi subjek → が.' },
  { id: 's20', fokus: 'Kata Kerja (Bentuk ます) ましょうか', arti: 'Bagaimana kalau saya panggilkan taksi?', kata: ['タクシーを', '呼びましょうか'], jawaban: 'タクシーを 呼びましょうか', penjelasan: 'ましょうか menawarkan diri melakukan sesuatu untuk lawan bicara.' },
]
