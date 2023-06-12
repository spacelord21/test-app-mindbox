import { useTodoForm } from "@entities/to-do/model";
import { TTodoImportance } from "@entities/to-do/types";
import { Input, RadioInput, styled } from "@shared/ui";

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

type TCreateTodoFormProps = {};

export const CreateTodoForm = () => {
  const { description, importance, onChangeHandler, title } = useTodoForm();
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
            onChange={onChangeHandler}
            checked={item === importance}
            name={"importance"}
          />
        ))}
      </RadiosContainer>
    </Container>
  );
};
