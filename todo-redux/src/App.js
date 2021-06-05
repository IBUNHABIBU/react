import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './redux/actions/productActions';

function TodoApp() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Welcome to React</h1>
     
    </div>
  );
}

export default TodoApp;
