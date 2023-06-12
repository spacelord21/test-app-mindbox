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

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center;
  align-items: center; */
  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s linear;
  }
  cursor: pointer;
`;
