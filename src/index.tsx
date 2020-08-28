import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { store } from "./_helpers";
import App from "./app/App";
import { ErrorBoundary } from './component';
import {ParallaxProvider} from 'react-scroll-parallax';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/ttf/CandleLight.ttf';

require('dotenv').config()

ReactDOM.render(
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
