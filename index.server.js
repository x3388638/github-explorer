import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './src/App'

const app = express()

app.use(express.static('dist'))

app.get(['/', '/search/repos/:keyword?'], (req, res) => {
  const { keyword } = req.params

  res.send(`
<html>
  <head>
    <title>Search repositories: ${keyword}</title>
    <link rel="shortcut icon" href="data:;base64,iVBORw0KGgo=" />
  </head>
  <body>
    <div id="app">${ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    )}</div>
    <script src="/bundle.js"></script>
  </body>
</html>`)
})

app.get('*', (req, res) => {
  res.status('404').send('Not found.')
})

app.listen('8080', () => {
  console.log('server start')
})
