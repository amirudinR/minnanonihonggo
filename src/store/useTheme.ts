import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type ThemeMode = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'mnn1_theme_v1'

/** Tema sistem saat ini (fallback 'light' bila tak didukung). */
export function systemTheme(): ResolvedTheme {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }
  return 'light'
}

export function resolveTheme(mode: ThemeMode): ResolvedTheme {
  return mode === 'system' ? systemTheme() : mode
}

/** Tulis `data-theme` + `color-scheme` ke <html>. Idempoten. */
export function applyTheme(mode: ThemeMode): void {
  if (typeof document === 'undefined') return
  const resolved = resolveTheme(mode)
  const root = document.documentElement
  if (root.dataset.theme !== resolved) root.dataset.theme = resolved
  const scheme = resolved === 'dark' ? 'dark' : 'light'
  if (root.style.colorScheme !== scheme) root.style.colorScheme = scheme
}

interface ThemeState {
  /** 'light' | 'dark' | 'system' — default 'system'. */
  theme: ThemeMode
  /** Tema efektif setelah resolve (untuk label tombol & render). */
  resolved: ResolvedTheme
  setTheme: (mode: ThemeMode) => void
  /** Tombol toggle: balik terang <-> gelap berdasarkan yang tampil sekarang. */
  toggle: () => void
  /** Ikuti perubahan preferensi OS bila mode === 'system'. */
  syncSystem: () => void
}

export const useTheme = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      resolved:
        typeof document !== 'undefined' &&
        document.documentElement.dataset.theme === 'dark'
          ? 'dark'
          : typeof document !== 'undefined'
            ? 'light'
            : systemTheme(),

      setTheme: (mode) => {
        const resolved = resolveTheme(mode)
        applyTheme(mode)
        // idempoten: tidak menulis state bila tak berubah (hindari render loop)
        if (get().theme === mode && get().resolved === resolved) return
        set({ theme: mode, resolved })
      },

      toggle: () => {
        const next: ThemeMode = get().resolved === 'dark' ? 'light' : 'dark'
        get().setTheme(next)
      },

      syncSystem: () => {
        if (get().theme !== 'system') return
        const resolved = systemTheme()
        applyTheme('system')
        if (get().resolved === resolved) return
        set({ resolved })
      },
    }),
    {
      name: THEME_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      // hanya `theme` yang dipersist; `resolved` dihitung ulang saat boot
      partialize: (s) => ({ theme: s.theme }),
      onRehydrateStorage: () => (state) => {
        // setelah hydrate, terapkan tema tersimpan ke <html>
        applyTheme(state?.theme ?? 'system')
      },
    },
  ),
)
