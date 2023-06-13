import { useTodoForm } from "@entities/to-do/model";
import { TTodo, TTodoImportance } from "@entities/to-do/types";
import { Input, PrimaryButton, styled } from "@shared/ui";
import { RadioInput } from "../../atoms";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1)}px;
`;

const RadiosContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
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
  const importances: TTodoImportance[] = ["IMPORTANT", "USUAL"];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <TitleInputContainer onClick={() => (!isOpen ? setIsOpen(!isOpen) : {})}>
        <Input
          name={"title"}
          onChange={onChangeHandler}
          placeholder={"What needs to be done?"}
          value={title}
          maxLength={40}
        />
        <Icon
          icon={"ep:arrow-down"}
          style={isOpen ? { transform: "rotate(180deg)" } : {}}
          color="black"
          width={20}
          height={20}
          onClick={() => setIsOpen(!isOpen)}
        />
      </TitleInputContainer>

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
            CREATE +
          </PrimaryButton>
        </>
      )}
    </Container>
  );
};
