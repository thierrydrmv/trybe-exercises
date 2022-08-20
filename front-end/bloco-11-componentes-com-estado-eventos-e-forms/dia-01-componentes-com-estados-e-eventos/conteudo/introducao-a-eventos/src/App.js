import React, { Component } from 'react'

export default class App extends Component {

  state = {
    clickFood: 0,
    clickDrink: 0,
    clickWatch: 0
  }

  food = () => {
    this.setState((before, _props) => ({
      clickFood:before.clickFood + 1}))
    console.log(this);
    console.log('Pizza')
  }
  
  drink = () => {
    this.setState((before, _props) => ({
      clickDrink:before.clickDrink + 1}))
    console.log(this);
    console.log('Coca-cola')
  }
  
  watch = () => {
    this.setState((before, _props) => ({
      clickWatch:before.clickWatch + 1}))
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
