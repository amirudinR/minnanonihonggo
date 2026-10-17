import { NavLink } from 'react-router-dom'
import { ThemeToggle } from '../features/theme/ThemeToggle'
import { babs } from '../data'
import { useProgress } from '../store/useProgress'

/**
 * Bilah navigasi utama (lengket di atas). Menggantikan pola "← Daftar Bab"
 * yang diulang di tiap halaman — satu bahasa visual untuk seluruh app.
 *
 * Aturan keras (AGENTS §1): tanpa dependensi UI baru, warna hanya via token,
 * `transition` hanya di motion.css.
 */
export function TopNav() {
  const items = useProgress((s) => s.items)
  const total = babs.length
  const selesai = items.filter((x) => x.selesai).length
  const pct = total > 0 ? Math.round((selesai / total) * 100) : 0

  const tautan = [
    { to: '/', label: 'Beranda', akhir: true },
    { to: '/bab/1', label: 'Bab' },
    { to: '/latihan/susun', label: 'Susun' },
    { to: '/partikel', label: 'Partikel' },
  ]

  return (
    <header className="topnav" role="banner">
      <div className="topnav__inner">
        <NavLink to="/" className="topnav__brand" aria-label="Beranda — Minna no Nihongo">
          <span className="topnav__logo" aria-hidden>み</span>
          <span className="topnav__brandtext">
            <strong>Minna no Nihongo</strong>
            <small>Edisi belajar mandiri</small>
          </span>
        </NavLink>

        <nav className="topnav__links" aria-label="Navigasi utama">
          {tautan.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.akhir}
              className={({ isActive }) => `topnav__link ${isActive ? 'topnav__link--aktif' : ''}`}
            >
              {t.label}
            </NavLink>
          ))}
        </nav>

        <div className="topnav__aksi">
          <span className="topnav__progres" title={`${selesai} dari ${total} bab selesai`}>
            <span className="topnav__progres-bar" aria-hidden>
              <span className="topnav__progres-fill" style={{ width: `${pct}%` }} />
            </span>
            <span className="topnav__progres-teks">{pct}%</span>
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default TopNav
