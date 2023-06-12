import { styled } from "@shared/ui";
import { Typography } from "../typography";

export const Container = styled.div`
  padding: 6px;
  border-radius: 50px;
  display: inline-flex;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 8px 0;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.tertiary};
    opacity: 0.9;
  }
  &:focus-within {
    background-color: ${({ theme }) => theme.palette.background.tertiary};
    opacity: 0.9;
  }
`;
export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  vertical-align: middle;
  display: inline-block;
  line-height: 20px;
  padding: 0 8px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: none;
  border: 0;
  box-shadow: inset 0 0 0 1px #9f9f9f;
  box-shadow: inset 0 0 0 1.5px #9f9f9f;
  appearance: none;
  padding: 0;
  margin: 0;
  transition: box-shadow 150ms cubic-bezier(0.95, 0.15, 0.5, 1.25);
  pointer-events: none;
  &:focus {
    outline: none;
  }
  &:checked {
    box-shadow: inset 0 0 0 6px ${({ theme }) => theme.palette.accent.primary};
  }
`;
