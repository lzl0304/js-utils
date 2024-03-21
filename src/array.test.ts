import { append, chunk, first, insert, last } from './array'
import { describe, expect, it } from 'vitest'

describe('Array', () => {
  it('append', () => {
    expect(append([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
  })

  it('chunk', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]])
  })

  it('first', () => {
    expect(first([1, 2, 3])).toEqual(1)
    expect(first([])).toBeUndefined()
  })

  it('insert', () => {
    expect(insert([1, 2, 3], 2, 9)).toEqual([1, 2, 9, 3])
    expect(insert([1, 2, 3], 0, 9)).toEqual([9, 1, 2, 3])
    expect(() => insert([1, 2, 3], 5, 9)).toThrowError('range')
  })

  it('last', () => {
    expect(last([1, 2, 3])).toEqual(3)
    expect(last([])).toBeUndefined()
  })
})
