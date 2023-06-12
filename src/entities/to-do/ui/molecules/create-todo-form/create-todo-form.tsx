import { useTodoForm } from "@entities/to-do/model";
import { TTodo, TTodoImportance } from "@entities/to-do/types";
import { Input, PrimaryButton, styled } from "@shared/ui";
import { RadioInput } from "../../atoms";

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
  return (
    <Container>
      <Input
        name={"title"}
        onChange={onChangeHandler}
        placeholder={"Title"}
        value={title}
      />
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
      >
        Create +
      </PrimaryButton>
    </Container>
  );
};
