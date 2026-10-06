import type { Kaiwa } from '@/types/bab'

// Teks JP + pembicara dari Honsatsu 第37課「会話」(idx 113 / cetak 95).
// CATATAN EDISI: PDF Indonesia "Percakapan" (idx 97 / cetak 76) memakai
// Percakapan yang BERBEDA dari Honsatsu (Indonesia: 「金閣寺」; Honsatsu:
// 「海を 埋め立てて 造られました」 = Kansai Kūkō). Karena arti wajib 1:1 dan
// tidak boleh dikarang, arti di sini adalah terjemahan setia dari teks Honsatsu
// (yang juga cocok dengan trek audio bab37_kaiwa.mp3), bukan dari edisi Indonesia.
export const kaiwa: Kaiwa = {
  judul: '海を 埋め立てて 造られました',
  audio: '/audio/bab37_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '松本',
      teks: 'シュミットさん、関西空港は 初めてですか。',
      arti: 'Sdr. Schmidt, ini pertama kali (Anda) ke Bandara Kansai?',
      furigana: [
        { base: '松本', ruby: 'まつもと' },
        { base: '関西空港', ruby: 'かんさいくうこう' },
        { base: '初', ruby: 'はじ' },
      ],
    },
    {
      no: 2,
      pembicara: 'シュミット',
      teks: 'ええ。ほんとうに 海の 上に あるんですね。',
      arti: 'Ya. Benar-benar ada di atas laut, ya.',
      furigana: [
        { base: '海', ruby: 'うみ' },
        { base: '上', ruby: 'うえ' },
      ],
    },
    {
      no: 3,
      pembicara: '松本',
      teks: 'ええ。ここは 海を 埋め立てて 造られた 島なんです。',
      arti: 'Ya. Ini pulau yang dibuat dengan menimbun laut.',
      furigana: [
        { base: '海', ruby: 'うみ' },
        { base: '埋', ruby: 'う' },
        { base: '立', ruby: 'た' },
        { base: '造', ruby: 'つく' },
        { base: '島', ruby: 'しま' },
      ],
    },
    {
      no: 4,
      pembicara: 'シュミット',
      teks: 'すごい 技術ですね。',
      arti: 'Teknologinya hebat, ya.',
      furigana: [{ base: '技術', ruby: 'ぎじゅつ' }],
    },
    {
      no: 5,
      pembicara: 'シュミット',
      teks: 'でも、どうして 海の 上に 造ったんですか。',
      arti: 'Tetapi, kenapa dibangun di atas laut?',
      furigana: [
        { base: '海', ruby: 'うみ' },
        { base: '上', ruby: 'うえ' },
        { base: '造', ruby: 'つく' },
      ],
    },
    {
      no: 6,
      pembicara: '松本',
      teks: '日本は 土地が 狭いし、それに 海の 上なら、騒音の 問題が ありませんからね。',
      arti: 'Karena Jepang tanahnya sempit, lagi pula kalau di atas laut tidak ada masalah kebisingan.',
      furigana: [
        { base: '日本', ruby: 'にほん' },
        { base: '土地', ruby: 'とち' },
        { base: '狭', ruby: 'せま' },
        { base: '海', ruby: 'うみ' },
        { base: '上', ruby: 'うえ' },
        { base: '騒音', ruby: 'そうおん' },
        { base: '問題', ruby: 'もんだい' },
      ],
    },
    {
      no: 7,
      pembicara: 'シュミット',
      teks: 'それで 24時間 利用できるんですね。',
      arti: 'Oleh karena itu bisa digunakan 24 jam, ya.',
      furigana: [
        { base: '時間', ruby: 'じかん' },
        { base: '利用', ruby: 'りよう' },
      ],
    },
    { no: 8, pembicara: '松本', teks: 'ええ。', arti: 'Ya.' },
    {
      no: 9,
      pembicara: 'シュミット',
      teks: 'この ビルも おもしろい デザインですね。',
      arti: 'Gedung ini juga desainnya menarik, ya.',
    },
    {
      no: 10,
      pembicara: '松本',
      teks: 'イタリア人の 建築家に よって 設計されたんです。',
      arti: 'Dirancang oleh arsitek Italia.',
      furigana: [
        { base: '建築家', ruby: 'けんちくか' },
        { base: '設計', ruby: 'せっけい' },
      ],
    },
    {
      no: 11,
      pembicara: 'シュミット',
      teks: 'アクセスは 便利なんですか。',
      arti: 'Aksesnya praktis?',
      furigana: [{ base: '便利', ruby: 'べんり' }],
    },
    {
      no: 12,
      pembicara: '松本',
      teks: '大阪駅から 電車で 1時間ぐらいです。\n神戸からは 船でも 来られますよ。',
      arti: 'Dari stasiun Osaka dengan kereta sekitar 1 jam.\nDari Kobe bisa juga datang dengan kapal.',
      furigana: [
        { base: '大阪駅', ruby: 'おおさかえき' },
        { base: '電車', ruby: 'でんしゃ' },
        { base: '時間', ruby: 'じかん' },
        { base: '神戸', ruby: 'こうべ' },
        { base: '船', ruby: 'ふね' },
        { base: '来', ruby: 'こ' },
      ],
    },
  ],
}
