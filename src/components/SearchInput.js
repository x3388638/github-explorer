import React, { useCallback } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import useStore from '../hooks/storeHook'
import { fetchRepos } from '../api/repoAPI'
import {
  FETCH_REPO_START,
  FETCH_REPO_END,
  SET_ITEMS,
  SET_KEYWORD
} from '../actions'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

const InputWrapper = styled.div`
  flex: 1;
  position: relative;
  padding: 0 16px;

  &::after {
    content: ' ';
    display: inline-block;
    position: absolute;
    left: 28px;
    width: calc(100% - 56px);
    height: 1px;
    background: #979ea8;
    bottom: 0;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 16px;
    border: 0;
    outline: 0;
    opacity: 0.4;
    transition: opacity var(--transition-default);

    &:focus {
      opacity: 1;
    }
  }
`

const SearchInput = () => {
  const { keyword, dispatch } = useStore()

  const debounceSearch = useCallback(
    debounce((keyword) => {
      const timestamp = Date.now()
      dispatch({ type: SET_KEYWORD, payload: { text: keyword } })

      dispatch({
        type: FETCH_REPO_START,
        payload: {
          timestamp,
          clearList: true
        }
      })

      fetchRepos({ keyword }).then((repoList) => {
        dispatch({
          type: SET_ITEMS,
          payload: {
            list: repoList,
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
    }, 460),
    [dispatch]
  )

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target
      if (value.length) {
        debounceSearch(value)
      }
    },
    [debounceSearch]
  )

  return (
    <Container>
      <span>Search repos</span>
      <InputWrapper>
        <input onChange={handleChange} defaultValue={keyword} />
      </InputWrapper>
    </Container>
  )
}

export default SearchInput
