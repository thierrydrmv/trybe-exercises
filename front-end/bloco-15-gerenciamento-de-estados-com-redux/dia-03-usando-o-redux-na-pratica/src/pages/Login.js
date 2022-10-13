import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions';

class Login extends Component {
  
  state = {
    email: '',
    senha: '',
    valid: false,
  };

  handleChangle = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.validData();
    });
  }

  validData = () => {
    const { email, senha } = this.state;
    if (email && senha) {
      this.setState({ valid: true })
    } else {
      this.setState({ valid: false })
    }
  }

  handleLogin = () => {
    const { dispatchLogin, history } = this.props;
    const { email, senha } = this.state;
    dispatchLogin({ email, senha });
    history.push('/clientes');
  }

  render() {
    const { email, senha, valid } = this.state;
    return (
      <div>
        <h1>Página de Login</h1>
        <label>
          Email
          <input
            value={ email }
            type="email"
            name="email"
            onChange={ this.handleChangle }
          />
        </label>

        <label>
          Senha
          <input
            value={ senha }
            type="senha"
            name="senha"
            onChange={ this.handleChangle }
          />
        </label>
        <button type="button" disabled={!valid} onClick={ this.handleLogin }>Login</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin : (state) => dispatch(loginAction(state))
})

export default connect(null, mapDispatchToProps)(Login);