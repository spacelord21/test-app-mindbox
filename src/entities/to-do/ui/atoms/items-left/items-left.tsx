import { Typography, styled } from "@shared/ui";

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    opacity: 0.8;
  }
`;

type TItemsLeft = {
  amount: number;
};

export const ItemsLeft = ({ amount }: TItemsLeft) => {
  return <Text variant="body14">{amount} items left</Text>;
};
