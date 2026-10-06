import type { Kaiwa } from '@/types/bab'

// 会話 第31課「インターネットを 始めようと 思っています」 — Honsatsu idx 63 (hS_63, cetak 45).
// arti: PDF Indonesia "Pelajaran 31 · Percakapan: Berpikir Untuk Belajar Massak." (idx 61, cetak 40), 1:1.
// Catatan: edisi Indonesia memakai nama Ogawa untuk tokoh yang di JP bernama 永井;
// nama pembicara di bawah mengikuti buku JP (sesuai konvensi bab lain).
export const kaiwa: Kaiwa = {
  judul: 'インターネットを 始めようと 思っています',
  audio: '/audio/bab31_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '永井',
      teks: '来月から 勉強です。',
      arti: 'Mulai besok (saya) menjadi bujang.',
      furigana: [
        { base: '永井', ruby: 'ながい' },
        { base: '来月', ruby: 'らいげつ' },
        { base: '勉強', ruby: 'べんきょう' },
      ],
    },
    {
      no: 2,
      pembicara: 'ミラー',
      teks: 'えっ？',
      arti: 'Eh?',
    },
    {
      no: 3,
      pembicara: '永井',
      teks: '実は 大阪の 本社に 異動なんですよ。',
      arti: 'Soalnya saya pindah ke kantor pusat di Osaka.',
      furigana: [
        { base: '実', ruby: 'じつ' },
        { base: '大阪', ruby: 'おおさか' },
        { base: '本社', ruby: 'ほんしゃ' },
        { base: '異動', ruby: 'いどう' },
      ],
    },
    {
      no: 4,
      pembicara: 'ミラー',
      teks: '本社ですか。それは おめでとう ございます。でも、どうして 独身 に なるんですか。',
      arti: 'Kantor pusat? Saya mengucapkan selamat.\nTetapi, kenapa menjadi bujang?',
      furigana: [
        { base: '本社', ruby: 'ほんしゃ' },
        { base: '独身', ruby: 'どくしん' },
      ],
    },
    {
      no: 5,
      pembicara: '永井',
      teks: '妻と 子どもは 東京に 残るんです。',
      arti: 'Istri dan anak tinggal di Tokyo.',
      furigana: [
        { base: '妻', ruby: 'つま' },
        { base: '子', ruby: 'こ' },
        { base: '東京', ruby: 'とうきょう' },
        { base: '残', ruby: 'のこ' },
      ],
    },
    {
      no: 6,
      pembicara: 'ミラー',
      teks: 'えっ、いっしょに 行かないんですか。',
      arti: 'Eh, tidak pergi bersama-sama?',
      furigana: [{ base: '行', ruby: 'い' }],
    },
    {
      no: 7,
      pembicara: '永井',
      teks: '息子は 来年 大学の 入学試験が あるから、東京に 残るって 言うし、妻も 今の 会社を やめたくないと 言うんです。',
      arti: 'Ya. Kata anak laki-laki saya, dia tinggal di Tokyo karena ada ujian masuk universitas pada tahun depan, dan istri saya juga berkata bahwa tidak mau berhenti kerja dari perusahaan sekarang.',
      furigana: [
        { base: '息子', ruby: 'むすこ' },
        { base: '来年', ruby: 'らいねん' },
        { base: '大学', ruby: 'だいがく' },
        { base: '入学試験', ruby: 'にゅうがくしけん' },
        { base: '東京', ruby: 'とうきょう' },
        { base: '残', ruby: 'のこ' },
        { base: '言', ruby: 'い' },
        { base: '妻', ruby: 'つま' },
        { base: '会社', ruby: 'かいしゃ' },
        { base: '言', ruby: 'い' },
      ],
    },
    {
      no: 8,
      pembicara: 'ミラー',
      teks: 'へえ。別々に 住むんですか。',
      arti: 'O, karena itu tinggal sendiri-sendiri, ya.',
      furigana: [
        { base: '別々', ruby: 'べつべつ' },
        { base: '住', ruby: 'す' },
      ],
    },
    {
      no: 9,
      pembicara: '永井',
      teks: 'ええ。でも、月に 2、3回 週末に 帰る つもりです。',
      arti: 'Ya. Tetapi, sebulan dua atau tiga kali (saya) mau pulang ke rumah.',
      furigana: [
        { base: '月', ruby: 'つき' },
        { base: '回', ruby: 'かい' },
        { base: '週末', ruby: 'しゅうまつ' },
        { base: '帰', ruby: 'かえ' },
      ],
    },
    {
      no: 10,
      pembicara: 'ミラー',
      teks: '大変ですね。',
      arti: 'Berat, ya.',
      furigana: [{ base: '大変', ruby: 'たいへん' }],
    },
    {
      no: 11,
      pembicara: '小川',
      teks: 'でも普通の日は 暇ですから、インターネットを 始めよう と 思っています。',
      arti: 'Tetapi, karena ini kesempatan baik maka (saya) mau belajar massak.',
      furigana: [
        { base: '普通', ruby: 'ふつう' },
        { base: '日', ruby: 'ひ' },
        { base: '暇', ruby: 'ひま' },
        { base: '始', ruby: 'はじ' },
        { base: '思', ruby: 'おも' },
      ],
    },
    {
      no: 12,
      pembicara: 'ミラー',
      teks: 'そうですか。それも いいですね。',
      arti: 'Itu bagus.',
    },
  ],
}