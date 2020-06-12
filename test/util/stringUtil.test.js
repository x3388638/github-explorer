import { escapeRegExp } from '../../src/util/stringUtil'

describe('util/stringUtil', () => {
  it('escaptRegExp should work with bad param', () => {
    expect(escapeRegExp()).toEqual('')
    expect(escapeRegExp(null)).toEqual('')
    expect(escapeRegExp(2)).toEqual('')
  })

  it('escaptRegExp should work correctly', () => {
    expect(escapeRegExp('123?+456().')).toEqual('123\\?\\+456\\(\\)\\.')
  })
})
