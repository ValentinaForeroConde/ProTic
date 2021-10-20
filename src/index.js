import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css'

const domain = "dev-1k7j1s3x.us.auth0.com"
const clientId = "OZRfcM2n4eucThyEVcFlgmwmaIdWlGsd"


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId = {clientId}
    redirectUri="https://polar-earth-54202.herokuapp.com/Dashboard"
    audience='api-autentificacion-protic'
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
