import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { partikel, KELOMPOK, babTerkait, fungsiUntukBab, type Partikel } from '../data/partikel'
import { soalPartikel } from '../data/partikel-soal'
import { useNotes } from '../store/useNotes'

type Mode = 'daftar' | 'ujian'

/** Kunci localStorage untuk jawaban ujian partikel (id soal). */
const KUNCI_UJIAN = 'partikel-ujian'

/** Kode rujukan layout kelas partikel (untuk sub-judul kartu). */
function labelKelompok(id: Partikel['kelompok']): string {
  return KELOMPOK.find((k) => k.id === id)?.label ?? id
}

/** Kartu detail satu partikel dengan keterangan per bab (akordeon). */
function KartuPartikel({ p, babAktif }: { p: Partikel; babAktif: number | 'semua' }) {
  // Akordeon dibuka hanya untuk bab aktif; sisanya gelap sampai diklik.
  const [buka, setBuka] = useState<Set<number>>(
    () => new Set(babAktif === 'semua' ? [] : [babAktif]),
  )
  // Saat bab aktif di halaman berubah, buka panel bab tsb.
  useEffect(() => {
    if (babAktif !== 'semua') {
      setBuka((prev) => new Set(prev).add(babAktif))
    }
  }, [babAktif])

  const toggle = (b: number) => {
    setBuka((prev) => {
      const next = new Set(prev)
      if (next.has(b)) next.delete(b)
      else next.add(b)
      return next
    })
  }

  return (
    <article className="partikel-card" id={`p-${encodeURIComponent(p.bentuk)}`}>
      <header className="partikel-card__head">
        <div className="partikel-card__bentuk">
          <span className="partikel-card__kanji" lang="ja">{p.bentuk}</span>
          <span className="partikel-card__romaji">{p.romaji}</span>
        </div>
        <span className="partikel-card__tag">{labelKelompok(p.kelompok)}</span>
      </header>

      {/* Ringkasan fungsi global (selalu tampil). */}
      <p className="partikel-card__fungsi">{p.fungsi}</p>
      <p className="partikel-card__penjelasan">{p.penjelasan}</p>

      <ul className="partikel-card__contoh">
        {p.contoh.map((c, i) => (
          <li key={i}>
            <span className="partikel-card__jp" lang="ja">{c.jp}</span>
            <span className="partikel-card__id">{c.id}</span>
          </li>
        ))}
      </ul>

      {/* Keterangan lengkap per bab (akordeon). */}
      <footer className="partikel-card__bab" aria-label="Keterangan per bab">
        <span className="eyebrow">Fungsi di tiap bab</span>
        <div className="partikel-akordeon">
          {p.bab.map((b) => {
            const isAktif = babAktif === b
            const terbuka = buka.has(b)
            const info = fungsiUntukBab(p, b)
            return (
              <section
                key={b}
                className={`partikel-akordeon__panel${isAktif ? ' partikel-akordeon__panel--aktif' : ''}`}
              >
                <button
                  type="button"
                  className="partikel-akordeon__head"
                  aria-expanded={terbuka}
                  onClick={() => toggle(b)}
                >
                  <span className="partikel-akordeon__bab">Bab {b}</span>
                  <span className="partikel-akordeon__fungsi">{info.fungsi}</span>
                  <span className="partikel-akordeon__chev" aria-hidden>
                    {terbuka ? '▾' : '▸'}
                  </span>
                </button>
                {terbuka && (
                  <div className="partikel-akordeon__body">
                    <p className="partikel-akordeon__keterangan">{info.keterangan}</p>
                    {info.contoh.length > 0 && (
                      <ul className="partikel-card__contoh partikel-card__contoh--bab">
                        {info.contoh.map((c, i) => (
                          <li key={i}>
                            <span className="partikel-card__jp" lang="ja">{c.jp}</span>
                            <span className="partikel-card__id">{c.id}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link to={`/bab/${b}`} className="chip chip--bab">
                      Buka materi Bab {b} →
                    </Link>
                  </div>
                )}
              </section>
            )
          })}
        </div>
      </footer>
    </article>
  )
}

/** Mode ujian: pilihan ganda isi partikel + arti. Jawaban disimpan di localStorage. */
function UjianPartikel({ bab, onPilihBab }: { bab: number | 'semua'; onPilihBab: (b: number | 'semua') => void }) {
  const [mulai, setMulai] = useState(false)
  const [benih, setBenih] = useState(0)
  const answers = useNotes((s) => s.answers)
  const setAnswer = useNotes((s) => s.setAnswer)

  // Deep-link langsung memulai: #ujian-mulai
  useEffect(() => {
    if (window.location.hash === '#ujian-mulai') setMulai(true)
  }, [])

  // Soal sesuai bab terpilih (acak ringan agar urutan berbeda tiap mulai).
  const soal = useMemo(() => {
    const list = soalPartikel.filter((s) => bab === 'semua' || s.bab === bab)
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[list[i], list[j]] = [list[j], list[i]]
    }
    return list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [benih, bab])

  const key = (s: { id: string }) => `${KUNCI_UJIAN}-${s.id}`
  const terisi = soal.filter((s) => answers[key(s)]).length
  const benar = soal.filter((s) => answers[key(s)] === s.jawaban).length
  const selesai = terisi === soal.length
  const progres = Math.round((terisi / soal.length) * 100)
  const lulus = selesai && benar / soal.length >= 0.7

  const reset = () => {
    if (window.confirm('Semua jawaban ujian akan dihapus. Lanjutkan?')) {
      for (const s of soal) setAnswer(key(s), '')
      setBenih((b) => b + 1)
    }
  }

  if (!mulai) {
    const adaJawaban = soal.some((s) => answers[key(s)])
    return (
      <div className="partikel-ujian__intro">
        <p>
          Uji pemahaman partikel: <strong>{soal.length} soal pilihan ganda</strong>
          {bab === 'semua' ? '' : ` (Bab ${bab})`}.
          Isi bagian rumpang <code>___</code> dengan partikel yang tepat, lalu lihat
          skor di akhir.
        </p>
        <p className="text-sm text-ink-soft">
          Ambang kelulusan: 70% benar. Jawaban otomatis tersimpan di perangkat ini.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button
            type="button"
            className="button button--primary"
            onClick={() => setMulai(true)}
            disabled={soal.length === 0}
          >
            {adaJawaban ? 'Lanjutkan ujian' : 'Mulai ujian'} <span aria-hidden>→</span>
          </button>
          {adaJawaban && (
            <button type="button" className="chip" onClick={reset}>
              ↻ Mulai dari nol
            </button>
          )}
        </div>
      </div>
    )
  }

  if (soal.length === 0) {
    return (
      <p className="text-sm text-ink-soft">
        Belum ada soal untuk Bab {bab}. Pilih bab lain atau "Semua bab".{' '}
        <button type="button" className="chip" onClick={() => { onPilihBab('semua'); setMulai(false) }}>
          Semua bab
        </button>
      </p>
    )
  }

  return (
    <div className="kuis">
      <div className="kuis__head">
        <p className="kuis__skor" role="status">
          Benar <strong>{benar}</strong> / {soal.length}
          <span aria-hidden> · </span>terisi {terisi}/{soal.length}
        </p>
        <button type="button" className="chip" onClick={reset}>
          ↻ Reset & acak ulang
        </button>
      </div>

      <div
        className="kuis__prog"
        role="progressbar"
        aria-label="Progres ujian"
        aria-valuenow={progres}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div style={{ width: `${progres}%` }} />
      </div>

      <ol className="kuis__list">
        {soal.map((s, i) => {
          const dipilih = answers[key(s)]
          const benarIni = dipilih === s.jawaban
          return (
            <li key={s.id} className="kuis__item">
              <p className="kuis__q">
                <span className="kuis__no">{i + 1}</span>
                <span lang="ja">{s.soal}</span>
              </p>
              <p className="text-sm text-ink-soft" style={{ margin: '0 0 8px', paddingLeft: 34 }}>
                {s.arti}
              </p>
              <div className="kuis__opsi">
                {s.pilihan.map((p) => {
                  const kelas =
                    dipilih === p
                      ? benarIni
                        ? 'opsi opsi--benar'
                        : 'opsi opsi--salah'
                      : dipilih && p === s.jawaban
                        ? 'opsi opsi--kunci'
                        : 'opsi'
                  return (
                    <button
                      key={p}
                      type="button"
                      className={kelas}
                      disabled={Boolean(dipilih)}
                      lang="ja"
                      onClick={() => setAnswer(key(s), p)}
                    >
                      {p}
                    </button>
                  )
                })}
              </div>
              {dipilih && (
                <p className={`kuis__fb ${benarIni ? 'kuis__fb--ok' : 'kuis__fb--no'}`}>
                  {benarIni
                    ? `✓ Benar — partikel ${s.jawaban} (Bab ${s.bab})`
                    : `✗ Yang benar: ${s.jawaban} (Bab ${s.bab})`}
                </p>
              )}
            </li>
          )
        })}
      </ol>

      {selesai && (
        <p className={`kuis__hasil ${lulus ? 'kuis__hasil--ok' : 'kuis__hasil--no'}`}>
          {lulus
            ? `Lulus! Benar ${benar} dari ${soal.length} (${Math.round((benar / soal.length) * 100)}%).`
            : `Belum lulus — benar ${benar} dari ${soal.length} (${Math.round((benar / soal.length) * 100)}%). Coba ulangi.`}
        </p>
      )}
    </div>
  )
}

export default function PartikelPage() {
  const [mode, setMode] = useState<Mode>('daftar')
  const [cari, setCari] = useState('')
  const [babAktif, setBabAktif] = useState<number | 'semua'>('semua')
  const [filterKelompok, setFilterKelompok] = useState<Partikel['kelompok'] | 'semua'>('semua')
  const [sorot, setSorot] = useState(0) // indeks partikel terpilih (navigasi prev/next)
  const kartuRefs = useRef<(HTMLElement | null)[]>([])

  // Deep-linking: buka tab Ujian lewat #ujian / #ujian-mulai, daftar lewat #daftar.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash === 'ujian' || hash === 'ujian-mulai') setMode('ujian')
    else if (hash === 'daftar') setMode('daftar')
  }, [])

  const daftarBab = useMemo(() => babTerkait(), [])

  const cariNorm = cari.trim().toLowerCase()
  const terfilter = useMemo(() => {
    return partikel.filter((p) => {
      if (babAktif !== 'semua' && !p.bab.includes(babAktif)) return false
      if (filterKelompok !== 'semua' && p.kelompok !== filterKelompok) return false
      if (!cariNorm) return true
      const hay = `${p.bentuk} ${p.romaji} ${p.fungsi} ${p.penjelasan}`.toLowerCase()
      return hay.includes(cariNorm)
    })
  }, [cariNorm, babAktif, filterKelompok])

  // Kembalikan sorot ke rentang valid bila filter berubah.
  useEffect(() => {
    if (sorot > terfilter.length - 1) setSorot(0)
  }, [terfilter.length, sorot])

  const geser = (delta: number) => {
    if (terfilter.length === 0) return
    const next = (sorot + delta + terfilter.length) % terfilter.length
    setSorot(next)
    kartuRefs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  // Navigasi keyboard ←/→ saat mode daftar (abaikan bila fokus di input/select/textarea).
  useEffect(() => {
    if (mode !== 'daftar') return
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return
      if (e.key === 'ArrowRight') { e.preventDefault(); geser(1) }
      if (e.key === 'ArrowLeft') { e.preventDefault(); geser(-1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, sorot, terfilter.length])

  return (
    <div className="app mx-auto max-w-6xl p-4 md:p-8 lg:p-10">
      <main className="book">
        <span className="page-curl" aria-hidden />
        <nav aria-label="Navigasi" className="text-sm">
          <Link to="/" className="hover:text-ink">← Daftar Bab</Link>
        </nav>

        <header className="bab-hero">
          <span className="bab-hero__no">助</span>
          <div className="bab-hero__body">
            <span className="bab-hero__label">Referensi & Ujian</span>
            <h1 className="bab-hero__title">Partikel (助詞)</h1>
            <span className="bab-hero__sub" lang="ja">
              日本語の助詞 · 全{partikel.length}項目
            </span>
          </div>
        </header>

        <div className="flash__seg partikel-tab" role="tablist" aria-label="Mode halaman partikel">
          {([
            ['daftar', 'Daftar & Penjelasan'],
            ['ujian', 'Ujian Partikel'],
          ] as const).map(([m, label]) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              className={`chip ${mode === m ? 'chip--aktif' : ''}`}
              onClick={() => { setMode(m); window.location.hash = m }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Pemilih bab: berlaku untuk daftar (filter) & ujian (cakupan soal). */}
        <section className="partikel-babbar" aria-label="Pilih bab">
          <span className="partikel-babbar__label">Bab:</span>
          <button
            type="button"
            className={`chip ${babAktif === 'semua' ? 'chip--aktif' : ''}`}
            aria-pressed={babAktif === 'semua'}
            onClick={() => setBabAktif('semua')}
          >
            Semua
          </button>
          {daftarBab.map((b) => (
            <button
              key={b}
              type="button"
              className={`chip ${babAktif === b ? 'chip--aktif' : ''}`}
              aria-pressed={babAktif === b}
              onClick={() => setBabAktif(b)}
            >
              Bab {b}
            </button>
          ))}
        </section>

        {mode === 'daftar' ? (
          <>
            <section className="partikel-tools" aria-label="Cari & filter partikel">
              <input
                type="search"
                className="home-search"
                placeholder="Cari partikel (bentuk, romaji, fungsi)…"
                value={cari}
                onChange={(e) => setCari(e.target.value)}
                aria-label="Cari partikel"
              />
              <div className="partikel-filter">
                <label className="partikel-filter__label">
                  <span className="eyebrow">Kelompok</span>
                  <select
                    className="chip"
                    value={filterKelompok}
                    onChange={(e) => setFilterKelompok(e.target.value as Partikel['kelompok'] | 'semua')}
                  >
                    <option value="semua">Semua kelompok</option>
                    {KELOMPOK.map((k) => (
                      <option key={k.id} value={k.id}>{k.label}</option>
                    ))}
                  </select>
                </label>
              </div>
            </section>

            <div className="section-heading">
              <div>
                <span className="eyebrow">Penjelasan detail</span>
                <h2>Daftar Partikel</h2>
              </div>
              <span className="section-heading__count">{terfilter.length} partikel</span>
            </div>

            {terfilter.length === 0 ? (
              <p className="text-sm text-ink-soft">Tidak ada partikel yang cocok dengan filter.</p>
            ) : (
              <>
                <div className="partikel-nav" role="group" aria-label="Navigasi antar partikel">
                  <button type="button" className="chip" onClick={() => geser(-1)} aria-label="Partikel sebelumnya">
                    ← Sebelumnya
                  </button>
                  <span className="partikel-nav__pos">
                    <strong lang="ja">{terfilter[sorot]?.bentuk}</strong>
                    <span aria-hidden> · </span>
                    {sorot + 1} / {terfilter.length}
                  </span>
                  <button type="button" className="chip" onClick={() => geser(1)} aria-label="Partikel berikutnya">
                    Berikutnya →
                  </button>
                </div>
                <div className="partikel-grid">
                  {terfilter.map((p, i) => (
                    <div key={p.bentuk} ref={(el) => { kartuRefs.current[i] = el }} className={i === sorot ? 'partikel-slot partikel-slot--aktif' : 'partikel-slot'}>
                      <KartuPartikel p={p} babAktif={babAktif} />
                    </div>
                  ))}
                </div>
                <p className="partikel-hint">Tip: pakai tombol ← / → pada keyboard untuk pindah partikel.</p>

                {/* Rangkuman singkat: arti (fungsi) tiap partikel — daftar padat. */}
                <section className="partikel-ringkas" aria-labelledby="partikel-ringkas-judul">
                  <div className="section-heading">
                    <div>
                      <span className="eyebrow">Rangkuman</span>
                      <h2 id="partikel-ringkas-judul">Arti Singkat Partikel</h2>
                    </div>
                    <span className="section-heading__count">{terfilter.length} partikel</span>
                  </div>
                  <div className="partikel-ringkas__wrap">
                    <table className="partikel-ringkas__tabel">
                      <thead>
                        <tr>
                          <th scope="col">Partikel</th>
                          <th scope="col">Arti / Fungsi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {terfilter.map((p) => (
                          <tr key={p.bentuk}>
                            <th scope="row" className="partikel-ringkas__bentuk">
                              <span lang="ja">{p.bentuk}</span>
                              <span className="partikel-ringkas__romaji">{p.romaji}</span>
                            </th>
                            <td className="partikel-ringkas__arti">{p.fungsi}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </>
            )}
          </>
        ) : (
          <>
            <div className="section-heading">
              <div>
                <span className="eyebrow">Latihan</span>
                <h2>Ujian Partikel{babAktif === 'semua' ? '' : ` — Bab ${babAktif}`}</h2>
              </div>
              <span className="section-heading__count">
                {soalPartikel.filter((s) => babAktif === 'semua' || s.bab === babAktif).length} soal
              </span>
            </div>
            <UjianPartikel bab={babAktif} onPilihBab={setBabAktif} />
          </>
        )}

        <footer className="partikel-kredit">
          <span>
            Build by <strong>amirsan</strong>
          </span>
        </footer>
      </main>
    </div>
  )
}
