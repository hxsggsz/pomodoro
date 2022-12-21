import { GearSix, X } from "phosphor-react"
import { StyledTimer, StyledWrapButtons, StyledWrapper } from "."
import { useOptions } from "../../context/optionsContext"
import { motion } from "framer-motion"
import { useTimerRelax } from "../../hooks/useTimerRelax"
import { useState, FormEvent } from "react"
import { StyledForm, StyledSelection, StyledOption, StyledButton } from "../modal"
import { Modal } from "../modal/modal"
import { StyledOptions, StyledOptionOne, StyledOptionTwo } from "../timer-estude"
import { useColors } from "../../context/ColorModeContex"

export const TimerRelaxe = () => {
  const { tempoRelaxe, setTempoRelaxe } = useOptions()
  const [modal, setModal] = useState(false)
  const { allColorsTheme, setAllColorsTheme } = useColors()
  const { minutesRelax, secondsRelax, pauseRelax, handlePauseRelax, handleRestartRelax } = useTimerRelax(tempoRelaxe)

  function handleSubmitOptions(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    handleRestartRelax()
    setModal(false)

    allColorsTheme === 'GreyTheme' ? localStorage.setItem('currentTheme', 'GreyTheme') : localStorage.setItem('currentTheme', 'purpleTheme')
  }

  return (
    <StyledWrapper>

      <StyledTimer>


        <motion.p initial={{ y: -10 }} animate={{ y: 0 }} exit={{ y: -75 }} className='timer'>{minutesRelax && minutesRelax < 10 ? "0" + minutesRelax : minutesRelax} : {secondsRelax < 10 ? "0" + secondsRelax : secondsRelax}</motion.p>


        <StyledWrapButtons>

          <motion.button whileHover={{ opacity: 0.6, y: -2, }} whileTap={{ y: [4, -4, 4] }} transition={{ delay: 0.1, type: "spring" }} className="button" onClick={handlePauseRelax}>{pauseRelax ? 'Começar' : 'Pausar'}</motion.button>

          <motion.button whileHover={{ opacity: 0.6, y: -2, }} whileTap={{ y: [4, -4, 4] }} transition={{ delay: 0.1, type: "spring" }} className="button" onClick={handleRestartRelax}>Reiniciar</motion.button>

        </StyledWrapButtons>


        <motion.div onClick={() => setModal(true)} whileHover={{ rotate: 90 }} whileTap={{ rotate: 360, }} transition={{ duration: 1, type: "spring" }}>

          <GearSix className="gear" size={50} />

        </motion.div>

      </StyledTimer>

      {
        modal && (
          <Modal.Root>

            <Modal.Body>
              <Modal.Title>Opções🧷<Modal.Icon ><X onClick={() => setModal(false)} size={25} /></Modal.Icon></Modal.Title>

              <Modal.Content>
                <StyledForm onSubmit={handleSubmitOptions}>
                  <label htmlFor="select">Selecione um tempo</label>
                  <StyledSelection value={tempoRelaxe} onChange={(ev) => setTempoRelaxe(parseInt(ev.currentTarget.value))}>
                    <StyledOption value="10">10 minutos</StyledOption>
                    <StyledOption value="15">15 minutos</StyledOption>
                    <StyledOption value="20">20 minutos</StyledOption>
                  </StyledSelection>


                  <p>Escolha uma cor</p>

                  <StyledOptions>
                    <StyledOptionOne onClick={() => setAllColorsTheme('purpleTheme')} />

                    <StyledOptionTwo onClick={() => setAllColorsTheme('GreyTheme')} />
                  </StyledOptions>

                  <StyledButton whileHover={{ opacity: 0.8, y: -2, }} whileTap={{ y: [4, -4, 4] }} transition={{ delay: 0.1, type: "spring" }} type='submit'>enviar</StyledButton>

                </StyledForm>
              </Modal.Content>
            </Modal.Body>

          </Modal.Root>
        )
      }

    </StyledWrapper>
  )
}
