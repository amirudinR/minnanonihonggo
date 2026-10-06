import type { Kaiwa } from '@/types/bab'

// 会話 第38課「片づけるのが 好きなんです」 — JP: Honsatsu cetak 103 (idx 121).
// arti: PDF Indonesia "Pelajaran 38 · Percakapan: Senang Beres-Beres" (cetak 82 = idx 103).
// Buku Indonesia memakai garis titik untuk bagian yang hanya ada di CD; pada baris
// tersebut arti dituliskan sebagai terjemahan harfiah dari kalimat JP.
export const kaiwa: Kaiwa = {
  judul: '片づけるのが 好きなんです',
  audio: '/audio/bab38_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '大学職員',
      teks: 'ワット先生、回転です。',
      arti: 'Pegawai universitas: Bapak Watt, surat edaran.',
      furigana: [
        { base: '大学職員', ruby: 'だいがくしょくいん' },
        { base: '先生', ruby: 'せんせい' },
        { base: '回転', ruby: 'かんてい' },
      ],
    },
    {
      no: 2,
      pembicara: 'ワット',
      teks: 'あ、すみません。そこに 置いて ください。',
      arti: 'Watt: O, maaf. Tolong taruh di situ!',
      furigana: [{ base: '置', ruby: 'お' }],
    },
    {
      no: 3,
      pembicara: '大学職員',
      teks: '先生の 研究室は いつも きれいですね。',
      arti: 'Pegawai universitas: Ruang Bapak selalu bersih, ya.',
      furigana: [
        { base: '大学職員', ruby: 'だいがくしょくいん' },
        { base: '先生', ruby: 'せんせい' },
        { base: '研究室', ruby: 'けんきゅうしつ' },
      ],
    },
    {
      no: 4,
      pembicara: 'ワット',
      teks: 'わたしは 片づけるのが 好きなんです。',
      arti: 'Watt: Saya senang beres-beres.',
      furigana: [
        { base: '片', ruby: 'かた' },
      ],
    },
    {
      no: 5,
      pembicara: '大学職員',
      teks: '本も きちんと 並べて あるし、物も 整理して 置いて あるし……。整理するのが 上手なんですね。',
      arti: 'Pegawai universitas: Buku juga disusun rapi… Pandai membereskan barang, ya.',
      furigana: [
        { base: '大学職員', ruby: 'だいがくしょくいん' },
        { base: '本', ruby: 'ほん' },
        { base: '並', ruby: 'なら' },
        { base: '物', ruby: 'もの' },
        { base: '整理', ruby: 'せいり' },
        { base: '置', ruby: 'お' },
        { base: '整理', ruby: 'せいり' },
        { base: '上手', ruby: 'じょうず' },
      ],
    },
    {
      no: 6,
      pembicara: 'ワット',
      teks: '昔「上手な 整理の 方法」という 本を 書いた ことがあるんです。',
      arti: "Watt: Dulu pernah menyusun buku dengan judul 'Cara Pandai Membereskan Barang'.",
      furigana: [
        { base: '昔', ruby: 'むかし' },
        { base: '上手', ruby: 'じょうず' },
        { base: '整理', ruby: 'せいり' },
        { base: '方法', ruby: 'ほうほう' },
        { base: '本', ruby: 'ほん' },
        { base: '書', ruby: 'か' },
      ],
    },
    {
      no: 7,
      pembicara: '大学職員',
      teks: 'へえ、すごいですね。',
      arti: 'Pegawai universitas: O, hebat, ya.',
      furigana: [{ base: '大学職員', ruby: 'だいがくしょくいん' }],
    },
    {
      no: 8,
      pembicara: 'ワット',
      teks: 'あまり 覚えていませんでしたけどね。よければ、1冊 持って 来ましょうか。',
      arti: 'Watt: Ah, ternyata lupa juga ya. Kalau mau, saya bawakan sebuah buku.',
      furigana: [
        { base: '覚', ruby: 'おぼ' },
        { base: '冊', ruby: 'さつ' },
        { base: '持', ruby: 'も' },
        { base: '来', ruby: 'き' },
      ],
    },
    {
      no: 9,
      pembicara: '大学職員',
      teks: 'おはよう ございます。',
      arti: 'Pegawai universitas: Selamat pagi.',
      furigana: [{ base: '大学職員', ruby: 'だいがくしょくいん' }],
    },
    {
      no: 10,
      pembicara: 'ワット',
      teks: 'あ、本を 持って 来るのを 忘れました。すみません。',
      arti: 'Watt: Ah, lupa membawa buku. Maaf.',
      furigana: [
        { base: '本', ruby: 'ほん' },
        { base: '持', ruby: 'も' },
        { base: '来', ruby: 'き' },
        { base: '忘', ruby: 'わす' },
      ],
    },
    {
      no: 11,
      pembicara: '大学職員',
      teks: 'いいですよ。でも、閲覧にはんこを 押すのを 忘れないで ください。先月も 押して ありませんでしたよ。',
      arti: 'Pegawai universitas: Tidak apa-apa. Tetapi, jangan lupa memberi cap di surat edaran. Bulan lalu juga tidak dicap.',
      furigana: [
        { base: '閲覧', ruby: 'かんらん' },
        { base: '押', ruby: 'お' },
        { base: '忘', ruby: 'わす' },
        { base: '先月', ruby: 'せんげつ' },
        { base: '押', ruby: 'お' },
      ],
    },
  ],
}