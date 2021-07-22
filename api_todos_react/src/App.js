import './App.css';
import TodoList from './TodoList/TodoList';
import { makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  appTitle: {
    textAlign: 'center',
  }
})

function App() {
  const classes = useStyle();
  return (
    <div className="App">
      <header className="App-header">
       <Typography variant="h1" className={classes.appTitle} >Todo API</Typography>
        <hr/>
       <TodoList />
      </header>
    </div>
  );
}

export default App;
