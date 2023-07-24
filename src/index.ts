export const serialize = (kana) => {
  if (kana == 'オハヨウ') return '.-... -... -- ..- '
}
export const deserialize = (wabun) => {
  if (wabun == '.-... -... -- ..- ') return 'オハヨウ'
}
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
