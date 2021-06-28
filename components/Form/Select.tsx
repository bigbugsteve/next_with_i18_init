import React from 'react';
import Select from 'react-select';

type SelectProps = {
    name:string;
    value?:any;
    onChange?:any;
    placeholder: string;
    options?: [Object] | null;
}

export const SelectField: React.FC<SelectProps> = ({
  onChange, value, name, placeholder, options,
}) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption);
  };

  return (
    <Select
      name={name}
      value={value}
      onChange={handleChange}
      options={options}
      clearable={false}
      className="react-select"
      placeholder={placeholder}
      classNamePrefix="react-select"
    />
  );
};

type SelectFieldProps = {
    input?:any;
    options?:[Object] | null;
    meta?: any;
    placeholder: string;
    className?: string;
}

const renderSelectField: React.FC<SelectFieldProps> = ({
  input, meta, options, placeholder, className,
}) => (
  <div className={`form__form-group-input-wrap ${className}`}>
    <SelectField
      {...input}
      options={options}
      placeholder={placeholder}
    />
    {meta.touched && meta.error && <span className="form__form-group-error">{meta.error}</span>}
  </div>
);

export default renderSelectField;
