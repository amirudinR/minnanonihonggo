import { Section } from './Section'

/** Seksi Coretan & Catatan pribadi per bab (textarea). */
export function CoretanSection({
  num,
  value,
  onChange,
}: {
  num: number
  value: string
  onChange: (v: string) => void
}) {
  return (
    <Section id="coretan" title="Coretan & Catatanku">
      <textarea
        rows={6}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Tulis coretan, rangkuman, atau catatan penting bab ini di sini…"
        aria-label={`Coretan bab ${num}`}
        className="coretan"
      />
    </Section>
  )
}
