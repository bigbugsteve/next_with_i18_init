import React, { useEffect } from 'react';
import CheckCircleIcon from 'mdi-react/CheckCircleIcon';
import classNames from 'classnames';

type RadioProps = {
    defaultChecked?: boolean;
    onChange: any;
    radioValue?: boolean;
    className: string;
    disabled?:boolean;
    label: string;
    name: string;
    value?: boolean;
    icon?:any
};

type RadioFieldProps = {
    defaultChecked?: boolean;
    input: any;
    radioValue?: boolean;
    className: string;
    disabled?:boolean;
    label: string;
    icon?:any
}

const RadioButtonField: React.FC<RadioProps> = ({
  defaultChecked,
  onChange,
  radioValue,
  className,
  disabled,
  label,
  name,
  value,
  icon
}) => {

  useEffect(() => {
    if (defaultChecked) {
      onChange(radioValue);
    }
  }, [defaultChecked, onChange, radioValue]);

  const RadioButtonClass = classNames({
    'radio-btnIcons': true,
    disabled,
  });
  
  const handleChange = () => {
    onChange(radioValue);
  };

    return (
      <label
        className={`${RadioButtonClass}${className ? ` radio-btnIcons--${className}` : ''}`}
      >
        <input
          className="radio-btnIcons__radio"
          name={name}
          type="radio"
          onChange={handleChange}
          checked={value === radioValue}
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
};

const renderRadioButtonField:React.FC<RadioFieldProps> = (props) => {
  const {
    input, label, defaultChecked, disabled, className, radioValue, icon,
  } = props;
  return (
    <RadioButtonField
      {...input}
      label={label}
      defaultChecked={defaultChecked}
      disabled={disabled}
      radioValue={radioValue}
      className={className}
      icon={icon}
    />
  );
};


export default renderRadioButtonField;
