import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};