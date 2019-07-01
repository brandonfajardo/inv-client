import styled from 'styled-components'
import { white, primary, colorProps } from '../styles/colours'
import Fab from '@material-ui/core/Fab'
import materialButton from '@material-ui/core/Button'
import materialIcon from '@material-ui/core/Icon'

export const Card = styled.div`
  box-shadow: ${props => props.noBoxShadow ? 'none' : '0 0 20px 6px rgba(233, 233, 233, 0.55)'};
  border-radius: 20px;
  background: ${white};
  margin-top: 170px;
  padding: 30px;

  &:focus {
    border: none !important;
    outline: none !important;
  }
`

export const CircularButton = styled(Fab)`
  background: ${primary} !important;
  width: 175px !important;
  margin-left: 20px !important;
`

export const Button = styled(materialButton)`
  color: ${primary} !important;
`

export const Icon = styled(materialIcon)`
  ${colorProps}
  cursor: pointer;
  font-size: ${props => props.size ? `${props.size} !important` : '20px !important'};
  ${props => props.absolute && `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  `}
`
