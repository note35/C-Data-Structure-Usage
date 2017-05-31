import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import routes from "./containers/routes";
import Store from "./store";

const app = document.getElementById('app');
ReactDOM.render(<Provider store={Store}>
  {routes}
</Provider>, app);
