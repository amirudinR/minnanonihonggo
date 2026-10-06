import type { Kaiwa } from '@/types/bab'

// 会話 第47課「婚約したそうです」 — Honsatsu idx 197 (cetak 179).
// arti: PDF Indonesia "Pelajaran 47 · Percakapan: Katanya Telah Bertunangan." (idx 157), 1:1.
export const kaiwa: Kaiwa = {
  judul: '婚約したそうです',
  audio: '/audio/bab47_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '渡辺',
      teks: 'お先に 失礼します。',
      arti: 'Turun duluan.',
      furigana: [
        { base: '渡辺', ruby: 'わたなべ' },
        { base: '先', ruby: 'さき' },
        { base: '失礼', ruby: 'しつれい' },
      ],
    },
    {
      no: 2,
      pembicara: '高橋',
      teks: 'あっ、渡辺さん、ちょっと 待って。僕も 帰りますから……。',
      arti: 'Ah, sdr. Watanabe, tunggu sebentar. Saya juga pulang.',
      furigana: [
        { base: '高橋', ruby: 'たかはし' },
        { base: '渡辺', ruby: 'わたなべ' },
        { base: '待', ruby: 'ま' },
        { base: '僕', ruby: 'ぼく' },
        { base: '帰', ruby: 'かえ' },
      ],
    },
    {
      no: 3,
      pembicara: '渡辺',
      teks: 'すみません、ちょっと 急ぎますから。',
      arti: 'Maaf, saya buru-buru.',
      furigana: [
        { base: '渡辺', ruby: 'わたなべ' },
        { base: '急', ruby: 'いそ' },
      ],
    },
    {
      no: 4,
      pembicara: '高橋',
      teks: '渡辺さん、このごろ 早く 帰りますね。',
      arti: 'Sdr. Watanabe, akhir-akhir ini cepat pulang, ya. Rupanya dapat pacar.',
      furigana: [
        { base: '高橋', ruby: 'たかはし' },
        { base: '渡辺', ruby: 'わたなべ' },
        { base: '早', ruby: 'はや' },
        { base: '帰', ruby: 'かえ' },
      ],
    },
    {
      no: 5,
      pembicara: '林',
      teks: 'どうも 恋人が できたようです。 この間 婚約したそうですよ。',
      arti: 'O, tidak tahu, ya? Beberapa saat lalu, sudah bertunangan.',
      furigana: [
        { base: '林', ruby: 'はやし' },
        { base: '恋人', ruby: 'こいびと' },
        { base: '間', ruby: 'あいだ' },
        { base: '婚約', ruby: 'こんやく' },
      ],
    },
    {
      no: 6,
      pembicara: '高橋',
      teks: 'えっ、だれですか、相手は。',
      arti: 'Eh, siapa pasangannya?',
      furigana: [
        { base: '高橋', ruby: 'たかはし' },
        { base: '相手', ruby: 'あいて' },
      ],
    },
    {
      no: 7,
      pembicara: '林',
      teks: 'IMC の 鈴木さんです。',
      arti: 'Sdri. Suzuki dari IMC.',
      furigana: [
        { base: '林', ruby: 'はやし' },
        { base: '鈴木', ruby: 'すずき' },
      ],
    },
    {
      no: 8,
      pembicara: '高橋',
      teks: 'えっ、鈴木さん？',
      arti: 'Eh, sdr. Suzuki?',
      furigana: [
        { base: '高橋', ruby: 'たかはし' },
        { base: '鈴木', ruby: 'すずき' },
      ],
    },
    {
      no: 9,
      pembicara: '林',
      teks: '去年 渡辺さんの 友達の 結婚式で 知り合ったそうですよ。',
      arti: 'Berkenalan ketika pernikahan Bapak Watt.',
      furigana: [
        { base: '去年', ruby: 'きょねん' },
        { base: '渡辺', ruby: 'わたなべ' },
        { base: '友達', ruby: 'ともだち' },
        { base: '結婚式', ruby: 'けっこんしき' },
        { base: '知', ruby: 'し' },
        { base: '合', ruby: 'あ' },
      ],
    },
    {
      no: 10,
      pembicara: '高橋',
      teks: 'そうですか。',
      arti: 'O, begitu.',
      furigana: [{ base: '高橋', ruby: 'たかはし' }],
    },
    {
      no: 11,
      pembicara: '林',
      teks: 'ところで、高橋さんは？',
      arti: 'Ngomong-ngomong, bagaimana sdr. Takahashi?',
      furigana: [
        { base: '林', ruby: 'はやし' },
        { base: '高橋', ruby: 'たかはし' },
      ],
    },
    {
      no: 12,
      pembicara: '高橋',
      teks: '僕ですか。僕は 仕事が 恋人です。',
      arti: 'Saya? Pacar saya adalah pekerjaan.',
      furigana: [
        { base: '高橋', ruby: 'たかはし' },
        { base: '僕', ruby: 'ぼく' },
        { base: '仕事', ruby: 'しごと' },
        { base: '恋人', ruby: 'こいびと' },
      ],
    },
  ],
}