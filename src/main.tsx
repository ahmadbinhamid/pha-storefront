import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Always light mode — strip any previously stored theme
document.documentElement.classList.remove("dark");
localStorage.removeItem("pha-theme");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
