import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

// import * as reducers from '../reducers'
import { user } from './reducers/userReducer.js'
import App from './components/App';
import MovieIndex from './components/movieIndex';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    user: user,
    router: routerReducer,
  }), devTools, applyMiddleware(middleware)
)



const router = (
  <Provider store={store} >
    <ConnectedRouter history={history} >
      <App/>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('main'))
