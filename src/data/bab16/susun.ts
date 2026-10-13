import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 16 — fokus 文型:
//  (1) Kata Kerjaて、〜、Kata Kerja  (2) Kata Kerjaてから、Kata Kerja
//  (3) Kata Benda₁ は Kata Benda₂ が Kata Sifat  (4) Kata Bendaを Kata Kerja (titik awal)
//  + catatan: どれ／どの Kata Benda , どうやって , menyambung kata sifat
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou/kosakata Bab 16 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerjaて、〜、Kata Kerja', arti: 'Pagi joging, mandi, kemudian pergi ke perusahaan.', kata: ['朝', 'ジョギングをして', 'シャワーを浴びて', '会社へ 行きます'], jawaban: '朝 ジョギングをして シャワーを浴びて 会社へ 行きます', penjelasan: '～て menyambung aksi berurutan; waktu ditentukan kata kerja terakhir.' },
  { id: 's2', fokus: 'Kata Kerjaて、〜、Kata Kerja', arti: 'Pergi ke perpustakaan, meminjam buku, kemudian bertemu teman.', kata: ['図書館へ 行って', '本を 借りて', 'それから', '友達に 会いました'], jawaban: '図書館へ 行って 本を 借りて それから 友達に 会いました', penjelasan: 'それから menyambung aksi berikutnya.' },
  { id: 's3', fokus: 'Kata Kerjaて、〜、Kata Kerja', arti: 'Dari stasiun Kyoto naik bus nomor 16, lalu turun di halte universitas.', kata: ['京都駅から', '16番の バスに 乗って', '大学前で 降ります'], jawaban: '京都駅から 16番の バスに 乗って 大学前で 降ります', penjelasan: 'のります・おります memakai partikel に.' },
  { id: 's4', fokus: 'Kata Kerjaて、〜、Kata Kerja', arti: 'Hari Minggu pergi ke Nagoya, bertemu teman.', kata: ['日曜日', '名古屋へ 行って', '友達に 会います'], jawaban: '日曜日 名古屋へ 行って 友達に 会います', penjelasan: 'Aksi berurutan dengan bentuk て.' },
  { id: 's5', fokus: 'Kata Kerjaてから、Kata Kerja', arti: 'Setelah pulang ke negara, bekerja di perusahaan ayah.', kata: ['国へ 帰ってから', '父の 会社で 働きます'], jawaban: '国へ 帰ってから 父の 会社で 働きます', penjelasan: '～てから = setelah melakukan sesuatu.' },
  { id: 's6', fokus: 'Kata Kerjaてから、Kata Kerja', arti: 'Setelah menelepon, pergi ke rumah teman.', kata: ['電話を かけてから', '友達の うちへ 行きます'], jawaban: '電話を かけてから 友達の うちへ 行きます', penjelasan: 'Kata kerja pertama disambung ～てから.' },
  { id: 's7', fokus: 'Kata Kerjaてから、Kata Kerja', arti: 'Setelah membersihkan kamar, belajar.', kata: ['部屋を そうじしてから', '日本語を 勉強します'], jawaban: '部屋を そうじしてから 日本語を 勉強します', penjelasan: 'Urutan aksi ditegaskan dengan ～てから.' },
  { id: 's8', fokus: 'Kata Benda₁ は Kata Benda₂ が Kata Sifat', arti: 'Osaka makanannya enak.', kata: ['大阪は', '食べ物が', 'おいしいです'], jawaban: '大阪は 食べ物が おいしいです', penjelasan: 'Topik は + ～が + kata sifat.' },
  { id: 's9', fokus: 'Kata Benda₁ は Kata Benda₂ が Kata Sifat', arti: 'Sdr. Karina badannya tinggi.', kata: ['カリナさんは', '背が', '高いです'], jawaban: 'カリナさんは 背が 高いです', penjelasan: '背が高い = badannya tinggi.' },
  { id: 's10', fokus: 'Kata Benda₁ は Kata Benda₂ が Kata Sifat', arti: 'Sdr. Karina rambutnya pendek.', kata: ['カリナさんは', '髪が', '短いです'], jawaban: 'カリナさんは 髪が 短いです', penjelasan: '髪が短い = rambutnya pendek.' },
  { id: 's11', fokus: 'Kata Bendaを Kata Kerja', arti: 'Pada pukul tujuh keluar dari rumah.', kata: ['7時に', 'うちを', '出ます'], jawaban: '7時に うちを 出ます', penjelasan: 'します でます memakai を untuk titik keberangkatan.' },
  { id: 's12', fokus: 'Kata Bendaを Kata Kerja', arti: 'Tamat dari universitas tahun depan.', kata: ['来年', '大学を', '出ます'], jawaban: '来年 大学を 出ます', penjelasan: '大学を 出ます = tamat/keluar dari universitas.' },
  { id: 's13', fokus: 'どれ／どの Kata Benda', arti: 'Payung Sdr. Miller yang mana? ……Payung biru itu.', kata: ['ミラーさんの 傘は', 'どれですか', 'あの', '青い 傘です'], jawaban: 'ミラーさんの 傘は どれですか あの 青い 傘です', penjelasan: 'どれ menanyakan satu dari lebih dari tiga benda.' },
  { id: 's14', fokus: 'どれ／どの Kata Benda', arti: 'Sdr. Santos orang yang mana? ……Orang yang badannya tinggi dan rambutnya hitam itu.', kata: ['サントスさんは', 'どの 人ですか', 'あの', '背が 高くて', '髪が 黒い 人です'], jawaban: 'サントスさんは どの 人ですか あの 背が 高くて 髪が 黒い 人です', penjelasan: 'どの + Kata Benda menanyakan orang tertentu.' },
  { id: 's15', fokus: 'どうやって', arti: 'Bagaimana caranya pergi ke universitas?', kata: ['大学まで', 'どうやって', '行きますか'], jawaban: '大学まで どうやって 行きますか', penjelasan: 'どうやって menanyakan cara pergi/melakukan.' },
  { id: 's16', fokus: 'Menyambung Kata Sifat', arti: 'Komputer ini ringan dan praktis.', kata: ['この パソコンは', '軽くて', '便利です'], jawaban: 'この パソコンは 軽くて 便利です', penjelasan: 'Kata sifat-i disambung ～くて.' },
  { id: 's17', fokus: 'Kata Kerjaて、〜、Kata Kerja', arti: 'Naik JR dari stasiun Kyoto, pindah ke kereta bawah tanah di Osaka.', kata: ['京都駅から', 'JRに 乗って', '大阪で', '地下鉄に 乗り換えます'], jawaban: '京都駅から JRに 乗って 大阪で 地下鉄に 乗り換えます', penjelasan: '乗り換えます = pindah/berganti kendaraan.' },
  { id: 's18', fokus: 'Kata Benda₁ は Kata Benda₂ が Kata Sifat', arti: 'Kamar ini sempit, tetapi bersih.', kata: ['この 部屋は', '狭いです が', 'きれいです'], jawaban: 'この 部屋は 狭いです が きれいです', penjelasan: 'Kata sifat dengan nilai berlawanan disambung が, bukan ～て.' },
  { id: 's19', fokus: 'Kata Kerjaてから、Kata Kerja', arti: 'Setelah uang dimasukkan, tolong tekan tombolnya.', kata: ['お金を 入れてから', 'ボタンを', '押して ください'], jawaban: 'お金を 入れてから ボタンを 押して ください', penjelasan: '～てから + permintaan ～て ください.' },
  { id: 's20', fokus: 'Kata Kerjaて、〜、Kata Kerja', arti: 'Beli sandwich, lalu makan di taman Istana Osaka.', kata: ['サンドイッチを 買って', '大阪城公園で', '食べました'], jawaban: 'サンドイッチを 買って 大阪城公園で 食べました', penjelasan: 'Aksi berurutan; waktu lampau di kata kerja terakhir.' },
]
