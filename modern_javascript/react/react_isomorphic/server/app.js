// server/app.js

'use strict';

// import all the third party stuff
import path from 'path';
import express from 'express';

import bodyParser from 'body-parser';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import createMemoryHistory from 'history/createMemoryHistory';

// import routes & reducers
import createStore from '../modules/store';
import Routes from '../modules/routes';

// import ejs template
import index from './views/index.ejs';

// server init
const app = express();
const port = process.env.PORT || 3000;

// TODO
const {rootDir = `${process.env.PWD}/build`} = process.env;

// set public foler
app.use(express.static(path.join(rootDir, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.text({type: 'text/xml'}))

// import api routes
import apiRouter from './apis';
app.use('/api', apiRouter);

const context = {};

app.get('*', (req, res, next)=> {
  let history = createMemoryHistory();
  let store = createStore(history, {});
  const preloadState = escape(JSON.stringify(store.getState()));
  let html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  res.send(index({html, preloadState}));
})

app.listen(port);

export default app;
