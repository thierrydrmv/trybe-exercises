import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const { nome, handleChange } = this.props;
    return (
    <label htmlFor="nome">
      <input 
      name='nome'
      value={nome}
      onChange={handleChange}
      type='text'
      />
      { nome.length < 5 ? "nome muito curto" : "aprovado" }
    </label>
    )
  }
}
