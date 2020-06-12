import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import reactStringReplace from 'react-string-replace'
import IntlRelativeFormat from 'intl-relativeformat'
import { escapeRegExp } from '../util/stringUtil'

const rf = new IntlRelativeFormat('en', { style: 'numeric' })

const Container = styled.div`
  background: #fff;
  padding: 16px;
  position: relative;
  box-shadow: 0px 2px 2px 0px var(--shadow-gray);
  transition: all var(--transition-default);
  cursor: pointer;
  margin-bottom: 16px;
  word-break: break-word;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 7px 5px 0px var(--shadow-gray);
  }
`

const Keyword = styled.span`
  font-weight: bold;
`

const Anhor = styled.a`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Name = styled.div`
  font-size: 18px;
  margin-bottom: 4px;
  color: var(--link-blue);
`

const Desc = styled.div`
  font-size: 14px;
  color: var(--text-gray);
  margin-bottom: 4px;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const Topics = styled.div`
  margin-bottom: 4px;
  position: relative;
  pointer-events: none;

  a {
    background: rgba(93, 94, 255, 0.1);
    padding: 0 8px;
    font-size: 14px;
    color: var(--link-blue-light);
    text-decoration: none;
    pointer-events: all;
    transition: all var(--transition-default);
    display: inline-block;

    &:not(:last-child) {
      margin-right: 8px;
    }

    &:hover {
      background: rgba(93, 94, 255, 0.2);
    }
  }
`

const Detail = styled.div`
  font-size: 12px;
  color: var(--text-gray);

  span {
    white-space: nowrap;
    display: inline-block;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

const parseKeyword = (str, keyword = '') => {
  const keywords = escapeRegExp(keyword)
    .split(' ')
    .filter((key) => /^\w+$/.test(key))

  return reactStringReplace(
    str,
    new RegExp(`(${keywords.join('|')})`, 'i'),
    (match, i) => <Keyword key={i}>{match}</Keyword>
  )
}

const RepoItem = ({
  keyword,
  name,
  desc,
  topics = [],
  star,
  lang,
  license,
  lastUpdate,
  issue,
  url
}) => {
  if (!name || !url) {
    return null
  }

  return (
    <Container data-test="RepoItem">
      <Anhor href={url} rel="noopener noreferrer" target="_blank" />
      <Name>{parseKeyword(name, keyword)}</Name>
      {desc && <Desc>{parseKeyword(desc, keyword)}</Desc>}
      <Topics>
        {topics.map((topic, i) => (
          <a
            key={i}
            href={`https://github.com/topics/${topic}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {topic}
          </a>
        ))}
      </Topics>
      <Detail>
        {star > 0 && (
          <span>
            ★ {star > 999 ? `${(star / 1000).toPrecision(3)}k` : star}
          </span>
        )}
        {lang && <span>{lang}</span>}
        {license && <span>{license}</span>}
        <span>Updated {rf.format(new Date(lastUpdate), 'second')}</span>
        {issue > 0 && (
          <span>
            {issue} issue{issue > 1 ? 's' : ''}
          </span>
        )}
      </Detail>
    </Container>
  )
}

RepoItem.propTypes = {
  // search keyword
  keyword: PropTypes.string.isRequired,
  // repo full name
  name: PropTypes.string.isRequired,
  // repo desc
  desc: PropTypes.string,
  // repo topics
  topics: PropTypes.arrayOf(PropTypes.string),
  // repo star count
  star: PropTypes.number.isRequired,
  // repo language
  lang: PropTypes.string,
  // repo license
  license: PropTypes.string,
  // repo last update time
  lastUpdate: PropTypes.string.isRequired,
  // repo issue count
  issue: PropTypes.number.isRequired,
  // repo link
  url: PropTypes.string.isRequired
}

export default RepoItem
