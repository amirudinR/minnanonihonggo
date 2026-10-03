import type { Bab } from '@/types/bab'

const modules = import.meta.glob<{ default: Bab }>('./bab*/index.ts', {
  eager: true,
})

export const babs: Bab[] = Object.entries(modules)
  .map(([, m]) => m.default)
  .sort((a, b) => a.no - b.no)

export function getBab(no: number): Bab | undefined {
  return babs.find((b) => b.no === no)
}
