import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import allReducers from './redux/reducers';

const myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <React.StrictMode>
    <Provider store = { myStore }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
