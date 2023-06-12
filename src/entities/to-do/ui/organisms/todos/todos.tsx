import { TTodo } from "@entities/to-do/types";
import { styled } from "@shared/ui";
import { Todo } from "../../molecules";

const Container = styled.div``;

type TTodosProps = {
  todos: TTodo[];
  setIsChecked: (id: string) => void;
};

export const Todos = ({ todos, setIsChecked }: TTodosProps) => {
  return (
    <Container>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} setIsChecked={setIsChecked} />
      ))}
    </Container>
  );
};
