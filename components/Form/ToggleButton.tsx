import React, { useEffect } from 'react';

interface Props {
    onChange: (value: any) => void,
    defaultChecked: boolean,
    name: string,
    disabled: boolean,
    value: boolean
}
export const ToggleButtonField = ({
  onChange, defaultChecked, name, disabled, value,
}) => {

  useEffect(() => {
    onChange(defaultChecked);
  }, [onChange, defaultChecked]);

  return (
    <div className="toggle-btn">
      <input
        className="toggle-btn__input"
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={value}
        disabled={disabled}
      />
      <button
        type="button"
        className="toggle-btn__input-label"
        onClick={() => onChange(!value)}
      >Toggle
      </button>
    </div>
  );
};

const renderToggleButtonField = ({ input, defaultChecked, disabled }) => (
  <ToggleButtonField
    {...input}
    defaultChecked={defaultChecked}
    disabled={disabled}
  />
);

export default renderToggleButtonField;
