import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 11 — fokus 文型:
//  (1) Kata Benda Kata Bantu Bilangan Kata Kerja（いくつ／何人／何枚）
//  (2) どのくらい Kata Kerjaますか
//  (3) Kata Benda(jangka waktu) に ～回 Kata Kerjaます
//  (4) Kata Bantu Bilangan / Kata Benda(waktu) だけ
// ATURAN: `kata` = unit kata (boleh ada spasi internal); `jawaban` = unit itu dalam urutan benar.
// Soal diturunkan dari reibun/bunpou/renshuu Bab 11 (pola & kalimat buku), bukan karangan.
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～を ～つ 買いました', arti: '(Saya) membeli 4 buah jeruk.', kata: ['みかんを', '４つ', '買いました'], jawaban: 'みかんを ４つ 買いました', penjelasan: 'Kata bantu bilangan ～つ diletakkan sebelum kata kerja.' },
  { id: 's2', fokus: '～を いくつ 買いましたか', arti: '(Anda) membeli berapa buah apel?', kata: ['りんごを', 'いくつ', '買いましたか'], jawaban: 'りんごを いくつ 買いましたか', penjelasan: 'いくつ = "berapa buah" untuk barang.' },
  { id: 's3', fokus: '～を ～つ 買いました', arti: '(Saya) membeli empat.', kata: ['四つ', '買いました'], jawaban: '四つ 買いました', penjelasan: 'Jawaban いくつ memakai ～つ.' },
  { id: 's4', fokus: '～の ～を ～枚 ください', arti: 'Tolong prangko yang 80 Yen 5 lembar dan kartu pos 2 lembar.', kata: ['80円の 切手を', '５枚と', 'はがきを', '２枚', 'ください'], jawaban: '80円の 切手を ５枚と はがきを ２枚 ください', penjelasan: '～枚 untuk benda tipis seperti prangko dan kartu pos.' },
  { id: 's5', fokus: '～に ～が います', arti: 'Apakah di Universitas Fuji ada guru orang asing?', kata: ['富士大学に', '外国人の 先生が', 'いますか'], jawaban: '富士大学に 外国人の 先生が いますか', penjelasan: 'Keberadaan orang memakai います.' },
  { id: 's6', fokus: '～に ～人 います', arti: 'Ya, ada 3 orang. Semuanya orang Amerika.', kata: ['はい', '３人', 'います', 'みんな', 'アメリカ人です'], jawaban: 'はい ３人 います みんな アメリカ人です', penjelasan: '～人 untuk menghitung orang.' },
  { id: 's7', fokus: '～は 何人ですか', arti: 'Saudara berapa orang?', kata: ['兄弟は', '何人ですか'], jawaban: '兄弟は 何人ですか', penjelasan: '何人 = "berapa orang".' },
  { id: 's8', fokus: '～が ～人 います', arti: '4 orang. Kakak perempuan 2 orang dan kakak laki-laki 1 orang.', kata: ['４人です', '姉が ２人と', '兄が １人', 'います'], jawaban: '４人です 姉が ２人と 兄が １人 います', penjelasan: 'と menyambung dua penyebutan jumlah orang.' },
  { id: 's9', fokus: '～に 何回 ～しますか', arti: 'Dalam 1 minggu berapa kali bermain tenis?', kata: ['１週間に', '何回', 'テニスを', 'しますか'], jawaban: '１週間に 何回 テニスを しますか', penjelasan: 'Jangka waktu に + ～回 menyatakan frekuensi.' },
  { id: 's10', fokus: '～に ～回 ～します', arti: 'Kira-kira 2 kali.', kata: ['２回ぐらい', 'します'], jawaban: '２回ぐらい します', penjelasan: 'ぐらい = "kira-kira".' },
  { id: 's11', fokus: '～に ～回 ～します', arti: 'Dalam 1 bulan menonton film 2 kali.', kata: ['１か月に', '２回', '映画を', '見ます'], jawaban: '１か月に ２回 映画を 見ます', penjelasan: 'Jangka waktu に ～回 ～ます.' },
  { id: 's12', fokus: '～に ～回 ～します', arti: 'Dalam 1 tahun bepergian 1 kali.', kata: ['１年に', '１回', '旅行します'], jawaban: '１年に １回 旅行します', penjelasan: '１年に １回 = satu kali dalam setahun.' },
  { id: 's13', fokus: 'どのくらい ～ましたか', arti: 'Sdr. Tanaka sudah berapa lama belajar bahasa Spanyol?', kata: ['田中さんは', 'どのくらい', 'スペイン語を', '勉強しましたか'], jawaban: '田中さんは どのくらい スペイン語を 勉強しましたか', penjelasan: 'どのくらい menanyakan jangka waktu.' },
  { id: 's14', fokus: '～か月 ～ました', arti: 'Belajar 3 bulan.', kata: ['３か月', '勉強しました'], jawaban: '３か月 勉強しました', penjelasan: '～か月 = "～ bulan".' },
  { id: 's15', fokus: 'どのくらい かかりますか', arti: 'Dari Osaka sampai Tokyo dengan Shinkansen memerlukan waktu berapa lama?', kata: ['大阪から 東京まで', '新幹線で', 'どのくらい', 'かかりますか'], jawaban: '大阪から 東京まで 新幹線で どのくらい かかりますか', penjelasan: 'どのくらい かかりますか = berapa lama memerlukan waktu.' },
  { id: 's16', fokus: '～時間半 かかります', arti: 'Memerlukan waktu 2 jam setengah.', kata: ['２時間半', 'かかります'], jawaban: '２時間半 かかります', penjelasan: '～時間半 = "～ jam setengah".' },
  { id: 's17', fokus: '～だけです', arti: 'Liburnya hanya hari Minggu.', kata: ['休みは', '日曜日だけです'], jawaban: '休みは 日曜日だけです', penjelasan: 'だけ = "hanya", diletakkan di belakang kata.' },
  { id: 's18', fokus: '～つだけ 買いました', arti: 'Saya membeli apel hanya satu.', kata: ['りんごを', '１つだけ', '買いました'], jawaban: 'りんごを １つだけ 買いました', penjelasan: 'だけ mengikuti kata bantu bilangan ～つ.' },
  { id: 's19', fokus: '～だけですか', arti: 'Hah, hanya 3 bulan? (Anda) pandai, ya.', kata: ['えっ', '３か月だけですか', '上手ですね'], jawaban: 'えっ ３か月だけですか 上手ですね', penjelasan: 'だけですか = "hanya …?" menyatakan keheranan.' },
  { id: 's20', fokus: '～に ～人 いますか', arti: 'Apakah di kelas ada mahasiswa asing berapa orang?', kata: ['クラスに', '留学生が', '何人', 'いますか'], jawaban: 'クラスに 留学生が 何人 いますか', penjelasan: '何人 いますか = ada berapa orang.' },
]
