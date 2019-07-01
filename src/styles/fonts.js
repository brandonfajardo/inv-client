import styled, { css } from 'styled-components'
import { colorProps } from './colours'

// Sizes
export const h1Text = '28px'
export const h2Text = '22px'
export const h4Text = '16px'
export const bodyText = '14px'

// Weights
export const regular = '400'
export const bold = '800'

export const fontProps = css`
  ${props => props.textCenter && `
    text-align: center;
  `};
  ${props => props.click && `
    cursor: pointer;
  `};
  font-weight: ${props => props.bold ? bold : regular};
  ${colorProps};
`

export const H1 = styled.h1`
  ${fontProps}
  font-size: ${h1Text};
`

export const H2 = styled.h2`
  ${fontProps}
  font-size: ${h2Text};
`

export const H4 = styled.h4`
  ${fontProps}
  font-size: ${h4Text};
`

export const P = styled.p`
  ${fontProps};
  font-size: ${bodyText};
`