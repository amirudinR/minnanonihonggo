import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 4 — fokus 文型:
//  (1) 今 ～時～分です  (2) ～から ～まで ～ます  (3) Kata Benda(waktu) に Kata Kerja
//  (4) Kata Kerja ました／ませんでした
//  + catatan: ～と～ , ～ね , 何時／何曜日／何番
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 4 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: '今 ～時～分です', arti: 'Sekarang pukul empat lewat lima menit.', kata: ['今', '4時5分です'], jawaban: '今 4時5分です', penjelasan: '時＝jam, 分＝menit dibubuhkan di belakang angka.' },
  { id: 's2', fokus: '今 ～時～分です', arti: 'Sekarang pukul berapa?', kata: ['今', '何時ですか'], jawaban: '今 何時ですか', penjelasan: '何時ですか = "pukul berapa?".' },
  { id: 's3', fokus: '今 ～時～分です', arti: 'Sekarang pukul dua lewat sepuluh menit.', kata: ['今', '2時10分です'], jawaban: '今 2時10分です', penjelasan: 'Menyebut waktu: 今 + angka + 時 + angka + 分です.' },
  { id: 's4', fokus: '今 ～時～分です', arti: 'Sekarang pukul setengah sembilan.', kata: ['今', '9時半です'], jawaban: '今 9時半です', penjelasan: '半 = setengah (30 menit).' },
  { id: 's5', fokus: '～から ～まで', arti: 'Bank dari pukul berapa sampai pukul berapa?', kata: ['銀行は', '何時から', '何時までですか'], jawaban: '銀行は 何時から 何時までですか', penjelasan: 'から = titik awal, まで = titik akhir.' },
  { id: 's6', fokus: '～から ～まで', arti: 'Dari pukul sembilan sampai pukul tiga.', kata: ['9時から', '3時までです'], jawaban: '9時から 3時までです', penjelasan: 'Menyatakan rentang waktu dengan から～まで.' },
  { id: 's7', fokus: '～から ～まで', arti: 'Saya bekerja dari pukul sembilan sampai pukul lima.', kata: ['わたしは', '9時から', '5時まで', '働きます'], jawaban: 'わたしは 9時から 5時まで 働きます', penjelasan: 'Kata Benda waktu から Kata Benda waktu まで Kata Kerja.' },
  { id: 's8', fokus: '～から ～まで', arti: 'Jam istirahat siang dari pukul dua belas sampai pukul satu.', kata: ['昼休みは', '12時から', '1時までです'], jawaban: '昼休みは 12時から 1時までです', penjelasan: 'Rentang waktu ditandai から dan まで.' },
  { id: 's9', fokus: '～から ～まで', arti: 'Setiap hari belajar sampai pukul sepuluh.', kata: ['毎日', '10時まで', '勉強します'], jawaban: '毎日 10時まで 勉強します', penjelasan: 'まで dapat dipakai sendiri tanpa から.' },
  { id: 's10', fokus: 'Kata Benda(waktu) に Kata Kerja', arti: 'Saya bangun pukul enam setiap pagi.', kata: ['わたしは', '毎朝', '6時に', '起きます'], jawaban: 'わたしは 毎朝 6時に 起きます', penjelasan: 'Partikel に menunjukkan waktu melakukan sesuatu.' },
  { id: 's11', fokus: 'Kata Benda(waktu) に Kata Kerja', arti: 'Tidur pukul sebelas.', kata: ['11時に', '寝ます'], jawaban: '11時に 寝ます', penjelasan: 'Kata Benda waktu + に + Kata Kerja.' },
  { id: 's12', fokus: 'Kata Benda(waktu) に Kata Kerja', arti: 'Tidur pukul berapa setiap malam?', kata: ['毎晩', '何時に', '寝ますか'], jawaban: '毎晩 何時に 寝ますか', penjelasan: '何時に = "pukul berapa?".' },
  { id: 's13', fokus: 'Kata Kerja ました／ませんでした', arti: 'Belajar kemarin? ……Tidak, tidak belajar.', kata: ['きのう', '勉強しましたか', 'いいえ', '勉強しませんでした'], jawaban: 'きのう 勉強しましたか いいえ 勉強しませんでした', penjelasan: 'Lampau negatif: ませんでした.' },
  { id: 's14', fokus: 'Kata Kerja ました／ませんでした', arti: 'Saya belajar kemarin.', kata: ['わたしは', 'きのう', '勉強しました'], jawaban: 'わたしは きのう 勉強しました', penjelasan: 'Bentuk lampau dari ます adalah ました.' },
  { id: 's15', fokus: 'Kata Kerja ました／ませんでした', arti: 'Hari Sabtu bekerja? ……Tidak, tidak bekerja.', kata: ['土曜日', '働きますか', 'いいえ', '働きません'], jawaban: '土曜日 働きますか いいえ 働きません', penjelasan: 'Negatif non lampau: ません.' },
  { id: 's16', fokus: '～と～', arti: 'Liburnya hari Sabtu dan hari Minggu.', kata: ['休みは', '土曜日と', '日曜日です'], jawaban: '休みは 土曜日と 日曜日です', penjelasan: 'と menyambung dua Kata Benda setaraf.' },
  { id: 's17', fokus: '～ね', arti: 'Setiap hari belajar sampai pukul sepuluh. ……O, berat ya.', kata: ['毎日', '10時まで', '勉強します', '大変ですね'], jawaban: '毎日 10時まで 勉強します 大変ですね', penjelasan: 'ね di akhir kalimat mengharapkan persetujuan.' },
  { id: 's18', fokus: '今 ～時～分です', arti: 'New York sekarang pukul berapa?', kata: ['ニューヨークは', '今', '何時ですか'], jawaban: 'ニューヨークは 今 何時ですか', penjelasan: 'Tempat は + 今 何時ですか untuk menanyakan waktu di tempat lain.' },
  { id: 's19', fokus: '今 ～時～分です', arti: 'Pukul dua belas malam lewat sepuluh menit.', kata: ['午前', '0時10分です'], jawaban: '午前 0時10分です', penjelasan: '午前 = a.m., 午後 = p.m.' },
  { id: 's20', fokus: '何時／何曜日／何番', arti: 'Nomor telepon IMC berapa?', kata: ['IMCの', '電話番号は', '何番ですか'], jawaban: 'IMCの 電話番号は 何番ですか', penjelasan: '何番ですか = "nomor berapa?".' },
]
