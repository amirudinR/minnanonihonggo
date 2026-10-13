import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 29 — fokus 文型:
//  (1) Kata Kerja Bentuk ています (keadaan akibat aksi)
//  (2) Kata Kerja Bentuk てしまいました／しまいました
//  (3) Kata Benda (Tempat) に 行きます／来ます／帰ります
//  + catatan: それ／その／そう , ありました , どこで／どこかに
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 29 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja Bentuk ています', arti: 'Kaca jendela pecah.', kata: ['窓が', '割れて います'], jawaban: '窓が 割れて います', penjelasan: '～ています menyatakan keadaan sebagai akibat aksi; subjek ditandai が.' },
  { id: 's2', fokus: 'Kata Kerja Bentuk ています', arti: 'Listrik menyala.', kata: ['電気が', 'ついて います'], jawaban: '電気が ついて います', penjelasan: 'ついています = keadaan menyala (hasil aksi).' },
  { id: 's3', fokus: 'Kata Kerja Bentuk ています', arti: 'Ruang rapat terkunci, ya.', kata: ['会議室の', 'かぎが', '掛かって いますね'], jawaban: '会議室の かぎが 掛かって いますね', penjelasan: '掛かっています = terkunci (keadaan).' },
  { id: 's4', fokus: 'Kata Kerja Bentuk ています', arti: 'Itu rusak, silakan memakai yang itu.', kata: ['それは', '故障して いますから', 'あちらのを', '使って ください'], jawaban: 'それは 故障して いますから あちらのを 使って ください', penjelasan: '～ています + から menyampaikan alasan.' },
  { id: 's5', fokus: 'Kata Kerja Bentuk ています', arti: 'Kursi ini rusak.', kata: ['この', 'いすは', '壊れて います'], jawaban: 'この いすは 壊れて います', penjelasan: 'Jika dijadikan topik, subjek ditandai は.' },
  { id: 's6', fokus: 'Kata Kerja Bentuk ています', arti: 'Kereta penuh penumpang.', kata: ['電車が', 'こんで います'], jawaban: '電車が こんで います', penjelasan: 'こんでいます = keadaan penuh sesak.' },
  { id: 's7', fokus: 'Kata Kerja Bentuk ています', arti: 'Karena pintu terkunci, tidak bisa masuk ke ruang rapat.', kata: ['かぎが', '掛かって います', '会議室に', '入れません'], jawaban: 'かぎが 掛かって います 会議室に 入れません', penjelasan: 'Keadaan ～ています menjadi sebab kalimat berikutnya.' },
  { id: 's8', fokus: 'Kata Kerja Bentuk てしまいました', arti: 'Anggur yang dibawa oleh sdr. Schmidt telah diminum oleh semuanya.', kata: ['シュミットさんが', '持って 来た', 'ワインは', 'みんなで', '全部', '飲んで しまいました'], jawaban: 'シュミットさんが 持って 来た ワインは みんなで 全部 飲んで しまいました', penjelasan: '～てしまいました menyatakan aksi telah selesai (habis).' },
  { id: 's9', fokus: 'Kata Kerja Bentuk てしまいました', arti: '(Saya) Kehilangan paspor.', kata: ['パスポートを', 'なくして しまいました'], jawaban: 'パスポートを なくして しまいました', penjelasan: '～てしまいました menyatakan penyesalan.' },
  { id: 's10', fokus: 'Kata Kerja Bentuk てしまいました', arti: 'PC rusak.', kata: ['パソコンが', '故障して しまいました'], jawaban: 'パソコンが 故障して しまいました', penjelasan: '～てしまいました untuk kejadian yang tidak diinginkan.' },
  { id: 's11', fokus: 'Kata Kerja Bentuk てしまいました', arti: 'PR mengenai huruf Kanji telah saya selesaikan.', kata: ['漢字の', '宿題は', 'もう', 'やって しまいました'], jawaban: '漢字の 宿題は もう やって しまいました', penjelasan: 'もう + ～てしまいました = sudah selesai.' },
  { id: 's12', fokus: 'Kata Kerja Bentuk てしまいました', arti: 'Karena jalanan macet, (saya) menjadi terlambat.', kata: ['道が', '込んで いましたから', '遅れて しまいました'], jawaban: '道が 込んで いましたから 遅れて しまいました', penjelasan: '～てしまいました untuk hasil yang disesali.' },
  { id: 's13', fokus: 'Kata Kerja Bentuk てしまいました', arti: 'Saya salah nomor telepon.', kata: ['電話番号を', 'まちがえて しまいました'], jawaban: '電話番号を まちがえて しまいました', penjelasan: 'まちがえてしまいました = keliru (disesali).' },
  { id: 's14', fokus: 'Kata Kerja Bentuk てしまいました', arti: 'Karena telah menulis surat ini, silakan duluan.', kata: ['この', '手紙を', '書いて しまいましたから', 'お先に', 'どうぞ'], jawaban: 'この 手紙を 書いて しまいましたから お先に どうぞ', penjelasan: '～てしまいましたから menyampaikan alasan.' },
  { id: 's15', fokus: 'Kata Benda (Tempat) に 行きます／来ます／帰ります', arti: 'Entah di mana (saya) kehilangan dompet.', kata: ['どこで', '財布を', 'なくして しまいました'], jawaban: 'どこで 財布を なくして しまいました', penjelasan: 'どこで (dengan で) menyatakan tempat kejadian.' },
  { id: 's16', fokus: 'Kata Benda (Tempat) に 行きます／来ます／帰ります', arti: 'Mulai bulan depan, (saya) pindah ke kantor pusat di Osaka.', kata: ['来月から', '大阪の', '本社に', '転勤なんです'], jawaban: '来月から 大阪の 本社に 転勤なんです', penjelasan: 'に menandai titik tujuan; 転勤 = pindah tugas.' },
  { id: 's17', fokus: 'それ／その／そう', arti: 'Susah, ya. Harus pergi ke pos polisi dengan segera.', kata: ['それは', '大変ですね', 'すぐ', '交番に', '行かないと'], jawaban: 'それは 大変ですね すぐ 交番に 行かないと', penjelasan: 'それ menunjuk isi ucapan lawan bicara sebelumnya.' },
  { id: 's18', fokus: 'それ／その／そう', arti: 'Ya, benar. (Saya akan melakukannya.)', kata: ['ええ', 'そう', 'します'], jawaban: 'ええ そう します', penjelasan: 'そう します = "ya, saya akan begitu".' },
  { id: 's19', fokus: 'どこで／どこかに', arti: 'Apakah ada telepon dari suatu tempat?', kata: ['どこかに', '電話が', 'ありますか'], jawaban: 'どこかに 電話が ありますか', penjelasan: 'どこかに menyatakan tempat yang tidak pasti.' },
  { id: 's20', fokus: 'ありました', arti: '(Tasnya) Ada. (Ditemukan di dalam tas.)', kata: ['かばんに', 'ありましたよ'], jawaban: 'かばんに ありましたよ', penjelasan: 'ありました menyatakan lawan bicara menemukan bendanya.' },
]
