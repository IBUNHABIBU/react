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
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleLogin(data) {

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
              handleLogin = {this.handleLogin}
              loggedInStatus = { this.state.loggedInStatus } />
            )} />
            <Route 
            exact path={"/Dashboard"} 
            render={ props => (
              <Dashboard {...props }
              loggedInStatus = { this.state.loggedInStatus } />
            )} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
