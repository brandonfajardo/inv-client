import React from 'react'
import { Card, Icon } from '../../styles/elements'
import { Flex } from '../../styles/layout'
import { Container } from 'styled-bootstrap-grid'
import { H4 } from '../../styles/fonts'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import PlaceOrderTable from './PlaceOrderTable'
import { 
  updatePlaceOrderQuantity,
  clearPlaceOrder,
  deletePlaceOrderProduct,
  closeSuccessBanner,
} from '../../redux/actions/placeOrder'
import { Banner } from '../../components'

class PlaceOrderContainer extends React.Component {
  render() {
    const { 
      products,
      success,
      closeSuccessBanner
    } = this.props

    return (
      <div>
        {!isNil(success) && (
          <Banner onClose={closeSuccessBanner}>{success}</Banner>
        )}

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
      </div>
    )
  }
}

const mapStateToProps = ({ placeOrder }) => ({
  products: placeOrder.products,
  orderTotal: placeOrder.orderTotal,
  success: placeOrder.success,
})

const mapDispatchToProps = {
  updatePlaceOrderQuantity,
  clearPlaceOrder,
  deletePlaceOrderProduct,
  closeSuccessBanner,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrderContainer)