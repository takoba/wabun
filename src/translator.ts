import { generateSerializeMethod } from "./serializer"
import { generateDeserializeMethod } from "./deserializer"

const isWabunText = (input: string): boolean => input.match(/^[.-\s]+$/) !== null
const isKanaText = (input: string): boolean => input.match(/^[\u30A0-\u30FF]+$/) !== null

export const generateTranslateMethod = (
  dot: string,
  dash: string,
  space: string,
): (input: string) => string | void => {
  const serialize = generateSerializeMethod(dot, dash, space)
  const deserialize = generateDeserializeMethod(dot, dash, space)

  return (input: string): string | void => {
    if (isKanaText(input)) return serialize(input)
    if (isWabunText(input)) return deserialize(input)
  }
}
