import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

const CompleteModal = ({ func, complete }) => {

    const [show, setShow] = useState(false);

    const handleClose = (del) => {
        del === true ? complete()  :setShow(false);

        del === true ? func()  :setShow(false);

        setShow(false)
    };

    const handleShow = () => setShow(true);

    return (
        <div >
            <>
                <Button style={{ width: "100%" }} variant="success" onClick={handleShow}>
                    Confirm received
                 </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure you want to continue?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => handleClose(false)}>
                            Cancel
                       </Button>
                        <Button variant="success" onClick={() => handleClose(true)}>
                            Confirm
                      </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default CompleteModal;