import React, { Component } from 'react'
import { connect } from 'react-redux';
import thunkAction from './redux/actions';

class App extends Component {
  state = {
    option: 'reactjs',
  }

  componentDidMount() {
    this.refresh()
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    const { dispatchTecnology } = this.props;
    this.setState({[name]: value}, () => {
      dispatchTecnology(value)
    })
  }

  refresh = () => {
    const { option } = this.state
    const { dispatchTecnology } = this.props;
    dispatchTecnology(option)
  }

  render() {
    const { option } = this.state;
    const { loading, data } = this.props;
    return (
      <div>
        <form>
          <select onChange={this.handleChange} value={option} name='option'>
            <option value='reactjs'>reactjs</option>
            <option value='frontend'>frontend</option>
          </select>
          <button type='button' onClick={this.refresh}>Refresh</button>
        </form>
        { loading ? <h1>LOADING</h1> : 
        <> { data.map(({title}, i) => <p key={i}>{title}</p>) } </> }
      </div>
    )
  }
}

const mapStateToProps = ({redditReducer : { loading, data}}) => ({
  loading,
  data,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchTecnology: (state) => dispatch(thunkAction(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
