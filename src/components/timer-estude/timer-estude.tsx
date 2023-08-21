import { StyledTimer, StyledWrapButtons } from ".";
import { ClockCounterClockwise, HandPalm, Play } from "phosphor-react";
import { useTimer } from "../../hooks/useTimer";
import { Button } from "../button/button";
import { useTranslation } from "react-i18next";

export const TimerEstude = () => {
  const { t } = useTranslation();
  const { minutes, seconds, pause, handlePause, handleRestart } = useTimer(
    "timer",
    25
  );

  return (
    <StyledTimer>
      <p className="timer">
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>

      <StyledWrapButtons>
        <Button onClick={handlePause}>
          {pause ? (
            <>
              <Play size={24} weight="fill" />
              {t("start")}
            </>
          ) : (
            <>
              <HandPalm size={24} weight="bold" />
              {t("stop")}
            </>
          )}
        </Button>

        <Button onClick={handleRestart}>
          <ClockCounterClockwise size={24} weight="bold" />
          {t("restart")}
        </Button>
      </StyledWrapButtons>
    </StyledTimer>
  );
};
