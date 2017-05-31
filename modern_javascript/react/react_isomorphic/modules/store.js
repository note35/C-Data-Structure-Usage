import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducer";

const Store = (history, stats) => {
  const middleware = applyMiddleware(promise(), thunk, createLogger(), routerMiddleware(history));
  return createStore(reducer, stats, middleware);
};

export default Store;
