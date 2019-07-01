import axios from 'axios'
import isNil from 'lodash/isNil'
import { 
  FETCH_ORDER_GUIDE_PRODUCTS,
  FETCH_ORDER_GUIDE_PRODUCTS_FAIL,
  FETCH_ORDER_GUIDE_PRODUCTS_SUCCESS,
} from './types'

const SERVER_URL = 'http://localhost:8080'

export const fetchProducts = () => {
  return async dispatch => {
    dispatch({ type: FETCH_ORDER_GUIDE_PRODUCTS })

    const { data } = await axios.get(`${SERVER_URL}/product`)

    if (isNil(data.error)) {
      dispatch({ type: FETCH_ORDER_GUIDE_PRODUCTS_SUCCESS, payload: data })
    } else {
      dispatch({ type: FETCH_ORDER_GUIDE_PRODUCTS_FAIL, payload: data.error })
    }
  }
}
