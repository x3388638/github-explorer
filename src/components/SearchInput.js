import React, { useEffect, useCallback } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import useStore from '../hooks/storeHook'
import useFetchRepos from '../hooks/fetchReposHook'
import { useLocation, useHistory } from 'react-router-dom'
import { SET_ITEMS, SET_KEYWORD } from '../actions'

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
  const location = useLocation()
  const history = useHistory()
  const fetchRepos = useFetchRepos()

  // set initial keyword from url path
  useEffect(() => {
    const initialKeyword = location.pathname.replace('/', '')

    if (!keyword && initialKeyword) {
      dispatch({
        type: SET_KEYWORD,
        payload: {
          text: initialKeyword
        }
      })
    }
  }, [location, keyword])

  // fetch repos on keyword changed
  useEffect(() => {
    if (keyword.length) {
      fetchRepos({
        type: SET_ITEMS,
        keyword
      })
    }
  }, [keyword, fetchRepos])

  const debounceSetKeyword = useCallback(
    debounce((keyword) => {
      dispatch({ type: SET_KEYWORD, payload: { text: keyword } })
      history.push(`/${keyword}`)
      document.title = `Search repos: ${keyword}`
    }, 460),
    [dispatch, history]
  )

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target
      if (value.length) {
        debounceSetKeyword(value)
      }
    },
    [debounceSetKeyword]
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
