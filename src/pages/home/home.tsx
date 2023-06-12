import { useTodos } from "@entities/to-do/model";
import { CreateTodoForm, Todos, TodosTemplate } from "@entities/to-do/ui";
import { styled } from "@shared/ui";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export const Home = () => {
  return (
    <Container>
      <TodosTemplate />
    </Container>
  );
};
