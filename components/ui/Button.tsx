import React from 'react'

interface Props {
    buttonName: string,
    onClick: (value: any) => void,
    classes?: string
}
const Button = ({buttonName, onClick, classes}: Props) => {
    return (
        <div className={`button ${classes}`} onClick={onClick}>
            {buttonName}
        </div>
    )
}

export default Button
