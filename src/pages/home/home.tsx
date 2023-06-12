import { useTodos } from "@entities/to-do/model";
import { CreateTodoForm, Todos } from "@entities/to-do/ui";
import { styled } from "@shared/ui";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const Home = () => {
  const { todos, addTodo } = useTodos();
  return (
    <Container>
      <CreateTodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </Container>
  );
};
