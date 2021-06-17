import React from 'react';
import CakeContainer from './container/CakeContainer';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <div className="App">
       <Provider store = { store }>
         <CakeContainer />
       </Provider>
    </div>
  );
}

export default App;
