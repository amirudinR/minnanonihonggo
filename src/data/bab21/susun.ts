import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 21 — fokus 文型:
//  (1) Bentuk Biasa と 思います (dugaan/pendapat)
//  (2) Bentuk Biasa と 言います (kutipan ucapan)
//  + catatan: ～でしょう？, Kata Benda(tempat)で ～が あります,  Kata Benda(adegan)で,
//    Kata Benda でも, Kata Kerja(ない)ないと……
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 21 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Bentuk Biasa と 思います', arti: 'Saya kira besok hujan turun.', kata: ['あした', '雨が', '降ると', '思います'], jawaban: 'あした 雨が 降ると 思います', penjelasan: 'Isi dugaan (bentuk biasa) + と 思います.' },
  { id: 's2', fokus: 'Bentuk Biasa と 思います', arti: 'Saya kira dua-duanya penting.', kata: ['どちらも', '大切だと', '思います'], jawaban: 'どちらも 大切だと 思います', penjelasan: 'Kata Sifat な bentuk biasa: 大切だ + と 思います.' },
  { id: 's3', fokus: 'Bentuk Biasa と 思います', arti: 'Saya kira harga barangnya mahal.', kata: ['物価が', '高いと', '思います'], jawaban: '物価が 高いと 思います', penjelasan: 'Kata Sifat い bentuk biasa + と 思います.' },
  { id: 's4', fokus: 'Bentuk Biasa と 思います', arti: 'Saya kira Teresa sudah tidur.', kata: ['テレサちゃんは', 'もう', '寝たと', '思います'], jawaban: 'テレサちゃんは もう 寝たと 思います', penjelasan: 'Kata Kerja Bentuk た + と 思います (dugaan lampau).' },
  { id: 's5', fokus: 'Bentuk Biasa と 思います', arti: 'Sekarang luang? ……Ya, saya kira luang.', kata: ['今', '暇？', 'うん', '暇だと', '思います'], jawaban: '今 暇？ うん 暇だと 思います', penjelasan: 'Kata Sifat な bentuk biasa (～だ) + と 思います.' },
  { id: 's6', fokus: 'Bentuk Biasa と 思います', arti: 'Saya kira Sabtu tidak bekerja.', kata: ['土曜日は', '働かないと', '思います'], jawaban: '土曜日は 働かないと 思います', penjelasan: 'Kata Kerja Bentuk ない + と 思います.' },
  { id: 's7', fokus: 'Bentuk Biasa と 思います', arti: 'Saya rasa begitu juga.', kata: ['わたしも', 'そう 思います'], jawaban: 'わたしも そう 思います', penjelasan: 'Menyatakan setuju: そう 思います.' },
  { id: 's8', fokus: 'Bentuk Biasa と 思います', arti: 'Mengenai Jepang, menurut Anda bagaimana? ……Saya kira lalu lintasnya praktis.', kata: ['日本に ついて どう 思いますか', '交通が', '便利だと 思います'], jawaban: '日本に ついて どう 思いますか 交通が 便利だと 思います', penjelasan: '～について どう 思いますか menanyakan pendapat.' },
  { id: 's9', fokus: 'Bentuk Biasa と 言います', arti: 'Perdana menteri mengatakan bahwa bulan depan pergi ke Amerika.', kata: ['首相は', '来月', 'アメリカへ', '行くと', '言いました'], jawaban: '首相は 来月 アメリカへ 行くと 言いました', penjelasan: 'Isi ucapan (bentuk biasa) + と 言いました.' },
  { id: 's10', fokus: 'Bentuk Biasa と 言います', arti: 'Sdr. Miller mengatakan bahwa minggu depan dinas ke Tokyo.', kata: ['ミラーさんは', '来週', '東京へ', '出張すると', '言いました'], jawaban: 'ミラーさんは 来週 東京へ 出張すると 言いました', penjelasan: '出張する + と 言いました.' },
  { id: 's11', fokus: 'Bentuk Biasa と 言います', arti: 'Saya berkata kepada ayah bahwa ingin belajar di luar negeri.', kata: ['父に', '留学したいと', '言いました'], jawaban: '父に 留学したいと 言いました', penjelasan: 'Lawan bicara dibubuhkan に; isi ucapan + と.' },
  { id: 's12', fokus: 'Bentuk Biasa と 言います', arti: 'Saya berkata bahwa (di sana) banyak fotokopian yang sia-sia.', kata: ['むだな コピーが', '多いと', '言いました'], jawaban: 'むだな コピーが 多いと 言いました', penjelasan: 'Kata Sifat い bentuk biasa + と 言いました.' },
  { id: 's13', fokus: 'Bentuk Biasa と 言います', arti: 'Sebelum tidur mengucapkan "Selamat tidur".', kata: ['寝る まえに', '「お休みなさい」と', '言いました'], jawaban: '寝る まえに 「お休みなさい」と 言いました', penjelasan: 'Kutipan langsung dalam 「 」 + と 言いました.' },
  { id: 's14', fokus: 'Bentuk Biasa と 言います', arti: 'Perdana menteri mengatakan bahwa ekonomi sulit.', kata: ['首相は', '経済は', 'むずかしいと', '言いました'], jawaban: '首相は 経済は むずかしいと 言いました', penjelasan: 'Kata Sifat い bentuk biasa + と 言いました.' },
  { id: 's15', fokus: '～でしょう？', arti: 'Pada bulan Juli ada perayaan di Kyoto, bukan?', kata: ['7月に', '京都で', 'お祭りが', 'あるでしょう？'], jawaban: '7月に 京都で お祭りが あるでしょう？', penjelasan: 'Bentuk biasa + でしょう？ meminta persetujuan.' },
  { id: 's16', fokus: '～でしょう？', arti: 'Besok pergi ke pesta, bukan?', kata: ['あした', 'パーティーに', '行くでしょう？'], jawaban: 'あした パーティーに 行くでしょう？', penjelasan: 'Kata Kerja Bentuk Kamus + でしょう？.' },
  { id: 's17', fokus: '～でしょう？', arti: 'Osaka makanan-makanannya enak, bukan?', kata: ['大阪は', '食べ物が', 'おいしいでしょう？'], jawaban: '大阪は 食べ物が おいしいでしょう？', penjelasan: 'Kata Sifat い bentuk biasa + でしょう？.' },
  { id: 's18', fokus: 'Kata Benda(tempat)で ～が あります', arti: 'Di Tokyo diadakan pertandingan sepak bola antara Jepang dan Brasil.', kata: ['東京で', '日本と ブラジルの', 'サッカーの 試合が', 'あります'], jawaban: '東京で 日本と ブラジルの サッカーの 試合が あります', penjelasan: 'あります = diadakan (untuk acara/pertandingan).' },
  { id: 's19', fokus: 'Kata Benda(adegan)で', arti: 'Di dalam rapat, apakah mengutarakan suatu pendapat?', kata: ['会議で', '何か', '意見を', '言いましたか'], jawaban: '会議で 何か 意見を 言いましたか', penjelasan: 'で menunjukkan adegan/tempat berlangsungnya tindakan.' },
  { id: 's20', fokus: 'Kata Benda でも', arti: 'Bagaimana kalau minum bir?', kata: ['ちょっと', 'ビールでも', '飲みませんか'], jawaban: 'ちょっと ビールでも 飲みませんか', penjelasan: 'でも menyebut satu contoh saat menawarkan/mengusulkan.' },
]
