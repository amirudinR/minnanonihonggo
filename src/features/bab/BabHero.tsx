import type { Bab } from '../../types/bab'

/** Header bab: nomor, label, topik, judul kaiwa (JP), + stempel selesai/skor. */
export function BabHero({ num, bab, selesai, skor }: { num: number; bab: Bab; selesai?: boolean; skor?: number }) {
  return (
    <header className="bab-hero">
      <span className="bab-hero__no">{num}</span>
      <div className="bab-hero__body">
        <span className="bab-hero__label">Pelajaran</span>
        <h1 className="bab-hero__title">{bab.topik}</h1>
        <span className="bab-hero__sub" lang="ja">
          {bab.kaiwa?.judul ?? ''}
        </span>
      </div>
      <div className="bab-hero__stamp">
        {selesai && <span className="stamp stamp--ok">SELESAI</span>}
        {typeof skor === 'number' && <span className="stamp stamp--skor">SKOR {skor}</span>}
      </div>
    </header>
  )
}
