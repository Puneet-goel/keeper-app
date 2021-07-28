import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";

import { noteReducer } from "./reducers/notes.js";
import App from "./App";
import "./index.css";

const store = createStore(noteReducer, applyMiddleware(thunk,logger));

ReactDOM.render(
	<Provider store={store}>
	    <App />
    </Provider>,
	document.getElementById("root")
);