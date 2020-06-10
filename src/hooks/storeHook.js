import { useContext, useReducer, useCallback, createContext } from 'react'
import repoReducer, { repoInitialState } from '../reducers/repoReducer'
import keywordReducer, { keywordInitialState } from '../reducers/keywordReducer'

const storeContext = createContext({})

export const StoreProvider = storeContext.Provider

const useStore = () => {
  const store = useContext(storeContext)
  const [repoState, repoDispatcher] = useReducer(repoReducer, repoInitialState)
  const [keywordState, keywordDispatcher] = useReducer(
    keywordReducer,
    keywordInitialState
  )
  store.repo = repoState
  store.keyword = keywordState
  store.dispatch = useCallback(
    (action) => {
      const dispatchers = [repoDispatcher, keywordDispatcher]
      dispatchers.forEach((dispatcher) => {
        dispatcher(action)
      })
    },
    [repoDispatcher]
  )

  return store
}

export default useStore
