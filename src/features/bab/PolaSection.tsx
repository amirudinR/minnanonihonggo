import type { Bunpou } from '../../types/bab'
import { Section } from './Section'

/**
 * Seksi pola tata bahasa.
 * `variant='bunpou'` → tampilkan `sub` + contoh dengan heading "Contoh:".
 * `variant='catatan'` → hanya penjelasan + contoh (tanpa heading).
 */
export function PolaSection({
  id,
  title,
  items,
  variant,
  defaultOpen = false,
}: {
  id: string
  title: string
  items: Bunpou[]
  variant: 'bunpou' | 'catatan'
  defaultOpen?: boolean
}) {
  return (
    <Section id={id} title={title} defaultOpen={defaultOpen}>
      {items.map((b) => (
        <div key={b.no} className="mb-3">
          <h3 className="font-semibold">
            {b.no}. <span lang="ja">{b.pola}</span>
          </h3>
          <p className="text-ink-soft" style={{ maxWidth: '68ch' }}>{b.penjelasan}</p>
          {variant === 'bunpou' && b.sub && b.sub.map((s, i) => (
            <p key={i} className="text-sm">
              <strong>{s.judul}:</strong> {s.isi}
            </p>
          ))}
          {variant === 'bunpou'
            ? b.contoh.length > 0 && (
                <div className="mt-1">
                  <strong>Contoh:</strong>
                  {b.contoh.map((c, i) => (
                    <p key={i} className="ml-2">
                      <span lang="ja">{c}</span>
                      <span className="block text-sm italic text-ink-soft">{b.artiContoh[i]}</span>
                    </p>
                  ))}
                </div>
              )
            : b.contoh.length > 0 && b.contoh.map((c, i) => (
                <p key={i} className="ml-2">
                  <span lang="ja">{c}</span>
                  <span className="block text-sm italic text-ink-soft">{b.artiContoh[i]}</span>
                </p>
              ))}
        </div>
      ))}
    </Section>
  )
}
