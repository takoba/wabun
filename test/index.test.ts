import { describe, expect, it } from 'vitest'
import { deserialize, serialize } from '../src/index'

describe('export const serialize()', () => {
  it('return wabun when passed kana', () => {
    // arrange
    const kana = 'オハヨウ'

    // act
    const wabun = serialize(kana)

    // assert
    expect(wabun).toEqual('.-... -... -- ..- ')
  })
})

describe('export const deserialize()', () => {
  it('return kana when passed wabun', () => {
    // arrange
    const wabun = '.-... -... -- ..- '

    // act
    const kana = deserialize(wabun)

    // assert
    expect(kana).toEqual('オハヨウ')
  })
})

describe('export const translate()', () => {
  it('return wabun when passed kana', () => {
    // arrange
    const kana = 'オハヨウ'

    // act
    const wabun = serialize(kana)

    // assert
    expect(wabun).toEqual('.-... -... -- ..- ')
  })
  it('return kana when passed wabun', () => {
    // arrange
    const wabun = '.-... -... -- ..- '

    // act
    const kana = deserialize(wabun)

    // assert
    expect(kana).toEqual('オハヨウ')
  })
})
