import { 
  PLACE_ORDER_SUCCESS,
  UPDATE_PLACE_ORDER_QUANTITY,
  CLEAR_PLACE_ORDER,
  DELETE_PLACE_ORDER_PRODUCT,
  CLOSE_ORDER_SUCCESS_BANNER,
} from '../actions/types'
import isEqual from 'lodash/isEqual'

const initialState = {
  products: [],
  orderTotal: 0,
  success: null,
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
          success: 'Products successfully added to cart.'
        }
      case UPDATE_PLACE_ORDER_QUANTITY:
        const { operation, productId } = action.payload
        
        let adjustPrice
        
        const updatedProducts = state.products.map(product => {
          const volume = isEqual(operation, 'add') ? product.minQuantity : -product.minQuantity
          
          if (isEqual(productId, product._id)) {
            adjustPrice = product.currentVolume + volume < 0
              ? 0
                : isEqual(operation, 'add') 
                ? product.minQuantity * product.purchasePrice
                : product.minQuantity * -product.purchasePrice

            return {
              ...product,
              currentVolume: (product.currentVolume + volume <= 0) ? 0 : product.currentVolume + volume,
            }
          }
          return product
        })

        return {
          ...state,
          products: updatedProducts,
          orderTotal: (Math.abs(Number(state.orderTotal) + Number(adjustPrice))).toFixed(2)
        }
      case CLEAR_PLACE_ORDER:
        return {
          success: 'Products cleared from cart.',
          products: [],
          orderTotal: 0,
        }
      case DELETE_PLACE_ORDER_PRODUCT:
        let adjustment
        
        const updated = state.products.filter(product => {
          if (isEqual(product._id, action.payload)) {
            adjustment = (product.currentVolume * product.purchasePrice).toFixed(2)
          }

          if (!isEqual(product._id, action.payload)) return true
        })

        return {
          ...state,
          products: updated,
          orderTotal: (state.orderTotal - adjustment).toFixed(2)
        }
      case CLOSE_ORDER_SUCCESS_BANNER: 
        return {
          ...state,
          success: null,
        }
      default:
        return state
  }
}
