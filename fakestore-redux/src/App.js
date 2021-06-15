import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Router, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component = {ProductListing} />
      </Router>
      
    </div>
  );
}

export default App;
