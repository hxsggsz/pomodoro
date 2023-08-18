import {
  ReactNode,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
  ChangeEvent,
  FormEvent,
  useCallback,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface SearchTypes {
  children: ReactNode;
}

export interface StateProps {
  todo: string[];
  input: string
  error: string;
  handleChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
  updateItem: (itemToUpdate: string, ev: ChangeEvent<HTMLInputElement>) => void;
  deleteItem: (item: string) => void;
  deleteAll: () => void;
}

export const TodoContext = createContext({} as StateProps);

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }: SearchTypes) => {
  const [todoStorage, setTodoStorage] = useLocalStorage("todoStorage", [""]);
  const [todo, setTodo] = useState(todoStorage);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInput(ev.target.value);
  };

  const handleSubmit = useCallback((ev: FormEvent<HTMLFormElement>) => {
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
    setTodo([...todo, input]);
  },[ setError, setInput, setTodo, todo, input]);

  const updateItem =  useCallback((
    itemToUpdate: string,
    ev: ChangeEvent<HTMLInputElement>
  ) => {
    const itemIndex = todo.findIndex((item) => item === itemToUpdate);

    if (itemIndex >= 0) {
      const tasks = [...todo];
      tasks[itemIndex] = ev.target.value;

      setTodo(tasks);
    }
  }, [todo, setTodo]);

  const deleteItem = useCallback((item: string) => {
      const deletedItem = todo.filter((it) => it !== item);
      setTodo([...deletedItem]);
  }, [todo, setTodo]);

  const deleteAll = () => setTodo([""]);

  useEffect(() => {
    setTodoStorage(todo);
  }, [todo]);

  return (
    <TodoContext.Provider
      value={{
        todo,
        input,
        error,
        deleteAll,
        deleteItem,
        updateItem,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
