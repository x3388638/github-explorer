export const initialKeywordState = null

const keywordReducer = (state = initialKeywordState, { type, payload }) => {
  switch (type) {
    case 'setKeyword': {
      return payload.keyword
    }

    default:
      return state
  }
}

export default keywordReducer
