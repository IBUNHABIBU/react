import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  return (
    <div className="App">
      <h1>redux : { counter }</h1>
        <button >+</button>
        <button >-</button>
      { isLogged? <h3>Valuable info I shouldn't see</h3> : '' }
    </div>
  );
}

export default App;
