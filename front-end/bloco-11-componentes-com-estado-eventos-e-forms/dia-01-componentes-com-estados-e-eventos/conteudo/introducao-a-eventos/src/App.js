import React, { Component } from 'react'

export default class App extends Component {

  food = () => {
    console.log(this);
    console.log('Pizza')
  }
  
  drink = () => {
    console.log(this);
    console.log('Coca-cola')
  }
  
  watch = () => {
    console.log(this);
    console.log('Filme')
  }

  render() {
    return (
      <>
        <button onClick={this.food}>Hamburguer ou pizza?</button>
        <button onClick={this.drink}>Guaraná ou Coca-cola?</button>
        <button onClick={this.watch}>Filme ou Série?</button>
      </>
    )
  }
}
