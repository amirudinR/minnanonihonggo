/**
 * `loadLatihanCampuran()` hanya memuat `susun` + `mondai` (bukan bab penuh).
 * Tes ini memastikan hasilnya IDENTIK dengan data bab penuh — kalau tidak,
 * halaman latihan campuran akan menyimpang dari halaman bab.
 */
import { describe, expect, it } from 'vitest'
import { babs } from './all'
import { loadLatihanCampuran } from './latihan-campuran'

describe('loadLatihanCampuran', () => {
  it('menutup semua bab dalam urutan naik', async () => {
    const ringan = await loadLatihanCampuran()
    expect(ringan.map((b) => b.no)).toEqual(babs.map((b) => b.no))
  })

  it('susun, mondai, dan topik sama dengan data bab penuh', async () => {
    const ringan = await loadLatihanCampuran()
    for (const b of babs) {
      const r = ringan.find((x) => x.no === b.no)
      expect(r, `bab ${b.no} ada`).toBeDefined()
      expect(r!.topik, `bab ${b.no} topik`).toBe(b.topik)
      expect(r!.susun, `bab ${b.no} susun`).toEqual(b.susun)
      expect(r!.mondai, `bab ${b.no} mondai`).toEqual(b.mondai)
    }
  })
})
