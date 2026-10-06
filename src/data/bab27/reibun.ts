import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 27 (例文).
// Teks JP dari Honsatsu idx 28 (cetak 10); arti dari PDF terjemahan Indonesia,
// "II. Terjemahan - Contoh Kalimat" (hlm. cetak 16).
// Catatan: edisi Indonesia hanya menterjemahkan 5 dari 7 例文 (butir 4 & 7 tidak
// ada di sana); terjemahan kedua butir itu diselaraskan dengan teks JP Honsatsu.
// Butir 3: edisi Indonesia memakai contoh lain (Horyuji, tahun 607), sehingga
// terjemahan di sini disesuaikan dengan teks JP Honsatsu (Kansai, 1994).
export const reibun: ReibunItem[] = [
  {
    kalimat: '日本語の 新聞が 読めますか。……いいえ、読めません。',
    arti: 'Bisa membaca surat kabar yang ditulis dalam bahasa Jepang? ……Tidak, tidak bisa membacanya.',
  },
  {
    kalimat: '鳥の 声が 聞こえますね。……ええ。もう 春ですね。',
    arti: 'Suara burung terdengar, ya. ……Ya. Musim semi telah tiba.',
  },
  {
    kalimat: '関西空港は いつ できましたか。……1994年 の 秋に できました。',
    arti: 'Kapan Bandar Udara Kansai dibangun? ……Dibangun pada musim gugur tahun 1994.',
  },
  {
    kalimat:
      'パワー電気では 夏休みは 何日ぐらい 取れますか。……そうですね。３週間ぐらいです。いいですね。わたしの 会社は １週間しか 休めません。',
    arti:
      'Kira-kira berapa hari dapat libur musim panas di Power Elektro? ……Ya... Kira-kira tiga minggu. Bagus, ya. Di perusahaan saya hanya bisa libur seminggu saja.',
  },
  {
    kalimat: 'この マンションで ペットが 飼えますか。……小さい 鳥や 魚は 飼えますが、犬や 猫は 飼えません。',
    arti:
      'Apakah bisa memelihara hewan di apartmen ini? ……Bisa memelihara ikan atau burung yang kecil, tetapi tidak bisa memelihara anjing atau kucing.',
  },
  {
    kalimat: '東京から 富士山が 見えますか。……昔は よく 見えましたが、今は ほとんど 見えません。',
    arti: 'Apakah Gunung Fuji terlihat dari Tokyo? ……Dulu sering terlihat, tetapi sekarang hampir tidak terlihat.',
  },
  {
    kalimat:
      'すてきな かばんですね。どこで 買ったんですか。……通信販売で 買いました。デパートにも ありますよ。……デパートには ない 思いますよ。',
    arti:
      'Bagus sekali tasnya. Beli di mana? ……Beli melalui pemesanan pos. Ada juga di department store. ……Sepertinya tidak ada di department store.',
  },
]
