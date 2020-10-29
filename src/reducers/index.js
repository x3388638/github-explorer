import repoReducer from './repoReducer'
import keywordReducer from './keywordReducer'

const combineReducers = (reducers) => {
  const objInitState = {}
  Object.keys(reducers).forEach((key) => {
    objInitState[key] = reducers[key](undefined, { type: '' })
  })

  return (state, action) => {
    if (state) {
      Object.keys(objInitState).forEach((key) => {
        if (state[key]) {
          objInitState[key] = state[key]
        }
      })
    }

    if (action) {
      Object.keys(reducers).forEach((key) => {
        const prevState = objInitState[key]
        objInitState[key] = reducers[key](prevState, action)
      })
    }

    return { ...objInitState }
  }
}

export const mainReducer = combineReducers({
  repo: repoReducer,
  keyword: keywordReducer
})
