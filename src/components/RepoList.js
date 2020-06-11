import React, { useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'
import useStore from '../hooks/storeHook'
import Item from './RepoItem'
import Spinner from './Spinner'
import { fetchRepos } from '../api/repoAPI'
import { FETCH_REPO_START, FETCH_REPO_END, APPEND_ITEMS } from '../actions'

const SpinnerWrapper = styled.div`
  text-align: center;
`

const RepoList = () => {
  const loadMoreRef = useRef(null)
  const {
    repo: { list, page, isFull, isFetching },
    keyword,
    dispatch
  } = useStore()

  const fetchNextPage = useCallback(
    (entries) => {
      if (entries[0].intersectionRatio > 0 && list.length && !isFull) {
        const timestamp = Date.now()
        const nextPage = page + 1

        dispatch({
          type: FETCH_REPO_START,
          payload: {
            timestamp
          }
        })

        fetchRepos({ keyword, page: nextPage }).then((repoList) => {
          dispatch({
            type: APPEND_ITEMS,
            payload: {
              list: repoList,
              page: nextPage,
              timestamp
            }
          })

          dispatch({
            type: FETCH_REPO_END,
            payload: {
              timestamp
            }
          })
        })
      }
    },
    [list, isFull, dispatch]
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
  }, [loadMoreRef.current, fetchNextPage])

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
      {isFetching && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    </section>
  )
}

export default RepoList
