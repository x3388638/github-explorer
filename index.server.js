import express from 'express'
// import fetch from 'isomorphic-fetch'
import cors from 'cors'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import { Html } from './src/template'
import App from './src/App'
import mockData from './server/mock/searchRepos.json'
import { RepoListNormailzer } from './server/normalizer/repoNormalizer'

const PORT = process.env.PORT || '8080'
const app = express()

app.use(express.static('dist'))

app.get('/search/repos/:keyword', cors(), (req, res) => {
  setTimeout(() => {
    res.json(RepoListNormailzer(mockData))
  }, 2000)
})

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

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`)
})
