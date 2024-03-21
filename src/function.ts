import { type Fn } from './type'

export function debounce(fn: Fn, wait: number, immediate?: boolean): Fn {
  let timer: ReturnType<typeof setTimeout> | null = null
  let isInvoked: boolean = false
  const debounced = (...args: unknown[]) => {
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate && !isInvoked) {
      fn(...args)
      isInvoked = true
    } else {
      timer = setTimeout(() => {
        fn(...args)
        timer = null
      }, wait)
    }
  }
  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = null
    isInvoked = false
  }
  return debounced
}

export function noop() {}

export function once(fn: Fn): Fn {
  let called = false
  return function (...args: unknown[]) {
    if (!called) {
      called = true
      return fn(...args)
    }
  }
}
