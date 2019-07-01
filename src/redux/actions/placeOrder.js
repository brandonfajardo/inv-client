import { PLACE_ORDER_SUCCESS } from '../actions/types'

export const placeOrder = order => ({
  type: PLACE_ORDER_SUCCESS,
  payload: order
})
