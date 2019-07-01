import React from 'react'
import { Container } from 'styled-bootstrap-grid'
import { connect } from 'react-redux'
import { fetchProducts } from '../../redux/actions/product'
import { toggleEditForm, saveEditForm, closeSuccessBanner } from '../../redux/actions/orderGuide'
import { placeOrder } from '../../redux/actions/placeOrder'
import { Card } from '../../styles/elements'
import isEqual from 'lodash/isEqual'
import { P, H2 } from '../../styles/fonts'
import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'
import OrderGuide from './OrderGuide'
import { Banner } from '../../components'

class OrderGuideContainer extends React.Component {
  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts = () => {
    this.props.fetchProducts()
  }

  render() {
    const { 
      loading,
      error,
      products,
      closeSuccessBanner,
      orderGuideSaved,
    } = this.props

    return (
      <div>
        {isEqual(orderGuideSaved, true) && (
          <Banner onClose={closeSuccessBanner}>Product details successfully saved.</Banner>
        )}

        <Container>
          <Card>
            <H2 bold={true} black={true}>Menu Order Guide</H2>
            {isEqual(loading, true)
              ? <P>Loading...</P>
                : !isNil(error)
                  ? <P>{error}</P> 
                    : !isEmpty(products)
                      ? <OrderGuide {...this.props} />
                        : <P>There are currently no products to view!</P>
            }
          </Card>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = ({ product, editOrderGuide }) => ({
  loading: product.loading,
  error: product.error,
  products: product.list,
  displayEditForm: editOrderGuide.edit,
  savingEditForm: editOrderGuide.saving,
  orderGuideSaved: editOrderGuide.success,
})

const mapDispatchToProps = {
  fetchProducts,
  toggleEditForm,
  saveEditForm,
  closeSuccessBanner,
  placeOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderGuideContainer)
