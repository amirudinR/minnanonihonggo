/** Pilihan bab untuk latihan susun: Semua · MNN I · MNN II · 1–50. */
export type PilihBab = 'semua' | 'I' | 'II' | number

type Props = {
  nilai: PilihBab
  onPilih: (v: PilihBab) => void
  daftar: { no: number; topik?: string }[]
  /** Jumlah soal tersedia per bab (untuk label kecil). */
  jumlah?: Record<number, number>
}

export function PemilihBabSusun({ nilai, onPilih, daftar, jumlah }: Props) {
  const kelas = (aktif: boolean) => `babbar__chip ${aktif ? 'babbar__chip--aktif' : ''}`

  return (
    <div className="babbar" lang="id">
      <div className="babbar__baris" role="group" aria-label="Rentang bab">
        <button type="button" className={kelas(nilai === 'semua')} onClick={() => onPilih('semua')}>
          Semua
        </button>
        <button type="button" className={kelas(nilai === 'I')} onClick={() => onPilih('I')}>
          MNN I (1–25)
        </button>
        <button type="button" className={kelas(nilai === 'II')} onClick={() => onPilih('II')}>
          MNN II (26–50)
        </button>
      </div>
      <div className="babbar__scroll" role="group" aria-label="Pilih bab">
        {daftar.map((b) => {
          const n = jumlah?.[b.no]
          return (
            <button
              key={b.no}
              type="button"
              className={kelas(nilai === b.no)}
              onClick={() => onPilih(b.no)}
              title={
                `Bab ${b.no}${b.topik ? ' — ' + b.topik : ''}${n ? ` · ${n} soal` : ''}`
              }
              aria-pressed={nilai === b.no}
            >
              {b.no}
            </button>
          )
        })}
      </div>
    </div>
  )
}
