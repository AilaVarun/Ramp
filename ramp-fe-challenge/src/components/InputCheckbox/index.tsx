import classNames from "classnames";
import { useRef, useState } from "react";
import { InputCheckboxComponent } from "./types";

export const InputCheckbox: InputCheckboxComponent = ({
  id,
  defaultChecked = false,
  disabled,
  onChange,
}) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`);
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      >
        <input
          id={inputId}
          type="checkbox"
          className="RampInputCheckbox--input"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};