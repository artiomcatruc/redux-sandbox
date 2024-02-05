import React from "react";
import ReactDOM from 'react-dom'
import {legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
import {Provider} from "react-redux";
import App from './component/app'


const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))






