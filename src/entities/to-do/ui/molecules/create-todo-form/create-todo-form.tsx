import { useTodoForm } from "@entities/to-do/model";
import { TTodo, TTodoImportance } from "@entities/to-do/types";
import { Input, PrimaryButton, styled } from "@shared/ui";
import { RadioInput } from "../../atoms";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RadiosContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

type TCreateTodoFormProps = {
  addTodo: (todo: TTodo) => void;
};

export const CreateTodoForm = ({ addTodo }: TCreateTodoFormProps) => {
  const {
    description,
    importance,
    onChangeHandler,
    title,
    onImportanceChangeHandler,
    createTodo,
  } = useTodoForm();
  const importances: TTodoImportance[] = [
    "IMPORTANT",
    "SECONDARY",
    "UNIMPORTANT",
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Input
        onClick={() => setIsOpen(true)}
        name={"title"}
        onChange={onChangeHandler}
        placeholder={"What needs to be done?"}
        value={title}
        maxLength={40}
      />
      {isOpen && (
        <>
          <Input
            name="description"
            onChange={onChangeHandler}
            placeholder="Description"
            value={description}
          />
          <RadiosContainer>
            {importances.map((item, index) => (
              <RadioInput
                value={item}
                key={index}
                setValue={onImportanceChangeHandler}
                checked={item === importance}
                name={"importance"}
              />
            ))}
          </RadiosContainer>
          <PrimaryButton
            onClick={() => {
              addTodo(createTodo());
            }}
            disabled={title.trim().length === 0}
          >
            Create +
          </PrimaryButton>
        </>
      )}
    </Container>
  );
};
