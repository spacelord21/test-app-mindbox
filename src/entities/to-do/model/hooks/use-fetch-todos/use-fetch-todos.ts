import { TTodo } from "@entities/to-do/types";
import { useEffect, useState } from "react";

const TODOS_KEY = "TODOS";

export const useFetchTodos = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const fetchTodos = () => {
    const value = window.localStorage.getItem(TODOS_KEY);
    if (value === null) {
      return;
    }
    const items: TTodo[] = JSON.parse(value);
    setTodos(items);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos };
};
