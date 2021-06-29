import React from 'react';
import './App.css';
import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';
import  SaveIcon  from '@material-ui/icons/Save';
import  DeleteIcon  from '@material-ui/icons/Delete';
import  CheckBox  from '@material-ui/core/Checkbox';

function CheckBoxExample() {
  const [checked, setchecked] = React.useState(true)
  return (
    <div>
    <CheckBox />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ButtonGroup>
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

      <Button 
      startIcon = {<DeleteIcon />}
      
      variant='contained' 
      color="secondary" 
      onClick = { () => alert('hello')} style={
        {
          fontSize: 18
        }
      }>
        Discard
      </Button>
      </ButtonGroup>
      <CheckBoxExample />
    </div>
  );
}

export default App;
