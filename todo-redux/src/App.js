import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions/productActions';

function TodoApp() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <h2>Counter: { counter } </h2>
        <button onClick = { () => dispatch(increment(5)) }>+</button>
        <button onClick = { () => dispatch(decrement())}>-</button>
      { isLogged? <h3>This is the area where you can learn react</h3>: ''}
    </div>
  );
}

export default TodoApp;
