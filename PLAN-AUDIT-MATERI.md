# PLAN — Audit Materi Bunpou (Bab 1–50) vs Buku

> **Status: TERTUNDA** (dihentikan atas permintaan user, 2026-10-17).
> Tujuan: memastikan **seluruh 50 bab** cocok dengan buku sumber
> — `Minna No Nihongo 1 (Indonesia).pdf`, `Minna No Nihongo 2 (Indonesia).pdf` (terjemahan resmi),
> dan Honsatsu Kanji-Kana (sisi Jepang).
> **Belum ada satu pun file repo yang diubah.** Repo tetap bersih.
> **Bahan audit sudah siap semua**: OCR kedua PDF Indonesia ✅ · 50 render halaman 文型 Honsatsu ✅ ·
> peta halaman buku dari bookmark ✅. Yang belum: re-OCR berkoordinat + perbaikan data.
> Pelengkap: `AGENTS.md` (§2 aturan data, §3 kesalahan lampau), `PLAN.md`.

---

## 1. Kesimpulan cepat

- Struktur data **sudah lengkap**: 50 bab, **178 文型 (`bunpou`) + 159 `catatanTataBahasa` = 337 pola**
  (×5 soal = 1.685 soal kuis). `npm run validate` / `audit` sudah 0 error.
- Yang bermasalah **bukan kelengkapan**, tapi **kesesuaian isi `bunpou` dengan buku**
  (contoh kalimat + label pola) pada sebagian bab.
- **Sudah pasti salah (bukti cetak)**: bab **24**, **22**, **8**.
- **Dugaan, masih perlu ditegaskan**: `contoh` di banyak bab diambil dari **練習A**, bukan dari
  bagian **「文型 / Terjemahan > Pola Kalimat」** buku (contoh nyata: bab 15).

---

## 2. Temuan yang SUDAH PASTI (siap dieksekusi)

### 2.1 Bab 24 — `bunpou.contoh` 文型 1 & 2 tidak sesuai buku 🔴

Sumber: Honsatsu cetak 204 (idx **223**) + PDF Indonesia cetak 150 (idx **170**).

| # | Buku (JP, 文型) | Terjemahan ID buku | Data app sekarang | Aksi |
|---|---|---|---|---|
| 1 | 佐藤さんは わたしに **チョコレート**を くれました | Sdr. Sato memberikan saya **coklat** | ❌ 佐藤さんは わたしに **クリスマスカード**を くれました / "kartu Natal" | ganti |
| 2 | わたしは 山田さんに **レポートを 直して** もらいました | Saya menerima bantuan dari Sdr. Yamada untuk **mengoreksikan laporan** | ❌ わたしは **木村さんに 本を 貸して あげました** | ganti |
| 3 | 母は わたしに セーターを 送って くれました | Ibu mengirimi saya sweater | ❌ わたしは 山田さんに **病院の 電話番号を 教えて** もらいました | ganti |
| 4 | わたしは 木村さんに 本を 貸して あげました | Saya meminjamkan buku kepada Sdr. Kimura | ✅ benar | — |

Tambahan: bab **24** satu-satunya bab yang `pola`-nya diisi **kalimat terjemahan penuh**
(`'Sdr. Sato memberikan saya kartu Natal.'`). `pola` harus berupa **kerangka pola**
(lihat konvensi bab lain, mis. `'Kata Benda1 は わたしに Kata Benda2 を くれます'`).

⚠️ Catatan penting: `catatanTataBahasa` bab 24 memang memakai クリスマスカード
(seksi 説明 buku). Jadi **jangan** hapus contoh itu dari `catatan`, hanya `bunpou` yang dibetulkan.

### 2.2 Bab 22 — label `pola` kembar & `penjelasan` disalin 4× 🟡

- `bunpou[1..3].pola` semuanya `'Anak Kalimat'` (bukan pembeda), dan `penjelasan` yang sama
  ditempel di **4 entri** (`bunpou#1,2,3` + `catatan#1`).
- **Isi `contoh`/`artiContoh` bab 22 sudah cocok buku** (4/4 match) — jadi ini soal label, bukan data.
- Keputusan yang perlu diambil: (a) `pola` = kerangka masing-masing 文型, atau
  (b) tetap satu topik "Anak Kalimat" tapi `penjelasan` dipangkas agar tidak kembar 4×.
- Perlu dicek ulang: 文型 3 — app `きのう 習った ことばを 忘れました` vs buku cetak
  `きのう 習った ことは 忘れました`. (Render: `render2/m1bunpou_205.jpg`.)

### 2.3 Bab 8 — `penjelasan` 文型1 = 文型2 🟡

Penjelasan identik pada `bunpou#1` dan `bunpou#2` — kandidat copy-paste. Perlu verifikasi
ke `render2/m1bunpou_085.jpg` sebelum diubah.

### 2.4 Bab 15 — `contoh` pakai kalimat 練習A, bukan 文型 🔴

| | Buku (文型) | App sekarang |
|---|---|---|
| 1 | 写真を 撮っても いいですか | ❌ このカタログを もらっても いいですか |
| 2 | サントスさんは 電子辞書を 持っています | ❌ IMCは コンピューターソフトを 作っています |

Rujukan: `render2/m1bunpou_145.jpg` (buku) + PDF Indonesia idx 116.

---

## 3. Dugaan sistemik (perlu ditegaskan setelah re-OCR)

Pembanding otomatis (bab 1–25) sempat menghasilkan tabel:

| Vonis | Bab |
|---|---|
| OK | 1, 4, 5, 7, 8\*, 18, 22\*, 23, 25 |
| PERIKSA | 3, 13, 19 |
| TIDAK COCOK | 2, 6, 9, 10, 11, 12, 14, 15, 16, 17, 20, 21, 24 |

\* bab 8 & 22 = OK dari sisi `contoh`, cacatnya di `penjelasan`/`pola` (§2.2, §2.3).

⚠️ **Tabel ini BELUM bisa dipercaya**: urutan baris hasil RapidOCR **kacau** (bukti: halaman
`Pola Kalimat` bab 2 butirnya terpecah ke baris 3/4/6, hanya 2 dari 4 yang terjaring).
Harus diulang dengan **sort koordinat** (lihat §5 langkah 1).

Hipotesis kerja: banyak `bunpou.contoh` diambil dari **練習A**, padahal `AGENTS.md` §2
menetapkan `pola`/`contoh`/`arti` **WAJIB** dari seksi **Terjemahan > Pola Kalimat**.
Bila hipotesis ini benar, dampaknya besar (belasan bab) — **konfirmasi dulu, baru ubah**.

---

## 4. Yang BUKAN cacat — JANGAN "diperbaiki" (penting, lihat AGENTS.md §3 #9)

| Pola yang tampak aneh | Bab | Kenyataan |
|---|---|---|
| `pola` berupa nama pola berbahasa Indonesia (`'Kata Kerja Bentuk Biasa'`, `'Penggolongan Kata Kerja'`) | 7,11,12,14,17,18,20,27,31,35,37,41,48,49,50 | memang kerangka pola — **wajar** |
| `contoh` sama antara `bunpou#N` ↔ `catatan#M` (lintas seksi) | 6,8,18,21,22,24,25,28,31,35,37,38,41,46,48,49,50 | buku memang mengulang kalimat di 説明 — **wajar** |
| `contoh: []` (tanpa kalimat contoh) | bab 8 catatan#1, 14 bunpou#1–2, 18 catatan#1, 20 catatan#2 | tabel konjugasi (Penggolongan KK / Bentuk て) — **wajar** |
| `catatanTataBahasa = 0` | 9, 10, 11, 12, 13, 14, 32 | isinya ada tapi menyatu di `bunpou`. **Perlu dicek apakah buku punya seksi IV terpisah** — kalau tidak, biarkan |

Selain itu, **jangan sentuh** fakta terverifikasi `AGENTS.md` §4.

---

## 5. Langkah lanjutan (checklist saat dilanjutkan)

1. **Re-OCR dengan koordinat** (25 hlm MNN1 + 25 hlm MNN2) → `pola_id1.json`, `pola_id2.json`
   ```powershell
   cd "C:\Users\Amir\.opencode\plan"
   $m1 = 'D:\A_bahasa_jepang\MINNA NO NIHONGO\Minna No Nihongo 1\Minna No Nihongo 1 (Indonesia).pdf'
   python hal_pola.py $m1 pola_id1.json (1..25 | % { 6*$_ + 26 })   # halaman 'Pola Kalimat' MNN1
   ```
   MNN2: rumus peta halaman **belum ditentukan** (tentukan dari `--debug` setelah OCR ID2 selesai).
2. ~~Selesaikan OCR PDF Indonesia 2 (bab 26–50)~~ ✅ **SELESAI** — `ocr_id2.json` (halaman 0–179):
   ```
   python ocr_id.py "<Minna No Nihongo 2 (Indonesia).pdf>" 0 179 ocr_id2.json 150
   ```
3. `bandingkan.py` harus membaca `pola_id*.json` (belum diubah — masih pakai `ocr_id*.json`).
   Setelah itu: daftar final per bab (butir buku ↔ `artiContoh` app, skor kemiripan).
4. **Verifikasi sisi Jepang secara visual** pakai render yang sudah jadi
   (`render2/m1bunpou_<idx>.jpg`, `render2/m2bunpou_<idx>.jpg`). Baca **maks 6 gambar per pesan**.
5. **Perbaiki 1 bab = 1 commit** (keputusan user). Tiap bab:
   - betulkan `src/data/babNN/bunpou.ts` (pola / contoh / artiContoh / penjelasan)
   - `npm run check:full` + `npm run test` + `npm run guard`
   - commit + push (Vercel auto-deploy dari `main`)
6. Khusus **bab 9–14, 32**: putuskan perlu/tidaknya memisahkan seksi `catatanTataBahasa`.
7. Terakhir: tulis **ringkasan bunpou per bab** (lihat §7) ke `AGENTS.md` + sinkronkan
   `PLAN.md` dan `docs/AI-MAP.md`.

---

## 6. Peta halaman buku (TERVERIFIKASI dari bookmark PDF, bukan tebakan)

**Halaman 文型 Honsatsu (idx 0-based)** — `python toc.py <pdf> | Select-String 'Dai \d+ Ka'`:

| Bab | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| idx | 25 | 33 | 41 | 51 | 59 | 67 | 75 | 85 | 93 | 101 | 109 | 117 | 129 |

| Bab | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| idx | 137 | 145 | 153 | 163 | 171 | 179 | 189 | 197 | 205 | 215 | 223 | 231 |

MNN2: 26→24, 27→32, 28→40, 29→48, 30→56, 31→66, 32→74, 33→82, 34→90, 35→98, 36→110,
37→118, 38→126, 39→134, 40→142, 41→152, 42→160, 43→168, 44→176, 45→184, 46→194, 47→202,
48→210, 49→218, 50→226.

**Halaman「Pola Kalimat」PDF Indonesia (idx 0-based)**: `idx = 6·N + 26`
(bab 1→32, 11→92, 22→158, 24→170 — semuanya cocok).

---

## 7. Ringkasan jumlah pola per bab (untuk `AGENTS.md` nanti)

`bunpou/catatan` (jumlah ×5 = soal kuis bab itu):

`1:4/2 · 2:4/2 · 3:2/5 · 4:4/6 · 5:3/4 · 6:4/6 · 7:4/6 · 8:4/11 · 9:5/0 · 10:5/0 · 11:4/0 · 12:4/0 · 13:4/0 · 14:6/0 · 15:2/4 · 16:4/3 · 17:3/3 · 18:3/6 · 19:3/4 · 20:4/3 · 21:2/7 · 22:4/3 · 23:4/1 · 24:4/3 · 25:2/5 · 26:4/3 · 27:4/2 · 28:3/5 · 29:3/3 · 30:2/3 · 31:4/3 · 32:6/0 · 33:4/2 · 34:3/3 · 35:3/6 · 36:4/2 · 37:3/7 · 38:4/3 · 39:4/1 · 40:3/2 · 41:4/4 · 42:4/2 · 43:4/1 · 44:4/2 · 45:2/2 · 46:3/3 · 47:3/3 · 48:2/4 · 49:4/7 · 50:2/2`

Total: **178 文型 + 159 catatan = 337 pola** (MNN I 1–25 · MNN II 26–50).

---

## 8. Perkakas audit (di `C:\Users\Amir\.opencode\plan`, TIDAK masuk repo)

| Berkas | Fungsi | Status |
|---|---|---|
| `audit_bunpou.py` / `audit_bunpou.txt` | audit struktur 50 bab (duplikat, kosong, dll) | ✅ selesai |
| `bandingkan.py` / `bandingkan.txt` | bandingkan `Pola Kalimat` buku ↔ data app | ✅ bab 1–25 (perlu update ke `pola_id*.json`) |
| `hal_pola.py` | OCR ulang per halaman **dengan koordinat** (sort y,x) | ⏹ terhenti di 14/25 hlm |
| `render_hal.py` | render halaman PDF → JPEG | ✅ selesai |
| `toc.py` | peta halaman dari bookmark PDF (tanpa OCR) | ✅ selesai |
| `ocr_id.py` | OCR PDF Indonesia → JSON per halaman | ✅ selesai (ID1 + ID2) |
| `ocr_id1.json` | teks PDF Indonesia bab 1–25 (halaman 0–203) | ✅ ada (264 KB) |
| `ocr_id2.json` | teks PDF Indonesia bab 26–50 (halaman 0–179) | ✅ ada |
| `render2/m1bunpou_*.jpg`, `m2bunpou_*.jpg` | 25 + 25 halaman 文型 Honsatsu | ✅ ada |

---

## 9. Jebakan yang sudah memakan korban (jangan diulang)

1. **Urutan baris RapidOCR KACAU.** Jangan percaya urutan `res` dari `RapidOCR()`
   tanpa menyortir per koordinat `(y, x)` — sudah membuat vonis bab 2 salah.
2. **Konsol PowerShell menampilkan kana/kanji sebagai `?`** — itu artefak codepage,
   **bukan** data rusak (AGENTS.md §3 #12). Verifikasi selalu lewat berkas/Python.
3. **Jangan pakai `--window-size` untuk cek mobile** (AGENTS.md §3 #18) — pakai CDP
   device emulation.
4. **Jangan menyimpulkan dari tabel otomatis tanpa membaca `bunpou.ts`** — banyak pola
   "aneh" ternyata wajar (§4).
5. RapidOCR **tidak bisa** membaca kana/kanji untuk PDF MNN (AGENTS.md §3 #13) —
   sisi Jepang **wajib** dibaca visual dari `render2/*.jpg`.
