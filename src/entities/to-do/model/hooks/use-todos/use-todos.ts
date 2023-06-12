import { TTodo } from "@entities/to-do/types";
import { useCallback, useEffect, useState } from "react";

const TODOS_KEY = "TODOS";

export const useTodos = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addTodo = (todo: TTodo) => {
    setTodos((state) => [todo, ...state]);
  };

  const fetchTodos = () => {
    const value = window.localStorage.getItem(TODOS_KEY);
    if (value === null) {
      return;
    }
    const items: TTodo[] = JSON.parse(value);
    setTodos(items);
  };

  const saveTodos = useCallback(() => {
    if (todos.length) {
      window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);

  return { todos, addTodo };
};
