import { TTodo, TTodoImportance } from "@entities/to-do/types";
import { useState } from "react";

type TFormType = {
  title: string;
  description: string;
  importance: TTodoImportance;
};

export const useTodoForm = () => {
  const [form, setForm] = useState<TFormType>({
    description: "",
    importance: "IMPORTANT",
    title: "",
  });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onImportanceChangeHandler = (value: TTodoImportance) => {
    setForm({
      ...form,
      importance: value,
    });
  };

  const createTodo = (): TTodo => {
    return {
      createTime: new Date(),
      description: form.description,
      id: 0,
      importance: form.importance,
      isCompleted: false,
      title: form.title,
    };
  };

  return { ...form, onChangeHandler, onImportanceChangeHandler, createTodo };
};
