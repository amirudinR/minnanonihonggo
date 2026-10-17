import { Section } from './Section'

/** Seksi Rangkuman (bila buku memang punya). */
export function RangkumanSection({ teks }: { teks: string }) {
  return (
    <Section id="rangkuman" title="Rangkuman">
      <p>{teks}</p>
    </Section>
  )
}
