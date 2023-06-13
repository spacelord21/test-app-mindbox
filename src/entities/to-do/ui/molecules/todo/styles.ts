import { styled } from "@shared/ui";
import { Icon as Iconify } from "@iconify/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.palette.accent.tertiary};
  justify-content: center;
  width: 100%;
  /* align-items: center; */
  padding: ${({ theme }) => theme.spacing(1)}px;
`;

export const Title = styled.div<{ checked: boolean }>`
  display: flex;
  flex-direction: row;
  &:hover {
    opacity: 0.5;
    transition: opacity 0.2s linear;
  }
  color: ${({ theme }) => theme.palette.text.primary};
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

export const Description = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const Icon = styled(Iconify)`
  position: absolute;
  right: ${({ theme }) => theme.spacing(0.5)}px;
  color: ${({ theme }) => theme.palette.importance.important};
  width: 20px;
  height: 20px;
`;
