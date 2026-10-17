/**
 * Invariant data partikel (duplikat ringan dari `npm run validate:partikel`,
 * agar loop tes cepat menangkap regresi tanpa menjalankan tsx).
 */
import { describe, expect, it } from 'vitest'
import { partikel } from './partikel'
import { soalPartikel } from './partikel-soal'

describe('partikel', () => {
  it('memuat 38 partikel dengan bentuk unik', () => {
    expect(partikel).toHaveLength(38)
    const bentuk = partikel.map((p) => p.bentuk)
    expect(new Set(bentuk).size).toBe(bentuk.length)
  })

  it('bab[] & perBab[]: terurut menaik, tanpa duplikat, dan perBab ⊆ bab', () => {
    for (const p of partikel) {
      const urut = [...p.bab].sort((a, b) => a - b)
      expect(p.bab, `${p.bentuk} bab[]`).toEqual(urut)
      expect(new Set(p.bab).size, `${p.bentuk} bab[] duplikat`).toBe(p.bab.length)
      expect(p.perBab && p.perBab.length, `${p.bentuk} perBab`).toBeTruthy()
      for (const f of p.perBab ?? []) {
        expect(p.bab, `${p.bentuk} perBab.bab ${f.bab} harus ada di bab[]`).toContain(f.bab)
        expect(f.fungsi?.trim(), `${p.bentuk} fungsi`).toBeTruthy()
        expect(f.keterangan?.trim(), `${p.bentuk} keterangan`).toBeTruthy()
      }
    }
  })
})

describe('soal partikel', () => {
  it('memuat 100 soal dengan id unik', () => {
    expect(soalPartikel).toHaveLength(100)
    const ids = soalPartikel.map((s) => s.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('setiap soal: ada rumpang ___, jawaban ∈ pilihan, pilihan unik', () => {
    for (const s of soalPartikel) {
      expect(s.soal, `${s.id} harus memuat ___`).toContain('___')
      expect(s.pilihan, `${s.id} pilihan`).toContain(s.jawaban)
      expect(new Set(s.pilihan).size, `${s.id} pilihan duplikat`).toBe(s.pilihan.length)
    }
  })
})
