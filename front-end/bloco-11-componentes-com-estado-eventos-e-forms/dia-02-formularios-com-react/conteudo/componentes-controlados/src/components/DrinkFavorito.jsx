import React, { Component } from 'react'

export default class DrinkFavorito extends Component {
  render() {
    const { handleChange, drinkFavorito } = this.props;
    return (
          <select
          name='drinkFavorito'
          value={drinkFavorito}
          onChange={handleChange}>
            <option value="cerveja">Cerveja</option>
            <option value="energetico">Energético</option>
            <option value="refrigerante">Refrigerante</option>
          </select>
    )
  }
}
