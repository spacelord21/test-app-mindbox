import { Container, Label, StyledInput } from "./styles";

type TInputProps = {
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const Input = ({ name, onChange, placeholder, value }: TInputProps) => {
  return (
    <Container className="field field_v2">
      <Label htmlFor={name} className="ha-screen-reader">
        {placeholder}
      </Label>
      <StyledInput
        onChange={onChange}
        id={name}
        className="field__input"
        placeholder={placeholder}
        value={value}
        name={name}
      />
    </Container>
  );
};
