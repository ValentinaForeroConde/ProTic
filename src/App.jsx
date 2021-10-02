import Index from "pages/Index";
import GestionUsuarios from "pages/GestionUsuarios";
import Ventas from "pages/Ventas";
import PublicLayout from "layouts/PublicLayout";
import PrivateLayout from "layouts/PrivateLayout";
import "styles/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={["/gestionUsuarios", "/ventas","/Dashboard",
          "/ActualizarProductos","/ActualizarVentas","/GestionProductos","/GestionVentas","/ListadoProductos","/TablaGestionUsuarios"]}>
            <PrivateLayout>
              <Switch>
                <Route path="/gestionUsuarios">
                  <GestionUsuarios />
                </Route>
                <Route path="/ventas">
                  <Ventas />
                </Route>
                <Route path="/ActualizarProductos">
                  <ActualizarProductos />
                </Route>
                <Route path="/ActualizarVentas">
                  <ActualizarVentas />
                </Route>
                <Route path="/GestionProductos">
                  <GestionProductos />
                </Route>
                <Route path="/GestionVentas">
                  <Dashboard />
                </Route>
                <Route path="/ListadoProductos">
                  <ListadoProductos />
                </Route>
                <Route path="/TablaGestionUsuarios">
                  <TablaGestionUsuarios />
                </Route>
                <Route path="/Dashboard">
                  <Dashboard />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path="">
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
