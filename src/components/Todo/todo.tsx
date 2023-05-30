import { StyledWrapperTodo } from ".";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "phosphor-react";
import { useTodo } from "../../hooks/useTodo";
import { Button } from "../button/button";

export const Todo = () => {
  const {
    DeleteFull,
    DeleteItem,
    HandleSubmit,
    error,
    input,
    todo,
    HandleChange,
  } = useTodo();

  return (
    <StyledWrapperTodo>
      <form data-testid="form-add-todo" onSubmit={HandleSubmit}>
        <input
          type="text"
          value={input}
          onChange={HandleChange}
          placeholder="Your todo here"
        />

        <Button type="submit">Submit</Button>
      </form>
      <span>{error}</span>

      {todo.length === 0 && <p>adicione a sua tarefa</p>}

      <ul>
        <AnimatePresence>
          {todo.map(
            (item, idx) =>
              item !== "" && (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "backInOut" }}
                  // adicionado para testes
                  data-testid={item}
                >
                  {item}{" "}
                  <X
                    className="deleteTodo"
                    data-testid={`${todo}-btn-remove`}
                    onClick={() => DeleteItem(idx)}
                    size={24}
                  />
                </motion.li>
              )
          )}
        </AnimatePresence>
      </ul>
    </StyledWrapperTodo>
  );
};
