import fetch from 'isomorphic-fetch'
import { repoListNormailzer } from '../normalizer/repoNormalizer'

let GITHUB_TOKEN
try {
  GITHUB_TOKEN = require('../../.GITHUB_ACCESS_TOKEN')
} catch {
  console.warn(
    'Export your GitHub access token in .GITHUB_ACCESS_TOKEN.js to be able to call GitHub API more times.'
  )
}

export const search = (keyword, page = 1) =>
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
