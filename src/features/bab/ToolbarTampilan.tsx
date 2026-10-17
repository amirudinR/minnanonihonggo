/** Toolbar "Tampilan teks": toggle Furigana & Romaji. */
export function ToolbarTampilan({
  showFurigana,
  onFurigana,
  showRomaji,
  onRomaji,
}: {
  showFurigana: boolean
  onFurigana: (v: boolean) => void
  showRomaji: boolean
  onRomaji: (v: boolean) => void
}) {
  return (
    <div className="toolbar" aria-label="Pengaturan tampilan">
      <span className="toolbar__title">Tampilan teks</span>
      <label className="toolbar__toggle">
        <input type="checkbox" checked={showFurigana} onChange={(e) => onFurigana(e.target.checked)} />
        Furigana
      </label>
      <label className="toolbar__toggle">
        <input type="checkbox" checked={showRomaji} onChange={(e) => onRomaji(e.target.checked)} />
        Romaji
      </label>
    </div>
  )
}
