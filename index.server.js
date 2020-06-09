import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/App'

const app = express()

app.use(express.static('dist'))

app.use('*', (req, res) => {
  res.status(200).send(`
  <html>
    <body>
      <div id="app">${ReactDOMServer.renderToString(<App />)}</div>
      <script src="bundle.js"></script>
    </body>
  </html>`)
})

app.listen('8080', () => {
  console.log('server start')
})
