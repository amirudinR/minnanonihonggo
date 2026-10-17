import type { Bab } from '../../types/bab'
import { sectionsOf } from './sectionsOf'

/** Daftar isi bab (anchor). Membuka `<details>` tujuan bila masih tertutup. */
export function BabToc({ bab }: { bab: Bab }) {
  return (
    <nav className="toc" aria-label="Daftar isi">
      {sectionsOf(bab).map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={() => {
            const el = document.getElementById(s.id)
            if (el && el instanceof HTMLDetailsElement && !el.open) {
              el.open = true
            }
          }}
        >
          {s.short}
        </a>
      ))}
    </nav>
  )
}
