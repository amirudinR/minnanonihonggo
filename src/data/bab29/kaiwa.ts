import type { Kaiwa } from '@/types/bab'

// 会話 第29課「忘れ物を してしまったんです」 — Honsatsu idx 45 (cetak 27).
// arti: PDF Indonesia "Pelajaran 29 · II. Terjemahan · Percakapan: Ketinggalan Barang."
// (idx 49, cetak 28), 1:1 per baris dialog.
// Catatan: buku Indonesia menulis "Stasiun Shinjuku" pada baris 12-14, sedangkan JP
// 「四ツ谷駅」 (Yotsuya). Sesuai aturan "1:1 dari PDF Indonesia", cetakan buku dipakai
// apa adanya; furigana JP tetap mengikuti Honsatsu.
export const kaiwa: Kaiwa = {
  judul: '忘れ物を してしまったんです',
  audio: '/audio/bab29_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: 'イー',
      teks: 'すみません。今の 電車に 忘れ物を してしまったんですが……。',
      arti: 'Maaf. (Saya) Ketinggalan barang di kereta yang tadi…',
      furigana: [{ base: '電車', ruby: 'でんしゃ' }, { base: '忘', ruby: 'わす' }],
    },
    {
      no: 2,
      pembicara: '駅員',
      teks: '……何を 忘れたんですか。',
      arti: 'Ketinggalan apa?',
      furigana: [{ base: '駅員', ruby: 'えきいん' }, { base: '忘', ruby: 'わす' }],
    },
    {
      no: 3,
      pembicara: 'イー',
      teks: '青い かばんです。この くらいの……。',
      arti: 'Tas yang biru. Kira-kira begini…',
      furigana: [{ base: '青', ruby: 'あお' }],
    },
    {
      no: 4,
      pembicara: '駅員',
      teks: '外側に 大きい ポケットが 付いていますね。',
      arti: 'Di bagian luar berkantong besar.',
      furigana: [{ base: '駅員', ruby: 'えきいん' }, { base: '外側', ruby: 'そとがわ' }, { base: '付', ruby: 'つ' }],
    },
    {
      no: 5,
      pembicara: '駅員',
      teks: 'どの 辺ですか。',
      arti: 'Meletakkan di sekitar mana?',
      furigana: [{ base: '駅員', ruby: 'えきいん' }, { base: '辺', ruby: 'べん' }],
    },
    {
      no: 6,
      pembicara: 'イー',
      teks: 'よく 覚えて いません。でも、網棚の 上に 置きました。',
      arti: 'Kurang ingat. Tetapi, meletakkannya di atas rak bagian.',
      furigana: [{ base: '覚', ruby: 'おぼ' }, { base: '網棚', ruby: 'あみだな' }, { base: '上', ruby: 'うえ' }, { base: '置', ruby: 'お' }],
    },
    {
      no: 7,
      pembicara: '駅員',
      teks: '中に 何が 入っていますか。',
      arti: 'Di dalamnya berisi apa saja?',
      furigana: [{ base: '駅員', ruby: 'えきいん' }, { base: '入', ruby: 'はい' }],
    },
    {
      no: 8,
      pembicara: 'イー',
      teks: 'えーと、確か 本と 傘が 入っています。',
      arti: 'E, kalau tidak salah, berisi buku dan payung.',
      furigana: [{ base: '確', ruby: 'たしか' }, { base: '傘', ruby: 'かさ' }, { base: '入', ruby: 'はい' }],
    },
    {
      no: 9,
      pembicara: '駅員',
      teks: 'じゃ、すぐ 連絡しますから、ちょっと 待って いて ください。……',
      arti: 'Kalau begitu, (saya) akan periksa, tunggu sebentar. …',
      furigana: [{ base: '駅員', ruby: 'えきいん' }, { base: '連絡', ruby: 'れんらく' }, { base: '待', ruby: 'ま' }],
    },
    {
      no: 10,
      pembicara: '駅員',
      teks: 'ありましたよ。',
      arti: 'Ada.',
      furigana: [{ base: '駅員', ruby: 'えきいん' }],
    },
    {
      no: 11,
      pembicara: 'イー',
      teks: 'ああ、よかった。',
      arti: 'O, syukur.',
    },
    {
      no: 12,
      pembicara: '駅員',
      teks: '今 四ツ谷駅に ありますが、どう しますか。',
      arti: 'Sekarang ada di Stasiun Shinjuku, maunya bagaimana?',
      furigana: [{ base: '駅員', ruby: 'えきいん' }, { base: '四ツ谷駅', ruby: 'よつやえき' }],
    },
    {
      no: 13,
      pembicara: 'イー',
      teks: 'すぐ 取りに 行きます。',
      arti: 'Pergi ambil dengan segera.',
      furigana: [{ base: '取', ruby: 'と' }, { base: '行', ruby: 'い' }],
    },
    {
      no: 14,
      pembicara: '駅員',
      teks: 'じゃ、四ツ谷駅の 事務所へ 行って ください。',
      arti: 'Kalau begitu, pergi ke kantor Stasiun Shinjuku.',
      furigana: [{ base: '駅員', ruby: 'えきいん' }, { base: '四ツ谷駅', ruby: 'よつやえき' }, { base: '事務所', ruby: 'じむしょ' }, { base: '行', ruby: 'い' }],
    },
    {
      no: 15,
      pembicara: 'イー',
      teks: 'はい。どうも ありがとうございました。',
      arti: 'Ya. Terima kasih banyak.',
    },
  ],
}