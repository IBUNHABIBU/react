import './App.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Button variant='contained' color="primary" onClick = { () => alert('hello')}>
        Hello
      </Button>
    </div>
  );
}

export default App;
