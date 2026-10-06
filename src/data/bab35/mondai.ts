import type { MondaiItem } from '@/types/bab'

// Bab 35 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = soal audio CD (問題 1-2 pada Honsatsu idx 100).
// Mondai 3-8 = 問題 3-8 (tertulis, tanpa audio).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis jawaban untuk pertanyaan berikut.\n' +
      '1) どうすれば、漢字が覚えられますか。\n' +
      '2) 値段が安ければ、遠くても、買いに行きますか。\n' +
      '3) 名前をまちがえたとき、何と言えばいいですか。\n' +
      '4) パソコンを買いたいんですが、どこのがいいですか。',
    instruksi:
      'Putar audio beberapa kali, lalu tulis jawaban Anda untuk setiap pertanyaan. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab35_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-4).\n' +
      '1) ここは冬より春のほうがいいです。\n' +
      '2) 男の人はすぐタクシーの会社に電話をかけます。\n' +
      '3) 山田さんに聞けば、相撲のチケットの買い方がわかります。\n' +
      '4) 女の人は白ワインを飲みながら、魚料理を食べます。',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan isi audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab35_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Ubahlah kata kerja/kata sifat/kata benda sesuai contoh tabel (bentuk syarat dan syarat negatif).\n' +
      '例：行きます → 行けば ／ 行かなければ\n' +
      '1) 飲みます 2) 急ぎます 3) 待ちます 4) 買います\n' +
      '5) 話します 6) 食べます 7) 降ります 8) 来ます 9) します\n' +
      '例：暑いです → 暑ければ\n' +
      '10) おもしろいです 11) 安いです\n' +
      '例：暇です → 暇なら\n' +
      '12) にぎやかです 13) 病気です',
    jawaban:
      '1) 飲めば／飲まなければ 2) 急げば／急がなければ 3) 待てば／待たなければ 4) 買えば／買わなければ\n' +
      '5) 話せば／話さなければ 6) 食べれば／食べなければ 7) 降りれば／降りなければ 8) 来れば／来なければ 9) すれば／しなければ\n' +
      '10) おもしろければ 11) 安ければ 12) にぎやかなら 13) 病気なら',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Isilah (　) dengan bentuk syarat yang tepat.\n' +
      '例：この時計は（修理すれば）、まだ使えます。\n' +
      '1) 来週に（　　）、桜が咲くと思います。\n' +
      '2) （　　）、次の電車に間に合います。\n' +
      '3) この仕事は経験が（　　）、できません。\n' +
      '4) この洗濯機はふたを（　　）、動きません。\n' +
      '5) 値段が（　　）、自転車を買います。\n' +
      '6) 天気が（　　）、富士山が見えます。\n' +
      '7) 土曜日（　　）、テニスでもしませんか。\n' +
      '8) 大阪から東京まで（　　）、3時間で行けます。',
    jawaban:
      '1) なれば 2) 急げば 3) なければ 4) 閉めなければ 5) 安ければ 6) よければ 7) 暇なら 8) 新幹線なら',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Perhatikan contoh, lalu lengkapi dengan pola 「〜なら、（a/b/c/d）」.\n' +
      '例：この近くにおいしいすし屋がありますか。 → おいしいすし屋なら、（a）。\n' +
      'Kotak: a.ホテルの隣にあります b.10分ぐらいです c.待っています d.花瓶はどうですか\n' +
      '1) タクシーでどのくらいかかりますか。…　　　　　、（　）。\n' +
      '2) 5千円くらいのプレゼントを買いたいんですが。…　　　　　、（　）。\n' +
      '3) 30分ぐらい遅れるかもしれません。…　　　　　、（　）。',
    jawaban:
      '1) タクシーなら、（b） 2) 5千円くらいのプレゼントなら、（d） 3) 30分ぐらい遅れるなら、（c）',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Isilah (　) dengan kata kerja bentuk syarat.\n' +
      '例：ビデオがつかないんですが、どのボタンを（押せば）、つきますか。…右のボタンを押してください。\n' +
      '1) スキー旅行に参加したいんですが、いつまでに（　）、いいですか。…あさってまでに申し込んでください。\n' +
      '2) スペインのワインが欲しいんですが、どこへ（　）、買えますか。…駅の前のスーパーへ行ったら、買えますよ。\n' +
      '3) コピー機が故障したんですが、だれに（　）、いいですか。…事務所の人に言ってください。',
    jawaban: '1) 申し込めば 2) 行けば 3) 言えば',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '問題 7 - Bentuklah kalimat dengan pola 「〜ば 〜ほど」.\n' +
      '例：頭は（使えば）（使う）ほどよくなります。\n' +
      'Kotak: 新しいです・使います・勉強します・早いです\n' +
      '1) 日本語は（　　　）（　　　）ほどおもしろくなります。\n' +
      '2) 電車は朝（　　　）（　　　）ほどすいています。\n' +
      '3) 魚は（　　　）（　　　）ほどおいしいです。',
    jawaban: '1) 勉強すれば 勉強する 2) 早ければ 早い 3) 新しければ 新しい',
    kunciTersedia: true,
  },
  {
    no: 8,
    jenis: 'jawaban_pendek',
    soal:
      '問題 8 - Perhatikan peribahasa 「朱に交われば赤くなる」 beserta ceritanya, lalu lengkapi.\n' +
      '1) （　　　）いい友達を選ばなければなりません。\n' +
      '2) （　　　）悪い友達も、いい友達も必要です。',
    instruksi:
      'Baca cerita peribahasa pada buku, lalu isilah kata penghubung yang sesuai dengan maksud cerita (朱に交われば赤くなる).',
    kunciTersedia: false,
  },
]
