import type { MondaiItem } from '@/types/bab'

// Bab 40 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = 問題 1-2 (mendengarkan; ikon telinga pada Honsatsu idx 142).
// Mondai 3-7 = 問題 3-7 (tertulis; Honsatsu idx 142-143, cetak 124-125).
// Jawaban 問題 3-7 tidak tercetak di dalam buku; kunci di bawah disusun
// mengikuti kaidah 文型 第40課 (～か / ～かどうか) dan kosakata yang dipakai.
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab40_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab40_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Perhatikan contoh, lalu ubah Kalimat Tanya menjadi pola ～か.\n例：会議は 何時に 始まりますか。…さあ、何時に （ 始まるか ）、わかりません。\n1) パーティーで だれに 会いましたか。…たくさんの 人に 会ったので、だれに （ ）、覚えて いないんです。\n2) 空港へ 迎えに 行きますから、飛行機が 何時に （ ）、知らせて ください。\n3) どう したら、英語が 上手に （ ）、教えて ください。\n4) 毎日 赤ちゃんが 何人 （ ）、知っていますか。',
    jawaban:
      '1) だれに 会ったか 2) 来るか かどうか 3) なるか 4) 生まれますか（三人か）',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'pilihan_ganda',
    soal:
      '問題 4 - Pilih kata yang tepat dari kotak.\n例：結婚する まえに、意見が （ 合うか どうか ）、よく 話した ほうが いいです。\n（必要です／合います／ありません／健康です／おいしいです）\n1) わたしは 1年に 1回 必ず （ ）、診て もらいます。\n2) 1か月ほど 中国を 旅したいんですが、ビザが （ ）、調べて ください。\n3) あの レストランは 入った ことが ないので、（ ）、わかりません。\n4) 家具を 買う ときは、傷が （ ）、確かめてから、買った ほうが いいです。',
    pilihan: ['必要です', '合います', 'ありません', '健康です', 'おいしいです'],
    jawaban: '1) 健康です 2) 必要です 3) おいしい かどうか 4) ありません',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Ubah menjadi pola ～か どうか.\n例：先月の 電話代が いくら （ かったか ）、かったか どうか）、教えて ください。\n1) 飛行機の 重さは どうやって （ 量るか、量るか どうか ）、知っていますか。\n2) 宇宙へ 行った 人が （ 元気か、元気か どうか ）、心配です。\n3) 電車を 降りる とき、忘れ物が （ あるか かどうか、ないか どうか ）、必ず 確かめます。\n4) 飛行機に 乗る まえに、ナイフなどを （ 持っているか どうか、持っていないか かどうか ）、調べられます。',
    jawaban:
      '1) 量るか 2) 元気か 3) あるか／ないか 4) 持っているか／持っていないか',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'pilihan_ganda',
    soal:
      '問題 6 - Pilih kata dari kotak.\n例：すみません。この ズボンを （ はいて みて ）もいいですか。\n（はきます／着ます／入れます／行きます／食べます）\n1) いつか 宇宙旅行に （ ）たいです。\n2) わたしが 作った ケーキです。（ ）。ください。\n3) セーターは、買う まえに、（ ）ことが できません。\n4) おふろの お湯が 熱くないか どうか、手を （ ）ます。',
    pilihan: ['はきます', '着ます', '入れます', '行きます', '食べます'],
    jawaban: '1) 行きます 2) 食べます 3) はいて みる 4) 入れます',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '問題 7 - Baca cerita 3億円事件, lalu beri tanda (○) atau (×).\n' +
      '1) （　　）白い オートバイの 警官は ほんとうは 犯人です。\n' +
      '2) （　　）銀行の 車に 爆発が 積んで ありました。\n' +
      '3) （　　）犯人は 3億円 とりました。\n' +
      '4) （　　）犯人は だれか 今でも わかりません。',
    jawaban: '1) × 2) × 3) ○ 4) ○',
    kunciTersedia: true,
    konteks: [
      {
        judul: '3億円事件',
        teks:
          '1968年12月10日 午前 9時20分、銀行の 車が お金を 運んで いました。その とき うしろから 警官が 白い オートバイに 乗って、走って 来ました。警官は 車を 止めました。そして 車に 爆発が 積まれているかもしれないと 言いました。運転手と 銀行員は 急いで 降りて、離れた 所に 逃げました。\n' +
          '警官は その 車 に 乗って、中を 調べました。が 急に 車を 動かして 行って しまいました。車には 3億円 積まれていました。警察は 一生懸命 犯人を 探しましたが、見つかりませんでした。\n' +
          '日本中の 人が、犯人は どんな もの か、3億円を どう 使ったか、どうやって 警察の 服と オートバイを 手に 入れたか、話しました。今でも 時々 犯人は どう しているか、うわさします。',
      },
    ],
  },
]