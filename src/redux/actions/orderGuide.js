import { SAVE_ORDER_GUIDE, SAVE_ORDER_GUIDE_SUCCESS, TOGGLE_EDIT_MODAL, CLOSE_SUCCESS_BANNER } from './types'
import isEmpty from 'lodash/isEmpty'
import axios from 'axios'

const SERVER_URL = 'http://localhost:8080'

export const saveEditForm = ({ deletedProducts, modifiedProducts }) => {
  return async dispatch => {
    dispatch({ type: SAVE_ORDER_GUIDE })

    let promises = []
    if (!isEmpty(deletedProducts)) promises.push(axios.delete(`${SERVER_URL}/product`, { data: { deletedProducts } }))
    if (!isEmpty(modifiedProducts)) promises.push(axios.post(`${SERVER_URL}/product`, { modifiedProducts }))
    
    //TODO: Better error handling in here
    const res = await Promise.all(promises)

    if (!isEmpty(res) || isEmpty(promises)) {
      dispatch({ 
        type: SAVE_ORDER_GUIDE_SUCCESS, 
        payload: { modifiedProducts, deletedProducts } 
      })
    }
  }
}

export const toggleEditForm = () => ({ type: TOGGLE_EDIT_MODAL })

export const closeSuccessBanner = () => ({ type: CLOSE_SUCCESS_BANNER })