import repoReducer from '../../src/reducers/repoReducer'
import {
  FETCH_REPO_START,
  FETCH_REPO_END,
  APPEND_ITEMS,
  SET_ITEMS
} from '../../src/actions'

describe('reducers/repoReducer', () => {
  const initialState = repoReducer()

  it('Should return current state with bad param', () => {
    expect(repoReducer()).toEqual({
      list: [],
      page: -1,
      isFull: false,
      isFetching: false,
      fetchTimestamp: null
    })
  })

  it(`Should return correct state while ${FETCH_REPO_START} for setting list`, () => {
    const timestamp = Date.now()
    expect(
      repoReducer(
        {
          list: ['foo', 'bar'],
          page: 2,
          isFull: true,
          isFetching: false,
          fetchTimestamp: null
        },
        {
          type: FETCH_REPO_START,
          payload: {
            timestamp,
            clearList: true
          }
        }
      )
    ).toEqual({
      list: [],
      page: 1,
      isFull: false,
      isFetching: true,
      fetchTimestamp: timestamp
    })
  })

  it(`Should return correct state while ${FETCH_REPO_START} for appending list`, () => {
    const timestamp = Date.now()
    expect(
      repoReducer(
        {
          list: ['foo', 'bar'],
          page: 2,
          isFull: false,
          isFetching: false,
          fetchTimestamp: null
        },
        {
          type: FETCH_REPO_START,
          payload: {
            timestamp,
            clearList: false
          }
        }
      )
    ).toEqual({
      list: ['foo', 'bar'],
      page: 2,
      isFull: false,
      isFetching: true,
      fetchTimestamp: timestamp
    })
  })

  it(`Should return correct state while ${SET_ITEMS}`, () => {
    const timestamp = Date.now()
    expect(
      repoReducer(initialState, {
        type: SET_ITEMS,
        payload: {
          list: ['foo', 'bar'],
          timestamp
        }
      })
    ).toEqual({
      ...initialState,
      list: ['foo', 'bar'],
      page: 1
    })
  })

  it(`Should not update state for race condition while ${SET_ITEMS}`, () => {
    const timestamp = Date.now()
    const fetchingState = repoReducer(initialState, {
      type: FETCH_REPO_START,
      payload: {
        timestamp,
        clearList: true
      }
    })

    const anotherFetchingState = repoReducer(fetchingState, {
      type: FETCH_REPO_START,
      payload: {
        timestamp: timestamp + 1000,
        clearList: true
      }
    })

    expect(
      repoReducer(anotherFetchingState, {
        type: SET_ITEMS,
        payload: {
          list: ['foo', 'bar'],
          timestamp
        }
      })
    ).toEqual(anotherFetchingState)
  })

  it(`Should return correct state while ${APPEND_ITEMS}`, () => {
    const timestamp = Date.now()

    expect(
      repoReducer(initialState, {
        type: APPEND_ITEMS,
        payload: {
          list: ['yyy', 'ooo'],
          page: 3,
          timestamp
        }
      })
    ).toEqual({
      ...initialState,
      list: [...initialState.list, 'yyy', 'ooo'],
      page: 3,
      isFull: false
    })
  })

  it(`Should not update state for race condition while ${APPEND_ITEMS}`, () => {
    const timestamp = Date.now()
    const fetchingState = repoReducer(
      {
        list: ['foo', 'bar'],
        page: 1,
        isFull: false,
        isFetching: false,
        fetchTimestamp: null
      },
      {
        type: FETCH_REPO_START,
        payload: {
          timestamp,
          clearList: false
        }
      }
    )

    const anotherFetchingState = repoReducer(fetchingState, {
      type: FETCH_REPO_START,
      payload: {
        timestamp: timestamp + 1000,
        clearList: false
      }
    })

    expect(
      repoReducer(anotherFetchingState, {
        type: APPEND_ITEMS,
        payload: {
          list: ['yyy', 'ooo'],
          page: 3,
          timestamp
        }
      })
    ).toEqual(anotherFetchingState)
  })

  it(`Should return corrent state while ${FETCH_REPO_END}`, () => {
    const fetchTimestamp = Date.now()
    const state = {
      list: ['foo', 'bar'],
      page: 1,
      isFull: false,
      isFetching: true,
      fetchTimestamp
    }

    expect(
      repoReducer(state, {
        type: FETCH_REPO_END,
        payload: {
          timestamp: fetchTimestamp
        }
      })
    ).toEqual({
      ...state,
      ...{
        isFetching: false,
        fetchTimestamp: null
      }
    })

    const raceConditionState = {
      ...state,
      ...{ fetchTimestamp: fetchTimestamp + 1000 }
    }
    expect(
      repoReducer(raceConditionState, {
        type: FETCH_REPO_END,
        payload: {
          timestamp: fetchTimestamp
        }
      })
    ).toEqual(raceConditionState)
  })
})
