import type { Kaiwa } from '@/types/bab'

// Teks JP dari Honsatsu (idx 21), arti dari PDF terjemahan Indonesia "Percakapan".
export const kaiwa: Kaiwa = {
  judul: 'どこに ごみを 出したら いいですか',
  audio: '/audio/bab26_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: '管理人', teks: 'ミラーさん、引っ越しの 荷物は 片づきましたか。', arti: 'Sdr. Miller, barang-barang sudah dibersihkan?', furigana: [{ base: '管理人', ruby: 'かんりにん' }, { base: '荷物', ruby: 'にもつ' }, { base: '片', ruby: 'かた' }] },
    { no: 2, pembicara: 'ミラー', teks: 'はい、だいたい 片づきました。', arti: 'Ya, hampir selesai dibersihkan.', furigana: [{ base: '片', ruby: 'かた' }] },
    { no: 3, pembicara: 'ミラー', teks: 'あのう、ごみを 捨てたいんですが、どこに 出したら いいですか。', arti: 'O ya, saya mau membuang sampah, tetapi sebaiknya membuang sampah di mana?', furigana: [{ base: '捨', ruby: 'す' }, { base: '出', ruby: 'だ' }] },
    { no: 4, pembicara: '管理人', teks: '燃える ごみは 月・水・金の 朝 出して ください。ごみ置き場は 駐車場の 横です。', arti: 'Sampah organik dibuang pada hari Senin dan hari Kamis pagi. Tempat meletakkan sampah di sebelah tempat parkir.', furigana: [{ base: '燃', ruby: 'も' }, { base: '月', ruby: 'つき' }, { base: '水', ruby: 'すい' }, { base: '金', ruby: 'きん' }, { base: '朝', ruby: 'あさ' }, { base: '出', ruby: 'だ' }, { base: '置', ruby: 'お' }, { base: '場', ruby: 'ば' }, { base: '駐車場', ruby: 'ちゅうしゃじょう' }, { base: '横', ruby: 'よこ' }] },
    { no: 5, pembicara: 'ミラー', teks: '瓶や 缶は いつですか。', arti: 'Kapan botol atau kaleng dibuang?', furigana: [{ base: '瓶', ruby: 'びん' }, { base: '缶', ruby: 'かん' }] },
    { no: 6, pembicara: '管理人', teks: '燃えない ごみは 土曜日です。', arti: 'Hari Sabtu.', furigana: [{ base: '燃', ruby: 'も' }, { base: '土曜日', ruby: 'どようび' }] },
    { no: 7, pembicara: 'ミラー', teks: 'はい、わかりました。それから、お湯が 出ないんですが……。', arti: 'Baik. Kemudian air panas tidak keluar...', furigana: [{ base: '出', ruby: 'で' }] },
    { no: 8, pembicara: '管理人', teks: 'ガス会社に 連絡したら、すぐ 来て くれますよ。', arti: 'Kalau menghubungi perusahaan gas, petugas akan segera datang.', furigana: [{ base: '連絡', ruby: 'れんらく' }, { base: '来', ruby: 'き' }] },
    { no: 9, pembicara: 'ミラー', teks: '……困ったなあ。電話が ないんです。すみませんが、連絡して いただけませんか。', arti: 'Maaf, boleh minta nomor teleponnya?', furigana: [{ base: '困', ruby: 'こま' }, { base: '電話', ruby: 'でんわ' }, { base: '連絡', ruby: 'れんらく' }] },
    { no: 10, pembicara: '管理人', teks: 'ええ、いいですよ。', arti: 'Ya, boleh.', furigana: [{ base: '管理人', ruby: 'かんりにん' }] },
    { no: 11, pembicara: 'ミラー', teks: 'すみません。お願いします。', arti: '…Terima kasih atas bantuannya.', furigana: [{ base: '願', ruby: 'ねが' }] },
  ],
}