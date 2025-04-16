import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import tokenReducer from './reducers/tokenReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  token: tokenReducer,
  user: userReducer
})
  
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))