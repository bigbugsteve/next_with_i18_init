import React from 'react'

interface Props {
    buttonName: string,
    onClick: (value: any) => void,
    classes?: string,
    disabled?: boolean
}
const Button = ({buttonName, onClick, classes, disabled}: Props) => {
    return (
        <div className={`button ${classes} ${disabled && 'disabled'}`} onClick={onClick}>
            {buttonName}
        </div>
    )
}

export default Button
