import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loggedInStatus: 'NOT_LOGGED_IN',
       user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  checkLoginStatus() {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
    .then(response => {
      if(response.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
        
      }
    }).catch(err => console.log(err))
  }

  componentDidMount(){
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
    })
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
