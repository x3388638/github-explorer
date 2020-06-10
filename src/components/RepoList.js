import React from 'react'
import styled from 'styled-components'
import Item from './RepoItem'

const items = [...Array(10)].map(() => ({
  id: 10270250,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==',
  name: 'react',
  full_name: 'facebook/react',
  private: false,
  owner: {
    login: 'facebook',
    id: 69631,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx',
    avatar_url: 'https://avatars3.githubusercontent.com/u/69631?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/facebook',
    html_url: 'https://github.com/facebook',
    followers_url: 'https://api.github.com/users/facebook/followers',
    following_url:
      'https://api.github.com/users/facebook/following{/other_user}',
    gists_url: 'https://api.github.com/users/facebook/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/facebook/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/facebook/subscriptions',
    organizations_url: 'https://api.github.com/users/facebook/orgs',
    repos_url: 'https://api.github.com/users/facebook/repos',
    events_url: 'https://api.github.com/users/facebook/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/facebook/received_events',
    type: 'Organization',
    site_admin: false
  },
  html_url: 'https://github.com/facebook/react',
  description:
    'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
  fork: false,
  url: 'https://api.github.com/repos/facebook/react',
  forks_url: 'https://api.github.com/repos/facebook/react/forks',
  keys_url: 'https://api.github.com/repos/facebook/react/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/facebook/react/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/facebook/react/teams',
  hooks_url: 'https://api.github.com/repos/facebook/react/hooks',
  issue_events_url:
    'https://api.github.com/repos/facebook/react/issues/events{/number}',
  events_url: 'https://api.github.com/repos/facebook/react/events',
  assignees_url: 'https://api.github.com/repos/facebook/react/assignees{/user}',
  branches_url: 'https://api.github.com/repos/facebook/react/branches{/branch}',
  tags_url: 'https://api.github.com/repos/facebook/react/tags',
  blobs_url: 'https://api.github.com/repos/facebook/react/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/facebook/react/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/facebook/react/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/facebook/react/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/facebook/react/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/facebook/react/languages',
  stargazers_url: 'https://api.github.com/repos/facebook/react/stargazers',
  contributors_url: 'https://api.github.com/repos/facebook/react/contributors',
  subscribers_url: 'https://api.github.com/repos/facebook/react/subscribers',
  subscription_url: 'https://api.github.com/repos/facebook/react/subscription',
  commits_url: 'https://api.github.com/repos/facebook/react/commits{/sha}',
  git_commits_url:
    'https://api.github.com/repos/facebook/react/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/facebook/react/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/facebook/react/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/facebook/react/contents/{+path}',
  compare_url:
    'https://api.github.com/repos/facebook/react/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/facebook/react/merges',
  archive_url:
    'https://api.github.com/repos/facebook/react/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/facebook/react/downloads',
  issues_url: 'https://api.github.com/repos/facebook/react/issues{/number}',
  pulls_url: 'https://api.github.com/repos/facebook/react/pulls{/number}',
  milestones_url:
    'https://api.github.com/repos/facebook/react/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/facebook/react/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/facebook/react/labels{/name}',
  releases_url: 'https://api.github.com/repos/facebook/react/releases{/id}',
  deployments_url: 'https://api.github.com/repos/facebook/react/deployments',
  created_at: '2013-05-24T16:15:54Z',
  updated_at: '2020-06-09T15:12:25Z',
  pushed_at: '2020-06-09T06:11:54Z',
  git_url: 'git://github.com/facebook/react.git',
  ssh_url: 'git@github.com:facebook/react.git',
  clone_url: 'https://github.com/facebook/react.git',
  svn_url: 'https://github.com/facebook/react',
  homepage: 'https://reactjs.org',
  size: 154902,
  stargazers_count: 150167,
  watchers_count: 150167,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: true,
  forks_count: 29241,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 622,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 29241,
  open_issues: 622,
  watchers: 150167,
  default_branch: 'master',
  score: 1
}))

const Contaienr = styled.section``

const RepoList = () => {
  return (
    <Contaienr>
      {items.map((item, i) => {
        const {
          full_name,
          description,
          topics = [
            'react',
            'facebook',
            'yoooo',
            'react',
            'facebook',
            'yoooo',
            'react',
            'facebook',
            'yoooo'
          ],
          stargazers_count,
          language,
          license = {},
          updated_at,
          open_issues,
          html_url
        } = item
        return (
          <Item
            key={i}
            keyword={'react' /* FIXME */}
            name={full_name}
            desc={description}
            topics={topics}
            star={stargazers_count}
            lang={language}
            license={license.name}
            lastUpdate={updated_at}
            issues={open_issues}
            url={html_url}
          />
        )
      })}
    </Contaienr>
  )
}

export default RepoList
