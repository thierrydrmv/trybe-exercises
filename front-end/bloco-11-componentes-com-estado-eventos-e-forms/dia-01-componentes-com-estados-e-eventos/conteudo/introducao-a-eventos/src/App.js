import React, { Component } from 'react'

export default class App extends Component {

  state = {
    clickFood: 0,
    clickDrink: 0,
    clickWatch: 0
  }

  food = () => {
    this.setState((before, _props) => ({
      clickFood:before.clickFood + 1}), () => {
        console.log(this.color(this.state.clickFood))
      })
    console.log(this);
    console.log('Pizza')
  }
  
  drink = () => {
    this.setState((before, _props) => ({
      clickDrink:before.clickDrink + 1}), () => {
        console.log(this.color(this.state.clickDrink))
      })
    console.log(this);
    console.log('Coca-cola')
  }
  
  watch = () => {
    this.setState((before, _props) => ({
      clickWatch:before.clickWatch + 1}), () => {
        console.log(this.color(this.state.clickWatch))
      })
    console.log(this);
    console.log('Filme')
  }

  color = (value) => {
    return (value%2===0) ? 'green' : 'red';
  }

  render() {
    const {clickDrink, clickFood, clickWatch} = this.state;
    return (
      <>
        <button style={{backgroundColor: this.color(clickFood)}} onClick={this.food}>Hamburguer ou pizza?</button>
        <button style={{backgroundColor: this.color(clickDrink)}} onClick={this.drink}>Guaraná ou Coca-cola?</button>
        <button style={{backgroundColor: this.color(clickWatch)}} onClick={this.watch}>Filme ou Série?</button>
      </>
    )
  }
}
