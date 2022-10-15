import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { plusClick, minusClick} from '../redux/actions';

class ButtonClicks extends React.Component {
  render() {
    const { plus, minus } = this.props;
    return (
      <div>
        <button type="button" data-testid="plus" onClick={plus}>
          +
        </button>
        <button type="button" data-testid="minus" onClick={minus}>
          -
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  plus: () => dispatch(plusClick()),
  minus: () => dispatch(minusClick()),
});

ButtonClicks.propTypes = {
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ButtonClicks);