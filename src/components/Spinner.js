import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`

const Container = styled.span`
  span {
    display: inline-block;
    height: ${({ size }) => `${size}px`};
    width: ${({ size }) => `${size}px`};
    background: ${({ color }) => color};
    border-radius: 50%;
    animation: ${pulse} 1s infinite;

    &:not(:last-child) {
      margin-right: ${({ gap }) => `${gap}px`};
    }

    &.two {
      animation-delay: 0.33s;
    }

    &.three {
      animation-delay: 0.66s;
    }
  }
`

const Spinner = ({ size = 8, gap = 8, color = '#009688' }) => (
  <Container size={size} gap={gap} color={color}>
    <span className="one"></span>
    <span className="two"></span>
    <span className="three"></span>
  </Container>
)

Spinner.propTypes = {
  // Dot width/height in px
  size: PropTypes.number,
  // Gap size between dots in px
  gap: PropTypes.number,
  // Color of dots
  color: PropTypes.string
}

export default Spinner
