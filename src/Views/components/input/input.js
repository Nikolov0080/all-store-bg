import React from 'react'
import style from './input.module.css';

const Input = ({ name, reg, placeholder, type }) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                ref={reg}
                className={style.inputSize}
                
            />
        </div>
    )
}

export default Input;