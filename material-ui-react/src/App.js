import React from 'react'
import { Typography, AppBar, Card,
   CardActions, CardContent, 
   CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position ='relative'>
        <Toolbar>
        <PhotoCamera />
        <Typography variant='h6' >
          Photo Album 
        </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Photo Album</Typography>
              <Typography variant="h5" align='center' color='textSecondary' paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Unde error, fugit aliquid impedit, nemo minima dolore porro magni 
                facilis voluptate molestiae. Non similique, vitae pariatur sunt delectus quas molestias mollitia.</Typography>
          </Container>
        </div>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
           <Button>One</Button>
           <Button>Two</Button>
           <Button>Three</Button>
        </ButtonGroup>
      </main>
    </>
  )
}

export default App
