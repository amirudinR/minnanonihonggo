import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 41 — JP: Honsatsu 第41課「例文」(idx 146 / cetak 128).
// arti: PDF Indonesia "Pelajaran 41 · II. Terjemahan · Contoh Kalimat" (idx 121 / cetak 100).
// CATATAN EDISI: butir 5 TIDAK ada di edisi Indonesia (ID butir 5 = "selama
// liburan berurutan" / "mengantarkan anak ke Disneyland"). Arti butir 5 dan 5b =
// terjemahan setia dari teks Honsatsu.
export const reibun: ReibunItem[] = [
  {
    kalimat: 'きれいな お皿ですね。',
    arti: 'Piring bagus, ya.',
    furigana: [{ base: '皿', ruby: 'さら' }],
  },
  {
    kalimat: '……ええ。結婚の お祝いに 田中さんが くださいました。',
    arti: '……Ya. Sebagai hadiah pernikahan, sdr. Tanaka yang berikan kepada saya.',
    furigana: [
      { base: '結婚', ruby: 'けっこん' },
      { base: '祝', ruby: 'いわ' },
      { base: '田中', ruby: 'たなか' },
    ],
  },
  {
    kalimat: 'お母さん、あの 猿に お菓子を やっても いい？',
    arti: 'Ibu, boleh berikan monyet kue?',
    furigana: [
      { base: '母', ruby: 'かあ' },
      { base: '猿', ruby: 'さる' },
      { base: '菓子', ruby: 'かし' },
    ],
  },
  {
    kalimat: '……いいえ。あそこに えさを やっては いけないと 書いて ありますよ。',
    arti: '……Tidak boleh. Di sana ada tulisan untuk tidak boleh memberi makanan, bukan?',
    furigana: [
      { base: '書', ruby: 'か' },
    ],
  },
  {
    kalimat: '相撲を 見に 行った ことが ありますか。',
    arti: 'Apakah (Anda) pernah pergi menonton sumo?',
    furigana: [
      { base: '相撲', ruby: 'すもう' },
      { base: '見', ruby: 'み' },
      { base: '行', ruby: 'い' },
    ],
  },
  {
    kalimat: '……ええ。この 間 部長に 連れて 行って いただきました。とても おもしろかったです。',
    arti: '……Ya. Beberapa saat yang lalu, kepala seksi mengantarkan saya. Sangat menarik.',
    furigana: [
      { base: '間', ruby: 'あいだ' },
      { base: '部長', ruby: 'ぶちょう' },
      { base: '連', ruby: 'つ' },
      { base: '行', ruby: 'い' },
    ],
  },
  {
    kalimat: 'タワポンさん、夏休みの ホームステイは どうでしたか。',
    arti: 'Bagaimana homestay pada liburan musim panas?',
    furigana: [
      { base: '夏休', ruby: 'なつやす' },
    ],
  },
  {
    kalimat: '……楽しかったです。家族の 皆さんが とても 親切に して くださいました。',
    arti: '……Senang. Semua anggota keluarganya memberi kebaikan kepada saya.',
    furigana: [
      { base: '楽', ruby: 'たの' },
      { base: '家族', ruby: 'かぞく' },
      { base: '皆', ruby: 'みな' },
      { base: '親切', ruby: 'しんせつ' },
    ],
  },
  {
    kalimat: 'お子さんの 誕生日には どんな ことを して あげますか。',
    arti: 'Apa yang (Anda) lakukan untuk hari jadi anak (Anda)?',
    furigana: [
      { base: '子', ruby: 'こ' },
      { base: '誕生日', ruby: 'たんじょうび' },
    ],
  },
  {
    kalimat: '……友達を 呼んで、パーティーを して やります。',
    arti: '……Saya mengundang teman-teman (ke rumah) dan mengadakan pesta.',
    furigana: [
      { base: '友達', ruby: 'ともだち' },
      { base: '呼', ruby: 'よ' },
    ],
  },
  {
    kalimat: '新しい コピー機の 使い方が よく わからないんですが、ちょっと 教えて くださいませんか。',
    arti: '(Saya) Kurang tahu cara memakai mesin fotocopy baru, tolong ajarkan saya sebentar!',
    furigana: [
      { base: '新', ruby: 'あたら' },
      { base: '使い方', ruby: 'つかいかた' },
      { base: '教', ruby: 'おし' },
    ],
  },
  {
    kalimat: '……いいですよ。',
    arti: '……Boleh.',
  },
]
