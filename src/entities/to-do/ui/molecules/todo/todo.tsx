import { TTodo } from "@entities/to-do/types";
import { CheckboxInput, Typography, styled } from "@shared/ui";
import { useState } from "react";
import {
  Container,
  Description,
  Icon,
  Input,
  Title,
  TitleContainer,
} from "./styles";

type TTodoProps = {
  todo: TTodo;
  setIsChecked: () => void;
};

export const Todo = ({ todo, setIsChecked }: TTodoProps) => {
  const { createTime, description, id, importance, isCompleted, title } = todo;
  const [isOpen, setOpen] = useState(false);
  return (
    <Container>
      <TitleContainer>
        <CheckboxInput checked={isCompleted} onClick={setIsChecked} name={id} />
        <Title onClick={() => setOpen((state) => !state)} checked={isCompleted}>
          <Typography variant="title">{title}</Typography>
        </Title>
        {importance === "IMPORTANT" && (
          <Icon
            icon={"material-symbols:notification-important-outline-sharp"}
          />
        )}
      </TitleContainer>

      {isOpen && (
        <Description>
          <Typography variant="body16">{description}</Typography>
        </Description>
      )}
    </Container>
  );
};
