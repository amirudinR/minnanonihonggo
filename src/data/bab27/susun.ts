import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 27 — fokus 文型:
//  (1) Kata Kerja Potensial (可能動詞)
//  (2) 見えます・聞こえます
//  (3) できます
//  (4) ～しか ＋ Kata Benda/Kata Keterangan Bilangan (dengan bentuk negatif)
//  + catatan: は (perbandingan) , は pengganti が／を
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 27 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja Potensial', arti: 'Saya bisa berbahasa Jepang.', kata: ['わたしは', '日本語が', '話せます'], jawaban: 'わたしは 日本語が 話せます', penjelasan: 'Objek kata kerja potensial ditandai が: 日本語が 話せます.' },
  { id: 's2', fokus: 'Kata Kerja Potensial', arti: 'Bisa pergi ke rumah sakit sendiri?', kata: ['一人で', '病院へ', '行けますか'], jawaban: '一人で 病院へ 行けますか', penjelasan: '行けます = bentuk potensial dari 行きます.' },
  { id: 's3', fokus: 'Kata Kerja Potensial', arti: 'Bisa membaca surat kabar yang ditulis dalam bahasa Jepang? ……Tidak, tidak bisa membacanya.', kata: ['日本語の', '新聞が', '読めますか', 'いいえ', '読めません'], jawaban: '日本語の 新聞が 読めますか いいえ 読めません', penjelasan: '読めます = potensial 読む; bentuk negatifnya 読めません.' },
  { id: 's4', fokus: 'Kata Kerja Potensial', arti: 'Apakah bisa memelihara hewan peliharaan di apartmen ini?', kata: ['この', 'マンションで', 'ペットが', '飼えますか'], jawaban: 'この マンションで ペットが 飼えますか', penjelasan: '飼えます = potensial dari 飼います (memelihara).' },
  { id: 's5', fokus: 'Kata Kerja Potensial', arti: 'Bisa memelihara burung atau ikan yang kecil, tetapi tidak bisa memelihara anjing dan kucing.', kata: ['小さい', '鳥や', '魚は', '飼えますが', '犬や', '猫は', '飼えません'], jawaban: '小さい 鳥や 魚は 飼えますが 犬や 猫は 飼えません', penjelasan: 'は di sini menyatakan perbandingan: 魚は …が 猫は ….' },
  { id: 's6', fokus: 'Kata Kerja Potensial', arti: 'Di perusahaan saya hanya bisa libur seminggu saja.', kata: ['わたしの', '会社は', '1週間しか', '休めません'], jawaban: 'わたしの 会社は 1週間しか 休めません', penjelasan: 'しか selalu dipakai bersama bentuk negatif: しか ～ません.' },
  { id: 's7', fokus: 'Kata Kerja Potensial', arti: 'Bisa memakai sumpit (memakai kimono).', kata: ['わたしは', 'はしが', 'つかえます', 'きものを', 'きれます'], jawaban: 'わたしは はしが つかえます きものを きれます', penjelasan: 'つかえます・きれます = bentuk potensial dari つかいます・きます.' },
  { id: 's8', fokus: '見えます・聞こえます', arti: 'Suara burung terdengar, ya. ……Ya. Musim semi telah tiba.', kata: ['鳥の', '声が', '聞こえますね', 'ええ', 'もう', '春ですね'], jawaban: '鳥の 声が 聞こえますね ええ もう 春ですね', penjelasan: '聞こえます menyatakan suara terdengar dengan sendirinya; objek ditandai が.' },
  { id: 's9', fokus: '見えます・聞こえます', arti: 'Apakah Gunung Fuji terlihat dari Tokyo?', kata: ['東京から', '富士山が', '見えますか'], jawaban: '東京から 富士山が 見えますか', penjelasan: '見えます = terlihat secara alami; objek ditandai が.' },
  { id: 's10', fokus: '見えます・聞こえます', arti: 'Dulu sering terlihat, tetapi sekarang hampir tidak terlihat.', kata: ['昔は', 'よく', '見えましたが', '今は', 'ほとんど', '見えません'], jawaban: '昔は よく 見えましたが 今は ほとんど 見えません', penjelasan: 'は menandai perbandingan 昔は … 今は ….' },
  { id: 's11', fokus: '見えます・聞こえます', arti: 'Dari Shinkansen terlihat Gunung Fuji.', kata: ['新幹線から', '富士山が', '見えます'], jawaban: '新幹線から 富士山が 見えます', penjelasan: 'から menyatakan sumber pandangan.' },
  { id: 's12', fokus: '見えます・聞こえます', arti: 'Terdengar suara radio.', kata: ['ラジオの', '音が', '聞こえます'], jawaban: 'ラジオの 音が 聞こえます', penjelasan: '音が 聞こえます = bunyi terdengar (tanpa sengaja).' },
  { id: 's13', fokus: 'できます', arti: 'Kapan Bandar Udara Kansai dibangun?', kata: ['関西空港は', 'いつ', 'できましたか'], jawaban: '関西空港は いつ できましたか', penjelasan: 'できました di sini bermakna "dibangun/berdiri".' },
  { id: 's14', fokus: 'できます', arti: '……Dibangun pada musim gugur tahun 1994.', kata: ['1994年の', '秋に', 'できました'], jawaban: '1994年の 秋に できました', penjelasan: 'できました = rampung/berdiri, bukan kemampuan.' },
  { id: 's15', fokus: 'できます', arti: 'Kapan perbaikan jam akan selesai?', kata: ['時計の', '修理は', 'いつ', 'できますか'], jawaban: '時計の 修理は いつ できますか', penjelasan: 'できます di sini = "selesai/rampung".' },
  { id: 's16', fokus: 'できます', arti: 'Di depan stasiun, telah dibangun pasar swalayan besar.', kata: ['駅の', '前に', '大きい', 'スーパーが', 'できました'], jawaban: '駅の 前に 大きい スーパーが できました', penjelasan: 'できました = telah dibangun.' },
  { id: 's17', fokus: '～しか', arti: 'Hanya bisa menulis huruf latin saja.', kata: ['ローマ字しか', '書けません'], jawaban: 'ローマ字しか 書けません', penjelasan: 'しか … ません = hanya bisa (menegaskan keterbatasan).' },
  { id: 's18', fokus: '～しか', arti: 'Hanya bisa menulis hiragana saja.', kata: ['ひらがなしか', '書けません'], jawaban: 'ひらがなしか 書けません', penjelasan: 'Jika しか menggantikan を/が, partikel itu dihilangkan.' },
  { id: 's19', fokus: '～しか', arti: 'Hanya bisa berenang 50 meter saja.', kata: ['50メートルしか', '泳げません'], jawaban: '50メートルしか 泳げません', penjelasan: 'Kata keterangan bilangan + しか juga dipakai dengan negatif.' },
  { id: 's20', fokus: '～しか', arti: 'Di perusahaan ini hanya ada 3 orang asing saja.', kata: ['この', '会社に', '外国人は', '3人しか', 'いません'], jawaban: 'この 会社に 外国人は 3人しか いません', penjelasan: 'しか berlaku juga untuk います → いません.' },
]
