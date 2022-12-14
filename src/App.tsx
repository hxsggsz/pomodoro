import { useState, useEffect, useRef } from 'react'
import './App.css'

export default function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(1)
  const [pause, setPause] = useState(false);

  const intervalRef = useRef<number | undefined>();
  const stop = clearInterval(intervalRef.current)
  const alarm = new Audio('/87558731.mp3')

  /*
  1 - tirar o useEffect e dividir isso em mini funcion's
  2 - adicionar um botão start
  3 - transformar toda a lógica em um Hook pra usar de forma mais facil pelo código
  4 - refatorar esse monte de if's 
  */
  useEffect(() => {
    if (pause) { return () => stop }
    if (minutes == 0 && seconds == 0) {
      // alarm.play()
      return () => stop
    }

    intervalRef.current = setInterval(() => {
      setSeconds(seconds - 1)

      if (seconds == 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      }


    }, 200)

    return () => clearInterval(intervalRef.current) //stop não funciona aqui
  })


  return (
    <div className="App">
      <h1>pomodoro</h1>

      <p>{minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}</p>
      <button onClick={() => setPause(!pause)}>{pause ? 'continuar' : 'pausar'}</button>
    </div>
  )
}