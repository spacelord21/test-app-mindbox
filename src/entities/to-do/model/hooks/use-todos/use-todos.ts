import { TTodo } from "@entities/to-do/types";
import { useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addTodo = (todo: TTodo) => {
    setTodos((state) => [todo, ...state]);
  };

  return { todos, addTodo };
};
