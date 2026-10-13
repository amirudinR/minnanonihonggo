import { useMemo, useState } from 'react'
import type { SusunItem } from '../../types/bab'
import { bankUntuk, koreksiSusun, urutanBenar } from '../../core/text/susun'

type Props = {
  item: SusunItem
  nomor?: number
  labelBab?: string
  /** urutan index bank yang dipilih user (boleh kosong). */
  value: number[]
  onChange: (v: number[]) => void
}

/** Simpan sebagai string agar cocok dengan store `answers: Record<string,string>`. */
export function urutanKeString(arr: number[]): string {
  return arr.join(',')
}
export function stringKeUrutan(s: string): number[] {
  if (!s?.trim()) return []
  return s
    .split(',')
    .map((x) => Number(x))
    .filter((n) => Number.isInteger(n) && n >= 0)
}

export function SoalMenyusun({ item, nomor, labelBab, value, onChange }: Props) {
  // Bank kata stabil (acak deterministik dari id soal) → index sama di mana pun.
  const bank = useMemo(() => bankUntuk(item), [item])
  const jawaban = useMemo(() => urutanBenar(item), [item])
  const [dipilih, setDipilih] = useState<number[]>(value)
  const [cek, setCek] = useState(false)
  const [showKunci, setShowKunci] = useState(false)

  const tersusun = dipilih.map((i) => bank[i] ?? '')
  const level = cek ? koreksiSusun(tersusun, jawaban) : null
  const semuaTerpakai = dipilih.length === bank.length

  const setUrutan = (next: number[]) => {
    setDipilih(next)
    onChange(next)
    setCek(false)
  }

  const tambah = (i: number) => {
    if (dipilih.includes(i)) return
    setUrutan([...dipilih, i])
  }

  const hapusPada = (pos: number) => {
    const next = [...dipilih]
    next.splice(pos, 1)
    setUrutan(next)
  }

  const pindah = (from: number, to: number) => {
    if (to < 0 || to >= dipilih.length || from === to) return
    const next = [...dipilih]
    const [x] = next.splice(from, 1)
    next.splice(to, 0, x)
    setUrutan(next)
  }

  const reset = () => {
    setUrutan([])
    setShowKunci(false)
  }

  const pilihLengkap = () => setUrutan(bank.map((_, i) => i))

  return (
    <div className="susun">
      <div className="susun__head">
        {typeof nomor === 'number' && <span className="susun__no">{nomor}.</span>}
        {labelBab && <span className="susun__bab">{labelBab}</span>}
        {item.fokus && (
          <span className="susun__fokus" lang="ja">
            {item.fokus}
          </span>
        )}
      </div>

      <p className="susun__arti">{item.arti}</p>

      {/* Baris jawaban */}
      <div
        className={`susun__jawab ${level === 'tepat' ? 'susun__jawab--ok' : level === 'belum' ? 'susun__jawab--no' : ''}`}
        aria-label="Susunan jawabanmu"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const from = e.dataTransfer.getData('text/susun-jawab')
          if (from !== '') hapusPada(Number(from))
        }}
      >
        {dipilih.length === 0 && <span className="susun__placeholder">Susun kata di sini…</span>}
        {dipilih.map((bankIndex, pos) => (
          <button
            key={`${bankIndex}-${pos}`}
            type="button"
            className="susun__chip susun__chip--jawab"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/susun-jawab', String(pos))
              e.dataTransfer.effectAllowed = 'move'
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault()
              const from = e.dataTransfer.getData('text/susun-jawab')
              if (from !== '') pindah(Number(from), pos)
            }}
            onClick={() => hapusPada(pos)}
            title="Klik untuk mengembalikan · geser untuk mengatur ulang"
          >
            <span lang="ja">{bank[bankIndex]}</span>
          </button>
        ))}
      </div>

      {/* Bank kata */}
      <div className="susun__bank" aria-label="Pilihan kata">
        {bank.map((teks, i) => {
          const dipakai = dipilih.includes(i)
          return (
            <button
              key={i}
              type="button"
              className={`susun__chip ${dipakai ? 'susun__chip--dipakai' : ''}`}
              disabled={dipakai}
              draggable={!dipakai}
              onDragStart={(e) => {
                e.dataTransfer.setData('text/susun-bank', String(i))
                e.dataTransfer.effectAllowed = 'copy'
              }}
              onClick={() => tambah(i)}
            >
              <span lang="ja">{teks}</span>
            </button>
          )
        })}
      </div>

      {/* Aksi */}
      <div className="susun__aksi">
        <button type="button" className="chip" onClick={() => setCek(true)} disabled={!semuaTerpakai}>
          Cek
        </button>
        <button type="button" className="chip" onClick={pilihLengkap} disabled={semuaTerpakai}>
          Pilih semua
        </button>
        <button type="button" className="chip" onClick={reset}>
          Reset
        </button>
        <button
          type="button"
          className="chip"
          onClick={() => setShowKunci((v) => !v)}
          aria-expanded={showKunci}
        >
          {showKunci ? 'Sembunyikan kunci' : 'Lihat kunci'}
        </button>
      </div>

      {level && (
        <p className={`verdict ${level === 'tepat' ? 'verdict--ok' : 'verdict--no'}`}>
          {level === 'tepat' ? 'Benar!' : 'Belum cocok — coba atur ulang urutannya.'}
        </p>
      )}

      {(showKunci || level === 'tepat') && (
        <div className="susun__kunci">
          <span className="susun__kunci-tag">Jawaban</span>
          <span lang="ja">{item.jawaban}</span>
          {item.penjelasan && <span className="susun__ket">{item.penjelasan}</span>}
        </div>
      )}
    </div>
  )
}
