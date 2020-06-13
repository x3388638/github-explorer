export const to3DigitsThousand = (number = 0) => {
  return typeof number === 'number'
    ? number > 999
      ? `${(number / 1000).toPrecision(3)}k`.replace(/(\.?0+)k$/, 'k')
      : number + ''
    : '0'
}
