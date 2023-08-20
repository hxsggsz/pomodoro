import { AnimatePresence } from "framer-motion";
import { Todo } from "./components/Todo/todo";
import { NavBar } from "./components/navigation/navbar";
import { Settings } from "../components/settings/settings";
import { TimerEstude } from "../components/timer-estude/timer-estude";
import { TimerNav } from "../components/timer-nav/timer-nav";
import { TimerRelaxe } from "../components/timer-relaxe/timer-relaxe";
import * as style from "../styles/app";
import { useOptions } from "../context/optionsContext";
import { Footer } from "./components/footer/footer";
import { useColors } from "../context/ColorModeContex";

export const Home = () => {
  const { activeTimer, activeIndex } = useOptions();
  const { handleTheme } = useColors();
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
              <Settings handleTheme={handleTheme} />
            )}
          </style.MainCard>
        ) : (
          <Todo />
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
};
