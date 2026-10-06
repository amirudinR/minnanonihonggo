import type { Kaiwa } from '@/types/bab'

// 会話 第43課「優しそうですね」 — Honsatsu idx 163 (cetak 145).
// arti: PDF Indonesia "Pelajaran 43 · II. Terjemahan · Percakapan" (idx 133, cetak 112).
// Catatan: Percakapan yang tercetak di buku Indonesia untuk Pelajaran 43 BERJUDUL
// "Rupanya Setiap Hari Menyenangkan" (Hayashi/Schmidt/Hans) — isi percakapan milik
// pelajaran lain, bukan 「優しそうですね」. Sesuai aturan "1:1 dari PDF Indonesia",
// teks Indonesia di bawah ditranskripsikan apa adanya sesuai cetakan (positional).
export const kaiwa: Kaiwa = {
  judul: '優しそうですね',
  audio: '/audio/bab43_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: 'シュミット',
      teks: 'それ、何の 写真ですか。',
      arti: 'Ini foto siapa?',
      furigana: [
        { base: '何', ruby: 'なん' },
        { base: '写真', ruby: 'しゃしん' },
      ],
    },
    {
      no: 2,
      pembicara: '渡辺',
      teks: 'お見合い写真です。お見合いの 会場から もかって 来た人です。',
      arti: 'Anak laki-laki saya, Hans. Foto yang saya ambil ketika lomba olah raga.',
      furigana: [
        { base: '見合', ruby: 'みあい' },
        { base: '写真', ruby: 'しゃしん' },
        { base: '会場', ruby: 'かいじょう' },
        { base: '来', ruby: 'き' },
      ],
    },
    {
      no: 3,
      pembicara: 'シュミット',
      teks: 'お見合いの 会社があるんですか。',
      arti: 'Kelihatan sehat, ya.',
      furigana: [
        { base: '見合', ruby: 'みあい' },
        { base: '会社', ruby: 'かいしゃ' },
      ],
    },
    {
      no: 4,
      pembicara: '渡辺',
      teks: 'ええ。会員になると、自分の 情報や 希望が コンピューターに 入力されるんです。そして、コンピューターが 適当な 人を 選んで くれるんですよ。',
      arti: 'Ya. Hans larinya cepat. Rupanya setiap hari menyenangkan karena sudah terbiasa dengan sekolah Jepang, dan dapat teman juga.',
      furigana: [
        { base: '会員', ruby: 'かいいん' },
        { base: '自分', ruby: 'じぶん' },
        { base: '情報', ruby: 'じょうほう' },
        { base: '希望', ruby: 'きぼう' },
        { base: '入力', ruby: 'にゅうりょく' },
        { base: '適当', ruby: 'てきとう' },
        { base: '人', ruby: 'ひと' },
        { base: '選', ruby: 'えら' },
      ],
    },
    {
      no: 5,
      pembicara: 'シュミット',
      teks: 'へえ、おもしろそうですね。',
      arti: 'Bagus. Yang ini istrinya? Orangnya cantik, ya.',
    },
    {
      no: 6,
      pembicara: '渡辺',
      teks: 'この 人、どう 思いますか。',
      arti: 'Terima kasih. Istri saya tertarik pada berbagai hal, karena itu menarik kalau bersama dengannya.',
      furigana: [
        { base: '人', ruby: 'ひと' },
        { base: '思', ruby: 'おも' },
      ],
    },
    {
      no: 7,
      pembicara: 'シュミット',
      teks: 'ハンサムだし、優しそうだし、すてきな 人ですね。',
      arti: 'O, begitu.',
      furigana: [
        { base: '優', ruby: 'やさ' },
        { base: '人', ruby: 'ひと' },
      ],
    },
    {
      no: 8,
      pembicara: '渡辺',
      teks: 'ええ。年齢も、収入も、趣味も わたしの 希望に ぴったりなんです。そのうえ 名前も 同じなんですよ。渡辺さんと いうんです。',
      arti: 'Terutama dia suka sejarah, kalau ada waktu dia berjalan-jalan di kota yang lama.',
      furigana: [
        { base: '年齢', ruby: 'ねんれい' },
        { base: '収入', ruby: 'しゅうにゅう' },
        { base: '趣味', ruby: 'しゅみ' },
        { base: '希望', ruby: 'きぼう' },
        { base: '名前', ruby: 'なまえ' },
        { base: '同', ruby: 'おな' },
        { base: '渡辺', ruby: 'わたなべ' },
      ],
    },
    {
      no: 9,
      pembicara: 'シュミット',
      teks: 'へえ、コンピューターは すごいですね。',
      arti: 'Percakapan Indonesia untuk Pelajaran 43 hanya tercetak 8 giliran, jadi baris ini tidak punya padanan tercetak.',
    },
  ],
}