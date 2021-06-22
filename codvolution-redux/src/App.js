import React from 'react';
import CakeContainer from './container/CakeContainer';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import HooksCakeContainer from './container/HooksCakeContainer';
import IceCreamContainer from './container/IceCreamContainer';

function App() {
  return (
    <div className="App">
       <Provider store = { store }>
         <HooksCakeContainer />
         <CakeContainer />
         <IceCreamContainer />
       </Provider>
    </div>
  );
}

export default App;
