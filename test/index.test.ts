import { describe, expect, it } from 'vitest'
import { deserialize, serialize, translate } from '../src/index'

const examples = [
  ['オハヨウ', '.-... -... -- ..- '],
  ['オヤスミ', '.-... .-- ---.- ..-.- '],
  ['ナラ', '.-. ... '],
]

describe('export const serialize()', () => {
  it.each(examples)('return "%s" when passed "%s"', (kana, wabun) => {
    // act
    const actual = serialize(kana)

    // assert
    expect(actual).toEqual(wabun)
  })
})

describe('export const deserialize()', () => {
  it.each(examples)('return "%s" when passed "%s"', (kana, wabun) => {
    // act
    const actual = deserialize(wabun)

    // assert
    expect(actual).toEqual(kana)
  })
})

describe('export const translate()', () => {
  it.each(examples)('return "%s" when passed "%s"', (kana, wabun) => {
    // act
    const actual = translate(kana)

    // assert
    expect(actual).toEqual(wabun)
  })
  it.each(examples)('return "%s" when passed "%s"', (kana, wabun) => {
    // act
    const actual = translate(wabun)

    // assert
    expect(actual).toEqual(kana)
  })
})
