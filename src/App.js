import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import SearchInput from './components/SearchInput'
import RepoList from './components/RepoList'

const GlobalStyle = createGlobalStyle`
  body {
    background: #f5f8fa;
    color: #232a31;
  }
`

const Container = styled.main`
  max-width: 700px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px 16px;
  overflow: auto;
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
  background: #ffde00;
  bottom: -3px;
  left: -7px;
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
