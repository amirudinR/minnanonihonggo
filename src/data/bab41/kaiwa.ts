import type { Kaiwa } from '@/types/bab'

// Teks JP + pembicara dari Honsatsu 第41課「会話」(idx 147 / cetak 129).
// CATATAN EDISI: PDF Indonesia "Percakapan" (idx 121 / cetak 100) memakai
// Percakapan yang BERBEDA dari Honsatsu (Indonesia: 「Selamat Menempuh Hidup Baru」;
// Honsatsu: 「荷物を 預かって いただけませんか」). Karena arti wajib 1:1 dan tidak
// boleh dikarang, arti di sini adalah terjemahan setia dari teks Honsatsu
// (yang juga cocok dengan trek audio bab41_kaiwa.mp3), bukan dari edisi Indonesia.
export const kaiwa: Kaiwa = {
  judul: '荷物を 預かって いただけませんか',
  audio: '/audio/bab41_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: 'ミラー',
      teks: '小川さん、ちょっと お願いが あるんですが……。',
      arti: 'Sdr. Ogawa, ada sedikit permintaan…….',
      furigana: [{ base: '小川', ruby: 'おがわ' }, { base: '願', ruby: 'ねが' }],
    },
    { no: 2, pembicara: '小川幸子', teks: '何ですか。', arti: 'Ada apa?', furigana: [{ base: '何', ruby: 'なん' }] },
    {
      no: 3,
      pembicara: 'ミラー',
      teks: '実は きょうの 夕方 デパートから 荷物が 届く 予定なんですが、出かけなければ ならない 用事が できて しまったんです。',
      arti: 'Sebenarnya, sore ini barang dari department store dijadwalkan sampai, tetapi muncul urusan yang harus saya keluar.',
      furigana: [
        { base: '実', ruby: 'じつ' },
        { base: '夕方', ruby: 'ゆうがた' },
        { base: '荷物', ruby: 'にもつ' },
        { base: '届', ruby: 'とど' },
        { base: '予定', ruby: 'よてい' },
        { base: '出', ruby: 'で' },
        { base: '用事', ruby: 'ようじ' },
      ],
    },
    { no: 4, pembicara: '小川幸子', teks: 'はあ。', arti: 'Oh.' },
    {
      no: 5,
      pembicara: 'ミラー',
      teks: 'それで 申し訳 ありませんが、預かって おいて いただけませんか。',
      arti: 'Oleh karena itu, mohon maaf, bisakah (Anda) menerimanya untuk sementara?',
      furigana: [
        { base: '申', ruby: 'もう' },
        { base: '訳', ruby: 'わけ' },
        { base: '預', ruby: 'あず' },
      ],
    },
    { no: 6, pembicara: '小川幸子', teks: 'ええ、いいですよ。', arti: 'Ya, boleh.' },
    {
      no: 7,
      pembicara: 'ミラー',
      teks: 'すみません。帰ったら、すぐ 取りに 来ます。',
      arti: 'Maaf. Kalau sudah pulang, saya akan segera datang mengambilnya.',
      furigana: [
        { base: '帰', ruby: 'かえ' },
        { base: '取', ruby: 'と' },
        { base: '来', ruby: 'き' },
      ],
    },
    { no: 8, pembicara: '小川幸子', teks: 'わかりました。', arti: 'Baiklah.' },
    { no: 9, pembicara: 'ミラー', teks: 'よろしく お願いします。', arti: 'Tolong ya.', furigana: [{ base: '願', ruby: 'ねが' }] },
    {
      no: 10,
      pembicara: 'ミラー',
      teks: 'あっ、小川さん。先日は 荷物を 預かって くださって、ありがとう ございました。',
      arti: 'Ah, Sdr. Ogawa. Terima kasih atas hari yang lalu (Anda) sudah menerima barang itu.',
      furigana: [
        { base: '小川', ruby: 'おがわ' },
        { base: '先日', ruby: 'せんじつ' },
        { base: '荷物', ruby: 'にもつ' },
        { base: '預', ruby: 'あず' },
      ],
    },
    { no: 11, pembicara: '小川幸子', teks: 'いいえ。', arti: 'Tidak apa-apa.' },
    { no: 12, pembicara: 'ミラー', teks: 'ほんとうに 助かりました。', arti: 'Sungguh sangat menolong.', furigana: [{ base: '助', ruby: 'たす' }] },
  ],
}
