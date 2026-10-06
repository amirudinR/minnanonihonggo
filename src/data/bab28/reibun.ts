import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 28 — JP: Honsatsu 第28課「例文」(idx 36 / cetak 18).
// arti: PDF Indonesia "Pelajaran 28 · II. Terjemahan · Contoh Kalimat" (idx 43 / cetak 22).
// CATATAN EDISI: set Contoh Kalimat kedua edisi TIDAK sama persis. Butir 1, 3, 4, 5
// ada pas 1:1 di PDF Indonesia; butir 2, 6, 7 tidak (ID: butir 2 = "belajar sambil
// mendengarkan musik", 6 = "restoran sushi", 7 = "Universitas Fuji"). Untuk butir
// yang tidak ada di edisi Indonesia, arti = terjemahan setia dari teks Honsatsu.
export const reibun: ReibunItem[] = [
  {
    kalimat: '眠い とき、ガムを かみながら 運転します。',
    arti: 'Ketika mengantuk, saya menyetir sambil makan permen karet.',
    furigana: [
      { base: '眠', ruby: 'ねむ' },
      { base: '運転', ruby: 'うんてん' },
    ],
  },
  {
    kalimat: '……そうですか。わたしは 車を 止めて、しばらく 寝ます。',
    arti: '……O, begitu. Saya menghentikan mobil, kemudian tidur sebentar.',
    furigana: [
      { base: '車', ruby: 'くるま' },
      { base: '止', ruby: 'と' },
      { base: '寝', ruby: 'ね' },
    ],
  },
  {
    kalimat: '太郎、テレビを 見ながら 勉強しては いけませんよ。',
    arti: 'Taro, (Anda) tidak boleh belajar sambil menonton televisi, ya.',
    furigana: [
      { base: '太郎', ruby: 'たろう' },
      { base: '見', ruby: 'み' },
      { base: '勉強', ruby: 'べんきょう' },
    ],
  },
  {
    kalimat: '……はい。',
    arti: '……Ya.',
  },
  {
    kalimat: '彼は 働きながら 大学で 勉強しています。',
    arti: 'Ia kuliah di universitas sambil bekerja.',
    furigana: [
      { base: '彼', ruby: 'かれ' },
      { base: '働', ruby: 'はたら' },
      { base: '大学', ruby: 'だいがく' },
      { base: '勉強', ruby: 'べんきょう' },
    ],
  },
  {
    kalimat: '……そうですか。偉いですね。',
    arti: '……O, begitu. Hebat, ya.',
    furigana: [{ base: '偉', ruby: 'えら' }],
  },
  {
    kalimat: '休みの 日は いつも 何を していますか。',
    arti: 'Ketika hari libur, biasanya (Anda) melakukan apa?',
    furigana: [{ base: '休', ruby: 'やす' }, { base: '日', ruby: 'ひ' }, { base: '何', ruby: 'なに' }],
  },
  {
    kalimat: '……そうですね。だいたい 絵を かいています。',
    arti: '……Ya... Biasanya (saya) melukis.',
    furigana: [{ base: '絵', ruby: 'え' }],
  },
  {
    kalimat: 'ワット先生は 熱心だし、まじめだし、それに 経験も あります。',
    arti: 'Bapak Watt antusias, menarik, dan berpengalaman juga.',
    furigana: [
      { base: '先生', ruby: 'せんせい' },
      { base: '熱心', ruby: 'ねっしん' },
      { base: '経験', ruby: 'けいけん' },
    ],
  },
  {
    kalimat: '……いい 先生ですね。',
    arti: '……Guru yang baik, ya.',
    furigana: [{ base: '先生', ruby: 'せんせい' }],
  },
  {
    kalimat: '田中さんは よく 旅行を しますが、外国へは 行きませんね。',
    arti: 'Sdr. Tanaka sering bepergian, ya. Tetapi tidak pernah pergi ke luar negeri, ya.',
    furigana: [
      { base: '田中', ruby: 'たなか' },
      { base: '旅行', ruby: 'りょこう' },
      { base: '外国', ruby: 'がいこく' },
    ],
  },
  {
    kalimat:
      '……ええ。ことばも わからないし、習慣も 違うし、外国旅行は 大変ですよ。',
    arti:
      '……Ya. Karena bahasa juga tidak dimengerti, kebiasaan juga berbeda, jadi bepergian ke luar negeri memang merepotkan.',
    furigana: [
      { base: '習慣', ruby: 'しゅうかん' },
      { base: '違', ruby: 'ちが' },
      { base: '外国旅行', ruby: 'がいこくりょこう' },
      { base: '大変', ruby: 'たいへん' },
    ],
  },
  {
    kalimat: 'どうして さくら大学を 選んだんですか。',
    arti: 'Kenapa (Anda) memilih Universitas Sakura?',
    furigana: [{ base: '大学', ruby: 'だいがく' }, { base: '選', ruby: 'えら' }],
  },
  {
    kalimat:
      '……さくら大学は 父が 出た 大学だし、いい 先生も 多いし、それに 家から 近いですから。',
    arti:
      '……Karena Universitas Sakura adalah kampus ayah saya, di sana banyak guru yang baik, dan letaknya juga dekat dari rumah.',
    furigana: [
      { base: '大学', ruby: 'だいがく' },
      { base: '父', ruby: 'ちち' },
      { base: '出', ruby: 'で' },
      { base: '先生', ruby: 'せんせい' },
      { base: '多', ruby: 'おお' },
      { base: '家', ruby: 'いえ' },
      { base: '近', ruby: 'ちか' },
    ],
  },
]
