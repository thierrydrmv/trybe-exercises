import React, { Component } from 'react'

function food() {
  console.log('Pizza')
}

function drink() {
  console.log('Coca-cola')
}

function watch() {
  console.log('Filme')
}

export default class App extends Component {
  render() {
    return (
      <>
        <button onClick={food}>Hamburguer ou pizza?</button>
        <button onClick={drink}>Guaraná ou Coca-cola?</button>
        <button onClick={watch}>Filme ou Série?</button>
      </>
    )
  }
}
