import fetch from 'isomorphic-fetch'

export const fetchRepos = ({ keyword = '', page = 1 }) => {
  return fetch(`/search/repos/${encodeURI(keyword)}/${page}`)
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
