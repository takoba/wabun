import { describe, expect, it } from '@jest/globals'
import { deserialize, serialize, translate, wabun as Wabun } from '../src/index'

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

describe('export const wabun()', () => {
  const examples = [
    [
      'チキユウギキイテネ',
      'カカヘカッヘカヘカカッヘカカヘヘッカカヘッヘカヘカカッカカッヘカヘカカッカヘッカヘカヘヘッヘヘカヘッ',
    ],
    [
      'ミヤザキサンマイニチキイテルヨ',
      'カカヘカヘッカヘヘッヘカヘカヘッカカッヘカヘカカッヘカヘカヘッカヘカヘカッヘカカヘッカヘッヘカヘカッカカヘカッヘカヘカカッカヘッカヘカヘヘッヘカヘヘカッヘヘッ',
    ],
  ]

  it.each(examples)('return "%s" when passed "%s"', (kana, wabun) => {
    // arrange
    const { serialize } = Wabun({ characters: { dot: 'カ', dash: 'ヘ', space: 'ッ' } })

    // act
    const actual = serialize(kana)

    // assert
    expect(actual).toEqual(wabun)
  })

  it.each(examples)(
    'return "%s" when passed "%s" (called `wabun()` with other pattern variables)',
    (kana, wabun) => {
      // arrange
      const { serialize } = Wabun('カ', 'ヘ', 'ッ')

      // act
      const actual = serialize(kana)

      // assert
      expect(actual).toEqual(wabun)
    },
  )
})
