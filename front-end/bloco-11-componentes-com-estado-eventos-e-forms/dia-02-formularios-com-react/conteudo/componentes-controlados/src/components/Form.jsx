import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    nome: '',
    idade: 0,
    porque: '',
    drinkFavorito: '',
    water: false,
  }

  handleChange = ({target}) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value, });
  }

  render() {
    const { nome, idade, porque, drinkFavorito, water } = this.state;
    return (
      <form>
        <fieldset>
              O que você mais bebe?
          <select
          name='drinkFavorito'
          value={drinkFavorito}
          onChange={this.handleChange}>
            <option value="cerveja">Cerveja</option>
            <option value="refrigerante">Refrigerante</option>
            <option value="energetico">Energético</option>
          </select>
          <br></br>
          <br></br>
            Digite seu nome:
          <input 
          name='nome'
          value={nome}
          onChange={this.handleChange}
          type='text'
          />
          <br></br>
          <br></br>
            Qual sua idade:
          <input
          name='idade'
          value={idade}
          onChange={this.handleChange}
          type='number'
          />
          <br></br>
          <br></br>
            Por qual motivo?
          <textarea 
          name='porque'
          value={porque}
          type='textarea'
          onChange={this.handleChange}
          />
          <br></br>
          <br></br>
        </fieldset>
        <fieldset>
            Você toma mais de dois litros de água por dia?
            <input
            name='water'
            value={water}
            type='checkbox'
            onChange={this.handleChange}
            />
          <br></br>
          <br></br>
            Envie uma foto sua
            <br></br>
          <input
          type="file"
          />
          </fieldset>
      </form>
    )
  }
}
