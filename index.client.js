import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './src/hooks/storeHook'
import App from './src/App'

ReactDOM.hydrate(
  <StoreProvider value={{}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('app')
)
