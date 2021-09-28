import Index from 'pages';
import GestionUsuarios from 'pages/GestionUsuarios';
import GestionVentas from 'pages/GestionVentas';
import GestionProductos from 'pages/GestionProductos';
import 'styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/gestionUsuarios'>
            <GestionUsuarios />
          </Route>
          <Route path='/gestionVentas'>
            <GestionVentas />
          </Route>
          <Route path='/gestionProductos'>
            <GestionProductos />
          </Route>
          <Route path=''>
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
