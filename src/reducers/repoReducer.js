import {
  APPEND_ITEMS,
  SET_ITEMS,
  FETCH_REPO_START,
  FETCH_REPO_END
} from '../actions'

export const repoInitialState = {
  list: [],
  isFetching: false,
  fetchTimestamp: null
}

const repoReducer = (state = repoInitialState, { type, payload } = {}) => {
  switch (type) {
    case APPEND_ITEMS: {
      const { list, timestamp } = payload
      if (!state.fetchTimestamp || state.fetchTimestamp === timestamp) {
        return {
          ...state,
          list: [...state.list, ...list]
        }
      }

      return state
    }

    case SET_ITEMS: {
      const { list, timestamp } = payload
      if (!state.fetchTimestamp || state.fetchTimestamp === timestamp) {
        return {
          ...state,
          list
        }
      }

      return state
    }

    case FETCH_REPO_START: {
      return {
        ...state,
        isFetching: true,
        fetchTimestamp: payload
      }
    }

    case FETCH_REPO_END: {
      if (payload === state.fetchTimestamp) {
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
