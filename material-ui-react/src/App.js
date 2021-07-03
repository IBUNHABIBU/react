import React from 'react'
import { Typography, AppBar, Card,
   CardActions, CardContent, 
   CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position ='relative'>
        <PhotoCamera />
        <Typography variant='h6' >
          Photo Album 
        </Typography>
      </AppBar>
      <main>
        <Container>
          
        </Container>
      </main>
    </>
  )
}

export default App
