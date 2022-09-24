import './App.css';
import Navigation from './components/Navigation';
//import Main from './components/Main';
import Footer from './components/Footer';
// import Players from './components/Players';
import PlayersWithMap from './components/PlayersWithMap';
import { ThemeContext } from './components/ThemeContext';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <PlayersWithMap/>
      <Footer/>, 
    </div>
  );
}

export default App;
