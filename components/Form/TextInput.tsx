import React from 'react'
import { useTranslation } from 'react-i18next'

type InputField = {
    label: string,
    name: string,
    placeholder: string
}


const TextInput = ({label, name, placeholder}: InputField) => {
    return (
        <label htmlFor={name} className="mb-4">
            <span 
                className="textinput__label">
                {label}*
            </span>      
            <input 
                className="textinput"
                type="text"
                id={name}
                name={name}
                placeholder={name}
                >
                {/* {label} */}
            </input>      
        </label>
    )
}

export default TextInput
