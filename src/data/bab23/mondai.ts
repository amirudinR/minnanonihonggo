import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal: 'Mondai 1 - Dengarkan pertanyaan lalu jawab (5 soal).',
    instruksi: 'Dengarkan lalu jawab.',
    audio: '/audio/bab23_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal: 'Mondai 2 - Dengarkan percakapan lalu pilih gambar yang benar.',
    instruksi: 'Dengarkan lalu pilih jawaban yang benar.',
    audio: '/audio/bab23_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'mendengarkan',
    soal: 'Mondai 3 - Dengarkan lalu isi jawaban di dalam kurung (3 soal).',
    instruksi: 'Dengarkan lalu jawab.',
    audio: '/audio/bab23_mondai3.mp3',
    kunciTersedia: false,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '例1：買い物に（ 行く ）とき、カードを 持って 行きます。\n' +
      '例2：妻が（ いない ）とき、レストランで 食事します。\n' +
      'あります、います、借ります、行きます、渡ります、出ます\n' +
      '1) 図書館で 本を（　）とき、カードが 要ります。\n' +
      '2) 道を（　）とき、左と 右を よく 見なければ なりません。\n' +
      '3) 時間が（　）とき、朝ごはんを 食べません。\n' +
      '4) お釣りが（　）とき、この ボタンを 押して ください。',
    jawaban: '1) 借りる 2) 渡る 3) ない 4) 出る',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '例：うちへ（ 帰る／帰った ）とき、「ただいま」と 言います。\n' +
      '1) （ 疲れる／疲れた ）とき、熱い おふろに 入って、早く 寝ます。\n' +
      '2) うちを（ 出る／出た ）とき、電気を 消しませんでした。\n' +
      '3) 朝（ 起きる／起きた ）とき、家族の 写真に「おはよう」と 言います。\n' +
      '4) きのうの 夜（ 寝る／寝た ）とき、少し お酒を 飲みました。',
    jawaban: '1) 疲れた 2) 出る 3) 起きた 4) 寝る',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '例：（ 眠いです→ 眠い ）とき、顔を 洗います。\n' +
      '1) （ 暇です→　）とき、遊びに 来て ください。\n' +
      '2) （ 独身です→　）とき、よく 旅行を しました。\n' +
      '3) 母は（ 若いです→　）とき、とても きれいでした。',
    jawaban: '1) 暇な 2) 独身の 3) 若い',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '例：この お茶を（ 飲む ）と、元気に なります。\n' +
      '1) あの 交差点を 左へ（　）と、銀行が あります。\n' +
      '2) この つまみを 右へ（　）と、音が 大きく なります。\n' +
      '3) この 料理は 少し お酒を（　）と、おいしく なります。',
    jawaban: '1) 曲がる 2) まわす 3) 入れる',
    kunciTersedia: true,
  },
  {
    no: 8,
    jenis: 'jawaban_pendek',
    soal:
      '聖徳太子\n' +
      '聖徳太子は 574年に 奈良で 生まれました。子どもの とき、勉強が 好きで、馬の 乗り方も 上手で、友達が たくさん いました。\n' +
      '一度に 10人の 人の 話を 聞く ことが できました。\n' +
      '20歳に なった とき、国の 政治の 仕事を 始めました。そして、お寺を 造ったり、日本人を 中国に 送ったり しました。\n' +
      '中国から 漢字や 政治の し方や 町の 造り方などを 習いました。本も 書きました。\n' +
      '聖徳太子が 造った 法隆寺は 奈良に あります。\n' +
      '世界の 木の 建物の 中で いちばん 古い 建物です。\n' +
      '1) ( ) 聖徳太子は 600年ぐらい まえに、生まれました。\n' +
      '2) ( ) 聖徳太子は 友達が 10人 いました。\n' +
      '3) ( ) 聖徳太子は 中国へ 行って、漢字や 馬の 乗り方を 習いました。\n' +
      '4) ( ) 法隆寺は 世界の 建物の 中で いちばん 古いです。',
    instruksi: 'Baca teks lalu tentukan benar (O) atau salah (X).',
    kunciTersedia: false,
  },
]
