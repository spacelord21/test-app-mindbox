import { TTodo } from "@entities/to-do/types";
import { Typography, styled } from "@shared/ui";
import { useState } from "react";
import { Container, Description, Input, Title, TitleContainer } from "./styles";
import { useTitleColor } from "@entities/to-do/model";

type TTodoProps = {
  todo: TTodo;
  setIsChecked: (id: string) => void;
};

export const Todo = ({ todo, setIsChecked }: TTodoProps) => {
  const { createTime, description, id, importance, isCompleted, title } = todo;
  const [isOpen, setOpen] = useState(false);
  const { color } = useTitleColor(importance);
  return (
    <Container>
      <TitleContainer>
        <Input
          type="checkbox"
          onChange={() => {}}
          checked={isCompleted}
          onClick={() => setIsChecked(id)}
        />
        <Title
          color={color()}
          onClick={() => setOpen((state) => !state)}
          checked={isCompleted}
        >
          <Typography variant="title">{title}</Typography>
        </Title>
      </TitleContainer>

      {isOpen && (
        <Description>
          <Typography variant="body16">{description}</Typography>
        </Description>
      )}
    </Container>
  );
};
