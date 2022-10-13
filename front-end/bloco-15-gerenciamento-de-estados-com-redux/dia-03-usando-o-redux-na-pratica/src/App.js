import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Clientes from './pages/Clientes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/login" component={ Login }/>
        <Route path="/clientes" component={ Clientes }/>
        <Route path="/cadastro" component={ Cadastro }/>
      </Switch>
    );
  }

}

export default App;