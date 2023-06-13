import { Typography, styled } from "@shared/ui";

const Text = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    opacity: 0.8;
  }
`;

type TClearCompleteProps = {
  onClick: () => void;
};

export const ClearCompleted = ({ onClick }: TClearCompleteProps) => {
  return (
    <Text variant="body14" onClick={onClick}>
      Clear completed
    </Text>
  );
};
