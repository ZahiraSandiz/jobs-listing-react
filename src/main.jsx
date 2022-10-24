import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />

    <App />
  </React.StrictMode>
);
