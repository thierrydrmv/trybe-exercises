import React, { Component } from 'react';

class Home extends Component {
  redirectLogin = () => {
    const { history } = this.props;
    history.push('/login')
  }
  render() {
    return (
      <div>
        <h1>Bem vindo</h1>
        <button type='button' onClick={this.redirectLogin}>Faça o Login</button>
      </div>
    );
  }
}

export default Home;