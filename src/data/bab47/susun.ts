import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 47 — fokus 文型:
//  (1) ～そうです (Bentuk Biasa) — menyampaikan informasi dari pihak lain
//  (2) ～ようです — kesimpulan dari keadaan setempat
//  (3) 声／音／におい／味が します
//  + catatan: ～に よると , 〜そうです vs 〜ようです
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 47 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～に よると ～そうです', arti: 'Menurut prakiraan cuaca, besok akan menjadi dingin.', kata: ['天気予報に よると、', 'あしたは', '寒くなる そうです'], jawaban: '天気予報に よると、 あしたは 寒くなる そうです', penjelasan: '～に よると menandai sumber informasi + ～そうです.' },
  { id: 's2', fokus: '～に よると ～そうです', arti: 'Menurut surat kabar kemarin, katanya pada bulan Januari ada lomba pidato.', kata: ['新聞に よると、', '1月に', '日本語の スピーチ大会が', 'ある そうです'], jawaban: '新聞に よると、 1月に 日本語の スピーチ大会が ある そうです', penjelasan: 'Informasi dari surat kabar diletakkan di depan dengan ～に よると.' },
  { id: 's3', fokus: '～そうです（情報）', arti: 'Katanya ketika masih kecil, sdr. Klara tinggal di Prancis.', kata: ['クララさんは', '子どもの とき、', 'フランスに', '住んでいた そうです'], jawaban: 'クララさんは 子どもの とき、 フランスに 住んでいた そうです', penjelasan: 'Bentuk Biasa た + そうです untuk peristiwa lampau.' },
  { id: 's4', fokus: '～そうです（情報）', arti: 'Katanya elektronik baru dari Power Elektro sangat mudah digunakan dan bagus.', kata: ['パワー電気の', '新しい 電子辞書は', 'いい そうですよ'], jawaban: 'パワー電気の 新しい 電子辞書は いい そうですよ', penjelasan: 'Kata Sifat い + そうです (menyampaikan kabar).' },
  { id: 's5', fokus: '～そうです（情報）', arti: 'Katanya hujan turun.', kata: ['雨が', '降る そうです'], jawaban: '雨が 降る そうです', penjelasan: 'Berbeda dengan ～そうです Pel.43: di sini artinya "katanya".' },
  { id: 's6', fokus: '～そうです（情報）', arti: 'Katanya makanan ini enak.', kata: ['この 料理は', 'おいしい そうです'], jawaban: 'この 料理は おいしい そうです', penjelasan: 'Kata Sifat い + そうです (dari kabar orang lain).' },
  { id: 's7', fokus: '～ようです', arti: 'Ada suara ramai, ya. ……Ya, rupanya sedang berpesta.', kata: ['にぎやかな 声が しますね。', 'ええ。パーティーでも', 'している ようです'], jawaban: 'にぎやかな 声が しますね。 ええ。パーティーでも している ようです', penjelasan: '～ようです = kesimpulan dari keadaan yang dirasakan.' },
  { id: 's8', fokus: '～ようです', arti: 'Orang berkumpul banyak, ya. ……Rupanya kecelakaan.', kata: ['人が 大勢 集まっていますね。', '事故の ようですね'], jawaban: '人が 大勢 集まっていますね。 事故の ようですね', penjelasan: 'Kata Benda + の + ようです.' },
  { id: 's9', fokus: '～ようです', arti: 'Rupanya sdr. Miller sibuk.', kata: ['ミラーさんは', '忙しい ようです'], jawaban: 'ミラーさんは 忙しい ようです', penjelasan: 'Kata Sifat い + ようです (kesimpulan pembicara).' },
  { id: 's10', fokus: '～ようです', arti: 'Karena ada kucing di halaman, saya lihat sebentar.', kata: ['庭に', '猫が いる ようですから、', 'ちょっと 見て 来ます'], jawaban: '庭に 猫が いる ようですから、 ちょっと 見て 来ます', penjelasan: '～ようですから menyatakan alasan.' },
  { id: 's11', fokus: '～ようです', arti: 'Karena sepertinya di luar dingin, sebaiknya pakai mantel.', kata: ['外は', '寒い ようですから、', 'コートを 着て 行った ほうがいいです'], jawaban: '外は 寒い ようですから、 コートを 着て 行った ほうがいいです', penjelasan: 'Kesimpulan dari keadaan + saran ～ほうがいいです.' },
  { id: 's12', fokus: '～ようです', arti: 'Rupanya ini barang tertinggal, mari kita bawa ke pos polisi.', kata: ['この 荷物は', '忘れ物の ようですから、', '交番へ 持って 行きましょう'], jawaban: 'この 荷物は 忘れ物の ようですから、 交番へ 持って 行きましょう', penjelasan: 'Kata Benda + の + ようです.' },
  { id: 's13', fokus: '声／音／におい／味が します', arti: 'Terdengar suara yang ramai, ya.', kata: ['にぎやかな', '声が しますね'], jawaban: 'にぎやかな 声が しますね', penjelasan: '声が します = terdengar suara (pancaindra).' },
  { id: 's14', fokus: '音が します', arti: 'Terdengar suara aneh. Rupanya mesinnya rusak.', kata: ['変な', '音が します。', 'エンジンが 故障している ようです'], jawaban: '変な 音が します。 エンジンが 故障している ようです', penjelasan: '音が します + ようです menyimpulkan penyebabnya.' },
  { id: 's15', fokus: 'においが します', arti: 'Berbau harum. Rupanya sedang membuat kue.', kata: ['いい', 'においが します。', 'ケーキを 焼いている ようです'], jawaban: 'いい においが します。 ケーキを 焼いている ようです', penjelasan: 'においが します = tercium bau.' },
  { id: 's16', fokus: '味が します', arti: 'Rasanya aneh. Rupanya tertukar kecap dan saus.', kata: ['変な', '味が します。', 'しょうゆと ソースを 間違えた ようです'], jawaban: '変な 味が します。 しょうゆと ソースを 間違えた ようです', penjelasan: '味が します = terasa rasanya.' },
  { id: 's17', fokus: '～そうです（情報）', arti: 'Katanya sdr. Miller besok pergi ke Kyoto.', kata: ['ミラーさんは', 'あした', '京都へ', '行く そうです'], jawaban: 'ミラーさんは あした 京都へ 行く そうです', penjelasan: 'Sumber informasinya bukan sdr. Miller sendiri.' },
  { id: 's18', fokus: '～そうです（情報）', arti: 'Katanya Bapak Watt guru yang keras, ya.', kata: ['ワット先生の 授業は', 'きびしい そうです'], jawaban: 'ワット先生の 授業は きびしい そうです', penjelasan: 'Kata Sifat い + そうです (menyampaikan kabar).' },
  { id: 's19', fokus: '～ようです', arti: 'Karena sepertinya sdr. Miller suka karaoke, mari kita undang.', kata: ['ミラーさんは', 'カラオケが', '好きな ようですから、', 'ぜひ 誘いましょう'], jawaban: 'ミラーさんは カラオケが 好きな ようですから、 ぜひ 誘いましょう', penjelasan: 'Kata Sifat な + ようです (好きな).' },
  { id: 's20', fokus: '～に よると ～そうです', arti: 'Menurut pengumuman polisi, katanya kecelakaan lalu lintas paling banyak pada bulan Desember.', kata: ['警察の 発表に よると、', '交通事故が いちばん 多いのは', '12月だ そうです'], jawaban: '警察の 発表に よると、 交通事故が いちばん 多いのは 12月だ そうです', penjelasan: 'Kata Benda + だ + そうです setelah bentuk biasa だ.' },
]
