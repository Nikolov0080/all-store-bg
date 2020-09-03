import React from 'react'
import { Card } from 'react-bootstrap';
import  style from './footer.module.css';

const Footer = (props) => {
    return (
        <div >
            <Card className={style.footer}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Footer
