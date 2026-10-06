import type { Bunpou } from '@/types/bab'

// 4 pola dari 文型 (halaman cetak 130)
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Bentuk て、〜、Kata Kerja',
    penjelasan:
      'Memakai ～て untuk menyambung aksi-aksi yang berturut-turut sesuai urutannya. Waktu ditentukan oleh Kata Kerja yang terakhir.',
    contoh: ['朝 ジョギングをして、シャワーを浴びて、会社へ行きます。'],
    artiContoh: ['Pagi hari joging, mandi, kemudian pergi ke perusahaan.'],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk てから、Kata Kerja',
    penjelasan:
      'Kata Kerja₂ dilakukan setelah Kata Kerja₁. Waktu ditentukan oleh waktu Kata Kerja terakhir.',
    contoh: ['コンサートが終わってから、レストランで食事をしました。'],
    artiContoh: ['Setelah selesai konser, makan di restoran.'],
  },
  {
    no: 3,
    pola: 'Kata Benda₁ は Kata Benda₂ が Kata Sifat',
    penjelasan:
      'Topik (Kata Benda₁) mempunyai sifat yang disampaikan lewat Kata Benda₂ が Kata Sifat.',
    contoh: ['大阪は食べ物がおいしいです。'],
    artiContoh: ['Osaka makanannya enak.'],
  },
  {
    no: 4,
    pola: 'Kata Bendaを Kata Kerja / Kata Sifat',
    penjelasan:
      'Kata Kerja でます、おります dan sejenis dipakai dengan partikel を; を ini menunjukkan titik awal atau titik keberangkatan. Kata Sifat yang disambung lebih dari satu memakai bentuk て/ くて.',
    contoh: ['このパソコンは軽くて、便利です。', '7時にうちを出ます。'],
    artiContoh: ['Komputer ini ringan dan praktis.', 'Pada pukul tujuh keluar dari rumah.'],
  },
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'どれ／どの Kata Benda',
    penjelasan:
      'どれ dipakai untuk menentukan satu dari lebih dari tiga benda. Untuk menerangkan Kata Benda secara langsung dipakai どの.',
    contoh: ['ミラーさんの傘はどれですか。……あの青い傘です。', 'サントスさんはどの人ですか。……あの背が高くて、髪が黒い人です。'],
    artiContoh: ['Yang mana payung Sdr. Miller? ……Payung yang biru itu.', 'Sdr. Santos orangnya yang mana? ……Orang yang badannya tinggi, dan rambutnya hitam.'],
  },
  {
    no: 2,
    pola: 'どうやって',
    penjelasan:
      'どうやって dipakai untuk menanyakan cara pergi ke suatu tempat atau cara melakukan sesuatu.',
    contoh: ['大学までどうやって行きますか。……京都駅から16番のバスに乗って、大学前で降ります。'],
    artiContoh: ['Bagaimana caranya pergi ke universitas? ……Dari stasiun Kyoto, naik bus nomor 16, dan turun di Daigakumae.'],
  },
  {
    no: 3,
    pola: '[Perhatian] menyambung 形容詞',
    penjelasan:
      'Jika memakai ～て（〜で）untuk menyambung Kata Sifat yang bersubjek yang sama, tidak dapat menyambungkan kalimat yang nilai pembicaranya berbeda. Dalam hal itu, menggunakan が.',
    contoh: ['この部屋は狭いですが、きれいです。'],
    artiContoh: ['Kamar ini sempit, tetapi bersih.'],
  },
]
