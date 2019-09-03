import { createStore, combineReducers, applyMiddleware } from 'redux'
import audit from './components/audit/reducer'
import thunk from 'redux-thunk'

function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }
  
  const reducer = combineReducers({audit})
// applyMiddleware supercharges createStore with middleware:
const store = createStore(reducer, applyMiddleware(logger,thunk))

export default store;