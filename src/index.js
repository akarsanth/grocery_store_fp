import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter } from "react-router-dom";

// styles
import "./index.css";
import "./styles/bootstrap.css";
import "./styles/font-awesome.css";
import "./styles/style.css";
import "./styles/easy-responsive-tabs.css";
import "./styles/creditly.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
