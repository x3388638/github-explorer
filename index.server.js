import express from 'express'
import compression from 'compression'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import { Html } from './server/template'
import App from './src/App'
import { search as searchRepo } from './server/api/repo'
import { mainReducer } from './src/reducers'
import { SET_ITEMS, SET_KEYWORD } from './src/actions'

const PORT = process.env.PORT || '8080'
const app = express()

app.use(compression())
app.use(express.static('dist'))

app.get('/search/repos/:keyword/:page?', async (req, res) => {
  const { keyword, page = 1 } = req.params
  const list = await searchRepo(keyword, page)
  res.json(list)
})

app.get('/:keyword?', async (req, res) => {
  const { keyword = '' } = req.params
  let repoList = []
  let initialState = mainReducer()
  if (keyword) {
    repoList = await searchRepo(keyword)
  }

  initialState = mainReducer(initialState, {
    type: SET_ITEMS,
    payload: {
      list: repoList
    }
  })

  initialState = mainReducer(initialState, {
    type: SET_KEYWORD,
    payload: {
      text: keyword
    }
  })

  const sheet = new ServerStyleSheet()
  const body = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StaticRouter url={req.url} context={{}}>
        <App initialState={initialState} />
      </StaticRouter>
    )
  )

  res.send(
    Html({
      title: `Search repos${keyword ? `: ${keyword}` : ''}`,
      style: sheet.getStyleTags(),
      body,
      initialState
    })
  )
})

app.get('*', (req, res) => {
  res.status('404').send('Not found.')
})

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`)
})
