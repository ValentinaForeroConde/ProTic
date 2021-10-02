import Index from 'pages';
import GestionUsuarios from 'pages/GestionUsuarios';
import GestionProductos from 'pages/GestionProductos';
import Ventas from 'pages/Ventas';
import ActualizarVentas from 'pages/ActualizarVentas';
import TablaGestionUsuarios from 'pages/TablaGestionUsuarios';
import 'styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ActualizarProductos from 'pages/ActualizarProductos';
import ListadoProductos from 'pages/ListadoProductos'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/gestionUsuarios'>
            <GestionUsuarios />
          </Route>
          <Route path='/tablaGestionUsuarios'>
            <TablaGestionUsuarios />
          </Route>
          <Route path='/ventas'>
            <Ventas />
          </Route>
          <Route path='/actualizarVentas'>
            <ActualizarVentas />
          </Route>
          <Route path='/actualizarProductos'>
            <ActualizarProductos />
          </Route>
            <Route path='/gestionProductos'>
            <GestionProductos />
          </Route>
          <Route path='/listadoProductos'>
            <ListadoProductos />
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
