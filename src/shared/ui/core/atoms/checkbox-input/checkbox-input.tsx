import "./styles.css";

type TCheckboxInputProps = {
  checked: boolean;
  onClick: () => void;
  name: string;
};

export const CheckboxInput = ({
  checked,
  onClick,
  name,
}: TCheckboxInputProps) => {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id={name}
        name={name}
        value=""
        checked={checked}
        onClick={onClick}
        onChange={() => {}}
      />
      <label htmlFor={name}>
        <span></span>
      </label>
    </div>
  );
};
