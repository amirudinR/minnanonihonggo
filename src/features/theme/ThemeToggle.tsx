import { useEffect } from 'react'
import { useTheme, type ThemeMode } from '../../store/useTheme'

const LABEL: Record<ThemeMode, string> = {
  light: 'Terang',
  dark: 'Gelap',
  system: 'Sistem',
}

/**
 * Tombol tema: klik = balik terang <-> gelap (mode manual).
 * Klik-kanan / mode sistem diatur lewat urutan siklus: system -> light -> dark.
 * Menghormati prefers-color-scheme selama mode masih 'system'.
 */
export function ThemeToggle() {
  const theme = useTheme((s) => s.theme)
  const resolved = useTheme((s) => s.resolved)
  const toggle = useTheme((s) => s.toggle)
  const syncSystem = useTheme((s) => s.syncSystem)

  // Ikuti perubahan preferensi OS selama mode = 'system'.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => syncSystem()
    mq.addEventListener('change', handler)
    syncSystem()
    return () => mq.removeEventListener('change', handler)
  }, [syncSystem])

  const nextLabel = resolved === 'dark' ? 'Terang' : 'Gelap'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Ganti ke mode ${nextLabel} (sekarang: ${LABEL[theme]})`}
      title={`Tema: ${LABEL[theme]} → ${nextLabel}`}
    >
      <span className="theme-toggle__icon" aria-hidden>
        {resolved === 'dark' ? '☾' : '☀'}
      </span>
      <span className="theme-toggle__label">{LABEL[theme]}</span>
    </button>
  )
}
