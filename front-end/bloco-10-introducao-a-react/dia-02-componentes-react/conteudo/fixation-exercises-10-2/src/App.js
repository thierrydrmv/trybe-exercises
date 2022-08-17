import './App.css';
import Image from './Image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText= 'Cute cat staring,'/>
        <p>
          How did the Mom Cat know she was pregnant? Her test was pawsitive.
        </p>
      </header>
    </div>
  );
}

export default App;
