import React from "react";

type TextFieldProps = {
    input?: any;
    meta?: any;
    placeholder?: string;
    className?: string;
    id?: any;
    type?: any;
    disabled?: boolean;
};

const renderTextField: React.FC<TextFieldProps> = ({
    input,
    placeholder,
    id,
    type,
    className,
    meta,
    disabled,
}) => (
    <div
        className={
            meta.touched && meta.error
                ? "form__form-group-input-wrap form__form-group-input-wrap--error form__form-group-input-wrap-haserror"
                : "form__form-group-input-wrap form__form-group-input-wrap--error"
        }
    >
        <input
            {...input}
            autoComplete="off"
            className={className}
            placeholder={placeholder}
            type={type}
            id={id}
            disabled={disabled}
        />
        {meta.touched && meta.error && (
            <span className="form__form-group-error">{meta.error}</span>
        )}
    </div>
);

export default renderTextField;
