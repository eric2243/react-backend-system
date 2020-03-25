import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";

import store from "./redux/store";
// import serviceWorker from "./serviceWorker";
import ERouter from './ERouter';

import "./index.css";

// const store = configureStore();
ReactDOM.render(
	<Provider store={store}>
		<ERouter />
	</Provider>, document.getElementById('root')
	);
// serviceWorker();
