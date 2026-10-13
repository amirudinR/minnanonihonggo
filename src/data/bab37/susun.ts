import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 37 — fokus 文型 (bentuk pasif 受身):
//  (1) Kata Benda₁(orang₁) は Kata Benda₂(orang₂) に Kata Kerja Pasif
//  (2) Kata Benda₁(orang₁) は Kata Benda₂(orang₂) に Kata Benda₃ を Kata Kerja Pasif
//  (3) Kata Benda (benda/hal) が／は Kata Kerja Pasif
//  + catatan: ～に よって , Kata Benda から／で つくります
// ATURAN: `kata` = token dari `jawaban` (pisah spasi) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/bunpou/renshuu Bab 37 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Orang₁ は Orang₂ に Kata Kerja Pasif', arti: 'Saya dipuji oleh guru.', kata: ['わたしは', '先生に', '褒められました'], jawaban: 'わたしは 先生に 褒められました', penjelasan: 'Penerima perbuatan jadi topik; pelaku dibubuhkan に.' },
  { id: 's2', fokus: 'Orang₁ は Orang₂ に Kata Kerja Pasif', arti: 'Saya diminta oleh ibu untuk berbelanja.', kata: ['わたしは', '母に', '買い物を', '頼まれました'], jawaban: 'わたしは 母に 買い物を 頼まれました', penjelasan: '頼まれました = bentuk pasif dari 頼みます (diminta).' },
  { id: 's3', fokus: 'Orang₁ は Orang₂ に Kata Kerja Pasif', arti: 'Saya digigit anjing.', kata: ['わたしは', '犬に', 'かまれました'], jawaban: 'わたしは 犬に かまれました', penjelasan: 'Selain manusia, hewan pun bisa menjadi pelaku dengan に.' },
  { id: 's4', fokus: 'Orang₁ は Orang₂ に Kata Kerja Pasif', arti: 'Tadi pagi saya dipanggil oleh kepala bagian.', kata: ['けさ', '部長に', '呼ばれました'], jawaban: 'けさ 部長に 呼ばれました', penjelasan: '呼ばれました = bentuk pasif dari 呼びます (dipanggil).' },
  { id: 's5', fokus: 'Orang₁ は Orang₂ に Kata Kerja Pasif', arti: 'Ditegur soal cara penulisan laporan.', kata: ['出張の', 'レポートの', '書き方に ついて', '注意されました'], jawaban: '出張の レポートの 書き方に ついて 注意されました', penjelasan: '注意されました = bentuk pasif dari 注意します (ditegur/dinasihati).' },
  { id: 's6', fokus: 'Orang₁ は Orang₂ に Kata Kerja Pasif', arti: 'Saya dipanggil oleh kepala bagian.' , kata: ['わたしは', '課長に', '呼ばれました'], jawaban: 'わたしは 課長に 呼ばれました', penjelasan: 'Orang₁ diangkat sebagai topik, pelaku (課長) ditandai に.' },
  { id: 's7', fokus: 'Orang₁ は Orang₂ に Kata Kerja Pasif', arti: 'Saya diundang ke pesta oleh Sdr. Miller.', kata: ['わたしは', 'ミラーさんに', 'パーティーに', '招待されました'], jawaban: 'わたしは ミラーさんに パーティーに 招待されました', penjelasan: '招待されました = bentuk pasif dari 招待します (diundang).' },
  { id: 's8', fokus: 'Orang₁ は Orang₂ に Kata Kerja Pasif', arti: 'Saya diminta oleh ibu untuk berbelanja (kadang-kadang).', kata: ['わたしは', '母に', '時々', '買い物を', '頼まれます'], jawaban: 'わたしは 母に 時々 買い物を 頼まれます', penjelasan: 'Pola pasif bisa dipakai bentuk ます untuk kebiasaan.' },
  { id: 's9', fokus: 'Orang₁ は Orang₂ に Benda₃ を Kata Kerja Pasif', arti: 'PC saya dirusak oleh adik laki-laki saya.', kata: ['わたしは', '弟に', 'パソコンを', '壊されました'], jawaban: 'わたしは 弟に パソコンを 壊されました', penjelasan: 'Benda milik jadi を; pemilik yang terganggu jadi topik.' },
  { id: 's10', fokus: 'Orang₁ は Orang₂ に Benda₃ を Kata Kerja Pasif', arti: 'Tangan saya digigit anjing.', kata: ['わたしは', '犬に', '手を', 'かまれました'], jawaban: 'わたしは 犬に 手を かまれました', penjelasan: 'Benda bagian tubuh jadi を, pemilik jadi topik.' },
  { id: 's11', fokus: 'Orang₁ は Orang₂ に Benda₃ を Kata Kerja Pasif', arti: 'Payung (saya) salah diambil oleh seseorang.', kata: ['だれかに', '傘を', 'まちがえられたんです'], jawaban: 'だれかに 傘を まちがえられたんです', penjelasan: 'まちがえられる = pasif dari まちがえます (salah ambil menimpa saya).' },
  { id: 's12', fokus: 'Orang₁ は Orang₂ に Benda₃ を Kata Kerja Pasif', arti: 'Saya dicopet kamera oleh pencuri.', kata: ['わたしは', '泥棒に', 'カメラを', 'とられました'], jawaban: 'わたしは 泥棒に カメラを とられました', penjelasan: 'とられました = bentuk pasif dari とります (diambil/menimpa).' },
  { id: 's13', fokus: 'Orang₁ は Orang₂ に Benda₃ を Kata Kerja Pasif', arti: 'Pakaian saya dikotori oleh anak.', kata: ['わたしは', '子どもに', '服を', '汚されました'], jawaban: 'わたしは 子どもに 服を 汚されました', penjelasan: '汚されました = bentuk pasif dari 汚します (dikotori).' },
  { id: 's14', fokus: 'Orang₁ は Orang₂ に Benda₃ を Kata Kerja Pasif', arti: 'Kaki saya diinjak oleh orang di sebelah di kereta.', kata: ['わたしは', '電車で', '隣の 人に', '足を', '踏まれました'], jawaban: 'わたしは 電車で 隣の 人に 足を 踏まれました', penjelasan: '踏まれました = bentuk pasif dari 踏みます (diinjak).' },
  { id: 's15', fokus: 'Benda/hal が／は Kata Kerja Pasif', arti: 'Di Osaka diadakan pameran.', kata: ['大阪で', '展覧会が', '開かれました'], jawaban: '大阪で 展覧会が 開かれました', penjelasan: 'Tanpa mempersoalkan pelaku, benda/hal jadi subjek + pasif.' },
  { id: 's16', fokus: 'Benda/hal が／は Kata Kerja Pasif', arti: 'Buku ini dibaca di seluruh dunia.', kata: ['この', '本は', '世界中で', '読まれて います'], jawaban: 'この 本は 世界中で 読まれて います', penjelasan: 'Pasif + ～て います menyatakan keadaan yang berlangsung.' },
  { id: 's17', fokus: 'Benda/hal が／は Kata Kerja Pasif', arti: 'Bintang baru ditemukan lagi.', kata: ['また', '新しい', '星が', '発見されました'], jawaban: 'また 新しい 星が 発見されました', penjelasan: '発見されました = bentuk pasif dari 発見します (ditemukan).' },
  { id: 's18', fokus: 'Benda/hal が／は Kata Kerja Pasif', arti: 'Pertemuan anak dunia tahun ini diadakan di Hiroshima.', kata: ['ことしの', '世界子ども会議は', '広島で', '開かれます'], jawaban: 'ことしの 世界子ども会議は 広島で 開かれます', penjelasan: '開かれます = bentuk pasif dari 開きます (diadakan/dibuka).' },
  { id: 's19', fokus: 'Kata Benda から つくります', arti: 'Bir terbuat dari gandum.', kata: ['ビールは', '麦から', '造られます'], jawaban: 'ビールは 麦から 造られます', penjelasan: 'Bahan baku dinyatakan dengan から + pasif 造られます.' },
  { id: 's20', fokus: 'Benda は 人 に よって Kata Kerja Pasif', arti: 'Pesawat terbang itu ditemukan oleh Wright bersaudara.', kata: ['飛行機は', 'ライト兄弟に よって', '発明されました'], jawaban: '飛行機は ライト兄弟に よって 発明されました', penjelasan: 'Pelaku khusus dinyatakan dengan ～に よって pada kalimat pasif.' },
]
