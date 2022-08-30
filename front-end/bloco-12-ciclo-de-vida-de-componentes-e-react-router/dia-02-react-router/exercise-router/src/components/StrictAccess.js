import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export default class StrictAccess extends Component {

  render() {
    const { user } = this.props;
    const login = user.username = 'joao' && user.password === '1234';
    return (
      <div>
        {login ? <p>Welcome joao!</p> : <Redirect alert={alert('Access denied')} to="/" /> }
      </div>
    )
  }
}
