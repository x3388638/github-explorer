import { SET_KEYWORD } from '../actions'

export const keywordInitialState = ''

const keywordReducer = (
  state = keywordInitialState,
  { type, payload } = {}
) => {
  switch (type) {
    case SET_KEYWORD: {
      return payload.text
    }

    default:
      return state
  }
}

export default keywordReducer
