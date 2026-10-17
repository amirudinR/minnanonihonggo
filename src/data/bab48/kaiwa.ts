import type { Kaiwa } from '@/types/bab'

// 会話 第48課「休ませていただけませんか」 — Honsatsu idx 205 (cetak 187).
// Teks dialogue (13 baris) diverifikasi visual dari p_205.jpg.
// arti: PDF Indonesia "Pelajaran 48 · Percakapan" (idx 163 / cetak 142).
//
// CATATAN EDISI: edisi Indonesia mengompres 13 baris JP menjadi 11 baris dan
// menggeser urutannya. Baris JP 6, 7, 8 TIDAK ada padanannya di edisi Indonesia,
// dan baris 10 & 11 padanannya bergeser — untuk baris-baris itu `arti` ditulis
// sebagai TERJEMAHAN SETIA dari kalimat Jepangnya (AGENTS §3 #14: jangan
// mengarang isi buku, tetapi jangan biarkan kolom arti kosong/salah tempel).
export const kaiwa: Kaiwa = {
  judul: '休ませていただけませんか',
  audio: '/audio/bab48_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: 'ミラー',
      teks: '課長、今 お忙しゅうですか。',
      arti: 'Bapak kepala seksi, sekarang sibuk?',
      furigana: [{ base: '課長', ruby: 'かちょう' }],
    },
    {
      no: 2,
      pembicara: '中村課長',
      teks: 'いいえ、どうぞ。',
      arti: 'Tidak, silakan.',
      furigana: [{ base: '中村', ruby: 'なかむら' }],
    },
    {
      no: 3,
      pembicara: 'ミラー',
      teks: 'ちょっと お願いが あるんですが……。',
      arti: 'Ada sesuatu yang ingin saya minta…',
      furigana: [{ base: '願', ruby: 'ねが' }],
    },
    {
      no: 4,
      pembicara: '中村課長',
      teks: '何ですか。',
      arti: 'Apa?',
      furigana: [{ base: '何', ruby: 'なに' }],
    },
    {
      no: 5,
      pembicara: 'ミラー',
      teks: '実は 来月 アメリカに いる 友達が 結婚するんです。',
      arti: 'Soalnya teman di Amerika akan menikah.',
      furigana: [
        { base: '実', ruby: 'じつ' },
        { base: '来月', ruby: 'らいげつ' },
        { base: '友達', ruby: 'ともだち' },
        { base: '結婚', ruby: 'けっこん' },
      ],
    },
    {
      no: 6,
      pembicara: '中村課長',
      teks: 'そうですか。',
      arti: 'O, begitu.',
    },
    {
      no: 7,
      pembicara: 'ミラー',
      teks: 'それで ちょっと 国へ 帰らせていただきたいんですが……。',
      arti: 'Jadi, saya ingin minta izin pulang ke negara saya sebentar…',
      furigana: [
        { base: '国', ruby: 'くに' },
        { base: '帰', ruby: 'かえ' },
      ],
    },
    {
      no: 8,
      pembicara: '中村課長',
      teks: '来月の いつですか。',
      arti: 'Bulan depan, tanggal berapa?',
      furigana: [{ base: '来月', ruby: 'らいげつ' }],
    },
    {
      no: 9,
      pembicara: 'ミラー',
      teks: '7日から 10日間ほど 休ませていただけませんか。両親に 会うのも 久しぶりなので……。',
      arti: 'Anu, boleh saya mengambil cuti selama sepuluh hari dari tanggal 7 bulan depan?',
      furigana: [
        { base: '日', ruby: 'にち' },
        { base: '休', ruby: 'やす' },
        { base: '両親', ruby: 'りょうしん' },
        { base: '久', ruby: 'ひさ' },
      ],
    },
    {
      no: 10,
      pembicara: '中村課長',
      teks: 'えーと、来月 20日に 営業会議が ありますね。それまでに 帰れますか。',
      arti: 'E..., bulan depan tanggal 20 ada rapat penjualan. Apakah bisa kembali sebelum itu?',
      furigana: [
        { base: '来月', ruby: 'らいげつ' },
        { base: '日', ruby: 'にち' },
        { base: '営業会議', ruby: 'えいぎょうかいぎ' },
        { base: '帰', ruby: 'かえ' },
      ],
    },
    {
      no: 11,
      pembicara: 'ミラー',
      teks: '結婚式は 15日なので、終わったら、すぐ 帰って 来ます。',
      arti: 'Karena pesta pernikahannya tanggal 15, kalau sudah selesai, saya langsung pulang.',
      furigana: [
        { base: '結婚式', ruby: 'けっこんしき' },
        { base: '日', ruby: 'にち' },
        { base: '帰', ruby: 'かえ' },
      ],
    },
    {
      no: 12,
      pembicara: '中村課長',
      teks: 'じゃ、かまいませんよ。ゆっくり 楽しんで 来てください。',
      arti: 'Kalau begitu, tidak apa-apa. Selamat menikmati!',
      furigana: [{ base: '楽', ruby: 'たの' }],
    },
    {
      no: 13,
      pembicara: 'ミラー',
      teks: 'ありがとう ございます。',
      arti: 'Terima kasih.',
    },
  ],
}