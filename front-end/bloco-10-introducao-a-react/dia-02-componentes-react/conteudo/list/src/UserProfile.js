import React, { Component } from 'react'
import Image from './Image';

export default class UserProfile extends Component {
  render() {
    const { id, name, email, avatar} = this.props.user;
    return (
      <div key={id}>
        <h1>{name}</h1>
        <p>{email}</p>
        <Image source={avatar} text='avatar'/>
        </div>
    )
  }
}
