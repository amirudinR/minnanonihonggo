import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 17 — fokus 文型:
//  (1) Kata Kerja(ない)で ください  (2) Kata Kerja(ない)なければ なりません
//  (3) Kata Kerja(ない)なくても いいです
//  + catatan: pentopikkan objek , Kata Benda(waktu) までに Kata Kerja
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou/kosakata Bab 17 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja(ない)で ください', arti: 'Jangan parkir mobil di situ.', kata: ['そこに', '車を', '止めないで ください'], jawaban: 'そこに 車を 止めないで ください', penjelasan: 'Bentuk ない + で ください = jangan melakukan.' },
  { id: 's2', fokus: 'Kata Kerja(ない)で ください', arti: 'Jangan merokok!', kata: ['たばこを', '吸わないで ください'], jawaban: 'たばこを 吸わないで ください', penjelasan: '吸います (Grup I) → 吸わないで ください.' },
  { id: 's3', fokus: 'Kata Kerja(ない)で ください', arti: 'Karena berbahaya, jangan dorong!', kata: ['危ないですから', '押さないで ください'], jawaban: '危ないですから 押さないで ください', penjelasan: 'Alasan ～ですから + larangan ～ないで ください.' },
  { id: 's4', fokus: 'Kata Kerja(ない)で ください', arti: 'Jangan khawatir, tenang saja.', kata: ['大丈夫ですから', '心配しないで ください'], jawaban: '大丈夫ですから 心配しないで ください', penjelasan: '心配します → 心配しないで ください.' },
  { id: 's5', fokus: 'Kata Kerja(ない)なければ なりません', arti: 'Harus memperlihatkan paspor.', kata: ['パスポートを', '見せなければ なりません'], jawaban: 'パスポートを 見せなければ なりません', penjelasan: '～なければ なりません = harus melakukan.' },
  { id: 's6', fokus: 'Kata Kerja(ない)なければ なりません', arti: 'Harus minum obat.', kata: ['薬を', '飲まなければ なりません'], jawaban: '薬を 飲まなければ なりません', penjelasan: '飲みます → 飲まなければ なりません.' },
  { id: 's7', fokus: 'Kata Kerja(ない)なければ なりません', arti: 'Karena itu, harus cepat pulang.', kata: ['ですから', '早く', '帰らなければ なりません'], jawaban: 'ですから 早く 帰らなければ なりません', penjelasan: 'ですから = oleh karena itu.' },
  { id: 's8', fokus: 'Kata Kerja(ない)なければ なりません', arti: 'Harus mengembalikan buku sampai dengan hari Sabtu.', kata: ['土曜日までに', '本を', '返さなければ なりません'], jawaban: '土曜日までに 本を 返さなければ なりません', penjelasan: 'Batas waktu memakai ～までに.' },
  { id: 's9', fokus: 'Kata Kerja(ない)なければ なりません', arti: 'Harus menghafal 6 Kanji setiap hari.', kata: ['毎日', '漢字を 6つ', '覚えなければ なりません'], jawaban: '毎日 漢字を 6つ 覚えなければ なりません', penjelasan: '覚えます (Grup II) → 覚えなければ なりません.' },
  { id: 's10', fokus: 'Kata Kerja(ない)なくても いいです', arti: 'Laporan tidak perlu dikumpulkan.', kata: ['レポートは', '出さなくても いいです'], jawaban: 'レポートは 出さなくても いいです', penjelasan: '～なくても いいです = tidak perlu melakukan.' },
  { id: 's11', fokus: 'Kata Kerja(ない)なくても いいです', arti: 'Tidak perlu bayar.', kata: ['払わなくても', 'いいです'], jawaban: '払わなくても いいです', penjelasan: '払います → 払わなくても いいです.' },
  { id: 's12', fokus: 'Kata Kerja(ない)なくても いいです', arti: 'Besok tidak perlu datang ke rumah sakit.', kata: ['あしたは', '病院へ', '来なくても いいです'], jawaban: 'あしたは 病院へ 来なくても いいです', penjelasan: '来ます → 来なくても いいです.' },
  { id: 's13', fokus: 'Kata Benda(waktu) までに Kata Kerja', arti: 'Laporan harus diserahkan sampai dengan kapan?', kata: ['レポートは', 'いつまでに', '出さなければ なりませんか'], jawaban: 'レポートは いつまでに 出さなければ なりませんか', penjelasan: 'いつまでに menanyakan batas waktu.' },
  { id: 's14', fokus: 'Kata Benda(waktu) までに Kata Kerja', arti: 'Tolong diserahkan sampai dengan hari Jumat.', kata: ['金曜日までに', '出して ください'], jawaban: '金曜日までに 出して ください', penjelasan: 'までに = paling lambat sampai waktu itu.' },
  { id: 's15', fokus: 'Pentopikkan objek', arti: 'Barangnya jangan diletakkan di sini.', kata: ['荷物は', 'ここに', '置かないで ください'], jawaban: '荷物は ここに 置かないで ください', penjelasan: 'Objek dijadikan topik: を → は di awal kalimat.' },
  { id: 's16', fokus: 'Pentopikkan objek', arti: 'Jawabannya tolong tulis di sini.', kata: ['答えは', 'ここに', '書いて ください'], jawaban: '答えは ここに 書いて ください', penjelasan: '答えを → 答えは sebagai topik.' },
  { id: 's17', fokus: 'Kata Kerja(ない)なくても いいです', arti: 'Baju luarnya tolong dibuka. Pakaian dalam tidak perlu dibuka.', kata: ['上着を 脱いで ください', '下着は', '脱がなくても いいです'], jawaban: '上着を 脱いで ください 下着は 脱がなくても いいです', penjelasan: 'Perintah ～て ください disusul ～なくても いいです.' },
  { id: 's18', fokus: 'Kata Kerja(ない)なければ なりません', arti: 'Apakah anak juga harus bayar? ……Tidak, tidak perlu bayar.', kata: ['子どもも', 'お金を', '払わなければ なりませんか', 'いいえ', '払わなくても いいです'], jawaban: '子どもも お金を 払わなければ なりませんか いいえ 払わなくても いいです', penjelasan: 'Tanya ～なければ なりませんか dijawab ～なくても いいです.' },
  { id: 's19', fokus: 'Kata Kerja(ない)なければ なりません', arti: 'Karena ada urusan, harus keluar.', kata: ['用事が ありますから', '出かけなければ なりません'], jawaban: '用事が ありますから 出かけなければ なりません', penjelasan: 'Alasan + keharusan ～なければ なりません.' },
  { id: 's20', fokus: 'Kata Kerja(ない)で ください', arti: 'Ini barang berharga, jangan hilangkan!', kata: ['大切な 資料ですから', 'なくさないで ください'], jawaban: '大切な 資料ですから なくさないで ください', penjelasan: 'なくします (Grup I) → なくさないで ください.' },
]
