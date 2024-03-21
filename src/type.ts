const toString = Object.prototype.toString

export type Fn = (...args: unknown[]) => unknown

export function getRawType(val: unknown): string {
  return toString.call(val).slice(8, -1)
}
