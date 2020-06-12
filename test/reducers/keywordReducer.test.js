import keywordReducer from '../../src/reducers/keywordReducer'
import { SET_KEYWORD } from '../../src/actions'

describe('reducers/keywordReducer', () => {
  it('Should return current state with bad params', () => {
    expect(keywordReducer()).toEqual('')
    expect(keywordReducer({ foo: 'bar' }, { type: 'some action' })).toEqual({
      foo: 'bar'
    })
  })

  it('Should update state correctly', () => {
    expect(
      keywordReducer(undefined, { type: SET_KEYWORD, payload: { text: 'foo' } })
    ).toEqual('foo')

    expect(
      keywordReducer('foo', { type: SET_KEYWORD, payload: { text: 'bar' } })
    ).toEqual('bar')
  })
})
