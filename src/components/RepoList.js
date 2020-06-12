import React, { useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'
import useStore from '../hooks/storeHook'
import useFetchRepos from '../hooks/fetchReposHook'
import Item from './RepoItem'
import Spinner from './Spinner'
import { APPEND_ITEMS } from '../actions'

const SpinnerWrapper = styled.div`
  text-align: center;
`

const NoResultText = styled.div`
  text-align: center;
  font-weight: bold;
  word-break: break-word;
`

const RepoList = () => {
  const loadMoreRef = useRef(null)
  const {
    repo: { list, page, isFull, isFetching },
    keyword
  } = useStore()

  const fetchRepos = useFetchRepos()

  const fetchNextPage = useCallback(
    (entries) => {
      if (
        entries[0].intersectionRatio > 0 &&
        list.length &&
        !isFull &&
        !isFetching
      ) {
        fetchRepos({
          type: APPEND_ITEMS,
          keyword,
          page: page + 1
        })
      }
    },
    [list, isFull, page, keyword, fetchRepos, isFetching]
  )

  useEffect(() => {
    if (loadMoreRef.current) {
      const observer = new IntersectionObserver(fetchNextPage, {
        rootMargin: '100px'
      })

      observer.observe(loadMoreRef.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [loadMoreRef, fetchNextPage])

  return (
    <section>
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
            keyword={keyword}
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
      <span ref={loadMoreRef}></span>
      {!isFetching && keyword && !list.length && page > 0 && (
        <NoResultText>
          There are not any repositories matching &apos;{keyword}&apos;
        </NoResultText>
      )}
      {isFetching && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    </section>
  )
}

export default RepoList
