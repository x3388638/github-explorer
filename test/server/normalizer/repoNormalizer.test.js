import {
  singleRepoNormalizer,
  RepoListNormailzer
} from '../../../server/normalizer/repoNormalizer'
import mockRes from '../../../server/mock/searchRepos.json'

describe('server/normalizer/repoNormalizer', () => {
  it('singleRepoNormalizer should work with bad param', () => {
    expect(singleRepoNormalizer()).toEqual({
      name: undefined,
      desc: undefined,
      topics: [],
      star: 0,
      lang: undefined,
      license: {},
      lastUpdate: undefined,
      issue: 0,
      url: undefined
    })
  })

  it('singleRepoNormalizer should work correctly', () => {
    expect(singleRepoNormalizer(mockRes.items[0])).toEqual({
      name: 'facebook/react',
      desc:
        'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
      topics: [
        'declarative',
        'frontend',
        'javascript',
        'library',
        'react',
        'ui'
      ],
      star: 150168,
      lang: 'JavaScript',
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      lastUpdate: '2020-06-09T15:45:08Z',
      issue: 623,
      url: 'https://github.com/facebook/react'
    })
  })

  it('RepoListNormailzer should work with bad param', () => {
    expect(RepoListNormailzer()).toEqual([])
  })

  it('RepoListNormailzer should work correctly', () => {
    expect(Array.isArray(RepoListNormailzer(mockRes))).toBe(true)
    expect(RepoListNormailzer(mockRes).length).toEqual(30)
  })
})
