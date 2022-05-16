import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk' 
import tokenReducer from './reducers/tokenReducer'

const reducer = combineReducers({
  token: tokenReducer
})
  
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))