/**
 * Snapshot + invariant soal kuis tata bahasa (`bunpouSoal`).
 * Bab yang belum punya soal dilewati (peluncuran bertahap); bila menambah soal,
 * perbarui angka snapshot di sini.
 */
import { describe, expect, it } from 'vitest'
import { babs } from './all'

const JML_PER_POLA = 5
const PELUNcuran = 5

describe('soal kuis bunpou', () => {
  const berSoal = babs.filter((b) => (b.bunpouSoal?.length ?? 0) > 0)

  it('bab 1–5 sudah punya soal', () => {
    expect(berSoal.map((b) => b.no)).toEqual([1, 2, 3, 4, 5])
    expect(berSoal.map((b) => b.no).length).toBeGreaterThanOrEqual(PELUNcuran)
  })

  it('setiap pola punya tepat 5 soal & id unik', () => {
    const ids = new Set<string>()
    for (const b of berSoal) {
      const soal = b.bunpouSoal ?? []
      for (const grup of ['bunpou', 'catatan'] as const) {
        const pola = grup === 'bunpou' ? b.bunpou : (b.catatanTataBahasa ?? [])
        for (const p of pola) {
          expect(
            soal.filter((s) => s.grup === grup && s.no === p.no).length,
            `bab ${b.no} ${grup} ${p.no}`,
          ).toBe(JML_PER_POLA)
        }
      }
      for (const s of soal) {
        expect(ids.has(s.id), `id ganda: ${s.id}`).toBe(false)
        ids.add(s.id)
        expect(s.soal).toContain('___')
        expect(s.pilihan).toHaveLength(4)
        expect(new Set(s.pilihan).size).toBe(4)
        expect(s.pilihan).toContain(s.jawaban)
        expect(s.arti.trim().length).toBeGreaterThan(0)
      }
    }
  })

  it('snapshot jumlah soal bab 1–5 = 180', () => {
    const total = berSoal.reduce((n, b) => n + (b.bunpouSoal?.length ?? 0), 0)
    expect(total).toBe(180)
  })
})
