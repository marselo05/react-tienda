import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
// import ItemCount from './components/ItemCount';
// import Category from './pages/Category';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
