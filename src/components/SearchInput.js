import React from 'react'
import styled from 'styled-components'

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

const SearchInput = () => (
  <Container>
    <span>Search repos</span>
    <InputWrapper>
      <input />
    </InputWrapper>
  </Container>
)

export default SearchInput
