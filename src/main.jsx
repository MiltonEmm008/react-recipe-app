import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import GlobalState from "./context/GlobalState.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <StrictMode>
      <GlobalState>
        <App />
      </GlobalState>
    </StrictMode>
  </HashRouter>
);
