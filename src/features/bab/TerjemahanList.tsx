import { useState } from 'react'
import { useNotes } from '../../store/useNotes'
import { nilaiTerjemahan } from '../../core/text/terjemahan'

/**
 * Daftar latihan terjemahan (Reibun/Kaiwa): tiap baris ada input terjemahan,
 * dikoreksi soft (Jaccard) vs kunci. Menyembunyikan baris yang sudah terisi
 * kecuali "Tampilkan semua" dinyalakan.
 */
export function TerjemahanList({
  items,
}: {
  items: { key: string; judul: string; jp: string; kunci: string }[]
}) {
  const answers = useNotes((s) => s.answers)
  const setAnswer = useNotes((s) => s.setAnswer)
  const [tampilkanSemua, setTampilkanSemua] = useState(false)

  const hasil = items.map((it) => {
    const user = answers[it.key] ?? ''
    return { ...it, user, nilai: user.trim() ? nilaiTerjemahan(user, it.kunci) : null }
  })
  const terisi = hasil.filter((h) => h.user.trim()).length
  const rata = terisi
    ? Math.round(hasil.reduce((a, h) => a + (h.nilai?.skor ?? 0), 0) / terisi)
    : 0
  const belum = hasil.filter((h) => !h.user.trim())
  const tampil = tampilkanSemua ? hasil : belum

  return (
    <div className="terj">
      <div className="toolbar" style={{ marginBottom: 4 }}>
        <span className="toolbar__title">Koreksi terjemahan</span>
        {belum.length < hasil.length && (
          <button
            type="button"
            className="text-sm underline underline-offset-2 text-ink-soft"
            onClick={() => setTampilkanSemua((v) => !v)}
            aria-expanded={tampilkanSemua}
          >
            {tampilkanSemua ? 'Sembunyikan terjemahan' : `Tampilkan semua (${hasil.length})`}
          </button>
        )}
      </div>
      {terisi > 0 && (
        <>
          <div className="terj__bar" role="progressbar" aria-valuenow={rata} aria-valuemin={0} aria-valuemax={100}>
            <div className="terj__fill" style={{ width: `${rata}%` }} />
          </div>
          <p className="text-xs text-ink-soft" style={{ margin: '0 0 6px' }}>
            Kedekatan rata-rata {rata}% · {terisi}/{items.length} diterjemahkan
          </p>
        </>
      )}
      {tampil.length === 0 && (
        <p className="text-sm text-ink-soft">Semua terjemahan sudah diisi. Klik "Tampilkan semua" untuk meninjau.</p>
      )}
      {tampil.map((h) => (
        <div key={h.key} className="terj__row">
          <span className="terj__jp" lang="ja">{h.jp}</span>
          <span className="terj__kuci">Kunci: {h.kunci}</span>
          <textarea
            rows={2}
            className="jawab terj__input"
            value={h.user}
            onChange={(e) => setAnswer(h.key, e.target.value)}
            placeholder={`Terjemahanmu untuk ${h.judul}…`}
            aria-label={`Terjemahan ${h.judul}`}
          />
          {h.nilai && (
            <span className={`terj__res terj__res--${h.nilai.level}`}>
              {h.nilai.level === 'tepat'
                ? `Sangat dekat (${h.nilai.skor}%)`
                : h.nilai.level === 'dekat'
                  ? `Cukup dekat (${h.nilai.skor}%)`
                  : `Belum dekat (${h.nilai.skor}%)`}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
