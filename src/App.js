import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// import Players from './components/Players';
import PlayersWithMap from './components/PlayersWithMap';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <PlayersWithMap/>
      <Footer/>
    </div>
  );
}

export default App;
