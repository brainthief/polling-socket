import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './AppC'
// import App from './App'
import * as serviceWorker from './serviceWorker'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import mainReducer from './redux/mainReducer'

const combinedReducers = combineReducers({
 mainPage: mainReducer
})

const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(<Provider store={store} > <App /></Provider >, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
