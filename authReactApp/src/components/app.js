import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/Dashboard"} component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
