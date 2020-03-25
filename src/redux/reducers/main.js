/**
 * reducer主文件
 */

import { combineReducers } from "redux";

import ebikeReducer from "./ebikeReducer";

const reducers = combineReducers({
	ebikeReducer
});

export default reducers;