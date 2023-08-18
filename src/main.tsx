import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { OptionsProvider } from "./context/optionsContext";
import { ThemesProvider } from "./context/ColorModeContex";
import { TodoProvider } from "./context/todoContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <ThemesProvider>
        <OptionsProvider>
          <App />
        </OptionsProvider>
      </ThemesProvider>
    </TodoProvider>
  </React.StrictMode>
);
