import { generateTable } from './table'

export const generateDeserializeMethod = (
  dot: string,
  dash: string,
  space: string,
): ((wabun: string) => string) => {
  const deserializer = new Map(generateTable(dot, dash, space).map((e) => [e[1], e[0]]))

  return (wabun: string): string => {
    return wabun
      .split(space)
      .map((c) => deserializer.get(c))
      .join('')
  }
}
