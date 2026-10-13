import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 46 — fokus 文型:
//  (1) Kata Kerja Bentuk Kamus／て いる／た ＋ ところです
//  (2) Kata Kerja Bentuk た ＋ ばかりです
//  (3) Kata Kerja Bentuk Kamus／ない／Kata Sifat／Kata Benda の ＋ はずです
//  + catatan: これから／今から , たった今 , 〜ばかりなのに
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 46 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja Bentuk Kamus ところです', arti: 'Sudah makan siang? ……Belum, baru mau makan sekarang.', kata: ['いいえ', 'これから', '食べる ところです'], jawaban: 'いいえ これから 食べる ところです', penjelasan: 'Kata Kerja Bentuk Kamus + ところです = baru akan melakukan.' },
  { id: 's2', fokus: 'Kata Kerja Bentuk Kamus ところです', arti: 'Rapat sudah dimulai? ……Belum, baru mau dimulai sekarang.', kata: ['いいえ', '今から', '始まる ところです'], jawaban: 'いいえ 今から 始まる ところです', penjelasan: 'Bersama 今から menyatakan aksi baru akan dimulai.' },
  { id: 's3', fokus: 'Kata Kerja Bentuk Kamus ところです', arti: 'Maaf. Sekarang mau keluar.', kata: ['すみません', '今から', '出かける ところなんです'], jawaban: 'すみません 今から 出かける ところなんです', penjelasan: '〜ところなんです menambahkan penjelasan (んです).' },
  { id: 's4', fokus: 'Kata Kerja Bentuk て いる ところです', arti: 'Belum, sekarang sedang diperiksa.', kata: ['いいえ', '今', '調べて いる ところです'], jawaban: 'いいえ 今 調べて いる ところです', penjelasan: 'Bentuk て いる + ところです = sedang melakukan.' },
  { id: 's5', fokus: 'Kata Kerja Bentuk て いる ところです', arti: 'Sekarang sedang merapikan kamar.', kata: ['今', '部屋を', 'かたづけて いる ところです'], jawaban: '今 部屋を かたづけて いる ところです', penjelasan: 'Aksi yang sedang berlangsung ditandai 今.' },
  { id: 's6', fokus: 'Kata Kerja Bentuk た ところです', arti: 'Ah, baru saja pulang.', kata: ['たった今', '帰った ところです'], jawaban: 'たった今 帰った ところです', penjelasan: 'Bentuk た + ところです = baru saja selesai.' },
  { id: 's7', fokus: 'Kata Kerja Bentuk た ところです', arti: 'Baru saja bus berangkat.', kata: ['たった今', 'バスが', '出た ところです'], jawaban: 'たった今 バスが 出た ところです', penjelasan: 'Aksi yang baru terjadi memakai たった今.' },
  { id: 's8', fokus: 'Kata Kerja Bentuk た ばかりです', arti: 'Tadi baru makan siang.', kata: ['さっき', '昼ごはんを', '食べた ばかりです'], jawaban: 'さっき 昼ごはんを 食べた ばかりです', penjelasan: 'Bentuk た + ばかりです = perasaan baru saja.' },
  { id: 's9', fokus: 'Kata Kerja Bentuk た ばかりです', arti: 'Sdr. Kimura baru masuk ke perusahaan ini bulan lalu.', kata: ['木村さんは', '先月', 'この 会社に', '入った ばかりです'], jawaban: '木村さんは 先月 この 会社に 入った ばかりです', penjelasan: 'ばかりです tidak tergantung lama waktu sebenarnya.' },
  { id: 's10', fokus: 'Kata Kerja Bentuk た ばかりです', arti: 'Karena bulan lalu saya baru masuk ke perusahaan, saya masih kurang tahu.', kata: ['先月', '会社に', '入った ばかりですから', 'まだ よく わかりません'], jawaban: '先月 会社に 入った ばかりですから まだ よく わかりません', penjelasan: '〜ばかりですから menyatakan alasan.' },
  { id: 's11', fokus: 'Kata Kerja Bentuk た ばかりなのに', arti: 'Kamera video ini tidak berfungsi padahal belinya baru minggu lalu.', kata: ['この ビデオカメラ、', '先週', '買った ばかりなのに、', 'もう 動かないんです'], jawaban: 'この ビデオカメラ、 先週 買った ばかりなのに、 もう 動かないんです', penjelasan: '〜ばかりなのに menyatakan pertentangan.' },
  { id: 's12', fokus: 'Kata Kerja Bentuk Kamus はずです', arti: 'Karena saya baru memberikan suntikan tadi, seharusnya sudah turun dalam 3 jam.', kata: ['今 注射を しましたから、', '3時間後には', '下がる はずです'], jawaban: '今 注射を しましたから、 3時間後には 下がる はずです', penjelasan: 'はずです = kesimpulan pasti berdasar bukti.' },
  { id: 's13', fokus: 'Kata Kerja Bentuk ない はずです', arti: 'Sdr. Gupta seharusnya tidak minum sake.', kata: ['グプタさんは', 'お酒を', 'のまない はずです'], jawaban: 'グプタさんは お酒を のまない はずです', penjelasan: 'Kata Kerja Bentuk ない juga bisa + はずです.' },
  { id: 's14', fokus: 'Kata Sifat な はずです', arti: 'Kepala bagian seharusnya pandai bahasa Jerman.', kata: ['課長は', 'ドイツ語が', 'じょうずな はずです'], jawaban: '課長は ドイツ語が じょうずな はずです', penjelasan: 'Kata Sifat な + はずです (じょうずな).' },
  { id: 's15', fokus: 'Kata Benda の はずです', arti: 'Supermarket itu seharusnya tutup hari ini.', kata: ['あの スーパーは', 'あしたは', 'やすみの はずです'], jawaban: 'あの スーパーは あしたは やすみの はずです', penjelasan: 'Kata Benda + の + はずです.' },
  { id: 's16', fokus: 'Kata Kerja Bentuk Kamus はずです', arti: 'Barang (paket) seharusnya sampai besok.', kata: ['荷物は', 'あした', 'とどく はずです'], jawaban: '荷物は あした とどく はずです', penjelasan: 'はずです menyatakan perkiraan yang meyakinkan.' },
  { id: 's17', fokus: 'Kata Kerja Bentuk Kamus はずです', arti: 'Sdr. Miller harusnya datang. Sebab kemarin dia menelepon.', kata: ['来る はずですよ', 'きのう', '電話が ありましたから'], jawaban: '来る はずですよ きのう 電話が ありましたから', penjelasan: 'はずですよ menegaskan dugaan kepada lawan bicara.' },
  { id: 's18', fokus: 'Kata Kerja Bentuk Kamus ところです', arti: 'Ujian baru akan dimulai tepat sekarang.', kata: ['ちょうど', '今から', '試験が', 'はじまる ところです'], jawaban: 'ちょうど 今から 試験が はじまる ところです', penjelasan: 'ちょうど今から menegaskan saat dimulainya aksi.' },
  { id: 's19', fokus: 'Kata Sifat い はずです', arti: 'Seharusnya makanan itu enak. Sebab tertulis di buku panduan.', kata: ['おいしい はずです', '案内書に', '書いて ありますから'], jawaban: 'おいしい はずです 案内書に 書いて ありますから', penjelasan: 'Kata Sifat い + はずです (おいしい).' },
  { id: 's20', fokus: 'Kata Kerja Bentuk Kamus はずです', arti: 'Katanya penjelasan orang itu benar.', kata: ['小川さんの', '話は', 'ほんとうの はずです'], jawaban: '小川さんの 話は ほんとうの はずです', penjelasan: 'Kata Benda + の + はずです menyatakan keyakinan.' },
]
