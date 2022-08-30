import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    const adm = {username: 'joao', password: '12s34'}
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/About' component={About} />
          <Route path='/Users/:id' render={(param) => <Users greetingsMessage="Good Morning" {...param} />} />
          <Route exact path='/' component={Home} />
          <Route path='/Login' render={ () => <StrictAccess user={adm} />} />
        </Switch>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/users"> Users </Link>
          <Link to="/Login"> Strict Access </Link>
      </BrowserRouter>
    );
  }
}

export default App;
