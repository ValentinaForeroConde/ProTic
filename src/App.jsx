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
import { Auth0Provider } from "@auth0/auth0-react";
function App() {
  return (
  
    <Auth0Provider
    domain="protic.us.auth0.com"
    clientId="TRzeRVZrK9oTBxYwvXwLGZvFyDp9enSK"
    redirectUri={window.location.origin}
  >
    <div className="App">
      <Router>
        <Switch>
          <Route
            path={[
              "/gestionUsuarios",
              "/ventas",
              "/CrearProductos",
              "/ActualizarVentas",
              "/Dashboard",
              "/ListadoProductos",
              "/TablaGestionUsuarios",
              "/editarUsuario/:id",
            ]}
          >
            <PrivateLayout>
              <Switch>
                <Route path="/CrearProductos">
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

    </Auth0Provider>
 
  );
}

export default App;
