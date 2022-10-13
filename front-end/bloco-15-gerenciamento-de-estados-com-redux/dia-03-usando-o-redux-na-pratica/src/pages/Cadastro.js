import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userAction } from '../redux/actions';

class Cadastro extends Component {

  state = {
    nome: '',
    idade: '',
    email: '',
  };

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  signUp = () => {
    const { dispatchClient } = this.props;
    dispatchClient(this.state);
    this.setState({
      nome: '',
      idade: '',
      email: '',
    })
  }

  redirect = () => {
    const { history } = this.props;
    history.push('clientes');
  }

  render() {
    const { loginEmail } = this.props;
    const { nome, idade, email } = this.state;
    return (
      <div>
        <h1>Cadastro</h1>
        {
          loginEmail ? (
              <div>
                <label htmlFor="name">
                  Nome:
                  <input
                    value={ nome }
                    type="text"
                    name="nome"
                    onChange={ this.handleChange }
                  />
                </label>

                <label>
                  Idade:
                  <input
                    type="number" 
                    name="idade" 
                    value={ idade }
                    onChange={ this.handleChange }
                  />
                </label>

                <label>
                  Email:
                  <input
                    type="email" 
                    name="email" 
                    value={ email }
                    onChange={ this.handleChange }
                  />
                </label>
                <button
                  type="button"
                  onClick={ this.signUp }
                >
                  Save
                </button>
                <div>
              <button type='button' onClick={this.redirect}>Clientes</button>
                </div>
              </div>
          ) : <p>Login não efetuado</p>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    loginEmail: state.reducer.email,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchClient: (state) => dispatch(userAction(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);