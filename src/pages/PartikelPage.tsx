import { useEffect, useMemo, useRef, useState } from 'react'
import { partikel, KELOMPOK, type Partikel } from '../data/partikel'
import { soalPartikel } from '../data/partikel-soal'
import { KartuPartikel, PemilihBab, TabelRingkas, UjianPartikel } from '../features/partikel'

type Mode = 'daftar' | 'ujian'

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

  const jumlahSoal = soalPartikel.filter((s) => babAktif === 'semua' || s.bab === babAktif).length

  return (
    <div className="app mx-auto max-w-6xl p-4 md:p-8 lg:p-10">
      <main className="book">
        <span className="page-curl" aria-hidden />

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
        <PemilihBab babAktif={babAktif} onPilih={setBabAktif} />

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

                <TabelRingkas items={terfilter} />
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
              <span className="section-heading__count">{jumlahSoal} soal</span>
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
