import { table, space } from './table'

export const serializer = new Map(table)

export const serialize = (kana: string): string => {
  return kana.split('').map(c => serializer.get(c)).join(space) + space
}
