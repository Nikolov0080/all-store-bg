import React from 'react'
import style from './dds.module.css';
import { Form } from 'react-bootstrap';

const Dropdown = ({ name, reg, placeholder ,label}) => {
    return (
        <div>
            <Form.Label>Select Condition</Form.Label>
            <Form.Control
                className={style.drop}
                as="select"
                name={name}
                ref={reg}
                placeholder={placeholder}
            >
                <option>Brand new</option>
                <option>Used - like new</option>
                <option>Used</option>
            </Form.Control>
        </div>
    )
}

export default Dropdown;