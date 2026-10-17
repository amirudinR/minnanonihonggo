/**
 * Snapshot + invariant soal kuis tata bahasa (`bunpouSoal`).
 *
 * Status: SELESAI untuk 50 bab (337 pola → 1685 soal). Bila menambah/mengubah soal,
 * perbarui angka snapshot di sini — tes ini sengaja "ketat" supaya data tidak
 * diam-diam berkurang. Invariant struktur menyeluruh dijaga `npm run validate:bunpou`.
 */
import { describe, expect, it } from 'vitest'
import { babs } from './all'

const JML_PER_POLA = 5
const TOTAL_SOAL = 1685
const TOTAL_POLA = 337
const MNN_1_SOAL = 880 // bab 1–25
const MNN_2_SOAL = 805 // bab 26–50

describe('soal kuis bunpou', () => {
  const berSoal = babs.filter((b) => (b.bunpouSoal?.length ?? 0) > 0)

  it('semua 50 bab sudah punya soal', () => {
    expect(berSoal.length).toBe(50)
    expect(berSoal.map((b) => b.no)).toEqual(Array.from({ length: 50 }, (_, i) => i + 1))
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

  it(`snapshot: ${TOTAL_POLA} pola → ${TOTAL_SOAL} soal`, () => {
    let soal = 0
    let pola = 0
    for (const b of babs) {
      soal += b.bunpouSoal?.length ?? 0
      pola += b.bunpou.length + (b.catatanTataBahasa?.length ?? 0)
    }
    expect(pola).toBe(TOTAL_POLA)
    expect(soal).toBe(TOTAL_SOAL)
    expect(soal).toBe(pola * JML_PER_POLA)
  })

  it('MNN I (bab 1–25) = 880 · MNN II (bab 26–50) = 805', () => {
    const jml = (dari: number, sampai: number) =>
      babs
        .filter((b) => b.no >= dari && b.no <= sampai)
        .reduce((n, b) => n + (b.bunpouSoal?.length ?? 0), 0)
    expect(jml(1, 25)).toBe(MNN_1_SOAL)
    expect(jml(26, 50)).toBe(MNN_2_SOAL)
    expect(MNN_1_SOAL + MNN_2_SOAL).toBe(TOTAL_SOAL)
  })
})
