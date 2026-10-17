import type { Furigana } from '../../types/bab'

/**
 * Render furigana `<ruby>` untuk satu teks.
 * PENTING: `f.base` harus ada LITERAL di `text` (dipakai `text.split(base)`),
 * jika tidak → furigana untuk basis itu diam-diam tidak dirender.
 */
export function Ruby({
  text,
  furigana,
  show,
}: {
  text: string
  furigana?: Furigana[]
  show: boolean
}) {
  if (!show || !furigana || furigana.length === 0) return <>{text}</>
  let parts: (string | { base: string; ruby: string })[] = [text]
  for (const f of furigana) {
    const next: typeof parts = []
    for (const part of parts) {
      if (typeof part === 'string') {
        const segs = part.split(f.base)
        segs.forEach((s, i) => {
          next.push(s)
          if (i < segs.length - 1) next.push(f)
        })
      } else {
        next.push(part)
      }
    }
    parts = next
  }
  return (
    <>
      {parts.map((p, i) =>
        typeof p === 'string' ? (
          p
        ) : (
          <ruby key={i}>
            {p.base}
            <rt className="text-[0.7em]">{p.ruby}</rt>
          </ruby>
        ),
      )}
    </>
  )
}
