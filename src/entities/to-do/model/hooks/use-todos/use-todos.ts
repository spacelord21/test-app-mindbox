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
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const removeTodoById = (id: string) => {
    const arr = todos.filter((todo) => todo.id === id);
    setTodos(arr);
  };

  const removeCompletedTodos = () => {
    setTodos((todos) => todos.filter((todo) => !todo.isCompleted));
  };

  const todosLeft = useMemo(() => {
    return todos.filter((item) => !item.isCompleted).length;
  }, [todos]);

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
    todosLeft,
    removeCompletedTodos,
  };
};
