import React, { Component } from 'react'
import MyContext from './myContext'

const INITIAL_STATE = { position: 0,
  color: ['blue', 'red', 'yellow'] };

export default class Provider extends Component {
  state = INITIAL_STATE;

  changeColor = () => {
    const { position } = this.state;

    this.setState({ position: position === 2 ? 0 : position + 1 })
  }

  render() {
    const { children } = this.props;
    const contextValue = {
      payload: this.state,
      handleColor: this.changeColor,
    }
    return (
      <MyContext.Provider value={ contextValue }>
        {children}
      </MyContext.Provider>
    )
  }
}
