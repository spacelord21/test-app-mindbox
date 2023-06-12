import { Typography, styled } from "@shared/ui";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  justify-content: center;
  width: 100%;
  /* align-items: center; */
  padding: ${({ theme }) => theme.spacing(1)}px;
`;

export const Title = styled.div<{ color: string; checked: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: ${({ color }) => color};
  &:hover {
    opacity: 0.5;
    transition: opacity 0.2s linear;
  }
  cursor: pointer;
  ${({ checked }) =>
    checked &&
    `
    opacity: 0.5;
    text-decoration: line-through;
  `}
  margin-left: ${({ theme }) => theme.spacing(1)}px;
`;

export const Input = styled.input``;

export const Description = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
