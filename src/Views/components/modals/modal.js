import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({ delFunc, id, text }) => {

    const [show, setShow] = useState(false);

    const handleClose = (del) => {

        del === true ? delFunc(id) :setShow(false);

        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <div >
            <>
                <Button style={{ width: "100%" }} variant="danger" onClick={handleShow}>
                    Delete
                 </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure you want to delete this Product?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Once deleted the product cannot be restored!!!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleClose(false)}>
                            Cancel
                       </Button>
                        <Button variant="danger" onClick={() => handleClose(true)}>
                            Confirm
                      </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default DeleteModal;