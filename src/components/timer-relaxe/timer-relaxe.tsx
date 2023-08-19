import {
  ClockCounterClockwise,
  HandPalm,
  Play,
} from "phosphor-react";
import { StyledTimer, StyledWrapButtons } from ".";
import { useTimer } from "../../hooks/useTimer";
import { Button } from "../button/button";

export const TimerRelaxe = () => {
  const { minutes, seconds, pause, handlePause, handleRestart } = useTimer(
    "timer-relax",
    10
  )

  return (
    <StyledTimer>
      <p className="timer"
      >
        {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}
      </p>

      <StyledWrapButtons>
        <Button onClick={handlePause}>
          {pause ? (
            <>
              <Play size={24} weight="fill" />
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
  );
};
