import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { OptionsProvider } from "./context/optionsContext";
import { ThemesProvider } from "./context/ColorModeContex";
import { TodoProvider } from "./context/todoContext";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <TodoProvider>
      <ThemesProvider>
        <OptionsProvider>
          <App />
          <GlobalStyle />
        </OptionsProvider>
      </ThemesProvider>
    </TodoProvider>
  </>
);
