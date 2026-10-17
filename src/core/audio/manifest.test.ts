import { describe, expect, it } from 'vitest'
import { audioManifest, cekKonsistensiAudio, getAudio } from './manifest'

describe('audioManifest', () => {
  it('memuat 50 bab', () => {
    expect(audioManifest).toHaveLength(50)
    expect(audioManifest.map((a) => a.bab)).toEqual(
      Array.from({ length: 50 }, (_, i) => i + 1),
    )
  })
  it('setiap bab punya tepat 1 kaiwa', () => {
    for (const a of audioManifest) {
      expect(a.kaiwa).toBe(`/audio/bab${String(a.bab).padStart(2, '0')}_kaiwa.mp3`)
    }
  })
  it('jumlah mondai selalu 2..4', () => {
    for (const a of audioManifest) {
      expect(a.mondai.length).toBeGreaterThanOrEqual(2)
      expect(a.mondai.length).toBeLessThanOrEqual(4)
    }
  })
  it('total track = 50 kaiwa + 112 mondai = 162', () => {
    const mondai = audioManifest.reduce((n, a) => n + a.mondai.length, 0)
    expect(mondai).toBe(112)
  })
})

describe('getAudio / cekKonsistensiAudio', () => {
  it('getAudio mengembalikan bab yang ada, undefined untuk di luar rentang', () => {
    expect(getAudio(1)?.bab).toBe(1)
    expect(getAudio(51)).toBeUndefined()
  })
  it('cekKonsistensiAudio cocok / melaporkan selisih', () => {
    expect(cekKonsistensiAudio(1, 3)).toBeNull()
    expect(cekKonsistensiAudio(1, 5)).toContain('Bab 1')
    expect(cekKonsistensiAudio(99, 2)).toContain('tidak ditemukan')
  })
})
