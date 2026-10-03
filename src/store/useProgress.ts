import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface BabProgress {
  no: number
  selesai: boolean
  skor?: number
  lastScoreAt?: string
  /** bagian yang ditandai selesai user, mis. ['kosakata','bunpou','renshuuA'] */
  bagianSelesai?: string[]
}

interface ProgressState {
  items: BabProgress[]
  setSelesai: (no: number, selesai: boolean) => void
  setSkor: (no: number, skor: number) => void
  toggleBagian: (no: number, bagian: string) => void
  resetBab: (no: number) => void
}

function upsert(items: BabProgress[], no: number, patch: Partial<BabProgress>): BabProgress[] {
  const i = items.findIndex((x) => x.no === no)
  if (i >= 0) return items.map((x, idx) => (idx === i ? { ...x, ...patch } : x))
  return [...items, { no, selesai: false, ...patch }]
}

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      items: [],
      setSelesai: (no, selesai) =>
        set((s) => {
          const cur = s.items.find((x) => x.no === no)
          if (cur && cur.selesai === selesai) return s
          return { items: upsert(s.items, no, { selesai }) }
        }),
      setSkor: (no, skor) =>
        set((s) => {
          const cur = s.items.find((x) => x.no === no)
          // idempoten: hindari tulisan berulang yang memicu re-render tanpa henti
          if (cur && cur.skor === skor) return s
          const selesai = skor >= 60
          return {
            items: upsert(s.items, no, {
              skor,
              selesai,
              lastScoreAt: new Date().toISOString(),
            }),
          }
        }),
      toggleBagian: (no, bagian) =>
        set((s) => {
          const cur = s.items.find((x) => x.no === no)?.bagianSelesai ?? []
          const next = cur.includes(bagian)
            ? cur.filter((b) => b !== bagian)
            : [...cur, bagian]
          return { items: upsert(s.items, no, { bagianSelesai: next }) }
        }),
      resetBab: (no) => set((s) => ({ items: s.items.filter((x) => x.no !== no) })),
    }),
    { name: 'mnn1_progress_v1', storage: createJSONStorage(() => localStorage) },
  ),
)

export function getProgress(no: number): BabProgress | undefined {
  return useProgress.getState().items.find((x) => x.no === no)
}
