import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import ToDoApp from "./ToDoApp.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ToDoApp />
    </StrictMode>
  </BrowserRouter>
);
