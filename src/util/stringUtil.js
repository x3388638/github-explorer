export const escapeRegExp = (string = '') => {
  return typeof string === 'string'
    ? string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    : ''
}
