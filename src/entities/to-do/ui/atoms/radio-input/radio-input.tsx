import { TTodoImportance } from "@entities/to-do/types";
import { Container, RadioButton, Title } from "./styles";

type TRadioInputProps = {
  value: TTodoImportance;
  checked: boolean;
  setValue: (value: TTodoImportance) => void;
  name: string;
};

export const RadioInput = ({
  value,
  checked,
  name,
  setValue,
}: TRadioInputProps) => {
  return (
    <Container onClick={() => setValue(value)}>
      <RadioButton
        type="radio"
        value={value}
        checked={checked}
        name={name}
        onChange={() => {}}
      />
      <Title variant="body16">{value}</Title>
    </Container>
  );
};
