import React, { useCallback } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import useStore from '../hooks/storeHook'
import useFetchRepos from '../hooks/fetchReposHook'
import { useHistory } from 'react-router-dom'
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

    @media (prefers-color-scheme: dark) {
      background: #464e56;
    }
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 16px;
    border: 0;
    outline: 0;
    opacity: 0.4;
    transition: opacity var(--transition-default);
    color: var(--text-default);
    background: var(--bg-white);

    &:focus {
      opacity: 1;
    }
  }
`

const SearchInput = () => {
  const { keyword, dispatch } = useStore()
  const history = useHistory()
  const fetchRepos = useFetchRepos()

  const debounceSetKeyword = debounce((keyword) => {
    dispatch({ type: SET_KEYWORD, payload: { text: keyword } })
    history.push(`/${keyword}`)
    document.title = `Search repos: ${keyword}`
    fetchRepos({
      type: SET_ITEMS,
      keyword
    })
  }, 460)

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value.trim()
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
        <input
          data-test="searchInput"
          onChange={handleChange}
          defaultValue={keyword}
          aria-label="Search for repos"
        />
      </InputWrapper>
    </Container>
  )
}

export default SearchInput
