import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 6 — fokus 文型:
//  (1) Kata Benda を Kata Kerja(transitif)  (2) Kata Benda(tempat) で Kata Kerja
//  (3) いっしょに ～ませんか  (4) Kata Kerja ましょう
//  + catatan: Kata Benda を します , 何を しますか , なん／なに
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 6 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Benda を Kata Kerja', arti: 'Saya minum jus.', kata: ['わたしは', 'ジュースを', '飲みます'], jawaban: 'わたしは ジュースを 飲みます', penjelasan: 'を menandai objek Kata Kerja transitif.' },
  { id: 's2', fokus: 'Kata Benda を Kata Kerja', arti: 'Setiap pagi makan apa?', kata: ['毎朝', '何を', '食べますか'], jawaban: '毎朝 何を 食べますか', penjelasan: '何を 食べますか = "makan apa?".' },
  { id: 's3', fokus: 'Kata Benda を Kata Kerja', arti: 'Makan roti dan telur.', kata: ['パンと', '卵を', '食べます'], jawaban: 'パンと 卵を 食べます', penjelasan: 'と menyambung dua objek, diakhiri を.' },
  { id: 's4', fokus: 'Kata Benda を Kata Kerja', arti: 'Tidak makan apa-apa.', kata: ['何も', '食べませんでした'], jawaban: '何も 食べませんでした', penjelasan: '何も + negatif = "tidak ... apa-apa".' },
  { id: 's5', fokus: 'Kata Benda を Kata Kerja', arti: 'Minum minuman keras? ……Tidak, tidak minum.', kata: ['お酒を', '飲みますか', 'いいえ、飲みません'], jawaban: 'お酒を 飲みますか いいえ、飲みません', penjelasan: 'Kalimat tanya cukup ditambah か.' },
  { id: 's6', fokus: 'Kata Benda を します', arti: 'Bermain sepak bola.', kata: ['サッカーを', 'します'], jawaban: 'サッカーを します', penjelasan: 'Kata Benda を します = melakukan hal tersebut.' },
  { id: 's7', fokus: 'Kata Benda を します', arti: 'Mengerjakan PR.', kata: ['宿題を', 'します'], jawaban: '宿題を します', penjelasan: 'します luas dipakai sebagai objek.' },
  { id: 's8', fokus: '何を しますか', arti: 'Hari Sabtu melakukan apa?', kata: ['土曜日', '何を', 'しましたか'], jawaban: '土曜日 何を しましたか', penjelasan: '何を しましたか = "melakukan apa?".' },
  { id: 's9', fokus: '何を しますか', arti: 'Belajar bahasa Jepang. Kemudian menonton film.', kata: ['日本語を', '勉強しました', 'それから', '映画を', '見ました'], jawaban: '日本語を 勉強しました それから 映画を 見ました', penjelasan: 'それから menyambung dua kegiatan.' },
  { id: 's10', fokus: 'Kata Benda(tempat) で', arti: 'Saya membeli surat kabar di stasiun.', kata: ['わたしは', '駅で', '新聞を', '買います'], jawaban: 'わたしは 駅で 新聞を 買います', penjelasan: 'で menandai tempat dilakukan aksi.' },
  { id: 's11', fokus: 'Kata Benda(tempat) で', arti: 'Di mana membeli tas itu?', kata: ['どこで', 'その かばんを', '買いましたか'], jawaban: 'どこで その かばんを 買いましたか', penjelasan: 'どこで = "di mana?".' },
  { id: 's12', fokus: 'Kata Benda(tempat) で', arti: 'Membelinya di Meksiko.', kata: ['メキシコで', '買いました'], jawaban: 'メキシコで 買いました', penjelasan: 'Tempat + で + Kata Kerja.' },
  { id: 's13', fokus: 'Kata Benda(tempat) で', arti: 'Makan siang di kantin perusahaan.', kata: ['会社の 食堂で', '昼ごはんを', '食べます'], jawaban: '会社の 食堂で 昼ごはんを 食べます', penjelasan: 'で menunjukkan tempat aksi berlangsung.' },
  { id: 's14', fokus: 'いっしょに ～ませんか', arti: 'Bagaimana kalau kita minum bir bersama-sama?', kata: ['いっしょに', 'ビールを', '飲みませんか'], jawaban: 'いっしょに ビールを 飲みませんか', penjelasan: 'ませんか dipakai untuk mengajak.' },
  { id: 's15', fokus: 'いっしょに ～ませんか', arti: 'Bagaimana kalau kita pergi ke Kobe bersama-sama?', kata: ['いっしょに', '神戸へ', '行きませんか'], jawaban: 'いっしょに 神戸へ 行きませんか', penjelasan: 'Ajakan halus dengan ませんか.' },
  { id: 's16', fokus: 'いっしょに ～ませんか', arti: 'Bagaimana kita makan siang bersama-sama?', kata: ['いっしょに', '昼ごはんを', '食べませんか'], jawaban: 'いっしょに 昼ごはんを 食べませんか', penjelasan: 'Ajakan dilakukan dengan Kata Kerja ませんか.' },
  { id: 's17', fokus: 'Kata Kerja ましょう', arti: 'Ya, ayo kita minum.', kata: ['ええ', '飲みましょう'], jawaban: 'ええ 飲みましょう', penjelasan: 'ましょう menanggapi ajakan secara aktif.' },
  { id: 's18', fokus: 'Kata Kerja ましょう', arti: 'Mari istirahat sebentar.', kata: ['ちょっと', '休みましょう'], jawaban: 'ちょっと 休みましょう', penjelasan: 'ましょう mengusulkan secara aktif.' },
  { id: 's19', fokus: 'Kata Kerja ましょう', arti: 'Ya, ayo kita makan.', kata: ['ええ', '食べましょう'], jawaban: 'ええ 食べましょう', penjelasan: 'Tanggapan ajakan: ええ、～ましょう.' },
  { id: 's20', fokus: 'Kata Benda を Kata Kerja', arti: 'Mengambil foto di taman.', kata: ['庭で', '写真を', '撮ります'], jawaban: '庭で 写真を 撮ります', penjelasan: 'Tempat で + objek を + Kata Kerja.' },
]
