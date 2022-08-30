import './App.css';
import {Component} from 'react';

class App extends Component{

state = {
  data: [],
  loading: true,
}

fetchData = async () => {
  const request = await fetch('https://api.randomuser.me/ ')
  const data = await request.json();
  this.setState({
    data: data.results,
    loading: false })
}

componentDidMount = () => {
  this.fetchData();
}

shouldComponentUpdate = (_, nextState) => {
  const { data } = nextState;
  let bool = true
  data.map(({dob: {age}}) => {
    age < 50 ? bool = true : bool = false
    return bool
  })
  return bool;
}

render () {
  const { data, loading } = this.state;
  return (
    <>
      { loading ? <p>Loading...</p> : data.map(({picture : { medium }, name, email, dob, id}) => 
        <div key={ id.value }>
      <img src={ medium } alt={name.first} />
      <p> {`${ name.first} ${ name.last}`} </p>
      <p>{ email }</p>
      <p>{ dob.age }</p>
      </div>
      )
    }
    </>
  );
}
}
export default App;
