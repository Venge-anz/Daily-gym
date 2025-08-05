import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import ToDoApp from "./ToDoApp.jsx";
import { AppProviders } from "./providers/AppProviders.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AppProviders>
        <ToDoApp />
      </AppProviders>
    </StrictMode>
  </BrowserRouter>
);
