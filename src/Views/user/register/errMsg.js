import React from 'react'

const ErrMsg = ({msg}) => {
    return (
        <div>
              <p style={{color:"red",background:"white"}}>
            {msg}
        </p>
        </div>
    )
}

export default ErrMsg;