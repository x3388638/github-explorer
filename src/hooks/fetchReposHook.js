import { useCallback } from 'react'
import { FETCH_REPO_START, FETCH_REPO_END, SET_ITEMS } from '../actions'
import useStore from './storeHook'
import { fetchRepos } from '../api/repoAPI'

const useFetchRepos = () => {
  const { dispatch } = useStore()

  const fetchr = useCallback(
    ({ type = SET_ITEMS, keyword, page = 1 }) => {
      const timestamp = Date.now()

      dispatch({
        type: FETCH_REPO_START,
        payload: {
          timestamp,
          clearList: type === SET_ITEMS
        }
      })

      fetchRepos({ keyword, page }).then((repoList) => {
        dispatch({
          type,
          payload: {
            list: repoList,
            page,
            timestamp
          }
        })

        dispatch({
          type: FETCH_REPO_END,
          payload: {
            timestamp
          }
        })
      })
    },
    [dispatch]
  )

  return fetchr
}

export default useFetchRepos
