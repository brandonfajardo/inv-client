import React from 'react'
import { Card, Icon } from '../../styles/elements'
import { Flex } from '../../styles/layout'
import { Container } from 'styled-bootstrap-grid'
import { H4 } from '../../styles/fonts'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import PlaceOrderTable from './PlaceOrderTable'

class PlaceOrderContainer extends React.Component {
  render() {
    const { products } = this.props
    return (
      <Container>
        <Card>
          <Flex justifyCenter={true}>
            {isEmpty(products)
              ? <Flex column={true}>
                <Icon size={`130px`} error={'true'}>shopping_cart</Icon>
                <H4>Your cart is empty.</H4>
              </Flex>
              : <PlaceOrderTable {...this.props} />
            }
          </Flex>
        </Card>
      </Container>
    )
  }
}

const mapStateToProps = ({ placeOrder }) => ({
  products: placeOrder.products,
  orderTotal: placeOrder.orderTotal
})

export default connect(mapStateToProps)(PlaceOrderContainer)