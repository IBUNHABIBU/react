<<<<<<< HEAD
import React from 'react'
import { Typography, AppBar, Card,
   CardActions, CardContent, 
   CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import myStyle from './stylesheets/style';

const useStyle = makeStyles((theme) => ({
    para: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(8, 5, 6)
    }
}))

const App = () => {
  const custom = useStyle();
  const classes = myStyle();
  const res= [1,2,3,4,5,6]
  return (
    <>
      <CssBaseline />
      <AppBar position ='relative'>
        <Toolbar>
        <PhotoCamera className={classes.icon} />
        <Typography variant='h6' >
          Photo Album 
        </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom style={{ marginTop: '100px'}}>Photo Album</Typography>
              <Typography variant="h5" className={custom.para} align='center' color='textSecondary' paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Unde error, fugit aliquid impedit, nemo minima dolore porro magni 
                facilis voluptate molestiae. Non similique, vitae pariatur sunt delectus quas molestias mollitia.</Typography>

                <div className={classes.button}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary" > see my photos</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary"> Go to store</Button>
                    </Grid>
                  </Grid>
                </div>
          </Container>
        </div>
        <Container maxWidth="md" className={classes.cardGrid} >
           <Grid container spacing={2} >
            {res.map((res) => <Grid item key={res} xs={12} sm={6} md={4} >
               <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    title="Random"
                    image="https://source.unsplash.com/random"
               
                  />
               
               <CardContent className={ classes.cardContent }>
                 <Typography gutterBottom variant="h4">
                        Hello
                 </Typography>
                 <Typography>
                   this is the paragraph to explain the picture that you see above in details
                 </Typography>
               </CardContent>
               <CardActions>
                 <Button size="small" color="primary">View</Button>
                 <Button size="small" color="primary">Edit</Button>
               </CardActions>
               </Card>
             </Grid>
             )} 
             
           </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
          <Typography variant="h6" color="initial" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" color="text-secondary" align="center">
              something here to gave a footer a purpose
          </Typography>
      </footer>
    </>
  )
}

export default App
=======
import React from 'react'
import { Typography, AppBar, Card,
   CardActions, CardContent, 
   CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import myStyle from './stylesheets/style';

const useStyle = makeStyles((theme) => ({
    para: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(8, 5, 6)
    }
}))

const App = () => {
  const custom = useStyle();
  const classes = myStyle();
  const res= [1,2,3,4,5,6]
  return (
    <>
      <CssBaseline />
      <AppBar position ='relative'>
        <Toolbar>
        <PhotoCamera className={classes.icon} />
        <Typography variant='h6' >
          Photo Album 
        </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom style={{ marginTop: '100px'}}>Photo Album</Typography>
              <Typography variant="h5" className={custom.para} align='center' color='textSecondary' paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Unde error, fugit aliquid impedit, nemo minima dolore porro magni 
                facilis voluptate molestiae. Non similique, vitae pariatur sunt delectus quas molestias mollitia.</Typography>

                <div className={classes.button}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary" > see my photos</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary"> Go to store</Button>
                    </Grid>
                  </Grid>
                </div>
          </Container>
        </div>
        <Container maxWidth="md" className={classes.cardGrid} >
           <Grid container spacing={2} >
            {res.map((res) => <Grid item key={res} xs={12} sm={6} md={4} >
               <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    title="Random"
                    image="https://source.unsplash.com/random"
               
                  />
               
               <CardContent className={ classes.cardContent }>
                 <Typography gutterBottom variant="h4">
                        Hello
                 </Typography>
                 <Typography>
                   this is the paragraph to explain the picture that you see above in details
                 </Typography>
               </CardContent>
               <CardActions>
                 <Button size="small" color="primary">View</Button>
                 <Button size="small" color="primary">Edit</Button>
               </CardActions>
               </Card>
             </Grid>
             )} 
             
           </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
          <Typography variant="h6" color="initial" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" color="text-secondary" align="center">
              something here to gave a footer a purpose
          </Typography>
      </footer>
    </>
  )
}

export default App
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
