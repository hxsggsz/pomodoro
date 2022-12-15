import { useState, useRef, useEffect } from "react";

export const useTimer = (minutos: number) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState<number | undefined>(minutos);
  const [pause, setPause] = useState(true);

  const intervalRef = useRef<number | undefined>();
  const stop = clearInterval(intervalRef.current);
  const alarm = new Audio("/87558731.mp3");

  function handlePause() {
    setPause(!pause);
  }

  function handleRestart() {
    setMinutes(minutos);
    setSeconds(0);
  }

  useEffect(() => {
    if (minutes == 0 && seconds == 0) {
      alarm.play();
      return () => stop;
    }

    if (pause) {
      return () => stop;
    }

    intervalRef.current = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds == 0) {
        if (!minutes) {
          return () => stop;
        }
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(intervalRef.current); //stop não funciona aqui
  });

  return {
    minutes,
    seconds,
    pause,
    handlePause,
    handleRestart,
  };
};
