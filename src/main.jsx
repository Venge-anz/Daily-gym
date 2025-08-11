import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import ToDoApp from "./ToDoApp.jsx";
import { AppProviders } from "./providers/AppProviders.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppProviders>
        <ToDoApp />
      </AppProviders>
    </BrowserRouter>
  </StrictMode>
);
