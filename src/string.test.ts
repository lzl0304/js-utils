import { describe, expect, it } from 'vitest'

import { ltrim, repeat, rtrim, trim } from './string'

describe('string', () => {
  it('repeat', () => {
    expect(repeat('a', 3)).toBe('aaa')
  })
  it('trim', () => {
    expect(trim('  a  ')).toBe('a')
    expect(ltrim('  a  ')).toBe('a  ')
    expect(rtrim('  a  ')).toBe('  a')
  })
  it('ltrim', () => {
    expect(ltrim('  a  ')).toBe('a  ')
  })
  it('rtrim', () => {
    expect(rtrim('  a  ')).toBe('  a')
  })
})
