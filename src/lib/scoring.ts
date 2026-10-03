export function hitungSkor(benar: number, total: number): number {
  if (total <= 0) return 0
  return Math.round((benar / total) * 100)
}
