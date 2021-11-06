<<<<<<< HEAD
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
           <Route path="/" exact component = {ProductListing} />
           <Route path="/product/:productId" exact component = {ProductDetail} />
           <Route>404</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
=======
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
           <Route path="/" exact component = {ProductListing} />
           <Route path="/product/:productId" exact component = {ProductDetail} />
           <Route>404</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
