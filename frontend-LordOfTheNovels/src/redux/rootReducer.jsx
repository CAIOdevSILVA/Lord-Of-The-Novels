import { combineReducers } from "redux";

import themeReducer from "./theme/slice"

const rootReducer = combineReducers({theme:themeReducer})

export default rootReducer;