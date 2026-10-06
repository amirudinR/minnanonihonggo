import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 32 — JP: Honsatsu 第32課「例文」(idx 70 = j_70, cetak 52).
// arti: PDF Indonesia "Pelajaran 32 · II. Terjemahan · Contoh Kalimat" (idx 67, cetak 46).
// Catatan: Contoh Kalimat no. 4 (オリンピックは 成功するでしょうか) tidak ada padanannya
// di buku Indonesia — terjemahan di bawah ditulis sebagai padanan langsung kalimat,
// bukan karangan bebas (bandingkan bab42 yang punya celah serupa).
export const reibun: ReibunItem[] = [
  {
    kalimat: '最近の 学生は よく 遊びますね。……そうですね。でも、若い ときは、いろいろな 経験をした ほうが いいと 思います。',
    arti: 'Bagaimana pikiran Anda tentang kerja paruh waktu mahasiswa? ……Saya pikir bagus. Ketika muda, lebih baik mengalami berbagai hal.',
  },
  {
    kalimat: '1か月ぐらい ヨーロッパへ 遊びに 行きたいんですが、40万円で 足りますか。……十分だと 思います。でも、現金で 持って 行かない ほうが いいですよ。',
    arti: '(Saya) Ingin berjalan-jalan di Eropa kurang-lebih satu bulan, apa uangnya cukup sebanyak empat ratus ribu yen? ……Saya kira cukup. Tetapi, lebih baik jangan membawa uang tunai.',
  },
  {
    kalimat: '日本の 経済は どう なると でしょうか。……そうですね。まだ しばらく よく ならないでしょう。',
    arti: 'Pak Guru, kondisi ekonomi Jepang menjadi bagaimana? ……Ya… Untuk sementara tidak akan membaik.',
  },
  {
    kalimat: 'オリンピックは 成功するでしょうか。……大丈夫でしょう。ずいぶん まえから 準備して いますから。',
    arti: 'Apakah Olimpiade akan berhasil? ……Tidak apa-apa, bukan? Karena sudah lama kami bersiap.',
  },
  {
    kalimat: '先生、ハンスは 今の 病気でしょうか。……インフルエンザですね。3日ほど 高い 熱が 続くかも しれませんが、心配しないで ください。',
    arti: 'Dokter, apakah sdr. Hans kena influenza? ……Ya, kena influenza. Dua, tiga hari ini demam tinggi akan berlangsung, tetapi tidak perlu khawatir.',
  },
  {
    kalimat: 'エンジンの 音が おかしいと 思いませんか。……ええ。故障かも しれません。すぐ 空港に 戻りましょう。',
    arti: 'Bunyi mesinnya aneh, ya. ……Ya. Mungkin rusak. Periksa sebentar.',
  },
]