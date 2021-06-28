// @ts-ignore
import React, { useEffect } from "react";
import CheckIcon from "mdi-react/CheckIcon";
import CloseIcon from "mdi-react/CloseIcon";
import classNames from "classnames";

type CheckBoxProps = {
    onChange: any;
    name: string;
    disabled?: boolean;
    defaultChecked?: boolean;
    value?: boolean;
    label: any;
    className?: string;
    [key: string]: unknown;
};

type CheckBoxField = {
    label: any;
    defaultChecked?: boolean;
    disabled?: boolean;
    className: string;
    input: any;
    meta: any;
};

const CheckBoxField: React.FC<CheckBoxProps> = ({
    onChange,
    defaultChecked,
    disabled,
    className,
    name,
    value,
    label,
}) => {
    useEffect(() => {
        onChange(defaultChecked);
    }, [onChange, defaultChecked]);

    const CheckboxClass = classNames({
        "checkbox-btn": true,
        disabled,
    });
    return (
        <label
            className={`${CheckboxClass} ${className ? ` checkbox-btn--${className}` : ""}`}
            htmlFor={name}
        >
            <input
                className="checkbox-btn__checkbox"
                type="checkbox"
                id={name}
                name={name}
                onChange={onChange}
                checked={value}
                disabled={disabled}
            />
            <span className="checkbox-btn__checkbox-custom">
                <CheckIcon />
            </span>
            {className === "button" ?
                <span className="checkbox-btn__label-svg">
                    <CheckIcon className="checkbox-btn__label-check" />
                    <CloseIcon className="checkbox-btn__label-uncheck" />
                </span>
            : null
            }
            <span className="checkbox-btn__label">{label}</span>
        </label>
    );
};

const renderCheckBoxField: React.FC<CheckBoxField> = ({
    input,
    label,
    defaultChecked,
    disabled,
    className,
    meta,
}) => {
    return (
        <div className="anyád">
            <CheckBoxField
                {...input}
                label={label}
                defaultChecked={defaultChecked}
                disabled={disabled}
                className={className}
            />
            {meta.touched && meta.error && 
                <div className="form__form-group-error-chkbox">
                    {meta.error}
                </div>
            }
        </div>
    );
};

export default renderCheckBoxField;
