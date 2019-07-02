import { 
  PLACE_ORDER_SUCCESS,
  UPDATE_PLACE_ORDER_QUANTITY,
  CLEAR_PLACE_ORDER,
  DELETE_PLACE_ORDER_PRODUCT,
  CLOSE_ORDER_SUCCESS_BANNER
} from '../actions/types'

export const placeOrder = order => ({
  type: PLACE_ORDER_SUCCESS,
  payload: order
})

export const updatePlaceOrderQuantity = (operation, productId) => ({
  type: UPDATE_PLACE_ORDER_QUANTITY,
  payload: { operation, productId }
})

export const clearPlaceOrder = () => ({
  type: CLEAR_PLACE_ORDER
})

export const deletePlaceOrderProduct = productId => ({
  type: DELETE_PLACE_ORDER_PRODUCT,
  payload: productId,
})

export const closeSuccessBanner = () => ({
  type: CLOSE_ORDER_SUCCESS_BANNER,
})