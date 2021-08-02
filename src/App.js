import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount stock="5" initial="1" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tienda <strong>React Sport</strong>.
        </p>
      </header>
    </div>
  );
}

export default App;
