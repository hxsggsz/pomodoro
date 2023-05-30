import { useOptions } from "./context/optionsContext";
import { TimerEstude } from "./components/timer-estude/timer-estude";
import * as style from "./styles/app";
import { TimerRelaxe } from "./components/timer-relaxe/timer-relaxe";
import { NavBar } from "./components/navigation/navbar";
import { Todo } from "./components/Todo/todo";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ColorModeContext } from "./context/ColorModeContex";
import { RedTheme, GreyTheme } from "./styles/themes/themes";
import { TimerNav } from "./components/timer-nav/timer-nav";
import { GlobalStyle } from "./styles/global";
import { Settings } from "./components/settings/settings";

export default function App() {
  const { activeTimer, activeIndex } = useOptions();
  const handleTheme = () => localStorage.getItem("currentTheme");
  const [allColorsTheme, setAllColorsTheme] = useState(
    handleTheme() || "GreyTheme"
  );

  return (
    <>
      <style.Title>Pomodoro</style.Title>

      <NavBar />
      {activeIndex === 0 ? (
        <style.MainCard>
          <TimerNav />

          {activeTimer === 0 ? (
            <TimerEstude />
          ) : activeTimer === 1 ? (
            <TimerRelaxe />
          ) : (
            <Settings />
          )}
        </style.MainCard>
      ) : (
        <Todo />
      )}
      <GlobalStyle />
    </>
  );
}
