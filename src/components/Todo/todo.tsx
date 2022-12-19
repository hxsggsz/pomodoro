import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { StyledWrapper } from "../timer-estude";
import { StyledWrapperTodo } from ".";

type Inputs = {
  ToDo: string | number,
};

export const Todo = () => {
  const getList = () => {
    let local = localStorage.getItem('item')
    if (local) {
      return JSON.parse(local)
    }
    return []
  }
  const [list, setList] = useState<Inputs[]>(getList())

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const DeleteItem = (id: number) => {
    const deletedItem = list.filter((_, ind) => id != ind)

    setList(deletedItem)
  }
  const DeleteFull = () => {
    setList([])
    return localStorage.removeItem('item')
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {

    //salva o value do input no localStorage
    localStorage.setItem('item', JSON.stringify([...list, data]))

    //pega o valor do localStorage e joga dentro do State
    setList(getList())
  }

  return ( 
    <StyledWrapperTodo>


      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Ensira a sua tarefa aqui' {...register("ToDo")} />

        <input type="submit" />
      </form>
      <button onClick={DeleteFull}>Apagar todos</button>

      <ul>
        {list.map((item, idx) => (
          <>
            <li key={idx}>{item.ToDo}</li>
            <button onClick={() => DeleteItem(idx)}>Deletar</button>
          </>
        ))}
      </ul>
    </StyledWrapperTodo>
  )
}
