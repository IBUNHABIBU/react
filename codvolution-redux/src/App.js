import React from 'react';
import CakeContainer from './container/CakeContainer';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import HooksCakeContainer from './container/HooksCakeContainer';
import IceCreamContainer from './container/IceCreamContainer';
import NewCakeContainer from './container/NewCakeContainer';
import ItemContainer from './container/ItemContainer';

function App() {
  return (
    <div className="App">
       <Provider store = { store }>
       <ItemContainer cake/>
         <ItemContainer  />
         <HooksCakeContainer />
         <CakeContainer />
         <IceCreamContainer />
         <NewCakeContainer />
         
       </Provider>
    </div>
  );
}

export default App;
