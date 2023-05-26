import {
  StyledOptionOne,
  StyledOptionTwo,
  StyledOptions,
  StyledTimer,
  StyledWrapButtons,
  StyledWrapper,
} from '.'
import { AnimatePresence, motion } from 'framer-motion'
import { GearSix, X } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { useColors } from '../../context/ColorModeContex'
import { useOptions } from '../../context/optionsContext'
import { useTimer } from '../../hooks/useTimer'
import {
  StyledButton,
  StyledForm,
  StyledOption,
  StyledSelection,
} from '../modal'
import { Modal } from '../modal/modal'

export const TimerEstude = () => {
  const [modal, setModal] = useState(false)
  const { tempoEstude, setTempoEstude } = useOptions()
  const { allColorsTheme, setAllColorsTheme } = useColors()
  const { minutes, seconds, pause, handlePause, handleRestart } =
    useTimer(tempoEstude)

  function handleSubmitOptions(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    handleRestart()
    setModal(false)

    allColorsTheme === 'GreyTheme'
      ? localStorage.setItem('currentTheme', 'GreyTheme')
      : localStorage.setItem('currentTheme', 'purpleTheme')
  }

  return (
    <StyledWrapper>
      <StyledTimer>
        <motion.p
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          exit={{ y: -75 }}
          className="timer"
        >
          {minutes && minutes < 10 ? `0${minutes}` : minutes} :{' '}
          {seconds < 10 ? `0${seconds}` : seconds}
        </motion.p>

        <StyledWrapButtons>
          <motion.button
            whileHover={{ opacity: 0.6, y: -2 }}
            whileTap={{ y: [4, -4, 4] }}
            transition={{ delay: 0.1, type: 'spring' }}
            className="button"
            onClick={handlePause}
          >
            {pause ? 'Começar' : 'Pausar'}
          </motion.button>

          <motion.button
            whileHover={{ opacity: 0.6, y: -2 }}
            whileTap={{ y: [4, -4, 4] }}
            transition={{ delay: 0.1, type: 'spring' }}
            className="button"
            onClick={handleRestart}
          >
            Reiniciar
          </motion.button>
        </StyledWrapButtons>

        <motion.div
          whileHover={{ rotate: 90 }}
          whileTap={{ rotate: 360 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <GearSix
            data-testid="gear-test"
            onClick={() => setModal(!modal)}
            className="gear"
            size={50}
          />
        </motion.div>
      </StyledTimer>
      <AnimatePresence>
        {modal && (
          <Modal.Root>
            <Modal.Body>
              <Modal.Title>
                Opções🧷
                <Modal.Icon onClick={() => setModal(false)}>
                  <X size={25} />
                </Modal.Icon>
              </Modal.Title>

              <Modal.Content>
                <StyledForm onSubmit={handleSubmitOptions}>
                  <label htmlFor="select">Selecione um tempo</label>
                  <StyledSelection
                    value={tempoEstude}
                    onChange={(ev) =>
                      setTempoEstude(parseInt(ev.currentTarget.value))
                    }
                  >
                    <StyledOption value="25">25 minutos</StyledOption>
                    <StyledOption value="50">50 minutos</StyledOption>
                    <StyledOption value="60">1 hora</StyledOption>
                  </StyledSelection>

                  <p>Escolha uma cor</p>

                  <StyledOptions>
                    <StyledOptionOne
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9, y: [0, -4, 4, 0] }}
                      onClick={() => setAllColorsTheme('purpleTheme')}
                    />

                    <StyledOptionTwo
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9, y: [0, -4, 4, 0] }}
                      onClick={() => setAllColorsTheme('GreyTheme')}
                    />
                  </StyledOptions>

                  <StyledButton
                    whileHover={{ opacity: 0.8, y: -2 }}
                    whileTap={{ y: [4, -4, 4] }}
                    transition={{ delay: 0.1, type: 'spring' }}
                    value={'1'}
                    type="submit"
                  >
                    enviar
                  </StyledButton>
                </StyledForm>
              </Modal.Content>
            </Modal.Body>
          </Modal.Root>
        )}
      </AnimatePresence>
    </StyledWrapper>
  )
}
