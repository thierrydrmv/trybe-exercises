import { Component } from 'react';
import './App.css';
import ValidEmail from './components/ValidEmail';

class App extends Component{
  state={
    email: '',
    saveEmail: '',
  }

  changeEmail = (value) => {
    this.setState({email: value})
  }

  changeSaveEmail = (value) => {
    this.setState({
      saveEmail: value,
      email: '',
      emailValid: true,
    })
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor='id-email'>
          Email
          <input id="id-email" value={email} type="email" onChange={({ target }) => {this.changeEmail(target.value)}}/> 
        </label>
        <input
          id='btn-enviar'
          type='button'
          data-testid='id-send'
          value="enviar"
          onClick={ () => this.changeSaveEmail(email)}
        />
        <input id='btn-id' type='button' value='voltar' />
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}

export default App;
