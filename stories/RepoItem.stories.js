import React from 'react'
import RepoItem from '../src/components/RepoItem'
import { withKnobs, text, array, number, date } from '@storybook/addon-knobs'

export default {
  componemt: RepoItem,
  title: 'RepoItem',
  decorators: [
    withKnobs,
    (s) => <div style={{ 'max-width': '700px' }}>{s()}</div>
  ]
}

export const Default = () => {
  const props = {
    keyword: text('keyword', 'react'),
    name: text('name', 'facebook/react'),
    desc: text(
      'desc',
      'A declarative, efficient, and flexible JavaScript library for building user interfaces.'
    ),
    topics: array('topics', ['frontend', 'ui']),
    star: number('star', 150000, {
      range: true,
      min: 0,
      max: 1000000,
      step: 1
    }),
    lang: text('lang', 'JavaScript'),
    license: text('license', 'MIT License'),
    lastUpdate: new Date(
      date('lastUpdate', new Date('2020-06-09T15:12:25Z'))
    ).toISOString(),
    issue: number('issue', 627, {
      range: true,
      min: 0,
      max: 10000,
      step: 1
    }),
    url: text('url', 'https://github.com/facebook/react')
  }

  return <RepoItem {...props} />
}
