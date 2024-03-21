import { describe, expect, it } from 'vitest'
import { JSONParse } from './json'

describe('json', () => {
  it('parse', () => {
    expect(JSONParse('{}')).toEqual({})
  })

  it('parse failed', () => {
    expect(JSONParse('{')).toBeUndefined()
  })
})
