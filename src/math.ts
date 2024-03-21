import { isUndefined } from './is'

export function random(): number
export function random(m: number): number
export function random(m: number, n: number): number
export function random(m?: number, n?: number): number {
  if (!isUndefined(m) && !isUndefined(n)) {
    return Math.random() * (n - m) + m
  }
  if (!isUndefined(m) && isUndefined(n)) {
    return Math.random() * m
  }
  if (isUndefined(m) && !isUndefined(n)) {
    return Math.random() * n
  }
  return Math.random()
}
