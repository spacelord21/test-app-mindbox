import { Container, Label, StyledInput } from "./styles";

type TInputProps = {
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onClick?: () => void;
  maxLength?: number;
};

export const Input = ({
  name,
  onChange,
  placeholder,
  value,
  onClick,
  maxLength,
}: TInputProps) => {
  return (
    <Container onClick={onClick}>
      <StyledInput
        onChange={onChange}
        id={name}
        placeholder={placeholder}
        value={value}
        name={name}
        maxLength={maxLength}
      />
    </Container>
  );
};
