import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="votre-domaine.auth0.com" // Remplacez par votre domaine Auth0
    clientId="votre-client-id" // Remplacez par votre client ID Auth0
    authorizationParams={{
      redirect_uri: window.location.origin + "/home", // Redirige vers /home après connexion
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
