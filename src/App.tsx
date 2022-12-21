import { useOptions } from './context/optionsContext'
import { TimerEstude } from "./components/timer-estude/timer-estude";
import { Title, WrapperInfo } from "./styles/app";
import { TimerRelaxe } from "./components/timer-relaxe/timer-relaxe";
import { NavBar } from "./components/navigation/navbar";
import { Todo } from "./components/Todo/todo";
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ColorModeContext } from './context/ColorModeContex';
import { GlobalStyle } from './styles/global';
import { RedTheme } from './styles/themes/themes';
import { GreyTheme } from './styles/themes/themes';
import { motion } from 'framer-motion';
import { Modal } from './components/modal/modal';
import { X } from 'phosphor-react';

export default function App() {
  const { activeIndex } = useOptions()
  const [modal, setModal] = useState(true)
  const handleTheme = () => localStorage.getItem('currentTheme')
  const [allColorsTheme, setAllColorsTheme] = useState(handleTheme() || 'GreyTheme')

  return (
    <>
      <ColorModeContext.Provider value={{ allColorsTheme, setAllColorsTheme }}>
        <ThemeProvider theme={allColorsTheme === 'GreyTheme' ? GreyTheme : RedTheme}>
          <GlobalStyle />
          <Title>Pomodoro</Title>

          <NavBar />
          {activeIndex === 0 ? <TimerEstude /> : <TimerRelaxe />}

          <Title>Todo</Title>

          <Todo />
          <WrapperInfo>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, rotate: 360 }} className='InfoButton' onClick={() => setModal(true)}>{modal ? 'x' : '?'}</motion.button>

            {modal && (
              <Modal.Root>
                <Modal.Body>

                  <Modal.Title>O que é Pomodoro? ✍ <Modal.Icon><X onClick={() => setModal(false)} size={25} /></Modal.Icon></Modal.Title>

                  <Modal.Content>
                    O método Pomodoro é simples e dura duas horas. Primeiro, você realiza uma atividade durante 25 minutos. Quando acabar o tempo, descansa 5 minutos. Assim sucessivamente até que complete as duas horas. Como recompensa, você descansa mais 30 minutos.

                    A técnica Pomodoro é muito usada por pessoas procrastinadoras
                    O conceito do Pomodoro é que a pessoa que vai estudar ou executar uma tarefa demore, exatamente, 25 minutos. Concluindo-a ou não, ele deve parar e descansar 5 minutos.
                  </Modal.Content>
                </Modal.Body>
              </Modal.Root>
            )}

          </WrapperInfo>

        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}