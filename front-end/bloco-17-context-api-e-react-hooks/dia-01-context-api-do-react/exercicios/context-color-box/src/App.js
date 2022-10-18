import React from 'react';
import ColorBox from './components/ColorBox';
import MyContext from './MyContext';

class App extends React.Component {

  state = {
    position: 0,
    color: ['blue', 'red', 'yellow']
  }

  changeColor = () => {
    const { position } = this.state;

    this.setState({ position: position === 2 ? 0 : position + 1 })
  }

  render() {
    const contextValue = {
      payload: this.state,
      handleColor: this.changeColor,
    }
    return (
      <MyContext.Provider value={ contextValue }>
        <ColorBox />
      </MyContext.Provider>
    );
  }
}
export default App;