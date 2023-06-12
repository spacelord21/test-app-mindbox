import { TTodo } from "@entities/to-do/types";
import { useCallback, useEffect, useMemo, useState } from "react";

const TODOS_KEY = "TODOS";
export type TTodoConditionView = "All" | "Completed" | "Active";

export const useTodos = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [conditionOfTodos, setCondition] = useState<TTodoConditionView>("All");

  const addTodo = (todo: TTodo) => {
    setTodos((state) => [todo, ...state]);
  };

  const viewTodos = useMemo(() => {
    switch (conditionOfTodos) {
      case "All":
        return todos;
      case "Completed":
        return todos.filter((todo) => todo.isCompleted);
      case "Active":
        return todos.filter((todo) => !todo.isCompleted);
      default:
        return todos;
    }
  }, [conditionOfTodos, todos]);

  const setIsChecked = (id: string) => {
    const item = todos.find((item) => item.id === id);
    if (item) {
      setTodos((state) => {
        const arr = state.filter((todo) => todo.id !== id);
        return [{ ...item, isCompleted: !item.isCompleted }, ...arr];
      });
    }
  };

  const deleteTodo = (id: string) => {
    const arr = todos.filter((todo) => todo.id === id);
    setTodos(arr);
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

  return {
    todos: viewTodos,
    addTodo,
    setIsChecked,
    setCondition,
    conditionOfTodos,
  };
};
