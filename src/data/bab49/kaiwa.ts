import type { Kaiwa } from '@/types/bab'

// 会話 第49課「よろしく お伝え ください」 — Honsatsu idx 213 (cetak 195).
// Teks dialogues diverifikasi visual dari c213a/c213b.
// arti: PDF Indonesia "Pelajaran 49 · Percakapan: Tolong Sampaikan Salam!" (idx 169 / cetak 148), 1:1.
export const kaiwa: Kaiwa = {
  judul: 'よろしく お伝え ください',
  audio: '/audio/bab49_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '先生',
      teks: 'はい、ひまわり小学校です。',
      arti: 'Halo, SD Himawari.',
      furigana: [{ base: '小学校', ruby: 'しょうがっこう' }],
    },
    {
      no: 2,
      pembicara: 'クララ',
      teks: 'おはよう ございます。5年2組の ハンス・シュミットの 母ですが、伊藤先生は いらっしゃいますか。',
      arti: 'Selamat pagi. Saya ibu dari Hans Schmidt di kelas 2V, apakah ada ibu guru Ito?',
      furigana: [
        { base: '伊藤', ruby: 'いとう' },
        { base: '先生', ruby: 'せんせい' },
      ],
    },
    {
      no: 3,
      pembicara: '先生',
      teks: 'まだなんですが………。',
      arti: 'Belum masuk…',
    },
    {
      no: 4,
      pembicara: 'クララ',
      teks: 'では、伊藤先生に 伝えて いただきたいんですが………。',
      arti: 'Kalau begitu, bisa titip pesan untuk ibu guru Ito?',
      furigana: [
        { base: '伊藤', ruby: 'いとう' },
        { base: '先生', ruby: 'せんせい' },
      ],
    },
    {
      no: 5,
      pembicara: '先生',
      teks: 'はい、何でしょうか。',
      arti: 'Ya, kenapa?',
      furigana: [{ base: '何', ruby: 'なに' }],
    },
    {
      no: 6,
      pembicara: 'クララ',
      teks: '実は ハンスが ゆうべ 熱を 出しまして、けさも まだ 下がらないんです。',
      arti: 'Soalnya tadi malam Hans demam, dan pagi ini demam belum turun juga.',
      furigana: [
        { base: '実', ruby: 'じつ' },
        { base: '熱', ruby: 'ねつ' },
        { base: '出', ruby: 'で' },
      ],
    },
    {
      no: 7,
      pembicara: '先生',
      teks: 'それは いけませんね。',
      arti: 'Itu tidak baik.',
    },
    {
      no: 8,
      pembicara: 'クララ',
      teks: 'それで きょうは 学校を 休ませて ので、先生に よろしく お伝え ください。',
      arti: 'Oleh karena itu, hari ini saya menyuruh anak saya untuk tidak masuk sekolah, tolong sampaikan salam kepada ibu guru!',
      furigana: [
        { base: '学校', ruby: 'がっこう' },
        { base: '先生', ruby: 'せんせい' },
      ],
    },
    {
      no: 9,
      pembicara: '先生',
      teks: 'わかりました。どうぞ お大事に。',
      arti: 'Baik. Semoga lekas sembuh!',
      furigana: [{ base: '大事', ruby: 'だいじ' }],
    },
    {
      no: 10,
      pembicara: 'クララ',
      teks: '失礼いたします。',
      arti: 'Terima kasih. Mari!',
      furigana: [{ base: '失礼', ruby: 'しつれい' }],
    },
  ],
}
