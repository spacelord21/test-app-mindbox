import { styled } from "@shared/ui";
import { ClearCompleted, ItemsLeft } from "../../atoms";
import { SortButtons } from "../sort-buttons";
import { TTodoConditionView } from "@entities/to-do/model/hooks/use-todos/use-todos";

const Container = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(1)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin-left: ${({ theme }) => theme.spacing(1.5)}px;
`;

type TFooterProps = {
  items: number;
  setCondition: (value: TTodoConditionView) => void;
  currentType: TTodoConditionView;
  clearCompleted: () => void;
};

export const Footer = ({
  clearCompleted,
  currentType,
  items,
  setCondition,
}: TFooterProps) => {
  return (
    <Container>
      <ItemsLeft amount={items} />
      <SortButtons currentType={currentType} setCondition={setCondition} />
      <ClearCompleted onClick={clearCompleted} />
    </Container>
  );
};
