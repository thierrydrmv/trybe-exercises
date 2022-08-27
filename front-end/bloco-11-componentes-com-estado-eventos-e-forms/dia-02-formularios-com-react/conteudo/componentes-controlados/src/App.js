import React from 'react';
import './App.css';
import Form from './components/Form';

class App extends React.Component {
  state = {
    drinkFavorito: '',
    nome: '',
    idade: 0,
    porque: '',
    water: false,
    erros: true,
  }

  handleChange = ({target}) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value, }, () => {
      this.handleErrors();
    });
  }

  handleErrors = () => {
    const { nome, idade } = this.state;

    const errorCases = [
      nome.length > 5,
      idade >= 18,
    ]

    const rules = errorCases.every((err) => err === false)

    this.setState({
      erros: !rules,
    })
  }

  render () {
  return (
    <div>
      <h1>Estudo componentes de estado</h1>
      <Form { ...this.state } handleChange={this.handleChange} handleName={this.handleName}/>
    </div>
  );
  }
}


export default App;
