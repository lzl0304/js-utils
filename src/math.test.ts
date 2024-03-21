import { describe, expect, it } from 'vitest'

import { random } from './math'

describe('Math', () => {
  it('random', () => {
    expect(random(1, 5)).toBeGreaterThanOrEqual(1)
    expect(random(1, 5)).toBeLessThanOrEqual(5)
  })
})
