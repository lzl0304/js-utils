const hasOwn = Object.prototype.hasOwnProperty

export const hasOwnProperty = (
  val: object,
  key: PropertyKey,
): key is keyof typeof val => hasOwn.call(val, key)

export function has(obj: object, key: PropertyKey): boolean {
  return obj != null && hasOwnProperty(obj, key)
}

export function pick<O extends object, K extends keyof O>(
  obj: O,
  keys: K[],
): Pick<O, K> {
  const result = {} as Pick<O, K>
  ;(Object.keys(obj) as K[]).forEach(key => {
    if (keys.includes(key)) {
      result[key] = obj[key]
    }
  })
  return result
}
