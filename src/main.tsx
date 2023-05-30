import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { OptionsProvider } from "./context/optionsContext";
import { ThemesProvider } from "./context/ColorModeContex";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemesProvider>
      <OptionsProvider>
        <App />
      </OptionsProvider>
    </ThemesProvider>
  </React.StrictMode>
);
