import { Container, RadioButton, Title } from "./styles";

type TRadioInputProps = {
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

export const RadioInput = ({
  value,
  checked,
  onChange,
  name,
}: TRadioInputProps) => {
  return (
    <Container>
      <RadioButton
        type="radio"
        value={value}
        onChange={onChange}
        checked={checked}
        name={name}
      />
      <Title variant="body16">{value}</Title>
    </Container>
  );
};
