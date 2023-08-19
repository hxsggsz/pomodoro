import {
  ReactNode,
  useState,
  createContext,
  useContext,
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
} from "react";
import { DropResult } from "react-beautiful-dnd";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface SearchTypes {
  children: ReactNode;
}

export interface StateProps {
  todo: string[];
  input: string;
  error: string;
  handleChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
  updateItem: (itemToUpdate: string, ev: ChangeEvent<HTMLInputElement>) => void;
  deleteItem: (item: string) => void;
  deleteAll: () => void;
  handleDragEnd: (response: DropResult) => void;
}

export const TodoContext = createContext({} as StateProps);

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }: SearchTypes) => {
  const [saveTodo, setSaveTodo] = useLocalStorage<string[]>("todo", []);
  const [todo, setTodo] = useState(saveTodo);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInput(ev.target.value);
  };

  const handleSubmit = useCallback(
    (ev: FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      if (input === "") {
        setError("cannot create an empty task");
        return;
      }
      if (input.length >= 30) {
        setError("To big, less details please");
        return;
      }
      setInput("");
      setError("");
      setTodo([...todo, input]);
    },
    [setError, setInput, setTodo, todo, input]
  );

  const updateItem = useCallback(
    (itemToUpdate: string, ev: ChangeEvent<HTMLInputElement>) => {
      const itemIndex = todo.findIndex((item) => item === itemToUpdate);

      if (itemIndex >= 0) {
        const tasks = [...todo];
        if (tasks[itemIndex].length <= 30) {
          tasks[itemIndex] = ev.target.value;
        }

        setTodo(tasks);
      }
    },
    [todo, setTodo]
  );

  const deleteItem = useCallback(
    (item: string) => {
      const deletedItem = todo.filter((it) => it !== item);
      setTodo([...deletedItem]);
    },
    [todo, setTodo]
  );

  const deleteAll = () => setTodo([]);

  const handleDragEnd = (response: DropResult) => {
    if (!response.destination) return;

    const items = Array.from(todo);
    const [reorderedItem] = items.splice(response.source.index, 1);
    items.splice(response.destination.index, 0, reorderedItem);
    setTodo(items);
  };

  useEffect(() => {
    setSaveTodo(todo);
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
        handleDragEnd,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
