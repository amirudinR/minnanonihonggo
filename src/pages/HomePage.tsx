import { Link } from 'react-router-dom'
import { useProgress } from '../store/useProgress'
import { useTheme } from '../store/useTheme'
import { ThemeToggle } from '../features/theme/ThemeToggle'
import { babs, getBab } from '../data'

export default function HomePage() {
  const items = useProgress((s) => s.items)
  useTheme((s) => s.theme) // berlangganan agar toggle ikut re-render
  const TOTAL = babs.length
  const selesaiCount = items.filter((x) => x.selesai).length
  const pct = TOTAL > 0 ? Math.round((selesaiCount / TOTAL) * 100) : 0
  const chapters = Array.from({ length: TOTAL }, (_, i) => {
    const no = i + 1
    return { no, bab: getBab(no), progress: items.find((x) => x.no === no) }
  })
  const availableChapters = chapters.filter((chapter) => chapter.bab)
  const activeChapter =
    availableChapters.find((chapter) => !chapter.progress?.selesai) ??
    availableChapters[availableChapters.length - 1]
  const allAvailableComplete = availableChapters.length > 0 && availableChapters.every((chapter) => chapter.progress?.selesai)
  const startedCount = items.filter(
    (x) => !x.selesai && (typeof x.skor === 'number' || (x.bagianSelesai?.length ?? 0) > 0),
  ).length

  return (
    <div className="app mx-auto max-w-4xl p-4 md:p-8">
      <div className="book">
        <span className="tape" aria-hidden />
        <span className="page-curl" aria-hidden />
        <a className="skip-link" href="#daftar-bab">Lewati ke daftar bab</a>

        <header className="cover">
          <div className="cover__toolbar">
            <ThemeToggle />
          </div>
          <div className="cover__eyebrow">
            <span className="cover__label">みんなの日本語</span>
            <span className="cover__edition">Edisi belajar mandiri · Offline</span>
          </div>
          <h1 className="cover__title">Minna no Nihongo I & II</h1>
          <p className="cover__sub">Ruang belajar pribadi untuk Bab 1–50.</p>

        </header>

        <section className="dashboard-grid" aria-label="Ringkasan belajar">
          <div className="progress-card">
            <div className="progress-card__heading">
              <div>
                <span className="eyebrow">Progres keseluruhan</span>
                <p className="progress-card__value">{pct}<span>%</span></p>
              </div>
              <span className="progress-card__mark" aria-hidden>{selesaiCount}/{TOTAL}</span>
            </div>
            <div className="koreksi__bar" role="progressbar" aria-label="Progres bab selesai" aria-valuenow={selesaiCount} aria-valuemin={0} aria-valuemax={TOTAL}>
              <div className="koreksi__fill" style={{ width: `${pct}%` }} />
            </div>
            <p className="progress-card__caption">{selesaiCount} bab selesai dari {TOTAL} bab tersedia di rencana belajar.</p>
          </div>
          <div className="stat-strip" aria-label="Statistik belajar">
            <div className="stat-strip__item">
              <span className="eyebrow">Materi siap</span>
              <strong>{availableChapters.length}</strong>
              <span>bab</span>
            </div>
            <div className="stat-strip__item">
              <span className="eyebrow">Sedang dipelajari</span>
              <strong>{startedCount}</strong>
              <span>bab</span>
            </div>
          </div>
        </section>

        {activeChapter && (
          <section className="continue-card" aria-labelledby="continue-title">
            <div className="continue-card__copy">
              <span className="eyebrow">Sesi berikutnya</span>
              <h2 id="continue-title">{allAvailableComplete ? `Tinjau Bab ${activeChapter.no}` : `Lanjutkan Bab ${activeChapter.no}`}</h2>
              <p>{activeChapter.bab!.topik}</p>
              <span className="continue-card__meta">
                {activeChapter.bab!.kosakata.length} kosakata <span aria-hidden>·</span> {activeChapter.bab!.bunpou.length} pola
              </span>
            </div>
            <Link className="button button--primary" to={`/bab/${activeChapter.no}`}>
              Buka materi <span aria-hidden>→</span>
            </Link>
          </section>
        )}

        <section id="daftar-bab" className="chapter-index" aria-labelledby="chapter-index-title">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Indeks pelajaran</span>
              <h2 id="chapter-index-title">Daftar Bab</h2>
            </div>
            <span className="section-heading__count">{availableChapters.length} siap dibuka</span>
          </div>
          <ol className="m-0 list-none p-0">
          {chapters.map(({ no, bab, progress: p }) => {
            const ready = Boolean(bab)
            return (
              <li key={no} className="bab-item">
                {ready ? (
                  <Link to={`/bab/${no}`} className="bab-item__link">
                    <span className="bab-item__no">{no}</span>
                    <span className="bab-item__body">
                      <span className="bab-item__title">{bab!.topik}</span>
                            <span className="bab-item__meta">
                        {bab!.kosakata.length} kosakata · {bab!.bunpou.length} pola
                      </span>
                    </span>
                    <span className="bab-item__badges">
                      {p?.selesai && <span className="stamp stamp--ok">SELESAI</span>}
                      {typeof p?.skor === 'number' && (
                        <span className="stamp stamp--skor">{p.skor}</span>
                      )}
                      <span className="bab-item__arrow" aria-hidden>→</span>
                    </span>
                  </Link>
                ) : (
                  <div className="bab-item__link bab-item__link--locked">
                    <span className="bab-item__no bab-item__no--muted">{no}</span>
                    <span className="bab-item__body">
                      <span className="bab-item__title text-ink-soft">Bab {no}</span>
                      <span className="bab-item__meta">segera hadir</span>
                    </span>
                  </div>
                )}
              </li>
            )
          })}
          </ol>
        </section>
      </div>
    </div>
  )
}
