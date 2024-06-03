import { serialize } from "./serializer"
import { deserialize } from "./deserializer"

export { serialize, deserialize }

export const translate = (input) => {
  switch (input) {
    case 'オハヨウ':
      return '.-... -... -- ..- '
    case '.-... -... -- ..- ':
      return 'オハヨウ'
    default:
      break
  }
}
