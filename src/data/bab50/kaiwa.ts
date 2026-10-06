import type { Kaiwa } from '@/types/bab'

// Teks JP + pembicara dari Honsatsu 第50課「会話」(idx 221 / cetak 203).
// arti dari PDF Indonesia "Percakapan" (idx 175 / cetak 154) — set cocok 1:1.
export const kaiwa: Kaiwa = {
  judul: '心から 感謝いたします',
  audio: '/audio/bab50_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '司会者',
      teks: '優勝 おめでとう ございます。すばらしい スピーチでした。',
      arti: 'Selamat atas kemenangannya! Pidato yang bagus.',
      furigana: [
        { base: '司会者', ruby: 'しかいしゃ' },
        { base: '優勝', ruby: 'ゆうしょう' },
      ],
    },
    { no: 2, pembicara: 'ミラー', teks: 'ありがとう ございます。', arti: 'Terima kasih.' },
    { no: 3, pembicara: '司会者', teks: '緊張 なさいましたか。', arti: 'Apakah (Anda) tegang?', furigana: [{ base: '緊張', ruby: 'きんちょう' }] },
    { no: 4, pembicara: 'ミラー', teks: 'はい、とても 緊張いたしました。', arti: 'Ya, sangat tegang.', furigana: [{ base: '緊張', ruby: 'きんちょう' }] },
    {
      no: 5,
      pembicara: '司会者',
      teks: 'テレビで 放送される ことは ご存じでしたか。',
      arti: 'Apakah (Anda) tahu kalau ini disiarkan di televisi?',
      furigana: [
        { base: '放送', ruby: 'ほうそう' },
        { base: '存', ruby: 'ぞん' },
      ],
    },
    {
      no: 6,
      pembicara: 'ミラー',
      teks: 'はい。ビデオに 撮って、アメリカの 両親にも 見せたいと 思って おります。',
      arti: 'Ya. Saya merekamnya di video dan ingin memperlihatkannya kepada kedua orang tua saya di Amerika.',
      furigana: [
        { base: '撮', ruby: 'と' },
        { base: '両親', ruby: 'りょうしん' },
        { base: '見', ruby: 'み' },
        { base: '思', ruby: 'おも' },
      ],
    },
    {
      no: 7,
      pembicara: '司会者',
      teks: '賞金は 何に お使いに なりますか。',
      arti: 'Hadiah uangnya mau digunakan untuk apa?',
      furigana: [
        { base: '賞金', ruby: 'しょうきん' },
        { base: '何', ruby: 'なに' },
        { base: '使', ruby: 'つか' },
      ],
    },
    {
      no: 8,
      pembicara: 'ミラー',
      teks: 'そうですね。 わたしは 動物が 好きで、子どもの ときから アフリカへ 行くのが 夢でした。',
      arti: 'Ya... Saya suka hewan, dan sejak kecil impian saya adalah pergi ke Afrika.',
      furigana: [
        { base: '動物', ruby: 'どうぶつ' },
        { base: '好', ruby: 'す' },
        { base: '子', ruby: 'こ' },
        { base: '行', ruby: 'い' },
        { base: '夢', ruby: 'ゆめ' },
      ],
    },
    { no: 9, pembicara: '司会者', teks: 'じゃ、アフリカへ 行かれますか。', arti: 'Kalau begitu, pergi ke Afrika?', furigana: [{ base: '行', ruby: 'い' }] },
    {
      no: 10,
      pembicara: 'ミラー',
      teks: 'はい。アフリカの 自然の 中で きりんや 象を 見たいと 思います。',
      arti: 'Ya. Saya ingin melihat jerapah dan gajah di alam Afrika.',
      furigana: [
        { base: '自然', ruby: 'しぜん' },
        { base: '中', ruby: 'なか' },
        { base: '象', ruby: 'ぞう' },
        { base: '見', ruby: 'み' },
        { base: '思', ruby: 'おも' },
      ],
    },
    { no: 11, pembicara: '司会者', teks: '子どもの ころの 夢が かなうんですね。', arti: 'Impian masa kecil terkabul, ya.', furigana: [{ base: '子', ruby: 'こ' }, { base: '夢', ruby: 'ゆめ' }] },
    { no: 12, pembicara: 'ミラー', teks: 'はい。あのう、最後に ひとこと よろしいでしょうか。',
      arti: 'Baik. Um, mau menyampaikan satu kata terakhir?', furigana: [{ base: '最後', ruby: 'さいご' }] },
    { no: 13, pembicara: '司会者', teks: 'どうぞ。', arti: 'Silakan.' },
    {
      no: 14,
      pembicara: 'ミラー',
      teks: 'この スピーチ大会に 出る ために、いろいろ ご協力 くださった 皆様に 心から 感謝いたします。',
      arti: 'Saya mengucapkan banyak terima kasih yang tulus dari hati kepada semuanya yang mendukung saya.',
      furigana: [
        { base: '大会', ruby: 'たいかい' },
        { base: '出', ruby: 'で' },
        { base: '協力', ruby: 'きょうりょく' },
        { base: '皆様', ruby: 'みなさま' },
        { base: '心', ruby: 'こころ' },
        { base: '感謝', ruby: 'かんしゃ' },
      ],
    },
  ],
}
