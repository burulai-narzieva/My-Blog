import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import App from './App.jsx'
import { rootReducer } from './store/reducers/index.js'
import { Provider } from 'react-redux'
import {createStore} from 'redux'

const store = createStore(rootReducer)

ReactDOM.render(
		<Provider store={store}>
		<App />
		</Provider>,
	document.getElementById('root'),
);