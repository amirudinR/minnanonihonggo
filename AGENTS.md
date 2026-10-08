# AGENTS.md — Aturan Kerja untuk AI/Agent

> **Baca ini DULU sebelum mengubah apa pun.**
> File ini adalah sumber kebenaran aturan + daftar kesalahan yang **sudah pernah terjadi**.
> Tujuan: agent baru **tidak mengulang kesalahan yang sama**.
> Pelengkap: `PLAN.md` (rencana & keputusan), `docs/BAB-TEMPLATE.md` (checklist per bab), `README.md` (cara jalan).
>
> Terakhir diperbarui: sesi lengkapi MNN2 — Bab 1–50 sekarang LENGKAP (50/50 bab).

---

## 0. Konteks proyek (ringkas)

Aplikasi belajar **Minna no Nihongo 1 (Bab 1–25)**, offline, bergaya buku catatan kertas. MNN2 (Bab 26–50) memakai skema sama dan **sudah lengkap** (50/50 bab).
Stack: **React 19 + TypeScript + Vite 6 + Tailwind CSS v4 (`@tailwindcss/vite`) + react-router v7 + Zustand**. Data per bab di `src/data/babNN/` (registry otomatis via `import.meta.glob`).

Perintah:
```bash
npm run dev        # port 5173
npm run typecheck  # tsc --noEmit
npm run build      # typecheck + vite build
npm run validate   # validasi data bab (tsx tools/validate.ts)
npm run audit      # audit kelengkapan data bab
npm run check      # validate + typecheck (loop cepat, TANPA build)
npm run check:full # validate + typecheck + vite build (gerbang "selesai")
```

---

## 1. ATURAN KERAS (jangan dilanggar)

1. **Jangan gitignore `public/audio` dihapus.** Audio (164 MB, hak cipta) sengaja TIDAK di-commit. Jangan `git add -f` audio, jangan push mp3.
2. **Jangan menambah dependensi UI** (tanpa izin). Tema dibuat dengan CSS murni + token. `tsx` hanya untuk tooling validasi (devDependency).
3. **Tailwind v4 CSS-first** — TIDAK ADA `tailwind.config.js` / `postcss.config.js`. Token di `src/styles/tokens.css` (`@theme`). Jangan membuat file config Tailwind.
4. **Jangan "memperbaiki" fakta yang sudah diverifikasi** di §4 dan `docs/BAB-TEMPLATE.md` §5. Agent sebelumnya sudah beberapa kali salah dan "membetulkan" data yang sebenarnya benar.
5. **Setiap `setState` ke store Zustand harus idempoten** (lihat §3 kesalahan #1). Ini pernah menyebabkan *infinite render loop* yang mematikan halaman.
6. **Selalu jalankan `npm run typecheck` + `npm run build` + `npm run validate`** sebelum menyatakan selesai. Jangan mengklaim "beres" tanpa bukti. Untuk loop kerja cepat pakai `npm run check` (tanpa build); gerbang akhir tetap `npm run check:full`.
7. **Verifikasi visual nyata** untuk perubahan tampilan (screenshot), bukan sekadar "seharusnya tampil".
8. **Jangan commit kunci/rahasia.** Jangan `git config` global, jangan force-push ke `main`.

---

## 2. Aturan data (per bab)

- **Offset halaman PDF: `idx = halaman cetak + 21`.** Bab 1 = cetak 6–13 = idx 27–34.
- **Romaji TIDAK dicetak di buku.** Kolom romaji default tersembunyi; kalau diisi, itu *transliterasi app*, jangan anggap data buku.
- `bunpou` = pola 文型 buku (umumnya 4). Catatan tata bahasa (mis. `の`, `～さん`) masuk `catatanTataBahasa` **(penomoran mulai dari 1, TERPISAH dari bunpou)**.
- `kaiwa.dialog[].arti` **wajib** diisi dari PDF terjemahan Indonesia (1:1, bukan karangan).
- **Pola kalimat (`bunpou`)**: penjelasan `pola`/`contoh`/`arti` WAJIB diambil dari PDF Indonesia, section **"Terjemahan Pola Kalimat"** (pola Indonesia paling jelas di situ). Jangan mengandalkan terjemahan karangan dari buku JP.
- Audio: **1 kaiwa per bab (selalu tepat 1)**; mondai **bervariasi 2–4** (Bab 4 = 4). **JANGAN hardcode mondai1..3** — pakai `src/core/audio/manifest.ts`.
- Mondai mendengarkan (listening): `kunciTersedia:false` + `instruksi`, **bukan** `jawaban:''`.
- `bunsho` / `rangkuman`: hanya diisi bila buku punya; kalau tidak → `[]` / jangan ditaruh.
- Kalimat dengan kanji **wajib punya furigana** (validator akan memperingatkan).

---

## 3. Kesalahan yang SUDAH PERNAH TERJADI (jangan ulangi)

### #1 — Infinite render loop (KRITIS) 🔴
**Gejala:** layar putih + `Maximum update depth exceeded`.
**Sebab:** `KoreksiPanel` memanggil `setSkor()` di `useEffect`, dan `setSkor` **selalu** menulis `lastScoreAt` baru → state selalu berubah → re-render → effect jalan lagi → loop.
**Fix (jangan di-regresi):**
- `setSkor`/`setSelesai` di `src/store/useProgress.ts` **idempoten** — return state lama bila nilai tak berubah.
- **Selector Zustand tidak boleh mengembalikan literal baru tiap render**, mis. `(s) => ...?.bagianSelesai ?? []` ❌. Kembalikan `undefined`/referensi asli, fallback (`?? []`) dipindah ke dalam komponen.

### #2 — Font tidak ter-load (heading jatuh ke Comic Sans) 🔴
**Sebab:** `@font-face` ada tapi `--font-sans` tidak memuat `"Inter"`.
**Fix:** token WAJIB menyertakan font self-host. `--font-sans: "Inter", …`.

### #3 — Inter & Caveat adalah VARIABLE font 🔴
**Sebab:** `Inter-400/500/600/700.woff2` **byte-identik** (file sama disalin), begitu juga Caveat. Diverifikasi lewat `fontTools` (`fvar` axis `wght`; Inter 100–900, Caveat 400–700). Kalam memang static (400 & 700 beda).
**Fix:** satu `@font-face` per family variable dengan weight range penuh (`font-weight: 100 900` + format `woff2-variations`). Jangan bikin 4 deklarasi.

### #4 — Substring match terlalu longgar 🔴
**Sebab:** `isCorrect` lama = `e.includes(u)` → user mengetik 1 karakter ("あ") dianggap benar.
**Fix:** `matchLevel()` (tepat/dekat/belum) dengan ambang panjang minimum + kecocokan token. `isCorrect` = `matchLevel === 'tepat'`.

### #5 — Validator salah bandingkan audio 🔴
**Sebab:** membandingkan jumlah track manifest dengan `bab.mondai.length` (item), padahal hanya mondai tertentu yang punya audio.
**Fix:** hitung `bab.mondai.filter(m => m.audio).length`.

### #6 — Furigana hilang di satu baris kaiwa 🟡
**Gejala:** validator warning `初めまして` mengandung kanji tanpa furigana.
**Fix:** tambahkan furigana. Validator = alat andal menemukan ini; jangan abaikan warning.

### #7 — Penomoran `catatanTataBahasa` salah 🟡
Awalnya bernomor 5,6 (lanjutan bunpou). Harusnya **1,2** (section terpisah).

### #8 — Duplikat rule CSS 🟡
`.cover` didefinisikan 2x di `paper.css` → dead code. Cek sebelum menambah rule.

### #9 — Subagent audit SALAH "membetulkan" data yang BENAR 🟡
Beberapa subagent mengklaim salah dan mengubah data Bab 1 yang sebenarnya sudah benar. **Jangan percaya klaim agent tanpa verifikasi visual ke render halaman sumber** (`tmp/png/honsatsu_p0NN.png`). Lihat §4.

### #10 — Mobile: kolom kana terpotong & overflow horizontal 🟡
**Sebab:** `td:nth-child(1){width:30%}` masih berlaku di mobile.
**Fix:** reset width di media query + `html,body{overflow-x:hidden;max-width:100%}` + padding disesuaikan.

### #11 — Perintah shell (Windows/PowerShell) 🔴
- **Tidak ada `&&`, tidak ada `tail`, tidak ada heredoc (`<<'PY'`).** Gunakan `;`, `Select-Object`, tempah file.
- Bash tool = **PowerShell (pwsh)**. Jangan tulis perintah gaya bash.
- `python -c "..."` OK, tapi here-doc TIDAK.

### #12 — Teks Jepang TAMPIL `?` di terminal PowerShell 🔴 (FALSE ALARM!)
- `Get-Content -Encoding UTF8` **menampilkan kana/kanji sebagai `?`** karena codepage konsol (cp1252) tidak bisa merender huruf Jepang. **Ini BUKAN data rusak.**
- Akibatnya saya pernah salah menghapus `src/data/bab26` & `bab34` yang sebenarnya isinya baik. Verifikasi ulang selalu pakai Python, bukan `Get-Content`:
```powershell
python -c "import io,sys; sys.stdout.reconfigure(encoding='utf-8'); print(io.open(r'src\data\bab02\kosakata.ts',encoding='utf-8').read()[:300])"
```
- Deteksi data benar-benar rusak (hasil OCR): cari `\ufffd` atau rentset `??` (2+ tanda tanya berturut). Sudah jadi aturan otomatis di `src/core/validation/schema.ts` (`cekJp`).

### #13 — OCR (RapidOCR) TIDAK bisa baca kana/kanji 🔴
- `tools/extract_bab.py` (RapidOCR/onnx) **sudah DIHAPUS** — dia hanya bisa baca huruf Latin, sehingga kana/kanji jadi `??`. Semua isi PDF MNN itu berupa scan, jadi:
- **WAJIB baca visual** hasil `python tools/render_pdf.py <pdf> <out> <prefix> <start> <end>` (default 1800px grayscale quality 85, kana/kanji terbaca). Jangan pernah pakai OCR untuk PDF MNN.
- Render JANGAN turunkan width < 1500 atau kana/kanji pecah jadi tidak terbaca.
- Batas memo: baca **maksimal 6 gambar per pesan** (>32MB total akan men-*crash* agent).
- **`render_pdf.py` pakai `dpi=100` → hasil hanya ~656px dan kanji TIDAK terbaca** untuk PDF MNN2. Untukaudit butir yang samar, render sendiri dengan `fitz ... dpi=400` lalu crop pakai `tools/crop_zoom.py`.

### #14 — EDISI Indonesia ≠ EDISI Honsatsu (MNN2) 🔴
- **Jangan pernah menyalin `arti` menurut indeks.** Untuk Bab 28, 37, 41, 46 (dan kemungkinan bab lain) PDF Indonesia memakai *Contoh Kalimat*/*Percakapan* yang **beda isi** dari Honsatsu, walau nomor urut sama.
- Bukti (terverifikasi visual):
  - Bab 28: ID butir 2 = "belajar sambil mendengarkan musik" (JP: テレビ), ID 6 = "restoran sushi" (JP: 田中 旅行), ID 7 = "Universitas Fuji" (JP: さくら大学 = **Sakura**).
  - Bab 28 percakapan: ID 15 baris (punya "Homestay? Bagus."), Honsatsu 8 giliran. Sama persis hanya giliran 1, 2, 8.
  - Bab 37 percakapan: Honsatsu = Bandara Kansai; ID = 「金閣寺」. Total beda.
  - Bab 41 butir 5, Bab 46 butir 1b & 6: beda.
- Aturan main: `arti` harus **1:1 dari PDF Indonesia**. Kalau kalimat JP tidak ada di edisi Indonesia → tulis **terjemahan setia** dari JP + beri komentar `CATATAN EDISI` di header file.Jangan mengarang.

### #15 — Furigana hanya jalan kalau `base` ada LITERAL di teks 🔴
- `BabDetailPage.tsx` → `Ruby` memakai `teks.split(f.base)`. Jadi furigana yang tidak cocok persis **diam-diam tidak dirender**.
- Contoh bug nyata yang ketemu: `base: '申訳'` pada teks `申し訳` (jarak kana di tengah) → 申/訳 tanpa furigana; `base: '使方'` pada `使い方`; `base: '書方'` pada `書き方`; `建物` pada teks yang cuma `ビル`; `分/じ` untuk `時`; base sisa (`付`, `知`, `渡`, `今日`, `今年`, `間違`) untuk kalimat yang kana saja.
- `src/core/validation/schema.ts` **sudah** mendeteksi "furigana base tidak ada di teks" (base milik `pembicara` dikecualikan karena memang tak pernah dirender). Jalankan `npm run validate` dan **Jangan abaikan** warning baru ini.

### #16 — Kanji tanpa furigana BUKAN otomatis bug 🟡
- Buku MNN sengaja tidak memberi furigana pada kanji yang dianggap sudah dikuasai. Karena itu cek "kanji tanpa furigana" hanya jalan bila `VALIDASI_STRICT=1` (PowerShell: `$env:VALIDASI_STRICT=1; npm run validate`). Angka baseline: **103 temuan**, mayoritas sesuai cetakan buku.

---

## 4. FAKTA TERVERIFIKASI — JANGAN "DIPERBAIKI" (sudah benar!)

| Item | Sering salah diklaim | **Yang BENAR** |
|---|---|---|
| Rumah sakit | 神戸医院 (きんこ…) | **神戸病院 = こうべびょういん** |
| Nama | アット | **ワット** |
| Nama | サンダス | **サンタス** |
| Urutan dialog kaiwa | urutan diubah | **佐藤→山田(intro Miller)→ミラー 4 baris→佐藤 2 baris** |
| `k1-07/08` caveat | milik kosakata guru generik | caveat "tak menyebut pekerjaan sendiri" milik **先生** |
| `k1-38` | (perangkat lunak) | **dihapus** — hanya "perusahaan fiksi" |
| `reibun` no6 arti | "…bukan insinyur." | **"…bukan insinyur. Dia dokter."** |
| `renshuuB` no5 | 会社員 | **アメリカ人** |

---

## 5. Arsitektur & konvensi

```
src/
  core/        # domain murni, 0 React
    text/normalize.ts     # stripEnumerators, canonical, matchLevel, isCorrect, countCorrect, adaJawaban
    text/terjemahan.ts    # nilaiTerjemahan (soft-match Jaccard)
    audio/manifest.ts     # MONDAI_COUNT per bab + getAudio + cekKonsistensiAudio
    validation/schema.ts  # validasiBab (pakai import RELATIF, bukan '@/')
  data/
    index.ts              # import.meta.glob('./bab*/index.ts') → auto registry
    babNN/ index · kosakata · bunpou · reibun · kaiwa · renshuu · mondai · konteks
  features/               # vertical slice: flashcard/, kuis/
  store/                  # useProgress (mnn1_progress_v1), useNotes (mnn1_notes_v1)
  pages/                  # HomePage, BabDetailPage, NotFoundPage
  styles/                 # tokens.css (@theme), paper.css (tema kertas)
tools/                    # extract_bab.py (OCR), validate.ts
```

- Alias `@/` → `src/` (di `vite.config.ts` & `tsconfig.json`).
- **`core/validation/schema.ts` pakai impor RELATIF** (`../../types/bab`) karena dijalankan Node/tsx (tanpa resolver alias Vite).
- Tambah bab: `mkdir src/data/babNN` + `index.ts` → registry otomatis. Lalu `npm run validate` + `npm run build`.
- File kecil, < ~200 baris, modular.

### Tema & aksesibilitas (jangan regresi)
- Palet hangat: `--color-paper #f5eddc`, `--color-ink #43382b`, aksen `--color-accent #8a5a2b`, hijau `#2f7d4f`, merah kalem `#b03030`.
- `:focus-visible` 3px, target sentuh ≥44px, hormati `prefers-reduced-motion`.
- Teks Jepang selalu `lang="ja"`.

### Audio — manifest, bukan hardcode
`MONDAI_COUNT` di `src/core/audio/manifest.ts` (terverifikasi dari file fisik):
```
1:3 2:3 3:2 4:4 5:3 6:2 7:3 8:3 9:2 10:3 11:3 12:2 13:2 14:3 15:2
16:3 17:2 18:2 19:2 20:2 21:2 22:2 23:3 24:2 25:2
```
Setiap bab: **1 kaiwa**. Nama file: `babNN_kaiwa.mp3`, `babNN_mondaiN.mp3`.

---

## 6. Verifikasi & tooling

### Screenshot (Chrome headless, CLI — MCP `chrome-devtools` sering gagal)
```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" `
  --headless=new --disable-gpu --no-sandbox --hide-scrollbars `
  --user-data-dir="C:\Users\Amir\AppData\Local\Temp\opencode\cr-prof" `
  --window-size=1200,3000 --virtual-time-budget=6000 `
  --screenshot="D:\LPK\mnn1\tmp\shot.png" "http://localhost:5173/bab/1"
```
Untuk cek runtime error/loop, `--dump-dom` ke file lalu cari `Unexpected Application Error` / `Maximum update depth`.

### Dev server sering mati
Nyalakan ulang: `Start-Process npm.cmd -ArgumentList "run","dev" -WorkingDirectory "D:\LPK\mnn1"; Start-Sleep 8`.

### Definisi "selesai"
- [ ] `npm run typecheck` ✅
- [ ] `npm run build` ✅
- [ ] `npm run validate` ✅ (0 error)
- [ ] Tidak ada error boundary / loop di render nyata
- [ ] Screenshot desktop **dan** mobile diperiksa untuk perubahan UI
- [ ] Tidak menyentuh fakta terverifikasi §4

---

## 7. Git & GitHub

- Remote: `https://github.com/amirudinR/minnanonihonggo` (branch `main`).
- `.gitignore` mengecualikan: `node_modules/`, `dist/`, `tmp/`, `.ruff_cache/`, `tmp_ocr.png`, **`public/audio/`**.
- Commit: pesan ringkas berisi *apa* + *mengapa*. Jangan commit `.env`, kunci, atau audio.
- Jangan force-push ke `main` tanpa izin eksplisit.

---

## 8. Checklist sebelum menyerahkan hasil ke user

1. Sudah baca §3 (kesalahan lampau) dan pastikan tidak mengulangi.
2. Sudah jalankan 3 perintah verifikasi (§6) dan tunjukkan hasilnya.
3. Perubahan UI → lampirkan/screenshot dan periksa nyata.
4. Tidak mengubah fakta terverifikasi (§4) atau konfigurasi kritis (§1).
5. Update `PLAN.md` (sesi/log) bila mengerjakan fitur baru.

---

## 9. Catatan perubahan yang sudah berlangsung (jangan di-regresi)

- **Animasi dipusatkan** di `src/styles/motion.css` (semua `transition` + blok `prefers-reduced-motion`). `index.css` meng-import `tokens.css` → `paper.css` → `motion.css`. Merombak animasi = edit `motion.css` saja.
- **Tema terang/gelap via token runtime** (jangan hardcode warna):
  - Nilai warna ada di `tokens.css` → `:root` (terang) & `html[data-theme='dark']` (gelap); `@theme` hanya **memetakan** `var(--k-*)` ke `--color-*` Tailwind.
  - **JANGAN hardcode hex/rgba** di `paper.css`. Pakai token. Untuk rgba ber-alpha → `rgb(var(--k-rgb-ink) / 0.1)` (kanal RGB di token, bisa ditukar tema). Pengecualian: bayangan hitam netral alpha rendah (`rgba(0,0,0,0.0x)`) boleh apa adanya.
  - `data-theme` diset ke `<html>` oleh `useTheme` (`mnn1_theme_v1`) + inline script anti-FOUC di `index.html`. Mode default `system` (ikut `prefers-color-scheme`).
- **Home menampilkan SEMUA bab** dari registry (`babs.length`), bukan angka hardcode. Jangan kembalikan `TOTAL = 25`.
- **`paper.css` tidak boleh berisi `transition:`** lagi (sudah dipindah); cek sebelum menambahkan rule agar tak ada dead code.
- **Inter & Caveat adalah variable font** → satu `@font-face` per family dengan `font-weight: 100 900` (Inter) / `400 700` (Caveat), format `woff2-variations`. Jangan buat 4 deklarasi (pernah bikin dead code).
- **Emoji verdict/terj hasil dihapus** oleh agent lain; pertahankan stripped kecuali user minta dikembalikan.
- **Offset halaman terverifikasi** (jangan ganti rumus tanpa bukti): Honsatsu `idx = printed + 21`, Indonesia `idx = printed + 20`, printed start Pelajaran N = 6N+4. **`printed start Bab N = 8N-2` SALAH** — bab 6, 13, 19, 22 masing-masing 10 halaman (bukan 8), sehingga rumus lama meleset +2/+4/+6/+8 untuk bab setelahnya. Peta yang BENAR (printed → idx Honsatsu): b6 46–55→67–76, b13 104–113→125–134, b19 154–163→175–184, b22 180–189→201–210. Batas lain: b1 6–13→27–34, b18 146–153→167–174, b20 164–171→185–192, b21 172–179→193–200, b23 190–197→211–218, b24 198–205→219–226, b25 206–213→227–234. **Sumber kebenaran: ToC Honsatsu** (render `tmp/tocmnn1/`).
- Bab 2 data lengkap (kosakata, bunpou, reibun, kaiwa, renshuu A/B/C, mondai) sudah ada di `src/data/bab02/` — jadi template kualitas untuk bab lain.
- GitHub `main` berisi: cb5789e (initial), 7f708b3 (AGENTS.md + polish mobile), 962b555 (Bab 2), a7b95d3 (motion.css).
