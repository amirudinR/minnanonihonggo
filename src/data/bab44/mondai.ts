import type { MondaiItem } from '@/types/bab'

// Bab 44 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = 問題 1-2 (mendengarkan, icon telinga pada Honsatsu idx 176, cetak 158).
// Mondai 3-8 = 問題 3-8 (tertulis; Honsatsu idx 176-177, cetak 158-159).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab44_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab44_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Perhatikan contoh, lalu tulis bentuk ～すぎます pada garis jawaban.\n例1：お酒を （飲みすぎました）。\n例2：この 説明書は （複雑すぎます）。\nGambar: 例1 = orang minum, 例2 = orang bingung dengan buku panduan, 1) = orang makan di meja, 2) = orang bernyanyi dengan mikrofon, 3) = mangkuk nasi besar, 4) = orang berkeringat\n1) 塩を （　　　　　　）。\n2) カラオケで （　　　　　　）。\n3) ごはんの 量が （　　　　　　）。\n4) この 服は （　　　　　　）。',
    jawaban: '1) 入れすぎました 2) 歌いすぎました 3) 多すぎます 4) 暑すぎます',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Lengkapi kalimat berikut dengan bentuk ～すぎます agar sesuai dengan bagian kedua.\n例：テレビを （見すぎて）、目が 疲れました。\n1) ごはんを （　　　　　　）、おなかが 痛いです。\n2) お土産を （　　　　　　）、一人で 持てません。\n3) 部屋が （　　　　　　）、ベッドが 置けません。\n4) この アパートは 家賃が （　　　　　　）、借りられません。',
    jawaban: '1) 食べすぎました 2) 買いすぎました 3) 狭すぎます 4) 高すぎます',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Pilih kata dari kotak, lalu tulis kalimat memakai kata dari kotak.\n例：この 薬は 甘くて、（飲み）やすいです。\n［ 破れます ／ 持ちます ／ 倒れます ／ 飲めます ／ 歩きます ］\n1) この 鞄は 軽くて、（　　　）やすいです。\n2) この かばんは 大きすぎて、（　　　）にくいです。\n3) この 袋は 丈夫で、（　　　）にくいです。\n4) 薄い コップは （　　　）やすいです。',
    jawaban: '1) 持ちます 2) 持ちます 3) 破れます 4) 倒れます',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Pilih kata dari kotak, lalu tulis kalimat memakai kata dari kotak.\n例：もう 11時ですから、（静かに）して ください。\n［ 小さい ／ 来週 ／ 短い ／ 静か ／ きれい ］\n1) この ズボンは 長すぎますから、少し（　　　）して ください。\n2) テレビの 音が 大きいですから、（　　　）して ください。\n3) テーブルの 上が 汚れていますから、（　　　）して ください。\n4) 今週は 都合が 悪いですから、（　　　）して ください。',
    jawaban: '1) 短く 2) 小さく 3) きれいに 4) 来週',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '問題 7 - Pilih kata dari kotak, lalu tulis kalimat memakai kata dari kotak.\n例：夕方は 道が 込みますから、（早く）出発しましょう。\n［ 簡単 ／ 早い ／ 細かい ／ 優しい ／ 熱心 ］\n1) 試験の まえなので、学生は みんな（　　　）勉強しています。\n2) 野菜は（　　　）、切って、ごはんと 混ぜます。\n3) 警官は 子どもに（　　　）名前を 聞きました。\n4) 時間が ありませんから、予定について（　　　）説明します。',
    jawaban: '1) 熱心 2) 細かく 3) 優しく 4) 早く',
    kunciTersedia: true,
  },
  {
    no: 8,
    jenis: 'jawaban_pendek',
    soal:
      '問題 8 - Baca 結婚式の スピーチ, lalu jawab pertanyaannya.\n【結婚式の スピーチ】結婚式の スピーチを 頼まれた ことが あります。スピーチは 長すぎると、みんなに 嫌がられます。また 短すぎると、お祝いの 気持ちが うまく 伝えられません。難しいですね。練習して おいても、大勢の 人の 前に 立つと、なかなか 上手に できません。話の 順序を まちがえたり、忘れたり します。話の 大切な 所を メモして おくと、安心です。できるだけ 易しい ことばや 表現を 使うように します。難しい ことばは 覚えにくいし、まちがえやすいからです。それから、使っては いけない ことばが あります。例えば 「別れる」とか、「切れる」とかです。これらは 縁起が 悪いので、使いません。気を つけましょう。\n1) 短すぎる スピーチは どうして よくないのですか。…\n2) スピーチを 忘れないように、何を して おくと いいですか。…\n3) どうして 難しい ことばや 表現を 使うのですか。…\n4) 使っては いけない ことばは 何ですか。…',
    jawaban:
      '1) お祝いの 気持ちが うまく 伝えられないから。 2) 話の 大切な 所を メモして おくと 安心です。 3) 難しい ことばは 覚えにくいし、まちがえやすいから。 4) 「別れる」とか、「切れる」とか。（これらは 縁起が 悪いので。）',
    kunciTersedia: true,
  },
]
