export const generateTable = (
  dot: string,
  dash: string,
  space: string,
): [string, string][] => {
  const dakuten = `${dot}${dot}`
  const handakuten = `${dot}${dot}${dash}${dash}${dot}`

  return [
    ['イ', `${dot}${dash}`],
    ['ロ', `${dot}${dash}${dot}${dash}`],
    ['ハ', `${dash}${dot}${dot}${dot}`],
    ['ニ', `${dash}${dot}${dash}${dot}`],
    ['ホ', `${dash}${dot}${dot}`],
    ['ヘ', `${dot}`],
    ['ト', `${dot}${dot}${dash}${dot}${dot}`],
    ['チ', `${dot}${dot}${dash}${dot}`],
    ['リ', `${dash}${dash}${dot}`],
    ['ヌ', `${dot}${dot}${dot}${dot}`],
    ['ル', `${dash}${dot}${dash}${dash}${dot}`],
    ['ヲ', `${dot}${dash}${dash}${dash}`],
    ['ワ', `${dash}${dot}${dash}`],
    ['カ', `${dot}${dash}${dot}${dot}`],
    ['ヨ', `${dash}${dash}`],
    ['タ', `${dash}${dot}`],
    ['レ', `${dash}${dash}${dash}`],
    ['ソ', `${dash}${dash}${dash}${dot}`],
    ['ツ', `${dot}${dash}${dash}${dot}`],
    ['ネ', `${dash}${dash}${dot}${dash}`],
    ['ナ', `${dot}${dash}${dot}`],
    ['ラ', `${dot}${dot}${dot}`],
    ['ム', `${dash}`],
    ['ウ', `${dot}${dot}${dash}`],
    ['ヰ', `${dot}${dash}${dot}${dot}${dash}`],
    ['ノ', `${dot}${dot}${dash}${dash}`],
    ['オ', `${dot}${dash}${dot}${dot}${dot}`],
    ['ク', `${dot}${dot}${dot}${dash}`],
    ['ヤ', `${dot}${dash}${dash}`],
    ['マ', `${dash}${dot}${dot}${dash}`],
    ['ケ', `${dash}${dot}${dash}${dash}`],
    ['フ', `${dash}${dash}${dot}${dot}`],
    ['コ', `${dash}${dash}${dash}${dash}`],
    ['エ', `${dash}${dot}${dash}${dash}${dash}`],
    ['テ', `${dot}${dash}${dot}${dash}${dash}`],
    ['ア', `${dash}${dash}${dot}${dash}${dash}`],
    ['サ', `${dash}${dot}${dash}${dot}${dash}`],
    ['キ', `${dash}${dot}${dash}${dot}${dot}`],
    ['ユ', `${dash}${dot}${dot}${dash}${dash}`],
    ['メ', `${dash}${dot}${dot}${dot}${dash}`],
    ['ミ', `${dot}${dot}${dash}${dot}${dash}`],
    ['シ', `${dash}${dash}${dot}${dash}${dot}`],
    ['ヱ', `${dot}${dash}${dash}${dot}${dot}`],
    ['ヒ', `${dash}${dash}${dot}${dot}${dash}`],
    ['モ', `${dash}${dot}${dot}${dash}${dot}`],
    ['セ', `${dot}${dash}${dash}${dash}${dot}`],
    ['ス', `${dash}${dash}${dash}${dot}${dash}`],
    ['ン', `${dot}${dash}${dot}${dash}${dot}`],
    ['゛', `${dakuten}`],
    ['゜', `${handakuten}`],

    ['ヴ', `${dot}${dot}${dash}${space}${dakuten}`],
    ['ガ', `${dot}${dash}${dot}${dot}${space}${dakuten}`],
    ['ギ', `${dash}${dot}${dash}${dot}${dot}${space}${dakuten}`],
    ['グ', `${dot}${dot}${dot}${dash}${space}${dakuten}`],
    ['ゲ', `${dash}${dot}${dash}${dash}${space}${dakuten}`],
    ['ゴ', `${dash}${dash}${dash}${dash}${space}${dakuten}`],
    ['ザ', `${dash}${dot}${dash}${dot}${dash}${space}${dakuten}`],
    ['ジ', `${dash}${dash}${dot}${dash}${dot}${space}${dakuten}`],
    ['ズ', `${dash}${dash}${dash}${dot}${dash}${space}${dakuten}`],
    ['ゼ', `${dot}${dash}${dash}${dash}${dot}${space}${dakuten}`],
    ['ゾ', `${dash}${dash}${dash}${dot}${space}${dakuten}`],
    ['ダ', `${dash}${dot}${space}${dakuten}`],
    ['ヂ', `${dot}${dot}${dash}${dot}${space}${dakuten}`],
    ['ヅ', `${dot}${dash}${dash}${dot}${space}${dakuten}`],
    ['デ', `${dot}${dash}${dot}${dash}${dash}${space}${dakuten}`],
    ['ド', `${dot}${dot}${dash}${dot}${dot}${space}${dakuten}`],
    ['バ', `${dash}${dot}${dot}${dot}${space}${dakuten}`],
    ['ビ', `${dash}${dash}${dot}${dot}${dash}${space}${dakuten}`],
    ['ブ', `${dash}${dash}${dot}${dot}${space}${dakuten}`],
    ['ベ', `${dot}${space}${dakuten}`],
    ['ボ', `${dash}${dot}${dot}${space}${dakuten}`],

    ['パ', `${dash}${dot}${dot}${dot}${space}${handakuten}`],
    ['ピ', `${dash}${dash}${dot}${dot}${dash}${space}${handakuten}`],
    ['プ', `${dash}${dash}${dot}${dot}${space}${handakuten}`],
    ['ペ', `${dot}${space}${handakuten}`],
    ['ポ', `${dash}${dot}${dot}${space}${handakuten}`],
  ]
}
