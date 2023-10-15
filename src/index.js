import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Include Bootstrap JavaScript
import { Auth0Provider } from '@auth0/auth0-react';

// Create a root using the new createRoot API
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-jg6ojosw0gzydbuu.us.auth0.com"
      clientId="jlANFGyLJdlleI3NOaffUvzaQ8okzApn"
      // Use authorizationParams.redirect_uri instead of redirectUri
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
