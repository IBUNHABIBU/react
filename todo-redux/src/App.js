<<<<<<< HEAD
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './containers/Header';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { increment, decrement } from './redux/actions/productActions';

function TodoApp() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
           <Route path="/" exact component={ProductListing} />
           <Route path="/product/:productId" exact component = {ProductDetail} />
           <Route>404 not found</Route>
        </Switch>
        
      </Router>

    </div>
  );
}

export default TodoApp;
=======
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './containers/Header';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { increment, decrement } from './redux/actions/productActions';

function TodoApp() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
           <Route path="/" exact component={ProductListing} />
           <Route path="/product/:productId" exact component = {ProductDetail} />
           <Route>404 not found</Route>
        </Switch>
        
      </Router>

    </div>
  );
}

export default TodoApp;
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
