import React from 'react'
import { Button } from 'react-bootstrap';

const ButtonDynamic = ({ text }) => {

    const [btnStyle, setBtnStyle] = useState({
        variant: "success",
        disabled: false,
        text: "Confirm received"
    });


    const complete = () => {
        setBtnStyle({
            variant: "disabled",
            disabled: true,
            text: "loading..."
        })
    }

    return (
        <div>
            <Button
             onClick={complete}
             disabled={btnStyle.disabled}
             variant={btnStyle.variant}
             >

                 {btnStyle.text}

             </Button>
        </div>
    )
}

export default ButtonDynamic
