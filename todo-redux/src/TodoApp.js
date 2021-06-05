import React from 'react';
import { useSelector } from 'react-redux';
function TodoApp() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <h2>Counter: { counter } </h2>
        <button>+</button>
        <button>-</button>
      { isLogged? <h3>This is the area where you can learn react</h3>: ''}
    </div>
  );
}

export default TodoApp;
