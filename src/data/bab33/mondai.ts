import type { MondaiItem } from '@/types/bab'

// 問題 (第33課, Honsatsu idx 84-85 / cetak 66-67).
// Bab 33 punya tepat 2 track audio (lihat src/core/audio/manifest.ts):
//   mondai 1 = 問題 1 (ikon telinga, idx 84) — mendengarkan
//   mondai 2 = 問題 2 (ikon telinga, idx 84) — mendengarkan
//   mondai 3-7 = 問題 3-7 (tertulis, tanpa audio)
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 — Dengarkan audio, lalu tuliskan kalimat yang Anda dengar dalam bentuk kana pada garis jawaban.\n' +
      '1) 「みんなの 日本語」＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿\n' +
      '2) ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿',
    instruksi:
      'Putar audio beberapa kali, lalu tulis jawaban Anda untuk 1) dan 2). Kunci jawaban tidak tersedia di buku.',
    audio: '/audio/bab33_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 — Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n' +
      '1) （　　）\n2) （　　）\n3) （　　）\n4) （　　）\n5) （　　）',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan isi audio. Kunci jawaban tidak tersedia di buku.',
    audio: '/audio/bab33_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 — Ubahlah setiap Kata Kerja menjadi Bentuk Perintah dan Bentuk Larangan.\n' +
      '例: 行きます → 行け ／ 行くな\n' +
      '1) 急ぎます\n2) 立ちます\n3) 出します\n4) 止めます\n5) 忘れます\n6) 来ます\n7) 運転します',
    jawaban:
      '1) 急げ／急ぐな\n2) 立て／立たない\n3) 出しろ／出さない\n' +
      '4) 止まれ／止めるな\n5) 忘れろ／忘れるな\n6) 来い／来るな\n7) 運転しろ／運転するな',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 — Lengkapi dengan pola 「これは ＿＿＿ という 意味です」sesuai gambar tanda.\n' +
      '例: （tanda masuk dilarang）これは 入るな という 意味です。\n' +
      '1) （tanda panah lurus ke atas）これは ＿＿＿＿＿＿＿ という 意味です。\n' +
      '2) （tanda seru / bahaya）これは ＿＿＿＿＿＿＿ という 意味です。\n' +
      '3) （tanda kamera dicoret）これは ＿＿＿＿＿＿＿ という 意味です。',
    instruksi:
      'Jawaban setiap butir bergantung pada gambar tanda lalu lintas pada buku; aplikasi tidak menampilkan gambar tanda sehingga kunci tidak disertakan. Ikuti contoh: «tanda masuk dilarang» → 入るな.',
    kunciTersedia: false,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 — Lengkapi dengan pola 「この 漢字は ＿＿＿ という 意味です」sesuai gambar.\n' +
      '例: この 漢字は 今 店が 開いている という 意味です。（営業中）\n' +
      '1) この 漢字は お金を ＿＿＿＿＿＿＿ という 意味です。（無料）\n' +
      '2) この 漢字は 今 ＿＿＿＿＿＿＿ という 意味です。（故障）\n' +
      '3) この マークは ここで ＿＿＿＿＿＿＿ という 意味です。（tanda cigarette disilet）',
    instruksi:
      'Jawaban setiap butir merujuk pada gambar/daftar tulisan pada buku (無料・故障・tanda larangan Merokok). Kunci tidak disertakan karena makna setiap tanda terdapat pada gambar.',
    kunciTersedia: false,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 — Isilah dua garis dengan mengubah kalimat menjadi 「〜と 言っていました」.\n' +
      '例: グプタ: ミラーさんに「資料は あした 送ります」と 伝えて いただけませんか。\n' +
      '　　山田: はい、わかりました。\n' +
      '　　→ 山田: ミラーさん、グプタさんが 資料は あした 送ると 言っていました。\n' +
      '1) 米村: ミラーさんに「きょうは 柔道の 練習が ありません」と 伝えて いただけませんか。\n' +
      '　　→ 山田: ミラーさん、＿＿＿＿＿＿＿が ＿＿＿＿＿＿＿と 言っていました。\n' +
      '2) 渡辺: ミラーさんに「この 率は とても 役に 立ちました」と 伝えて いただけませんか。\n' +
      '　　→ 山田: ミラーさん、＿＿＿＿＿＿＿が ＿＿＿＿＿＿＿と 言っていました。\n' +
      '3) 田中: ミラーさんに「４日から １週間の 予定です」と 伝えて いただけませんか。\n' +
      '　　→ 山田: ミラーさん、＿＿＿＿＿＿＿が ＿＿＿＿＿＿＿と 言っていました。',
    jawaban:
      '1) ミラーさん、きょうは 柔道の 練習が ない と 言っていました。\n' +
      '2) ミラーさん、この 率は とても 役に 立った と 言っていました。\n' +
      '3) ミラーさん、４日から １週間の 予定 と 言っていました。',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '問題 7 — Baca teks 「電報」, lalu beri tanda (○) atau (×) pada pernyataan.\n' +
      '［電報］昔、電話が まだ あまり なかった とき、人々は 急用が ある ときは、電報を 打ちました。電報代が 高かったから、できるだけ 短く 書きました。また 全部 片仮名 で 書かなければ なりませんでした。\n' +
      '1) （　　）昔 電話が ない 人は 電報で 急ぐ 用事を 伝えました。\n' +
      '2) （　　）昔 電話は 全部 かた仮名 で 書きました。\n' +
      '3) （　　）今は 電話は 結婚式と 葬式 の ときしか 使いません。',
    instruksi:
      'Baca teks 「電報」 pada buku, lalu tentukan pernyataan mana yang sesuai. Kunci jawaban tidak disertakan.',
    kunciTersedia: false,
  },
]