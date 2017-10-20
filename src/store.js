import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'

import reducers from './reducers'
const reducer = combineReducers(reducers)

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
)

export const history = createHistory()

const store = createStore(reducer, enhancer)

export default store
