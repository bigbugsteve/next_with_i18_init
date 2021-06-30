import React, { useEffect } from 'react';
import CheckCircleIcon from 'mdi-react/CheckCircleIcon';
import classNames from 'classnames';

type CheckBoxProps = {
    onChange: any;
    name: string;
    disabled?: boolean;
    defaultChecked?: boolean;
    value?: boolean 
    label: any;
    className?: string;
    [key: string]: unknown;
    icon?:any
};


type CheckBoxField = {
    label: any;
    defaultChecked?: boolean;
    disabled?: boolean;
    className: string;
    input: any;
    icon?:any
}


const CheckBoxField: React.FC<CheckBoxProps> = ({
  onChange,
  defaultChecked,
  disabled,
  className,
  name,
  value,
  label,
  icon
}) => {
  useEffect(() => {
    onChange(defaultChecked);
  }, [onChange, defaultChecked]);

  const CheckboxClass = classNames({
    'radio-btnIcons': true,
    disabled,
  });

    return (
      <label
        className={`${CheckboxClass}${className ? ` radio-btnIcons--${className}` : ''}`}
      >
        <input
          className="radio-btnIcons__radio"
          name={name}
          type="checkbox"
          onChange={onChange}
          checked={value}
          disabled={disabled}
        //   icon={icon}
        />
        <div className="parentLabel">
          {className === 'button' || className === 'button noIcon_button'
            ? (
              <span className="radio-btnIcons__label-svg">
                <CheckCircleIcon className="radio-btnIcons__label-check" />
              </span>
            ) : ''}
          {icon !== ''
            ? (
              <div className="Icon_container">
                <img src={icon} alt="" />
              </div>
            ) : ''}
          <div className="radio-btnIcons__label">{label}</div>
        </div>
      </label>
    );
  }


  const renderCheckBoxField: React.FC<CheckBoxField> = ({
    input, label, defaultChecked, disabled, className,icon
  }) => (
    <CheckBoxField
      {...input}
      label={label}
      defaultChecked={defaultChecked}
      disabled={disabled}
      className={className}
      icon={icon}
    />
  );
  
  export default renderCheckBoxField;
