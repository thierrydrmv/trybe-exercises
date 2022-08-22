import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    nome: '',
    idade: 0,
    porque: '',
    drinkFavorito: '',
  }

  handleInputChange = (event) => {
    this.setState({ nome: event.target.value })
  }

  render() {
    const { nome } = this.state;
    return (
      <form>
        <label>
            O que você mais bebe?
        </label>
        <select name='drinkFavorito'>
          <option value="cerveja">Cerveja</option>
          <option value="refrigerante">Refrigerante</option>
          <option value="energetico">Energético</option>
        </select>
        <br></br>
        <br></br>
        <label>
          Digite seu nome:
        <input 
        name='nome'
        value={nome}
        onChange={this.handleInputChange}
        type='text'
        />
        </label>
        <br></br>
        <br></br>
        <label>
          Qual sua idade:
        <input name='idade' type='number'/>
        </label>
        <br></br>
        <br></br>
        <label>
          Por qual motivo?
        <textarea name='porque'/>
        </label>
      </form>
    )
  }
}
