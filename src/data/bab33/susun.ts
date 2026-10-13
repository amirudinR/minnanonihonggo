import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 33 — fokus pola 文型:
//  (1) 〜ろ・〜け［Bentuk Perintah］
//  (2) 〜な［Bentuk Larangan］
//  (3) X は Y という 意味です
//  (4) ［「Kalimat」／Kata Kutip］と 言っていました
//  + catatan: 〜と 書いて あります／〜と 読みます , 〜と 伝えて いただけませんか
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 33 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: '早く［Kata Kerja］（Bentuk Perintah）', arti: 'Cepat tidur!', kata: ['早く', '寝ろ'], jawaban: '早く 寝ろ', penjelasan: 'Bentuk Perintah Golongan II: ます diganti ろ → ねます→ねろ.' },
  { id: 's2', fokus: '［Kata Kerja］（Bentuk Perintah）', arti: 'Semangat!', kata: ['頑張れ', 'あと', '少しだ'], jawaban: '頑張れ あと 少しだ', penjelasan: 'Bentuk Perintah dari がんばります → がんばれ, untuk menyemangati.' },
  { id: 's3', fokus: '［Kata Kerja］（Bentuk Perintah）', arti: 'Berhenti!', kata: ['止まれ', '止まれ'], jawaban: '止まれ 止まれ', penjelasan: 'Bentuk Perintah とまれ sering dipakai berulang pada tanda lalu lintas.' },
  { id: 's4', fokus: '［Kata Kerja］な（Bentuk Larangan）', arti: 'Jangan terlambat!', kata: ['遅れるな', '早く', '行け'], jawaban: '遅れるな 早く 行け', penjelasan: 'Bentuk Larangan: bentuk kamus（遅れる）+ な.' },
  { id: 's5', fokus: '［Kata Kerja］な（Bentuk Larangan）', arti: 'Jangan beristirahat!', kata: ['休むな', '頑張れ'], jawaban: '休むな 頑張れ', penjelasan: 'Bentuk Larangan dan Perintah sering dipakai pada latihan olahraga.' },
  { id: 's6', fokus: '［Kata Kerja］な（Bentuk Larangan）', arti: 'Dilarang masuk!', kata: ['入るな', 'ここは', '危ない'], jawaban: '入るな ここは 危ない', penjelasan: 'Bentuk Larangan dari はいります → はいるな.' },
  { id: 's7', fokus: '［Kata Kerja］な（Bentuk Larangan）', arti: '……Masih ada satu menit. Jangan menyerah!', kata: ['まだ', '1分', 'ある', 'あきらめるな'], jawaban: 'まだ 1分 ある あきらめるな', penjelasan: 'あきらめるな = bentuk larangan untuk menyemangati.' },
  { id: 's8', fokus: 'X は Y という 意味です', arti: '"Tachiri Kinshi" berarti dilarang masuk.', kata: ['「立入禁止」は', '入るなという', '意味です'], jawaban: '「立入禁止」は 入るなという 意味です', penjelasan: 'X は Y という 意味です dipakai untuk menjelaskan makna X.' },
  { id: 's9', fokus: 'X は どういう 意味ですか', arti: 'Apa maksud tanda ini?', kata: ['この', 'マークは', 'どういう', '意味ですか'], jawaban: 'この マークは どういう 意味ですか', penjelasan: 'どういう 意味ですか = "maksudnya apa?".' },
  { id: 's10', fokus: 'X は Y という 意味です', arti: '……Maksudnya dapat dicuci dengan mesin cuci.', kata: ['洗濯機で', '洗えるという', '意味です'], jawaban: '洗濯機で 洗えるという 意味です', penjelasan: '～という 意味です menjelaskan isi suatu tanda.' },
  { id: 's11', fokus: 'X は Y という 意味です', arti: '……"Kin en". Artinya "dilarang smoking".', kata: ['「禁煙」です', 'たばこを', '吸うなという', '意味です'], jawaban: '「禁煙」です たばこを 吸うなという 意味です', penjelasan: 'たばこを 吸うなという = kata kutip berbentuk larangan.' },
  { id: 's12', fokus: '〜と 言っていました', arti: '……Sekarang sedang keluar. Katanya akan segera kembali.', kata: ['今', '出かけています', '30分ぐらいで', '戻ると', '言っていました'], jawaban: '今 出かけています 30分ぐらいで 戻ると 言っていました', penjelasan: '～と 言っていました menyampaikan perkataan orang ketiga.' },
  { id: 's13', fokus: '〜と 言っていました', arti: 'Katanya sdr. Tanaka besok tidak masuk.', kata: ['田中さんは', 'あした', '休むと', '言っていました'], jawaban: '田中さんは あした 休むと 言っていました', penjelasan: 'Isi kutipan memakai bentuk biasa + と 言っていました.' },
  { id: 's14', fokus: '〜と 言っていました', arti: 'Sdr. Tanaka berkata "Besok tidak masuk".', kata: ['田中さんは', '「あした', '休みます」と', '言っていました'], jawaban: '田中さんは 「あした 休みます」と 言っていました', penjelasan: 'Kalimat kutipan boleh ditulis apa adanya dalam tanda petik + と.' },
  { id: 's15', fokus: '〜と 伝えて いただけませんか', arti: 'Tolong sampaikan kepada sdr. Wang bahwa "Minta telepon nanti".', kata: ['ワンさんに', '「あとで', '電話を', 'ください」と', '伝えて', 'いただけませんか'], jawaban: 'ワンさんに 「あとで 電話を ください」と 伝えて いただけませんか', penjelasan: '～と 伝えて いただけませんか meminta pesan secara halus.' },
  { id: 's16', fokus: '〜と 書いて あります', arti: '……Di situ tertulis "Berhenti!".', kata: ['「止まれ」と', '書いて', 'あります'], jawaban: '「止まれ」と 書いて あります', penjelasan: '～と 書いて あります menyatakan sesuatu tertulis (bukan hasil menulis).' },
  { id: 's17', fokus: '〜と 書いて あります', arti: '……Di situ tertulis apa?', kata: ['あそこに', '何と', '書いて', 'あるんですか'], jawaban: 'あそこに 何と 書いて あるんですか', penjelasan: '何と 書いて あるんですか menanyakan tulisan di suatu tempat.' },
  { id: 's18', fokus: '〜と 読みます', arti: '……"Kin en". Artinya "dilarang smoking".', kata: ['「禁煙」です', 'たばこを', '吸うなと', 'いう', '意味です'], jawaban: '「禁煙」です たばこを 吸うなと いう 意味です', penjelasan: 'Kata kutip ～と いう 意味です boleh ditulis terpisah.' },
  { id: 's19', fokus: '［Kata Kerja］な（Bentuk Larangan）', arti: 'Jangan parkir di sini!', kata: ['ここに', '車を', '止めるな'], jawaban: 'ここに 車を 止めるな', penjelasan: '止めるな = bentuk larangan dari とめます.' },
  { id: 's20', fokus: '［Kata Kerja］（Bentuk Perintah）', arti: 'Ayo lari!', kata: ['走れ', 'あと', '100メートル'], jawaban: '走れ あと 100メートル', penjelasan: 'Bentuk Perintah dari はしります → はしれ.' },
]
