import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import MovieIndex from './components/movieIndex';

import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const history = createHistory();
const middleWare = routerMiddleware(history);

const rootReducer = combineReducers({
  router: routerReducer
});

const store = createStore(rootReducer, devTools, applyMiddleware(middleWare));

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Route path='/' component={App}>
        <IndexRoute component={MovieIndex} />
      </Route>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('main'))
