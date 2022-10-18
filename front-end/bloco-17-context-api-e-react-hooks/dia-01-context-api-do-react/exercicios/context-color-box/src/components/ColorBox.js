import React from 'react';
import '../styles/box.css';
import MyContext from '../MyContext';

class ColorBox extends React.Component {
  render() {
    return(
      <MyContext.Consumer>
        {
        ({handleColor, payload}) => (
        <button
          type="button"
          className="box"
          style={ { backgroundColor: `${payload.color[payload.position]}` } }
          onClick={ handleColor }
        >
          Click me to change my color!
        </button>
        )
        }
      </MyContext.Consumer>
    )
  }
}
export default ColorBox;