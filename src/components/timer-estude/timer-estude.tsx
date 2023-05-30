import { StyledTimer, StyledWrapButtons } from "."
import { motion } from "framer-motion"
import {
  ClockCounterClockwise,
  HandPalm,
  Play,
} from "phosphor-react"
import { useTimer } from "../../hooks/useTimer"
import { Button } from "../button/button"

export const TimerEstude = () => {
  const { minutes, seconds, pause, handlePause, handleRestart } = useTimer(
    "timer",
    25
  )

  return (
    <StyledTimer>
      <motion.p
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        exit={{ y: -75 }}
        className="timer"
      >
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </motion.p>

      <StyledWrapButtons>
        <Button onClick={handlePause}>
          {pause ? (
            <>
              <Play size={24} weight="bold" />
              Start
            </>
          ) : (
            <>
              <HandPalm size={24} weight="bold" />
              Stop
            </>
          )}
        </Button>

        <Button onClick={handleRestart}>
          <ClockCounterClockwise size={24} weight="bold" />
          Restart
        </Button>
      </StyledWrapButtons>
    </StyledTimer>
  )
}
