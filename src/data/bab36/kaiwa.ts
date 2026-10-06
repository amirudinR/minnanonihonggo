import type { Kaiwa } from '@/types/bab'

// 会話 第36課「頭と 体を 使うように しています」 — Honsatsu idx 105 / cetak 87 (marker "36" terverifikasi).
// arti: PDF Indonesia "Pelajaran 36 · II. Terjemahan · Percakapan: Berusaha Untuk Berolah Raga
// Setiap Hari." (idx 91 / cetak 70), 1:1.
export const kaiwa: Kaiwa = {
  judul: '頭と 体を 使うように しています',
  audio: '/audio/bab36_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: 'アナウンサー',
      teks: '皆さん、こんにちは。健康の 時間です。きょうの お客様は ここし 80歳の 小川 よねさんです。',
      arti:
        'Selamat siang, semuanya! Tamu hari ini Ibu Ogawa Yone yang kini berusia delapan puluh tahun.',
      furigana: [
        { base: '健康', ruby: 'けんこう' },
        { base: '時間', ruby: 'じかん' },
        { base: '客', ruby: 'きゃく' },
        { base: '歳', ruby: 'さい' },
      ],
    },
    { no: 2, pembicara: '小川 よね', teks: 'こんにちは。', arti: 'Selamat siang!' },
    {
      no: 3,
      pembicara: 'アナウンサー',
      teks: 'お元気ですね。何か 特別な ことを して いらっしゃいますか。',
      arti: 'Sehat, ya. Apakah Ibu melakukan sesuatu yang khusus?',
      furigana: [{ base: '元気', ruby: 'げんき' }, { base: '特別', ruby: 'とくべつ' }],
    },
    {
      no: 4,
      pembicara: '小川 よね',
      teks: '毎日 運動して、何でも 食べるように しています。',
      arti: 'Berusaha untuk berolah raga setiap hari.',
      furigana: [{ base: '毎日', ruby: 'まいにち' }, { base: '運動', ruby: 'うんどう' }],
    },
    {
      no: 5,
      pembicara: 'アナウンサー',
      teks: 'どんな 運動ですか。',
      arti: 'Olah raga yang bagaimana?',
      furigana: [{ base: '運動', ruby: 'うんどう' }],
    },
    {
      no: 6,
      pembicara: '小川 よね',
      teks: 'ダンスとか、水泳とか……。最近 タンコが 踊れるように なりました。',
      arti:
        'Dansa, atau berenang... Akhir-akhir ini saya bisa berenang sampai 500 meter.',
      furigana: [{ base: '水泳', ruby: 'すいえい' }, { base: '最近', ruby: 'さいきん' }, { base: '踊', ruby: 'おど' }],
    },
    {
      no: 7,
      pembicara: 'アナウンサー',
      teks: 'すごいですね。食べ物は？',
      arti: 'Hebat! Makanannya?',
      furigana: [{ base: '食', ruby: 'た' }],
    },
    {
      no: 8,
      pembicara: '小川 よね',
      teks: '何でも 食べますが、特に 魚が 好きです。毎日 違う 料理を 作るように しています。',
      arti:
        'Makan apa saja, terutama (saya) suka ikan. Setiap hari berusaha untuk membuat makanan yang berbeda-beda.',
      furigana: [
        { base: '魚', ruby: 'さかな' },
        { base: '毎日', ruby: 'まいにち' },
        { base: '料理', ruby: 'りょうり' },
        { base: '作', ruby: 'つく' },
      ],
    },
    {
      no: 9,
      pembicara: 'アナウンサー',
      teks: '頭と 体を よく 使って、いらっしゃるんですね。',
      arti: 'Sering memikirkan sesuatu dan menggerakkan badan, ya.',
      furigana: [{ base: '頭', ruby: 'あたま' }, { base: '体', ruby: 'からだ' }, { base: '使', ruby: 'つか' }],
    },
    {
      no: 10,
      pembicara: '小川 よね',
      teks: 'ええ。来年 フランスへ 行きたいと 思って、フランス語の 勉強も 始めました。',
      arti:
        'Ya. Tahun depan (saya) mau pergi ke Prancis. Oleh karena itu, (saya) mulai belajar bahasa Prancis juga.',
      furigana: [
        { base: '来年', ruby: 'らいねん' },
        { base: '行', ruby: 'い' },
        { base: '思', ruby: 'おも' },
        { base: '勉強', ruby: 'べんきょう' },
        { base: '始', ruby: 'はじ' },
      ],
    },
    {
      no: 11,
      pembicara: 'アナウンサー',
      teks: '何でも チャレンジする 気持ちが 大切なんですね。楽しい お話、どうも ありがとうございました。',
      arti:
        'Yang penting, sikap yang menantang terhadap apa saja, ya. Terima kasih banyak atas cerita yang menarik.',
      furigana: [
        { base: '気持ち', ruby: 'きもち' },
        { base: '大切', ruby: 'たいせつ' },
        { base: '話', ruby: 'はなし' },
      ],
    },
  ],
}