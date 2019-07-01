import { combineReducers } from 'redux'
import productReducer from './product'
import editOrderGuideReducer from './editOrderGuide'
import placeOrderReducer from './placeOrder'

const rootReducer = combineReducers({
  product: productReducer,
  editOrderGuide: editOrderGuideReducer,
  placeOrder: placeOrderReducer,
})

export default rootReducer