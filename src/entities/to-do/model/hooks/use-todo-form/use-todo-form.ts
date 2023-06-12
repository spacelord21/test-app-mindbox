import { TTodoImportance } from "@entities/to-do/types";
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
    const name = e.target.name;
    console.log(name);
    setForm({
      ...form,
      [name]: e.target.value,
    });
  };

  return { ...form, onChangeHandler };
};
