import { generateSerializeMethod } from "./serializer"
import { generateDeserializeMethod } from "./deserializer"
import { generateTranslateMethod } from "./translator"

// -- Config
type Config = {
  characters: {
    dot: string,
    dash: string,
    space: string,
  }
}
const defaults: Config = {
  characters: {
    dot: '.',
    dash: '-',
    space: ' ',
  },
}
// -- /Config

// -- Generator
type Wabun = {
  serialize: (kana: string) => string
  deserialize: (wabun: string) => string
  translate: (input: string) => string | void
}

type Arguments = [config: Config] | [dot: string, dash: string, space: string]
const isConfig = (arg: any): arg is Config =>
  arg instanceof Object
  && (
    Object.keys(arg).length === 0
    || Object.keys(arg).some((key: string) => Object.keys(defaults).includes(key))
  )
export const wabun = (...args: Arguments): Wabun => {
  const c = Object.assign(
    defaults,
    isConfig(args[0])
      ? args[0]
      : { characters: { dot: args[0], dash: args[1], space: args[2] } }
  )
  const { dot, dash, space } = c.characters

  return {
    serialize: generateSerializeMethod(dot, dash, space),
    deserialize: generateDeserializeMethod(dot, dash, space),
    translate: generateTranslateMethod(dot, dash, space),
  }
}
// -- /Generator

// -- standard methods
const { dot, dash, space } = defaults.characters
export const serialize = generateSerializeMethod(dot, dash, space)
export const deserialize = generateDeserializeMethod(dot, dash, space)
export const translate = generateTranslateMethod(dot, dash, space)
