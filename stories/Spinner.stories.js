import React from 'react'
import Spinner from '../src/components/Spinner'
import { withKnobs, number, color } from '@storybook/addon-knobs'

export default {
  component: Spinner,
  title: 'Spinner',
  decorators: [withKnobs]
}

export const Default = () => (
  <Spinner
    size={number('size', 8, { range: true, min: 1, max: 50, step: 1 })}
    gap={number('gap', 8, { range: true, min: 1, max: 50, step: 1 })}
    color={color('color', '#009688')}
  />
)
