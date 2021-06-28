import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { isMobileOnly } from "react-device-detect";

const DatePickerField = ({
    onChange,
    placeholder,
    minDate,
    maxDate,
    disabled,
    ...props
}) => {
    const [startDate, setStartDate] = useState(null);
    const handleChange = (date) => {
        setStartDate(date);
        onChange(date);
    };

    return (
        <div className="date-picker">
            <DatePicker
                className="form__form-group-datepicker"
                placeholder={placeholder}
                selected={props.value}
                onChange={handleChange}
                dropDownMode="select"
                popperPlacement="center"
                withPortal={isMobileOnly}
                dateFormat="dd/MM/yyyy"
                placeholderText={placeholder}
                showMonthDropdown
                showYearDropdown
                scrollableYearDropdown
                clearable={false}
                minDate={minDate}
                maxDate={maxDate}
                disabled={disabled}
            />
        </div>
    );
};

const renderDatePickerField = ({ input, meta, maxDate }) => {
    return (
        <div
            className={`form__form-group-input-wrap--error ${
                meta.touched && meta.error && "error"
            }`}
        >
            <DatePickerField {...input} maxDate={maxDate} />
            {meta.touched && meta.error && (
                <div className="form__form-group-error-chkbox datepicker__error-message">
                    {meta.error}
                </div>
            )}
        </div>
    );
};

export default renderDatePickerField;
