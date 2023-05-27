import { StyledWrapperTodo } from '.'
import { AnimatePresence, motion } from 'framer-motion'
import { X, MagnifyingGlass } from 'phosphor-react'
import { useTodo } from '../../hooks/useTodo'

export const Todo = () => {
  const {
    DeleteFull,
    DeleteItem,
    HandleSubmit,
    error,
    input,
    todo,
    HandleChange,
  } = useTodo()

  return (
    <StyledWrapperTodo>
      <form data-testid="form-add-todo" onSubmit={HandleSubmit}>
        <label htmlFor="ToDo">
          <p>Ensira a sua tarefa aqui</p>

          <input
            type="text"
            value={input}
            placeholder="Ex: criar componente"
            onChange={HandleChange}
          />

          <motion.button
            whileHover={{ opacity: 0.6, y: -2 }}
            whileTap={{ y: [4, -4, 4] }}
            transition={{ delay: 0.1, type: 'spring' }}
            className="button"
            type="submit"
          >
            <MagnifyingGlass size={20} />
          </motion.button>
        </label>
        <span>{error}</span>
      </form>

      {todo.length > 0 ? (
        <motion.button
          whileHover={{ opacity: 0.6, y: -2 }}
          whileTap={{ y: [4, -4, 4] }}
          transition={{ delay: 0.1, type: 'spring' }}
          className="button"
          onClick={DeleteFull}
        >
          Apagar todos
        </motion.button>
      ) : (
        <p>adicione a sua tarefa</p>
      )}

      <ul>
        <AnimatePresence>
          {todo.map(
            (item, idx) =>
              item !== '' && (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: 'backInOut' }}
                  // adicionado para testes
                  data-testid={item}
                >
                  <p>{item}</p>{' '}
                  <X
                    className="deleteTodo"
                    data-testid={`${todo}-btn-remove`}
                    onClick={() => DeleteItem(idx)}
                    size={20}
                  />
                </motion.li>
              ),
          )}
        </AnimatePresence>
      </ul>
    </StyledWrapperTodo>
  )
}
