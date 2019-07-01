import { 
  FETCH_ORDER_GUIDE_PRODUCTS,
  FETCH_ORDER_GUIDE_PRODUCTS_FAIL,
  FETCH_ORDER_GUIDE_PRODUCTS_SUCCESS,
  SAVE_ORDER_GUIDE_SUCCESS,
} from '../actions/types'
import isEmpty from 'lodash/isEmpty'

const initialState = {
  loading: null,
  error: null,
  list: [],
}

export default (state = initialState, action) => {
  switch(action.type){
      case FETCH_ORDER_GUIDE_PRODUCTS: 
        return {
          ...state,
          loading: true
        }
      case FETCH_ORDER_GUIDE_PRODUCTS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }
      case FETCH_ORDER_GUIDE_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          list: action.payload,
        }
      case SAVE_ORDER_GUIDE_SUCCESS:
        const { deletedProducts, modifiedProducts } = action.payload
        let modifiedProductDictionary = {}
        
        if (!isEmpty(modifiedProducts)) {
          modifiedProducts.forEach(product => {
            modifiedProductDictionary[product.id] = {
              ...product
            }
          })
        }

        const updatedList = state.list.filter(product => {
          if (!deletedProducts.includes(product._id)) {
            return true
          }
        }).map(product => {
          if (modifiedProductDictionary[product._id]) {
            return {
              ...product,
              currentVolume: modifiedProductDictionary[product._id].currentVolume,
            }
          }
          return product
        })


        return {
          ...state,
          list: updatedList,
        }
      default:
        return state
  }
}
