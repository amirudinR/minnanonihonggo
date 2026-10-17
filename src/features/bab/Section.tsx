import type { ReactNode } from 'react'

/**
 * Satu bagian materi bab: `<details>` akordeon dengan judul + jangkar `id`.
 * Kelas `.section--{id}` (akhiran A/B/C dilepas) untuk pewarnaan per-bagian.
 */
export function Section({
  id,
  title,
  defaultOpen = false,
  children,
}: {
  id: string
  title: string
  defaultOpen?: boolean
  children: ReactNode
}) {
  return (
    <details id={id} open={defaultOpen ? true : undefined} className={`section section--${id.replace(/[ABC]$/, '')} mb-2 scroll-mt-20`}>
      <summary className="cursor-pointer select-none text-xl" style={{ fontFamily: 'var(--font-hand)' }}>
        {title}
      </summary>
      <div className="mt-1">{children}</div>
    </details>
  )
}
