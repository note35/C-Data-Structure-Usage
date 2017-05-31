import { combineReducers } from "redux";

import coreReducer from "./core/reducer";
import dashboardReducer from "./dashboard/reducer";

export default combineReducers({
    core: coreReducer,
    dashboard: dashboardReducer
});
