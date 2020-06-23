export const singleRepoNormalizer = (repo) => {
  const {
    full_name,
    description,
    topics = [],
    stargazers_count = 0,
    language,
    license,
    pushed_at,
    open_issues = 0,
    html_url
  } = repo || {}

  return {
    name: full_name,
    desc: description,
    topics,
    star: stargazers_count,
    lang: language,
    license: license && license.url ? license : {},
    lastUpdate: pushed_at,
    issue: open_issues,
    url: html_url
  }
}

export const repoListNormailzer = (res) =>
  (res && res.items ? res.items : []).map(singleRepoNormalizer)
