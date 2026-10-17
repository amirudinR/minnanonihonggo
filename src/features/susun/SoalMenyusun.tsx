import { useEffect, useMemo, useState } from 'react'
import type { SusunItem } from '../../types/bab'
import { KATA_DIKENAL } from '../../data/kamus'
import { canonical } from '../../core/text/normalize'
import { bankUntuk, bankAhliDenganPengecoh, urutanBenar, tokenAhli } from '../../core/text/susun'
import { KeteranganBacaan } from './KeteranganBacaan'

export type SusunMode = 'dasar' | 'ahli'

type Props = {
  item: SusunItem
  nomor?: number
  labelBab?: string
  mode?: SusunMode
  /** Auto-check: begitu semua chip terpasang, langsung dikoreksi. */
  autoCheck?: boolean
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

export function SoalMenyusun({
  item,
  nomor,
  labelBab,
  mode = 'dasar',
  autoCheck = true,
  value,
  onChange,
}: Props) {
  // Bank stabil (acak deterministik) → index jawaban tersimpan selalu valid.
  // Mode ahli memuat token + pengecoh partikel; auto-check menunggu SEMUA terpakai
  // supaya user memakai pengecoh juga (kalau tidak, bank tak mungkin habis).
  const bank = useMemo(
    () =>
      mode === 'ahli'
        ? bankAhliDenganPengecoh(item, { kataDikenal: KATA_DIKENAL })
        : bankUntuk(item),
    [item, mode],
  )
  const jawaban = useMemo(
    () => (mode === 'ahli' ? tokenAhli(item, { kataDikenal: KATA_DIKENAL }) : urutanBenar(item)),
    [item, mode],
  )
  const wajib = useMemo(() => new Set(jawaban.map((t) => canonical(t))), [jawaban])

  const [cekManual, setCekManual] = useState(false)
  const [showKunci, setShowKunci] = useState(false)

  // Urutan disimpan lokal (functional update) supaya klik cepat berturut-turut
  // tidak saling menimpa; disinkronkan ke store lewat effect di bawah.
  const [urutan, setUrutan] = useState<number[]>(() =>
    value.filter((i) => i >= 0 && i < bank.length),
  )

  // Muat ulang saat soal / mode berubah (bank berbeda → index lama tak berlaku).
  useEffect(() => {
    setUrutan(value.filter((i) => i >= 0 && i < bank.length))
    setCekManual(false)
    setShowKunci(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id, mode, bank])

  // Dorong perubahan ke store (idempoten: hanya bila beda).
  useEffect(() => {
    if (urutan.join(',') !== value.join(',')) onChange(urutan)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urutan])

  const dipilih = urutan
  const tersusun = dipilih.map((i) => bank[i] ?? '')
  /** Berapa token WAJIB (bukan pengecoh) yang sudah terpasang. */
  const wajibTerpakai = tersusun.filter((t) => wajib.has(canonical(t))).length
  /** Butuh pengecoh di bank? (mode ahli) → tampilkan badge pengecoh di UI. */
  const adaPengecoh = bank.length > jawaban.length
  /**
   * Benar = token wajib (tanpa pengecoh) tersusun pada urutan yang tepat.
   * Pengecoh boleh dipakai/dibiarkan; user cukup menaruh token wajibnya berurutan.
   */
  const benarDari = (pilihan: string[]) => {
    const wajibUrut = pilihan.filter((t) => wajib.has(canonical(t)))
    if (wajibUrut.length !== jawaban.length) return false
    return wajibUrut.every((t, i) => canonical(t) === canonical(jawaban[i] ?? ''))
  }
  /**
   * Auto-check = semua token WAJIB sudah terpasang (pengecoh boleh diabaikan).
   * JANGAN menunggu bank habis — user tak perlu memasang pengecoh agar bisa benar.
   */
  const siapDicek = jawaban.length > 0 && wajibTerpakai === jawaban.length
  const perluCek = (autoCheck && siapDicek) || cekManual
  const level = perluCek ? (benarDari(tersusun) ? 'tepat' : 'belum') : null
  const benar = level === 'tepat'
  /** Posisi token WAJIB di baris jawaban (indeks dalam `tersusun`). */
  const posWajib: number[] = []
  tersusun.forEach((t, i) => {
    if (wajib.has(canonical(t))) posWajib.push(i)
  })
  /** Posisi salah pertama (hanya di antara token wajib) — untuk ditunjuk. */
  const posisiSalah = (() => {
    if (!perluCek || benar) return -1
    for (let i = 0; i < jawaban.length; i++) {
      const pos = posWajib[i]
      if (pos === undefined) return i
      if (canonical(tersusun[pos] ?? '') !== canonical(jawaban[i] ?? '')) return i
    }
    return -1
  })()
  /** Chip di posisi ini benar? (hanya token wajib yang dinilai; pengecoh netral) */
  const chipBenar = (teks: string, pos: number) => {
    const n = posWajib.indexOf(pos)
    if (n < 0) return false
    return canonical(teks) === canonical(jawaban[n] ?? '')
  }
  /** Pengecoh = token yang tidak ada di daftar jawaban. */
  const apakahPengecoh = (teks: string) => !wajib.has(canonical(teks))

  const setUrutanBaru = (ubah: (prev: number[]) => number[]) => {
    setCekManual(false)
    setUrutan(ubah)
  }

  const tambah = (i: number) => {
    setUrutanBaru((prev) => (prev.includes(i) ? prev : [...prev, i]))
  }

  const hapusPada = (pos: number) => {
    setUrutanBaru((prev) => prev.filter((_, p) => p !== pos))
  }

  const pindah = (from: number, to: number) => {
    setUrutanBaru((prev) => {
      if (to < 0 || to >= prev.length || from === to) return prev
      const next = [...prev]
      const [x] = next.splice(from, 1)
      next.splice(to, 0, x)
      return next
    })
  }

  /** Masukkan chip bank ke posisi tertentu di baris jawaban. */
  const sisipkan = (bankIndex: number, pos: number) => {
    setUrutanBaru((prev) => {
      if (prev.includes(bankIndex)) return prev
      const next = [...prev]
      next.splice(pos, 0, bankIndex)
      return next
    })
  }

  const reset = () => {
    setUrutanBaru(() => [])
    setShowKunci(false)
  }

  return (
    <div className="susun">
      <div className="susun__head">
        {typeof nomor === 'number' && <span className="susun__no">{nomor}.</span>}
        {labelBab && <span className="susun__bab">{labelBab}</span>}
        {mode === 'ahli' && <span className="susun__badge">Ahli</span>}
        {item.fokus && (
          <span className="susun__fokus" lang="ja">
            {item.fokus}
          </span>
        )}
      </div>

      <p className="susun__arti">{item.arti}</p>

      {/* Baris jawaban */}
      <div
        className={`susun__jawab ${benar ? 'susun__jawab--ok' : level ? 'susun__jawab--no' : ''}`}
        aria-label="Susunan jawabanmu"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const from = e.dataTransfer.getData('text/susun-jawab')
          const dariBank = e.dataTransfer.getData('text/susun-bank')
          if (from !== '') hapusPada(Number(from))
          else if (dariBank !== '') tambah(Number(dariBank))
        }}
      >
        {dipilih.length === 0 && <span className="susun__placeholder">Susun kata di sini…</span>}
        {dipilih.map((bankIndex, pos) => {
          const teks = bank[bankIndex] ?? ''
          const pengecoh = apakahPengecoh(teks)
          const ok = perluCek && !pengecoh && chipBenar(teks, pos)
          const salah = perluCek && !benar && !pengecoh && !ok
          const kelas = [
            'susun__chip',
            'susun__chip--jawab',
            pengecoh ? 'susun__chip--pengecoh' : '',
            ok ? 'susun__chip--ok' : '',
            salah ? 'susun__chip--salah' : '',
            salah && posWajib.indexOf(pos) === posisiSalah ? 'susun__chip--tunjuk' : '',
          ]
            .filter(Boolean)
            .join(' ')
          return (
            <button
              key={`${bankIndex}-${pos}`}
              type="button"
              className={kelas}
              draggable
              aria-label={salah ? `${teks} — posisi salah` : teks}
              onDragStart={(e) => {
                e.stopPropagation()
                e.dataTransfer.setData('text/susun-jawab', String(pos))
                e.dataTransfer.effectAllowed = 'move'
              }}
              onDragOver={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              onDrop={(e) => {
                e.preventDefault()
                e.stopPropagation()
                const from = e.dataTransfer.getData('text/susun-jawab')
                const dariBank = e.dataTransfer.getData('text/susun-bank')
                if (from !== '') pindah(Number(from), pos)
                else if (dariBank !== '') sisipkan(Number(dariBank), pos)
              }}
              onClick={() => hapusPada(pos)}
              title="Klik untuk mengembalikan · geser untuk mengatur ulang"
            >
              <span lang="ja">{teks}</span>
            </button>
          )
        })}
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
                e.stopPropagation()
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
        <button
          type="button"
          className="chip"
          onClick={() => setCekManual(true)}
          disabled={!siapDicek}
        >
          Cek
        </button>
        <button type="button" className="chip" onClick={reset} disabled={dipilih.length === 0}>
          Ulangi
        </button>
        <button
          type="button"
          className="chip"
          onClick={() => setShowKunci((v) => !v)}
          aria-expanded={showKunci}
        >
          {showKunci ? 'Sembunyikan kunci' : 'Lihat kunci'}
        </button>
        {adaPengecoh && <span className="susun__hint">Ada {bank.length - jawaban.length} partikel pengecoh</span>}
        {!autoCheck && <span className="susun__hint">Auto-check mati</span>}
      </div>

      {level && (
        <p
          className={`verdict ${benar ? 'verdict--ok' : 'verdict--no'}`}
          role="status"
          aria-live="polite"
        >
          {benar
            ? 'Benar! ✓'
            : posisiSalah >= 0
              ? `Belum cocok — kata ke-${posisiSalah + 1} masih salah. Geser untuk menukar posisi.`
              : 'Belum cocok — coba atur ulang urutannya.'}
        </p>
      )}

      {(showKunci || benar) && <KeteranganBacaan item={item} />}
    </div>
  )
}
