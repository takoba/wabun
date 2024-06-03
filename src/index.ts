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
export const wabun = (config: Config): Wabun => {
  const c = Object.assign(defaults, config)
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
