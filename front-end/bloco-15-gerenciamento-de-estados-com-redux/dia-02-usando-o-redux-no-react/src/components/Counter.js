import React, { Component } from 'react';
import { connect } from 'react-redux';
import { counterAction, counterMinus } from '../redux/actions';

class Counter extends Component {
  render() {
    const { counter, plus, minus } = this.props;
    return (
      <div>
        <button type='button' onClick={plus}>+</button>
        <p>{counter}</p>
        <button type='button' onClick={minus}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer.count,
})

const mapDispatchToProps = (dispatch) => ({
  plus: (state) => dispatch(counterAction(state)),
  minus: (state) => dispatch(counterMinus(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
