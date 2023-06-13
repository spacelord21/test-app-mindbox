import { TTodoConditionView } from "@entities/to-do/model/hooks/use-todos/use-todos";
import { Typography, styled } from "@shared/ui";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  width: 30%;
`;

const Button = styled.div<{ active: boolean }>`
  border: none;
  outline: none;
  transition: opacity 0.2s ease;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  color: ${({ theme }) => theme.palette.text.primary};

  padding: 6px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  ${({ active, theme }) =>
    active &&
    `
    border: 0.5px solid ${theme.palette.accent.tertiary};
  `}
`;

type TSortButtonsProps = {
  setCondition: (condition: TTodoConditionView) => void;
  currentType: TTodoConditionView;
};

export const SortButtons = ({
  setCondition,
  currentType,
}: TSortButtonsProps) => {
  const types: TTodoConditionView[] = ["All", "Active", "Completed"];
  return (
    <Container>
      {types.map((type, index) => (
        <Button
          key={index}
          onClick={() => setCondition(type)}
          active={type === currentType}
        >
          <Typography variant="body14">{type}</Typography>
        </Button>
      ))}
    </Container>
  );
};
