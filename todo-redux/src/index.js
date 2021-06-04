// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import TodoApp from './TodoApp';
// import { store } from './redux/store';
// import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <TodoApp />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


function add(a) {
  return function (b) {
    return a + b ;
  }
}

add(2);
add(3)
let result = add(4)(1);
console.log(add(4));
