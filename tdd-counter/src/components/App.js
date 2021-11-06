<<<<<<< HEAD
import React from 'react';
import '../App.css';
import Counter from './Counter';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <LoginForm submit={ values => alert(JSON.stringify(values))} />
    </div>
  );
}

export default App;
=======
import React from 'react';
import '../App.css';
import Counter from './Counter';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <LoginForm submit={ values => alert(JSON.stringify(values))} />
    </div>
  );
}

export default App;
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
