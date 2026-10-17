import { describe, expect, it } from 'vitest'
import { adaChoukai, audioManifest, cekKonsistensiAudio, getAudio } from './manifest'

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

describe('choukai (聴解 — hanya MNN II)', () => {
  it('bab 1–25 tidak punya choukai; bab 26–50 punya', () => {
    for (let n = 1; n <= 25; n++) {
      expect(getAudio(n)?.choukai, `bab ${n}`).toEqual([])
      expect(adaChoukai(n), `adaChoukai(${n})`).toBe(false)
    }
    for (let n = 26; n <= 50; n++) {
      expect((getAudio(n)?.choukai.length ?? 0), `bab ${n} choukai`).toBeGreaterThanOrEqual(3)
      expect(adaChoukai(n), `adaChoukai(${n})`).toBe(true)
    }
  })
  it('total track choukai = 107', () => {
    const total = audioManifest.reduce((n, a) => n + a.choukai.length, 0)
    expect(total).toBe(107)
  })
  it('nama track choukai berurutan babNN_choukaiM.mp3', () => {
    for (const a of audioManifest) {
      const pre = `/audio/bab${String(a.bab).padStart(2, '0')}_choukai`
      a.choukai.forEach((src, i) => expect(src).toBe(`${pre}${i + 1}.mp3`))
    }
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
