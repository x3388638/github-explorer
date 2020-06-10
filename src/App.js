import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import SearchInput from './components/SearchInput'
import RepoList from './components/RepoList'

const GlobalStyle = createGlobalStyle`
  :root {
    --link-blue: #003abc;
    --link-blue-light: #188fff;
    --text-default: #232a31;
    --text-gray: #464e56;
    --bg-gray-light: #f5f8fa;
    --highlight-yellow: #ffde00;
    --shadow-gray: #c7cdd2;
    --transition-default: 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  }

  html {
    line-height: unset;
  }

  body {
    background: var(--bg-gray-light);
    color: var(--text-default);
  }
`

const Container = styled.main`
  max-width: 700px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px 16px;
  overflow: auto;

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

const App = () => {
  return (
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
  )
}

export default App
