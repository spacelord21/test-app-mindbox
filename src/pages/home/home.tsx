import { CreateTodoForm } from "@entities/to-do/ui";
import { styled } from "@shared/ui";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const Home = () => {
  return (
    <Container>
      <CreateTodoForm />
    </Container>
  );
};
