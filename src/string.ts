export function repeat(str: string, n: number): string {
  return new Array(n + 1).join(str)
}

export function trim(str: string): string {
  return str.replace(/^\s+|\s+$/g, '')
}

export function ltrim(str: string): string {
  return str.replace(/^\s+/, '')
}

export function rtrim(str: string): string {
  return str.replace(/\s+$/g, '')
}
