import { SAVE_ORDER_GUIDE, SAVE_ORDER_GUIDE_SUCCESS, TOGGLE_EDIT_MODAL, CLOSE_SUCCESS_BANNER } from '../actions/types'

const initialState = {
  saving: null,
  success: null,
  edit: false,
}

export default (state = initialState, action) => {
  switch(action.type){
      case TOGGLE_EDIT_MODAL:
        return {
          ...state,
          edit: !state.edit,
        }
      case SAVE_ORDER_GUIDE:
        return {
          ...state,
          saving: true
        }
      case SAVE_ORDER_GUIDE_SUCCESS:
        return {
          ...state,
          saving: false,
          success: 'Product details successfully saved.',
          edit: false
        }
      case CLOSE_SUCCESS_BANNER:
        return {
          ...state,
          success: null,
        }
      default:
        return state
  }
}
