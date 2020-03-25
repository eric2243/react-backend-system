import thunk from "redux-thunk";
// 引入createStore创建store，引入applyMiddleware 来使用中间件
import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "../reducers/main.js";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;