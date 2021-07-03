import React from 'react'
import { Typography, AppBar, Card,
   CardActions, CardContent, 
   CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
    para: {

    }
}))

const App = () => {
  const classes = useStyle();
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
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom style={{ marginTop: '100px'}}>Photo Album</Typography>
              <Typography variant="h5" className={classes.para} align='center' color='textSecondary' paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Unde error, fugit aliquid impedit, nemo minima dolore porro magni 
                facilis voluptate molestiae. Non similique, vitae pariatur sunt delectus quas molestias mollitia.</Typography>

                <div>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary"> see my photos</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary"> Go to store</Button>
                    </Grid>
                  </Grid>
                </div>
          </Container>
        </div>
        
      </main>
    </>
  )
}

export default App
