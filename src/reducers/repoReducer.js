import {
  APPEND_ITEMS,
  SET_ITEMS,
  FETCH_REPO_START,
  FETCH_REPO_END
} from '../actions'

export const repoInitialState = {
  list: [],
  page: -1, // start from 1, -1 for not searched
  isFull: false, // all pages have been fetched
  isFetching: false,
  fetchTimestamp: null
}

const repoReducer = (state = repoInitialState, { type, payload = {} } = {}) => {
  switch (type) {
    case APPEND_ITEMS: {
      const { list, page, timestamp } = payload
      if (!state.fetchTimestamp || state.fetchTimestamp === timestamp) {
        return {
          ...state,
          list: [...state.list, ...list],
          page,
          isFull: !list.length
        }
      }

      return state
    }

    case SET_ITEMS: {
      const { list, timestamp } = payload
      if (!state.fetchTimestamp || state.fetchTimestamp === timestamp) {
        return {
          ...state,
          list,
          page: 1
        }
      }

      return state
    }

    case FETCH_REPO_START: {
      const { timestamp, clearList } = payload

      return {
        ...state,
        ...(clearList ? { list: [], page: 1, isFull: false } : {}),
        isFetching: true,
        fetchTimestamp: timestamp
      }
    }

    case FETCH_REPO_END: {
      const { timestamp } = payload
      if (timestamp === state.fetchTimestamp) {
        return {
          ...state,
          isFetching: false,
          fetchTimestamp: null
        }
      }

      return state
    }

    default:
      return state
  }
}

export default repoReducer
