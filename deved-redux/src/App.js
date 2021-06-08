import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
 const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick = { () =>
        dispatch(login())
      }>Click me to login</button>
      <h1>redux : { counter }</h1>

        <button onClick = { () => dispatch(increment())}>+</button>
        <button onClick = { () => dispatch(decrement())}>-</button>
      { isLogged? <h3>Valuable info I shouldn't see</h3> : '' }
    </div>
  );
}

export default App;
