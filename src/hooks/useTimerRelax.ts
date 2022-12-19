import { useState, useRef, useEffect } from "react";

export const useTimerRelax = (minutosRelax: number) => {
  const getMinutesRelax = () => {
    let minutesRelax = localStorage.getItem("minutesRelax");

    if (minutesRelax) {
      return JSON.parse(minutesRelax);
    }
    return 0;
  };

  const getSecondsRelax = () => {
    let secondsRelax = localStorage.getItem("secondsRelax");

    if (secondsRelax) {
      return JSON.parse(secondsRelax);
    }
    return 0;
  };
  const [secondsRelax, setSecondsRelax] = useState<any>(getSecondsRelax() || 0);
  const [minutesRelax, setMinutesRelax] = useState<any | undefined>(
    getMinutesRelax() || minutosRelax
  );
  const [pauseRelax, setPauseRelax] = useState(true);

  let intervalRefRelax = useRef<ReturnType<typeof setInterval>>();
  const stop = clearInterval(intervalRefRelax.current);
  const alarm = new Audio("/87558731.mp3");

  function handlePauseRelax() {
    setPauseRelax(!pauseRelax);
  }

  function handleRestartRelax() {
    setMinutesRelax(minutosRelax);
    setSecondsRelax(0);
  }

  useEffect(() => {
    if (minutesRelax == 0 && secondsRelax == 0) {
      alarm.play();
      return () => stop;
    }

    if (pauseRelax) {
      return () => stop;
    }

    intervalRefRelax.current = setInterval(() => {
      setSecondsRelax(secondsRelax - 1);

      if (secondsRelax == 0) {
        if (!minutesRelax) {
          return () => stop;
        }
        setMinutesRelax(minutesRelax - 1);
        setSecondsRelax(59);
      }
      localStorage.setItem("minutesRelax", JSON.stringify(minutesRelax));
      localStorage.setItem("secondsRelax", JSON.stringify(secondsRelax));
    }, 1000);

    return () => clearInterval(intervalRefRelax.current); //stop não funciona aqui
  });

  return {
    minutesRelax,
    secondsRelax,
    pauseRelax,
    handlePauseRelax,
    handleRestartRelax,
  };
};
