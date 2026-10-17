/**
 * Render teks yang memuat `\n` sebagai baris berganti (`<br/>`).
 * `inline` → bungkus dengan `<span>` (aman di dalam `<p>`/`<li>`);
 * non-inline → bungkus dengan `<p>`.
 */
export function TextWithNewlines({ text, inline = false }: { text: string; inline?: boolean }) {
  const lines = text.split('\n')
  const isi = lines.map((l, i) => (
    <span key={i}>
      {l}
      {i < lines.length - 1 && <br />}
    </span>
  ))
  if (inline) return <>{isi}</>
  return <p>{isi}</p>
}
