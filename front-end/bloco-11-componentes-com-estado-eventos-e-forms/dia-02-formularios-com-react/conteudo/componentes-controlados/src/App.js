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
  }

  handleChange = ({target}) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value, });
  }

  render () {
  return (
    <div>
      <h1>Estudo componentes de estado</h1>
      <Form objectState={ this.state } handleChange={this.handleChange} />
    </div>
  );
  }
}


export default App;
