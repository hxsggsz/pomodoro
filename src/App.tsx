import { useOptions } from "./context/optionsContext";
import { TimerEstude } from "./components/timer-estude/timer-estude";
import * as style from "./styles/app";
import { TimerRelaxe } from "./components/timer-relaxe/timer-relaxe";
import { NavBar } from "./components/navigation/navbar";
import { Todo } from "./components/Todo/todo";
import { TimerNav } from "./components/timer-nav/timer-nav";
import { GlobalStyle } from "./styles/global";
import { Settings } from "./components/settings/settings";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const { activeTimer, activeIndex } = useOptions();

  return (
    <>
      <style.Title>Pomodoro</style.Title>

      <NavBar />
      <AnimatePresence>

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
        </AnimatePresence>
      <GlobalStyle />
    </>
  );
}
