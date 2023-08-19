import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTodo() {
  const [todoStorage, setTodoStorage] = useLocalStorage("todoStorage", [""]);
  const [todo, setTodo] = useState(todoStorage);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInput(ev.target.value);
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
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

  const deleteItem = useCallback(
    (item: string) => {
      const deletedItem = todo.filter((it) => it !== item);
      setTodo([...deletedItem]);
    },
    [todo, setTodo]
  );

  const DeleteFull = () => setTodo([""]);

  useEffect(() => {
    setTodoStorage(todo);
  }, [todo]);

  return {
    todo,
    input,
    error,
    deleteItem,
    DeleteFull,
    handleChange,
    handleSubmit,
    updateItem,
  };
}
