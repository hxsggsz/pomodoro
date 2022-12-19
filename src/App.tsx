import { useOptions } from './context/optionsContext'
import { TimerEstude } from "./components/timer-estude/timer-estude";
import { Title } from "./styles/app";
import { TimerRelaxe } from "./components/timer-relaxe/timer-relaxe";
import { NavBar } from "./components/navigation/navbar";
import { Todo } from "./components/Todo/todo";

export default function App() {
  const { activeIndex } = useOptions()

  return (
    <>
      <Title>Pomodoro</Title>

      <NavBar />
      {activeIndex === 0 ? <TimerEstude /> : <TimerRelaxe />}

      <Title>Todo</Title>

      <Todo />

    </>
  )
}