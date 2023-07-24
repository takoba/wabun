import { describe, expect, it } from 'vitest'
import { serialize } from '../src/index'

describe('export const serialize()', () => {
  it('return kana when passed wabun', () => {
    // arrange
    const wabun = '.-... -... -- ..- '

    // act
    const actual = serialize(wabun)

    // assert
    expect(actual).toEqual('オハヨウ')
  })
})
