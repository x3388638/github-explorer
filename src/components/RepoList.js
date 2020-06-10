import React from 'react'
import styled from 'styled-components'
import useStore from '../hooks/storeHook'
import Item from './RepoItem'

const Contaienr = styled.section``

const RepoList = () => {
  const {
    repo: { list, isFetching }
  } = useStore()

  console.log(list)

  return isFetching ? (
    'fetching...'
  ) : (
    <Contaienr>
      {list.map((item, i) => {
        const {
          name,
          desc,
          topics,
          star,
          lang,
          license,
          lastUpdate,
          issue,
          url
        } = item

        return (
          <Item
            key={i}
            keyword={'react' /* FIXME */}
            name={name}
            desc={desc}
            topics={topics}
            star={star}
            lang={lang}
            license={license.name}
            lastUpdate={lastUpdate}
            issue={issue}
            url={url}
          />
        )
      })}
    </Contaienr>
  )
}

export default RepoList
