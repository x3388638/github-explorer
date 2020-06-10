import React from 'react'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: #f3f3f3;
`

const App = () => {
  return (
    <Container>
      <Normalize />1
    </Container>
  )
}

export default App
