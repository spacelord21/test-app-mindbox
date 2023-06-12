import { TTodo } from "@entities/to-do/types";
import { styled } from "@shared/ui";
import { Todo } from "../../molecules";

const Container = styled.div``;

type TTodosProps = {
  todos: TTodo[];
};

export const Todos = ({ todos }: TTodosProps) => {
  return (
    <Container>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} />
      ))}
    </Container>
  );
};
