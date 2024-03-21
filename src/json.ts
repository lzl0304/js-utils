export function JSONParse(str: string): unknown {
  try {
    return JSON.parse(str)
  } catch {
    return void 0
  }
}
