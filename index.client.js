import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './src/App'

ReactDOM.hydrate(
  <BrowserRouter>
    <App initialState={window.__initialState__} />
  </BrowserRouter>,
  document.getElementById('app')
)
