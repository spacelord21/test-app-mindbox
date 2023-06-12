import { Typography, styled } from "@shared/ui";
import { CreateTodoForm } from "../../molecules";
import { Todos } from "../todos/todos";
import { useTodos } from "@entities/to-do/model";

const Container = styled.div`
  width: 400px;
  min-height: 500px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  -webkit-box-shadow: 4px 10px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 10px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 10px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

export const TodosTemplate = () => {
  const { todos, addTodo } = useTodos();
  return (
    <>
      <Title variant="title50">todos</Title>
      <Container>
        <CreateTodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </Container>
    </>
  );
};
