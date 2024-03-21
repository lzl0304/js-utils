import { type Fn, getRawType } from './type'

export function isArray(val: unknown): val is unknown[] {
  return Array.isArray(val)
}

export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean'
}

export function isDate(val: unknown): val is Date {
  return getRawType(val) === 'Date'
}

export function isFunction(val: unknown): val is Fn {
  return typeof val === 'function'
}

export function isMap(val: unknown): val is Map<unknown, unknown> {
  return getRawType(val) === 'Map'
}

export function isNull(val: unknown): val is null {
  return val === null
}

export function isNumber(val: unknown): val is number {
  return typeof val === 'number'
}

export function isObject(val: unknown): val is object {
  return typeof val === 'object' && val !== null
}

export function isRegExp(val: unknown): val is RegExp {
  return getRawType(val) === 'RegExp'
}

export function isSet(val: unknown): val is Set<unknown> {
  return getRawType(val) === 'Set'
}

export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

export function isSymbol(val: unknown): val is symbol {
  return typeof val === 'symbol'
}

export function isUndefined(val: unknown): val is undefined {
  return val === void 0
}

export function isPromise<T>(val: unknown): val is Promise<T> {
  return (
    !!val &&
    (isObject(val) || isFunction(val)) &&
    isFunction((val as { then?: Fn }).then) &&
    isFunction((val as { catch?: Fn }).catch)
  )
}

export function isWeakMap<K extends WeakKey, V>(
  val: unknown,
): val is WeakMap<K, V> {
  return getRawType(val) === 'WeakMap'
}

export function isWeakSet<T extends WeakKey>(val: unknown): val is WeakSet<T> {
  return getRawType(val) === 'WeakSet'
}
