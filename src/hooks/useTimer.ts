/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useTimer = (key: string, InitialMinutes: number) => {
  const [timerStorage, setTimerStorage] = useLocalStorage(key, {
    min: InitialMinutes,
    sec: 0,
  })

  const [seconds, setSeconds] = useState(timerStorage.sec)
  const [minutes, setMinutes] = useState(timerStorage.min)
  const [pause, setPause] = useState(true)

  const intervalRef = useRef<ReturnType<typeof setInterval>>()
  const alarm = new Audio('/87558731.mp3')

  function handlePause() {
    setPause((prevState) => !prevState)
  }

  function handleRestart() {
    setMinutes(InitialMinutes)
    setSeconds(0)
  }

  useEffect(() => {
    if (!pause) {
      intervalRef.current = setInterval(() => {
        setSeconds(seconds - 1)
        if (seconds === 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }, 1000)
      return () => clearInterval(intervalRef.current)
    }
  })

  useEffect(() => {
    setTimerStorage({ min: minutes, sec: seconds })
    if (minutes === 0 && seconds === 0) {
      alarm.play()
      handlePause()
    }
  }, [minutes, seconds])

  return {
    minutes,
    seconds,
    pause,
    handlePause,
    handleRestart,
  }
}