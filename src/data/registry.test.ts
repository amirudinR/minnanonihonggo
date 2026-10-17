/**
 * Snapshot data 50 bab. Melindungi dari regresi data (bab hilang / jumlah
 * kosakata atau soal susun berubah tanpa sengaja). Bila memang sengaja menambah
 * data, perbarui angka snapshot di sini.
 */
import { describe, expect, it } from 'vitest'
import { babs, getBab } from './all'
import { getMeta, meta, TOTAL_BAB } from './meta'

const TOTAL_KOSAKATA = 2149
const SUSUN_PER_BAB = 20

describe('registry 50 bab', () => {
  it('memuat tepat 50 bab bernomor 1..50 tanpa duplikat/gap', () => {
    expect(babs).toHaveLength(50)
    expect(babs.map((b) => b.no)).toEqual(Array.from({ length: 50 }, (_, i) => i + 1))
  })
  it('getBab menjangkau setiap nomor; di luar rentang undefined', () => {
    for (let n = 1; n <= 50; n++) expect(getBab(n)?.no).toBe(n)
    expect(getBab(0)).toBeUndefined()
    expect(getBab(51)).toBeUndefined()
  })
})

describe('isi minimum tiap bab', () => {
  it('punya kosakata, bunpou, kaiwa (dengan dialog), dan susun', () => {
    for (const b of babs) {
      expect(b.kosakata.length, `bab ${b.no} kosakata`).toBeGreaterThan(0)
      expect(b.bunpou.length, `bab ${b.no} bunpou`).toBeGreaterThan(0)
      expect(b.kaiwa, `bab ${b.no} kaiwa`).not.toBeNull()
      expect(b.kaiwa!.dialog.length, `bab ${b.no} dialog`).toBeGreaterThan(0)
      expect(b.susun?.length ?? 0, `bab ${b.no} susun`).toBe(SUSUN_PER_BAB)
    }
  })
  it('setiap dialog kaiwa punya pembicara & teks', () => {
    for (const b of babs) {
      for (const d of b.kaiwa!.dialog) {
        expect(d.pembicara?.trim(), `bab ${b.no} pembicara`).toBeTruthy()
        expect(d.teks?.trim(), `bab ${b.no} teks`).toBeTruthy()
      }
    }
  })
})

describe('meta (ringkasan) sinkron dengan data', () => {
  it('menutup semua bab, tanpa duplikat', () => {
    expect(TOTAL_BAB).toBe(50)
    expect(meta.map((m) => m.no)).toEqual(babs.map((b) => b.no))
    expect(new Set(meta.map((m) => m.no)).size).toBe(meta.length)
  })

  it('topik, kaiwaJudul, dan jumlah cocok dengan data asli', () => {
    for (const b of babs) {
      const m = getMeta(b.no)
      expect(m, `meta bab ${b.no} ada`).toBeDefined()
      expect(m!.topik, `bab ${b.no} topik`).toBe(b.topik)
      expect(m!.kaiwaJudul, `bab ${b.no} kaiwaJudul`).toBe(b.kaiwa?.judul ?? '')
      expect(m!.kosakata, `bab ${b.no} kosakata`).toBe(b.kosakata.length)
      expect(m!.bunpou, `bab ${b.no} bunpou`).toBe(b.bunpou.length)
      expect(m!.latihan, `bab ${b.no} latihan`).toBe(
        b.renshuuA.length + b.renshuuB.length + b.renshuuC.length,
      )
    }
  })
})

describe('total snapshot', () => {
  it(`total kosakata = ${TOTAL_KOSAKATA}`, () => {
    const total = babs.reduce((n, b) => n + b.kosakata.length, 0)
    expect(total).toBe(TOTAL_KOSAKATA)
  })
  it('total soal susun = 50 × 20 = 1000, id unik per bab', () => {
    let total = 0
    for (const b of babs) {
      const ids = (b.susun ?? []).map((s) => s.id)
      expect(new Set(ids).size, `bab ${b.no} id susun unik`).toBe(ids.length)
      total += (b.susun ?? []).length
    }
    expect(total).toBe(50 * SUSUN_PER_BAB)
  })
})
