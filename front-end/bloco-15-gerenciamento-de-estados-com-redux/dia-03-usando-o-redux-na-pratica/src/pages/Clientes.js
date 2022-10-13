import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clientes extends Component {
  redirectCadastro = () => {
    const { history } = this.props;
    history.push('/cadastro')
  }
  render() {
    const { users, email } = this.props;
    return (
      <div>
        <h1>Clientes</h1>
        {
          email ? (
            <>
              { users.length ? (
                <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Email</th>
                  </tr>
                </thead>
              <tbody> {
              users.map(({nome, idade, email}, index) => (
                <tr key={index}>
                    <td>{nome}</td>
                    <td>{idade}</td>
                    <td>{email}</td>
                </tr>)
              )
            }
              </tbody>
              </table>
            ) : <span>Nenhum cliente cadastrado</span> }
              <button type='button' onClick={this.redirectCadastro}>Cadastrar</button>
            </>
          ) : <p>Login não efetuado</p>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.reducer.users,
    email: state.reducer.email,
  }
}

export default connect(mapStateToProps)(Clientes);