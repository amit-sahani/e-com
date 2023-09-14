import { BrowserRouter } from "react-router-dom";
import Router from "./utils/Router";
import ProductContext from "./contexts/ProductContext";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <div className="App">
      <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN }
        clientId={process.env.REACT_APP_CLIENT}
        redirectUri={window.location.origin}
      >
        <ProductContext>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ProductContext>
      </Auth0Provider>
    </div>
  );
}

export default App;
