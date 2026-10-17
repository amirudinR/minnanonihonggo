import { useEffect } from 'react'
import type { Bab } from '../../types/bab'
import { useNotes } from '../../store/useNotes'
import { useProgress } from '../../store/useProgress'
import { countCorrect } from '../../core/text/normalize'
import { nilaiTerjemahan } from '../../core/text/terjemahan'

/**
 * Ringkasan koreksi satu bab (skor latihan A/B/C/Mondai) + kualitas terjemahan
 * (reibun/kaiwa) sebagai metrik terpisah. Menyinkronkan skor ke store (idempoten).
 * Tampil hanya bila sudah ada minimal 1 jawaban terisi.
 */
export function KoreksiPanel({ bab, babNo }: { bab: Bab; babNo: number }) {
  const answers = useNotes((s) => s.answers)
  const setSkor = useProgress((s) => s.setSkor)

  const pairs: { user: string; expected: string }[] = []
  const push = (section: string, items: { no: number; jawaban?: string; kunciTersedia?: boolean }[]) => {
    items.forEach((r) => {
      if (r.jawaban && r.kunciTersedia !== false) {
        pairs.push({ user: answers[`b${babNo}-${section}-${r.no}`] ?? '', expected: r.jawaban })
      }
    })
  }
  push('A', bab.renshuuA)
  push('B', bab.renshuuB)
  push('C', bab.renshuuC)
  push('mondai', bab.mondai)

  // Kualitas terjemahan (reibun + kaiwa) — metrik terpisah dari skor exact-match.
  const terjPairs = [
    ...bab.reibun.map((r, i) => ({
      user: answers[`b${babNo}-terj-reibun-${i}`] ?? '',
      expected: r.arti,
    })),
    ...(bab.kaiwa?.dialog ?? [])
      .filter((d) => d.arti)
      .map((d) => ({
        user: answers[`b${babNo}-terj-kaiwa-${d.no}`] ?? '',
        expected: d.arti as string,
      })),
  ]
  const terjTerisi = terjPairs.filter((p) => p.user.trim()).length
  const terjRata = terjTerisi
    ? Math.round(
        terjPairs.reduce((a, p) => a + (p.user.trim() ? nilaiTerjemahan(p.user, p.expected)?.skor ?? 0 : 0), 0) /
          terjTerisi,
      )
    : 0

  const { benar, total } = countCorrect(pairs)
  const skor = total > 0 ? Math.round((benar / total) * 100) : 0
  const terisi = pairs.filter((p) => p.user.trim().length > 0).length

  useEffect(() => {
    if (terisi > 0) setSkor(babNo, skor)
  }, [terisi, skor, babNo, setSkor])

  if (total === 0 || terisi === 0) return null

  return (
    <div className="koreksi" id="koreksi">
      <h2 className="mb-1 text-lg">Hasil Koreksi Bab {babNo}</h2>
      <p className="text-sm text-ink-soft">
        Terisi {terisi} dari {total} soal · <strong>{benar} benar</strong>
      </p>
      <div className="koreksi__bar">
        <div className="koreksi__fill" style={{ width: `${skor}%` }} />
      </div>
      <p className="mt-1 text-sm">
        Skor: <strong>{skor}</strong> / 100 <span className="score-note">{skor >= 60 ? 'Target tercapai' : 'Terus latihan'}</span>
      </p>
      <p className="koreksi__terj">
        {terjTerisi > 0
          ? `Kualitas terjemahan rata-rata: ${terjRata}% (${terjTerisi}/${terjPairs.length} terjemahan)`
          : 'Isi terjemahan Reibun/Kaiwa untuk melihat kualitas terjemahan.'}
      </p>
    </div>
  )
}
