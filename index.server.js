import express from 'express'
import fetch from 'isomorphic-fetch'
import compression from 'compression'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import { Html } from './server/template'
import App from './src/App'
import { repoListNormailzer } from './server/normalizer/repoNormalizer'
let GITHUB_TOKEN
try {
  GITHUB_TOKEN = require('./.GITHUB_ACCESS_TOKEN')
} catch {
  console.warn(
    'Export your GitHub access token in .GITHUB_ACCESS_TOKEN.js to be able to call GitHub API more times.'
  )
}

const PORT = process.env.PORT || '8080'
const app = express()

app.use(compression())
app.use(express.static('dist'))

app.get('/search/repos/:keyword/:page?', (req, res) => {
  const { keyword, page = 1 } = req.params
  fetch(
    `https://api.github.com/search/repositories?q=${keyword}&page=${page}`,
    {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
        ...(GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {})
      }
    }
  )
    .then((res) => {
      if (!res.ok) {
        throw res
      }

      return res.json()
    })
    .catch((e) => {
      console.error('[GitHub API] error', e)
      return {}
    })
    .then(repoListNormailzer)
    .then((list) => {
      res.json(list)
    })
})

app.get('/:keyword?', (req, res) => {
  const { keyword = '' } = req.params
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
