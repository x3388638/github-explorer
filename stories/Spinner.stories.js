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
    size={number('Dot size', 8, { range: true, min: 1, max: 50, step: 1 })}
    gap={number('Dot gap', 8, { range: true, min: 1, max: 50, step: 1 })}
    color={color('Dot color', '#009688')}
  />
)
