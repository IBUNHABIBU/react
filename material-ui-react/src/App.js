import './App.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Button variant='contained' color="primary" onClick = { () => alert('hello')} style={
        {
          fontSize: 18
        }
      }>
        Hello
      </Button>
    </div>
  );
}

export default App;
