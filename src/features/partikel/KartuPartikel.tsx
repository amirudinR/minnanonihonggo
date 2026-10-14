import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fungsiUntukBab, KELOMPOK, type Partikel } from '../../data/partikel'

/** Label kelompok (untuk badge kartu). */
function labelKelompok(id: Partikel['kelompok']): string {
  return KELOMPOK.find((k) => k.id === id)?.label ?? id
}

/** Ambil teks di dalam tanda kurung dari `bentuk`, mis. "にも / でも (Partikel + も)" → "Partikel + も". */
function catatanBentuk(bentuk: string): string | null {
  return bentuk.match(/\((.*?)\)/)?.[1] ?? null
}

/** Bentuk tanpa bagian tanda kurung, mis. "にも / でも". */
function bentukBersih(bentuk: string): string {
  return bentuk.replace(/\s*\(.*?\)\s*/g, ' ').trim()
}

/**
 * Kartu detail satu partikel + keterangan perilaku per bab (akordeon).
 * - Ringkasan fungsi global selalu tampil.
 * - Tiap bab jadi panel yang bisa dibuka; bab aktif otomatis terbuka.
 */
export function KartuPartikel({ p, babAktif }: { p: Partikel; babAktif: number | 'semua' }) {
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

  const catatan = catatanBentuk(p.bentuk)

  return (
    <article className="partikel-card" id={`p-${encodeURIComponent(p.bentuk)}`}>
      <header className="partikel-card__head">
        <div className="partikel-card__bentuk">
          {bentukBersih(p.bentuk).split(' / ').map((b, i) => (
            <span key={i} className="partikel-card__kanji" lang="ja">{b}</span>
          ))}
          {catatan && <span className="partikel-card__catatan">{catatan}</span>}
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

      {/* Perilaku partikel per bab (akordeon). */}
      <footer className="partikel-card__bab" aria-label="Perilaku per bab">
        <span className="eyebrow">Perilaku di tiap bab</span>
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
                  {isAktif && <span className="partikel-akordeon__badge">aktif</span>}
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
