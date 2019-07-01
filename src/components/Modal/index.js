import React from 'react'
import { ModalContainer } from './styles'
import Slide from '@material-ui/core/Slide'

class CustomModal extends React.Component {
  render() {
    const { open, onClose, children } = this.props
    return (
      <ModalContainer open={open} onClose={onClose}>
        <Slide in={open} direction='down' timeout={{ enter: 500, exit: 0 }}>
          {children}
        </Slide>
      </ModalContainer>
    )
  }
}

export default CustomModal