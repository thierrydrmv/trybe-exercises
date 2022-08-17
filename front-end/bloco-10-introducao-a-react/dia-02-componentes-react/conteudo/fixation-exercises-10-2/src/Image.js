import React from 'react';
import './App.css';

class Image extends React.Component {
  render() {
    return <img className='Cat' src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;