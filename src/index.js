import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.css';

import { noteReducer } from "./reducers/notes.js";
import App from "./App.jsx";

const store = createStore(noteReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
	    <App />
    </Provider>,
	document.getElementById("root")
);