import { TTodo } from "@entities/to-do/types";
import { styled } from "@shared/ui";

const Container = styled.div``;

type TTodoProps = {
  todo: TTodo;
};

export const Todo = ({ todo }: TTodoProps) => {
  const { createTime, description, id, importance, isCompleted, title } = todo;
  return (
    <Container>
      {title}
      {description}
      {importance}
    </Container>
  );
};
