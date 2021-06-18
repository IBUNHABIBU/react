import React from 'react';
import CakeContainer from './container/CakeContainer';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import HooksCakeContainer from './container/HooksCakeContainer';

function App() {
  return (
    <div className="App">
       <Provider store = { store }>
         <HooksCakeContainer />
         <CakeContainer />
       </Provider>
    </div>
  );
}

export default App;
