import { createStore, applyMiddleware } from 'redux'

import { rootReducer } from './modules'
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
  ))

  return store
}

export default configureStore