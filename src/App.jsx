import Index from 'pages';
import GestionUsuarios from 'pages/GestionUsuarios';
import ListadoProductos from 'pages/ListadoProductos';
import GestionProductos from 'pages/GestionProductos';
import Ventas from 'pages/Ventas';
import ActualizarVentas from 'pages/ActualizarVentas'
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
          <Route path='/ventas'>
            <Ventas />
          </Route>
          <Route path='/actualizarVentas'>
            <ActualizarVentas />
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
