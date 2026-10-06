import type { Kaiwa } from '@/types/bab'

// 会話 第40課「友達が できたか どうか、心配です」 — Honsatsu idx 137.
// arti: PDF Indonesia "Pelajaran 40 · II. Terjemahan · Percakapan" (idx 115), 1:1.
// Pembicara: クララ (Clara) dan 伊藤先生 (Ibu guru Ito).
export const kaiwa: Kaiwa = {
  judul: '友達が できたか どうか、心配です',
  audio: '/audio/bab40_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: 'クララ',
      teks: '先生、ハンスは 学校で どうして でしょうか。',
      arti: 'Ibu guru, bagaimana Hans di sekolah?',
      furigana: [
        { base: '先生', ruby: 'せんせい' },
        { base: '学校', ruby: 'がっこう' },
      ],
    },
    {
      no: 2,
      pembicara: '伊藤先生',
      teks: '友達が できたか かどうか、心配なんですか……。',
      arti: '(Saya) Khawazir apakah dapat teman atau tidak…',
      furigana: [
        { base: '伊藤', ruby: 'いとう' },
        { base: '先生', ruby: 'せんせい' },
        { base: '友達', ruby: 'ともだち' },
        { base: '心配', ruby: 'しんぱい' },
      ],
    },
    {
      no: 3,
      pembicara: '伊藤先生',
      teks: 'ハンス君は クラスで とても 人気が あります。',
      arti: 'Sdr. Hans sangat disenangi teman sekelasnya.',
      furigana: [
        { base: '伊藤', ruby: 'いとう' },
        { base: '先生', ruby: 'せんせい' },
        { base: '君', ruby: 'きみ' },
        { base: '人気', ruby: 'にんきょう' },
      ],
    },
    {
      no: 4,
      pembicara: 'クララ',
      teks: 'そうですか。安心しました。勉強は どうですか。漢字が 大変だと 言っていますが……。',
      arti: 'O, begitu. (Saya) Tenang. Bagaimana pelajarannya? Katanya huruf Kanji yang sangat sulit…',
      furigana: [
        { base: '安心', ruby: 'あんしん' },
        { base: '勉強', ruby: 'べんきょう' },
        { base: '漢字', ruby: 'かんじ' },
        { base: '大変', ruby: 'たいへん' },
        { base: '言', ruby: 'い' },
      ],
    },
    {
      no: 5,
      pembicara: '伊藤先生',
      teks: '毎日 漢字の テストを していますが、ハンス君は いい 成績ですよ。',
      arti: 'Setiap hari adakan ujian huruf Kanji, lalu sdr. Hans nilainya bagus.',
      furigana: [
        { base: '伊藤', ruby: 'いとう' },
        { base: '先生', ruby: 'せんせい' },
        { base: '毎日', ruby: 'まいにち' },
        { base: '漢字', ruby: 'かんじ' },
        { base: '君', ruby: 'きみ' },
        { base: '成績', ruby: 'せいせき' },
      ],
    },
    {
      no: 6,
      pembicara: 'クララ',
      teks: 'そうですか。ありがとうございます。',
      arti: 'O, begitu. Terima kasih banyak.',
    },
    {
      no: 7,
      pembicara: '伊藤先生',
      teks: 'ところで、もうすぐ 運動会ですが、お父さんも いらっしゃいますか。',
      arti: 'Ngomong-ngomong, sebentar lagi akan ada lomba olah raga, apakah ayahnya juga datang?',
      furigana: [
        { base: '伊藤', ruby: 'いとう' },
        { base: '先生', ruby: 'せんせい' },
        { base: '運動会', ruby: 'うんどうかい' },
        { base: '父', ruby: 'ちち' },
      ],
    },
    {
      no: 8,
      pembicara: 'クララ',
      teks: 'ええ。',
      arti: 'Ya.',
    },
    {
      no: 9,
      pembicara: '伊藤先生',
      teks: 'ハンス君が 学校で どんな 様子か、ぜひ 見て ください。',
      arti: 'Silakan lihat bagaimana kondisi sdr. Hans di sekolah.',
      furigana: [
        { base: '伊藤', ruby: 'いとう' },
        { base: '先生', ruby: 'せんせい' },
        { base: '君', ruby: 'きみ' },
        { base: '学校', ruby: 'がっこう' },
        { base: '様子', ruby: 'ようす' },
        { base: '見', ruby: 'み' },
      ],
    },
    {
      no: 10,
      pembicara: 'クララ',
      teks: 'わかりました。これからも よろしく お願いします。',
      arti: 'Baik. Selanjutnya, tolong perhatikannya juga!',
      furigana: [{ base: '願', ruby: 'ねが' }],
    },
  ],
}