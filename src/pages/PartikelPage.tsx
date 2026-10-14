import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { partikel, KELOMPOK, babTerkait, type Partikel } from '../data/partikel'
import { soalPartikel } from '../data/partikel-soal'
import { useNotes } from '../store/useNotes'

type Mode = 'daftar' | 'ujian'

/** Kunci localStorage untuk jawaban ujian partikel (id soal). */
const KUNCI_UJIAN = 'partikel-ujian'

/** Kode rujukan layout kelas partikel (untuk sub-judul kartu). */
function labelKelompok(id: Partikel['kelompok']): string {
  return KELOMPOK.find((k) => k.id === id)?.label ?? id
}

/** Kartu detail satu partikel. */
function KartuPartikel({ p }: { p: Partikel }) {
  return (
    <article className="partikel-card" id={`p-${encodeURIComponent(p.bentuk)}`}>
      <header className="partikel-card__head">
        <div className="partikel-card__bentuk">
          <span className="partikel-card__kanji" lang="ja">{p.bentuk}</span>
          <span className="partikel-card__romaji">{p.romaji}</span>
        </div>
        <span className="partikel-card__tag">{labelKelompok(p.kelompok)}</span>
      </header>
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

      <footer className="partikel-card__bab" aria-label="Bab terkait">
        <span className="eyebrow">Ada di bab</span>
        <div className="partikel-card__chips">
          {p.bab.map((b) => (
            <Link key={b} to={`/bab/${b}`} className="chip chip--bab">
              Bab {b}
            </Link>
          ))}
        </div>
      </footer>
    </article>
  )
}

/** Mode ujian: pilihan ganda isi partikel + arti. Jawaban disimpan di localStorage. */
function UjianPartikel() {
  const [mulai, setMulai] = useState(false)
  const [benih, setBenih] = useState(0)
  const answers = useNotes((s) => s.answers)
  const setAnswer = useNotes((s) => s.setAnswer)

  // Deep-link langsung memulai: #ujian-mulai
  useEffect(() => {
    if (window.location.hash === '#ujian-mulai') setMulai(true)
  }, [])

  const soal = useMemo(() => {
    const list = [...soalPartikel]
    // acak ringan (Fisher–Yates) agar urutan berbeda tiap mulai
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[list[i], list[j]] = [list[j], list[i]]
    }
    return list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [benih])

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
          Uji pemahaman partikel: <strong>{soalPartikel.length} soal pilihan ganda</strong>.
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
  const [filterBab, setFilterBab] = useState<number | 'semua'>('semua')
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
      if (filterBab !== 'semua' && !p.bab.includes(filterBab)) return false
      if (filterKelompok !== 'semua' && p.kelompok !== filterKelompok) return false
      if (!cariNorm) return true
      const hay = `${p.bentuk} ${p.romaji} ${p.fungsi} ${p.penjelasan}`.toLowerCase()
      return hay.includes(cariNorm)
    })
  }, [cariNorm, filterBab, filterKelompok])

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
                <label className="partikel-filter__label">
                  <span className="eyebrow">Bab</span>
                  <select
                    className="chip"
                    value={String(filterBab)}
                    onChange={(e) => setFilterBab(e.target.value === 'semua' ? 'semua' : Number(e.target.value))}
                  >
                    <option value="semua">Semua bab</option>
                    {daftarBab.map((b) => (
                      <option key={b} value={b}>Bab {b}</option>
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
                      <KartuPartikel p={p} />
                    </div>
                  ))}
                </div>
                <p className="partikel-hint">Tip: pakai tombol ← / → pada keyboard untuk pindah partikel.</p>
              </>
            )}
          </>
        ) : (
          <>
            <div className="section-heading">
              <div>
                <span className="eyebrow">Latihan</span>
                <h2>Ujian Partikel</h2>
              </div>
              <span className="section-heading__count">{soalPartikel.length} soal</span>
            </div>
            <UjianPartikel />
          </>
        )}
      </main>
    </div>
  )
}
