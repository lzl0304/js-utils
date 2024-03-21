import { describe, expect, it } from 'vitest'
import {
  isArray,
  isBoolean,
  isDate,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isString,
  isSymbol,
  isUndefined,
  isWeakMap,
  isWeakSet,
} from './is'

describe('is', () => {
  it('isArray', () => {
    expect(isArray([])).toBeTruthy()
    expect(isArray('[]')).toBeFalsy()
  })
  it('isBoolean', () => {
    expect(isBoolean(true)).toBeTruthy()
    expect(isBoolean(false)).toBeTruthy()
    expect(isBoolean('true')).toBeFalsy()
    expect(isBoolean('false')).toBeFalsy()
    expect(isBoolean(undefined)).toBeFalsy()
    expect(isBoolean(null)).toBeFalsy()
    expect(isBoolean(0)).toBeFalsy()
    expect(isBoolean(NaN)).toBeFalsy()
    expect(isBoolean('')).toBeFalsy()
    expect(isBoolean([])).toBeFalsy()
    expect(isBoolean({})).toBeFalsy()
    expect(isNull(() => {})).toBeFalsy()
  })
  it('isDate', () => {
    expect(isDate(new Date())).toBeTruthy()
    expect(isDate('')).toBeFalsy()
    expect(isDate(NaN)).toBeFalsy()
    expect(isDate(0)).toBeFalsy()
  })
  it('isFunction', () => {
    expect(isFunction(() => {})).toBeTruthy()
    expect(isFunction('')).toBeFalsy()
    expect(isFunction(NaN)).toBeFalsy()
  })
  it('isNull', () => {
    expect(isNull(null)).toBeTruthy()
    expect(isNull(undefined)).toBeFalsy()
    expect(isNull(0)).toBeFalsy()
    expect(isNull(NaN)).toBeFalsy()
    expect(isNull('')).toBeFalsy()
    expect(isNull([])).toBeFalsy()
    expect(isNull({})).toBeFalsy()
    expect(isNull(() => {})).toBeFalsy()
  })
  it('isNumber', () => {
    expect(isNumber(1)).toBeTruthy()
    expect(isNumber(1.23)).toBeTruthy()
    expect(isNumber(1.23e10)).toBeTruthy()
    expect(isNumber(BigInt(1))).toBeFalsy()
  })
  it('isObject', () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject(null)).toBeFalsy()
  })
  it('isString', () => {
    expect(isString('')).toBeTruthy()
    expect(isString(1234)).toBeFalsy()
  })
  it('isSymbol', () => {
    expect(isSymbol(Symbol())).toBeTruthy()
    expect(isString(123)).toBeFalsy()
  })
  it('isUndefined', () => {
    expect(isUndefined(undefined)).toBeTruthy()
    expect(isUndefined(null)).toBeFalsy()
    expect(isUndefined(0)).toBeFalsy()
    expect(isUndefined(NaN)).toBeFalsy()
    expect(isUndefined('')).toBeFalsy()
    expect(isUndefined([])).toBeFalsy()
    expect(isUndefined({})).toBeFalsy()
    expect(isUndefined(() => {})).toBeFalsy()
  })
  it('isWeakMap', () => {
    expect(isWeakMap(new WeakMap())).toBeTruthy()
    expect(isWeakMap(new Map())).toBeFalsy()
    expect(isWeakMap({})).toBeFalsy()
  })
  it('isWeakSet', () => {
    expect(isWeakSet(new WeakSet())).toBeTruthy()
    expect(isWeakSet(new Set())).toBeFalsy()
    expect(isWeakSet({})).toBeFalsy()
  })
})
