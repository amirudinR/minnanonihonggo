import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 5 — fokus 文型:
//  (1) Kata Benda(tempat) へ 行きます／来ます／帰ります
//  (2) Kata Benda(kendaraan) で 行きます／来ます／帰ります
//  (3) Kata Benda(orang) と Kata Kerja
//  + catatan: どこ[へ]も , いつ , ～よ , そうですね
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 5 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Benda(tempat) へ', arti: 'Saya pergi ke Kyoto.', kata: ['わたしは', '京都へ', '行きます'], jawaban: 'わたしは 京都へ 行きます', penjelasan: 'Partikel へ menunjukkan arah pindah (dibaca "e").' },
  { id: 's2', fokus: 'Kata Benda(tempat) へ', arti: 'Besok pergi ke mana?', kata: ['あした', 'どこへ', '行きますか'], jawaban: 'あした どこへ 行きますか', penjelasan: 'どこへ 行きますか = "pergi ke mana?".' },
  { id: 's3', fokus: 'Kata Benda(tempat) へ', arti: 'Pergi ke Nara.', kata: ['奈良へ', '行きます'], jawaban: '奈良へ 行きます', penjelasan: 'Tempat へ + 行きます.' },
  { id: 's4', fokus: 'Kata Benda(tempat) へ', arti: 'Saya pulang ke rumah dengan taksi.', kata: ['わたしは', 'タクシーで', 'うちへ', '帰ります'], jawaban: 'わたしは タクシーで うちへ 帰ります', penjelasan: 'で = sarana (kendaraan), へ = arah.' },
  { id: 's5', fokus: 'Kata Benda(tempat) へ', arti: 'Hari Minggu pergi ke mana?', kata: ['日曜日', 'どこへ', '行きましたか'], jawaban: '日曜日 どこへ 行きましたか', penjelasan: 'Bentuk lampau 行きましたか untuk menanyakan kegiatan lampau.' },
  { id: 's6', fokus: 'どこ[へ]も', arti: 'Tidak pergi ke mana-mana.', kata: ['どこ[へ]も', '行きませんでした'], jawaban: 'どこ[へ]も 行きませんでした', penjelasan: 'Kata tanya + も + negatif = penyangkalan total.' },
  { id: 's7', fokus: 'Kata Benda(kendaraan) で', arti: 'Dengan apa pergi ke Tokyo?', kata: ['何で', '東京へ', '行きますか'], jawaban: '何で 東京へ 行きますか', penjelasan: '何で = "dengan apa?".' },
  { id: 's8', fokus: 'Kata Benda(kendaraan) で', arti: 'Pergi dengan Shinkansen.', kata: ['新幹線で', '行きます'], jawaban: '新幹線で 行きます', penjelasan: 'Kendaraan + で + 行きます.' },
  { id: 's9', fokus: 'Kata Benda(kendaraan) で', arti: 'Pergi ke stasiun dengan berjalan kaki.', kata: ['駅へ', '歩いて', '行きます'], jawaban: '駅へ 歩いて 行きます', penjelasan: '歩いて tidak dibubuhkan partikel で.' },
  { id: 's10', fokus: 'Kata Benda(kendaraan) で', arti: 'Pergi dengan bus.', kata: ['バスで', '帰ります'], jawaban: 'バスで 帰ります', penjelasan: 'で menunjukkan sarana transportasi.' },
  { id: 's11', fokus: 'Kata Benda(orang) と', arti: 'Dengan siapa pergi ke Tokyo?', kata: ['だれと', '東京へ', '行きますか'], jawaban: 'だれと 東京へ 行きますか', penjelasan: 'だれと = "dengan siapa?".' },
  { id: 's12', fokus: 'Kata Benda(orang) と', arti: 'Pergi dengan Sdr. Yamada.', kata: ['山田さんと', '行きます'], jawaban: '山田さんと 行きます', penjelasan: 'Partikel と menunjukkan orang yang diajak.' },
  { id: 's13', fokus: 'Kata Benda(orang) と', arti: 'Saya datang ke Jepang bersama keluarga.', kata: ['わたしは', '家族と', '日本へ', '来ました'], jawaban: 'わたしは 家族と 日本へ 来ました', penjelasan: '～と ～へ 来ました = datang bersama ....' },
  { id: 's14', fokus: 'Kata Benda(orang) と', arti: 'Saya datang sendirian.', kata: ['一人で', '来ました'], jawaban: '一人で 来ました', penjelasan: 'ひとりで dipakai tanpa partikel と.' },
  { id: 's15', fokus: 'いつ', arti: 'Kapan datang ke Jepang?', kata: ['いつ', '日本へ', '来ましたか'], jawaban: 'いつ 日本へ 来ましたか', penjelasan: 'いつ = "kapan", tidak dibubuhkan に.' },
  { id: 's16', fokus: 'いつ', arti: 'Datang pada tanggal 25 Maret.', kata: ['3月25日に', '来ました'], jawaban: '3月25日に 来ました', penjelasan: 'Tanggal tertentu dibubuhkan に.' },
  { id: 's17', fokus: 'いつ', arti: 'Kapan hari ulang tahun?', kata: ['誕生日は', 'いつですか'], jawaban: '誕生日は いつですか', penjelasan: 'いつですか = "kapan?".' },
  { id: 's18', fokus: '～よ', arti: 'Yang "Biasa" berikutnya.', kata: ['次の', '「普通」ですよ'], jawaban: '次の 「普通」ですよ', penjelasan: 'よ menyampaikan info baru kepada lawan bicara.' },
  { id: 's19', fokus: 'そうですね', arti: 'Besok hari Minggu, ya. ……O, ya betul.', kata: ['あしたは', '日曜日ですね', 'あ、そうですね'], jawaban: 'あしたは 日曜日ですね あ、そうですね', penjelasan: 'そうですね = menyetujui ucapan lawan bicara.' },
  { id: 's20', fokus: 'Kata Benda(tempat) へ', arti: 'Saya pulang ke negara (asal) minggu depan.', kata: ['わたしは', '来週', '国へ', '帰ります'], jawaban: 'わたしは 来週 国へ 帰ります', penjelasan: ' waktu + へ + 帰ります.' },
]
