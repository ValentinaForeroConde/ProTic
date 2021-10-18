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
import { UserContext } from "context/UserContext";
import { useState } from "react";
import PrivateRoute from "components/PrivateRoute";

function App() {
  const [userData, setUserData] = useState({});
  return (
    <UserContext.Provider  value={{ userData, setUserData }}>
      <div className="App">
        <Router>
          <Switch>
            <Route
              path={[
                "/gestionUsuarios",
                "/ventas",
                "/CrearProductos",
                "/CrearVentas",
                "/ActualizarVentas",
                "/Dashboard",
                "/ListadoProductos",
                "/TablaGestionUsuarios",
                "/editarUsuario/:id",
                "/editarProductos/:id",
              ]}
            >
              <PrivateLayout>
                <Switch>
                  <Route path="/CrearProductos">
                    <PrivateRoute roleList={['Administrador']}>
                      <ActualizarProductos />
                    </PrivateRoute>
                  </Route>
                  <Route path="/ActualizarVentas/:id">
                    <ActualizarVentas />
                  </Route>
                  <Route path="/CrearVentas">
                    <ActualizarVentas />
                  </Route>
                  <Route path="/gestionUsuarios">
                    <PrivateRoute roleList={['Autorizado']}>
                      <GestionUsuarios />
                    </PrivateRoute>
                  </Route>
                  <Route path="/ListadoProductos">
                    <PrivateRoute roleList={['Autorizado']}>
                      <ListadoProductos />
                    </PrivateRoute>
                  </Route>
                  <Route path="/ventas">
                    <PrivateRoute roleList={['Autorizado']}>
                      <Ventas />
                    </PrivateRoute>
                  </Route>
                  <Route path="/TablaGestionUsuarios">
                  <PrivateRoute roleList={['Autorizado']}>
                    <TablaGestionUsuarios />
                  </PrivateRoute>
                  </Route>
                  <Route path="/editarUsuario/:id">
                    <GestionUsuarios />
                  </Route>
                  <Route path="/editarProductos/:id">
                    <ActualizarProductos />
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
    </UserContext.Provider>
  );
}

export default App;
