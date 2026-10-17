import { describe, expect, it } from 'vitest'
import { kataKunci, nilaiTerjemahan, normalizeTerjemahan } from './terjemahan'

describe('normalizeTerjemahan', () => {
  it('menurunkan huruf, membuang tanda baca, merapikan spasi', () => {
    expect(normalizeTerjemahan('Ini, buku!')).toBe('ini buku')
    expect(normalizeTerjemahan('  a   b  ')).toBe('a b')
  })
})

describe('kataKunci', () => {
  it('membuang stopword dan kata < 3 huruf', () => {
    expect(kataKunci('Ini adalah buku saya')).toEqual(['buku'])
  })
})

describe('nilaiTerjemahan', () => {
  it('sama persis = tepat 100', () => {
    const r = nilaiTerjemahan('Saya pegawai perusahaan', 'Saya pegawai perusahaan')
    expect(r.level).toBe('tepat')
    expect(r.skor).toBe(100)
  })
  it('tanpa kata kunci = belum 0', () => {
    expect(nilaiTerjemahan('', 'buku')).toEqual({ level: 'belum', skor: 0 })
  })
  it('makna sama, sinonim/urutan beda tetap dekat atau tepat', () => {
    const r = nilaiTerjemahan('perusahaan pegawai saya', 'saya pegawai perusahaan')
    expect(['tepat', 'dekat']).toContain(r.level)
    expect(r.skor).toBeGreaterThan(0)
  })
  it('sangat berbeda = belum', () => {
    expect(nilaiTerjemahan('kucing hitam', 'buku tebal').level).toBe('belum')
  })
})
