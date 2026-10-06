import type { Bunpou } from '@/types/bab'

// 2 pola dari 文型 (halaman cetak 22)
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'ここ／そこ／あそこ は ～です',
    penjelasan:
      'ここ、そこ、あそこ menunjukkan tempat dan dipakai sebagai Kata Benda. ここ = tempat si pembicara berada, そこ = tempat lawan bicara berada, あそこ = tempat jauh dari keduanya.',
    contoh: ['ここは 食堂です。'],
    artiContoh: ['Di sini kantin.'],
  },
  {
    no: 2,
    pola: 'Kata Benda は 場所（ここ／そこ／あそこ） です',
    penjelasan:
      'Dengan memakai pola ini dapat dinyatakan tempat (atau telepon) berada.',
    contoh: ['電話は あそこです。'],
    artiContoh: ['Lift di sana.'],
  },
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'ここ／そこ／あそこ／こちら／そちら／あちら',
    penjelasan:
      'ここ・そこ・あそこ menunjukkan tempat: tempat si pembicara, tempat lawan bicara, dan tempat yang jauh dari keduanya. こちら・そちら・あちら menunjukkan arah, tetapi juga dapat dipakai untuk menunjukkan tempat yang dapat dilihat oleh mata yang digantikan dengan ここ・そこ・あそこ — dalam hal ini dipakai untuk menyatakan perasaan yang lebih sopan.',
    contoh: ['お手洗いは あそこです。'],
    artiContoh: ['Kamar kecil di sana.'],
  },
  {
    no: 2,
    pola: 'Kata Benda は tempat です',
    penjelasan:
      'Dengan menggunakan pola kalimat ini, dapat dinyatakan tempat di mana benda, tempat, atau orang berada.',
    contoh: ['電話は 2階です。', '山田さんは 事務所です。'],
    artiContoh: ['Telepon di lantai dua.', 'Sdr. Yamada di kantor.'],
  },
  {
    no: 3,
    pola: 'どこ／どちら',
    penjelasan:
      'どこ adalah Kata Tanya untuk tempat, dan どちら adalah Kata Tanya untuk bertanya arah. Untuk bertanya tempat, adakalanya digunakan どちら. Dalam hal ini, ungkapan menjadi lebih sopan daripada menggunakan どこ.',
    contoh: ['お手洗いは どこですか。……あそこです。', 'エレベーターは どちらですか。……そちらです。'],
    artiContoh: ['Di mana kamar kecil? ……Di sana.', 'Lift di sebelah mana? ……Di sebelah sana.'],
  },
  {
    no: 4,
    pola: 'Kata Benda₁ の Kata Benda₂',
    penjelasan:
      'Jika Kata Benda₁ adalah nama negara dan Kata Benda₂ adalah produknya, maka Kata Benda₁ の berarti buatan dari negara tersebut. Kalau Kata Benda₁ adalah nama perusahaan, dan Kata Benda₂ adalah produknya, Kata Benda₁ の berarti buatan perusahaan tersebut. Untuk kedua pertanyaan digunakan Kata Tanya どこ.',
    contoh: ['これは どこの コンピューターですか。……日本の コンピューターです。'],
    artiContoh: ['Ini komputer buatan mana? ……Komputer buatan Jepang.'],
  },
  {
    no: 5,
    pola: 'お～',
    penjelasan:
      'Prefiks お dibubuhkan pada hal-hal yang bersangkut dengan lawan bicara atau orang pihak ketiga untuk menyatakan rasa hormat dari si pembicara.',
    contoh: ['［お］国は どちらですか。'],
    artiContoh: ['Berasal dari mana?'],
  },
]
