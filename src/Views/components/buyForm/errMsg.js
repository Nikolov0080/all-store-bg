import React from 'react'

const ErrMsg = ({message}) => {
    return (
        <div>
            <p style={{color:"red"}}>{message}</p>
        </div>
    )
}

export default ErrMsg;