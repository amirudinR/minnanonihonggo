import type { Kaiwa } from '@/types/bab'

// 会話 第30課「チケットを 予約して おきます」 — Honsatsu idx 53 (cetak 35).
//
// CATATAN PENTING: bagian "Percakapan" pada PDF terjemahan Indonesia di idx 55 (cetak 34)
// berjudul "Sebaiknya Mempersiapkan Kantong Darurat." dan isinya percakapan Miller &
// Suzuki membahas kantong darurat — TIDAK sama dengan 会話 第30課 di Honsatsu (reservasi
// tiket). Sub-bagian "III. Kata-Kata Referensi" (idx 56) juga membahas 非常の場合, jadi
// teks Indonesia tersebut tampaknya milik bab lain dan tidak boleh ditempelkan ke dialog
// di bawah.
//
// Karena tidak ada padanan Indonesia yang sah untuk 会話 第30課, `arti` di bawah
// diterjemahkan dari teks JP memakai register yang sama dengan buku Indonesia
// ("sdr.", "(saya)"). Teks JP + furigana diambil apa adanya dari Honsatsu.
export const kaiwa: Kaiwa = {
  judul: 'チケットを 予約して おきます',
  audio: '/audio/bab30_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: 'ミラー',
      teks: '課長、ニューヨーク 出張の 予定表と 資料が できました。',
      arti: 'Kacab, jadwal acara dan dokumen untuk perjalanan tugas ke New York sudah selesai.',
      furigana: [
        { base: '課長', ruby: 'かちょう' },
        { base: '出張', ruby: 'しゅっちang' },
        { base: '予定表', ruby: 'よていひょう' },
        { base: '資料', ruby: 'しりょう' },
      ],
    },
    {
      no: 2,
      pembicara: '中村課長',
      teks: 'ご苦労さま。資料は あとで 見て おきますから、そこに 置いておいて ください。',
      arti: 'Kerja bagus. Dokumennya akan saya baca nanti, jadi tolong taruh di sana.',
      furigana: [
        { base: '中村課長', ruby: 'なかむらかちょう' },
        { base: '苦労', ruby: 'くろう' },
        { base: '資料', ruby: 'しりょう' },
        { base: '見', ruby: 'み' },
        { base: '置', ruby: 'お' },
      ],
    },
    { no: 3, pembicara: 'ミラー', teks: 'はい。', arti: 'Baik.' },
    {
      no: 4,
      pembicara: '中村課長',
      teks: '予定表は これですね。ホワイトさんには もう 連絡して ありますか。',
      arti: 'Jadwal acaranya ini ya. Apakah sudah diberi tahu kepada sdr. White?',
      furigana: [
        { base: '中村課長', ruby: 'なかむらかちょう' },
        { base: '予定表', ruby: 'よていひょう' },
        { base: '連絡', ruby: 'れんらく' },
      ],
    },
    {
      no: 5,
      pembicara: 'ミラー',
      teks: 'はい。あのう、この 日の 午後は 予定が ないんですが……。',
      arti: 'Sudah. Um, sore hari tanggal ini tidak ada acara…',
      furigana: [{ base: '午後', ruby: 'ごご' }],
    },
    { no: 6, pembicara: '中村課長', teks: 'ああ、そうですね。', arti: 'Oh, ya.' },
    {
      no: 7,
      pembicara: 'ミラー',
      teks: '何か ご希望が ありますか。',
      arti: 'Apakah ada sesuatu yang (saya) inginkan?',
      furigana: [{ base: '希望', ruby: 'きぼう' }],
    },
    {
      no: 8,
      pembicara: '中村課長',
      teks: 'そうですね。一度 ブロードウェイで ミュージカルを 見たいと 思うんですが……。',
      arti: 'Ya. Saya pernah berpikir ingin melihat musikal di Broadway…',
      furigana: [
        { base: '中村課長', ruby: 'なかむらかちょう' },
        { base: '見', ruby: 'み' },
        { base: '思', ruby: 'おも' },
      ],
    },
    {
      no: 9,
      pembicara: 'ミラー',
      teks: 'それは いいですね。チケットを 予約して おきましょうか。',
      arti: 'Itu bagus sekali. Saya akan memesan tiketnya, ya.',
      furigana: [{ base: '予約', ruby: 'よやく' }],
    },
    {
      no: 10,
      pembicara: '中村課長',
      teks: 'ええ、お願いします。',
      arti: 'Ya, tolong.',
      furigana: [{ base: '中村課長', ruby: 'なかむらかちょう' }],
    },
  ],
}