import { TTodo } from "@entities/to-do/types";
import { Typography, styled } from "@shared/ui";
import { useState } from "react";
import { Container, Title } from "./styles";

type TTodoProps = {
  todo: TTodo;
};

export const Todo = ({ todo }: TTodoProps) => {
  const { createTime, description, id, importance, isCompleted, title } = todo;
  const [isOpen, setOpen] = useState(false);
  return (
    <Container>
      <Title>
        <Typography variant="title">{title}</Typography>
      </Title>
    </Container>
  );
};
