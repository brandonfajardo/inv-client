import styled from 'styled-components'
import { success } from '../../styles/colours'

export const BannerContainer = styled.div`
  width: 100% !important;
  position: fixed;
  top: 0;
  background: ${success};
  color: white;
  text-align: center;
  padding: 10px;
`

export const IconContainer = styled.div`
  float: right;
`