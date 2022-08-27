import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const { nome, handleChange } = this.props;
    return (
      <input 
      name='nome'
      value={nome}
      onChange={handleChange}
      type='text'
      />
    )
  }
}
