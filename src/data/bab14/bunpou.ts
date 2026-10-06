import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Penggolongan Kata Kerja',
    penjelasan: 'Kata kerja bahasa Jepang dibagi menjadi 3 grup berdasarkan perubahannya.\nGrup I: Kata kerja yang bunyi sebelum ます adalah deretan い (i). Contoh: 飲みます、書きます。\nGrup II: Kata kerja yang bunyi sebelum ます adalah deretan え (e), dan beberapa deretan い (i). Contoh: 食べます、見ます。\nGrup III: します dan 来ます.',
    contoh: [],
    artiContoh: []
  },
  {
    no: 2,
    pola: 'Bentuk て',
    penjelasan: 'Perubahan dari bentuk ます ke bentuk て:\nGrup I: -きます→ -いて, -ぎます→ -いで, -びます・-みます・-にます→ -んで, -ちます・-ります・-います→ -って, -します→ -して (Pengecualian: 行きます→ 行って).\nGrup II: ます dihilangkan lalu tambah て (食べます→ 食べて).\nGrup III: します→ して, 来ます→ 来て.',
    contoh: [],
    artiContoh: []
  },
  {
    no: 3,
    pola: 'Kata Kerjaて ください',
    penjelasan: 'Pola kalimat ini digunakan untuk meminta tolong, menyuruh, atau mempersilakan orang lain melakukan sesuatu dengan sopan.',
    contoh: ['辞書を 貸して ください。', 'ゆっくり 話して ください。'],
    artiContoh: ['Tolong pinjamkan kamus.', 'Tolong bicara pelan-pelan.']
  },
  {
    no: 4,
    pola: 'Kata Kerjaて います',
    penjelasan: 'Menyatakan bahwa suatu kegiatan atau aksi sedang berlangsung pada saat pembicaraan dilakukan (sedang).',
    contoh: ['ミラーさんは 今 電話を かけて います。', '今 雨が 降って いますか。……はい、降って います。'],
    artiContoh: ['Sdr. Miller sekarang sedang menelepon.', 'Apakah sekarang hujan sedang turun? ……Ya, sedang turun.']
  },
  {
    no: 5,
    pola: 'Kata Kerjaましょうか',
    penjelasan: 'Pola ini digunakan ketika pembicara menawarkan bantuan untuk melakukan sesuatu bagi lawan bicara.',
    contoh: ['タクシーを 呼びましょうか。……すみません。お願いします。', '荷物を 持ちましょうか。……いいえ、けっこうです。'],
    artiContoh: ['Bagaimana kalau saya panggilkan taksi? ……Maaf. Tolong (panggilkan).', 'Bagaimana kalau saya bawakan barangnya? ……Tidak usah, terima kasih.']
  },
  {
    no: 6,
    pola: 'Kata Benda が Kata Kerja',
    penjelasan: 'Bila membicarakan fenomena alam yang sedang ditangkap oleh pancaindra secara objektif, benda/subjeknya ditunjukkan dengan partikel が.',
    contoh: ['雨が 降って います。'],
    artiContoh: ['Hujan turun.']
  }
]

export const catatanTataBahasa: Bunpou[] = []
