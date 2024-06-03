import { generateTable } from './table'

export const generateSerializeMethod = (
  dot: string,
  dash: string,
  space: string,
): (kana: string) => string => {
  const serializer = new Map(generateTable(dot, dash))

  return (kana: string): string => {
    return kana.split('').map(c => serializer.get(c)).join(space) + space
  }
}

// TODO: will remove (after optimize index.ts)
export const serialize = generateSerializeMethod('.', '-', ' ')
