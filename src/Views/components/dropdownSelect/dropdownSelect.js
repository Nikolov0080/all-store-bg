import React from 'react'
import style from './dds.module.css';
import { Form } from 'react-bootstrap';

const Dropdown = ({ name, reg }) => {
    return (
        <div>

            <Form.Control
                className={style.drop}
                as="select"
                name={name}
                ref={reg}
            >
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
            </Form.Control>
        </div>
    )
}

export default Dropdown;