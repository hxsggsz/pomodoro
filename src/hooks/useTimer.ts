import { useState, useRef, useEffect } from "react";

export const useTimer = (minutos: number) => {
  const getMinutes = () => {
    let minutes = localStorage.getItem("minutes");

    if (minutes) {
      return JSON.parse(minutes);
    }
    return 0;
  };

  const getSeconds = () => {
    let seconds = localStorage.getItem("seconds");

    if (seconds) {
      return JSON.parse(seconds);
    }
    return 0;
  };
  const [seconds, setSeconds] = useState<any>(getSeconds() || 0);
  const [minutes, setMinutes] = useState<any | undefined>(
    getMinutes() || minutos
  );
  const [pause, setPause] = useState(true);

  let intervalRef = useRef<ReturnType<typeof setInterval>>();
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
      localStorage.setItem("minutes", JSON.stringify(minutes));
      localStorage.setItem("seconds", JSON.stringify(seconds));
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
