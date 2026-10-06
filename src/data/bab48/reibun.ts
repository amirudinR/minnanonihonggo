import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 48 — JP: Honsatsu 第48課「例文」(idx 204 / cetak 186).
// arti: PDF Indonesia "Pelajaran 48 · II. Terjemahan · Contoh Kalimat" (idx 163 / cetak 142).
// CATATAN: kedua edisi memakai set Contoh Kalimat yang BERBEDA untuk Pelajaran 48.
// Honsatsu (JP) memuat 5 Contoh Kalimat; buku Indonesia (idx 163) memuat 5 Contoh Kalimat
// yang isinya berbeda (versi Indonesia memakai kalimat tentang les sepak bola, judo, dan
// guru Ito, sedangkan versi JP memakai kalimat tentang stam/uwagi, 一郎, dan guru Watt).
// Hanya 2 Contoh Kalimat JP yang punya padanan di buku Indonesia, jadi hanya 2 yang
// dimasukkan — terjemahan tidak boleh dikarang.
export const reibun: ReibunItem[] = [
  {
    kalimat:
      '駅に 着いたら、お電話を ください。係の 者を 迎えに 行かせますから。……わかりました。',
    arti:
      'Begitu sampai di stasiun, tolong telepon ya. Saya menyuruh anak laki-laki saya mengantarkan Anda sampai stasiun. ……Baik.',
    furigana: [
      { base: '駅', ruby: 'えき' },
      { base: '電話', ruby: 'でんわ' },
      { base: '係', ruby: 'かかり' },
      { base: '迎', ruby: 'むか' },
    ],
  },
  {
    kalimat:
      'すみません。しばらく ここに 車を 止めさせていただけませんか。荷物を 降ろしますので。……いいですよ。',
    arti: 'Maaf. Boleh memarkir mobil di sini sebentar? ……Boleh.',
    furigana: [
      { base: '車', ruby: 'くるま' },
      { base: '止', ruby: 'と' },
      { base: '荷物', ruby: 'にもつ' },
      { base: '降', ruby: 'お' },
    ],
  },
]
