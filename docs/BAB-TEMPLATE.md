# Template & Checklist Per-Bab

Panduan untuk menambah Bab 2–25 **tanpa mengulang kesalahan audit**.

## 1. Offset halaman
`PDF index = halaman cetak + 21` (Honsatsu) · Indonesia `= cetak + 20`

**Jangan pakai rumus `8N−2`** — bab 6, 13, 19, 22 masing-masing 10 halaman.
Sumber kebenaran: ToC Honsatsu (`tmp/tocmnn1/`).

| Bab | PDF idx (Honsatsu) | hal. cetak |
|---|---|---|
| 1 | 27–34 | 6–13 |
| 6 | 67–76 | 46–55 |
| 7 | 77–84 | 56–63 |
| 13 | 125–134 | 104–113 |
| 18 | 167–174 | 146–153 |
| 19 | 175–184 | 154–163 |
| 20 | 185–192 | 164–171 |
| 21 | 193–200 | 172–179 |
| 22 | 201–210 | 180–189 |
| 23 | 211–218 | 190–197 |
| 24 | 219–226 | 198–205 |
| 25 | 227–234 | 206–213 |

Indonesia: Pelajaran N mulai cetak `6N+4` → idx `6N+24` (mis. bab19 → idx 138, bab25 → idx 174).
MNN2: Honsatsu `cetak + 18`, Indonesia `cetak + 21`.

## 2. Struktur konten
- Kosakata: `kana`, `kanji?`, `arti`, `catatan?`, `contoh?`. **Tidak ada romaji di buku** — kolom romaji disembunyikan default & jika dibutuhkan isi *generated* + badge "transliterasi app".
- `bunpou` = pola 文型 buku (umumnya 4). Catatan tata bahasa dari PDF Indonesia (`の`, `～さん`, dll.) masuk `catatanTataBahasa`.
- `reibun`: tiap baris = 1 kalimat + terjemahan.
- `kaiwa`: `dialog[].arti` **wajib** (ambil dari PDF Indonesia, terjemahan 1:1 dengan dialog JP).
- `renshuuA/B/C` & `mondai`: pecahkan per butir. `mondai` listening → `kunciTersedia:false` + `instruksi`, **bukan** `jawaban:''`.
- `konteks`: tabel karakter/acuan untuk renshuu B.
- `bunsho`: taruh hanya kalau bab punya bacaan; kalau tidak → `[]`.
- `rangkuman`: **jangan ditaruh** bila tidak ada di buku (Bab 1 tidak punya).

## 3. Audio — manifest, BUKAN hardcode
Setiap bab punya **1 kaiwa** (selalu tepat 1, bukan 0/2), jumlah mondai bervariasi 2–4 (Bab 4 = 4).

`public/audio/babNN_kaiwa.mp3`, `babNN_mondai1.mp3` … `babNN_mondaiN.mp3`.

Reference dari `manifest.ts` (belum dibuat — tentukan dari `Get-ChildItem public/audio`).

## 4. Verifikasi sebelum publish bab
- [ ] `npm run validate:bab` hijau (id kosakata unik, audio ada, mondai == track, `jawaban` terisi bila `kunciTersedia`, tidak ada `\n` telanjang di string soal yang dirender tanpa pre-line).
- [ ] Terjemahan kaiwa dipetik dari PDF Indonesia (bukan karangan).
- [ ] Tidak ada field `bunsho`/`rangkuman` bila bagian itu kosong di buku.

## 5. Bug yang sudah terkonfirmasi di Bab 1 (jangan di-fix lagi)
- `神戸病院` (こうべびょういん) — **sudah benar**. (Agent salah menulis 神戸医院.)
- `ワット`, `サンタス` — **sudah benar**. (bukan アット / サンダス.)
- Dialog kaiwa: 佐藤→山田→(intro Miller)→ミラー(4 baris)→佐藤(2 baris) — **sudah benar**. (Agent mengganti urutan.)

