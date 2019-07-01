import styled from 'styled-components'

export const flexDirectionColumn = `
  flex-direction: column;
`

export const flexRight = `
  justify-content: flex-end;
`

export const flexDirectionRow = `
  flex-direction: row;
`

export const flexCenter = `
  justify-content: center;
`

export const flexSpaceBetween = `
  justify-content: space-between;
`

export const Flex = styled.div`
  display: flex;
  ${props => props.justifyCenter && flexCenter};
  ${props => props.column && flexDirectionColumn};
  ${props => props.row && flexDirectionRow};
  ${props => props.right && flexRight};
  ${props => props.spaceBetween && flexSpaceBetween};
`