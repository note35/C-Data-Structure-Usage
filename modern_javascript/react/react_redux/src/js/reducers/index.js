import { combineReducers } from "redux";

import coreReducer from "./coreReducer";
import dashboardReducer from "./dashboardReducer";

export default combineReducers({
  core: coreReducer,
  dashboard: dashboardReducer
});
