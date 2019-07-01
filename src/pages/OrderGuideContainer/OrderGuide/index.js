import React from 'react'
import { CircularButton, Button, Card } from '../../../styles/elements'
import { Flex } from '../../../styles/layout'
import isEqual from 'lodash/isEqual'
import { Modal } from '../../../components'
import OrderGuideEditForm from './OrderGuideEditForm'
import OrderGuideTable from './OrderGuideTable'

class OrderGuide extends React.Component {
  goToPlaceOrder = () => {
    const { products, placeOrder, history } = this.props
    placeOrder(products)
    history.push('/placeOrder')
  }

  render() {
    const { 
      products,
      displayEditForm,
      toggleEditForm,
      saveEditForm,
      savingEditForm,
    } = this.props

    return (
      <div>
        <Modal open={isEqual(displayEditForm, true)} onClose={toggleEditForm}>
          <Card noBoxShadow={true}>
            <OrderGuideEditForm
              toggleEditForm={toggleEditForm}
              products={products}
              saveEditForm={saveEditForm} 
              savingEditForm={savingEditForm} />
          </Card>
        </Modal>

        <OrderGuideTable products={products} />

        <Flex right={true} style={{ marginTop: '30px' }}>
          <Button onClick={toggleEditForm}>Edit Guide</Button>
          <CircularButton
            onClick={this.goToPlaceOrder}
            color='primary'
            variant='extended'
          >
            Place Order
          </CircularButton>
        </Flex>
      </div>
    )
  }
}

export default OrderGuide