import { styled } from "@shared/ui";
import { Typography } from "../typography";
import React from "react";
import { ReactNode } from "react";

type TButtonProps = {
  children: string | ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.background.tertiary};
  border: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 60px;
  font-size: 17px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    opacity: 1;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
  }
  &:hover:after {
    width: 210px;
    height: 200px;
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
`;

export const PrimaryButton = ({
  children,
  onClick,
  disabled,
}: TButtonProps) => {
  return (
    <Button onClick={onClick} disabled={disabled} className={"primary-button"}>
      {React.isValidElement(children) ? (
        children
      ) : (
        <ButtonText variant="button">{children}</ButtonText>
      )}
    </Button>
  );
};
