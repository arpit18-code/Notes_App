import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AllNotesProvider from "./Context/AllNotes/allNotesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AllNotesProvider>
        <App />
      </AllNotesProvider>
    </BrowserRouter>
  </StrictMode>,
);
