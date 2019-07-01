import { PLACE_ORDER_SUCCESS } from '../actions/types'

const initialState = {
  products: [],
  orderTotal: 0.00,
}

export default (state = initialState, action) => {
  switch(action.type){
      case PLACE_ORDER_SUCCESS:
        const products = action.payload
    
        const calculateTotal = products.reduce((currentTotal, currentProduct) => {
          const { currentVolume, purchasePrice } = currentProduct
          return currentTotal += currentVolume * purchasePrice
        }, 0)

        return {
          ...state,
          products: action.payload,
          orderTotal: calculateTotal.toFixed(2),
        }
      default:
        return state
  }
}
