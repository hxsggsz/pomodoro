import * as style from ".";
import { Button } from "../button/button";
import { Items } from "../items/items";
import { useTodo } from "../../context/todoContext";

export const Todo = () => {
  const todo = useTodo();
  return (
    <style.StyledWrapperTodo>
      <style.Form data-testid="form-add-todo" onSubmit={todo.handleSubmit}>
        <style.Input
          type="text"
          value={todo.input}
          onChange={todo.handleChange}
          placeholder="Your todo here"
        />

        <Button type="submit">Submit</Button>
      </style.Form>

      <style.Error>{todo.error}</style.Error>

      {todo.todo.length === 0 && <p>adicione a sua tarefa</p>}

      <style.List>
      {todo.todo.map((item, idx) => (
        <Items key={idx} item={item} deleteItem={todo.deleteItem} updateItem={todo.updateItem} />
      ))}
      </style.List>
    </style.StyledWrapperTodo>
  );
};
