import React from 'react'
import { addDecorator } from '@storybook/react'
import GlobalStyle from '../src/components/GlobalStyle'

addDecorator((s) => (
  <React.Fragment>
    <GlobalStyle />
    {s()}
  </React.Fragment>
))
