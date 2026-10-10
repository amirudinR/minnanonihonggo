import type { Konteks } from '@/types/bab'

// Tabel acuan untuk 練習B Bab 1 (hls. 8 buku). Ekspor ARRAY agar konsisten
// dengan tipe `Bab.konteks` (sebelumnya skalar → index.ts harus membungkus [konteks]).
export const konteks: Konteks[] = [
  {
    judul: 'Tabel orang untuk 練習B',
    teks:
      '【例】ミラー(アメリカ, 会社員) / 山田(日本, 銀行員) / ワット(イギリス, 先生) / タワポン(タイ, 学生) / シュミット(ドイツ, エンジニア)\n' +
      '【練習B2】\n' +
      'グプタ(42, インド, IMC, 社員)\n' +
      'イー(35, 韓国, AKC, 研究者)\n' +
      'ワン(29, 中国, 神戸病院, 医者)\n' +
      'カリナ(24, インドネシア, 富士大学, 学生)\n' +
      'サントス(39, ブラジル, ブラジルエアー, 社員)',
  },
]
