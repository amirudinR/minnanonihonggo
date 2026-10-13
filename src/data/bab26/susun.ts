import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 26 — fokus 文型:
//  (1) ～んです
//  (2) Kata Kerja Bentuk て いただけませんか
//  (3) Kata Tanya + Kata Kerja Bentuk たら いかがですか
//  (4) Kata Benda (objek) は {好きです／嫌いです・あります、dll.}
//  + catatan: ～弁 , ～会社／～様 , どこでも／こんな ～
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 26 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～んです', arti: 'Apakah (Anda) pernah tinggal di Osaka?', kata: ['大阪に', '住んで', 'いたんですか'], jawaban: '大阪に 住んで いたんですか', penjelasan: 'Bentuk ～ていた + んですか menanyakan keadaan masa lalu.' },
  { id: 's2', fokus: '～んです', arti: '……Ya, saya tinggal di Osaka sampai umur lima belas tahun.', kata: ['ええ', '15歳まで', '大阪に', '住んで いました'], jawaban: 'ええ 15歳まで 大阪に 住んで いました', penjelasan: 'Jawaban memakai ～ていました untuk keadaan lampau.' },
  { id: 's3', fokus: '～んです', arti: 'Sepatu yang desainnya lucu, ya. Beli di mana?', kata: ['おもしろい', 'デザインの', '靴ですね', 'どこで', '買ったんですか'], jawaban: 'おもしろい デザインの 靴ですね どこで 買ったんですか', penjelasan: 'Bentuk biasa lampau 買った + んですか = menanyakan tempat membeli.' },
  { id: 's4', fokus: '～んです', arti: 'Kenapa terlambat?', kata: ['どうして', '遅れたんですか'], jawaban: 'どうして 遅れたんですか', penjelasan: 'どうして + ～んですか meminta keterangan alasan.' },
  { id: 's5', fokus: '～んです', arti: '……Karena bus tidak datang.', kata: ['バスが', '来なかったんです'], jawaban: 'バスが 来なかったんです', penjelasan: 'Bentuk biasa negatif lampau 来なかった + んです menjawab alasan.' },
  { id: 's6', fokus: '～んです', arti: '……Tidak, jarang pergi. Saya tidak suka Karaoke.', kata: ['いいえ', 'あまり', '行きません', 'カラオケは', '好きじゃないんです'], jawaban: 'いいえ あまり 行きません カラオケは 好きじゃないんです', penjelasan: 'Kata sifat na 好きじゃない + んです menjelaskan alasan.' },
  { id: 's7', fokus: '～んです', arti: 'Apakah (Anda) sedang turun hujan?', kata: ['雨が', '降っているんですか'], jawaban: '雨が 降っているんですか', penjelasan: '降っている + んですか = meminta keterangan keadaan yang dilihat.' },
  { id: 's8', fokus: '～んです', arti: 'Sdr. Watanabe kadang-kadang menggunakan dialek Osaka, ya?', kata: ['渡辺さんは', '時々', '大阪弁を', '使いますね'], jawaban: '渡辺さんは 時々 大阪弁を 使いますね', penjelasan: 'ね meminta persetujuan; ～弁 menyatakan dialek daerah.' },
  { id: 's9', fokus: 'Kata Kerja Bentuk て いただけませんか', arti: 'Bisa memperlihatkan (memeriksa) sebentar?', kata: ['ちょっと', '見て', 'いただけませんか'], jawaban: 'ちょっと 見て いただけませんか', penjelasan: '～て いただけませんか = permintaan yang lebih sopan daripada ～て ください.' },
  { id: 's10', fokus: 'Kata Kerja Bentuk て いただけませんか', arti: 'Bisa memperkenalkan guru yang baik?', kata: ['いい', '先生を', '紹介して', 'いただけませんか'], jawaban: 'いい 先生を 紹介して いただけませんか', penjelasan: 'Kata Kerja bentuk て + いただけませんか meminta bantuan dengan sopan.' },
  { id: 's11', fokus: 'Kata Kerja Bentuk て いただけませんか', arti: 'Saya ingin belajar merangkai bunga, bisakah memperkenalkan guru?', kata: ['生け花を', '習いたいんですが', '先生を', '紹介して', 'いただけませんか'], jawaban: '生け花を 習いたいんですが 先生を 紹介して いただけませんか', penjelasan: '～たいんですが + ～て いただけませんか menyampaikan keinginan lalu meminta.' },
  { id: 's12', fokus: 'Kata Kerja Bentuk て いただけませんか', arti: 'Saya ingin menerima materi, bisakah mengirimkannya?', kata: ['資料が', 'ほしいんですが', '送って', 'いただけませんか'], jawaban: '資料が ほしいんですが 送って いただけませんか', penjelasan: '～んですが mengantar permintaan yang sopan.' },
  { id: 's13', fokus: 'Kata Tanya + Kata Kerja Bentuk たら いかがですか', arti: 'Sebaiknya saya membeli kamera di mana?', kata: ['どこで', 'カメラを', '買ったら', 'いいですか'], jawaban: 'どこで カメラを 買ったら いいですか', penjelasan: 'Kata tanya + ～たら いいですか = menanyakan cara/saran.' },
  { id: 's14', fokus: 'Kata Tanya + Kata Kerja Bentuk たら いかがですか', arti: 'Saya ingin mengunjungi Gedung Parlemen Nasional, bagaimana caranya?', kata: ['国会議事堂を', '見学したいんですが', 'どう', 'したら', 'いいですか'], jawaban: '国会議事堂を 見学したいんですが どう したら いいですか', penjelasan: 'どう したら いいですか = "bagaimana sebaiknya?"' },
  { id: 's15', fokus: 'Kata Tanya + Kata Kerja Bentuk たら いかがですか', arti: '……Pergi langsung saja. Kapan saja bisa melihatnya.', kata: ['直接', '行ったら', 'いいですよ', 'いつでも', '見ることが できます'], jawaban: '直接 行ったら いいですよ いつでも 見ることが できます', penjelasan: '～たら いいですよ memberi saran/petunjuk.' },
  { id: 's16', fokus: 'Kata Tanya + Kata Kerja Bentuk たら いかがですか', arti: 'Saya ingin pergi ke Kantor Balai Kota, bisakah menggambar peta?', kata: ['市役所へ', '行きたいんですが', '地図を', 'かいて', 'いただけませんか'], jawaban: '市役所へ 行きたいんですが 地図を かいて いただけませんか', penjelasan: 'Gabungan ～たいんですが dengan permintaan ～て いただけませんか.' },
  { id: 's17', fokus: 'Kata Benda (objek) は ～', arti: 'Sering pergi ke Karaoke?', kata: ['よく', 'カラオケに', '行きますか'], jawaban: 'よく カラオケに 行きますか', penjelasan: 'よく = "sering"; pertanyaan tentang kebiasaan.' },
  { id: 's18', fokus: 'Kata Benda (objek) は ～', arti: 'Saya tidak bisa menggunakan komputer.', kata: ['わたしは', 'コンピューターが', '使えないんですが'], jawaban: 'わたしは コンピューターが 使えないんですが', penjelasan: 'Objek potensial ditandai が; ～んですが membuka permintaan.' },
  { id: 's19', fokus: '～会社／～様（敬称）', arti: 'Kalau menghubungi perusahaan gas, petugas akan segera datang.', kata: ['ガス会社に', '連絡したら', 'すぐ', '来て くれますよ'], jawaban: 'ガス会社に 連絡したら すぐ 来て くれますよ', penjelasan: '～会社 menyebut jenis perusahaan; ～たら いい menyatakan syarat-hasil.' },
  { id: 's20', fokus: 'どこでも／だれでも／こんな ～', arti: 'Undang siapa saja.', kata: ['だれでも', '招待して', 'ください'], jawaban: 'だれでも 招待して ください', penjelasan: 'だれでも = "siapa saja"; dibentuk dari kata tanya + でも.' },
]
