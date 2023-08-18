import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTodo() {
  const [todoStorage, setTodoStorage] = useLocalStorage("todoStorage", [""]);
  const [todo, setTodo] = useState(todoStorage);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const HandleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInput(ev.target.value);
  };

  const HandleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (input.length <= 3) {
      setError("Please, give more detail");
      return;
    }
    if (input.length >= 30) {
      setError("To big, less details please");
      return;
    }
    setInput("");
    setError("");
    setTodo((prevTodo) => [...prevTodo, input]);
  };

  const updateItem = (
    itemToUpdate: string,
    ev: ChangeEvent<HTMLInputElement>
  ) => {
    const itemIndex = todo.findIndex((item) => item === itemToUpdate);

    if (itemIndex >= 0) {
      const tasks = [...todo];
      tasks[itemIndex] = ev.target.value;

      setTodo(tasks);
    }
  };

  const DeleteItem = (idx: number) => {
    if (!todo[idx]) return;
    // const deletedItem = todo.slice(idx, 1);
    const deletedItem = todo.filter((_, index) => index !== idx);
    setTodo([...deletedItem]);
  };

  const DeleteFull = () => setTodo([""]);

  useEffect(() => {
    setTodoStorage(todo);
  }, [todo]);

  return {
    todo,
    input,
    error,
    DeleteItem,
    DeleteFull,
    HandleChange,
    HandleSubmit,
    updateItem,
  };
}
