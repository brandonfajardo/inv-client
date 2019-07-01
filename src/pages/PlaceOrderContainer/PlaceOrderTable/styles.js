import styled from 'styled-components'
import { lightGrey, secondary } from '../../../styles/colours'

export const TableContainer = styled.div`
  overflow-x: auto;
`

export const Container = styled.div`
  width: 100%;
`

export const SelectedDayContainer = styled.div`
  background: ${lightGrey};
  text-align: center;
  border-radius: 5px;
`

export const IconContainer = styled.div`
  height: 18px;
  width: 18px;
  border: 1.5px solid ${secondary};
  border-radius: 50%;
  position: relative;
  margin-left: 5px;
  margin-right: 5px;
`