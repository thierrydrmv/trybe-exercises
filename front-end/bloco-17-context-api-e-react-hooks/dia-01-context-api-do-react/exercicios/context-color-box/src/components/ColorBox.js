import React from 'react';
import '../styles/box.css';
import MyContext from '../context/myContext';

class ColorBox extends React.Component {
  render() {
    const { handleColor, payload } = this.context;
    return(
      // <MyContext.Consumer>
      //   {
      //   ({handleColor, payload}) => (
        <button
          type="button"
          className="box"
          style={ { backgroundColor: `${payload.color[payload.position]}` } }
          onClick={ handleColor }
        >
          Click me to change my color!
        </button>
        )
        // }
    //   </MyContext.Consumer>
    // )
  }
}

ColorBox.contextType = MyContext;

export default ColorBox;