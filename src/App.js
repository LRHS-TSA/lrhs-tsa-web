import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router,
      Route,
      Link } from 'react-router-dom';



import TopNav from './views/layouts/NavBar'

import Home from './views/Home'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <TopNav/>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
