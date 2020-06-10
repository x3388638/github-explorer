import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import reactStringReplace from 'react-string-replace'

const Container = styled.div`
  background: #fff;
  padding: 16px;
  position: relative;
  box-shadow: 0px 2px 2px 0px #c7cdd2;
  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 7px 5px 0px #c7cdd2;
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
  margin-bottom: 8px;
  color: #003abc;
`

const Desc = styled.div`
  font-size: 14px;
  color: #464e56;
`

const Topics = styled.div``

const Detail = styled.div``

// FIXME: keyword
const parseKeyword = (str, keyword = 'react') =>
  reactStringReplace(str, new RegExp(`(${keyword})`, 'i'), (match, i) => (
    <Keyword key={i}>{match}</Keyword>
  ))

const RepoItem = ({
  keyword,
  name,
  desc,
  // topics = [],
  // star,
  // lang,
  // license,
  // lastUpdate,
  // issues,
  url
}) => {
  return (
    <Container>
      <Name>{parseKeyword(name, keyword)}</Name>
      <Desc>{parseKeyword(desc, keyword)}</Desc>
      <Topics>TODO: topics</Topics>
      <Detail>TODO: detail</Detail>
      <Anhor href={url} rel="noopener noreferrer" target="_blank" />
    </Container>
  )
}

RepoItem.propTypes = {
  // search keyword
  keyword: PropTypes.string.isRequired,
  // repo full name
  name: PropTypes.string.isRequired,
  // repo desc
  desc: PropTypes.string.isRequired,
  // repo topics
  topics: PropTypes.arrayOf(PropTypes.string),
  // repo star count
  star: PropTypes.number.isRequired,
  // repo language
  lang: PropTypes.string.isRequired,
  // repo license
  license: PropTypes.string.isRequired,
  // repo last update time
  lastUpdate: PropTypes.string.isRequired,
  // repo issue count
  issues: PropTypes.number.isRequired,
  // repo link
  url: PropTypes.string.isRequired
}

export default RepoItem
