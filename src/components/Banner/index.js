import React from 'react'
import { BannerContainer, IconContainer } from './styles'
import { Icon } from '../../styles/elements'

class Banner extends React.Component {
  render () {
    const { onClose, children } = this.props
    return (
      <BannerContainer>
        {children}
        <IconContainer onClick={() => onClose()}>
          <Icon white={'true'}>close</Icon>
        </IconContainer>
      </BannerContainer>
    )
  }
}

export default Banner