import type { Kaiwa } from '@/types/bab'

// 会話 第32課「病気かも しれません」 — Honsatsu idx 71 (j_71, cetak 53).
// arti: PDF Indonesia "Pelajaran 32 · Percakapan: Lebih Baik Jangan Paksakan Diri." (idx 67, cetak 46).
// Catatan: edisi Indonesia mengadaptasi percakapan (9 giliran, pembicara Ogawa/Schmidt),
// sedangkan JP punya 11 baris (渡辺/シュミット/医者). Teks Indonesia dipakai apa adanya
// sesuai urutan percakapan; pemetaan 1:1 tidak persis (pola yang sama dipakai bab42).
export const kaiwa: Kaiwa = {
  judul: '病気かも しれません',
  audio: '/audio/bab32_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '渡辺',
      teks: 'シュミットさん、どう したんですか。元気が ありませんね。',
      arti: 'Sdr. Schmidt, kurang bersemangat, ya.\nKenapa?',
      furigana: [
        { base: '渡辺', ruby: 'わたなべ' },
        { base: '元気', ruby: 'げんき' },
      ],
    },
    {
      no: 2,
      pembicara: 'シュミット',
      teks: '最近 体の 調子が よくないんです。時々 頭や 胃が 痛く なるんです。',
      arti: 'Akhir-akhir ini kondisi tubuh kurang baik.\nKadang-kadang sakit kepala dan sakit perut.',
      furigana: [
        { base: '最近', ruby: 'さいきん' },
        { base: '体', ruby: 'からだ' },
        { base: '調子', ruby: 'ちょうし' },
        { base: '時々', ruby: 'ときどき' },
        { base: '頭', ruby: 'あたま' },
        { base: '胃', ruby: 'い' },
        { base: '痛', ruby: 'いた' },
      ],
    },
    {
      no: 3,
      pembicara: '渡辺',
      teks: 'それは いけませんね。病気かも しれませんから、一度 病院で 診て もらった ほうが いいですよ。',
      arti: 'Itu tidak baik. Apa tugasnya sibuk?',
      furigana: [
        { base: '病気', ruby: 'びょうき' },
        { base: '一度', ruby: 'いちど' },
        { base: '病院', ruby: 'びょういん' },
        { base: '診', ruby: 'み' },
      ],
    },
    {
      no: 4,
      pembicara: 'シュミット',
      teks: 'ええ、そうですね。',
      arti: 'Ya. Banyak lembur.',
    },
    {
      no: 5,
      pembicara: 'シュミット',
      teks: '先生、どこが 悪いんですか。',
      arti: 'Mungkin stres, ya.',
      furigana: [{ base: '先生', ruby: 'せんせい' }],
    },
    {
      no: 6,
      pembicara: '医者',
      teks: '特に 悪い ところは ありませんよ。仕事は 忙しいですか。',
      arti: 'Lebih baik berobat satu kali di rumah sakit.',
      furigana: [
        { base: '医者', ruby: 'いしゃ' },
        { base: '仕事', ruby: 'しごと' },
        { base: '忙', ruby: 'いそが' },
      ],
    },
    {
      no: 7,
      pembicara: 'シュミット',
      teks: 'ええ。最近 残業が 多いんです。',
      arti: 'Ya, benar.',
      furigana: [
        { base: '最近', ruby: 'さいきん' },
        { base: '残業', ruby: 'ざんぎょう' },
      ],
    },
    {
      no: 8,
      pembicara: '医者',
      teks: '働きすぎですね。仕事の ストレスでしょう。',
      arti: 'Lebih baik jangan paksakan diri.',
      furigana: [
        { base: '働', ruby: 'はたら' },
        { base: '仕事', ruby: 'しごと' },
      ],
    },
    {
      no: 9,
      pembicara: 'シュミット',
      teks: 'そうですか。',
      arti: 'Ya, kalau tugas sekarang selesai, saya mau mengambil cuti.',
    },
    {
      no: 10,
      pembicara: '医者',
      teks: '無理を しない ほうが いいですよ。少し 休みを 取って、ゆっくり して ください。',
      arti: 'Itu bagus.',
      furigana: [
        { base: '無理', ruby: 'むり' },
        { base: '休', ruby: 'やす' },
        { base: '取', ruby: 'と' },
      ],
    },
    {
      no: 11,
      pembicara: 'シュミット',
      teks: 'はい、わかりました。',
      arti: 'Itu bagus.',
    },
  ],
}