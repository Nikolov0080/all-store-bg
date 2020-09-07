import React from 'react'

const ErrMsg = ({msg}) => {
    return (
        <div>
              <p style={{color:"red"}}>
            {msg}
        </p>
        </div>
    )
}

export default ErrMsg;