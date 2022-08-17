import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const list = ['Alongar', 'Ir para a academia', 'Alimentação saudável', 'Dormir cedo', 'Exercícios aeróbicos'];
  const createList = list.map(action => Task(action))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Atitudes para melhorar sua saúde:</h1>
        <ul className="list">
          {createList}
        </ul>
      </header>
    </div>
  );
}

export default App;
