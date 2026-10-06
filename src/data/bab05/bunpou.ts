import type { Bunpou } from '@/types/bab'

// 3 pola dari 文型 (halaman cetak 38)
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda(tempat) へ 行きます／来ます／帰ります',
    penjelasan:
      'Jika menunjukkan pindah, arah pindahnya dinyatakan dengan membubuhkan partikel へ. Partikel へ diucapkan え.',
    contoh: ['わたしは 京都へ 行きます。'],
    artiContoh: ['Saya pergi ke Kyoto.'],
  },
  {
    no: 2,
    pola: 'Kata Benda(kendaraan) で 行きます／来ます／帰ります',
    penjelasan:
      'Partikel で menunjukkan sarana dan cara. Yang dimaksud di sini adalah kendaraan — sarana transportasi. Untuk 歩いて, tidak dibubuhkan partikel で.',
    contoh: ['わたしは タクシーで うちへ 帰ります。'],
    artiContoh: ['Saya pulang ke rumah dengan taksi.'],
  },
  {
    no: 3,
    pola: 'Kata Benda(orang/hewan) と Kata Kerja',
    penjelasan:
      'Jika melakukan sesuatu bersama orang (hewan), hal ini ditunjukkan dengan membubuhkan partikel と. Jika melakukan aksi sendiri, digunakan ひとりで dan tidak menggunakan partikel と.',
    contoh: ['わたしは 家族と 日本へ 来ました。'],
    artiContoh: ['Saya datang ke Jepang bersama dengan keluarga.'],
  },
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'どこ[へ]も 行きません／行きませんでした',
    penjelasan:
      'Apabila ingin menyangkal hal yang ditanyakan oleh Kata Tanya secara total, pembentukkan Kata Kerja negatif dengan membubuhkan partikel も pada Kata Tanya.',
    contoh: ['日曜日 どこへ 行きましたか。……どこへも 行きませんでした。'],
    artiContoh: ['Hari Minggu pergi ke mana? ……Tidak pergi ke mana-mana.'],
  },
  {
    no: 2,
    pola: 'いつ',
    penjelasan:
      'Untuk menyatakan waktu, selain digunakan Kata Tanya なん, digunakan Kata Tanya いつ sebagaimana halnya seperti なんじ, なんようび, なんがつ, なんにち. Kata いつ tidak dapat dibubuhkan partikel に.',
    contoh: ['いつ 日本へ 来ましたか。……3月25日に 来ました。'],
    artiContoh: ['Kapan datang ke Jepang? ……Datang pada tanggal 25 Maret.'],
  },
  {
    no: 3,
    pola: '～よ',
    penjelasan:
      'Partikel よ dibubuhkan pada akhir kalimat dan digunakan untuk memberitahukan suatu hal yang diketahui oleh lawan bicara, atau menyampaikan tanggapan dan pendapat si pembicara kepada lawan bicaranya.',
    contoh: ['この 電車は 甲子園へ 行きますか。……いいえ、行きません。次の「普通」ですよ。'],
    artiContoh: ['Apakah kereta rel listrik ini menuju Koshien? ……Tidak, tidak pergi. Yang "Biasa" berikutnya.'],
  },
  {
    no: 4,
    pola: 'そうですね',
    penjelasan:
      'そうですね digunakan jika menyetujui atau sependapat dengan hal yang dikatakan oleh lawan bicara. Adapun ungkapan mirip (Lihat Pel.2-8) yaitu そうですが, tetapi そうですが adalah ekspresi ketika mendapat informasi baru yang belum diketahui si pembicara kemudian memahaminya, sedangkan そうですね digunakan untuk menunjukkan bahwa si pembicara berpikir hal yang sama, menyetujui hal yang telah dikenal, atau sependapat.',
    contoh: ['あしたは 日曜日ですね。……あ、そうですね。'],
    artiContoh: ['Besok hari Minggu, ya. ……O, ya betul.'],
  },
]
