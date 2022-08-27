import React, { Component } from 'react'
import DrinkFavorito from './DrinkFavorito';
import Input from './Input';

export default class Form extends Component {
  
  render() {
    const { handleChange, nome, idade, drinkFavorito, porque, water } = this.props;
    return (
      <form>
        <fieldset>
              O que você mais bebe?
          <DrinkFavorito value={drinkFavorito} handleChange={handleChange} />
          <br></br>
          <br></br>
            Digite seu nome:
          <Input 
          value={nome}
          handleChange={handleChange}
          />
          <br></br>
          <br></br>
            Qual sua idade:
          <input
          name='idade'
          value={idade}
          onChange={handleChange}
          type='number'
          />
          <br></br>
          <br></br>
            Por qual motivo?
          <textarea 
          name='porque'
          value={porque}
          onChange={handleChange}
          type='textarea'
          />
          <br></br>
          <br></br>
        </fieldset>
        <fieldset>
            Você toma mais de dois litros de água por dia?
            <input
            name='water'
            value={water}
            onChange={handleChange}
            type='checkbox'
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
