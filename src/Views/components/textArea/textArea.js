import React from 'react'
import style from './textArea.module.css';

const TextArea = ({ name, reg, placeholder, type }) => {
    return (
        <div>
            <textarea
                type={type}
                name={name}
                placeholder={placeholder}
                ref={reg}
                className={style.area}
            />
        </div>
    )
}

export default TextArea;