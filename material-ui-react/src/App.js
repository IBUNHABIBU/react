import './App.css';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <Button 
      startIcon = {<SaveIcon />}
      endIcon = {<SaveIcon />}
      variant='contained' 
      color="primary" 
      onClick = { () => alert('hello')} style={
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
