import { describe, expect, it } from 'vitest'

import { has, pick } from './object'

describe('Object', () => {
  it('has', () => {
    expect(has({}, 'foo')).toBeFalsy()
    expect(has({ foo: 'foo' }, 'foo')).toBeTruthy()
  })
  it('pick', () => {
    expect(pick({ foo: 1, goo: 2 }, ['foo'])).toEqual({ foo: 1 })
    expect(pick({ foo: 'foo' }, [])).toEqual({})
  })
})
