import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import allReducers from './reducers';

const myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <React.StrictMode>
    <Provider store = { myStore }>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
