import { generateTable } from './table'

export const generateSerializeMethod = (
  dot: string,
  dash: string,
  space: string,
): ((kana: string) => string) => {
  const serializer = new Map(generateTable(dot, dash, space))

  return (kana: string): string => {
    return (
      kana
        .split('')
        .map((c) => serializer.get(c))
        .join(space) + space
    )
  }
}
