import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 15 — fokus 文型:
//  (1) Kata Kerjaて も いいです  (2) Kata Kerjaて います (keadaan)
//  + catatan: ～ては いけません , 知っています , Kata Benda に Kata Kerja
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou/kosakata Bab 15 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerjaて も いいです', arti: 'Boleh minta katalog ini?', kata: ['この', 'カタログを', 'もらっても いいですか'], jawaban: 'この カタログを もらっても いいですか', penjelasan: '～て も いいですか = meminta izin.' },
  { id: 's2', fokus: 'Kata Kerjaて も いいです', arti: 'Boleh meminjam kamus ini?', kata: ['この', '辞書を', '借りても いいですか'], jawaban: 'この 辞書を 借りても いいですか', penjelasan: '借ります (Grup II) → 借りても いいですか.' },
  { id: 's3', fokus: 'Kata Kerjaて も いいです', arti: 'Boleh menggunakan telepon ini?', kata: ['この', '電話を', 'つかっても いいですか'], jawaban: 'この 電話を つかっても いいですか', penjelasan: 'つかいます (Grup I) → つかっても いいですか.' },
  { id: 's4', fokus: 'Kata Kerjaて も いいです', arti: 'Boleh duduk di sini?', kata: ['ここに', 'すわっても いいですか'], jawaban: 'ここに すわっても いいですか', penjelasan: 'Partikel に menandai tempat duduk.' },
  { id: 's5', fokus: 'Kata Kerjaて も いいです', arti: 'Boleh pulang?', kata: ['帰っても', 'いいですか'], jawaban: '帰っても いいですか', penjelasan: '帰ります → 帰っても いいですか.' },
  { id: 's6', fokus: 'Kata Kerjaては いけません', arti: 'Tidak boleh merokok di sini.', kata: ['ここで', 'たばこを', '吸っては いけません'], jawaban: 'ここで たばこを 吸っては いけません', penjelasan: '～ては いけません menyatakan larangan.' },
  { id: 's7', fokus: 'Kata Kerjaては いけません', arti: 'Tidak boleh bermain di sini.', kata: ['ここで', '遊んでは いけません'], jawaban: 'ここで 遊んでは いけません', penjelasan: '遊びます (Grup I) → 遊んでは いけません.' },
  { id: 's8', fokus: 'Kata Kerjaては いけません', arti: 'Tidak boleh memarkir sepeda di sini.', kata: ['ここに', '自転車を', 'とめては いけません'], jawaban: 'ここに 自転車を とめては いけません', penjelasan: 'とめます (Grup II) → とめては いけません.' },
  { id: 's9', fokus: '知っています', arti: 'Apakah tahu nomor telepon kantor wali kota?', kata: ['市役所の', '電話番号を', '知っていますか'], jawaban: '市役所の 電話番号を 知っていますか', penjelasan: 'Bentuk positif dari 知ります dipakai dalam bentuk ～て います.' },
  { id: 's10', fokus: '知っています', arti: 'Tidak, tidak tahu.', kata: ['いいえ', '知りません'], jawaban: 'いいえ 知りません', penjelasan: 'Bentuk negatif dari 知っています adalah 知りません.' },
  { id: 's11', fokus: 'Kata Kerjaて います', arti: 'Sdr. Maria tinggal di Osaka.', kata: ['マリアさんは', '大阪に', '住んで います'], jawaban: 'マリアさんは 大阪に 住んで います', penjelasan: '住んで います = keadaan tinggal sekarang.' },
  { id: 's12', fokus: 'Kata Kerjaて います', arti: 'Boleh tahu apakah Sdr. Wang sudah berkeluarga?', kata: ['ワンさんは', '結婚していますか'], jawaban: 'ワンさんは 結婚していますか', penjelasan: '結婚しています = sudah menikah (keadaan).' },
  { id: 's13', fokus: 'Kata Kerjaて います', arti: 'Saya tinggal di Kyoto.', kata: ['わたしは', '京都に', '住んで います'], jawaban: 'わたしは 京都に 住んで います', penjelasan: 'Sama seperti 住んで います, menyatakan tempat tinggal.' },
  { id: 's14', fokus: 'Kata Kerjaて います', arti: 'Sdr. Miller mengajar bahasa Inggris di perusahaan.', kata: ['ミラーさんは', '会社で', '英語を', 'おしえて います'], jawaban: 'ミラーさんは 会社で 英語を おしえて います', penjelasan: '～て います menyatakan pekerjaan/kebiasaan.' },
  { id: 's15', fokus: 'Kata Kerjaて います', arti: 'Tinggal di mana? ……Tinggal di Osaka.', kata: ['どこに', '住んで いますか', '大阪に', '住んで います'], jawaban: 'どこに 住んで いますか 大阪に 住んで います', penjelasan: 'Tanya-jawab tempat tinggal dengan ～て います.' },
  { id: 's16', fokus: 'Kata Benda に Kata Kerja', arti: 'Tidak boleh masuk ke sini.', kata: ['ここに', '入っては いけません'], jawaban: 'ここに 入っては いけません', penjelasan: '入ります memakai partikel に untuk tempat masuk.' },
  { id: 's17', fokus: 'Kata Benda に Kata Kerja', arti: 'Boleh duduk di sini?', kata: ['ここに', '座っても いいですか'], jawaban: 'ここに 座っても いいですか', penjelasan: 'Partikel に menunjukkan tempat subjek berada.' },
  { id: 's18', fokus: 'Kata Kerjaて います', arti: 'IMC membuat perangkat lunak komputer.', kata: ['IMCは', 'コンピューターソフトを', '作って います'], jawaban: 'IMCは コンピューターソフトを 作って います', penjelasan: '作って います = memproduksi (kebiasaan/usaha).' },
  { id: 's19', fokus: 'Kata Kerjaて も いいです', arti: 'Boleh merokok? ……Maaf, sedikit……', kata: ['たばこを', '吸っても いいですか', 'すみません', 'ちょっと……'], jawaban: 'たばこを 吸っても いいですか すみません ちょっと……', penjelasan: 'Permintaan izin bisa ditolak halus dengan すみません、ちょっと…….' },
  { id: 's20', fokus: 'Kata Kerjaては いけません', arti: 'Karena dilarang merokok, tidak boleh merokok di sini.', kata: ['禁煙ですから', 'ここで', 'たばこを', '吸っては いけません'], jawaban: '禁煙ですから ここで たばこを 吸っては いけません', penjelasan: 'Alasan dengan ～ですから diikuti larangan.' },
]
