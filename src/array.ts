export function append<T = unknown>(arr: T[], val: T): T[] {
  return [...arr, val]
}

export function chunk<T = unknown>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, idx) => {
    return arr.slice(idx * size, idx * size + size)
  })
}

export function first<T = unknown>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : void 0
}

export function insert<T = unknown>(arr: T[], index: number, data: T) {
  const len = arr.length
  if (index < 0 || index > len) {
    throw new RangeError('index range error')
  }
  return [...arr.slice(0, index), data, ...arr.slice(index)]
}

export function last<T = unknown>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : void 0
}
