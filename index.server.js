import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import { Html } from './src/template'
import App from './src/App'

const app = express()

app.use(express.static('dist'))

app.get('/:keyword?', (req, res) => {
  const { keyword } = req.params
  const sheet = new ServerStyleSheet()
  const body = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StaticRouter url={req.url} context={{}}>
        <App />
      </StaticRouter>
    )
  )

  res.send(
    Html({
      title: `Search repos${keyword ? `: ${keyword}` : ''}`,
      style: sheet.getStyleTags(),
      body
    })
  )
})

app.get('*', (req, res) => {
  res.status('404').send('Not found.')
})

app.listen('8080', () => {
  console.log('server start')
})
