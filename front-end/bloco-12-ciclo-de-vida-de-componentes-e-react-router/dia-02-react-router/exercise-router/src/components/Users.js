// arquivo Users.js
import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage, match } = this.props
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component  with an Id: { match.params.id }</p>
      </div>
    );
  }
};

export default Users;
