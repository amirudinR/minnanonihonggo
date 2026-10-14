import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { babs } from '../data'
import type { SusunItem } from '../types/bab'
import { useNotes } from '../store/useNotes'
import { acak, hitungSkorSusun } from '../core/text/susun'
import { SoalMenyusun, urutanKeString, stringKeUrutan } from '../features/susun'

type ItemCampur = SusunItem & { babNo: number; babTopik: string }

type Rentang = 'semua' | 'I' | 'II'
type Jumlah = 20 | 50 | 'semua'

export default function SusunCampuranPage() {
  const answers = useNotes((s) => s.answers)
  const setAnswer = useNotes((s) => s.setAnswer)

  const [rentang, setRentang] = useState<Rentang>('semua')
  const [jumlah, setJumlah] = useState<Jumlah>('semua')
  const [seed, setSeed] = useState(0)

  const semuaItem = useMemo<ItemCampur[]>(
    () =>
      babs.flatMap((b) =>
        (b.susun ?? []).map((s) => ({ ...s, babNo: b.no, babTopik: b.topik })),
      ),
    [],
  )

  const terfilter = useMemo(() => {
    return semuaItem.filter((it) => {
      if (rentang === 'I' && it.babNo > 25) return false
      if (rentang === 'II' && it.babNo <= 25) return false
      return true
    })
  }, [semuaItem, rentang])

  const tampil = useMemo(() => {
    const diacak = seed === 0 ? [...terfilter] : acak(terfilter, seed)
    if (jumlah === 'semua') return diacak
    return diacak.slice(0, jumlah)
  }, [terfilter, seed, jumlah])

  const key = (it: ItemCampur) => `campur-${it.babNo}-${it.id}`
  const skor = hitungSkorSusun(
    tampil,
    answers,
    (it) => key(it as ItemCampur),
  )

  return (
    <div className="app mx-auto max-w-5xl p-4 md:p-8 lg:p-10">
      <main className="book">
        <span className="page-curl" aria-hidden />
        <nav aria-label="Navigasi" className="text-sm">
          <Link to="/" className="hover:text-ink">
            ← Daftar Bab
          </Link>
        </nav>

        <header className="bab-hero">
          <span className="bab-hero__no">✎</span>
          <div className="bab-hero__body">
            <span className="bab-hero__label">Latihan</span>
            <h1 className="bab-hero__title">Menyusun Kalimat — Campuran</h1>
            <span className="bab-hero__sub">Soal acak dari seluruh bab (1–50)</span>
          </div>
        </header>

        <div className="home-filter" role="group" aria-label="Filter latihan campuran">
          <div className="flash__seg" role="group" aria-label="Rentang bab">
            {([
              ['semua', 'Semua Bab'],
              ['I', 'MNN I (1–25)'],
              ['II', 'MNN II (26–50)'],
            ] as const).map(([f, label]) => (
              <button
                key={f}
                type="button"
                className={`chip ${rentang === f ? 'chip--aktif' : ''}`}
                onClick={() => setRentang(f)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flash__seg" role="group" aria-label="Jumlah soal">
            {([20, 50, 'semua'] as const).map((j) => (
              <button
                key={String(j)}
                type="button"
                className={`chip ${jumlah === j ? 'chip--aktif' : ''}`}
                onClick={() => setJumlah(j)}
              >
                {j === 'semua' ? `Semua (${terfilter.length})` : `${j} soal`}
              </button>
            ))}
          </div>
        </div>

        <div className="susun-latihan__bar">
          <p className="text-sm font-medium text-ink-soft">
            {tampil.length} soal · Skor sesi: {skor.benar} benar dari {skor.total}
          </p>
          <button type="button" className="chip" onClick={() => setSeed((s) => s + 1)}>
            Acak ulang
          </button>
        </div>

        {tampil.length === 0 ? (
          <p className="text-sm text-ink-soft">
            Belum ada soal menyusun di rentang ini.
          </p>
        ) : (
          <ol className="susun-latihan__list">
            {tampil.map((it, i) => (
              <li key={key(it)}>
                <SoalMenyusun
                  item={it}
                  nomor={i + 1}
                  labelBab={`Bab ${it.babNo}`}
                  value={stringKeUrutan(answers[key(it)] ?? '')}
                  onChange={(v) => setAnswer(key(it), urutanKeString(v))}
                />
              </li>
            ))}
          </ol>
        )}
      </main>
    </div>
  )
}
