import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './static/css/bootstrap.min.css'
import './static/css/custom.css'
import './static/fonts/font.css'
import './static/fonts/flaticon.css'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>

    </Provider>  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
