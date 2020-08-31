import React from 'react'
import { Card } from 'react-bootstrap';
const Footer = (props) => {
    return (
        <div >
            <Card>
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
