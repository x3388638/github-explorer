import fetch from 'isomorphic-fetch'
const PORT = process.env.API_PORT

export const fetchRepos = ({ keyword, page = 1 }) => {
  return fetch(
    `http://localhost:${PORT}/search/repos/${encodeURI(keyword)}/${page}`
  )
    .then((res) => {
      if (!res.ok) {
        throw res
      }

      return res.json()
    })
    .catch((e) => {
      console.error('[fetchRepos] error:', e)
      return []
    })
}
