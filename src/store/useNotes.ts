import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface NotesState {
  answers: Record<string, string>
  catatan: Record<number, string>
  setAnswer: (key: string, value: string) => void
  setCatatan: (babNo: number, value: string) => void
}

export const useNotes = create<NotesState>()(
  persist(
    (set) => ({
      answers: {},
      catatan: {},
      setAnswer: (key, value) =>
        set((s) => ({ answers: { ...s.answers, [key]: value } })),
      setCatatan: (babNo, value) =>
        set((s) => ({ catatan: { ...s.catatan, [babNo]: value } })),
    }),
    { name: 'mnn1_notes_v1', storage: createJSONStorage(() => localStorage) },
  ),
)
