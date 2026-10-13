import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 50 — fokus 文型:
//  (1) お／ご〜します（謙譲語 I）
//  (2) 謙譲語 Khusus（参ります・おります・いただきます・もうします・いたします・
//      はいけんします・ぞんじて おります・うかがいます・お目に かかります）
//  + catatan: ましょうか untuk menawarkan bantuan
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 50 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'お〜します', arti: 'Keliatannya berat, ya. Mari saya bawa!', kata: ['重そうですね。', 'お持ちしましょうか'], jawaban: '重そうですね。 お持ちしましょうか', penjelasan: 'お + Bentuk ます + します (merendahkan diri sendiri).' },
  { id: 's2', fokus: 'お〜します', arti: 'Saya yang menyampaikan jadwal kepada direktur.', kata: ['私が', '社長に', 'スケジュールを', 'お知らせします'], jawaban: '私が 社長に スケジュールを お知らせします', penjelasan: '知らせます → お知らせします.' },
  { id: 's3', fokus: 'お〜します', arti: 'Kakak laki-laki saya yang mengantarkan (Anda) dengan mobil.', kata: ['兄が', '車で', 'お送りします'], jawaban: '兄が 車で お送りします', penjelasan: '送ります → お送りします.' },
  { id: 's4', fokus: 'ご〜します', arti: 'Mari (saya) antarkan (Anda) ke Museum Edo Tokyo.', kata: ['江戸東京博物館へ', 'ご案内します'], jawaban: '江戸東京博物館へ ご案内します', penjelasan: 'Kata Kerja Kelompok III memakai ご + します (ご案内します).' },
  { id: 's5', fokus: 'ご〜します', arti: '(Saya) menjelaskan jadwal hari ini.', kata: ['きょうの 予定を', 'ご説明します'], jawaban: 'きょうの 予定を ご説明します', penjelasan: '説明します → ご説明します.' },
  { id: 's6', fokus: 'お〜します', arti: 'Saya yang membawakan kue untuk direktur.', kata: ['私が', '社長に', 'ケーキを', 'お届けします'], jawaban: '私が 社長に ケーキを お届けします', penjelasan: '届けます → お届けします.' },
  { id: 's7', fokus: 'ご〜します', arti: 'Saya akan menyampaikan (hal ini) kepada direktur.', kata: ['私が', '社長に', 'ご連絡します'], jawaban: '私が 社長に ご連絡します', penjelasan: '連絡します → ご連絡します.' },
  { id: 's8', fokus: 'お〜します', arti: 'Mari saya panggilkan taksi.', kata: ['タクシーを', 'お呼びします'], jawaban: 'タクシーを お呼びします', penjelasan: '呼びます → お呼びします.' },
  { id: 's9', fokus: 'お〜します', arti: 'Mari saya bawakan kopi.', kata: ['コーヒーを', 'お入れします'], jawaban: 'コーヒーを お入れします', penjelasan: 'Kata Kerja Kelompok II juga memakai お〜します.' },
  { id: 's10', fokus: '謙譲語 Khusus（参ります）', arti: 'Besok siapa yang datang untuk membantu? …… Saya yang datang.', kata: ['あしたは だれが 手伝いに 来て くれますか。', '私が', '参ります'], jawaban: 'あしたは だれが 手伝いに 来て くれますか。 私が 参ります', penjelasan: '来ます → 参ります (bentuk merendahkan diri).' },
  { id: 's11', fokus: '謙譲語 Khusus（おります）', arti: 'Keluarga (saya) ada di New York.', kata: ['家族は', 'ニューヨークに', 'おります'], jawaban: '家族は ニューヨークに おります', penjelasan: 'います → おります (pihak sendiri).' },
  { id: 's12', fokus: '謙譲語 Khusus（もうします）', arti: 'Salam kenal. Saya Miller.', kata: ['初めまして。', 'ミラーと', '申します'], jawaban: '初めまして。 ミラーと 申します', penjelasan: '言います → 申します.' },
  { id: 's13', fokus: '謙譲語 Khusus（いただきます）', arti: 'Di rumah sdr. Schmidt saya makan masakan Jerman.', kata: ['シュミットさんの お宅で', 'ドイツ料理を', 'いただきました'], jawaban: 'シュミットさんの お宅で ドイツ料理を いただきました', penjelasan: '食べます → いただきます (merendahkan diri).' },
  { id: 's14', fokus: '謙譲語 Khusus（はいけんします）', arti: 'Saya melihat dulu foto pernikahannya.', kata: ['結婚式の 写真を', '拝見しました'], jawaban: '結婚式の 写真を 拝見しました', penjelasan: '見ます → 拝見します.' },
  { id: 's15', fokus: '謙譲語 Khusus（うかがいます）', arti: 'Kemarin saya berkunjung ke rumah guru.', kata: ['きのう', '先生の お宅へ', 'うかがいました'], jawaban: 'きのう 先生の お宅へ うかがいました', penjelasan: '訪問します／行きます → うかがいます.' },
  { id: 's16', fokus: '謙譲語 Khusus（ぞんじて おります）', arti: 'Ya, saya tahu nama perdana menteri Jepang.', kata: ['はい、日本の 首相の 名前を', '存じて おります'], jawaban: 'はい、日本の 首相の 名前を 存じて おります', penjelasan: '知って います → 存じて おります.' },
  { id: 's17', fokus: '謙譲語 Khusus（お目に かかります）', arti: 'Saya berjumpa dengan istri direktur.', kata: ['社長の 奥様に', 'お目に かかりました'], jawaban: '社長の 奥様に お目に かかりました', penjelasan: 'あいます → お目に かかります (bentuk khusus).' },
  { id: 's18', fokus: '謙譲語 Khusus（いたします）', arti: 'Bulan depan saya akan pindah ke pinggiran Tokyo.', kata: ['さ来月', '東京の 郊外に', '引っ越しいたします'], jawaban: 'さ来月 東京の 郊外に 引っ越しいたします', penjelasan: 'します → いたします.' },
  { id: 's19', fokus: '謙譲語 Khusus（まいります）', arti: 'Sekitar pukul 3 saya akan pergi ke sana.', kata: ['3時ごろ', 'そちらへ', '参ります'], jawaban: '3時ごろ そちらへ 参ります', penjelasan: '行きます → 参ります (pihak pembicara).' },
  { id: 's20', fokus: 'お〜します（ましょうか）', arti: 'Mari saya bantu. ……Maaf, tolong ya.', kata: ['お手伝いしましょうか。', 'すみません。', 'お願いします'], jawaban: 'お手伝いしましょうか。 すみません。 お願いします', penjelasan: 'お〜しましょうか menawarkan diri membantu.' },
]
