import { serialize } from "./serializer"
import { deserialize } from "./deserializer"

const isWabunText = (input: string): boolean => input.match(/^[.-\s]+$/) !== null
const isKanaText = (input: string): boolean => input.match(/^[\u30A0-\u30FF]+$/) !== null

export const translate = (input: string): string | void => {
  if (isKanaText(input)) return serialize(input)
  if (isWabunText(input)) return deserialize(input)
}
