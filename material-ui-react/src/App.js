import React from 'react';
import './App.css';
import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';
import  SaveIcon  from '@material-ui/icons/Save';
import  DeleteIcon  from '@material-ui/icons/Delete';
import  CheckBox  from '@material-ui/core/Checkbox';
import  FormControlLabel  from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import {makeStyles, ThemeProvider, createMuiTheme }  from '@material-ui/core/styles';
import  orange  from '@material-ui/core/colors/orange';
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles({
  root: {
    border: 0,
    borderRadius: '15',
    color: 'white',
    padding: '0 30px',
    background: 'linear-gradient(45deg, #333, #999)'
  }
})

const theme = createMuiTheme({
    typography:{
      h2: {
        fontSize: 18
      },
    },
    palette: { 
      secondary: {
        main: orange[500],
      }
    }
})

function ButtonStyled() {
  const classes = useStyle();
  return (
    <div>
      <Button className= {classes.root}> Styled</Button>
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
    <Container maxWid='sm'>
<ThemeProvider theme={theme}>
     <div className="App">
       <Typography variant='h2'>
         Welcome to MUI
       </Typography>
       <Typography variant='subtitle1'>
         Where yo can learn UX design
       </Typography>
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
      <Grid container spacing={2} justify="center">
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ 
          height: 75,
          width: '100%',
          backgroundColor: 'red'
        }} />
      </Grid>
      <Grid item xs={3}>
        <Paper style={{ 
          height: 75,
          width: '100%',
          backgroundColor: 'red'
        }} />
      </Grid>
      <Grid item xs={3}>
        <Paper style={{ 
          height: 75,
          width: '100%',
          backgroundColor: 'red'
        }} />
      </Grid>
      </Grid>
      
      </div>
    </ThemeProvider>
    </Container>
    
    
  );
}

export default App;
