import './App.css'
import { useForm, SubmitHandler } from "react-hook-form";
import { FormEvent, useState } from 'react'
import { useTimer } from './hooks/useTimer'
import { useOptions } from './context/optionsContext'

type Inputs = {
  ToDo: string | number,
};

export default function App() {
  const { tempo, setTempo } = useOptions()
  const [list, setList] = useState<Inputs[]>([])

  const { minutes, seconds, pause, handlePause, handleRestart } = useTimer(tempo ? tempo : 2)

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let local = localStorage.
    setList([...list, data])
  }

  function handleSubmitOptions(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    handleRestart()
  }

  return (
    <div className="App">
      <h1>pomodoro</h1>

      <p>{minutes && minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}</p>
      <button onClick={handlePause}>{pause ? 'start' : 'stop'}</button>
      <button onClick={handleRestart}>restart</button>

      <form onSubmit={handleSubmitOptions}>
        <select value={tempo} onChange={(ev) => setTempo(parseInt(ev.currentTarget.value))}>
          <option value="1">Selecione uma opçao</option>
          <option value="25">25 minutos</option>
          <option value="50">50 minutos</option>
          <option value="60">1 hora</option>
        </select>

        <button type='submit'>enviar</button>
      </form>
      <br />
      <br />

      <div>
        <h1>Todo</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("ToDo")} />

          <input type="submit" />
        </form>

        <ul>
          {list?.map(item => (
            <li key={item.ToDo}>{item.ToDo}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}