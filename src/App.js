import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'
import { StoreProvider } from './hooks/storeHook'
import GlobalStyle from './components/GlobalStyle'
import SearchInput from './components/SearchInput'
import RepoList from './components/RepoList'
import { mainReducer } from './reducers'

const defaultState = mainReducer()

const Container = styled.main`
  max-width: 700px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px 16px;
  overflow: auto;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    padding: 0 8px 8px;
  }
`

const Header = styled.header`
  position: relative;

  h1 {
    position: relative;
  }
`

const Highlight = styled.span`
  display: inline-block;
  position: absolute;
  width: 150px;
  height: 20px;
  background: var(--highlight-yellow);
  bottom: 0;
  left: -8px;
`

const App = ({ initialState = defaultState }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <StoreProvider value={{ ...state, dispatch }}>
      <Container>
        <Normalize />
        <GlobalStyle />
        <Header>
          <Highlight />
          <h1>GitHub Explorer</h1>
        </Header>
        <SearchInput />
        <RepoList />
      </Container>
    </StoreProvider>
  )
}

App.propTypes = {
  initialState: PropTypes.shape({})
}

export default App
