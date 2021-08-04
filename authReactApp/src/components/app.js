import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loggedInStatus: 'NOT_LOGGED_IN',
       user: {}
    }
  }
  
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route 
            exact path={"/"}
            render={ props => (
              <Home {...props }
              loggedInStatus = { this.state.loggedInStatus } />
            )} />
            <Route exact path={"/Dashboard"} component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
