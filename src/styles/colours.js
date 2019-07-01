import { css } from 'styled-components'

export const white = '#ffffff'
export const primary = '#3366FF'
export const secondary = '#354574'
export const black = '#000000'
export const error = '#DB3069'
export const success = '#32D9AA'
export const lightGrey = '#ECECEC'

export const colorProps = css`
  color: ${props =>
    props.white ? white
      : props.lightGrey ? lightGrey
        : props.success ? success
          : props.error ? error
            : props.black ? black
              : props.primary ? primary
                : secondary};
`