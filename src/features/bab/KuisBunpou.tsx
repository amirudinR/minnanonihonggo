import { useMemo, useState } from 'react'
import type { Bunpou, SoalBunpou } from '../../types/bab'
import { useNotes } from '../../store/useNotes'

/** Kelas opsi memakai sistem `.opsi` yang sudah ada (70-kuis.css). */
function kelasOpsi(pilih: string, opsi: string, jawaban: string): string {
  if (!pilih) return 'opsi'
  if (opsi === jawaban) return 'opsi opsi--benar'
  if (opsi === pilih) return 'opsi opsi--salah'
  return 'opsi opsi--kunci'
}

/**
 * Acak urutan opsi secara DETERMINISTIK (seeded dari `id`).
 *
 * Di data, `jawaban` sengaja ditaruh paling depan supaya mudah diperiksa; kalau
 * ditampilkan apa adanya, jawaban selalu opsi A. Pengacakan ini membuat posisi
 * jawaban bervariasi (≈25% tiap posisi) namun tetap stabil: id sama → urutan sama,
 * jadi tidak berkedip saat re-render.
 */
function acakOpsi(id: string, pilihan: string[]): string[] {
  // FNV-1a 32-bit sebagai benih, lalu mulberry32 sebagai PRNG.
  let benih = 2166136261
  for (let i = 0; i < id.length; i++) {
    benih ^= id.charCodeAt(i)
    benih = Math.imul(benih, 16777619)
  }
  let a = benih >>> 0
  const rnd = () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  const out = [...pilihan]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    const tmp = out[i]
    out[i] = out[j]
    out[j] = tmp
  }
  return out
}

/**
 * Kuis pilihan ganda per pola tata bahasa (5 soal tiap pola).
 *
 * Pilih pola (chip) → 5 soal. Satu opsi dipilih = langsung dikoreksi (auto-check).
 * Progres disimpan di `useNotes.answers` dengan key BARU
 * `bunpou-{bab}-{grup}-{id}` (key lama tidak diubah), dan hanya ditulis dari event
 * handler — bukan `useEffect` — supaya tak ada loop render (AGENTS §3 #1).
 */
export function KuisBunpou({
  babNo,
  grup,
  items,
  soal,
}: {
  babNo: number
  grup: 'bunpou' | 'catatan'
  items: Bunpou[]
  soal: SoalBunpou[]
}) {
  const answers = useNotes((s) => s.answers)
  const setAnswer = useNotes((s) => s.setAnswer)
  const [polaNo, setPolaNo] = useState(() => items[0]?.no ?? 1)

  const daftar = useMemo(() => soal.filter((s) => s.no === polaNo), [soal, polaNo])
  const pola = items.find((i) => i.no === polaNo)
  const kunci = (s: SoalBunpou) => `bunpou-${babNo}-${grup}-${s.id}`

  const jawab = daftar.map((s) => answers[kunci(s)] ?? '')
  const terjawab = jawab.filter(Boolean).length
  const benar = daftar.filter((s, i) => jawab[i] === s.jawaban).length

  const ulangi = () => {
    for (const s of daftar) setAnswer(kunci(s), '')
  }

  return (
    <div className="kuis-bunpou">
      <div className="kuis-bunpou__pola" role="group" aria-label="Pilih pola">
        {items.map((i) => (
          <button
            key={i.no}
            type="button"
            className={`chip kuis-bunpou__chip ${i.no === polaNo ? 'chip--aktif' : ''}`}
            aria-pressed={i.no === polaNo}
            onClick={() => setPolaNo(i.no)}
          >
            {i.no}. <span lang="ja">{i.pola}</span>
          </button>
        ))}
      </div>

      {pola && (
        <p className="kuis-bunpou__judul" lang="ja">
          <strong>{pola.no}. {pola.pola}</strong>
        </p>
      )}

      {daftar.map((s, idx) => {
        const pilih = jawab[idx]
        return (
          <div key={s.id} className="kuis__item">
            <p className="kuis__q">
              <span className="kuis__no">{idx + 1}</span>{' '}
              <span lang="ja">{s.soal}</span>
            </p>
            <p className="kuis-bunpou__arti">{s.arti}</p>
            <div className="kuis__opsi" role="group" aria-label={`Pilihan soal ${idx + 1}`}>
              {acakOpsi(s.id, s.pilihan).map((p) => (
                <button
                  key={p}
                  type="button"
                  lang="ja"
                  className={kelasOpsi(pilih, p, s.jawaban)}
                  aria-pressed={pilih === p}
                  disabled={!!pilih}
                  onClick={() => setAnswer(kunci(s), p)}
                >
                  {p}
                </button>
              ))}
            </div>
            {pilih && (
              <p
                className={`kuis__verdict ${pilih === s.jawaban ? 'kuis__verdict--ok' : 'kuis__verdict--no'}`}
                role="status"
              >
                {pilih === s.jawaban ? 'Benar!' : `Kurang tepat — jawaban: ${s.jawaban}`}
              </p>
            )}
          </div>
        )
      })}

      <div className="kuis__head">
        <span className="kuis__skor" role="status">
          Benar <strong>{benar}/{daftar.length}</strong>
          {terjawab > 0 && terjawab < daftar.length ? ` · ${terjawab} terjawab` : ''}
        </span>
        <button type="button" className="chip" onClick={ulangi} disabled={terjawab === 0}>
          Ulangi
        </button>
      </div>
    </div>
  )
}
