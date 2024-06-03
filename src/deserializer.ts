import { table, space } from './table'

export const deserializer = new Map(table.map(e => [e[1], e[0]]))

export const deserialize = (wabun: string): string => {
  return wabun.split(space).map(c => deserializer.get(c)).join('')
}

