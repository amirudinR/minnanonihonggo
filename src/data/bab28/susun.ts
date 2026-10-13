import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 28 — fokus 文型:
//  (1) Kata Kerja₁ (Bentuk ます) ながら Kata Kerja₂
//  (2) Kata Kerja Bentuk ています (kebiasaan/berulang)
//  (3) Bentuk Biasa し、Bentuk Biasa し、～
//  + catatan: それで , ～とき + Kata Bantu
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 28 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja₁ (Bentuk ます) ながら', arti: 'Makan sambil mendengar musik.', kata: ['音楽を', '聞きながら', '食事します'], jawaban: '音楽を 聞きながら 食事します', penjelasan: '～ながら menyatakan dua aksi oleh pelaku yang sama secara bersamaan.' },
  { id: 's2', fokus: 'Kata Kerja₁ (Bentuk ます) ながら', arti: 'Taro, (Anda) tidak boleh belajar sambil menonton televisi, ya.', kata: ['太郎', 'テレビを', '見ながら', '勉強しては', 'いけませんよ'], jawaban: '太郎 テレビを 見ながら 勉強しては いけませんよ', penjelasan: '～ながら bisa bergabung dengan larangan ～ては いけません.' },
  { id: 's3', fokus: 'Kata Kerja₁ (Bentuk ます) ながら', arti: 'Ketika mengantuk, saya menyetir sambil makan permen karet.', kata: ['眠い', 'とき', 'ガムを', 'かみながら', '運転します'], jawaban: '眠い とき ガムを かみながら 運転します', penjelasan: '～とき menyatakan waktu; aksi utama di akhir kalimat.' },
  { id: 's4', fokus: 'Kata Kerja₁ (Bentuk ます) ながら', arti: 'Ia kuliah di universitas sambil bekerja.', kata: ['彼は', '働きながら', '大学で', '勉強して います'], jawaban: '彼は 働きながら 大学で 勉強して います', penjelasan: '働きながら = sambil bekerja; aksi utama 勉強しています.' },
  { id: 's5', fokus: 'Kata Kerja₁ (Bentuk ます) ながら', arti: 'Mari berbicara sambil minum teh.', kata: ['お茶を', '飲みながら', '話しましょう'], jawaban: 'お茶を 飲みながら 話しましょう', penjelasan: 'Aksi₁ (飲みます) → 飲みながら, aksi utama 話します.' },
  { id: 's6', fokus: 'Kata Kerja₁ (Bentuk ます) ながら', arti: 'Tolong mencatat sambil mendengarkan pembicaraan.', kata: ['話を', '聞きながら', 'メモして ください'], jawaban: '話を 聞きながら メモして ください', penjelasan: '～ながら dapat diikuti permintaan ～て ください.' },
  { id: 's7', fokus: 'Kata Kerja Bentuk ています', arti: 'Setiap pagi, saya jogging.', kata: ['毎朝', 'ジョギングを', 'して います'], jawaban: '毎朝 ジョギングを して います', penjelasan: '～ています juga menyatakan kebiasaan yang berulang.' },
  { id: 's8', fokus: 'Kata Kerja Bentuk ています', arti: 'Ketika hari libur, biasanya (Anda) melakukan apa? ……Ya... Biasanya (saya) melukis.', kata: ['休みの', '日は', 'いつも', '何を', 'して いますか', 'だいたい', '絵を', 'かいて います'], jawaban: '休みの 日は いつも 何を して いますか だいたい 絵を かいて います', penjelasan: 'いつも + ～ています = menyatakan kebiasaan.' },
  { id: 's9', fokus: 'Kata Kerja Bentuk ています', arti: 'Setiap malam saya tidur pukul delapan.', kata: ['毎晩', '8時に', '寝て います'], jawaban: '毎晩 8時に 寝て います', penjelasan: '～ています untuk kebiasaan sehari-hari.' },
  { id: 's10', fokus: 'Kata Kerja Bentuk ています', arti: 'Setiap pagi, (saya) membaca buku sambil mendengarkan musik di dalam kereta.', kata: ['毎朝', '電車の', '中で', '音楽を', '聞きながら', '本を', '読んで います'], jawaban: '毎朝 電車の 中で 音楽を 聞きながら 本を 読んで います', penjelasan: 'Gabungan ～ながら + kebiasaan ～ています.' },
  { id: 's11', fokus: 'Bentuk Biasa し、Bentuk Biasa し、～', arti: 'Bapak Watt antusias, rajin, dan berpengalaman juga.', kata: ['ワット先生は', '熱心だし', 'まじめだし', '経験も', 'あります'], jawaban: 'ワット先生は 熱心だし まじめだし 経験も あります', penjelasan: '～し、～し menyebut lebih dari satu sifat setaraf.' },
  { id: 's12', fokus: 'Bentuk Biasa し、Bentuk Biasa し、～', arti: 'Di sini harganya murah, ikan juga segar, maka sering datang untuk makan.', kata: ['ここは', '値段も', '安いし', '魚も', '新しいし', 'よく', '食べに', '来ます'], jawaban: 'ここは 値段も 安いし 魚も 新しいし よく 食べに 来ます', penjelasan: '～し、～し lalu kesimpulan di akhir.' },
  { id: 's13', fokus: 'Bentuk Biasa し、Bentuk Biasa し、～', arti: 'Universitas Sakura adalah kampus ayah saya, banyak guru baik, dan letaknya juga dekat.', kata: ['さくら大学は', '父が', '出た', '大学だし', 'いい', '先生も', '多いし', '家から', '近いです'], jawaban: 'さくら大学は 父が 出た 大学だし いい 先生も 多いし 家から 近いです', penjelasan: 'Bentuk biasa + し berulang menyebut alasan/kelebihan.' },
  { id: 's14', fokus: 'Bentuk Biasa し、Bentuk Biasa し、～', arti: 'Sdr. Suzuki bisa bermain piano, bisa bernyanyi, juga bisa berdansa.', kata: ['鈴木さんは', 'ピアノも', '弾けるし', '歌も', '歌えるし', 'ダンスも', 'できます'], jawaban: '鈴木さんは ピアノも 弾けるし 歌も 歌えるし ダンスも できます', penjelasan: 'も + ～し menambahkan kelebihan setara.' },
  { id: 's15', fokus: 'Bentuk Biasa し、Bentuk Biasa し、～', arti: 'Karena bahasa juga tidak dimengerti, kebiasaan juga berbeda, jadi bepergian ke luar negeri memang merepotkan.', kata: ['ことばも', 'わからないし', '習慣も', '違うし', '外国旅行は', '大変ですよ'], jawaban: 'ことばも わからないし 習慣も 違うし 外国旅行は 大変ですよ', penjelasan: '～し、～し dipakai untuk menyatakan alasan.' },
  { id: 's16', fokus: 'Bentuk Biasa し、Bentuk Biasa し、～', arti: 'Karena tidak ada kerja lembur, lagi pula bonusnya juga besar.', kata: ['残業も', 'ないし', 'それに', 'ボーナスも', '多いですから'], jawaban: '残業も ないし それに ボーナスも 多いですから', penjelasan: 'それに menambahkan alasan; bisa ditutup から.' },
  { id: 's17', fokus: 'Bentuk Biasa し、Bentuk Biasa し、～', arti: 'Di toko ini harganya murah, barangnya juga banyak.', kata: ['この', '店は', '安いし', '品物も', '多いし'], jawaban: 'この 店は 安いし 品物も 多いし', penjelasan: 'Alasan bisa berdiri sendiri tanpa kesimpulan.' },
  { id: 's18', fokus: 'それで', arti: '(Saya) ingin menjadi pengarang novel pada masa depan. Oleh karena itu, sekarang menulis novel sambil bekerja paruh waktu.', kata: ['将来', '小説家に', 'なりたいです', 'それで', '今は', 'アルバイトを', 'しながら', '小説を', '書いて います'], jawaban: '将来 小説家に なりたいです それで 今は アルバイトを しながら 小説を 書いて います', penjelasan: 'それで menarik kesimpulan dari hal yang dijelaskan sebelumnya.' },
  { id: 's19', fokus: 'それで', arti: 'Di sini kopinya enak, dan juga bisa makan... ……Oleh karena itu, populer, ya.', kata: ['ここは', 'コーヒーも', 'おいしいし', '食事も', 'できるし', 'それで', '人気が', 'あるんですね'], jawaban: 'ここは コーヒーも おいしいし 食事も できるし それで 人気が あるんですね', penjelasan: '～し、～し + それで + kesimpulan 人気が あるんですね.' },
  { id: 's20', fokus: '～とき + Kata Bantu', arti: 'Ketika masih kecil, setiap malam saya tidur pukul delapan.', kata: ['子どもの', 'とき', '毎晩', '8時に', '寝て いました'], jawaban: '子どもの とき 毎晩 8時に 寝て いました', penjelasan: 'とき dapat diikuti partikel; kebiasaan lampau = ～ていました.' },
]
