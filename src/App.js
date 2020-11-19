import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';
import Login from './Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/" component={Login}/>
          <Route path="/secured" component={Secured}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
