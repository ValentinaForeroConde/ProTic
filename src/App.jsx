import Index from "pages/index";
import GestionUsuarios from "pages/GestionUsuarios";
import Ventas from "pages/Ventas";
import PublicLayout from "layouts/PublicLayout";
import PrivateLayout from "layouts/PrivateLayout";
import "styles/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import ActualizarProductos from "pages/ActualizarProductos";
import ActualizarVentas from "pages/ActualizarVentas";
import ListadoProductos from "pages/ListadoProductos";
import TablaGestionUsuarios from "pages/TablaGestionUsuarios";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path={[
              "/gestionUsuarios",
              "/ventas",
              "/ActualizarProductos",
              "/ActualizarVentas",
              "/Dashboard",
              "/ListadoProductos",
              "/TablaGestionUsuarios",
              "/editarUsuario/:id",
            ]}
          >
            <PrivateLayout>
              <Switch>
                <Route path="/ActualizarProductos">
                  <ActualizarProductos />
                </Route>
                <Route path="/ActualizarVentas">
                  <ActualizarVentas />
                </Route>
                <Route path="/gestionUsuarios">
                  <GestionUsuarios />
                </Route>
                <Route path="/ListadoProductos">
                  <ListadoProductos />
                </Route>
                <Route path="/ventas">
                  <Ventas />
                </Route>
                <Route path="/TablaGestionUsuarios">
                  <TablaGestionUsuarios />
                </Route>
                <Route path="/editarUsuario/:id">
                  <GestionUsuarios />
                </Route>
                <Route path="/Dashboard">
                  <Dashboard />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path="/">
            <PublicLayout>
              <Index />
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
