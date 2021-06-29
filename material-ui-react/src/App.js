import React from 'react';
import './App.css';
import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';
import  SaveIcon  from '@material-ui/icons/Save';
import  DeleteIcon  from '@material-ui/icons/Delete';
import  CheckBox  from '@material-ui/core/Checkbox';
import  FormControlLabel  from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import {makeStyles}  from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {
    border: 0,
    borderRadius: '15',
    color: 'white',
    padding: '0 30px',
    background: 'linear-gradient(45deg, #333, #999)'
  }
})

function ButtonStyled() {
  return (
    <div>
      <Button />
    </div>
  )
}
function CheckBoxExample() {
  const [checked, setchecked] = React.useState(true)
  return (
    <div>
      <FormControlLabel
      control={<CheckBox checked = { checked } 
      onChange = { e => setchecked(e.target.checked) } />
       }
       label= "Do you Agree"
       />
    
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <TextField 
        variant='filled'
        color='secondary'
        type='date'
      />
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
      <ButtonStyled />
    </div>
  );
}

export default App;
