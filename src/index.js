import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://91926ebe424b165d09968f1b3e0a77bf@o4509332960509952.ingest.de.sentry.io/4509332962279504",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0, // ou 0.2 en prod
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-cm7uc3kngn6txmbo.us.auth0.com"
      clientId="sEXWPhM0fsD06cZcWvQb0sPdxmbQxdnB"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
