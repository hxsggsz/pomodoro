import { useOptions } from "./context/optionsContext";
import { TimerEstude } from "./components/timer-estude/timer-estude";
import * as style from "./styles/app";
import { TimerRelaxe } from "./components/timer-relaxe/timer-relaxe";
import { NavBar } from "./components/navigation/navbar";
import { Todo } from "./components/Todo/todo";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ColorModeContext } from "./context/ColorModeContex";
import { GlobalStyle } from "./styles/global";
import { RedTheme, GreyTheme } from "./styles/themes/themes";
import { motion } from "framer-motion";

export default function App() {
  const { activeIndex } = useOptions();
  const [activeOption, setActiveOption] = useState(0);
  const handleTheme = () => localStorage.getItem("currentTheme");
  const [allColorsTheme, setAllColorsTheme] = useState(
    handleTheme() || "GreyTheme"
  );
  const data = ["Pomodoro", "Break", "Config"];
  return (
    <>
      <ColorModeContext.Provider value={{ allColorsTheme, setAllColorsTheme }}>
        <ThemeProvider
          theme={allColorsTheme === "GreyTheme" ? GreyTheme : RedTheme}
        >
          <GlobalStyle />
          <style.Title>Pomodoro</style.Title>

          <NavBar />
          <style.MainCard>
            <style.TimerNav>
                {data.map((option, index) => (
                 
                    <span className="wrapper" key={index}
                    onClick={() => {
                      setActiveOption(index);
                      // localStorage.setItem("active", JSON.stringify(index));
                    }}>
                      {index === activeOption && <style.TimerEffect layoutId="background" />}

                      <style.TimerOption>{option}</style.TimerOption>
                    </span>
                ))}
            </style.TimerNav>
            {activeIndex === 0 ? <TimerEstude /> : <TimerRelaxe />}
          </style.MainCard>

          {/* <Todo /> */}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
