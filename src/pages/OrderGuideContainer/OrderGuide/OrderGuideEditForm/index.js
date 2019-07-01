import React from 'react'
import { Flex } from '../../../../styles/layout'
import { CircularButton, Button } from '../../../../styles/elements'
import isEqual from 'lodash/isEqual'
import EditFormTable from './EditFormTable'

class OrderGuideForm extends React.Component {
  state = {
    productDictionary: {},
    products: [],
    deletedProducts: [],
    savingOrderGuide: null,
  }

  componentDidMount () {
    this.setProducts()
  }

  setProducts = () => {
    const { products } = this.props
    const productDictionary = {}

    products.forEach(product => {
      productDictionary[product._id] = {
        ...product
      }
    })

    this.setState({
      products,
      productDictionary,
    })
  }

  removeProduct = product => {
    const products = this.state.products.filter(p => p._id !== product._id)
    const deletedProducts = [...this.state.deletedProducts, product._id]

    this.setState({
      products,
      deletedProducts,
    })
  }

  updateQuantity = (operation, productId) => {
    const products = this.state.products.map(product => {
      const volume = isEqual(operation, 'add') ? product.minQuantity : -product.minQuantity
      
      if (isEqual(productId, product._id)) {
        return {
          ...product,
          currentVolume: (product.currentVolume + volume <= 0) ? 0 : product.currentVolume + volume,
        }
      }
      return product
    })

    this.setState({
      products, 
    })
  }

  saveEditForm = () => {
    const { products, productDictionary, deletedProducts } = this.state
    const modifiedProducts = []

    products.forEach(product => {
      if (productDictionary[product._id]) {
        // Only update the products that got their volumes modified
        if (!isEqual(productDictionary[product._id].currentVolume, product.currentVolume)) {
          modifiedProducts.push({
            id: product._id,
            currentVolume: product.currentVolume
          })
        }
      }
    })

    this.props.saveEditForm({ 
      modifiedProducts,
      deletedProducts 
    })
  }

  render() {
    const { products } = this.state
    const { toggleEditForm, saving } = this.props

    return (
      <div>
        <EditFormTable
          products={products}
          updateQuantity={this.updateQuantity}
          removeProduct={this.removeProduct} />

        <Flex right={true} style={{ marginTop: '30px' }}>
          <Button disabled={saving} onClick={toggleEditForm}>Close</Button>
          <CircularButton
            disabled={saving}
            onClick={this.saveEditForm}
            color='primary'
            variant='extended'>
            Submit
          </CircularButton>
        </Flex>
      </div>
    )
  }
}

export default OrderGuideForm