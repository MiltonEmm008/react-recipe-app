import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import GlobalState from "./context/GlobalState.jsx";

//Use hashrouter
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <GlobalState>
        <App />
      </GlobalState>
    </StrictMode>
  </BrowserRouter>
);
