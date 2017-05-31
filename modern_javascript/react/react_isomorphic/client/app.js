// client/app.js

// import all the third party stuff
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// import routes & createStore
import Routes from '../modules/routes';
import createStore from '../modules/store';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = JSON.parse(unescape(window.__PRELOADED_STATE__));

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
let history = createBrowserHistory();
const store = createStore(history, preloadedState);

render((
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
  ), document.getElementById('app')
)
