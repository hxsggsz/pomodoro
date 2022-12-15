import './App.css'
import { FormEvent } from 'react'
import { useTimer } from './hooks/useTimer'
import { useOptions } from './context/optionsContext'

export default function App() {
  const { tempo, setTempo } = useOptions()

  const { minutes, seconds, pause, handlePause, handleRestart } = useTimer(tempo ? tempo : 2)

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    console.log(tempo)
  }

  return (
    <div className="App">
      <h1>pomodoro</h1>

      <p>{minutes && minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}</p>
      <button onClick={handlePause}>{pause ? 'start' : 'stop'}</button>
      <button onClick={handleRestart}>restart</button>

      <form onSubmit={handleSubmit}>
        <select value={tempo} onChange={(ev) => setTempo(parseInt(ev.currentTarget.value))}>
          <option value="1">Selecione uma opçao</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>

        <button type='submit'>enviar</button>
      </form>
    </div>
  )
}