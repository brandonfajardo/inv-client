import React from 'react'
import { NavContainer } from './styles'
import { H1 } from '../../styles/fonts'
import { withRouter } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import { Flex } from '../../styles/layout'
import { CircularButton } from '../../styles/elements'
import { connect } from 'react-redux'

class NavBar extends React.Component {
  goToOrderGuide = () => {
    this.props.history.push('/')
  }

  goToPlaceOrder = () => {
    this.props.history.push('/placeOrder')
  }

  render() {
    const { orderTotal } = this.props
    return (
      <NavContainer>
        <H1 onClick={this.goToOrderGuide}
          primary={true}
          click={true}
          bold={true}
          textCenter={true}
        >
          coastline
        </H1>

        <Flex right={true}>
          <CircularButton
            style={{ marginRight: '30px'}}
            onClick={this.goToPlaceOrder}
            variant='extended'
            color='primary'
          >
            <Icon>shopping_cart</Icon>
            <span style={{ marginLeft: '5px' }}>${orderTotal}</span>
          </CircularButton>
        </Flex>
      </NavContainer>
    )
  }
}

const mapStateToProps = ({ placeOrder }) => ({
  orderTotal: placeOrder.orderTotal
})

const Nav = connect(mapStateToProps)(NavBar)

export default withRouter(Nav)