import React from 'react'
import { BannerContainer } from './styles'

class Banner extends React.Component {
  render () {
    const { children } = this.props
    return (
      <BannerContainer>
        {children}
      </BannerContainer>
    )
  }
}

export default Banner