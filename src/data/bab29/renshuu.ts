import type { RenshuuItem } from '@/types/bab'

// 練習 A — Honsatsu 第29課 (idx 46, cetak 28)
// Semua soal adalah latihan menyusun kalimat (語順) dari kotak kata.
// Kunci jawaban disusun dari setiap kombinasi subjek + verba + partikel yang tersedia.
export const renshuuA: RenshuuItem[] = [
  {
    no: 1,
    soal: 'Susun kalimat (pilih verba yang tepat).\nドア／くるま／ガラス が ［あいて／とまって／われて］ います。',
    jawaban: '1) ドア が あいて います。 2) くるま が とまって います。 3) ガラス が われて います。',
  },
  {
    no: 2,
    soal: 'Susun kalimat dari kata-kata berikut, lalu pilih verba yang tepat.\n8じは／人の でんしゃ／この ふくろ／この エレベーター が は ［こんで／やぶれて／こしょうして］ います。',
    jawaban:
      '1) 8じは 人の でんしゃ が こんで います。 2) この ふくろ は やぶれて います。 3) この エレベーター は こしょうして います。',
  },
  {
    no: 3,
    soal: 'Susun kalimat dari kata-kata berikut.\nこの ざっし／けさ かった パン／かんじの しゅくだい は 全部 ［よんで／たべて／やって］ しまいました。',
    jawaban:
      '1) この ざっし は 全部 よんで しまいました。 2) けさ かった パン は 全部 たべて しまいました。 3) かんじの しゅくだい は 全部 やって しまいました。',
  },
  {
    no: 4,
    soal: 'Susun kalimat dari kata-kata berikut.\nどこで 財布を／電話番号を／パソコンが ［おどして／まちがえて／こわれて］ しました。',
    jawaban:
      '1) どこで 財布を おどして しまいました。 2) 電話番号を まちがえて しまいました。 3) パソコンが こわれて しまいました。',
  },
]

// 練習 B — Honsatsu 第29課 (idx 47-48, cetak 29-30)
export const renshuuB: RenshuuItem[] = [
  {
    no: 1,
    soal: 'Tuliskan kalimat ～ています untuk tiap gambar.\n例: 窓が 開いています。\n1) [gambar: lampu gantung menyala] 2) [gambar: gelas yang pecah] 3) [gambar: television dinyalakan] 4) [gambar: kereta penuh penumpang] 5) [gambar: tas yang robek] 6) [gambar: mobil yang menabrak penghalang] 7) [gambar: dahan pohon yang patah]',
    jawaban:
      '1) ランプが 点いて います。 2) コップが 割れて います。 3) テレビが ついて います。 4) 電車が こんで います。 5) かばんが 破れて います。 6) 車が 止まって います。 7) 枝が 折れて います。',
  },
  {
    no: 2,
    soal: 'Gabungkan dua kalimat memakai ～ています／～ていました.\n例1: エアコンが 消えます。つけて ください → エアコンが 消えていますから、つけて ください。\n例2: エアコンが つきませんでした。暑かったです → エアコンが ついて いませんでしたから、暑かったです。\n1) かぎが 掛かります。会議室に 入れません →\n2) 電気が つきません。だれも いない と思います →\n3) 道が すみました。早く 着きました →\n4) スーパーが 開きました。買い物 できませんでした →',
    jawaban:
      '1) かぎが 掛かっています。会議室に 入れません。 2) 電気が ついて いません。だれも いない と思います。 3) 道が すいて いました。早く 着きました。 4) スーパーが 開いて いません。買い物 できませんでした。',
  },
  {
    no: 3,
    soal: 'Ubahlah bentuknya menjadi ～ています.\n例: この ファクスを 使っても いいですか。（故障します）→ その ファクスは 故障して いますよ。\n1) この コップを 借っても いいですか。（汚れます）→\n2) この 袋を もらっても いいですか。（破れます）→\n3) この テープレコーダーを 使っても いいですか。（壊れます）→\n4) この コーヒーを 飲んでも いいですか。（冷たくなります）→',
    jawaban:
      '1) この コップは 汚れて いますよ。 2) この 袋は 破れて いますよ。 3) この テープレコーダーは 壊れて いますよ。 4) この コーヒーは 冷たく なっていますよ。',
  },
  {
    no: 4,
    soal: 'Ubahlah menjadi ～てしまいました.\n例: 先週 貸した 本は もう 読みましたか。（全部）→ はい、全部 読んで しまいました。\n1) 引っ越しの 荷物は 準備しましたか。（きのう）→\n2) 会議の 資料は コピーしましたか。（けさ）→\n3) 夏休みの 宿題は やりましたか。（全部）→\n4) レポートは もう 書きましたか。（きのうの 晩）→',
    jawaban:
      '1) はい、きのう 用意して しまいました。 2) はい、けさ コピーして しまいました。 3) はい、全部 やって しまいました。 4) はい、きのうの 晩 書いて しまいました。',
  },
  {
    no: 5,
    soal: 'Selesaikan percakapan memakai ～てしまいました.\n例: 盆ごはんを 食べに 行きませんか。（これを コピーします）→ すみません。これを コピーして しまいましたから。\n1) 少し 休みませんか。（この 仕事を やります）→\n2) 食事に 行きませんか。（この 資料を 作ります）→\n3) お茶を 飲みませんか。（この 手紙を 読みます）→\n4) いっしょに 帰りませんか。（あしたの 出張の 準備を します）→',
    jawaban:
      '1) すみません。この 仕事を やって しまいました。 2) すみません。この 資料を 作って しまいました。 3) すみません。この 手紙を 読んで しまいました。 4) すみません。あしたの 出張の 準備を しなければ なりません。',
  },
  {
    no: 6,
    soal: 'Gabungkan dua kalimat memakai が.\n例: 田中さんの 住所を 聞きました・忘れました → 田中さんの 住所を 聞きましたが、忘れて しまいました。\n1) 駅まで 走りました・電車は 行きました →\n2) タクシーで 行きました・約束の 時間に 遅れました →\n3) 行き方を 教えてもらいました・道を まちがえました →\n4) お金を つけて いました・病気に なりました →',
    jawaban:
      '1) 駅まで 走りましたが、電車は 行きました。 2) タクシーで 行きましたが、約束の 時間に 遅れました。 3) 行き方を 教えてもらいましたが、道を まちがえました。 4) お金を つけて いましたが、病気に なりました。',
  },
  {
    no: 7,
    soal: 'Jawablah "どう したんですか。" sesuai gambar.\n例: どう したんですか。→ 傘を 忘れて しまったんです。\n1) どう したんですか。→ [gambar: orang menangis sambil memegang pisau, ada tetesan darah] 2) どう したんですか。→ [gambar: lampu gantung pecah] 3) どうして 運動会に 遅れたんですか。→ [gambar: mobil yang menabrak, ada papan 「じしょう」] 4) どうして パーティーに 来なかったんですか。→ [gambar: orang berkeringat, kemeja dipegang]',
    jawaban:
      '1) 手を 切って しまいました。 2) 電球を 割って しまいました。 3) 車を ぶつけて しまいました。 4) シャツを 汚して しまいました。',
  },
]

// 練習 C — Honsatsu 第29課 (idx 49, cetak 31)
export const renshuuC: RenshuuItem[] = [
  {
    no: 1,
    soal: 'Lengkapi percakapan dengan bentuk ～ています.\nA: あのう……。\nB: はい。\nA: かばんが 開いて いますよ。\nB: えっ。あ、どうも すみません。\n1) ボタンが 外れます\n2) クリーニングの 紙が 付きます',
    jawaban:
      '1) ① かばんが 開いて いますよ ② ボタンが 外れています 2) ① かばんが 開いて いますよ ② クリーニングの 紙が 付いています',
  },
  {
    no: 2,
    soal: 'Lengkapi percakapan dengan bentuk ～ています.\nA: すみません。この ①パンチ、使っても いいですか。\nB: あ、その ①パンチは ②壊れて いますから、こちらのを 使って ください。\nA: すみません。\n1) ① 袋 ② 汚れます\n2) ① 封筒 ② 破れます',
    jawaban:
      '1) ① 袋 ② 汚れています 2) ① 封筒 ② 破れています',
  },
  {
    no: 3,
    soal: 'Lengkapi percakapan dengan bentuk ～ています.\nA: すみません。けさ ①電車に パソコンを 忘れて しまったんですが……。\nB: ①パソコンですか。\nA: ええ。②黒くて、この くらいのものです。\nB: これですか。\nA: あ、それです。ああ、よかった。\n1) ① どこかで 財布を なくします ② 赤いです\n2) ① この 辺で 手帳を 落とします ② 青いです',
    jawaban:
      '1) ① 電車に 財布を なくしました ② 赤いです 2) ① この 辺で 手帳を 落としました ② 青いです',
  },
]