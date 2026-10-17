import { useEffect, useMemo, useState } from 'react'
import type { Bab } from '../../types/bab'
import { getAudio } from '../../core/audio/manifest'
import { AudioBar } from '../bab/AudioBar'
import { PemilihBabSusun } from './PemilihBabSusun'
import type { PilihBab } from './PemilihBabSusun'

type Track = {
  babNo: number
  topik: string
  jenis: 'mondai' | 'choukai'
  src: string
  label: string
  soal?: string
}

type Saring = 'semua' | 'mondai' | 'choukai'

/**
 * Latihan MENDENGARKAN — memakai track audio yang SUDAH ada:
 *  - mondai  (問題, buku utama)   bab 1–50
 *  - choukai (聴解, buku Choukai) bab 26–50 saja
 *
 * Satu track per layar, seperti sesi susun. Tidak ada kunci jawaban: audio MNN
 * tidak menyertakan transkrip dan mengarang isi audio = pelanggaran aturan
 * keras §1. Jadi fokusnya "dengarkan & tulis yang kamu tangkap" (bebas).
 */
export function DengarkanLatihan({ daftar }: { daftar: Bab[] }) {
  const [bab, setBab] = useState<PilihBab>('semua')
  const [saring, setSaring] = useState<Saring>('semua')
  const [pos, setPos] = useState(0)

  const semua = useMemo<Track[]>(() => {
    const hasil: Track[] = []
    for (const b of daftar) {
      const a = getAudio(b.no)
      if (!a) continue
      for (const [i, src] of a.mondai.entries()) {
        const m = b.mondai.find((x) => x.audio === src)
        hasil.push({
          babNo: b.no,
          topik: b.topik,
          jenis: 'mondai',
          src,
          label: `Mondai ${i + 1}`,
          soal: m?.soal,
        })
      }
      for (const [i, src] of a.choukai.entries()) {
        hasil.push({
          babNo: b.no,
          topik: b.topik,
          jenis: 'choukai',
          src,
          label: `Choukai ${i + 1}`,
        })
      }
    }
    return hasil
  }, [daftar])

  const track = useMemo(
    () =>
      semua.filter((t) => {
        if (saring !== 'semua' && t.jenis !== saring) return false
        if (bab === 'I') return t.babNo <= 25
        if (bab === 'II') return t.babNo > 25
        if (typeof bab === 'number') return t.babNo === bab
        return true
      }),
    [semua, bab, saring],
  )

  const petaBab = useMemo(() => {
    const p: Record<number, number> = {}
    for (const t of track) p[t.babNo] = (p[t.babNo] ?? 0) + 1
    return p
  }, [track])

  const jumlahChoukai = useMemo(
    () => daftar.filter((b) => (getAudio(b.no)?.choukai.length ?? 0) > 0).length,
    [daftar],
  )

  useEffect(() => {
    setPos(0)
  }, [bab, saring])

  const kini = track.length > 0 ? track[Math.min(pos, track.length - 1)] : undefined

  return (
    <div className="dengar">
      <div className="seg" role="group" aria-label="Jenis audio">
        {([
          ['semua', 'Semua'],
          ['mondai', 'Mondai'],
          ['choukai', 'Choukai 聴解'],
        ] as const).map(([k, label]) => (
          <button
            key={k}
            type="button"
            className={`seg__item ${saring === k ? 'seg__item--aktif' : ''}`}
            onClick={() => setSaring(k)}
            aria-pressed={saring === k}
          >
            {label}
          </button>
        ))}
      </div>

      <PemilihBabSusun
        nilai={bab}
        onPilih={setBab}
        daftar={daftar.map((b) => ({ no: b.no, topik: b.topik }))}
        jumlah={petaBab}
      />

      <p className="dengar__info" role="status">
        {track.length > 0
          ? `Track ${Math.min(pos + 1, track.length)} / ${track.length}`
          : 'Tidak ada track untuk pilihan ini'}
        {jumlahChoukai > 0 && (
          <>
            {' · '}
            <span className="dengar__ket">
              Choukai (聴解) tersedia untuk {jumlahChoukai} bab MNN II
            </span>
          </>
        )}
      </p>

      {kini && (
        <div className="dengar__kartu card">
          <div className="dengar__head">
            <span className={`susun__badge ${kini.jenis === 'choukai' ? 'susun__badge--choukai' : ''}`}>
              {kini.jenis === 'choukai' ? 'Choukai 聴解' : 'Mondai 問題'}
            </span>
            <span className="susun__bab">Bab {kini.babNo}</span>
            <span className="dengar__topik">{kini.topik}</span>
          </div>

          <p className="dengar__label" lang="ja">
            {kini.label}
          </p>
          {kini.soal && <p className="susun__arti">{kini.soal}</p>}

          <AudioBar src={kini.src} label={`Bab ${kini.babNo} ${kini.label}`} />

          <label className="dengar__catatan">
            <span className="eyebrow">Tulis yang kamu dengar (bebas, tidak dinilai)</span>
            <textarea
              className="book-input book-input--area"
              rows={3}
              placeholder="Tulis yang kamu tangkap…"
              lang="ja"
            />
          </label>

          <div className="sesi__nav">
            <button
              type="button"
              className="chip"
              onClick={() => setPos((p) => Math.max(0, p - 1))}
              disabled={pos === 0}
            >
              ← Sebelumnya
            </button>
            <button
              type="button"
              className="chip chip--aktif"
              onClick={() => setPos((p) => Math.min(track.length - 1, p + 1))}
              disabled={pos >= track.length - 1}
            >
              Berikutnya →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DengarkanLatihan
