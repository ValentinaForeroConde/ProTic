import Index from 'pages/Index';
import GestionUsuarios from 'pages/GestionUsuarios';
import Ventas from 'pages/Ventas';
import PublicLayout from 'layouts/PublicLayout';
import 'styles/styles.css';
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
          <Route path=''>
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
