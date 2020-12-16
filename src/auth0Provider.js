import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-8l1uhjbp.eu.auth0.com"
    clientId="r7e6NYBSZWzQEWsQtGzJdbF1t51k3HNg"
    redirectUri="http://localhost:3000/"
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);