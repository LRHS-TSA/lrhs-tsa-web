import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router,
      Route,
      Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import TopNav from './views/layouts/NavBar'

import Home from './views/Home'
import Login from './views/users/Login'


const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <TopNav />
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
