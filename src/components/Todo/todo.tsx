import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Validation } from "./validation";
import { StyledWrapperTodo } from ".";
import { AnimatePresence, motion } from "framer-motion";
import { X, MagnifyingGlass } from "phosphor-react";

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

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ resolver: Validation, });

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


      <form data-testid="form-add-todo" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="ToDo">
          <p>Ensira a sua tarefa aqui</p>

          <input type="text" placeholder='Ex: criar componente' {...register("ToDo")} />

          <motion.button whileHover={{ opacity: 0.6, y: -2, }} whileTap={{ y: [4, -4, 4] }} transition={{ delay: 0.1, type: "spring" }} className="button" type="submit"><MagnifyingGlass size={20} /></motion.button>
        </label>
        <span>{errors.ToDo?.message}</span>

      </form>

      {list.length > 0 ?
        <motion.button whileHover={{ opacity: 0.6, y: -2, }} whileTap={{ y: [4, -4, 4] }} transition={{ delay: 0.1, type: "spring" }} className="button" onClick={DeleteFull}>Apagar todos</motion.button> : <p>adicione a sua tarefa</p>}

      <ul>

        <AnimatePresence onExitComplete={() => console.log("exit")}>
          {list.map((item, idx) => {
            return (
              <>
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "backInOut" }}
                  //adicionado para testes
                  data-testid={item}
                ><p>{item.ToDo}</p> <X className="deleteTodo" data-testid={`${item}-btn-remove`} onClick={() => DeleteItem(idx)} size={20} /></motion.li>
              </>
            );
          })}
        </AnimatePresence>
      </ul>
    </StyledWrapperTodo>
  )
}
